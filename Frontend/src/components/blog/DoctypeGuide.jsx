import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

const DoctypeGuide = () => {
  const [showMsg, setShowMsg] = useState(false);

  const triggerMsg = () => {
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 3000);
  };

  const card = {
    background: '#112240',
    border: '1px solid rgba(148,163,184,0.1)',
    borderRadius: 20,
    padding: '32px 30px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
    transition: 'all 0.25s ease',
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#f8fafc', background: '#0a192f', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Inter:wght@400;500;600;700;800&display=swap');

        .dt-card { transition: all 0.25s ease; }
        .dt-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.4) !important;
          border-color: rgba(59,130,246,0.5) !important;
        }
        .dt-pulse {
          animation: dtPulse 3s ease-in-out infinite;
        }
        @keyframes dtPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.3); }
          50%       { box-shadow: 0 0 0 8px rgba(59,130,246,0); }
        }
      `}</style>

      <div style={{ maxWidth: 860, margin: '0 auto', padding: '60px 24px 80px' }}>

        {/* ── Header ───────────────── */}
        <motion.header variants={fadeUp} initial="hidden" animate="visible" style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)',
            borderRadius: 99, padding: '6px 18px', marginBottom: 24,
            fontSize: '0.78rem', fontWeight: 700, color: '#4ade80', letterSpacing: '0.1em',
          }}>
            🟢 MỨC ĐỘ: DỄ
          </div>

          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, margin: '0 0 16px', lineHeight: 1.2 }}>
            Học HTML:{' '}
            <span style={{
              background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Nền tảng cốt lõi
            </span>
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: 560, margin: '0 auto' }}>
            Câu 1: <strong style={{ color: '#f8fafc' }}>DOCTYPE là gì?</strong> Tại sao cần khai báo{' '}
            <code style={{ fontFamily: "'Fira Code', monospace", background: '#1e293b', color: '#38bdf8', padding: '2px 8px', borderRadius: 6 }}>
              &lt;!DOCTYPE html&gt;
            </code>?
          </p>
        </motion.header>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>

          {/* ── Card 1: What is DOCTYPE ─────── */}
          <motion.section
            className="dt-card"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={card}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                background: 'linear-gradient(135deg,#3b82f6,#1d4ed8)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.4rem', boxShadow: '0 4px 16px rgba(59,130,246,0.3)',
              }}>
                📄
              </div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: 0 }}>1. DOCTYPE là gì?</h2>
            </div>

            <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: 20, fontSize: '1rem' }}>
              <strong style={{ color: '#f8fafc' }}>DOCTYPE</strong> (Document Type Declaration) không phải là một
              thẻ HTML. Nó là một{' '}
              <em style={{ color: '#38bdf8' }}>"lời khai báo"</em> gửi tới trình duyệt để nói rằng:
            </p>

            {/* code block */}
            <div
              className="dt-pulse"
              style={{
                background: '#1e293b', borderRadius: 12, padding: '18px 22px',
                fontFamily: "'Fira Code', monospace", fontSize: '1.1rem',
                border: '1px solid rgba(59,130,246,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                marginBottom: 20,
              }}
            >
              <span>
                <span style={{ color: '#94a3b8' }}>&lt;!</span>
                <span style={{ color: '#f472b6', fontWeight: 600 }}>DOCTYPE</span>
                <span style={{ color: '#fbbf24' }}> html</span>
                <span style={{ color: '#94a3b8' }}>&gt;</span>
              </span>
              <span style={{
                fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.05em',
                background: '#3b82f6', color: '#fff', padding: '3px 10px', borderRadius: 6,
              }}>HTML5</span>
            </div>

            <blockquote style={{
              borderLeft: '4px solid #3b82f6', background: 'rgba(59,130,246,0.06)',
              borderRadius: '0 10px 10px 0', padding: '14px 18px', margin: 0,
              color: '#94a3b8', fontStyle: 'italic', lineHeight: 1.7,
            }}>
              "Này trình duyệt, tớ là tài liệu HTML5 — hãy đọc tớ theo tiêu chuẩn hiện đại nhất nhé!"
            </blockquote>
          </motion.section>

          {/* ── Card 2: Why it matters ─────── */}
          <motion.section
            className="dt-card"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{ ...card, transitionDelay: '0.1s' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                background: 'linear-gradient(135deg,#f59e0b,#d97706)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.4rem', boxShadow: '0 4px 16px rgba(245,158,11,0.3)',
              }}>
                ⚠️
              </div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: 0 }}>2. Tại sao cần khai báo?</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
              {/* Thiếu */}
              <div style={{
                background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.25)',
                borderRadius: 14, padding: '20px 18px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <span style={{ fontSize: '1.4rem' }}>❌</span>
                  <h4 style={{ fontWeight: 700, color: '#f87171', margin: 0 }}>Nếu THIẾU</h4>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                  Trình duyệt rơi vào{' '}
                  <strong style={{ color: '#f87171' }}>Quirks Mode</strong>{' '}
                  (Chế độ lạ lùng). Hiển thị kiểu cũ, gây lỗi bố cục và sai lệch font chữ.
                </p>
              </div>

              {/* Có */}
              <div style={{
                background: 'rgba(34,197,94,0.07)', border: '1px solid rgba(34,197,94,0.25)',
                borderRadius: 14, padding: '20px 18px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <span style={{ fontSize: '1.4rem' }}>✅</span>
                  <h4 style={{ fontWeight: 700, color: '#4ade80', margin: 0 }}>Nếu CÓ</h4>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                  Trình duyệt chạy{' '}
                  <strong style={{ color: '#4ade80' }}>Standards Mode</strong>{' '}
                  (Chế độ chuẩn). Đảm bảo đồng nhất trên mọi trình duyệt hiện đại.
                </p>
              </div>
            </div>
          </motion.section>

          {/* ── Reminder box ─────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              background: 'linear-gradient(135deg,#112240,#0d1b2e)',
              border: '1px solid rgba(59,130,246,0.2)',
              borderRadius: 20, padding: '32px 30px', textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }}
          >
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16,
              background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)',
              borderRadius: 99, padding: '5px 16px', fontSize: '0.75rem',
              color: '#60a5fa', fontWeight: 700, letterSpacing: '0.08em',
            }}>
              💡 GHI NHỚ NHANH
            </div>
            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#cbd5e1', margin: 0, lineHeight: 1.7 }}>
              "Hãy luôn đặt DOCTYPE ở{' '}
              <strong style={{ color: '#f8fafc' }}>dòng số 1</strong>{' '}
              của mọi file HTML để tránh những rắc rối không đáng có!"
            </p>
          </motion.div>
        </div>

        {/* ── Footer & button ─────── */}
        <motion.footer
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{ textAlign: 'center', marginTop: 60, color: '#475569' }}
        >
          <p style={{ fontSize: '0.85rem', marginBottom: 20 }}>© 2024 Lộ trình học Web — HTML Nền tảng</p>
          <button
            onClick={triggerMsg}
            style={{
              background: 'transparent', border: '2px solid #3b82f6', color: '#3b82f6',
              borderRadius: 99, padding: '12px 32px', fontSize: '0.95rem', fontWeight: 600,
              cursor: 'pointer', fontFamily: "'Inter', sans-serif",
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => { e.target.style.background = '#3b82f6'; e.target.style.color = '#fff'; }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#3b82f6'; }}
          >
            Đã hiểu bài! ✓
          </button>
        </motion.footer>
      </div>

      {/* ── Toast ─────── */}
      <AnimatePresence>
        {showMsg && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            style={{
              position: 'fixed', bottom: 32, right: 32, zIndex: 9999,
              background: '#1e293b', borderLeft: '4px solid #3b82f6',
              borderRadius: 14, padding: '16px 22px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
              display: 'flex', alignItems: 'center', gap: 14,
              border: '1px solid rgba(59,130,246,0.3)',
            }}
          >
            <span style={{ fontSize: '1.3rem' }}>🎉</span>
            <div>
              <p style={{ fontWeight: 600, color: '#f8fafc', margin: '0 0 2px' }}>Tuyệt vời!</p>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: 0 }}>Cảm ơn bạn đã theo dõi bài học!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DoctypeGuide;
