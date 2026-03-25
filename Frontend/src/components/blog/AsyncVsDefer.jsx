import React from 'react';
import { Typography, Row, Col, Card, Tag } from 'antd';
import { 
  ThunderboltOutlined, 
  ArrowDownOutlined,
  PauseCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
  DownloadOutlined,
  CaretRightOutlined,
  SwapOutlined,
  OrderedListOutlined,
  InfoCircleOutlined,
  BulbOutlined,
  ExclamationCircleOutlined,
  CodeOutlined,
  TableOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph, Text } = Typography;

const AsyncVsDefer = () => {
  // Framer Motion variants
  const fadeInUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', width: '100%' }}>
      
      {/* Inject Custom CSS animations for the timeline shimmering effect */}
      <style>
        {`
          .gradient-text-multi {
            background: linear-gradient(135deg, #3b82f6, #a855f7, #ec4899);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .tl-track {
            display: flex;
            align-items: center;
            height: 30px;
            margin-bottom: 8px;
            border-radius: 6px;
            overflow: hidden;
            background-color: rgba(255,255,255,0.05);
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.5);
          }

          .tl-html { background-color: #3b82f6; color: white; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: bold; position: relative; overflow: hidden; }
          .tl-dl { background-color: #8892b0; color: white; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: bold; position: relative; overflow: hidden; }
          .tl-exec { background-color: #e83e8c; color: white; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: bold; position: relative; overflow: hidden; z-index: 10; box-shadow: 0 0 10px rgba(232, 62, 140, 0.4); }

          .tl-html::after, .tl-dl::after, .tl-exec::after {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transform: translateX(-100%);
            animation: shimmer 2s infinite;
          }

          @keyframes shimmer {
            100% { transform: translateX(100%); }
          }
          
          @keyframes floatY {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0px); }
          }

          .animate-float {
            animation: floatY 4s ease-in-out infinite;
          }

          .concept-card-hover {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .concept-card-hover:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          }
        `}
      </style>

      {/* Hero Section */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.3 }} 
        variants={fadeInUp} 
        style={{ textAlign: 'center', padding: '40px 20px' }}
      >
        <div className="animate-float" style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', borderRadius: '20px', fontSize: '14px', marginBottom: '20px', fontWeight: 'bold', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
          <ThunderboltOutlined style={{ marginRight: '8px', color: '#ffbd2e' }}/> Tối ưu hóa hiệu suất Web
        </div>
        
        <Title level={1} style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '20px', color: '#ccd6f6', lineHeight: 1.2 }}>
          Hiểu rõ <Text code style={{ fontSize: '2.5rem', background: 'rgba(255, 189, 46, 0.1)', color: '#ffbd2e', border: 'none' }}>&lt;script&gt;</Text>, <br/>
          <span style={{ color: '#a855f7' }}>async</span> và <span style={{ color: '#64ffda' }}>defer</span>
        </Title>
        
        <Paragraph style={{ fontSize: '1.2rem', color: '#8892b0', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8 }}>
          Giải quyết triệt để vấn đề <strong style={{ color: '#e83e8c' }}>"chặn hiển thị" (render-blocking)</strong> để mang lại trải nghiệm mượt mà nhất cho người dùng khi trang web tải các tệp JavaScript bên ngoài.
        </Paragraph>
      </motion.div>

      {/* 3 Concept Cards Section */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }} 
        variants={staggerContainer}
      >
        <Row gutter={[30, 30]}>
          
          {/* Normal Script */}
          <Col xs={24} lg={8}>
            <motion.div variants={fadeInUp} style={{ height: '100%' }}>
              <Card 
                className="concept-card-hover"
                style={{ background: '#112240', border: 'none', borderTop: '4px solid #ffbd2e', borderRadius: '16px', height: '100%' }}
                bodyStyle={{ padding: '30px' }}
              >
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(255, 189, 46, 0.1)', color: '#ffbd2e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '25px' }}>
                  <PauseCircleOutlined />
                </div>
                <Title level={3} style={{ color: '#ccd6f6', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  &lt;script&gt; <span style={{ fontSize: '14px', color: '#8892b0', fontWeight: 'normal' }}>(Thông thường)</span>
                </Title>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#8892b0', lineHeight: 1.8 }}>
                  <li style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}><CloseCircleOutlined style={{ color: '#ff5f56', marginTop: '6px' }}/> <span><strong style={{ color: '#ccd6f6' }}>Chặn HTML:</strong> Trình duyệt lập tức dừng phân tích.</span></li>
                  <li style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}><DownloadOutlined style={{ color: '#8892b0', marginTop: '6px' }}/> <span>Tải file JavaScript về.</span></li>
                  <li style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}><CaretRightOutlined style={{ color: '#ff5f56', marginTop: '6px' }}/> <span>Thực thi ngay lập tức khi tải xong.</span></li>
                  <li style={{ display: 'flex', gap: '12px' }}><CaretRightOutlined style={{ color: '#3b82f6', marginTop: '6px' }}/> <span>Tiếp tục phân tích HTML còn lại.</span></li>
                </ul>
                <div style={{ mt: '25px', padding: '15px', background: 'rgba(255, 95, 86, 0.1)', color: '#ff5f56', borderRadius: '8px', border: '1px solid rgba(255, 95, 86, 0.2)', fontSize: '14px', marginTop: '20px' }}>
                  <ExclamationCircleOutlined /> Gây ra màn hình trắng (render-blocking), làm chậm tốc độ hiển thị.
                </div>
              </Card>
            </motion.div>
          </Col>

          {/* Async Script */}
          <Col xs={24} lg={8}>
            <motion.div variants={fadeInUp} style={{ height: '100%' }}>
              <Card 
                className="concept-card-hover"
                style={{ background: '#112240', border: 'none', borderTop: '4px solid #a855f7', borderRadius: '16px', height: '100%' }}
                bodyStyle={{ padding: '30px' }}
              >
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(168, 85, 247, 0.1)', color: '#a855f7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '25px' }}>
                  <ThunderboltOutlined />
                </div>
                <Title level={3} style={{ color: '#ccd6f6', marginBottom: '20px' }}>
                  async
                </Title>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#8892b0', lineHeight: 1.8 }}>
                  <li style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}><CheckCircleOutlined style={{ color: '#27c93f', marginTop: '6px' }}/> <span><strong style={{ color: '#ccd6f6' }}>Tải song song:</strong> Tải JS cùng lúc với phân tích HTML.</span></li>
                  <li style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}><ClockCircleOutlined style={{ color: '#a855f7', marginTop: '6px' }}/> <span><strong style={{ color: '#ccd6f6' }}>Thực thi ngay:</strong> Chạy script ngay khi tải xong (tạm dừng HTML).</span></li>
                  <li style={{ display: 'flex', gap: '12px' }}><SwapOutlined style={{ color: '#ffbd2e', marginTop: '6px' }}/> <span><strong style={{ color: '#ccd6f6' }}>Mất thứ tự:</strong> File nào tải xong trước sẽ chạy trước.</span></li>
                </ul>
                <div style={{ mt: '25px', padding: '15px', background: 'rgba(168, 85, 247, 0.1)', color: '#a855f7', borderRadius: '8px', border: '1px solid rgba(168, 85, 247, 0.2)', fontSize: '14px', marginTop: '20px' }}>
                  <BulbOutlined /> Phù hợp: Google Analytics, quảng cáo (hoạt động độc lập).
                </div>
              </Card>
            </motion.div>
          </Col>

          {/* Defer Script */}
          <Col xs={24} lg={8}>
            <motion.div variants={fadeInUp} style={{ height: '100%' }}>
              <Card 
                className="concept-card-hover"
                style={{ background: '#112240', border: 'none', borderTop: '4px solid #64ffda', borderRadius: '16px', height: '100%' }}
                bodyStyle={{ padding: '30px' }}
              >
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(100, 255, 218, 0.1)', color: '#64ffda', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '25px' }}>
                  <ClockCircleOutlined />
                </div>
                <Title level={3} style={{ color: '#ccd6f6', marginBottom: '20px' }}>
                  defer
                </Title>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#8892b0', lineHeight: 1.8 }}>
                  <li style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}><CheckCircleOutlined style={{ color: '#27c93f', marginTop: '6px' }}/> <span><strong style={{ color: '#ccd6f6' }}>Tải song song:</strong> Tải JS cùng lúc với HTML giống async.</span></li>
                  <li style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}><PauseCircleOutlined style={{ color: '#64ffda', marginTop: '6px' }}/> <span><strong style={{ color: '#ccd6f6' }}>Chờ đợi:</strong> Chỉ thực thi sau khi HTML đã phân tích xong 100%.</span></li>
                  <li style={{ display: 'flex', gap: '12px' }}><OrderedListOutlined style={{ color: '#3b82f6', marginTop: '6px' }}/> <span><strong style={{ color: '#ccd6f6' }}>Giữ nguyên thứ tự:</strong> Các script chạy đúng thứ tự khai báo.</span></li>
                </ul>
                <div style={{ mt: '25px', padding: '15px', background: 'rgba(100, 255, 218, 0.1)', color: '#64ffda', borderRadius: '8px', border: '1px solid rgba(100, 255, 218, 0.2)', fontSize: '14px', marginTop: '20px' }}>
                  <CheckCircleOutlined /> Phù hợp: Hầu hết thư viện (React, Vue), script thao tác DOM.
                </div>
              </Card>
            </motion.div>
          </Col>

        </Row>
      </motion.section>

      {/* Visual Timeline Diagram Section */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }} 
        variants={fadeInUp}
      >
        <div style={{ background: '#0a192f', borderRadius: '24px', padding: '40px', border: '1px solid rgba(136, 146, 176, 0.2)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Title level={2} style={{ color: '#ccd6f6', marginBottom: '10px' }}>Biểu đồ Thực Thi (Execution Timeline)</Title>
            <Text style={{ color: '#8892b0', fontSize: '1.1rem' }}>Trực quan hóa sự khác biệt giữa các cơ chế tải mô-đun JavaScript.</Text>
          </div>

          {/* Legend */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', color: '#ccd6f6', fontSize: '14px' }}>
              <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: '#3b82f6', marginRight: '8px' }}></div> Phân tích HTML (Parsing)
            </div>
            <div style={{ display: 'flex', alignItems: 'center', color: '#ccd6f6', fontSize: '14px' }}>
              <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: '#8892b0', marginRight: '8px' }}></div> Tải Script (Download)
            </div>
            <div style={{ display: 'flex', alignItems: 'center', color: '#ccd6f6', fontSize: '14px' }}>
              <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: '#e83e8c', marginRight: '8px', boxShadow: '0 0 8px rgba(232, 62, 140, 0.6)' }}></div> Thực thi (Execution)
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            
            {/* Normal Timeline */}
            <div>
              <Title level={4} style={{ color: '#ffbd2e', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CodeOutlined /> &lt;script&gt;
              </Title>
              <div className="tl-track" style={{ position: 'relative' }}>
                <div className="tl-html" style={{ width: '25%', borderTopLeftRadius: '6px', borderBottomLeftRadius: '6px' }}>HTML</div>
                <div className="tl-dl" style={{ width: '20%' }}>Tải JS</div>
                <div className="tl-exec" style={{ width: '15%' }}>Chạy JS</div>
                <div className="tl-html" style={{ width: '40%', borderTopRightRadius: '6px', borderBottomRightRadius: '6px' }}>Tiếp tục HTML</div>
              </div>
              <Text style={{ color: '#8892b0', fontSize: '0.85rem' }}>HTML bị chặn hoàn toàn trong quá trình Tải và Chạy JS (Màn hình trắng).</Text>
            </div>

            {/* Async Timeline */}
            <div>
              <Title level={4} style={{ color: '#a855f7', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ThunderboltOutlined /> &lt;script async&gt;
              </Title>
              <div className="tl-track" style={{ position: 'relative', zIndex: 10 }}>
                <div className="tl-html" style={{ width: '45%', borderTopLeftRadius: '6px', borderBottomLeftRadius: '6px' }}>HTML</div>
                <div className="tl-exec" style={{ width: '15%' }}>Chạy JS</div>
                <div className="tl-html" style={{ width: '40%', borderTopRightRadius: '6px', borderBottomRightRadius: '6px' }}>Tiếp tục HTML</div>
              </div>
              <div className="tl-track" style={{ position: 'relative', marginTop: '-12px', height: '20px', opacity: 0.8, boxShadow: 'none', background: 'transparent' }}>
                <div style={{ width: '25%' }}></div>
                <div className="tl-dl" style={{ width: '20%', borderRadius: '4px', fontSize: '0.65rem' }}>Tải JS (Song song)</div>
              </div>
              <Text style={{ color: '#8892b0', fontSize: '0.85rem' }}>Tải ngầm song song, tải xong lập tức chặn HTML để thực thi.</Text>
            </div>

            {/* Defer Timeline */}
            <div>
              <Title level={4} style={{ color: '#64ffda', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ClockCircleOutlined /> &lt;script defer&gt;
              </Title>
              <div className="tl-track" style={{ position: 'relative', zIndex: 10 }}>
                <div className="tl-html" style={{ width: '85%', borderTopLeftRadius: '6px', borderBottomLeftRadius: '6px' }}>Phân tích toàn bộ HTML hoàn tất</div>
                <div className="tl-exec" style={{ flex: 1, borderTopRightRadius: '6px', borderBottomRightRadius: '6px' }}>Chạy JS</div>
              </div>
              <div className="tl-track" style={{ position: 'relative', marginTop: '-12px', height: '20px', opacity: 0.8, boxShadow: 'none', background: 'transparent' }}>
                <div style={{ width: '25%' }}></div>
                <div className="tl-dl" style={{ width: '20%', borderRadius: '4px', fontSize: '0.65rem' }}>Tải JS (Song song)</div>
              </div>
              <Text style={{ color: '#8892b0', fontSize: '0.85rem' }}>Tải ngầm kiên nhẫn, chờ Document Object Model xây dựng 100% rồi mới thực thi đúng thứ tự.</Text>
            </div>

          </div>
        </div>
      </motion.section>

      {/* Summary Table Section */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }} 
        variants={fadeInUp}
      >
        <Title level={2} style={{ textAlign: 'center', marginBottom: '30px', color: '#ccd6f6' }}>Bảng So Sánh Nhanh</Title>
        <div style={{ background: '#112240', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(136, 146, 176, 0.2)' }}>
          {/* Header */}
          <Row style={{ background: 'rgba(2, 12, 27, 0.5)', borderBottom: '1px solid rgba(136, 146, 176, 0.2)' }}>
            <Col xs={0} md={6} style={{ padding: '20px', fontWeight: 'bold', color: '#8892b0', textTransform: 'uppercase' }}>Tính năng</Col>
            <Col xs={8} md={6} style={{ padding: '20px', fontWeight: 'bold', color: '#ffbd2e', fontSize: '1.1rem', textAlign: 'center', background: 'rgba(255, 189, 46, 0.05)' }}>&lt;script&gt;</Col>
            <Col xs={8} md={6} style={{ padding: '20px', fontWeight: 'bold', color: '#a855f7', fontSize: '1.1rem', textAlign: 'center', borderLeft: '1px solid rgba(136, 146, 176, 0.1)', background: 'rgba(168, 85, 247, 0.05)' }}>async</Col>
            <Col xs={8} md={6} style={{ padding: '20px', fontWeight: 'bold', color: '#64ffda', fontSize: '1.1rem', textAlign: 'center', borderLeft: '1px solid rgba(136, 146, 176, 0.1)', background: 'rgba(100, 255, 218, 0.05)' }}>defer</Col>
          </Row>

          {/* Rows */}
          {[
            { 
              title: 'Tải file', 
              normal: <span style={{ color: '#ff5f56' }}>Chặn HTML</span>, 
              async: <span style={{ color: '#27c93f' }}>Song song</span>,
              defer: <span style={{ color: '#27c93f' }}>Song song</span>
            },
            { 
              title: 'Thực thi', 
              normal: 'Ngay lập tức', 
              async: <span style={{ color: '#a855f7', fontWeight: 'bold' }}>Ngay khi tải xong</span>,
              defer: <span style={{ color: '#64ffda', fontWeight: 'bold' }}>Sau khi HTML Parse xong</span>
            },
            { 
              title: 'Thứ tự chạy', 
              normal: 'Đúng thứ tự khai báo', 
              async: <span style={{ color: '#ff5f56' }}>Mất thứ tự <br/><span style={{ fontSize: '11px', color: '#8892b0' }}>(Xong trước chạy trước)</span></span>,
              defer: <span style={{ color: '#27c93f' }}>Đúng thứ tự</span>
            },
            { 
              title: 'Ứng dụng', 
              normal: <span style={{ fontSize: '13px' }}>Script quan trọng cần thiết trước khi render.</span>, 
              async: <span style={{ fontSize: '13px' }}>Google Analytics, Ads (Độc lập, siêu nhẹ).</span>,
              defer: <span style={{ fontSize: '13px' }}>Frameworks (React), DOM Scripts, Main Logic.</span>
            }
          ].map((row, idx) => (
            <Row key={idx} style={{ borderBottom: idx !== 3 ? '1px solid rgba(136, 146, 176, 0.1)' : 'none' }}>
              <Col xs={24} md={6} style={{ padding: '20px', color: '#ccd6f6', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                <TableOutlined style={{ marginRight: '10px', color: '#8892b0' }}/> {row.title}
              </Col>
              <Col xs={8} md={6} style={{ padding: '20px', color: '#8892b0', textAlign: 'center', borderLeft: '1px solid rgba(136, 146, 176, 0.1)' }}>{row.normal}</Col>
              <Col xs={8} md={6} style={{ padding: '20px', color: '#8892b0', textAlign: 'center', borderLeft: '1px solid rgba(136, 146, 176, 0.1)' }}>{row.async}</Col>
              <Col xs={8} md={6} style={{ padding: '20px', color: '#8892b0', textAlign: 'center', borderLeft: '1px solid rgba(136, 146, 176, 0.1)' }}>{row.defer}</Col>
            </Row>
          ))}
        </div>
      </motion.section>

      {/* PRO TIP Highlight */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.5 }} 
        variants={fadeInUp}
        style={{ position: 'relative', overflow: 'hidden', padding: '40px', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(10, 25, 47, 1) 100%)', borderRadius: '24px', border: '1px solid rgba(100, 255, 218, 0.3)', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
      >
        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
          <div style={{ width: '60px', height: '60px', background: '#64ffda', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 0 30px rgba(100, 255, 218, 0.3)' }}>
            <BulbOutlined style={{ fontSize: '30px', color: '#0a192f' }} />
          </div>
          <div>
            <Title level={3} style={{ color: '#64ffda', marginBottom: '15px' }}>💡 Best Practice (Lời khuyên vàng)</Title>
            <Paragraph style={{ color: '#8892b0', fontSize: '1.15rem', margin: 0, lineHeight: 1.8 }}>
              Theo tiêu chuẩn tối ưu hóa hiện đại, hãy luôn đặt thẻ <Text code style={{ background: 'transparent', color: '#ccd6f6', border: 'none' }}>&lt;script&gt;</Text> bên trong khối <Text code style={{ background: 'transparent', color: '#ccd6f6', border: 'none' }}>&lt;head&gt;</Text> và sử dụng thuộc tính định tuyến <Tag color="#64ffda" style={{ color: '#0a192f', fontWeight: 'bold' }}>defer</Tag> cho 95% các mã nguồn ứng dụng (React, Logic) để đảm bảo Tốc độ tải trang cực nhanh và UX mượt mà nhất.
            </Paragraph>
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default AsyncVsDefer;
