import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
};

/* ── Inline SVGs ─────────────────── */
const IconZap = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const IconLayers = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
  </svg>
);
const IconActivity = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);
const IconCheck = ({ size = 32 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);
const IconAlert = ({ size = 32 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
const IconRefresh = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);
const IconDatabase = ({ size = 28 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);
const IconCpu = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" /><rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
  </svg>
);

/* ── Scroll Reveal ─── */
function useScrollReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function RevealCard({ children, delay = 0, style = {} }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(32px)',
      transition: `all 0.9s cubic-bezier(0.4,0,0.2,1) ${delay}ms`, ...style,
    }}>
      {children}
    </div>
  );
}

/* ── Highlight Chip ─── */
function Highlight({ children, gradient = 'linear-gradient(135deg,#6366f1,#a855f7)' }) {
  return (
    <span style={{ position: 'relative', display: 'inline-block', padding: '0 8px', color: '#fff', fontWeight: 600, borderRadius: 6 }}>
      <span style={{ position: 'absolute', inset: 0, background: gradient, opacity: 0.85, zIndex: 0, borderRadius: 6 }} />
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
    </span>
  );
}

/* ── Feature Card ─── */
function FeatureCard({ icon, title, desc, accentColor, delay }) {
  const [hovered, setHovered] = useState(false);
  return (
    <RevealCard delay={delay}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered ? '#1a2845' : '#112240',
          border: `1px solid ${hovered ? accentColor + '80' : 'rgba(148,163,184,0.1)'}`,
          borderRadius: 20, padding: '24px', display: 'flex', gap: 16,
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{
          background: accentColor + '18', border: `1px solid ${accentColor}33`,
          borderRadius: 12, padding: 10, color: accentColor, flexShrink: 0, height: 'fit-content',
          transition: 'background 0.3s',
        }}>
          {icon}
        </div>
        <div>
          <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: 8 }}>{title}</h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.7 }}>{desc}</p>
        </div>
      </div>
    </RevealCard>
  );
}

/* ── Table Row ─── */
function TR({ label, ctxVal, storeVal }) {
  const [hovered, setHovered] = useState(false);
  return (
    <tr onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: hovered ? 'rgba(30,41,59,0.5)' : 'transparent', transition: 'background 0.2s', borderBottom: '1px solid rgba(148,163,184,0.07)' }}>
      <td style={{ padding: '16px 24px', fontWeight: 600, color: '#cbd5e1', fontSize: '0.9rem' }}>{label}</td>
      <td style={{ padding: '16px 24px', color: '#94a3b8', fontSize: '0.9rem' }}>{ctxVal}</td>
      <td style={{ padding: '16px 24px', color: '#94a3b8', fontSize: '0.9rem' }}>{storeVal}</td>
    </tr>
  );
}

