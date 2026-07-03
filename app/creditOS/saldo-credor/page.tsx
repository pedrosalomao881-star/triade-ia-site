import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'O Dinheiro Que Sua Empresa Está Perdendo — CreditOS · TRÍADE IA',
  description: 'Identifique créditos tributários dormindo no seu balanço. Assinatura CreditOS com 7 agentes IA analisando PIS, COFINS, ICMS automaticamente.',
  robots: { index: true, follow: true },
}

export default function SaldoCredorPage() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#0a0a0a', color: '#f5f5f5', lineHeight: '1.7', fontSize: '16px', paddingBottom: '78px' }}>
      <style>{`
        :root {
          --bg: #0a0a0a; --surface: #111111; --surface2: #181818; --border: #242424; --border2: #2e2e2e;
          --indigo: #6366f1; --indigo-lt: #818cf8; --indigo-dk: #4f46e5;
          --red: #ef4444; --red-lt: #f87171; --red-bg: rgba(239,68,68,.08);
          --amber: #f59e0b; --amber-bg: rgba(245,158,11,.08);
          --emerald: #10b981; --emerald-bg: rgba(16,185,129,.08);
          --text: #f5f5f5; --muted: #8b8f98; --muted2: #b4b8c0;
          --radius: 10px;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', system-ui, sans-serif; background: var(--bg); color: var(--text); }
        a { color: inherit; }
        .wrap { max-width: 760px; margin: 0 auto; padding: 0 24px; }
        .hero { background: radial-gradient(ellipse 90% 60% at 50% -10%, rgba(239,68,68,.14) 0%, transparent 60%), var(--surface); border-bottom: 1px solid var(--border); padding: 64px 24px 52px; text-align: center; }
        .badge { display: inline-flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase; color: var(--red-lt); background: var(--red-bg); border: 1px solid rgba(239,68,68,.3); padding: 6px 14px; border-radius: 20px; margin-bottom: 24px; }
        .hero h1 { font-size: 38px; font-weight: 900; letter-spacing: -.03em; line-height: 1.12; max-width: 640px; margin: 0 auto 18px; }
        .hero h1 em { font-style: normal; color: var(--red-lt); }
        .hero .sub { font-size: 17px; color: var(--muted2); max-width: 560px; margin: 0 auto 32px; }
        .cta-btn { display: inline-flex; align-items: center; justify-content: center; gap: 10px; background: linear-gradient(135deg, var(--indigo) 0%, var(--indigo-dk) 100%); color: #fff; font-weight: 700; font-size: 15.5px; padding: 16px 32px; border-radius: 999px; text-decoration: none; box-shadow: 0 8px 24px rgba(99,102,241,.35); cursor: pointer; border: none; transition: all 0.3s ease; }
        .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(99,102,241,.45); }
        .price-counter { font-size: 32px; font-weight: 900; color: var(--indigo-lt); margin-bottom: 6px; font-variant-numeric: tabular-nums; }
        .price-counter.emerald { color: var(--emerald); }
        section { padding: 48px 24px; border-bottom: 1px solid var(--border); }
        .countdown-intense { border: 2px solid var(--red); border-radius: var(--radius); padding: 40px 24px; background: rgba(239,68,68,.05); text-align: center; max-width: 680px; margin: 0 auto; animation: pulse-countdown 1.5s ease-in-out infinite; }
        @keyframes pulse-countdown { 0%, 100% { box-shadow: 0 0 0 0 rgba(239,68,68,.4); } 50% { box-shadow: 0 0 0 8px rgba(239,68,68,.1); } }
        .countdown-intense .label { font-size: 12px; color: var(--muted2); margin-bottom: 20px; font-weight: 700; text-transform: uppercase; }
        .countdown-intense .time-display { display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 16px; flex-wrap: wrap; }
        .countdown-intense .time-unit { display: flex; flex-direction: column; align-items: center; }
        .countdown-intense .time-value { font-size: 48px; font-weight: 900; color: var(--red-lt); line-height: 1; }
        .countdown-intense .time-label { font-size: 11px; color: var(--muted); margin-top: 6px; text-transform: uppercase; font-weight: 700; }
        .countdown-intense .separator { color: var(--red-lt); font-size: 36px; font-weight: 900; }
        .countdown-intense .deadline { font-size: 12px; color: var(--muted2); font-weight: 700; }
        .explainer-box { background: var(--indigo-dk); border: 1px solid var(--indigo-lt); border-radius: var(--radius); padding: 24px; max-width: 620px; margin: 0 auto 48px; text-align: center; }
        .explainer-box .label { font-size: 12px; color: var(--indigo-lt); font-weight: 700; letter-spacing: .08em; text-transform: uppercase; margin-bottom: 12px; }
        .explainer-box p { font-size: 15px; color: #fff; line-height: 1.6; }
        .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; margin: 48px 0; max-width: 700px; margin-left: auto; margin-right: auto; }
        .pricing-card { border: 1px solid var(--border); border-radius: var(--radius); padding: 24px; background: var(--surface); text-align: center; }
        .pricing-card h3 { font-size: 12px; color: var(--muted); margin-bottom: 20px; text-transform: uppercase; letter-spacing: .08em; font-weight: 700; }
        .pricing-card p { font-size: 14px; color: var(--muted2); margin-bottom: 20px; line-height: 1.5; }
        .pricing-card ul { list-style: none; margin: 0 0 20px; font-size: 13px; color: var(--muted2); text-align: left; }
        .pricing-card li { margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
        .pricing-card li svg { flex-shrink: 0; margin-top: 2px; }
        .pricing-card.featured { border: 2px solid var(--indigo); transform: scale(1.05); position: relative; padding: 28px 24px; }
        .pricing-card.featured .badge-featured { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--indigo); color: white; padding: 5px 16px; border-radius: 12px; font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
        .pricing-card.featured h3 { color: var(--indigo-lt); }
        .pricing-card.featured .price { font-size: 36px; margin-top: 16px; }
        .pricing-card.emerald { border: 2px solid var(--emerald); }
        .pricing-card.emerald h3 { color: var(--emerald); }
        footer { background: var(--surface); border-top: 1px solid var(--border); padding: 40px 24px 30px; text-align: center; }
        footer p { color: var(--muted); font-size: 12.5px; margin-bottom: 6px; max-width: 520px; margin-left: auto; margin-right: auto; }
      `}</style>

      {/* HERO */}
      <div className="hero">
        <div className="wrap">
          <div className="badge">Descubra seus créditos</div>
          <h1>
            Sua empresa está com dinheiro parado no balanço<br />
            <em>— e o governo quer ficar com ele.</em>
          </h1>
          <p className="sub">
            Não é especulação. Não é "pode ser". É dinheiro real que você já pagou em impostos e tem todo direito legal de recuperar. A única coisa te impedindo é tempo e informação. Você tem os dois? Decida agora.
          </p>
        </div>
      </div>

      {/* CONTENT SECTIONS (simplified) */}
      <section style={{ maxWidth: '760px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 900, marginBottom: '20px', color: 'var(--red)' }}>Seu crédito está dormindo</h2>
        <p style={{ color: 'var(--muted2)', marginBottom: '16px' }}>
          Créditos tributários não aparecem no seu extrato bancário. Eles estão espalhados em EFD-Contribuições, DCTF, razão contábil e documentos fiscais. A maioria dorme há 3–5 anos porque ninguém procura sistematicamente.
        </p>
        <p style={{ color: 'var(--muted2)' }}>
          <strong>Seu contador é bom no que faz. Mas isso é fora do escopo dele.</strong> Créditos tributários exigem auditoria especializada, análise de jurisprudência STJ e formalização correta na EFD-Contribuições.
        </p>
      </section>

      {/* EXPLAINER */}
      <section style={{ maxWidth: '760px', margin: '0 auto', paddingTop: '48px' }}>
        <div className="explainer-box">
          <div className="label">O que é Constelação?</div>
          <p>7 agentes IA especializados em tributação. Cada um auditoria um tipo diferente de crédito automaticamente: PIS, COFINS, ICMS, essencialidade, jurisprudência, portabilidade CBS/IBS e documentação. Você envia, eles analisam. Sem cálculos manuais.</p>
        </div>
      </section>

      {/* PRICING */}
      <section style={{ maxWidth: '760px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2 style={{ fontSize: 'clamp(28px, 6vw, 42px)', marginBottom: '24px', lineHeight: '1.15', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto', fontWeight: 900 }}>
            Escolha seu plano
            <span style={{ color: 'var(--red-lt)' }}> e comece agora.</span>
          </h2>
        </div>

        <div className="pricing-grid">
          {/* PLANO 1 */}
          <div className="pricing-card">
            <div className="price-counter" id="price-1">R$ 0,00</div>
            <h3>/mês</h3>
            <p>CreditOS básico. Acesso ao sistema de identificação de créditos.</p>
            <ul>
              <li><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" fill="var(--emerald)"/><path d="M6 8.5L7.5 10l2.5-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>Análise automática de créditos</li>
              <li><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" fill="var(--emerald)"/><path d="M6 8.5L7.5 10l2.5-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>Upload de documentos EFD</li>
              <li><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" fill="var(--emerald)"/><path d="M6 8.5L7.5 10l2.5-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>Relatório de crédito estimado</li>
              <li><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" fill="var(--emerald)"/><path d="M6 8.5L7.5 10l2.5-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>Cancelamento a qualquer momento</li>
            </ul>
            <a href="https://pay.cakto.com.br/3bnea4p_953102" className="cta-btn" style={{ width: '100%', fontSize: '13px', padding: '12px 16px' }}>Assinar Mensal</a>
          </div>

          {/* PLANO 2 - DESTAQUE */}
          <div className="pricing-card featured">
            <div className="badge-featured">Escolha da maioria</div>
            <div className="price-counter" id="price-2" style={{ fontSize: '36px', marginTop: '16px' }}>R$ 0,00</div>
            <h3>/semestre</h3>
            <p>Melhor custo-benefício. Tudo que você precisa para agir.</p>
            <ul>
              <li><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" fill="var(--indigo)"/><path d="M6 8.5L7.5 10l2.5-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>Tudo do plano anterior</li>
              <li><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" fill="var(--indigo)"/><path d="M6 8.5L7.5 10l2.5-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>Planilha de cálculo (Excel download)</li>
              <li><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" fill="var(--indigo)"/><path d="M6 8.5L7.5 10l2.5-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>Suporte por email (48h resposta)</li>
              <li><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" fill="var(--indigo)"/><path d="M6 8.5L7.5 10l2.5-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg><strong>Constelação</strong>: 7 agentes IA tributários</li>
            </ul>
            <a href="https://pay.cakto.com.br/tat5gnh" className="cta-btn" style={{ width: '100%', fontSize: '14px', fontWeight: 700, padding: '14px 16px', background: 'linear-gradient(135deg, var(--indigo) 0%, var(--indigo-dk) 100%)' }}>Assinar Semestral</a>
          </div>

          {/* PLANO 3 */}
          <div className="pricing-card emerald">
            <div className="price-counter emerald" id="price-3">R$ 0,00</div>
            <h3>/ano</h3>
            <p>Acesso completo. Melhor valor anual + suporte prioritário.</p>
            <ul>
              <li><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" fill="var(--emerald)"/><path d="M6 8.5L7.5 10l2.5-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>Tudo dos planos anteriores</li>
              <li><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" fill="var(--emerald)"/><path d="M6 8.5L7.5 10l2.5-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>Suporte prioritário (24h resposta)</li>
              <li><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" fill="var(--emerald)"/><path d="M6 8.5L7.5 10l2.5-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>Atualizações mensais + features novas</li>
              <li><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" fill="var(--emerald)"/><path d="M6 8.5L7.5 10l2.5-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg><strong>Constelação completa</strong>: acesso a todos 7 agentes</li>
            </ul>
            <a href="https://pay.cakto.com.br/33vivx8" className="cta-btn" style={{ width: '100%', fontSize: '14px', fontWeight: 700, padding: '14px 16px', background: 'linear-gradient(135deg, var(--emerald) 0%, #059669 100%)' }}>Assinar Anual</a>
          </div>
        </div>

        {/* COUNTDOWN */}
        <div style={{ marginTop: '80px', textAlign: 'center' }}>
          <div className="countdown-intense" id="countdown-intense">
            <div className="label">Tempo até o prazo final de 31/12/2026</div>
            <div className="time-display">
              <div className="time-unit">
                <div className="time-value" id="countdown-days">000</div>
                <div className="time-label">Dias</div>
              </div>
              <div className="separator">:</div>
              <div className="time-unit">
                <div className="time-value" id="countdown-hours">00</div>
                <div className="time-label">Horas</div>
              </div>
              <div className="separator">:</div>
              <div className="time-unit">
                <div className="time-value" id="countdown-minutes">00</div>
                <div className="time-label">Minutos</div>
              </div>
              <div className="separator">:</div>
              <div className="time-unit">
                <div className="time-value" id="countdown-seconds">00</div>
                <div className="time-label">Segundos</div>
              </div>
            </div>
            <div className="countdown-intense" style={{ border: 'none', background: 'transparent', padding: '0', animation: 'none' }}>
              <div className="deadline">até 31 de dezembro de 2026</div>
            </div>
          </div>
        </div>
      </section>

      <script dangerouslySetInnerHTML={{ __html: `
        // ── COUNTDOWN TIMER ──
        function initCountdown() {
          const elDays = document.getElementById('countdown-days');
          const elHours = document.getElementById('countdown-hours');
          const elMinutes = document.getElementById('countdown-minutes');
          const elSeconds = document.getElementById('countdown-seconds');

          if (!elDays || !elHours || !elMinutes || !elSeconds) {
            setTimeout(initCountdown, 100);
            return;
          }

          const deadline = new Date(2026, 11, 31, 23, 59, 59);

          function updateCountdown() {
            const now = new Date();
            const diff = deadline - now;

            if (diff <= 0) {
              elDays.textContent = '000';
              elHours.textContent = '00';
              elMinutes.textContent = '00';
              elSeconds.textContent = '00';
              return;
            }

            const days = Math.floor(diff / 86400000);
            const hours = Math.floor((diff % 86400000) / 3600000);
            const minutes = Math.floor((diff % 3600000) / 60000);
            const seconds = Math.floor((diff % 60000) / 1000);

            elDays.textContent = String(days).padStart(3, '0');
            elHours.textContent = String(hours).padStart(2, '0');
            elMinutes.textContent = String(minutes).padStart(2, '0');
            elSeconds.textContent = String(seconds).padStart(2, '0');
          }

          updateCountdown();
          setInterval(updateCountdown, 1000);
        }

        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', initCountdown);
        } else {
          initCountdown();
        }

        // ── PRICE COUNTER (ODÔMETRO) ──
        (function() {
          const countersAnimated = {};

          function animatePrice(el) {
            const price = parseFloat(el.getAttribute('data-price'));
            const duration = 1200;
            const start = Date.now();

            function formatPrice(value) {
              if (value >= 1000) {
                return 'R$ ' + Math.round(value / 1000).toLocaleString('pt-BR');
              }
              return 'R$ ' + value.toFixed(2).replace('.', ',');
            }

            function update() {
              const elapsed = Date.now() - start;
              const progress = Math.min(elapsed / duration, 1);
              const easeProgress = 1 - Math.pow(1 - progress, 3);
              const current = price * easeProgress;

              el.textContent = formatPrice(current);

              if (progress < 1) {
                requestAnimationFrame(update);
              } else {
                el.textContent = formatPrice(price);
              }
            }

            update();
          }

          const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
              if (entry.isIntersecting && !countersAnimated[entry.target.id]) {
                countersAnimated[entry.target.id] = true;
                animatePrice(entry.target);
              }
            });
          }, { threshold: 0.5 });

          document.querySelectorAll('[id^="price-"]').forEach(function(el) {
            el.setAttribute('data-price', el.id === 'price-1' ? '97.00' : el.id === 'price-2' ? '147.00' : '277.00');
            observer.observe(el);
          });
        })();
      ` }} />
    </div>
  )
}
