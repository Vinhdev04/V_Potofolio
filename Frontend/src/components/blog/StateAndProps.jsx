import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
};

/* ── Inline SVG icons ─── */
const IconZap = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const IconDatabase = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);
const IconBox = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
);
const IconFile = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
  </svg>
);
const IconLayers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
  </svg>
);
const IconArrowDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <circle cx="12" cy="12" r="10"/><polyline points="8 12 12 16 16 12"/><line x1="12" y1="8" x2="12" y2="16"/>
  </svg>
);
const IconArrowUp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <circle cx="12" cy="12" r="10"/><polyline points="16 12 12 8 8 12"/><line x1="12" y1="16" x2="12" y2="8"/>
  </svg>
);
const IconArrowUpSm = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <polyline points="18 15 12 9 6 15"/>
  </svg>
);

/* ── Interactive Demo ─────────────────── */
function InteractiveDemo() {
  const [count, setCount] = useState(0);

  const btnBase = {
    border: 'none', color: 'white', padding: '10px 18px', borderRadius: 10,
    fontWeight: 600, cursor: 'pointer', fontFamily: 'Inter,sans-serif',
    transition: 'background 0.2s', display: 'flex', alignItems: 'center', gap: 6,
  };

  return (
    <div style={{ background: '#0f1829', border: '1px solid rgba(148,163,184,0.12)', borderRadius: 24, padding: '36px 28px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'stretch', justifyContent: 'center' }}>

        {/* Parent */}
        <div style={{ flex: '1 1 250px', background: '#1e2d45', borderRadius: 18, border: '1px solid rgba(148,163,184,0.12)', padding: '24px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg,#a855f7,#9333ea)' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <span style={{ fontWeight: 700 }}>Parent Component</span>
            <span style={{ fontSize: '0.7rem', fontFamily: "'Fira Code',monospace", background: '#0f172a', color: '#c084fc', padding: '3px 8px', borderRadius: 6 }}>Quản lý State</span>
          </div>
          <div style={{ background: '#0f172a', borderRadius: 14, padding: '18px', marginBottom: 16, textAlign: 'center' }}>
            <p style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: 8 }}>Current State (Sổ tay của Cha)</p>
            <p style={{ fontSize: '3rem', fontWeight: 800, color: '#c084fc', lineHeight: 1 }}>{count}</p>
          </div>
          <div style={{ fontFamily: "'Fira Code',monospace", fontSize: '0.8rem', lineHeight: 1.9 }}>
            <span style={{ color: '#38bdf8' }}>&lt;Child</span><br />
            <span style={{ color: '#94a3b8', paddingLeft: 16 }}>count=<span style={{ color: '#fbbf24' }}>{'{state.count}'}</span></span><br />
            <span style={{ color: '#94a3b8', paddingLeft: 16 }}>onIncrement=<span style={{ color: '#fbbf24' }}>{'{handleFn}'}</span></span><br />
            <span style={{ color: '#38bdf8' }}>/&gt;</span>
          </div>
        </div>

        {/* Arrows */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
          <div style={{ color: '#22d3ee' }}><IconArrowDown /></div>
          <div style={{ color: '#a855f7' }}><IconArrowUp /></div>
        </div>

        {/* Child */}
        <div style={{ flex: '1 1 250px', background: '#1e2d45', borderRadius: 18, border: '1px solid rgba(148,163,184,0.12)', padding: '24px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg,#22d3ee,#38bdf8)' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <span style={{ fontWeight: 700 }}>Child Component</span>
            <span style={{ fontSize: '0.7rem', fontFamily: "'Fira Code',monospace", background: '#0f172a', color: '#22d3ee', padding: '3px 8px', borderRadius: 6 }}>Nhận Props</span>
          </div>
          <div style={{ background: '#0f172a', borderRadius: 14, padding: '18px', marginBottom: 20, textAlign: 'center' }}>
            <p style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: 8 }}>Received Props (Mệnh lệnh từ Cha)</p>
            <p style={{ fontSize: '3rem', fontWeight: 800, color: '#22d3ee', lineHeight: 1 }}>{count}</p>
          </div>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{ ...btnBase, background: '#7c3aed' }}
              onClick={() => setCount(c => c + 1)}
              onMouseEnter={e => e.currentTarget.style.background = '#9333ea'}
              onMouseLeave={e => e.currentTarget.style.background = '#7c3aed'}
            >
              <IconArrowUpSm /> Gửi yêu cầu +1
            </button>
            <button style={{ ...btnBase, background: '#334155' }}
              onClick={() => setCount(0)}
              onMouseEnter={e => e.currentTarget.style.background = '#475569'}
              onMouseLeave={e => e.currentTarget.style.background = '#334155'}
            >Reset</button>
          </div>
          <p style={{ color: '#475569', fontSize: '0.75rem', marginTop: 14, textAlign: 'center', fontStyle: 'italic' }}>
            *Click ở Con → gọi callback của Cha → thay đổi State ở Cha.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Main Component ─────────────────── */
export default function StateAndProps() {
  return (
    <div style={{ fontFamily: "'Inter',sans-serif", color: '#f8fafc', background: '#0a192f', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap');
        .sp-card { transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; }
        .sp-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(0,0,0,0.4) !important; border-color: rgba(99,102,241,0.45) !important; }
      `}</style>

      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40%', height: '40%', background: 'rgba(34,211,238,0.08)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '40%', height: '40%', background: 'rgba(168,85,247,0.08)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px 80px', position: 'relative' }}>

        {/* Header */}
        <motion.header variants={fadeUp} initial="hidden" animate="visible" style={{ textAlign: 'center', marginBottom: 72 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.2)', borderRadius: 99, padding: '6px 18px', marginBottom: 24, fontSize: '0.78rem', fontWeight: 700, color: '#22d3ee', letterSpacing: '0.1em' }}>
            <span style={{ color: '#fbbf24' }}><IconZap /></span> REACT FUNDAMENTALS
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, margin: '0 0 20px', lineHeight: 1.15 }}>
            Giải mã{' '}
            <span style={{ background: 'linear-gradient(135deg,#22d3ee,#a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>State & Props</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#94a3b8', maxWidth: 580, margin: '0 auto', lineHeight: 1.7 }}>
            Khám phá cách dữ liệu được lưu trữ, luân chuyển và quản lý bên trong các Component của React thông qua mô hình trực quan.
          </p>
        </motion.header>

        {/* State vs Props */}
        <motion.section variants={fadeUp} initial="hidden" animate="visible" style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center' }}>
            <span style={{ color: '#a855f7' }}><IconLayers /></span> Sự Khác Biệt Cốt Lõi
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
            {/* Props */}
            <div className="sp-card" style={{ background: '#112240', border: '1px solid rgba(34,211,238,0.15)', borderRadius: 22, padding: '32px', boxShadow: '0 4px 24px rgba(0,0,0,0.3)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: 100, height: 100, background: 'rgba(34,211,238,0.06)', borderRadius: '50%', filter: 'blur(40px)' }} />
              <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, color: '#22d3ee' }}>
                <IconArrowDown />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 6 }}>Props <span style={{ fontSize: '0.85rem', fontWeight: 400, color: '#64748b', marginLeft: 8 }}>(Properties)</span></h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 14, marginTop: 18 }}>
                {[
                  <>Được truyền từ Component <strong style={{ color: '#f8fafc' }}>Cha</strong> xuống Component <strong style={{ color: '#f8fafc' }}>Con</strong>.</>,
                  <><strong style={{ color: '#22d3ee' }}>Read-only</strong>: Con tuyệt đối không được phép chỉnh sửa Props nhận vào.</>,
                  <>Giống như <em>mệnh lệnh từ cấp trên</em> — chỉ có thể nhận và thi hành.</>,
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#22d3ee', flexShrink: 0, marginTop: 7 }} />
                    <p style={{ color: '#94a3b8', lineHeight: 1.65, fontSize: '0.93rem' }}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* State */}
            <div className="sp-card" style={{ background: '#112240', border: '1px solid rgba(168,85,247,0.15)', borderRadius: 22, padding: '32px', boxShadow: '0 4px 24px rgba(0,0,0,0.3)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: 100, height: 100, background: 'rgba(168,85,247,0.06)', borderRadius: '50%', filter: 'blur(40px)' }} />
              <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, color: '#a855f7' }}>
                <IconDatabase />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 6 }}>State <span style={{ fontSize: '0.85rem', fontWeight: 400, color: '#64748b', marginLeft: 8 }}>(Trạng thái)</span></h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 14, marginTop: 18 }}>
                {[
                  <>Được khởi tạo và quản lý <strong style={{ color: '#f8fafc' }}>nội bộ</strong> bên trong chính Component đó.</>,
                  <><strong style={{ color: '#a855f7' }}>Mutable</strong>: Có thể cập nhật bất cứ lúc nào (thường qua <code style={{ fontFamily: "'Fira Code',monospace", color: '#a855f7', background: '#1e293b', padding: '1px 6px', borderRadius: 4 }}>useState</code>).</>,
                  <>Giống như <em>sổ tay ghi chú cá nhân</em> — tự do xóa, sửa và cập nhật.</>,
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#a855f7', flexShrink: 0, marginTop: 7 }} />
                    <p style={{ color: '#94a3b8', lineHeight: 1.65, fontSize: '0.93rem' }}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Data Flow Diagram */}
        <motion.section variants={fadeUp} initial="hidden" animate="visible" style={{ marginBottom: 56 }}>
          <div style={{ background: '#0f1829', border: '1px solid rgba(148,163,184,0.1)', borderRadius: 24, padding: '44px 36px', textAlign: 'center', boxShadow: '0 8px 48px rgba(0,0,0,0.4)' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: 8 }}>Luồng Dữ Liệu Một Chiều</h2>
            <p style={{ color: '#64748b', marginBottom: 40, fontSize: '0.9rem' }}>Top-Down Data Flow / One-Way Binding</p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ border: '2px solid rgba(34,211,238,0.5)', borderRadius: 18, width: 240, padding: '20px 0', background: 'linear-gradient(135deg,#1e293b,#0f172a)', boxShadow: '0 0 20px rgba(34,211,238,0.15)' }}>
                <h4 style={{ fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 12 }}>
                  <span style={{ color: '#22d3ee' }}><IconBox /></span> Component Cha
                </h4>
                <div style={{ background: '#0f172a', borderRadius: 10, padding: '8px 16px', margin: '0 16px', fontFamily: "'Fira Code',monospace", fontSize: '0.8rem', color: '#c084fc', border: '1px solid rgba(148,163,184,0.1)' }}>
                  {'state = { count: 5 }'}
                </div>
              </div>
              <div style={{ display: 'flex', width: 200, height: 80, justifyContent: 'space-between' }}>
                <div style={{ flex: 1, borderRight: '2px dashed rgba(34,211,238,0.3)', position: 'relative' }}>
                  <span style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: 10, fontSize: '0.68rem', color: '#22d3ee', fontWeight: 600, whiteSpace: 'nowrap', background: '#0f1829', padding: '0 4px' }}>Props ↓</span>
                </div>
                <div style={{ flex: 1, borderLeft: '2px dashed rgba(168,85,247,0.3)', position: 'relative' }}>
                  <span style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: 10, fontSize: '0.68rem', color: '#a855f7', fontWeight: 600, whiteSpace: 'nowrap', background: '#0f1829', padding: '0 4px' }}>Callback ↑</span>
                </div>
              </div>
              <div style={{ border: '1px solid rgba(148,163,184,0.15)', borderRadius: 18, width: 240, padding: '20px 0', background: 'linear-gradient(135deg,#1e293b,#0f172a)' }}>
                <h4 style={{ fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 12 }}>
                  <span style={{ color: '#a855f7' }}><IconFile /></span> Component Con
                </h4>
                <div style={{ background: '#0f172a', borderRadius: 10, padding: '8px 16px', margin: '0 16px', fontFamily: "'Fira Code',monospace", fontSize: '0.8rem', color: '#22d3ee', border: '1px solid rgba(148,163,184,0.1)' }}>
                  {'props = { count: 5 }'}
                </div>
              </div>
            </div>
            <div style={{ marginTop: 28, padding: '16px 20px', background: 'rgba(34,211,238,0.05)', border: '1px solid rgba(34,211,238,0.15)', borderRadius: 14, color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7 }}>
              Dữ liệu luôn chảy từ trên xuống (Cha → Con). Nếu Con muốn cập nhật State của Cha, nó phải gọi một{' '}
              <strong style={{ color: '#a855f7' }}>Hàm Callback</strong> do Cha truyền xuống.
            </div>
          </div>
        </motion.section>

        {/* Interactive Demo */}
        <motion.section variants={fadeUp} initial="hidden" animate="visible">
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: 24, textAlign: 'center' }}>Demo Trực Quan</h2>
          <InteractiveDemo />
        </motion.section>

      </div>
    </div>
  );
}