/* ── Main ─────────────────────────── */
export default function ContextVsRedux() {
  const [hovered, setHovered] = useState(false);

  const contextCards = [
    { icon: <IconActivity size={24} />, title: 'Tần suất cập nhật thấp', desc: 'Dữ liệu hiếm khi thay đổi. Ví dụ: Theme (Light/Dark), Ngôn ngữ (i18n), Thông tin đăng nhập.', accentColor: '#818cf8', delay: 200 },
    { icon: <IconLayers size={24} />, title: 'State đơn giản', desc: 'Không có logic tính toán phức tạp, không phụ thuộc chéo nhiều lớp. Thường đi kèm useState hoặc useReducer.', accentColor: '#818cf8', delay: 300 },
  ];

  const storeCards = [
    { icon: <IconRefresh size={24} />, title: 'Tần suất cập nhật cao', desc: 'Dữ liệu thay đổi liên tục (Real-time chat, dashboard chứng khoán, form phức tạp). Đòi hỏi UI phản hồi ngay lập tức.', accentColor: '#34d399', delay: 250 },
    { icon: <IconCpu size={24} />, title: 'Fine-grained Reactivity', desc: 'Cơ chế Selectors cho phép component chỉ re-render khi chính xác thuộc tính nó đăng ký thay đổi. Context API hoàn toàn bó tay ở điểm này.', accentColor: '#34d399', delay: 350 },
  ];

  const tableRows = [
    { label: 'Bản chất', ctxVal: 'Prop-drilling avoider', storeVal: 'Global State Manager thực thụ' },
    { label: 'Tần suất update', ctxVal: 'Thấp — Auth, Theme', storeVal: 'Cao — Forms, Real-time' },
    {
      label: 'Tối ưu Re-render',
      ctxVal: <span style={{ color: '#f87171' }}>Kém — tự chia nhỏ context, useMemo</span>,
      storeVal: <span style={{ color: '#34d399' }}>Rất tốt — nhờ Selectors</span>,
    },
    { label: 'Boilerplate code', ctxVal: 'Ít', storeVal: 'Vừa (Zustand) đến Nhiều (Redux)' },
  ];

  return (
    <div style={{ fontFamily: "'Inter',sans-serif", color: '#f8fafc', background: '#0a192f', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap');
        @keyframes ctx-pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
      `}</style>

      {/* bg glows */}
      <div style={{ position: 'fixed', top: '-10%', left: '-10%', width: '40%', height: '40%', background: 'rgba(99,102,241,0.1)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'fixed', bottom: '-10%', right: '-10%', width: '40%', height: '40%', background: 'rgba(16,185,129,0.08)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '60px 24px 80px', position: 'relative', zIndex: 1 }}>

        {/* ── Header ── */}
        <motion.header variants={fadeUp} initial="hidden" animate="visible" style={{ textAlign: 'center', marginBottom: 80 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 18px', borderRadius: 99, background: 'rgba(30,41,59,0.6)', border: '1px solid rgba(148,163,184,0.15)', fontSize: '0.8rem', fontWeight: 600, color: '#818cf8', marginBottom: 24, letterSpacing: '0.05em' }}>
            <span style={{ animation: 'ctx-pulse 2s infinite', color: '#818cf8' }}><IconActivity size={14} /></span>
            KIẾN TRÚC FRONTEND
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1, margin: '0 0 24px' }}>
            <span style={{ background: 'linear-gradient(135deg,#60a5fa,#818cf8,#a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Context API</span>
            <span style={{ color: '#475569', fontSize: '0.7em', margin: '0 16px' }}>vs</span>
            <span style={{ background: 'linear-gradient(135deg,#34d399,#14b8a6,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Redux / Zustand</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: 680, margin: '0 auto', lineHeight: 1.7 }}>
            Giải mã bài toán{' '}
            <Highlight gradient="linear-gradient(135deg,#ef4444,#f97316)">Re-render</Highlight>.
            {' '}Khi nào sự đơn giản là đủ, và khi nào bạn cần một "vũ khí" quản lý state hạng nặng?
          </p>
        </motion.header>

        {/* ── Section 1: The Context Trap ── */}
        <RevealCard delay={0} style={{ marginBottom: 64 }}>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(239,68,68,0.15),rgba(249,115,22,0.1))', borderRadius: 28, filter: 'blur(20px)' }} />
            <div style={{ position: 'relative', background: 'rgba(15,23,42,0.85)', backdropFilter: 'blur(16px)', border: '1px solid rgba(148,163,184,0.1)', borderRadius: 28, padding: '40px 36px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'flex-start' }}>
                {/* Text */}
                <div style={{ flex: '2 1 320px' }}>
                  <h2 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ color: '#f87171' }}><IconAlert size={30} /></span>
                    Cái bẫy của Context API
                  </h2>
                  <p style={{ color: '#94a3b8', lineHeight: 1.75, marginBottom: 20, fontSize: '0.97rem' }}>
                    Bản chất Context API sinh ra để giải quyết{' '}
                    <strong style={{ color: '#f8fafc' }}>Dependency Injection</strong> (truyền dữ liệu không cần prop-drilling), chứ không phải là một State Manager tối ưu.
                  </p>
                  <div style={{ background: 'rgba(127,29,29,0.25)', border: '1px solid rgba(248,113,113,0.25)', borderRadius: 14, padding: '16px 20px' }}>
                    <p style={{ color: '#fca5a5', fontSize: '0.92rem', lineHeight: 1.7 }}>
                      <strong style={{ color: '#f87171' }}>Điểm yếu chí mạng:</strong> Khi <code style={{ fontFamily: "'Fira Code',monospace", color: '#fda4af', background: 'rgba(0,0,0,0.3)', padding: '1px 5px', borderRadius: 4 }}>value</code> của Provider thay đổi,{' '}
                      <strong style={{ textDecoration: 'underline', textDecorationColor: '#f87171', textUnderlineOffset: 4 }}>TẤT CẢ</strong> các component tiêu thụ Context đó bị ép re-render, bất kể chúng có thực sự dùng giá trị vừa thay đổi hay không.
                    </p>
                  </div>
                </div>

                {/* Visualizer */}
                <div
                  style={{ flex: '1 1 200px', background: '#0a192f', border: '1px solid rgba(148,163,184,0.1)', borderRadius: 20, padding: '24px', cursor: 'default' }}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#475569', marginBottom: 16 }}>Hover để xem Re-render</p>
                  <div style={{
                    padding: '14px 12px', borderRadius: 12, textAlign: 'center',
                    fontFamily: "'Fira Code',monospace", fontSize: '0.78rem',
                    border: `1px solid ${hovered ? '#818cf8' : 'rgba(148,163,184,0.15)'}`,
                    background: hovered ? 'rgba(129,140,248,0.12)' : '#1e293b',
                    transition: 'all 0.35s ease', marginBottom: 14,
                  }}>
                    Context.Provider<br />
                    <span style={{ color: '#64748b', fontSize: '0.68rem' }}>(value đổi)</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', margin: '-4px 0' }}>
                    <div style={{ width: 1, height: 24, background: 'rgba(148,163,184,0.2)' }} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                    {['Comp A\n(Dùng Data A)', 'Comp B\n(Dùng Data B)'].map((label, i) => (
                      <div key={i} style={{
                        padding: '12px 8px', borderRadius: 12, textAlign: 'center',
                        fontFamily: "'Fira Code',monospace", fontSize: '0.72rem',
                        border: `1px solid ${hovered ? '#f87171' : 'rgba(148,163,184,0.12)'}`,
                        background: hovered ? 'rgba(248,113,113,0.15)' : '#1e293b',
                        animation: hovered ? 'ctx-pulse 0.7s infinite' : 'none',
                        transition: 'all 0.35s ease',
                      }}>
                        {label.split('\n')[0]}<br />
                        <span style={{ color: '#64748b', fontSize: '0.65rem' }}>{label.split('\n')[1]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealCard>

        {/* ── Section 2 & 3: Two columns ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 40, marginBottom: 64 }}>
          {/* Context side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <RevealCard delay={100}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <span style={{ color: '#818cf8' }}><IconCheck size={28} /></span>
                Khi nào Context là <Highlight>ĐỦ</Highlight>?
              </h2>
            </RevealCard>
            {contextCards.map((c, i) => <FeatureCard key={i} {...c} />)}
          </div>

          {/* Zustand/Redux side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <RevealCard delay={150}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                <span style={{ color: '#34d399' }}><IconZap size={28} /></span>
                Bắt buộc dùng{' '}
                <Highlight gradient="linear-gradient(135deg,#10b981,#14b8a6)">Zustand / Redux</Highlight>
              </h2>
            </RevealCard>
            {storeCards.map((c, i) => <FeatureCard key={i} {...c} />)}
          </div>
        </div>

        {/* ── Section 4: Comparison Table ── */}
        <RevealCard delay={0} style={{ marginBottom: 48 }}>
          <div style={{ background: '#112240', border: '1px solid rgba(148,163,184,0.1)', borderRadius: 24, overflow: 'hidden', boxShadow: '0 8px 48px rgba(0,0,0,0.4)' }}>
            {/* Table header */}
            <div style={{ padding: '24px 28px', background: 'rgba(30,41,59,0.4)', borderBottom: '1px solid rgba(148,163,184,0.1)', display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ color: '#60a5fa' }}><IconDatabase size={24} /></span>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700 }}>Bảng So Sánh Nhanh</h2>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'rgba(15,23,42,0.5)' }}>
                    <th style={{ padding: '14px 24px', textAlign: 'left', color: '#64748b', fontWeight: 600, fontSize: '0.85rem', borderBottom: '1px solid rgba(148,163,184,0.1)' }}>Tiêu chí</th>
                    <th style={{ padding: '14px 24px', textAlign: 'left', color: '#818cf8', fontWeight: 700, fontSize: '0.85rem', borderBottom: '1px solid rgba(148,163,184,0.1)' }}>Context API</th>
                    <th style={{ padding: '14px 24px', textAlign: 'left', color: '#34d399', fontWeight: 700, fontSize: '0.85rem', borderBottom: '1px solid rgba(148,163,184,0.1)' }}>Zustand / Redux</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((r, i) => <TR key={i} {...r} />)}
                </tbody>
              </table>
            </div>
          </div>
        </RevealCard>

        {/* ── Footer ── */}
        <motion.footer variants={fadeUp} initial="hidden" animate="visible" style={{ textAlign: 'center', color: '#475569', fontSize: '0.88rem' }}>
          <p>
            Hiện tại cho đa số dự án,{' '}
            <strong style={{ color: '#34d399' }}>Zustand</strong>{' '}
            đang là "chân ái" vì kết hợp được sự đơn giản của Context và hiệu năng của Redux. 🚀
          </p>
        </motion.footer>

      </div>
    </div>
  );
}
