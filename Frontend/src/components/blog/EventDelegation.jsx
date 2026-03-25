import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
};

const INITIAL_TASKS = [
  { id: 1, text: 'Học HTML/CSS' },
  { id: 2, text: 'Hiểu về Event Bubbling' },
];

let nextId = 3;

const BENEFIT_CARDS = [
  {
    emoji: '🧠',
    color: '#818cf8',
    shadowColor: 'rgba(129,140,248,0.25)',
    title: 'Tiết Kiệm Bộ Nhớ',
    desc: 'Chỉ sử dụng 1 Event Listener duy nhất cho hàng ngàn phần tử con, giảm tải áp lực quản lý bộ nhớ cho trình duyệt.',
  },
  {
    emoji: '✨',
    color: '#f472b6',
    shadowColor: 'rgba(244,114,182,0.25)',
    title: 'Hỗ Trợ Dynamic DOM',
    desc: 'Các phần tử được thêm vào sau này (qua Ajax, Fetch) tự động nhận sự kiện mà không cần phải gán lại (re-bind) code.',
  },
  {
    emoji: '⚡',
    color: '#fbbf24',
    shadowColor: 'rgba(251,191,36,0.25)',
    title: 'Khởi Tạo Nhanh',
    desc: 'Bỏ qua các vòng lặp forEach nặng nề lúc khởi chạy trang, giúp trang web render và phản hồi ngay lập tức.',
  },
];

const card = {
  background: '#112240',
  border: '1px solid rgba(148,163,184,0.12)',
  borderRadius: 20,
  padding: '28px 28px',
  boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
  transition: 'all 0.25s ease',
};

const NUM_STYLE = {
  width: 32, height: 32, borderRadius: '50%',
  background: '#1e293b', border: '1px solid rgba(148,163,184,0.2)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  fontSize: '0.8rem', fontWeight: 700, flexShrink: 0,
};

