import React, { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
};

/* ─── Progress Bar ─────────────────── */
function ProgressBar({ barRef, label, statusRef, statusDefText, barColor }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: '0.82rem', fontFamily: "'Fira Code', monospace", color: '#94a3b8' }}>
        <span>{label}</span>
        <span ref={statusRef} style={{ color: '#64748b' }}>{statusDefText}</span>
      </div>
      <div style={{ background: 'rgba(0,0,0,0.4)', borderRadius: 999, height: 12, overflow: 'hidden', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.4)' }}>
        <div ref={barRef} style={{ height: '100%', width: '0%', borderRadius: 999, background: barColor, transition: 'none' }} />
      </div>
    </div>
  );
}

/* ─── Result Box ─────────────────── */
function ResultBox({ id, resultRef }) {
  return (
    <div ref={resultRef} id={id} style={{ display: 'none', marginTop: 16, padding: '12px 16px', borderRadius: 10, fontFamily: "'Fira Code', monospace", fontSize: '0.82rem' }} />
  );
}

/* ─── Section Card ─────────────────── */
function SectionCard({ iconEmoji, gradient, shadow, accentColor, title, subtitle, mechanic, practical, children }) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      style={{
        background: '#112240', border: '1px solid rgba(148,163,184,0.1)',
        borderRadius: 24, padding: '40px 36px', boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
    >
      <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', marginBottom: 28, flexWrap: 'wrap' }}>
        <div style={{
          width: 56, height: 56, borderRadius: 16, flexShrink: 0,
          background: gradient, boxShadow: shadow, border: '1px solid rgba(255,255,255,0.08)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem',
        }}>{iconEmoji}</div>
        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: 6, display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
            {title}
            <span style={{ fontSize: '1rem', fontWeight: 400, color: accentColor }}>{subtitle}</span>
          </h2>
          <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: 6, fontSize: '0.95rem' }}>
            <strong style={{ color: '#f8fafc' }}>Cơ chế:</strong> {mechanic}
          </p>
          <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
            <strong style={{ color: '#f8fafc' }}>Thực tế:</strong> {practical}
          </p>
        </div>
      </div>
      {children}
    </motion.section>
  );
}

/* ─── Demo Container ────────────────── */
function DemoContainer({ label, btnColor, btnHoverRef, onRun, btnLabel, children }) {
  const [hover, setHover] = useState(false);
  return (
    <div style={{
      background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(148,163,184,0.1)',
      borderRadius: 18, padding: '24px',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontFamily: "'Fira Code', monospace", fontSize: '0.8rem', color: '#64748b' }}>{label}</span>
        <button
          onClick={onRun}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            background: hover ? btnColor.hover : btnColor.base,
            border: 'none', color: 'white', borderRadius: 10, padding: '8px 20px',
            fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer',
            fontFamily: 'Inter, sans-serif', transition: 'background 0.2s',
            boxShadow: `0 4px 14px ${btnColor.shadow}`,
          }}
        >▶ {btnLabel}</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        {children}
      </div>
    </div>
  );
}

