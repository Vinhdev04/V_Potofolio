import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
};

/* ── Inline SVG icons ─── */
const IconZap = ({ size = 28 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const IconPlay = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);
const IconPaintbrush = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z"/>
    <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"/>
    <path d="M14.5 17.5 4.5 15"/>
  </svg>
);
const IconMonitor = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);
const IconTrash = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
  </svg>
);
const IconAlert = ({ size = 14 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);
const IconCheck = ({ size = 14 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconInfo = ({ size = 14 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
  </svg>
);

/* ── Scroll Reveal ─── */
function Reveal({ children, delay = 0 }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(32px)', transition: `all 0.8s cubic-bezier(0.4,0,0.2,1) ${delay}s` }}>
      {children}
    </div>
  );
}

/* ── Lifecycle Card ─── */
function LifecycleCard({ icon, title, desc, color }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#112240', border: `1px solid ${color}33`, borderRadius: 18,
        padding: '28px 20px', textAlign: 'center', height: '100%',
        transform: hovered ? 'translateY(-5px)' : 'none',
        boxShadow: hovered ? `0 12px 30px ${color}22` : 'none',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      }}
    >
      <div style={{ width: 52, height: 52, borderRadius: '50%', background: `${color}18`, border: `1px solid ${color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color }}>
        {icon}
      </div>
      <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: 10 }}>{title}</h3>
      <p style={{ color: '#64748b', fontSize: '0.86rem', lineHeight: 1.6 }}>{desc}</p>
    </div>
  );
}

/* ── Dependency Row ─── */
function DepRow({ badgeIcon, badgeText, badgeColor, code, bodyHtml }) {
  return (
    <div style={{
      background: `${badgeColor}0a`, border: `1px solid ${badgeColor}33`,
      borderRadius: 18, padding: '28px', display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center',
    }}>
      <div style={{ flex: '1 1 220px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `${badgeColor}22`, border: `1px solid ${badgeColor}44`, borderRadius: 99, padding: '5px 14px', marginBottom: 14, fontSize: '0.78rem', color: badgeColor, fontWeight: 700 }}>
          {badgeIcon} {badgeText}
        </div>
        <div style={{ fontFamily: "'Fira Code',monospace", fontSize: '1rem', fontWeight: 700, color: '#f8fafc' }}>{code}</div>
      </div>
      <div style={{ flex: '2 1 260px', color: '#94a3b8', fontSize: '0.93rem', lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </div>
  );
}

/* ── Main ─────────────────── */
export default function UseEffectGuide() {
  const [count, setCount] = useState(0);
  const [demoText, setDemoText] = useState('Chưa chạy');
  const [glowing, setGlowing] = useState(false);

  useEffect(() => {
    setDemoText('Effect vừa chạy! (Count thay đổi)');
    setGlowing(true);
    const t = setTimeout(() => setGlowing(false), 1200);
    return () => clearTimeout(t);
  }, [count]);

  const steps = [
    { icon: <IconMonitor size={24} />, title: 'Render', desc: 'React tính toán giao diện mới từ State/Props.', color: '#3b82f6' },
    { icon: <IconPaintbrush size={24} />, title: 'Paint', desc: 'Trình duyệt vẽ DOM lên màn hình.', color: '#22d3ee' },
    { icon: <IconTrash size={24} />, title: 'Cleanup', desc: 'Dọn dẹp Effect lần render trước (nếu có).', color: '#fbbf24' },
    { icon: <IconPlay size={24} />, title: 'Run Effect', desc: 'Thực thi hàm callback bên trong useEffect.', color: '#a855f7' },
  ];

  const depRows = [
    { badgeIcon: <IconAlert />, badgeText: 'Không truyền mảng', badgeColor: '#ef4444', code: 'useEffect(() => {...})', bodyHtml: '<strong style="color:#f87171">Nguy hiểm:</strong> Effect sẽ chạy lại <strong>SAU MỖI LẦN</strong> component render. Dễ gây vòng lặp vô hạn nếu cập nhật State bên trong.' },
    { badgeIcon: <IconCheck />, badgeText: 'Mảng rỗng', badgeColor: '#34d399', code: 'useEffect(() => {...}, [])', bodyHtml: '<strong style="color:#34d399">Khởi tạo:</strong> Effect chỉ chạy <strong>MỘT LẦN DUY NHẤT</strong> sau lần render đầu. Hoàn hảo để gọi API, thiết lập Timer hoặc Event Listeners toàn cục.' },
    { badgeIcon: <IconInfo />, badgeText: 'Truyền biến số', badgeColor: '#22d3ee', code: 'useEffect(..., [var])', bodyHtml: '<strong style="color:#22d3ee">Phản ứng:</strong> Chạy lần đầu, rồi <strong>CHỈ CHẠY LẠI</strong> khi giá trị của <code style="font-family:\'Fira Code\',monospace;color:#22d3ee;background:#1e293b;padding:1px 5px;border-radius:4px">var</code> thay đổi. Ideal để re-fetch khi userId đổi.' },
  ];

  return (
    <div style={{ fontFamily: "'Inter',sans-serif", color: '#f8fafc', background: '#0a192f', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap');
      `}</style>

      <div style={{ position: 'fixed', top: '-10%', left: '-10%', width: '40%', height: '40%', background: 'rgba(34,211,238,0.08)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'fixed', bottom: '-10%', right: '-10%', width: '40%', height: '40%', background: 'rgba(168,85,247,0.08)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px 80px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.header variants={fadeUp} initial="hidden" animate="visible" style={{ textAlign: 'center', marginBottom: 72 }}>
          <div style={{ display: 'inline-block', background: '#1e293b', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '50%', padding: 14, marginBottom: 20, color: '#22d3ee' }}>
            <IconZap size={28} />
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, margin: '0 0 20px', lineHeight: 1.15 }}>
            <span style={{ background: 'linear-gradient(135deg,#22d3ee,#3b82f6,#a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Luồng Chạy useEffect
            </span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#94a3b8', maxWidth: 580, margin: '0 auto', lineHeight: 1.7 }}>
            Khám phá bí mật đằng sau hook quan trọng nhất của React. Trực quan hóa vòng đời và sức mạnh của Dependency Array.
          </p>
        </motion.header>

        {/* Section 1 */}
        <Reveal>
          <section style={{ marginBottom: 72 }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 32, textAlign: 'center', paddingBottom: 16, borderBottom: '1px solid rgba(148,163,184,0.1)' }}>
              1. Vòng Đời Thực Thi
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 16 }}>
              {steps.map((s, i) => <LifecycleCard key={i} {...s} />)}
            </div>
          </section>
        </Reveal>

        {/* Section 2 */}
        <Reveal>
          <section style={{ marginBottom: 72 }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 32, textAlign: 'center', paddingBottom: 16, borderBottom: '1px solid rgba(148,163,184,0.1)' }}>
              2. Sức Mạnh Của Mảng Phụ Thuộc
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {depRows.map((r, i) => <DepRow key={i} {...r} />)}
            </div>
          </section>
        </Reveal>

        {/* Section 3: Live Demo */}
        <Reveal>
          <section style={{
            background: '#112240', border: '1px solid rgba(148,163,184,0.12)', borderRadius: 24,
            padding: '44px 36px', textAlign: 'center', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', inset: 0, background: 'rgba(34,211,238,0.06)',
              opacity: glowing ? 1 : 0, transition: 'opacity 0.4s', pointerEvents: 'none', borderRadius: 24,
            }} />
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 6, position: 'relative' }}>
              Thử Nghiệm Trực Tiếp:{' '}
              <code style={{ color: '#22d3ee', fontFamily: "'Fira Code',monospace", background: '#1e293b', padding: '2px 8px', borderRadius: 6 }}>[count]</code>
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: 32 }}>Mỗi lần nhấn nút, useEffect sẽ chạy lại.</p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, position: 'relative' }}>
              <div style={{
                fontSize: '4rem', fontWeight: 900, width: 120, height: 120, borderRadius: 24,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: '#1e293b', border: '1px solid rgba(148,163,184,0.12)',
                boxShadow: glowing ? '0 0 40px rgba(34,211,238,0.45)' : 'none',
                transition: 'box-shadow 0.4s',
              }}>{count}</div>
              <button
                onClick={() => setCount(c => c + 1)}
                style={{
                  background: '#0e7490', border: 'none', color: 'white', padding: '12px 32px',
                  borderRadius: 99, fontWeight: 700, fontSize: '1rem', cursor: 'pointer',
                  fontFamily: 'Inter,sans-serif', boxShadow: '0 4px 20px rgba(14,116,144,0.35)',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.target.style.background = '#0891b2'}
                onMouseLeave={e => e.target.style.background = '#0e7490'}
              >
                Tăng Count (+1)
              </button>
              <div style={{ width: '100%', maxWidth: 440, background: '#0a0e1a', borderRadius: 12, padding: '14px 18px', border: '1px solid rgba(148,163,184,0.1)', textAlign: 'left' }}>
                <p style={{ fontFamily: "'Fira Code',monospace", fontSize: '0.75rem', color: '#475569', marginBottom: 6 }}>// Console Log</p>
                <p style={{ fontFamily: "'Fira Code',monospace", fontSize: '0.9rem', color: glowing ? '#22d3ee' : '#64748b', fontWeight: glowing ? 700 : 400, transition: 'color 0.3s' }}>
                  &gt; {demoText}
                </p>
              </div>
            </div>
          </section>
        </Reveal>

      </div>
    </div>
  );
}
