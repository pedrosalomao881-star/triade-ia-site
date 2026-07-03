'use client'

import { useState, useEffect } from 'react'

export default function RecursosPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [plano, setPlano] = useState<'mensal' | 'semestral' | 'anual' | null>(null)

  useEffect(() => {
    // Verifica autenticação e acesso do usuário
    const checkAccess = async () => {
      try {
        // Simular verificação (integrar com Supabase/Cakto)
        const storedUser = localStorage.getItem('creditOS_user')
        if (storedUser) {
          const userData = JSON.parse(storedUser)
          setUser(userData)
          setPlano(userData.plano)
        }
      } catch (error) {
        console.error('Erro ao verificar acesso:', error)
      } finally {
        setLoading(false)
      }
    }

    checkAccess()
  }, [])

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0a', color: '#f5f5f5' }}>
        <p>Carregando recursos...</p>
      </div>
    )
  }

  if (!user || !plano || (plano === 'mensal')) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0a', color: '#f5f5f5', padding: '24px' }}>
        <div style={{ maxWidth: '600px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 900, marginBottom: '20px', color: '#ef4444' }}>Acesso Restrito</h1>
          <p style={{ fontSize: '18px', color: '#b4b8c0', marginBottom: '32px', lineHeight: '1.6' }}>
            Os recursos de download (Planilha Excel, Checklist, Templates) estão disponíveis apenas para assinantes dos planos <strong>Semestral</strong> ou <strong>Anual</strong>.
          </p>
          <a href="/creditOS/saldo-credor/" style={{ display: 'inline-block', padding: '14px 32px', background: '#6366f1', color: '#fff', textDecoration: 'none', borderRadius: '8px', fontWeight: 700, fontSize: '16px' }}>
            Fazer upgrade do plano
          </a>
        </div>
      </div>
    )
  }

  // Usuário tem acesso
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#f5f5f5', padding: '60px 24px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 900, marginBottom: '16px', color: '#fff' }}>Meus Recursos</h1>
        <p style={{ fontSize: '16px', color: '#b4b8c0', marginBottom: '40px' }}>Plano ativo: <strong>{plano === 'semestral' ? 'Semestral (R$ 147/6 meses)' : 'Anual (R$ 277/ano)'}</strong></p>

        <div style={{ display: 'grid', gap: '24px' }}>
          {/* PLANILHA EXCEL */}
          <div style={{ background: '#111111', border: '1px solid #242424', borderRadius: '10px', padding: '28px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#10b981', marginBottom: '12px' }}>📊 Planilha de Cálculo</h2>
            <p style={{ fontSize: '15px', color: '#b4b8c0', marginBottom: '20px', lineHeight: '1.6' }}>
              Planilha interativa em Excel para calcular seus créditos tributários de PIS, COFINS e ICMS. Inclui fórmulas prontas para análise de essencialidade e estimativa de recuperação.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="/api/download/creditOS-planilha-calculos.xlsx" download style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 20px', background: '#10b981', color: '#fff', textDecoration: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '14px' }}>
                ⬇️ Baixar Excel
              </a>
              <span style={{ display: 'inline-block', padding: '12px 16px', background: 'rgba(16,185,129,.1)', color: '#10b981', borderRadius: '6px', fontSize: '13px', fontWeight: 600 }}>v1.2 • 256 KB</span>
            </div>
          </div>

          {/* CHECKLIST */}
          <div style={{ background: '#111111', border: '1px solid #242424', borderRadius: '10px', padding: '28px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#818cf8', marginBottom: '12px' }}>✅ Checklist de Ação</h2>
            <p style={{ fontSize: '15px', color: '#b4b8c0', marginBottom: '20px', lineHeight: '1.6' }}>
              Passo-a-passo com 5 etapas para formalizar seu crédito tributário junto à Receita Federal. Inclui prazos, documentos necessários e templat de email.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="/api/download/creditOS-checklist-5-passos.pdf" download style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 20px', background: '#6366f1', color: '#fff', textDecoration: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '14px' }}>
                ⬇️ Baixar PDF
              </a>
              <span style={{ display: 'inline-block', padding: '12px 16px', background: 'rgba(99,102,241,.1)', color: '#818cf8', borderRadius: '6px', fontSize: '13px', fontWeight: 600 }}>v1.0 • 340 KB</span>
            </div>
          </div>

          {/* MODELO DE EMAIL */}
          <div style={{ background: '#111111', border: '1px solid #242424', borderRadius: '10px', padding: '28px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#f59e0b', marginBottom: '12px' }}>📧 Modelo de Email</h2>
            <p style={{ fontSize: '15px', color: '#b4b8c0', marginBottom: '20px', lineHeight: '1.6' }}>
              Email profissional pronto para enviar à Receita Federal com seu pedido de homologação de crédito. Adaptável conforme seu caso.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="/api/download/creditOS-email-receita-federal.docx" download style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 20px', background: '#f59e0b', color: '#000', textDecoration: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '14px' }}>
                ⬇️ Baixar Word
              </a>
              <span style={{ display: 'inline-block', padding: '12px 16px', background: 'rgba(245,158,11,.1)', color: '#f59e0b', borderRadius: '6px', fontSize: '13px', fontWeight: 600 }}>v1.1 • 28 KB</span>
            </div>
          </div>

          {/* JURISPRUDÊNCIA */}
          <div style={{ background: '#111111', border: '1px solid #242424', borderRadius: '10px', padding: '28px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#ef4444', marginBottom: '12px' }}>⚖️ Jurisprudência STJ Tema 779</h2>
            <p style={{ fontSize: '15px', color: '#b4b8c0', marginBottom: '20px', lineHeight: '1.6' }}>
              Resumo executivo da decisão do Superior Tribunal de Justiça que define quais despesas geram crédito tributário válido.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="/api/download/creditOS-stjr1221170-tema779.pdf" download style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 20px', background: '#ef4444', color: '#fff', textDecoration: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '14px' }}>
                ⬇️ Baixar PDF
              </a>
              <span style={{ display: 'inline-block', padding: '12px 16px', background: 'rgba(239,68,68,.1)', color: '#ef4444', borderRadius: '6px', fontSize: '13px', fontWeight: 600 }}>v2.0 • 512 KB</span>
            </div>
          </div>
        </div>

        {/* RODAPÉ INFO */}
        <div style={{ marginTop: '60px', padding: '24px', background: 'rgba(99,102,241,.08)', border: '1px solid rgba(99,102,241,.2)', borderRadius: '10px', textAlign: 'center' }}>
          <p style={{ fontSize: '13px', color: '#818cf8', margin: 0 }}>
            💡 Todos os recursos estão protegidos e disponíveis apenas para usuários autenticados. Sua privacidade e segurança são nossa prioridade.
          </p>
        </div>
      </div>
    </div>
  )
}