/* ─── Main Component ─────────────────── */
export default function PromiseCombinators() {
  /* refs for Promise.all */
  const allBar1 = useRef(), allBar2 = useRef(), allBar3 = useRef();
  const allSt1 = useRef(), allSt2 = useRef(), allSt3 = useRef();
  const allResult = useRef();

  /* refs for Promise.allSettled */
  const setBar1 = useRef(), setBar2 = useRef(), setBar3 = useRef();
  const setSt1 = useRef(), setSt2 = useRef(), setSt3 = useRef();
  const setResult = useRef();

  /* refs for Promise.race */
  const raceBar1 = useRef(), raceBar2 = useRef(), raceBar3 = useRef();
  const raceSt1 = useRef(), raceSt2 = useRef(), raceSt3 = useRef();
  const raceResult = useRef();

  /* Animation helper — returns a Promise */
  const animateP = useCallback((barRef, stRef, durationMs, shouldFail, failAtMs = 0) => {
    return new Promise((resolve, reject) => {
      const bar = barRef.current;
      const st = stRef.current;
      if (!bar || !st) return;

      /* reset */
      bar.style.transition = 'none';
      bar.style.width = '0%';
      bar.style.background = '#38bdf8';
      st.textContent = '⏳ Đang tải...';
      st.style.color = '#94a3b8';
      void bar.offsetWidth; /* force reflow */

      const dur = shouldFail ? failAtMs : durationMs;
      bar.style.transition = `width ${dur}ms linear`;
      bar.style.width = shouldFail ? `${(failAtMs / durationMs) * 100}%` : '100%';

      setTimeout(() => {
        if (shouldFail) {
          bar.style.background = '#f87171';
          st.textContent = '❌ Thất bại!';
          st.style.color = '#f87171';
          reject(new Error('API lỗi'));
        } else {
          bar.style.background = '#34d399';
          st.textContent = '✅ Hoàn thành';
          st.style.color = '#34d399';
          resolve('OK');
        }
      }, dur);
    });
  }, []);

  const showResult = (ref, msg, isError) => {
    const el = ref.current;
    if (!el) return;
    el.style.display = 'block';
    el.innerHTML = msg;
    if (isError) {
      el.style.background = 'rgba(127,29,29,0.4)';
      el.style.border = '1px solid rgba(248,113,113,0.35)';
      el.style.color = '#fca5a5';
    } else {
      el.style.background = 'rgba(5,46,22,0.5)';
      el.style.border = '1px solid rgba(52,211,153,0.35)';
      el.style.color = '#6ee7b7';
    }
  };

  const resetResult = (ref) => { if (ref.current) ref.current.style.display = 'none'; };

  /* ─ Demos ─ */
  const runAll = () => {
    resetResult(allResult);
    const p1 = animateP(allBar1, allSt1, 2000, false);
    const p2 = animateP(allBar2, allSt2, 2000, true, 1000);
    const p3 = animateP(allBar3, allSt3, 3000, false);
    Promise.all([p1, p2, p3])
      .then(() => showResult(allResult, '🎉 Tất cả API hoàn thành thành công!', false))
      .catch(() => showResult(allResult, '🚨 Promise.all bị <strong>Short-circuit</strong> ngay lập tức vì API 2 báo lỗi! Các API khác dù chạy tiếp cũng bị bỏ qua.', true));
  };

  const runSettled = () => {
    resetResult(setResult);
    const p1 = animateP(setBar1, setSt1, 1500, false);
    const p2 = animateP(setBar2, setSt2, 2000, true, 1000);
    const p3 = animateP(setBar3, setSt3, 2500, false);
    Promise.allSettled([p1, p2, p3]).then(results => {
      const ok = results.filter(r => r.status === 'fulfilled').length;
      const fail = results.filter(r => r.status === 'rejected').length;
      showResult(setResult, `📊 Đã chờ xong tất cả! Có <strong>${ok}</strong> thành công, <strong>${fail}</strong> thất bại. Giao diện vẫn tiếp tục render những phần thành công.`, false);
    });
  };

  const runRace = () => {
    resetResult(raceResult);
    const p1 = animateP(raceBar1, raceSt1, 3000, false);
    const p2 = animateP(raceBar2, raceSt2, 1500, false);
    const p3 = animateP(raceBar3, raceSt3, 800, false);
    Promise.race([p1, p2, p3]).then(() => {
      showResult(raceResult, '🏆 Cuộc đua kết thúc! Đã lấy kết quả từ <strong>Server Việt Nam (0.8s)</strong>. Các server chậm hơn bị bỏ qua.', false);
    });
  };

  const WAIT = 'Đang chờ...';

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#f8fafc', background: '#0a192f', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Inter:wght@400;500;600;700;800&display=swap');
      `}</style>

      {/* bg glows */}
      <div style={{ position: 'fixed', top: 0, left: '25%', width: 360, height: 360, background: 'rgba(34,211,238,0.08)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }} />
      <div style={{ position: 'fixed', bottom: 0, right: '25%', width: 360, height: 360, background: 'rgba(168,85,247,0.08)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 860, margin: '0 auto', padding: '60px 24px 80px', position: 'relative', zIndex: 1 }}>

        {/* ── Header ── */}
        <motion.header variants={fadeUp} initial="hidden" animate="visible" style={{ textAlign: 'center', marginBottom: 72 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.25)',
            borderRadius: 99, padding: '6px 18px', marginBottom: 24,
            fontSize: '0.78rem', fontWeight: 700, color: '#22d3ee', letterSpacing: '0.1em',
          }}>
            ⚡ JAVASCRIPT ADVANCED
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, margin: '0 0 20px', lineHeight: 1.15 }}>
            Tuyệt Kỹ Xử Lý{' '}
            <span style={{
              background: 'linear-gradient(135deg, #22d3ee, #3b82f6, #a855f7)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>Đa Promise Cùng Lúc</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#94a3b8', maxWidth: 660, margin: '0 auto', lineHeight: 1.7 }}>
            Phân tích trực quan cách hoạt động của{' '}
            <code style={{ color: '#22d3ee', background: 'rgba(34,211,238,0.1)', padding: '2px 7px', borderRadius: 5, fontFamily: "'Fira Code', monospace" }}>Promise.all</code>,{' '}
            <code style={{ color: '#34d399', background: 'rgba(52,211,153,0.1)', padding: '2px 7px', borderRadius: 5, fontFamily: "'Fira Code', monospace" }}>Promise.allSettled</code> và{' '}
            <code style={{ color: '#fbbf24', background: 'rgba(251,191,36,0.1)', padding: '2px 7px', borderRadius: 5, fontFamily: "'Fira Code', monospace" }}>Promise.race</code>.
            Nhấn <strong style={{ color: '#f8fafc' }}>Run</strong> để xem trực quan!
          </p>
        </motion.header>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>

          {/* ── Promise.all ── */}
          <SectionCard
            iconEmoji="⛔"
            gradient="linear-gradient(135deg,#f43f5e,#fb923c)"
            shadow="0 8px 20px rgba(244,63,94,0.3)"
            accentColor="#fb7185"
            title="Promise.all()"
            subtitle='"Được ăn cả, ngã về không"'
            mechanic={<>Hoàn thành khi <strong style={{ color: '#34d399' }}>tất cả thành công</strong>, nhưng sẽ <strong style={{ color: '#f87171' }}>short-circuit ngay lập tức</strong> nếu có bất kỳ 1 Promise nào bị lỗi.</>}
            practical="Dùng khi dữ liệu phụ thuộc chặt chẽ (VD: Lấy thông tin Giỏ hàng & Địa chỉ thanh toán)."
          >
            <DemoContainer
              label="Trình mô phỏng (Có 1 API sẽ lỗi ở 40%)"
              btnColor={{ base: '#e11d48', hover: '#f43f5e', shadow: 'rgba(225,29,72,0.3)' }}
              onRun={runAll}
              btnLabel="Chạy Demo"
            >
              <ProgressBar barRef={allBar1} statusRef={allSt1} statusDefText={WAIT} label="API 1: Lấy Giỏ Hàng (2s)" barColor="#22d3ee" />
              <ProgressBar barRef={allBar2} statusRef={allSt2} statusDefText={WAIT} label="API 2: Lấy Địa Chỉ (Lỗi ở 1s)" barColor="#f87171" />
              <ProgressBar barRef={allBar3} statusRef={allSt3} statusDefText={WAIT} label="API 3: Lấy Mã Giảm Giá (3s)" barColor="#22d3ee" />
            </DemoContainer>
            <ResultBox resultRef={allResult} />
          </SectionCard>

          {/* ── Promise.allSettled ── */}
          <SectionCard
            iconEmoji="🤝"
            gradient="linear-gradient(135deg,#10b981,#14b8a6)"
            shadow="0 8px 20px rgba(16,185,129,0.3)"
            accentColor="#34d399"
            title="Promise.allSettled()"
            subtitle='"Chậm mà chắc, không bỏ sót ai"'
            mechanic={<>Đợi <strong style={{ color: '#34d399' }}>tất cả hoàn thành</strong>, bất kể là lỗi hay thành công. Không bao giờ short-circuit.</>}
            practical="Dùng cho các thành phần độc lập (VD: Load widget Thời tiết, Chứng khoán, Tin tức trên cùng 1 Dashboard)."
          >
            <DemoContainer
              label="Trình mô phỏng (Có 1 API bị lỗi)"
              btnColor={{ base: '#059669', hover: '#10b981', shadow: 'rgba(5,150,105,0.3)' }}
              onRun={runSettled}
              btnLabel="Chạy Demo"
            >
              <ProgressBar barRef={setBar1} statusRef={setSt1} statusDefText={WAIT} label="Widget 1: Tin Tức (1.5s)" barColor="#34d399" />
              <ProgressBar barRef={setBar2} statusRef={setSt2} statusDefText={WAIT} label="Widget 2: Thời Tiết (Lỗi ở 1s)" barColor="#f87171" />
              <ProgressBar barRef={setBar3} statusRef={setSt3} statusDefText={WAIT} label="Widget 3: Chứng Khoán (2.5s)" barColor="#34d399" />
            </DemoContainer>
            <ResultBox resultRef={setResult} />
          </SectionCard>

          {/* ── Promise.race ── */}
          <SectionCard
            iconEmoji="🏁"
            gradient="linear-gradient(135deg,#d97706,#f97316)"
            shadow="0 8px 20px rgba(217,119,6,0.3)"
            accentColor="#fbbf24"
            title="Promise.race()"
            subtitle='"Ai nhanh chân thì thắng"'
            mechanic={<>Promise nào <strong style={{ color: '#fbbf24' }}>hoàn thành đầu tiên</strong> (dù resolve hay reject), sẽ được lấy kết quả ngay lập tức.</>}
            practical="Dùng để tạo Timeout cho API, hoặc ping nhiều Server CDN cùng lúc."
          >
            <DemoContainer
              label="Trình mô phỏng đua tốc độ CDN"
              btnColor={{ base: '#d97706', hover: '#f59e0b', shadow: 'rgba(217,119,6,0.3)' }}
              onRun={runRace}
              btnLabel="Chạy Demo"
            >
              <ProgressBar barRef={raceBar1} statusRef={raceSt1} statusDefText={WAIT} label="🌎 Server Mỹ (3s)" barColor="#fbbf24" />
              <ProgressBar barRef={raceBar2} statusRef={raceSt2} statusDefText={WAIT} label="🇯🇵 Server Nhật Bản (1.5s)" barColor="#fbbf24" />
              <ProgressBar barRef={raceBar3} statusRef={raceSt3} statusDefText={WAIT} label="🇻🇳 Server Việt Nam (0.8s) — NHANH NHẤT" barColor="#fbbf24" />
            </DemoContainer>
            <ResultBox resultRef={raceResult} />
          </SectionCard>

        </div>

        <motion.footer variants={fadeUp} initial="hidden" animate="visible"
          style={{ marginTop: 60, textAlign: 'center', color: '#475569', fontSize: '0.85rem' }}>
          <p>Mẹo: Nhấn nút <strong style={{ color: '#f8fafc' }}>Chạy Demo</strong> nhiều lần để xem các animation phản hồi lại từ đầu. 🎯</p>
        </motion.footer>

      </div>
    </div>
  );
}