export default function EventDelegation() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState([
    { id: 0, type: 'idle', msg: 'Hệ thống sẵn sàng. Thử click vào các phần tử bên trái...' },
  ]);
  const logId = useRef(1);
  const consoleRef = useRef(null);

  const addLog = useCallback((msg, type = 'info') => {
    const time = new Date().toLocaleTimeString('vi-VN');
    setLogs(prev => [...prev, { id: logId.current++, type, msg, time }]);
  }, []);

  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [logs]);

  const handleAdd = () => {
    const text = inputVal.trim();
    if (!text) { addLog('Vui lòng nhập nội dung công việc!', 'error'); return; }
    setTasks(prev => [...prev, { id: nextId++, text }]);
    addLog(`Đã thêm động: "${text}"`, 'success');
    setInputVal('');
  };

  const handleDelete = (id, text) => {
    setTasks(prev => prev.filter(t => t.id !== id));
    addLog(`Đã XÓA: "${text}"`, 'error');
  };

  const handleClickTask = (text) => {
    addLog(`Bạn vừa CLICK vào thẻ li: "${text}"`);
  };

  const logColor = (type) => {
    if (type === 'error') return '#f87171';
    if (type === 'success') return '#34d399';
    if (type === 'idle') return '#475569';
    return '#60a5fa';
  };

  const logIcon = (type) => {
    if (type === 'error') return '✕';
    if (type === 'success') return '✓';
    return 'ℹ';
  };

  return (
    <div style={{
      fontFamily: "'Inter', sans-serif", color: '#f8fafc',
      background: '#0a192f', minHeight: '100vh', position: 'relative', overflow: 'hidden',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap');
        .ed-card-hover { transition: all 0.25s ease; }
        .ed-card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.4) !important;
          border-color: rgba(129,140,248,0.45) !important;
        }
        .ed-task-row { transition: all 0.25s ease; }
        .ed-task-row:hover { border-color: rgba(129,140,248,0.5) !important; background: #1a2f52 !important; }
        .ed-del-btn { background: none; border: none; cursor: pointer; padding: 4px 8px; color: #64748b; transition: color 0.2s; }
        .ed-del-btn:hover { color: #f87171; }
        .ed-input { 
          background: #1e293b; border: 1px solid rgba(148,163,184,0.2);
          borderRadius: 10px; color: #f8fafc; padding: 10px 14px;
          outline: none; font-family: 'Inter', sans-serif; font-size: 0.95rem;
          transition: border-color 0.2s;
        }
        .ed-input:focus { border-color: rgba(129,140,248,0.6); }
        .ed-add-btn {
          background: #6366f1; border: none; color: white; padding: 10px 20px;
          border-radius: 10px; font-weight: 600; cursor: pointer; white-space: nowrap;
          font-family: 'Inter', sans-serif; transition: background 0.2s;
        }
        .ed-add-btn:hover { background: #818cf8; }
      `}</style>

      {/* bg glows */}
      <div style={{ position: 'absolute', width: 500, height: 500, background: 'radial-gradient(circle,rgba(99,102,241,0.12) 0%,rgba(0,0,0,0) 70%)', top: -150, left: -100, borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', width: 400, height: 400, background: 'radial-gradient(circle,rgba(236,72,153,0.08) 0%,rgba(0,0,0,0) 70%)', bottom: -80, right: -80, borderRadius: '50%', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px 80px', position: 'relative' }}>

        {/* ── Header ── */}
        <motion.header variants={fadeUp} initial="hidden" animate="visible" style={{ textAlign: 'center', marginBottom: 72 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)',
            borderRadius: 99, padding: '6px 18px', marginBottom: 24,
            fontSize: '0.8rem', fontWeight: 700, color: '#a5b4fc', letterSpacing: '0.08em',
          }}>
            ⚡ KỸ THUẬT TỐI ƯU DOM
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, margin: '0 0 20px', lineHeight: 1.15 }}>
            Hiểu rõ về{' '}
            <span style={{
              background: 'linear-gradient(135deg, #818cf8, #e879f9)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>Event Delegation</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
            Bí quyết viết mã JavaScript gọn gàng, tiết kiệm bộ nhớ và dễ xử lý các phần tử được tạo ra động.
          </p>
        </motion.header>

        {/* ── Concept Grid ── */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20, marginBottom: 56 }}>
          {/* Card 1: What is it */}
          <div className="ed-card-hover" style={card}>
            <div style={{
              width: 48, height: 48, borderRadius: 14, flexShrink: 0,
              background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.4rem', marginBottom: 20,
            }}>🕸️</div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 14 }}>Event Delegation là gì?</h2>
            <p style={{ color: '#94a3b8', lineHeight: 1.75, fontSize: '0.95rem', marginBottom: 12 }}>
              Thay vì gắn sự kiện cho từng phần tử con riêng lẻ, ta chỉ gắn{' '}
              <strong style={{ color: '#f8fafc' }}>một sự kiện duy nhất</strong> vào phần tử cha bao ngoài.
            </p>
            <p style={{ color: '#94a3b8', lineHeight: 1.75, fontSize: '0.95rem' }}>
              Kỹ thuật này dựa trên cơ chế{' '}
              <span style={{ color: '#f472b6', fontWeight: 600 }}>Event Bubbling (Sự kiện sủi bọt)</span>:
              khi con bị click, sự kiện lan truyền ngược lên các thẻ cha.
            </p>
          </div>

          {/* Card 2: How it works */}
          <div className="ed-card-hover" style={card}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#a5b4fc', marginBottom: 20, paddingBottom: 14, borderBottom: '1px solid rgba(148,163,184,0.1)' }}>
              Cách hoạt động
            </h3>
            <ol style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
              {[
                { step: 1, text: <>Click vào thẻ <code style={{ background: '#1e293b', color: '#f472b6', padding: '2px 7px', borderRadius: 5, fontFamily: "'Fira Code', monospace", fontSize: '0.85rem' }}>&lt;li&gt;</code> (con)</> },
                { step: 2, text: <>Sự kiện nảy (bubble) lên thẻ <code style={{ background: '#1e293b', color: '#818cf8', padding: '2px 7px', borderRadius: 5, fontFamily: "'Fira Code', monospace", fontSize: '0.85rem' }}>&lt;ul&gt;</code> (cha)</> },
                { step: 3, text: <>Bắt sự kiện tại cha. Dùng <code style={{ background: '#1e293b', color: '#fbbf24', padding: '2px 7px', borderRadius: 5, fontFamily: "'Fira Code', monospace", fontSize: '0.85rem' }}>e.target</code> để biết chính xác phần tử nào vừa bị click.</> },
              ].map(({ step, text }) => (
                <li key={step} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <span style={NUM_STYLE}>{step}</span>
                  <span style={{ color: '#94a3b8', lineHeight: 1.6, fontSize: '0.95rem' }}>{text}</span>
                </li>
              ))}
            </ol>
          </div>
        </motion.div>

        {/* ── Benefits ── */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" style={{ marginBottom: 56 }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 12 }}>Tại sao tối ưu hiệu suất?</h2>
            <div style={{ width: 60, height: 4, background: 'linear-gradient(90deg,#6366f1,#e879f9)', borderRadius: 99, margin: '0 auto' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
            {BENEFIT_CARDS.map((b) => (
              <div key={b.title} className="ed-card-hover" style={{
                ...card, position: 'relative', overflow: 'hidden', padding: '24px',
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                  background: `rgba(${hexToRgb(b.color)},0.1)`, border: `1px solid rgba(${hexToRgb(b.color)},0.2)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem', marginBottom: 16,
                }}>{b.emoji}</div>
                <h3 style={{ fontWeight: 700, marginBottom: 10, fontSize: '1.05rem' }}>{b.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.65 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Interactive Demo ── */}
        <motion.section variants={fadeUp} initial="hidden" animate="visible" style={{
          ...card, border: '1px solid rgba(99,102,241,0.25)',
          boxShadow: '0 0 50px rgba(99,102,241,0.08)', padding: '36px 32px',
        }}>
          {/* Demo Header */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center',
            borderBottom: '1px solid rgba(148,163,184,0.1)', paddingBottom: 24, marginBottom: 28, gap: 16,
          }}>
            <div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: 6, display: 'flex', alignItems: 'center', gap: 10 }}>
                <span>💻</span> Demo Trực Tiếp
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Thêm công việc mới và thử click hoặc xóa chúng.</p>
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <input
                className="ed-input"
                style={{ background: '#1e293b', border: '1px solid rgba(148,163,184,0.2)', borderRadius: 10, color: '#f8fafc', padding: '10px 14px', outline: 'none', fontFamily: 'Inter, sans-serif', fontSize: '0.95rem' }}
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleAdd()}
                placeholder="Nhập công việc..."
              />
              <button className="ed-add-btn" onClick={handleAdd}>+ Thêm</button>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 28 }}>
            {/* Task List */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                <span style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 600 }}>
                  Danh sách{' '}
                  <code style={{ color: '#f472b6', fontFamily: "'Fira Code', monospace", fontSize: '0.8rem' }}>&lt;ul id="todo-list"&gt;</code>
                </span>
                <span style={{
                  fontSize: '0.7rem', background: '#1e293b', color: '#64748b',
                  padding: '3px 10px', borderRadius: 6, border: '1px solid rgba(148,163,184,0.1)',
                }}>Chỉ dùng 1 Listener</span>
              </div>

              <div style={{
                background: '#0a192f', border: '1px solid rgba(148,163,184,0.1)',
                borderRadius: 14, padding: 16, minHeight: 220,
                display: 'flex', flexDirection: 'column', gap: 10,
              }}>
                <AnimatePresence mode="popLayout">
                  {tasks.length === 0 && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#475569', fontSize: '0.85rem', textAlign: 'center', paddingTop: 16 }}>
                      Chưa có công việc nào.
                    </motion.p>
                  )}
                  {tasks.map(task => (
                    <motion.div
                      key={task.id}
                      layout
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                      className="ed-task-row"
                      style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        background: '#112240', padding: '10px 14px', borderRadius: 10,
                        border: '1px solid rgba(148,163,184,0.1)', cursor: 'pointer',
                      }}
                      onClick={() => handleClickTask(task.text)}
                    >
                      <span style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>{task.text}</span>
                      <button
                        className="ed-del-btn"
                        onClick={e => { e.stopPropagation(); handleDelete(task.id, task.text); }}
                        title="Xóa"
                      >🗑</button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Console Output */}
            <div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#94a3b8', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ color: '#34d399' }}>▶</span> Console Output
              </h3>
              <div
                ref={consoleRef}
                style={{
                  background: '#0d1117', border: '1px solid rgba(148,163,184,0.1)',
                  borderRadius: 12, padding: '14px 16px', height: 220, overflowY: 'auto',
                  fontFamily: "'Fira Code', monospace", fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: 6,
                }}
              >
                {logs.map(log => (
                  <div key={log.id} style={{ color: logColor(log.type) }}>
                    {log.time && <span style={{ color: '#475569' }}>[{log.time}]</span>}{' '}
                    <span style={{ marginRight: 4 }}>{logIcon(log.type)}</span>
                    {log.msg}
                  </div>
                ))}
              </div>

              {/* Code snippet */}
              <div style={{
                marginTop: 14, padding: '14px 16px',
                background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.2)',
                borderRadius: 12,
              }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#a5b4fc', marginBottom: 8 }}>Code Delegation Đang Chạy:</p>
                <pre style={{ fontFamily: "'Fira Code', monospace", fontSize: '0.78rem', color: '#94a3b8', overflowX: 'auto', margin: 0, lineHeight: 1.7 }}>
{`list.addEventListener('click', (e) => {
  if (e.target.closest('.delete-btn')) {
    // Xử lý nút Xóa
  } else if (e.target.closest('li')) {
    // Xử lý click vào Item
  }
});`}
                </pre>
              </div>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}
