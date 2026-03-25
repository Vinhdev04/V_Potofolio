import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

/* ─── Playground data ───────────────────────────────────── */
const VALUE_OPTIONS = [
  { key: 'num_0',       label: '0  (Number)',      value: 0 },
  { key: 'str_0',       label: '"0"  (String)',     value: '0' },
  { key: 'bool_false',  label: 'false  (Boolean)',  value: false },
  { key: 'val_null',    label: 'null',              value: null },
  { key: 'val_undef',   label: 'undefined',         value: undefined },
  { key: 'arr_empty',   label: '[]  (Array rỗng)',  value: [] },
  { key: 'str_empty',   label: '"" (String rỗng)', value: '' },
];

function getExplanation(k1, k2, loose, strict) {
  if (strict) return 'Hai giá trị hoàn toàn giống nhau về cả kiểu dữ liệu lẫn giá trị.';
  if (loose) {
    if ((k1 === 'val_null' && k2 === 'val_undef') || (k1 === 'val_undef' && k2 === 'val_null'))
      return '💡 null và undefined bằng nhau với ==, nhưng khác kiểu nên === trả về false.';
    if (k1 === 'arr_empty' || k2 === 'arr_empty')
      return '💡 [] được ép kiểu thành chuỗi rỗng "", rồi thành số 0 để so sánh.';
    return '💡 JS ngầm ép kiểu một (hoặc cả hai) giá trị về cùng kiểu rồi mới so sánh.';
  }
  return 'Hai giá trị hoàn toàn khác nhau.';
}

/* ─── Sub-components ───────────────────────────────────── */
function ResultBadge({ result }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '48px',
        borderRadius: '10px',
        fontSize: '1.3rem',
        fontWeight: 700,
        fontFamily: "'Fira Code', monospace",
        background: result ? 'rgba(52,211,153,0.12)' : 'rgba(248,113,113,0.12)',
        color: result ? '#34d399' : '#f87171',
        border: `1px solid ${result ? 'rgba(52,211,153,0.4)' : 'rgba(248,113,113,0.4)'}`,
        transition: 'all 0.3s',
      }}
    >
      {result ? 'true' : 'false'}
    </div>
  );
}

function CodeCard({ lines }) {
  return (
    <div
      style={{
        background: '#0f172a',
        borderRadius: '10px',
        padding: '16px 18px',
        fontFamily: "'Fira Code', monospace",
        fontSize: '0.88rem',
        lineHeight: 1.7,
        border: '1px solid rgba(148,163,184,0.1)',
        overflowX: 'auto',
      }}
    >
      {lines.map((line, i) => (
        <div key={i}>{line}</div>
      ))}
    </div>
  );
}

function SectionTag({ color, children }) {
  return (
    <span
      style={{
        fontSize: '0.7rem',
        fontWeight: 700,
        letterSpacing: '0.1em',
        padding: '3px 10px',
        borderRadius: '99px',
        background: color === 'green' ? 'rgba(52,211,153,0.15)' : 'rgba(248,113,113,0.15)',
        color: color === 'green' ? '#34d399' : '#f87171',
        border: `1px solid ${color === 'green' ? 'rgba(52,211,153,0.3)' : 'rgba(248,113,113,0.3)'}`,
      }}
    >
      {children}
    </span>
  );
}

