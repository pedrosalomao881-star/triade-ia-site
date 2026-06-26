"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { MessageSquare, X, Send, Loader2, ExternalLink } from "lucide-react";

type Msg = {
  id: string;
  role: "user" | "assistant";
  content: string;
  streaming?: boolean;
};

type ApiMsg = { role: "user" | "assistant"; content: string };

type LeadCapture = {
  temperatura: string;
  nome?: string;
  empresa?: string;
  whatsapp?: string;
  segmento?: string;
};

const PHONE = "556492966118";

function buildAgentWaUrl(lead: LeadCapture): string {
  const parts = ["Olá!"];
  if (lead.nome && lead.empresa) {
    parts.push(`Sou ${lead.nome}, da ${lead.empresa}.`);
  } else if (lead.nome) {
    parts.push(`Me chamo ${lead.nome}.`);
  }
  if (lead.segmento) parts.push(`Atuo no segmento ${lead.segmento}.`);
  parts.push("Acabei de conversar com a Aria e gostaria de continuar o diagnóstico da TRÍADE IA.");
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(parts.join(" "))}`;
}

function uid() {
  return Math.random().toString(36).slice(2);
}

export default function AgentComercial() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [history, setHistory] = useState<ApiMsg[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [leadCapture, setLeadCapture] = useState<LeadCapture | null>(null);
  const [initialized, setInitialized] = useState(false);

  const historyRef = useRef<ApiMsg[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const streamingIdRef = useRef<string | null>(null);

  useEffect(() => {
    historyRef.current = history;
  }, [history]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const streamResponse = useCallback(async (msgs: ApiMsg[]) => {
    setIsStreaming(true);
    const msgId = uid();
    streamingIdRef.current = msgId;

    setMessages((prev) => [
      ...prev,
      { id: msgId, role: "assistant", content: "", streaming: true },
    ]);

    let fullText = "";

    try {
      const res = await fetch("/api/agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: msgs }),
      });

      if (!res.ok || !res.body) throw new Error("Falha na conexão");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const parts = buffer.split("\n\n");
        buffer = parts.pop() ?? "";

        for (const part of parts) {
          if (!part.startsWith("data: ")) continue;
          try {
            const data = JSON.parse(part.slice(6));

            if (data.type === "delta") {
              fullText += data.text;
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === msgId ? { ...m, content: fullText } : m
                )
              );
            } else if (data.type === "lead_captured") {
              setLeadCapture({
                temperatura: data.temperatura,
                nome: data.nome,
                empresa: data.empresa,
                whatsapp: data.whatsapp,
                segmento: data.segmento,
              });
            } else if (data.type === "done") {
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === msgId ? { ...m, streaming: false } : m
                )
              );
              setHistory((prev) => [
                ...prev,
                { role: "assistant", content: fullText },
              ]);
            }
          } catch {
            // ignore malformed event
          }
        }
      }
    } catch {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === msgId
            ? {
                ...m,
                content: "Desculpe, tive um problema de conexão. Pode tentar novamente?",
                streaming: false,
              }
            : m
        )
      );
    } finally {
      setIsStreaming(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen && !initialized) {
      setInitialized(true);
      const initMsg: ApiMsg = { role: "user", content: "iniciar" };
      historyRef.current = [initMsg];
      setHistory([initMsg]);
      streamResponse([initMsg]);
    }
  }, [isOpen, initialized, streamResponse]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSend = useCallback(() => {
    const text = input.trim();
    if (!text || isStreaming) return;

    const userMsg: ApiMsg = { role: "user", content: text };
    const displayId = uid();

    setInput("");
    setMessages((prev) => [
      ...prev,
      { id: displayId, role: "user", content: text },
    ]);

    const updatedHistory = [...historyRef.current, userMsg];
    historyRef.current = updatedHistory;
    setHistory(updatedHistory);
    streamResponse(updatedHistory);
  }, [input, isStreaming, streamResponse]);

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const visibleMessages = messages.filter(
    (m) => !(m.role === "user" && m.content === "iniciar")
  );

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Abrir consultor comercial"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-brand text-navy shadow-lg hover:bg-brand-dark transition-colors flex items-center justify-center"
      >
        {isOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <MessageSquare className="w-5 h-5" />
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-h-[600px] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-navy-card bg-navy">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-navy-soft border-b border-navy-card flex-shrink-0">
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-brand/20 flex items-center justify-center">
                <span className="text-brand font-display font-semibold text-sm">A</span>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-brand rounded-full border-2 border-navy-soft" />
            </div>
            <div>
              <p className="text-sm font-semibold text-ice">Aria</p>
              <p className="text-xs text-mist">Consultora Comercial · TRÍADE IA</p>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0"
            style={{ maxHeight: "420px" }}
          >
            {visibleMessages.length === 0 && (
              <div className="flex items-center justify-center h-20">
                <Loader2 className="w-5 h-5 text-mist animate-spin" />
              </div>
            )}

            {visibleMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-brand text-navy font-medium rounded-br-sm"
                      : "bg-navy-soft text-ice rounded-bl-sm"
                  }`}
                >
                  {msg.content || (msg.streaming && (
                    <span className="inline-flex gap-1 items-center">
                      <span className="w-1.5 h-1.5 bg-mist rounded-full animate-bounce [animation-delay:0ms]" />
                      <span className="w-1.5 h-1.5 bg-mist rounded-full animate-bounce [animation-delay:150ms]" />
                      <span className="w-1.5 h-1.5 bg-mist rounded-full animate-bounce [animation-delay:300ms]" />
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA after lead capture */}
            {leadCapture && !isStreaming && (
              <div className="mt-2">
                <a
                  href={buildAgentWaUrl(leadCapture)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20c05a] text-white text-sm font-semibold rounded-xl transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Continuar no WhatsApp
                </a>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="px-3 py-3 border-t border-navy-card bg-navy-soft flex-shrink-0">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                disabled={isStreaming}
                placeholder={isStreaming ? "Aria está respondendo..." : "Digite sua mensagem..."}
                className="flex-1 bg-navy border border-navy-card rounded-xl px-3.5 py-2.5 text-sm text-ice placeholder:text-ink-muted focus:outline-none focus:border-brand/50 disabled:opacity-50 transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isStreaming}
                className="w-9 h-9 rounded-xl bg-brand text-navy flex items-center justify-center disabled:opacity-40 hover:bg-brand-dark transition-colors flex-shrink-0"
              >
                {isStreaming ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
