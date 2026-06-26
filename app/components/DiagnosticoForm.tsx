"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { Lead } from "@/types";

const SETORES = [
  "Clínicas e Saúde",
  "Contabilidade",
  "Agronegócio e Cooperativas",
  "Comércio e Supermercados",
  "Imobiliária",
  "Distribuidoras e Indústria",
  "Serviços",
  "Outro",
];

export default function DiagnosticoForm() {
  const [form, setForm] = useState({ nome: "", empresa: "", setor: "", whatsapp: "", email: "" });
  const [enviado, setEnviado] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const lead: Lead = {
      nome: form.nome,
      empresa: form.empresa,
      setor: form.setor || undefined,
      whatsapp: form.whatsapp,
      email: form.email || undefined,
      source: "diagnostico",
    };

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
    } catch {
      // non-blocking
    }

    setEnviado(true);
    const url = buildWhatsAppUrl({ nome: form.nome, empresa: form.empresa, setor: form.setor });
    setTimeout(() => window.open(url, "_blank"), 600);
  }

  if (enviado) {
    return (
      <div className="text-center py-6">
        <CheckCircle2 className="w-10 h-10 text-brand mx-auto mb-4" strokeWidth={1.5} />
        <p className="font-display font-semibold text-ice text-lg mb-2">Perfeito!</p>
        <p className="text-ice/50 text-sm">
          Abrindo o WhatsApp com seu diagnóstico pré-preenchido...
        </p>
      </div>
    );
  }

  const isValid = form.nome.trim() && form.empresa.trim() && form.whatsapp.trim();

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { key: "nome", label: "Nome *", placeholder: "Seu nome", type: "text" },
          { key: "empresa", label: "Empresa *", placeholder: "Nome da empresa", type: "text" },
          { key: "whatsapp", label: "WhatsApp *", placeholder: "(64) 9 9999-9999", type: "tel" },
          { key: "email", label: "E-mail", placeholder: "seu@email.com", type: "email" },
        ].map((f) => (
          <div key={f.key}>
            <label className="text-xs text-ice/35 uppercase tracking-widest mb-1.5 block">
              {f.label}
            </label>
            <input
              type={f.type}
              placeholder={f.placeholder}
              value={form[f.key as keyof typeof form]}
              onChange={(e) => setForm((p) => ({ ...p, [f.key]: e.target.value }))}
              className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-brand/40 rounded-xl px-4 py-3 text-sm text-ice placeholder:text-ice/20 outline-none transition-colors"
            />
          </div>
        ))}
      </div>

      <div>
        <label className="text-xs text-ice/35 uppercase tracking-widest mb-1.5 block">
          Setor da empresa
        </label>
        <select
          value={form.setor}
          onChange={(e) => setForm((p) => ({ ...p, setor: e.target.value }))}
          className="w-full bg-navy-soft border border-white/[0.08] focus:border-brand/40 rounded-xl px-4 py-3 text-sm text-ice outline-none transition-colors"
        >
          <option value="">Selecionar setor</option>
          {SETORES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={!isValid}
        className={`mt-2 w-full flex items-center justify-center gap-2 font-semibold text-sm px-7 py-4 rounded-xl transition-all ${
          isValid
            ? "bg-brand text-navy hover:bg-brand-dark cursor-pointer"
            : "bg-white/[0.04] text-ice/20 cursor-not-allowed"
        }`}
      >
        Solicitar Diagnóstico AI-First
        <ArrowRight className="w-4 h-4" strokeWidth={2} />
      </button>

      <p className="text-center text-xs text-ice/20">
        Gratuito · Sem obrigação · Sem pitch de vendas na sessão
      </p>
    </form>
  );
}