/* ─── Main Component ───────────────────────────────────── */
const EqualityCoercion = () => {
  const [k1, setK1] = useState('num_0');
  const [k2, setK2] = useState('str_0');

  const v1 = VALUE_OPTIONS.find(o => o.key === k1).value;
  const v2 = VALUE_OPTIONS.find(o => o.key === k2).value;
  /* eslint-disable eqeqeq */
  const loose  = v1 == v2;
  /* eslint-enable eqeqeq */
  const strict = v1 === v2;

  const card = {
    background: '#112240',
    borderRadius: '18px',
    border: '1px solid rgba(148,163,184,0.12)',
    padding: '28px 30px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
  };

  const selectStyle = {
    background: '#0f172a',
    border: '1px solid rgba(148,163,184,0.25)',
    borderRadius: '10px',
    color: '#f8fafc',
    fontSize: '0.95rem',
    fontFamily: "'Fira Code', monospace",
    padding: '10px 14px',
    width: '100%',
    cursor: 'pointer',
    outline: 'none',
    appearance: 'none',
    textAlign: 'center',
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#f8fafc', background: '#0a192f', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Inter:wght@400;500;600;700;800&display=swap');

        .ec-gradient-text {
          background: linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% auto;
          animation: ecShine 4s linear infinite;
        }
        @keyframes ecShine { to { background-position: 200% center; } }

        .ec-card-hover {
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .ec-card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 36px rgba(0,0,0,0.4) !important;
          border-color: rgba(56,189,248,0.4) !important;
        }

        .ec-select:focus { border-color: rgba(56,189,248,0.6) !important; }

        .ec-coerce-card {
          background: #112240;
          border: 1px solid rgba(148,163,184,0.1);
          border-radius: 16px;
          padding: 24px;
          transition: all 0.25s ease;
        }
        .ec-coerce-card:hover {
          background: #1a2f52;
          border-color: rgba(56,189,248,0.3);
          transform: translateY(-3px);
        }

        .ec-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.12;
          pointer-events: none;
        }
      `}</style>

      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* background blobs */}
        <div className="ec-blob" style={{ width: 400, height: 400, background: '#2563eb', top: -100, left: -150 }} />
        <div className="ec-blob" style={{ width: 350, height: 350, background: '#7c3aed', top: '40%', right: -100 }} />

        <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px 80px' }}>

          {/* ── Header ───────────────── */}
          <motion.header variants={fadeUp} initial="hidden" animate="visible" style={{ textAlign: 'center', marginBottom: 72 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.2)',
              borderRadius: 99, padding: '6px 18px', marginBottom: 24, fontSize: '0.8rem',
              color: '#38bdf8', fontWeight: 600, letterSpacing: '0.08em',
            }}>
              ⚡ JAVASCRIPT CƠ BẢN
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, margin: '0 0 20px', lineHeight: 1.15 }}>
              Giải mã <span className="ec-gradient-text">So Sánh & Ép Kiểu</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
              Hiểu rõ sự khác biệt giữa
              {' '}<code style={{ background: '#1e293b', color: '#38bdf8', padding: '2px 7px', borderRadius: 6, fontFamily: "'Fira Code', monospace" }}>{'=='}</code>{' '}
              và
              {' '}<code style={{ background: '#1e293b', color: '#38bdf8', padding: '2px 7px', borderRadius: 6, fontFamily: "'Fira Code', monospace" }}>{'==='}</code>{' '}
              cùng cơ chế Ép kiểu ngầm định (Implicit Coercion).
            </p>
          </motion.header>

          {/* ── Section 1: == vs === ─────── */}
          <motion.section variants={fadeUp} initial="hidden" animate="visible" style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 32, height: 4, background: 'linear-gradient(90deg,#38bdf8,#818cf8)', borderRadius: 99, display: 'inline-block', flexShrink: 0 }} />
              Đại chiến So Sánh
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
              {/* === card */}
              <div className="ec-card-hover" style={{ ...card, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, borderBottomLeftRadius: 12 }}>
                  <SectionTag color="green">Khuyên dùng</SectionTag>
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#38bdf8', marginBottom: 12, fontFamily: "'Fira Code', monospace" }}>
                  === Strict Equality
                </h3>
                <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: 18, fontSize: '0.95rem' }}>
                  So sánh <strong style={{ color: '#f8fafc' }}>nghiêm ngặt</strong>. Kiểm tra cả{' '}
                  <span style={{ borderBottom: '2px solid #38bdf8', paddingBottom: 1 }}>giá trị</span> và{' '}
                  <span style={{ borderBottom: '2px solid #38bdf8', paddingBottom: 1 }}>kiểu dữ liệu</span>.
                  Không bao giờ tự động ép kiểu.
                </p>
                <CodeCard lines={[
                  <><span style={{ color: '#64748b' }}>// Khác kiểu → false</span></>,
                  <><span style={{ color: '#fb923c' }}>1</span> <span style={{ color: '#f472b6' }}>===</span> <span style={{ color: '#86efac' }}>'1'</span> <span style={{ color: '#475569' }}>// false</span></>,
                  <><span style={{ color: '#64748b' }}>// Cùng kiểu, cùng giá trị → true</span></>,
                  <><span style={{ color: '#fb923c' }}>1</span> <span style={{ color: '#f472b6' }}>===</span> <span style={{ color: '#fb923c' }}>1</span><span style={{ color: '#475569' }}>   // true</span></>,
                ]} />
              </div>
              {/* == card */}
              <div className="ec-card-hover" style={{ ...card, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, borderBottomLeftRadius: 12 }}>
                  <SectionTag color="red">Nguy hiểm</SectionTag>
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#c084fc', marginBottom: 12, fontFamily: "'Fira Code', monospace" }}>
                  == Loose Equality
                </h3>
                <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: 18, fontSize: '0.95rem' }}>
                  So sánh <strong style={{ color: '#f8fafc' }}>lỏng lẻo</strong>. Chỉ so sánh{' '}
                  <span style={{ borderBottom: '2px solid #c084fc', paddingBottom: 1 }}>giá trị</span>. Nếu khác kiểu,
                  JS sẽ tự động <span style={{ color: '#f87171', fontWeight: 600 }}>ép kiểu</span> trước khi so sánh.
                </p>
                <CodeCard lines={[
                  <><span style={{ color: '#64748b' }}>// Ép '1' thành số 1 → true</span></>,
                  <><span style={{ color: '#fb923c' }}>1</span> <span style={{ color: '#f472b6' }}>==</span> <span style={{ color: '#86efac' }}>'1'</span> <span style={{ color: '#475569' }}>  // true</span></>,
                  <><span style={{ color: '#64748b' }}>// Ép false thành 0 → true</span></>,
                  <><span style={{ color: '#fb923c' }}>0</span> <span style={{ color: '#f472b6' }}>==</span> <span style={{ color: '#c084fc' }}>false</span> <span style={{ color: '#475569' }}>// true</span></>,
                ]} />
              </div>
            </div>
          </motion.section>

          {/* ── Section 2: Coercion ─────── */}
          <motion.section variants={fadeUp} initial="hidden" animate="visible" style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 32, height: 4, background: 'linear-gradient(90deg,#c084fc,#818cf8)', borderRadius: 99, display: 'inline-block', flexShrink: 0 }} />
              Ép kiểu ngầm định (Implicit Coercion)
            </h2>
            <p style={{ color: '#64748b', marginBottom: 28, fontSize: '0.95rem' }}>
              JS tự động chuyển đổi qua lại giữa 3 kiểu chính: String, Number và Boolean dựa trên ngữ cảnh của toán tử.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 16 }}>
              {/* String */}
              <div className="ec-coerce-card">
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: 'rgba(56,189,248,0.12)', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', marginBottom: 14, fontSize: '1.3rem',
                }}>⚡</div>
                <h4 style={{ fontWeight: 700, marginBottom: 8 }}>Ép về String</h4>
                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: 14 }}>
                  Toán tử <code style={{ color: '#38bdf8', fontFamily: "'Fira Code', monospace" }}>+</code> với một chuỗi → ưu tiên nối chuỗi.
                </p>
                <CodeCard lines={[
                  <><span style={{ color: '#fb923c' }}>1</span> + <span style={{ color: '#86efac' }}>"2"</span></>,
                  <><span style={{ color: '#475569' }}>// "12" (String)</span></>,
                ]} />
              </div>
              {/* Number */}
              <div className="ec-coerce-card">
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: 'rgba(251,146,60,0.12)', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', marginBottom: 14, fontSize: '1.3rem',
                }}>🔢</div>
                <h4 style={{ fontWeight: 700, marginBottom: 8 }}>Ép về Number</h4>
                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: 14 }}>
                  Toán tử toán học <code style={{ color: '#38bdf8', fontFamily: "'Fira Code', monospace" }}>- * /</code> → cố gắng biến thành số.
                </p>
                <CodeCard lines={[
                  <><span style={{ color: '#86efac' }}>"5"</span> - <span style={{ color: '#fb923c' }}>2</span></>,
                  <><span style={{ color: '#475569' }}>// 3 (Number)</span></>,
                ]} />
              </div>
              {/* Boolean */}
              <div className="ec-coerce-card">
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: 'rgba(192,132,252,0.12)', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', marginBottom: 14, fontSize: '1.3rem',
                }}>🔍</div>
                <h4 style={{ fontWeight: 700, marginBottom: 8 }}>Truthy / Falsy</h4>
                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: 14 }}>
                  6 giá trị Falsy:{' '}
                  <code style={{ color: '#f472b6', fontFamily: "'Fira Code', monospace", fontSize: '0.78rem' }}>false, 0, "", null, undefined, NaN</code>
                </p>
                <CodeCard lines={[
                  <>if (<span style={{ color: '#86efac' }}>" "</span>) {'{'}</>,
                  <>&nbsp;&nbsp;<span style={{ color: '#475569' }}>// Truthy!</span></>,
                  <>{'}'}</>,
                ]} />
              </div>
            </div>
          </motion.section>

          {/* ── Section 3: Playground ─────── */}
          <motion.section variants={fadeUp} initial="hidden" animate="visible">
            <div style={{
              background: 'linear-gradient(135deg, #112240 0%, #0d1b2e 100%)',
              border: '1px solid rgba(56,189,248,0.2)',
              borderRadius: 24,
              padding: '48px 36px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
            }}>
              <div style={{ position: 'absolute', bottom: -60, right: -60, width: 200, height: 200, background: '#38bdf8', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.07 }} />

              <div style={{ textAlign: 'center', marginBottom: 40, position: 'relative' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 14,
                  background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.2)',
                  borderRadius: 99, padding: '5px 16px', fontSize: '0.75rem', color: '#38bdf8', fontWeight: 600,
                }}>
                  🎮 INTERACTIVE
                </div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 8 }}>Thử nghiệm thực tế</h2>
                <p style={{ color: '#64748b' }}>Tự chọn giá trị để xem JS xử lý như thế nào!</p>
              </div>

              {/* selects */}
              <div style={{
                display: 'flex', flexWrap: 'wrap', alignItems: 'center',
                justifyContent: 'center', gap: 16, marginBottom: 36,
              }}>
                <select value={k1} onChange={e => setK1(e.target.value)} className="ec-select" style={selectStyle}>
                  {VALUE_OPTIONS.map(o => <option key={o.key} value={o.key}>{o.label}</option>)}
                </select>
                <div style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                  color: '#475569', fontSize: '0.8rem', fontWeight: 600,
                }}>
                  <span>SO SÁNH VỚI</span>
                  <span style={{ fontSize: '1.4rem' }}>⇄</span>
                </div>
                <select value={k2} onChange={e => setK2(e.target.value)} className="ec-select" style={selectStyle}>
                  {VALUE_OPTIONS.map(o => <option key={o.key} value={o.key}>{o.label}</option>)}
                </select>
              </div>

              {/* results */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, maxWidth: 480, margin: '0 auto 24px', position: 'relative' }}>
                <div style={{ background: '#0a192f', borderRadius: 14, padding: '20px 16px', border: '1px solid rgba(148,163,184,0.1)' }}>
                  <p style={{ color: '#64748b', fontSize: '0.8rem', fontFamily: "'Fira Code', monospace", marginBottom: 12, textAlign: 'center' }}>Kết quả ==</p>
                  <ResultBadge result={loose} />
                </div>
                <div style={{ background: '#0a192f', borderRadius: 14, padding: '20px 16px', border: '1px solid rgba(148,163,184,0.1)' }}>
                  <p style={{ color: '#64748b', fontSize: '0.8rem', fontFamily: "'Fira Code', monospace", marginBottom: 12, textAlign: 'center' }}>Kết quả ===</p>
                  <ResultBadge result={strict} />
                </div>
              </div>

              {/* explanation */}
              <p style={{ textAlign: 'center', color: '#94a3b8', fontStyle: 'italic', minHeight: 24, transition: 'all 0.3s', position: 'relative' }}>
                {getExplanation(k1, k2, loose, strict)}
              </p>
            </div>
          </motion.section>

          {/* ── Footer ─────── */}
          <motion.footer variants={fadeUp} initial="hidden" animate="visible" style={{ textAlign: 'center', marginTop: 72, color: '#475569', fontSize: '0.85rem' }}>
            <p>Chúc bạn code JavaScript vui vẻ và không dính bug! 🎉</p>
          </motion.footer>

        </div>
      </div>
    </div>
  );
};

export default EqualityCoercion;
