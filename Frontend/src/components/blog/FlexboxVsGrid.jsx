import React from 'react';
import { Typography, Row, Col, Card, Tag } from 'antd';
import { 
  CodeOutlined, 
  SwapOutlined, 
  AppstoreOutlined,
  ColumnWidthOutlined,
  BlockOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  BulbOutlined,
  BarsOutlined,
  LayoutOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph, Text } = Typography;

const FlexboxVsGrid = () => {
  // Framer Motion variants
  const fadeInUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', width: '100%' }}>

      {/* Inject Custom CSS animations for the visual demos */}
      <style>
        {`
          @keyframes flexAnimation {
            0% { gap: 0.5rem; justify-content: flex-start; }
            33% { gap: 1rem; justify-content: center; }
            66% { gap: 1.5rem; justify-content: space-between; }
            100% { gap: 0.5rem; justify-content: flex-start; }
          }
          
          .custom-demo-flex {
            display: flex;
            animation: flexAnimation 6s infinite ease-in-out;
            padding: 1rem;
            background: rgba(59, 130, 246, 0.1);
            border-radius: 0.75rem;
            border: 2px dashed #3b82f6;
            height: 120px;
            align-items: center;
          }

          @keyframes gridAnimation {
            0% { grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 1fr 1fr; }
            50% { grid-template-columns: 2fr 1fr 1fr; grid-template-rows: 1fr 2fr; }
            100% { grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 1fr 1fr; }
          }

          .custom-demo-grid {
            display: grid;
            gap: 0.5rem;
            animation: gridAnimation 6s infinite ease-in-out;
            padding: 1rem;
            background: rgba(168, 85, 247, 0.1);
            border-radius: 0.75rem;
            border: 2px dashed #a855f7;
            height: 120px;
          }

          .gradient-text-blue-purple {
            background: linear-gradient(135deg, #3b82f6, #a855f7);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .hover-card {
            transition: all 0.3s ease;
          }
          .hover-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px -5px rgba(0,0,0,0.3);
          }
          .hover-card-flex:hover { border-color: #3b82f6 !important; }
          .hover-card-grid:hover { border-color: #a855f7 !important; }
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
        <Tag color="#112240" style={{ border: '1px solid #8892b0', color: '#8892b0', padding: '6px 16px', borderRadius: '20px', fontSize: '14px', marginBottom: '20px', fontWeight: 'bold' }}>
          <CodeOutlined style={{ marginRight: '8px' }}/> Kiến thức CSS Layout
        </Tag>
        <Title level={1} style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '20px', color: '#ccd6f6', lineHeight: 1.2 }}>
          Phân biệt <br/> 
          <span style={{ color: '#3b82f6', display: 'inline-block', position: 'relative' }}>
            Flexbox
            <div style={{ position: 'absolute', bottom: '5px', left: 0, width: '100%', height: '12px', background: 'rgba(59, 130, 246, 0.2)', zIndex: -1, transform: 'skewX(-15deg)' }}></div>
          </span> 
          <span style={{ color: '#8892b0', margin: '0 15px' }}>và</span> 
          <span style={{ color: '#a855f7', display: 'inline-block', position: 'relative' }}>
            CSS Grid
            <div style={{ position: 'absolute', bottom: '5px', left: 0, width: '100%', height: '12px', background: 'rgba(168, 85, 247, 0.2)', zIndex: -1, transform: 'skewX(-15deg)' }}></div>
          </span>
        </Title>
        <Paragraph style={{ fontSize: '1.2rem', color: '#8892b0', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8 }}>
          Khám phá sự khác biệt cốt lõi giữa hai hệ thống bố cục mạnh mẽ nhất trong CSS hiện đại và cách chọn công cụ phù hợp cho dự án của bạn.
        </Paragraph>
      </motion.div>

      {/* Core Concept Section */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }} 
        variants={fadeInUp}
      >
        <Title level={2} className="gradient-text-blue-purple" style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem' }}>
          Điểm Khác Biệt Cốt Lõi: Số Chiều (Dimensions)
        </Title>
        
        <Row gutter={[30, 30]}>
          {/* Flexbox Demo */}
          <Col xs={24} md={12}>
            <div className="hover-card" style={{ background: '#112240', borderRadius: '24px', padding: '30px', borderTop: '4px solid #3b82f6', border: '1px solid rgba(136, 146, 176, 0.1)', height: '100%' }}>
              <Title level={3} style={{ color: '#3b82f6', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SwapOutlined /> Flexbox (1 Chiều)
              </Title>
              <Paragraph style={{ color: '#8892b0', fontSize: '1.05rem', marginBottom: '30px', minHeight: '60px' }}>
                Xử lý bố cục theo <Text strong style={{ color: '#ccd6f6' }}>hàng (row)</Text> HOẶC <Text strong style={{ color: '#ccd6f6' }}>cột (column)</Text> tại một thời điểm. Kích thước nội dung quyết định không gian (Content-first).
              </Paragraph>
              
              <div className="custom-demo-flex">
                <div style={{ width: '60px', height: '50px', background: '#3b82f6', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold' }}>1</div>
                <div style={{ width: '90px', height: '50px', background: '#2563eb', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold' }}>2</div>
                <div style={{ width: '50px', height: '50px', background: '#60a5fa', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold' }}>3</div>
              </div>
              <div style={{ textAlign: 'center', color: '#8892b0', marginTop: '15px', fontStyle: 'italic', fontSize: '0.9rem' }}>
                ▶ Trục linh hoạt (Flex axis)
              </div>
            </div>
          </Col>

          {/* Grid Demo */}
          <Col xs={24} md={12}>
            <div className="hover-card" style={{ background: '#112240', borderRadius: '24px', padding: '30px', borderTop: '4px solid #a855f7', border: '1px solid rgba(136, 146, 176, 0.1)', height: '100%' }}>
              <Title level={3} style={{ color: '#a855f7', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <AppstoreOutlined /> CSS Grid (2 Chiều)
              </Title>
              <Paragraph style={{ color: '#8892b0', fontSize: '1.05rem', marginBottom: '30px', minHeight: '60px' }}>
                Xử lý bố cục cả <Text strong style={{ color: '#ccd6f6' }}>hàng và cột</Text> cùng lúc. Định nghĩa khung lưới trước, đặt nội dung vào sau (Layout-first).
              </Paragraph>
              
              <div className="custom-demo-grid">
                <div style={{ background: '#a855f7', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold' }}>1</div>
                <div style={{ background: '#c084fc', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold' }}>2</div>
                <div style={{ background: '#9333ea', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold' }}>3</div>
                <div style={{ background: '#7e22ce', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold', gridColumn: 'span 2' }}>4</div>
                <div style={{ background: '#d8b4fe', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4c1d95', fontWeight: 'bold' }}>5</div>
              </div>
              <div style={{ textAlign: 'center', color: '#8892b0', marginTop: '15px', fontStyle: 'italic', fontSize: '0.9rem' }}>
                ▶ Hệ thống lưới đa chiều
              </div>
            </div>
          </Col>
        </Row>
      </motion.section>

      {/* Comparison Table Section */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }} 
        variants={fadeInUp}
      >
        <Title level={2} style={{ textAlign: 'center', marginBottom: '40px', color: '#ccd6f6' }}>Bảng So Sánh Chi Tiết</Title>
        
        <div style={{ background: '#112240', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(136, 146, 176, 0.2)' }}>
          {/* Header */}
          <Row style={{ background: 'rgba(2, 12, 27, 0.5)', borderBottom: '1px solid rgba(136, 146, 176, 0.2)' }}>
            <Col xs={0} md={8} style={{ padding: '20px', fontWeight: 'bold', color: '#8892b0', textTransform: 'uppercase' }}>Tiêu chí</Col>
            <Col xs={12} md={8} style={{ padding: '20px', fontWeight: 'bold', color: '#3b82f6', fontSize: '1.2rem', textAlign: 'center', borderLeft: '1px solid rgba(136, 146, 176, 0.1)', background: 'rgba(59, 130, 246, 0.05)' }}>Flexbox</Col>
            <Col xs={12} md={8} style={{ padding: '20px', fontWeight: 'bold', color: '#a855f7', fontSize: '1.2rem', textAlign: 'center', borderLeft: '1px solid rgba(136, 146, 176, 0.1)', background: 'rgba(168, 85, 247, 0.05)' }}>CSS Grid</Col>
          </Row>

          {/* Rows */}
          {[
            { 
              icon: <ColumnWidthOutlined />, title: 'Cách tiếp cận', 
              flex: <><Tag color="#3b82f6" style={{marginBottom:'10px'}}>Content-first</Tag><br/>Kích thước nội dung quyết định layout.</>, 
              grid: <><Tag color="#a855f7" style={{marginBottom:'10px'}}>Layout-first</Tag><br/>Lưới quyết định vị trí của nội dung.</> 
            },
            { 
              icon: <BlockOutlined />, title: 'Mục đích chính', 
              flex: 'Căn chỉnh, phân bổ khoảng trống, sắp xếp các phần tử con trong một container.', 
              grid: 'Xây dựng bố cục (layout) tổng thể, phức tạp cho trang web.' 
            },
            { 
              icon: <LayoutOutlined />, title: 'Khả năng xếp chồng', 
              flex: <><Text type="danger" style={{display:'block', marginBottom:'5px'}}><CloseCircleOutlined /> Rất khó</Text>Thường phải dùng thêm position: absolute.</>, 
              grid: <><Text type="success" style={{color:'#64ffda', display:'block', marginBottom:'5px'}}><CheckCircleOutlined /> Dễ dàng</Text>Có thể đặt nhiều phần tử đè lên nhau trong cùng grid cell.</> 
            }
          ].map((row, idx) => (
            <Row key={idx} style={{ borderBottom: idx !== 2 ? '1px solid rgba(136, 146, 176, 0.1)' : 'none' }}>
              <Col xs={24} md={8} style={{ padding: '24px', color: '#ccd6f6', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#8892b0', fontSize: '1.2rem' }}>{row.icon}</span> {row.title}
              </Col>
              <Col xs={12} md={8} style={{ padding: '24px', color: '#8892b0', borderLeft: '1px solid rgba(136, 146, 176, 0.1)', lineHeight: 1.6 }}>{row.flex}</Col>
              <Col xs={12} md={8} style={{ padding: '24px', color: '#8892b0', borderLeft: '1px solid rgba(136, 146, 176, 0.1)', lineHeight: 1.6 }}>{row.grid}</Col>
            </Row>
          ))}
        </div>
      </motion.section>

      {/* Use Cases Section */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }} 
        variants={fadeInUp}
      >
        <Title level={2} style={{ textAlign: 'center', marginBottom: '40px', color: '#ccd6f6' }}>Khi Nào Nên Sử Dụng?</Title>
        
        <Row gutter={[40, 40]}>
          <Col xs={24} md={12}>
            <div className="hover-card hover-card-flex" style={{ padding: '40px 30px', background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(10, 25, 47, 1) 100%)', border: '1px solid rgba(59, 130, 246, 0.2)', borderRadius: '24px', height: '100%' }}>
              <div style={{ width: '60px', height: '60px', background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '25px' }}>
                <BarsOutlined />
              </div>
              <Title level={3} style={{ color: '#ccd6f6', marginBottom: '25px' }}>Nên chọn Flexbox khi:</Title>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#8892b0', fontSize: '1.1rem', lineHeight: 1.8 }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '15px' }}>
                  <CheckCircleOutlined style={{ color: '#3b82f6', marginTop: '6px' }}/>
                  <Text style={{ color: '#8892b0' }}>Cần <strong style={{ color: '#ccd6f6' }}>căn giữa</strong> một phần tử tuyệt đối (dọc & ngang).</Text>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '15px' }}>
                  <CheckCircleOutlined style={{ color: '#3b82f6', marginTop: '6px' }}/>
                  <Text style={{ color: '#8892b0' }}>Thiết kế các UI nhỏ lẻ: <strong style={{ color: '#ccd6f6' }}>Navigation bar</strong>, thanh công cụ, icon kèm text.</Text>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                  <CheckCircleOutlined style={{ color: '#3b82f6', marginTop: '6px' }}/>
                  <Text style={{ color: '#8892b0' }}>Có một danh sách phần tử chỉ cần tự động <strong style={{ color: '#ccd6f6' }}>bẻ dòng (wrap)</strong> khi hết chỗ mà không gò bó vị trí cột.</Text>
                </li>
              </ul>
            </div>
          </Col>

          <Col xs={24} md={12}>
            <div className="hover-card hover-card-grid" style={{ padding: '40px 30px', background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.05) 0%, rgba(10, 25, 47, 1) 100%)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '24px', height: '100%' }}>
              <div style={{ width: '60px', height: '60px', background: 'rgba(168, 85, 247, 0.1)', color: '#a855f7', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '25px' }}>
                <AppstoreOutlined />
              </div>
              <Title level={3} style={{ color: '#ccd6f6', marginBottom: '25px' }}>Nên chọn CSS Grid khi:</Title>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#8892b0', fontSize: '1.1rem', lineHeight: 1.8 }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '15px' }}>
                  <CheckCircleOutlined style={{ color: '#a855f7', marginTop: '6px' }}/>
                  <Text style={{ color: '#8892b0' }}>Xây dựng <strong style={{ color: '#ccd6f6' }}>bố cục tổng thể</strong> (Header, Sidebar, Main, Footer).</Text>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '15px' }}>
                  <CheckCircleOutlined style={{ color: '#a855f7', marginTop: '6px' }}/>
                  <Text style={{ color: '#8892b0' }}>Thiết kế <strong style={{ color: '#ccd6f6' }}>Image Gallery</strong> với kích thước ảnh không đồng đều cần ghép khít.</Text>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                  <CheckCircleOutlined style={{ color: '#a855f7', marginTop: '6px' }}/>
                  <Text style={{ color: '#8892b0' }}>Cần kiểm soát <strong style={{ color: '#ccd6f6' }}>vị trí chính xác</strong> của phần tử ở một hàng/cột cụ thể.</Text>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </motion.section>

      {/* PRO TIP Highlight */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.5 }} 
        variants={fadeInUp}
        style={{ position: 'relative', overflow: 'hidden', padding: '50px 40px', background: 'linear-gradient(135deg, #112240 0%, #020c1b 100%)', borderRadius: '24px', border: '1px solid rgba(255, 189, 46, 0.2)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
      >
        <BulbOutlined style={{ position: 'absolute', right: '-20px', bottom: '-40px', fontSize: '180px', color: 'rgba(255, 189, 46, 0.05)', transform: 'rotate(-20deg)' }} />
        
        <Row gutter={[30, 0]} align="middle" style={{ position: 'relative', zIndex: 1 }}>
          <Col xs={24} sm={6} md={4} style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div style={{ width: '80px', height: '80px', background: '#ffbd2e', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 40px rgba(255,189,46,0.3)' }}>
              <BulbOutlined style={{ fontSize: '40px', color: '#112240' }} />
            </div>
          </Col>
          <Col xs={24} sm={18} md={20}>
            <Title level={3} style={{ color: '#ffbd2e', marginBottom: '15px' }}>Mẹo Nhỏ Dành Cho Dev</Title>
            <Paragraph style={{ color: '#8892b0', fontSize: '1.2rem', margin: 0, lineHeight: 1.8 }}>
              Trong thực tế, bạn <strong style={{ color: '#ccd6f6' }}>không cần phải chọn một trong hai</strong>. Best practice là <Text code style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none' }}>kết hợp cả hai</Text>! Dùng <strong style={{ color: '#a855f7' }}>CSS Grid</strong> để tạo bộ khung lớn cho toàn trang, và dùng <strong style={{ color: '#3b82f6' }}>Flexbox</strong> để căn chỉnh các chi tiết nhỏ bên trong các ô lưới đó.
            </Paragraph>
          </Col>
        </Row>
      </motion.section>

    </div>
  );
};

export default FlexboxVsGrid;
