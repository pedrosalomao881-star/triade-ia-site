"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Users, TrendingUp, Zap, Clock } from "lucide-react";

interface LeadAdmin {
  id: string;
  nome: string;
  empresa: string;
  setor?: string;
  whatsapp: string;
  email?: string;
  nivelMaturidade?: number;
  source?: string;
  score?: number;
  temperatura?: "quente" | "morno" | "frio";
  createdAt: string;
}

const TEMP_COLORS: Record<string, string> = {
  quente: "bg-red-50 text-red-700 border-red-200",
  morno: "bg-amber-50 text-amber-700 border-amber-200",
  frio: "bg-sky-50 text-sky-700 border-sky-200",
};

export default function Admin() {
  const [secret, setSecret] = useState("");
  const [autenticado, setAutenticado] = useState(false);
  const [leads, setLeads] = useState<LeadAdmin[]>([]);
  const [erro, setErro] = useState("");
  const [filtro, setFiltro] = useState<"todos" | "quente" | "morno" | "frio">("todos");

  async function autenticar() {
    try {
      const res = await fetch("/api/leads", { headers: { "x-admin-secret": secret } });
      if (!res.ok) { setErro("Senha incorreta."); return; }
      const data = await res.json();
      setLeads(data.leads || []);
      setAutenticado(true);
      setErro("");
    } catch {
      setErro("Erro ao conectar.");
    }
  }

  const leadsFiltrados = filtro === "todos" ? leads : leads.filter(l => l.temperatura === filtro);
  const quentes = leads.filter(l => l.temperatura === "quente").length;
  const mornos = leads.filter(l => l.temperatura === "morno").length;
  const frios = leads.filter(l => l.temperatura === "frio").length;

  if (!autenticado) {
    return (
      <div className="min-h-screen bg-paper flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <p className="font-display font-bold text-ink text-2xl mb-2">Painel Admin</p>
          <p className="text-ink-muted text-sm mb-8">TRÍADE IA · Leads e Diagnósticos</p>
          <div className="bg-white border border-paper-border rounded-2xl p-8 shadow-sm">
            <label className="text-xs text-ink-muted uppercase tracking-widest mb-1.5 block">Senha de acesso</label>
            <input
              type="password"
              value={secret}
              onChange={e => setSecret(e.target.value)}
              onKeyDown={e => e.key === "Enter" && autenticar()}
              placeholder="••••••••"
              className="w-full bg-paper-soft border border-paper-border rounded-xl px-4 py-3 text-sm text-ink placeholder:text-ink-muted outline-none focus:border-brand/40 mb-4 transition-colors"
            />
            {erro && <p className="text-red-600 text-xs mb-3">{erro}</p>}
            <button onClick={autenticar} className="w-full bg-brand text-navy font-semibold py-3 rounded-xl text-sm hover:bg-brand-dark transition-colors flex items-center justify-center gap-2">
              Entrar <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper">
      {/* Header */}
      <div className="bg-white border-b border-paper-border px-8 py-5 flex items-center justify-between">
        <div>
          <p className="font-display font-bold text-ink text-lg">Painel TRÍADE IA</p>
          <p className="text-ink-muted text-xs">Leads e Diagnósticos</p>
        </div>
        <span className="text-xs text-ink-muted">{leads.length} leads totais</span>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-10">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Total", valor: leads.length, icon: <Users className="w-4 h-4" />, cor: "text-ink" },
            { label: "Quentes", valor: quentes, icon: <Zap className="w-4 h-4" />, cor: "text-red-600" },
            { label: "Mornos", valor: mornos, icon: <TrendingUp className="w-4 h-4" />, cor: "text-amber-600" },
            { label: "Frios", valor: frios, icon: <Clock className="w-4 h-4" />, cor: "text-sky-600" },
          ].map((s, i) => (
            <div key={i} className="bg-white border border-paper-border rounded-xl p-5 shadow-sm">
              <div className={`flex items-center gap-2 ${s.cor} mb-2`}>{s.icon}<span className="text-xs font-semibold uppercase tracking-widest">{s.label}</span></div>
              <p className="font-display font-bold text-3xl text-ink">{s.valor}</p>
            </div>
          ))}
        </div>

        {/* Filtros */}
        <div className="flex gap-2 mb-6">
          {(["todos", "quente", "morno", "frio"] as const).map(f => (
            <button key={f} onClick={() => setFiltro(f)} className={`text-xs font-semibold px-4 py-1.5 rounded-full border transition-colors capitalize ${filtro === f ? "bg-ink text-paper border-ink" : "bg-white text-ink-muted border-paper-border hover:border-ink-muted"}`}>
              {f}
            </button>
          ))}
        </div>

        {/* Tabela */}
        {leadsFiltrados.length === 0 ? (
          <div className="bg-white border border-paper-border rounded-2xl p-16 text-center shadow-sm">
            <p className="text-ink-muted text-sm">Nenhum lead {filtro !== "todos" ? `${filtro} ` : ""}ainda.</p>
          </div>
        ) : (
          <div className="bg-white border border-paper-border rounded-2xl shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-paper-border bg-paper-soft">
                  {["Nome", "Empresa", "Setor", "WhatsApp", "Nível", "Score", "Temperatura", "Fonte", "Data"].map(h => (
                    <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-ink-muted uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-paper-border">
                {leadsFiltrados.map(l => (
                  <tr key={l.id} className="hover:bg-paper-soft transition-colors">
                    <td className="px-5 py-4 font-medium text-ink whitespace-nowrap">{l.nome}</td>
                    <td className="px-5 py-4 text-ink-soft">{l.empresa || "-"}</td>
                    <td className="px-5 py-4 text-ink-muted text-xs">{l.setor || "-"}</td>
                    <td className="px-5 py-4">
                      <a href={`https://wa.me/${l.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="text-brand hover:text-brand-dark text-xs font-medium">{l.whatsapp}</a>
                    </td>
                    <td className="px-5 py-4 text-center text-ink-soft text-xs">{l.nivelMaturidade ?? "-"}</td>
                    <td className="px-5 py-4 text-center font-bold text-ink">{l.score ?? "-"}</td>
                    <td className="px-5 py-4">
                      {l.temperatura ? (
                        <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border capitalize ${TEMP_COLORS[l.temperatura]}`}>{l.temperatura}</span>
                      ) : "-"}
                    </td>
                    <td className="px-5 py-4 text-ink-muted text-xs">{l.source || "-"}</td>
                    <td className="px-5 py-4 text-ink-muted text-xs whitespace-nowrap">{new Date(l.createdAt).toLocaleDateString("pt-BR")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
