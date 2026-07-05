import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CreditOS — A Constelação do Seu Dinheiro',
  description: 'Visualização interativa do sistema CreditOS. Explore como funciona a recuperação de créditos tributários.',
};

export default function ConstelaçãoPage() {

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root { --bg: #04040e; --text: #f0f0f0; }
        html { scroll-behavior: smooth; }
        body {
          font-family: 'Inter', system-ui, sans-serif;
          background: var(--bg);
          color: var(--text);
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* ── UNIVERSE CANVAS ── */
        #universe {
          position: fixed; inset: 0;
          width: 100%; height: 100%;
          z-index: 0; pointer-events: none;
        }

        /* ── CONTENT LAYER ── */
        .layer { position: relative; z-index: 1; }

        /* ── HERO ── */
        .hero { text-align: center; padding: 88px 24px 44px; }
        .hero-badge {
          display: inline-block;
          font-size: 10px; font-weight: 700; letter-spacing: .18em;
          text-transform: uppercase; color: #a5b4fc;
          background: rgba(99,102,241,.07);
          border: 1px solid rgba(99,102,241,.18);
          padding: 5px 18px; border-radius: 20px; margin-bottom: 28px;
        }
        .hero-title {
          font-size: clamp(64px, 10vw, 108px);
          font-weight: 800; letter-spacing: -.045em; line-height: 1;
          color: #ede9ff;
          filter: drop-shadow(0 0 50px rgba(157,150,227,.35));
          margin-bottom: 22px;
        }
        .hero-sub {
          font-size: clamp(15px, 2vw, 19px);
          color: #6b7280; max-width: 600px; margin: 0 auto; line-height: 1.75;
          text-wrap: balance;
        }
        .hero-sub + .hero-sub { margin-top: 10px; }
        .hero-sub strong { color: #d1d5db; font-weight: 600; }
        .hero-hint {
          margin-top: 32px; font-size: 13px; color: #374151;
          animation: hblink 2.8s ease-in-out infinite;
        }
        @keyframes hblink { 0%,100%{opacity:.25} 50%{opacity:.85} }

        /* ── LEGEND ── */
        .legend {
          display: flex; justify-content: center; flex-wrap: wrap;
          gap: 16px; padding: 0 24px 28px;
        }
        .leg { display: flex; align-items: center; gap: 7px; font-size: 12px; color: #4b5563; }
        .leg-dot { width: 9px; height: 9px; border-radius: 50%; }

        /* ── SOLAR SYSTEM ── */
        .solar-wrap { max-width: 1040px; margin: 0 auto; padding: 0 12px; }
        #solar { width: 100%; height: auto; display: block; cursor: default; }

        /* ── INFO PANEL ── */
        .info-wrap {
          max-width: 800px; margin: 10px auto 28px;
          padding: 0 24px; min-height: 180px;
        }
        .info-card {
          background: rgba(14,14,32,.92);
          border: 1px solid rgba(255,255,255,.07);
          border-radius: 18px; padding: 28px 32px;
          backdrop-filter: blur(18px);
          opacity: 0; transform: translateY(12px);
          transition: opacity .4s ease, transform .4s ease, border-color .4s;
        }
        .info-card.show { opacity: 1; transform: translateY(0); }
        .info-cat { font-size: 10px; font-weight: 700; letter-spacing: .15em; text-transform: uppercase; margin-bottom: 10px; }
        .info-title { font-size: 22px; font-weight: 700; letter-spacing: -.01em; color: #f0f0f0; margin-bottom: 13px; }
        .info-body { font-size: 14px; line-height: 1.82; color: #6b7280; margin-bottom: 14px; }
        .info-body strong { color: #d1d5db; }
        .info-link { font-size: 12px; color: #374151; font-style: italic; border-top: 1px solid rgba(255,255,255,.055); padding-top: 11px; }
        .info-hint { text-align: center; padding: 46px; font-size: 13px; color: #1f2937; }

        /* ── DIVIDER ── */
        .divider { border: none; border-top: 1px solid rgba(255,255,255,.045); }

        /* ── SECTION ── */
        .section { max-width: 1000px; margin: 0 auto; padding: 76px 24px; }
        .sec-label { font-size: 10px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: #374151; margin-bottom: 12px; }
        .sec-title { font-size: clamp(28px, 4vw, 42px); font-weight: 800; letter-spacing: -.025em; color: #f0f0f0; margin-bottom: 8px; }
        .sec-sub { font-size: 15px; color: #4b5563; margin-bottom: 52px; max-width: 540px; line-height: 1.7; }

        /* ── STEPS ── */
        .steps { display: flex; flex-direction: column; position: relative; }
        .steps::before {
          content: ''; position: absolute; left: 31px; top: 0; bottom: 0; width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(129,140,248,.25) 12%, rgba(129,140,248,.25) 88%, transparent);
        }
        .step {
          display: flex; gap: 26px; align-items: flex-start;
          padding: 30px 0; border-bottom: 1px solid rgba(255,255,255,.035);
        }
        .step:last-child { border-bottom: none; }
        .step-num-wrap { position: relative; width: 62px; height: 62px; flex-shrink: 0; }
        .step-ring-svg { position: absolute; inset: 0; width: 62px; height: 62px; }
        .step-inner {
          position: absolute; inset: 7px; border-radius: 50%;
          background: rgba(99,102,241,.1);
          display: flex; align-items: center; justify-content: center;
          font-size: 18px; font-weight: 800; color: #c7d2fe;
        }
        .step-content { flex: 1; padding-top: 10px; }
        .step-name { font-size: 17px; font-weight: 700; color: #f0f0f0; margin-bottom: 7px; }
        .step-desc { font-size: 14px; color: #6b7280; line-height: 1.78; margin-bottom: 10px; }
        .step-desc strong { color: #9ca3af; }
        .step-tag {
          display: inline-block; font-size: 11px; font-weight: 600; letter-spacing: .04em;
          padding: 4px 12px; border-radius: 20px;
        }

        /* ── EMPRESA GRID ── */
        .emp-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 16px; }
        .emp-card {
          background: rgba(255,255,255,.022);
          border: 1px solid rgba(255,255,255,.06);
          border-radius: 14px; padding: 26px 22px;
          transition: border-color .25s, background .25s;
        }
        .emp-card:hover { border-color: rgba(110,231,183,.28); background: rgba(110,231,183,.03); }
        .emp-icon { margin-bottom: 14px; }
        .emp-name { font-size: 15px; font-weight: 700; color: #f0f0f0; margin-bottom: 6px; }
        .emp-desc { font-size: 13px; color: #4b5563; line-height: 1.65; margin-bottom: 12px; }
        .emp-val { font-size: 13px; font-weight: 600; color: #34d399; }

        /* ── NUMBERS ── */
        .num-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 22px; }
        .num-card {
          border-radius: 20px; padding: 40px 28px 34px; text-align: center;
          position: relative; overflow: hidden;
          border: 1px solid rgba(255,255,255,.05);
          background: rgba(255,255,255,.018);
        }
        .num-pulse {
          position: absolute; inset: -60%; border-radius: 50%; pointer-events: none;
        }
        .num-big {
          font-size: clamp(38px, 5.5vw, 60px);
          font-weight: 800; letter-spacing: -.04em; line-height: 1;
          margin-bottom: 12px; position: relative; z-index: 1;
        }
        .num-label-title { font-size: 14px; font-weight: 600; color: #e2e8f0; margin-bottom: 6px; position: relative; z-index: 1; }
        .num-label-desc { font-size: 13px; color: #374151; line-height: 1.6; position: relative; z-index: 1; }

        @keyframes npulse {
          0%,100% { opacity:.06; transform:scale(.75); }
          50%      { opacity:.18; transform:scale(1.05); }
        }

        /* ── GLOSSÁRIO ── */
        .gloss-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr)); gap: 13px; }
        .gloss-item {
          background: rgba(255,255,255,.018);
          border: 1px solid rgba(255,255,255,.055);
          border-radius: 10px; padding: 17px 20px;
          display: flex; gap: 14px;
        }
        .gloss-badge {
          font-size: 10px; font-weight: 700; letter-spacing: .05em;
          color: #64748b; background: rgba(100,116,139,.1);
          border: 1px solid rgba(100,116,139,.18);
          padding: 4px 8px; border-radius: 6px;
          white-space: nowrap; flex-shrink: 0; height: fit-content; margin-top: 2px;
        }
        .gloss-name { font-size: 14px; font-weight: 600; color: #e2e8f0; margin-bottom: 4px; }
        .gloss-desc { font-size: 13px; color: #374151; line-height: 1.65; }

        /* ── CTA ── */
        .cta {
          text-align: center; padding: 84px 24px 104px;
          background: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(99,102,241,.055) 0%, transparent 100%);
        }
        .cta-title {
          font-size: clamp(28px, 4vw, 44px); font-weight: 800; letter-spacing: -.025em;
          color: #f0f0f0; margin-bottom: 14px;
          max-width: 600px; margin-left: auto; margin-right: auto;
        }
        .cta-sub { font-size: 15px; color: #4b5563; margin-bottom: 36px; }
        .cta-btn {
          display: inline-block; background: #6366f1;
          color: white; font-family: inherit; font-size: 15px; font-weight: 600;
          padding: 17px 44px; border-radius: 50px; border: none;
          cursor: pointer; text-decoration: none;
          box-shadow: 0 0 40px rgba(99,102,241,.35);
          transition: box-shadow .3s, transform .2s;
        }
        .cta-btn:hover { box-shadow: 0 0 64px rgba(99,102,241,.55); transform: translateY(-2px); }
        .cta-note { font-size: 12px; color: #1f2937; margin-top: 14px; }

        footer { border-top: 1px solid rgba(255,255,255,.04); padding: 24px; text-align: center; font-size: 12px; color: #1f2937; }
      `}</style>

      <canvas id="universe"></canvas>

      <div className="layer">
        {/* HERO */}
        <div className="hero">
          <div className="hero-badge">Tecnologia TRÍADE IA · Recuperação de Créditos Tributários</div>
          <h1 className="hero-title">CreditOS</h1>
          <p className="hero-sub">
            Sua empresa tem <strong>dinheiro preso no balanço</strong> que nunca foi resgatado.
          </p>
          <p className="hero-sub">
            O CreditOS encontra, valida e libera — antes que 2027 feche a janela.
          </p>
          <p className="hero-hint">↓ Clique em qualquer planeta para entender o sistema</p>
        </div>

        {/* LEGEND */}
        <div className="legend">
          <div className="leg"><div className="leg-dot" style={{background:'#9d96e3', boxShadow:'0 0 5px #9d96e3'}}></div>O Agente</div>
          <div className="leg"><div className="leg-dot" style={{background:'#f8d87a', boxShadow:'0 0 5px #f8d87a'}}></div>O Problema</div>
          <div className="leg"><div className="leg-dot" style={{background:'#93c5fd', boxShadow:'0 0 5px #93c5fd'}}></div>Como Funciona</div>
          <div className="leg"><div className="leg-dot" style={{background:'#6ee7b7', boxShadow:'0 0 5px #6ee7b7'}}></div>Para Quem</div>
          <div className="leg"><div className="leg-dot" style={{background:'#bef264', boxShadow:'0 0 5px #bef264'}}></div>Resultados</div>
          <div className="leg"><div className="leg-dot" style={{background:'#cbd5e1', boxShadow:'0 0 5px #cbd5e1'}}></div>Conceitos</div>
        </div>

        {/* SOLAR SYSTEM */}
        <div className="solar-wrap">
          <canvas id="solar"></canvas>
        </div>

        {/* INFO PANEL */}
        <div className="info-wrap">
          <div className="info-card" id="info-card">
            <div className="info-hint">Clique em qualquer planeta da constelação para ver a explicação</div>
          </div>
        </div>

        <hr className="divider" />

        {/* STEPS */}
        <div className="section">
          <div className="sec-label">O processo</div>
          <h2 className="sec-title">5 passos. Menos de 1 minuto.</h2>
          <p className="sec-sub">Cada etapa é automática. O contador só assina no final.</p>
          <div className="steps">
            <div className="step">
              <div className="step-num-wrap">
                <svg className="step-ring-svg" viewBox="0 0 62 62">
                  <circle cx="31" cy="31" r="26" fill="none" stroke="rgba(129,140,248,.12)" strokeWidth="1.5"/>
                  <circle cx="31" cy="31" r="26" fill="none" stroke="#818cf8" strokeWidth="1.8"
                    strokeDasharray="22 141" strokeLinecap="round" transform-origin="31 31">
                    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="4s" repeatCount="indefinite"/>
                  </circle>
                </svg>
                <div className="step-inner">1</div>
              </div>
              <div className="step-content">
                <div className="step-name">Lê os documentos da empresa</div>
                <div className="step-desc">O CreditOS recebe três arquivos que toda empresa já tem: <strong>EFD-Contribuições</strong> (registro de impostos), <strong>DCTF</strong> (declaração oficial) e <strong>Razão Contábil</strong> (extrato completo). Como dar três arquivos pro sistema e ele ler tudo automaticamente.</div>
                <span className="step-tag" style={{background:'rgba(99,102,241,.1)',color:'#a5b4fc',border:'1px solid rgba(99,102,241,.2)'}}>~2 segundos</span>
              </div>
            </div>

            <div className="step">
              <div className="step-num-wrap">
                <svg className="step-ring-svg" viewBox="0 0 62 62">
                  <circle cx="31" cy="31" r="26" fill="none" stroke="rgba(129,140,248,.12)" strokeWidth="1.5"/>
                  <circle cx="31" cy="31" r="26" fill="none" stroke="#818cf8" strokeWidth="1.8"
                    strokeDasharray="22 141" strokeLinecap="round" transform-origin="31 31">
                    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="5s" repeatCount="indefinite"/>
                  </circle>
                </svg>
                <div className="step-inner">2</div>
              </div>
              <div className="step-content">
                <div className="step-name">Filtra o que é válido por lei</div>
                <div className="step-desc">Nem toda compra gera crédito. O STJ definiu que só gera crédito o que for <strong>essencial para o negócio</strong>. Papel de impressora: sim. Cerveja da festa: não. O CreditOS aplica esse filtro automaticamente — sem subjetividade, sem risco de contestação.</div>
                <span className="step-tag" style={{background:'rgba(99,102,241,.1)',color:'#a5b4fc',border:'1px solid rgba(99,102,241,.2)'}}>STJ REsp 1.221.170/PR</span>
              </div>
            </div>

            <div className="step">
              <div className="step-num-wrap">
                <svg className="step-ring-svg" viewBox="0 0 62 62">
                  <circle cx="31" cy="31" r="26" fill="none" stroke="rgba(129,140,248,.12)" strokeWidth="1.5"/>
                  <circle cx="31" cy="31" r="26" fill="none" stroke="#818cf8" strokeWidth="1.8"
                    strokeDasharray="22 141" strokeLinecap="round" transform-origin="31 31">
                    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="6s" repeatCount="indefinite"/>
                  </circle>
                </svg>
                <div className="step-inner">3</div>
              </div>
              <div className="step-content">
                <div className="step-name">Calcula a divisão certa</div>
                <div className="step-desc">Para quem exporta, parte do crédito pode virar <strong>dinheiro direto na conta</strong> (ressarcimento). O cálculo exato de proporção — exportação vs. mercado interno — que levaria horas de planilha, é feito em segundos sem risco de erro.</div>
                <span className="step-tag" style={{background:'rgba(99,102,241,.1)',color:'#a5b4fc',border:'1px solid rgba(99,102,241,.2)'}}>Proporcionalidade automática</span>
              </div>
            </div>

            <div className="step">
              <div className="step-num-wrap">
                <svg className="step-ring-svg" viewBox="0 0 62 62">
                  <circle cx="31" cy="31" r="26" fill="none" stroke="rgba(129,140,248,.12)" strokeWidth="1.5"/>
                  <circle cx="31" cy="31" r="26" fill="none" stroke="#818cf8" strokeWidth="1.8"
                    strokeDasharray="22 141" strokeLinecap="round" transform-origin="31 31">
                    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="4.5s" repeatCount="indefinite"/>
                  </circle>
                </svg>
                <div className="step-inner">4</div>
              </div>
              <div className="step-content">
                <div className="step-name">Monta o cronograma com prazos</div>
                <div className="step-desc">Gera um calendário com <strong>quando cada crédito precisa ser protocolado</strong> antes que a Reforma de 2027 mude as regras. Com alertas automáticos. Sem isso, a empresa perde o prazo sem nem perceber — e o crédito desaparece.</div>
                <span className="step-tag" style={{background:'rgba(99,102,241,.1)',color:'#a5b4fc',border:'1px solid rgba(99,102,241,.2)'}}>Alertas automáticos</span>
              </div>
            </div>

            <div className="step">
              <div className="step-num-wrap">
                <svg className="step-ring-svg" viewBox="0 0 62 62">
                  <circle cx="31" cy="31" r="26" fill="none" stroke="rgba(52,211,153,.12)" strokeWidth="1.5"/>
                  <circle cx="31" cy="31" r="26" fill="none" stroke="#34d399" strokeWidth="1.8"
                    strokeDasharray="22 141" strokeLinecap="round" transform-origin="31 31">
                    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="3.5s" repeatCount="indefinite"/>
                  </circle>
                </svg>
                <div className="step-inner" style={{color:'#6ee7b7'}}>5</div>
              </div>
              <div className="step-content">
                <div className="step-name">Entrega o parecer pronto para assinar</div>
                <div className="step-desc">Documento técnico completo com memória de cálculo, fundamentos legais e valores exatos. O contador <strong>assina e protocola</strong> na Receita Federal. Em 30 a 90 dias, o crédito é homologado e vira caixa real.</div>
                <span className="step-tag" style={{background:'rgba(52,211,153,.1)',color:'#34d399',border:'1px solid rgba(52,211,153,.2)'}}>Dinheiro no caixa em 3–6 meses</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="divider" />

        {/* PARA QUEM */}
        <div className="section">
          <div className="sec-label">Para quem</div>
          <h2 className="sec-title">Quem se qualifica</h2>
          <p className="sec-sub">Qualquer empresa que compra insumos, energia ou serviços — e paga imposto nisso — tem crédito para recuperar.</p>
          <div className="emp-grid">
            <div className="emp-card">
              <div className="emp-icon">
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                  <path d="M4 26L8 30H30L34 26H4Z" fill="rgba(52,211,153,.18)" stroke="#34d399" strokeWidth="1.4" strokeLinejoin="round"/>
                  <path d="M13 26V17H25V26" stroke="#34d399" strokeWidth="1.4" strokeLinejoin="round"/>
                  <path d="M19 17V11" stroke="#34d399" strokeWidth="1.4" strokeLinecap="round"/>
                  <path d="M16 14L19 11L22 14" stroke="#34d399" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 22C6 18 10 26 16 22C22 18 26 26 32 22C35 20 36 22 36 22" stroke="rgba(52,211,153,.45)" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="emp-name">Exportadoras</div>
              <div className="emp-desc">Quem exporta tem direito a receber de volta em dinheiro o imposto proporcional ao que foi exportado. A maioria nunca faz esse pedido.</div>
              <div className="emp-val">Crédito típico: R$ 300k – R$ 500k</div>
            </div>

            <div className="emp-card">
              <div className="emp-icon">
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                  <rect x="3" y="20" width="32" height="14" fill="rgba(52,211,153,.1)" stroke="#34d399" strokeWidth="1.4" rx="1"/>
                  <path d="M3 20L11 12V20M11 12L19 6V20M19 6L27 12V20" fill="rgba(52,211,153,.08)" stroke="#34d399" strokeWidth="1.4" strokeLinejoin="round"/>
                  <rect x="8" y="24" width="6" height="10" fill="rgba(52,211,153,.25)" rx="1"/>
                  <rect x="20" y="24" width="6" height="10" fill="rgba(52,211,153,.25)" rx="1"/>
                  <path d="M27 6V14M30 6V14M33 6V14" stroke="rgba(52,211,153,.45)" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="emp-name">Indústrias</div>
              <div className="emp-desc">Alto volume de matéria-prima e insumos com imposto embutido. O acúmulo ao longo dos anos é silencioso e costuma surpreender.</div>
              <div className="emp-val">Crédito típico: R$ 150k – R$ 300k</div>
            </div>

            <div className="emp-card">
              <div className="emp-icon">
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                  <rect x="3" y="28" width="8" height="8" fill="rgba(52,211,153,.2)" rx="1"/>
                  <rect x="15" y="20" width="8" height="16" fill="rgba(52,211,153,.3)" rx="1"/>
                  <rect x="27" y="12" width="8" height="24" fill="rgba(52,211,153,.4)" rx="1"/>
                  <path d="M3 36H35" stroke="#34d399" strokeWidth="1.4" strokeLinecap="round"/>
                  <path d="M7 28L15 20L23 24L31 12" stroke="#6ee7b7" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="7" cy="28" r="1.8" fill="#34d399"/>
                  <circle cx="15" cy="20" r="1.8" fill="#34d399"/>
                  <circle cx="23" cy="24" r="1.8" fill="#34d399"/>
                  <circle cx="31" cy="12" r="1.8" fill="#34d399"/>
                </svg>
              </div>
              <div className="emp-name">Escritórios Contábeis</div>
              <div className="emp-desc">Não têm crédito próprio, mas gerenciam dezenas de clientes que têm. O CreditOS vira um motor de serviço para toda a carteira.</div>
              <div className="emp-val">Nova linha de receita recorrente</div>
            </div>

            <div className="emp-card">
              <div className="emp-icon">
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                  <path d="M21 3L9 21H18L16 35L30 17H21L21 3Z" fill="rgba(52,211,153,.18)" stroke="#34d399" strokeWidth="1.4" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="emp-name">Serviços Profissionais</div>
              <div className="emp-desc">Energia elétrica, aluguel de equipamentos e serviços terceirizados geram crédito que quase nunca é rastreado.</div>
              <div className="emp-val">Crédito típico: R$ 50k – R$ 150k</div>
            </div>
          </div>
        </div>

        <hr className="divider" />

        {/* CTA */}
        <div className="cta">
          <h2 className="cta-title">Seu crédito está dormindo.<br/>A janela está fechando.</h2>
          <p className="cta-sub">O CreditOS recupera o que é seu — antes de 2027.</p>
          <a href="/diagnostico" className="cta-btn">Solicitar diagnóstico gratuito</a>
          <p className="cta-note">Análise preliminar sem custo · Resultado em até 48h</p>
        </div>

        <footer>
          <p>CreditOS · Agente de Recuperação de Créditos Tributários · Tecnologia TRÍADE IA</p>
        </footer>
      </div>

      <script dangerouslySetInnerHTML={{__html: `
(function() {
  const c = document.getElementById('universe');
  const ctx = c.getContext('2d');
  let W, H, stars = [], yOff = 0, xOff = 0, last = 0;

  function resize() {
    const dpr = devicePixelRatio || 1;
    W = window.innerWidth; H = window.innerHeight;
    c.width = W * dpr; c.height = H * dpr;
    c.style.width = W + 'px'; c.style.height = H + 'px';
    ctx.scale(dpr, dpr);
    buildStars();
  }

  function buildStars() {
    stars = [];
    const n = Math.min(340, Math.floor(W * H / 5500));
    for (let i = 0; i < n; i++) {
      const big = Math.random() < .05;
      const med = Math.random() < .22;
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H * 2.2,
        r: big ? Math.random() * 1.6 + 1.2 : med ? Math.random() * .7 + .5 : Math.random() * .35 + .15,
        base: Math.random() * .45 + .08,
        twSpeed: Math.random() * .0018 + .0006,
        twPhase: Math.random() * Math.PI * 2,
        big,
      });
    }
  }

  function frame(ts) {
    const dt = Math.min(ts - last, 40); last = ts;
    yOff += dt * 0.0055;
    xOff += dt * 0.0007;
    ctx.clearRect(0, 0, W, H);

    for (const s of stars) {
      const drawY = ((s.y - yOff) % (H * 2.2) + H * 2.2) % (H * 2.2) - H * .4;
      if (drawY < -8 || drawY > H + 8) continue;
      const drawX = ((s.x - xOff) % (W * 1.6) + W * 1.6) % (W * 1.6) - W * .3;

      const tw = Math.sin(ts * s.twSpeed + s.twPhase);
      const a = s.base * (.55 + tw * .45);

      ctx.beginPath();
      ctx.arc(drawX, drawY, s.r, 0, Math.PI * 2);

      if (s.big) {
        ctx.shadowColor = \`rgba(210,205,255,\${a * .9})\`;
        ctx.shadowBlur = s.r * 5;
        ctx.fillStyle = \`rgba(225,220,255,\${a})\`;
      } else {
        ctx.shadowBlur = 0;
        ctx.fillStyle = \`rgba(190,195,225,\${a})\`;
      }
      ctx.fill();
    }
    ctx.shadowBlur = 0;
    requestAnimationFrame(frame);
  }

  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(frame);
})();

(function() {
  const canvas = document.getElementById('solar');
  const ctx = canvas.getContext('2d');
  const dpr = devicePixelRatio || 1;
  const CW = 1040, CH = 680;
  canvas.width = CW * dpr; canvas.height = CH * dpr;
  canvas.style.width = '100%'; canvas.style.height = 'auto';
  canvas.style.aspectRatio = CW + '/' + CH;
  ctx.scale(dpr, dpr);

  const CX = CW / 2, CY = CH / 2 - 10;
  const HUB_R = 38;

  const CAT = {
    problema:  { fill:'rgba(186, 82, 82, .80)',   glowR:186, glowG:82,  glowB:82  },
    processo:  { fill:'rgba(82, 132, 196, .80)',   glowR:82,  glowG:132, glowB:196 },
    publico:   { fill:'rgba(58, 152, 102, .80)',   glowR:58,  glowG:152, glowB:102 },
    resultado: { fill:'rgba(178, 152, 58, .80)',   glowR:178, glowG:152, glowB:58  },
    glossario: { fill:'rgba(112, 130, 155, .80)',  glowR:112, glowG:130, glowB:155 },
  };

  const D2 = Math.PI * 2;

  const ORBITS = [
    { rx: 152, ry: 100, speed:  2.2e-4 },
    { rx: 242, ry: 162, speed:  1.15e-4 },
    { rx: 328, ry: 215, speed:  7.2e-5 },
    { rx: 404, ry: 255, speed:  4.8e-5 },
  ];

  const planets = [
    { id:'prob',     label:'Crédito',    sub:'Dormindo',    cat:'problema',  o:0, r:13, a0:D2*.05,
      title:'O Crédito Dormindo',
      body:'Cada vez que sua empresa compra matéria-prima, paga energia ou contrata serviço, paga imposto. A lei diz que você pode recuperar parte disso — como um cashback fiscal. O problema: a maioria nunca resgata. O crédito fica "dormindo" no balanço, visível nos números mas inacessível como dinheiro.',
      link:'É o problema raiz. Sem ele, não há por que o CreditOS existir.' },
    { id:'reforma',  label:'Reforma',    sub:'2027',        cat:'problema',  o:0, r:12, a0:D2*.3,
      title:'Reforma Tributária 2027',
      body:'Em 2027 o Brasil muda todo o sistema de impostos. ICMS vira IBS. PIS e COFINS viram CBS. É como trocar o sistema operacional do país. Créditos do sistema antigo precisam ser transferidos — e isso exige comprovação formal. Quem não fizer agora vai pagar muito mais depois.',
      link:'É o prazo real. Transforma o problema do crédito dormindo em urgência imediata.' },
    { id:'barreira', label:'Barreira',   sub:'Probatória',  cat:'problema',  o:0, r:12, a0:D2*.55,
      title:'Barreira Probatória',
      body:'Depois de 2027, quem não homologou antes vai precisar provar retroativamente que o crédito existia. É como provar uma dívida anos depois sem o contrato. O processo exige auditoria externa que custa entre R$ 50k e R$ 100k por empresa — e ainda existe risco de perder tudo.',
      link:'É a consequência de não agir. Conecta o problema com a urgência da Reforma.' },
    { id:'auditoria',label:'Auditoria',  sub:'Manual',      cat:'problema',  o:0, r:12, a0:D2*.8,
      title:'Auditoria Manual — O Custo Invisível',
      body:'Hoje, sem o CreditOS, um contador passa de 4 a 8 horas cruzando XML, PDF e planilhas para encontrar os créditos de uma única empresa. Um escritório com 30 clientes gastaria até 240 horas por ciclo — 6 semanas de trabalho, cheias de risco de erro humano.',
      link:'É o mundo antes do CreditOS. Mostra o antes e torna o depois ainda mais impactante.' },

    { id:'proc',    label:'Processa',   sub:'Docs',        cat:'processo',  o:1, r:11, a0:0,
      title:'Processamento de Documentos',
      body:'O primeiro passo do agente: ele lê automaticamente os três documentos fiscais — EFD-Contribuições (XML), DCTF (PDF) e Razão Contábil (Excel). O cruzamento que um contador faz em horas, o sistema faz em segundos. Sem copiar, sem colar, sem erro de digitação.',
      link:'É o motor de entrada do CreditOS. Tudo começa aqui.' },
    { id:'valid',   label:'Valida',     sub:'por STJ',     cat:'processo',  o:1, r:11, a0:D2*.2,
      title:'Validação por Jurisprudência',
      body:'O STJ definiu que só gera crédito o que for essencial para o negócio. Papel de impressora: sim. Cerveja da festa: não. O CreditOS aplica esse filtro em cada item automaticamente, com base na jurisprudência real — eliminando o risco de incluir créditos inválidos que a Receita contestaria.',
      link:'É o filtro de qualidade. Sem ele, o crédito pode ser recusado e todo o processo vai por água abaixo.' },
    { id:'prop',    label:'Calcula',    sub:'Proporção',   cat:'processo',  o:1, r:11, a0:D2*.4,
      title:'Cálculo de Proporcionalidade',
      body:'Para empresas que exportam, parte do crédito pode ser recebida em dinheiro direto na conta bancária. O CreditOS calcula exatamente qual percentual vai para ressarcimento (dinheiro na conta) e qual vai para compensação (abate de impostos futuros). É o que a maioria das exportadoras nunca calcula.',
      link:'É o diferencial financeiro. Para exportadoras, pode significar centenas de milhares em caixa.' },
    { id:'cron',    label:'Cronograma', sub:'Prazos',      cat:'processo',  o:1, r:11, a0:D2*.6,
      title:'Cronograma de Homologação',
      body:'Gera um calendário com os prazos exatos de cada crédito, levando em conta que a homologação pela Receita leva de 30 a 90 dias após o protocolo. Dispara alertas automáticos. Sem isso, a empresa perde o prazo sem nem perceber — e a Barreira Probatória entra em cena.',
      link:'É o sistema de alerta. Conecta a urgência do prazo com a solução automática.' },
    { id:'parecer', label:'Parecer',    sub:'Técnico',     cat:'processo',  o:1, r:11, a0:D2*.8,
      title:'Parecer Técnico',
      body:'O produto final: documento completo com memória de cálculo, fundamentos legais, valores exatos e cronograma. O contador assina, protocola na Receita Federal e aguarda. É o que transforma todo o processo do CreditOS em resultado concreto.',
      link:'É o entregável. O que o cliente recebe ao contratar o CreditOS.' },

    { id:'export',  label:'Exportadoras', sub:'',          cat:'publico',   o:2, r:13, a0:0,
      title:'Exportadoras',
      body:'Quem vende para o exterior tem vantagem especial: o imposto proporcional às exportações pode ser ressarcido diretamente em dinheiro na conta bancária. A maioria nunca faz esse pedido. Crédito típico acumulado em 3 anos: R$ 300k a R$ 500k.',
      link:'É o perfil de maior valor absoluto. Uma exportadora bem atendida representa centenas de milhares recuperados.' },
    { id:'ind',     label:'Indústrias',   sub:'',          cat:'publico',   o:2, r:13, a0:D2/7,
      title:'Indústrias',
      body:'Fábricas compram matéria-prima, energia, embalagens e insumos — tudo com imposto embutido. Ao longo de anos sem rastreamento, o acúmulo pode chegar facilmente a R$ 200k–300k. Muitas vezes o próprio contador não encontrou porque o processo manual é trabalhoso demais.',
      link:'É o público de alto volume. Cada cliente industrial representa uma oportunidade significativa.' },
    { id:'escrit',  label:'Escritórios',  sub:'',          cat:'publico',   o:2, r:13, a0:D2*2/7,
      title:'Escritórios Contábeis',
      body:'O escritório não tem crédito próprio, mas tem algo melhor: uma carteira inteira de clientes que têm. Com o CreditOS, o escritório oferece recuperação de créditos para toda a carteira sem aumentar equipe — uma nova linha de receita recorrente com honorário sobre o crédito recuperado.',
      link:'É o canal de distribuição. Um escritório bem atendido multiplica o alcance do produto.' },
    { id:'serv',    label:'Serviços',     sub:'',          cat:'publico',   o:2, r:13, a0:D2*3/7,
      title:'Serviços Profissionais',
      body:'Empresas de serviço acham que não têm crédito — e é exatamente por isso que são clientes ideais. Energia elétrica, aluguel de equipamentos, serviços terceirizados: tudo gera crédito de PIS e COFINS que nunca é rastreado. Acumulado em 2 anos, pode facilmente passar de R$ 80k.',
      link:'É o mercado subatendido. Baixo ticket individual, mas volume enorme de potenciais clientes.' },
    { id:'veloc',   label:'8h→1min',     sub:'',          cat:'resultado', o:2, r:13, a0:D2*4/7,
      title:'De 8 Horas para 1 Minuto',
      body:'A auditoria manual que um contador leva 8 horas para fazer, cruzando XML, PDF e Excel na mão — o CreditOS faz em menos de 1 minuto. Para um escritório com 30 clientes, isso reduz 240 horas de trabalho para 30 minutos. A equipe para de auditar e começa a estrategizar.',
      link:'É o impacto operacional. Mostra o que muda concretamente no dia a dia de quem usa o produto.' },
    { id:'valor',   label:'R$500k',      sub:'',          cat:'resultado', o:2, r:13, a0:D2*5/7,
      title:'R$ 50k a R$ 500k por Empresa',
      body:'Esse é o crédito típico que o CreditOS encontra. 70% das empresas brasileiras têm créditos não homologados acumulados. Uma exportadora pode ter R$ 450k dormindo há 3 anos. Uma indústria, R$ 260k em 5 anos. Uma empresa de serviços, R$ 115k em 2 anos.',
      link:'É o impacto financeiro. O número que faz o prospect entender o valor real do produto.' },
    { id:'caixa',   label:'Caixa Real',  sub:'3–6m',      cat:'resultado', o:2, r:13, a0:D2*6/7,
      title:'Caixa Real em 3 a 6 Meses',
      body:'Depois que o CreditOS entrega o parecer e o contador protocola, a homologação leva 30 a 90 dias. Ou seja, quem começa hoje tem o crédito disponível ainda este ano — como abatimento de impostos futuros, ressarcimento em conta bancária, ou venda do crédito para terceiros.',
      link:'É o resultado final. O que o cliente realmente recebe ao contratar o CreditOS.' },

    { id:'efd',   label:'EFD',    sub:'Contribuições', cat:'glossario', o:3, r:9, a0:0,
      title:'EFD-Contribuições',
      body:'O arquivo mensal que a empresa manda ao governo registrando todo imposto pago e devido. O "git log" da contabilidade — cada transação com imposto fica registrada. É de onde o CreditOS extrai os créditos.',
      link:'É a fonte primária. Sem a EFD, não há como calcular o crédito com precisão.' },
    { id:'dctf',  label:'DCTF',   sub:'Declaração',   cat:'glossario', o:3, r:9, a0:D2*.2,
      title:'DCTF — Declaração de Créditos',
      body:'Onde a empresa diz formalmente ao governo: "tenho esse crédito e quero usar assim." Um crédito que existe na EFD mas nunca foi declarado na DCTF é invisível para o governo. O CreditOS detecta exatamente esses créditos esquecidos.',
      link:'É o elo formal entre o crédito que existe e o reconhecimento oficial.' },
    { id:'razao', label:'Razão',  sub:'Contábil',     cat:'glossario', o:3, r:9, a0:D2*.4,
      title:'Razão Contábil',
      body:'O extrato completo de todas as transações, lançamento por lançamento. Confirma que cada compra que gerou crédito realmente aconteceu. O CreditOS usa o Razão para validar que os créditos da EFD são legítimos e juridicamente sólidos.',
      link:'É a camada de validação. EFD + DCTF + Razão formam o triângulo de prova do parecer.' },
    { id:'ativo', label:'Ativo NC', sub:'Não Circ.',  cat:'glossario', o:3, r:9, a0:D2*.6,
      title:'Ativo Não Circulante',
      body:'A seção do balanço onde ficam coisas que não viram caixa rápido: prédios, máquinas — e créditos tributários não homologados. Como ter R$ 200k numa carteira com a senha esquecida. A homologação é a "recuperação da senha" — o CreditOS faz exatamente isso.',
      link:'É onde o crédito dorme. Conecta o problema com a solução.' },
    { id:'ibs',   label:'IBS/CBS', sub:'Pós-Reforma', cat:'glossario', o:3, r:9, a0:D2*.8,
      title:'IBS e CBS — Os Novos Impostos',
      body:'IBS substitui ICMS. CBS substitui PIS e COFINS. Em 2027 o Brasil troca de sistema completamente. Créditos do sistema antigo precisam ser comprovados e portados — é exatamente essa janela que o CreditOS garante que a empresa não perca.',
      link:'É a mudança que cria a urgência. Sem entender IBS/CBS, o cliente não sente o prazo.' },
  ];

  const pById = {};
  planets.forEach(p => pById[p.id] = p);

  let selectedId = null, hoveredId = null;
  const currentPos = {};

  const catName  = { hub:'O Agente', problema:'O Problema', processo:'Como Funciona', publico:'Para Quem', resultado:'Resultado', glossario:'Conceito Fiscal' };
  const catColor = { hub:'#9d96e3', problema:'#f8d87a', processo:'#93c5fd', publico:'#6ee7b7', resultado:'#bef264', glossario:'#94a3b8' };

  const hubData = { id:'hub', cat:'hub', title:'CreditOS — O Agente',
    body:'É o sistema central. Um agente de IA treinado para fazer o que um time de contadores levaria dias — em menos de 1 minuto. Ele lê os documentos fiscais da empresa, filtra o que é válido por lei, calcula os valores e entrega um documento pronto para protocolar.',
    link:'Tudo na constelação orbita o CreditOS. Ele é o ponto de convergência entre o problema, o processo e o resultado.' };

  function getMousePos(e) {
    const rect = canvas.getBoundingClientRect();
    return { mx: (e.clientX - rect.left) * CW / rect.width, my: (e.clientY - rect.top) * CH / rect.height };
  }

  function findPlanet(mx, my) {
    if (Math.hypot(mx - CX, my - CY) < HUB_R + 5) return 'hub';
    for (const p of planets) {
      const pos = currentPos[p.id];
      if (pos && Math.hypot(mx - pos.x, my - pos.y) < p.r + 6) return p.id;
    }
    return null;
  }

  canvas.addEventListener('mousemove', e => {
    const { mx, my } = getMousePos(e);
    hoveredId = findPlanet(mx, my);
    canvas.style.cursor = hoveredId ? 'pointer' : 'default';
  });
  canvas.addEventListener('click', e => {
    const { mx, my } = getMousePos(e);
    const id = findPlanet(mx, my);
    if (id) selectPlanet(id === selectedId ? null : id);
  });

  function selectPlanet(id) {
    selectedId = id;
    const card = document.getElementById('info-card');
    const data = id === 'hub' ? hubData : pById[id];
    if (!data) { card.classList.remove('show'); return; }
    const col = catColor[data.cat] || '#9d96e3';
    card.style.borderColor = col + '28';
    card.innerHTML = \`
      <div class="info-cat" style="color:\${col}">\${catName[data.cat] || 'O Agente'}</div>
      <div class="info-title">\${data.title}</div>
      <div class="info-body">\${data.body}</div>
      <div class="info-link">\${data.link}</div>\`;
    card.classList.remove('show');
    requestAnimationFrame(() => card.classList.add('show'));
    card.scrollIntoView({ behavior:'smooth', block:'nearest' });
  }

  function drawOrbit(rx, ry) {
    ctx.save();
    ctx.setLineDash([2, 11]);
    ctx.strokeStyle = 'rgba(255,255,255,.05)';
    ctx.lineWidth = 0.6;
    ctx.beginPath(); ctx.ellipse(CX, CY, rx, ry, 0, 0, Math.PI*2); ctx.stroke();
    ctx.restore();
  }

  function drawSun(ts) {
    const t = ts * .001;
    for (let i = 0; i < 3; i++) {
      const phase = ((t + i * .85) % 2.5) / 2.5;
      const r = HUB_R + phase * 44;
      const a = .4 * (1 - phase);
      ctx.beginPath(); ctx.arc(CX, CY, r, 0, Math.PI*2);
      ctx.strokeStyle = \`rgba(157,150,227,\${a})\`; ctx.lineWidth = 1.5; ctx.stroke();
    }
    const g = ctx.createRadialGradient(CX, CY, 0, CX, CY, HUB_R * 2.8);
    g.addColorStop(0, 'rgba(148,140,218,.38)'); g.addColorStop(.5, 'rgba(148,140,218,.1)'); g.addColorStop(1, 'rgba(148,140,218,0)');
    ctx.beginPath(); ctx.arc(CX, CY, HUB_R * 2.8, 0, Math.PI*2); ctx.fillStyle = g; ctx.fill();
    ctx.beginPath(); ctx.arc(CX, CY, HUB_R, 0, Math.PI*2);
    ctx.fillStyle = 'rgba(138,130,208,.88)'; ctx.fill();
    if (hoveredId === 'hub' || selectedId === 'hub') {
      ctx.beginPath(); ctx.arc(CX, CY, HUB_R + 4, 0, Math.PI*2);
      ctx.strokeStyle = 'rgba(168,160,240,.75)'; ctx.lineWidth = 1.5; ctx.stroke();
    }
    ctx.textAlign = 'center'; ctx.textBaseline = 'top';
    ctx.font = 'bold 14px Inter, sans-serif';
    ctx.fillStyle = selectedId === 'hub' || hoveredId === 'hub'
      ? 'rgba(240,240,255,.96)' : 'rgba(185,182,230,.9)';
    ctx.fillText('CreditOS', CX, CY + HUB_R + 6);
    ctx.font = '10px Inter, sans-serif';
    ctx.fillStyle = 'rgba(110,106,165,.7)';
    ctx.fillText('O Agente', CX, CY + HUB_R + 22);
  }

  function drawPlanet(p, x, y) {
    const c2 = CAT[p.cat];
    const r = p.r;
    const isSel = selectedId === p.id;
    const isHov = hoveredId === p.id;

    if (isSel || isHov) {
      const glowA = isSel ? .42 : .22;
      const gr = ctx.createRadialGradient(x, y, 0, x, y, r * 3.5);
      gr.addColorStop(0, \`rgba(\${c2.glowR},\${c2.glowG},\${c2.glowB},\${glowA})\`);
      gr.addColorStop(1, \`rgba(\${c2.glowR},\${c2.glowG},\${c2.glowB},0)\`);
      ctx.beginPath(); ctx.arc(x, y, r * 3.5, 0, Math.PI*2);
      ctx.fillStyle = gr; ctx.fill();
    }

    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI*2);
    ctx.fillStyle = c2.fill; ctx.fill();

    if (isSel) {
      ctx.beginPath(); ctx.arc(x, y, r + 4, 0, Math.PI*2);
      ctx.strokeStyle = \`rgba(\${c2.glowR},\${c2.glowG},\${c2.glowB},.8)\`;
      ctx.lineWidth = 1.4; ctx.stroke();
    }

    ctx.textAlign = 'center'; ctx.textBaseline = 'top';
    const ly = y + r + 5;
    ctx.font = \`\${r > 10 ? 11 : 10}px Inter, sans-serif\`;
    ctx.fillStyle = isSel
      ? 'rgba(240,242,255,.95)'
      : 'rgba(168,176,198,.82)';
    ctx.fillText(p.label, x, ly);
    if (p.sub) {
      ctx.font = '9px Inter, sans-serif';
      ctx.fillStyle = 'rgba(96,104,128,.62)';
      ctx.fillText(p.sub, x, ly + 13);
    }
  }

  const drawOrder = ['glossario','resultado','publico','processo','problema'];

  function render(ts) {
    ctx.clearRect(0, 0, CW, CH);
    ORBITS.forEach(o => drawOrbit(o.rx, o.ry));

    planets.forEach(p => {
      const orb = ORBITS[p.o];
      const angle = p.a0 + orb.speed * ts;
      currentPos[p.id] = { x: CX + Math.cos(angle) * orb.rx, y: CY + Math.sin(angle) * orb.ry };
    });

    if (selectedId && selectedId !== 'hub') {
      const sp = currentPos[selectedId];
      if (sp) {
        ctx.save(); ctx.strokeStyle = 'rgba(255,255,255,.16)'; ctx.lineWidth = .8;
        ctx.setLineDash([4, 9]);
        ctx.beginPath(); ctx.moveTo(sp.x, sp.y); ctx.lineTo(CX, CY); ctx.stroke();
        ctx.restore();
      }
    }

    drawSun(ts);
    drawOrder.forEach(cat => planets.filter(p => p.cat === cat).forEach(p => drawPlanet(p, currentPos[p.id].x, currentPos[p.id].y)));
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
  setTimeout(() => selectPlanet('hub'), 900);
})();
`}} />
    </>
  );
}
