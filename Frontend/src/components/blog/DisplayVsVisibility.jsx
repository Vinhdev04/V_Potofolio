import React, { useState } from 'react';
import { Typography, Row, Col, Card, Tag, Button } from 'antd';
import { 
  CodeOutlined, 
  PlaySquareOutlined, 
  CheckCircleOutlined,
  ColumnWidthOutlined,
  BlockOutlined,
  BranchesOutlined,
  ThunderboltOutlined,
  BulbOutlined,
  EyeInvisibleOutlined,
  DeleteOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph, Text } = Typography;

const DisplayVsVisibility = () => {
  // State cho Interactive Demo
  const [boxState, setBoxState] = useState('normal'); // 'normal', 'none', 'hidden'

  // Animations variants
  const fadeInUp = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  // Status message logic
  const getStatusMessage = () => {
    if (boxState === 'normal') return "Box hiện đang hiển thị bình thường. Box 1 và Box 3 giữ nguyên vị trí.";
    if (boxState === 'none') return "Thuộc tính display: none đã xóa phần tử khỏi layout. Box 3 đã trượt lên để lấp đầy chỗ trống.";
    if (boxState === 'hidden') return "Thuộc tính visibility: hidden đã giấu phần tử, nhưng không gian của nó vẫn được giữ lại. Box 3 không bị dịch chuyển.";
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', width: '100%' }}>
      
      {/* Hero Section */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.3 }} 
        variants={fadeInUp} 
        style={{ textAlign: 'center', padding: '40px 20px', position: 'relative' }}
      >
        <Tag color="#112240" style={{ border: '1px solid #3b82f6', color: '#3b82f6', padding: '6px 16px', borderRadius: '20px', fontSize: '14px', marginBottom: '20px', fontWeight: 'bold' }}>
          <CodeOutlined style={{ marginRight: '8px' }}/> CSS Interview Question
        </Tag>
        <Title level={1} style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '20px', color: '#ccd6f6', lineHeight: 1.3 }}>
          Sự khác biệt giữa <br/> 
          <Text code style={{ fontSize: '2.5rem', background: 'rgba(232, 62, 140, 0.1)', color: '#e83e8c', border: 'none', margin: '0 10px' }}>display: none</Text> 
          <span style={{ color: '#8892b0', fontSize: '2rem' }}>và</span> 
          <Text code style={{ fontSize: '2.5rem', background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', border: 'none', margin: '0 10px' }}>visibility: hidden</Text>
        </Title>
        <Paragraph style={{ fontSize: '1.2rem', color: '#8892b0', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
          Điểm khác biệt cốt lõi nhất nằm ở cách hai thuộc tính này tác động đến <Text strong style={{ color: '#64ffda' }}>Luồng tài liệu (Document Flow)</Text> của trang web. Hãy cùng khám phá chi tiết!
        </Paragraph>
      </motion.div>

      {/* Interactive Demo Section */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }} 
        variants={fadeInUp}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
          <div style={{ width: '45px', height: '45px', background: 'rgba(100, 255, 218, 0.1)', color: '#64ffda', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
            <PlaySquareOutlined />
          </div>
          <Title level={2} style={{ color: '#ccd6f6', margin: 0 }}>Khu vực Trải nghiệm thực tế</Title>
        </div>

        <div style={{ background: '#112240', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(136, 146, 176, 0.2)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
          {/* Browser Header Mock */}
          <div style={{ background: 'rgba(2, 12, 27, 0.5)', padding: '12px 20px', display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(136, 146, 176, 0.2)' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
            </div>
            <div style={{ margin: '0 auto', background: '#0a192f', color: '#8892b0', padding: '4px 80px', borderRadius: '6px', fontSize: '12px', fontFamily: 'monospace', border: '1px solid rgba(136, 146, 176, 0.1)' }}>
              example.com/demo
            </div>
          </div>

          <div style={{ padding: '40px' }}>
            <Row gutter={[40, 40]} align="middle">
              {/* Visual Area */}
              <Col xs={24} lg={14}>
                <div style={{ background: '#0a192f', border: '2px dashed rgba(136, 146, 176, 0.3)', borderRadius: '16px', padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative', minHeight: '350px' }}>
                  
                  {/* Box 1 */}
                  <div style={{ background: 'rgba(136, 146, 176, 0.1)', border: '1px solid rgba(136, 146, 176, 0.3)', color: '#8892b0', padding: '20px', borderRadius: '12px', textAlign: 'center', fontWeight: 'bold' }}>
                    Box 1 (Normal)
                  </div>

                  {/* Target Box Wrapper (for ghost outline) */}
                  <div style={{ position: 'relative' }}>
                    
                    {/* Ghost Outline (Only shows when hidden) */}
                    {boxState === 'hidden' && (
                      <div style={{ position: 'absolute', inset: 0, border: '2px dashed #3b82f6', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                        <span style={{ color: '#3b82f6', fontFamily: 'monospace', fontSize: '13px' }}>Khoảng trống được giữ lại</span>
                      </div>
                    )}

                    {/* Actual Target Box */}
                    <div style={{ 
                      background: 'linear-gradient(135deg, #e83e8c 0%, #3b82f6 100%)', 
                      color: 'white', 
                      padding: '24px', 
                      borderRadius: '12px', 
                      textAlign: 'center', 
                      fontWeight: 'bold', 
                      fontSize: '18px',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                      display: boxState === 'none' ? 'none' : 'block',
                      visibility: boxState === 'hidden' ? 'hidden' : 'visible',
                      transition: 'all 0.3s'
                    }}>
                      Target Box
                    </div>
                  </div>

                  {/* Box 3 */}
                  <div style={{ background: 'rgba(136, 146, 176, 0.1)', border: '1px solid rgba(136, 146, 176, 0.3)', color: '#8892b0', padding: '20px', borderRadius: '12px', textAlign: 'center', fontWeight: 'bold', transition: 'all 0.3s' }}>
                    Box 3 (Normal)
                  </div>

                </div>
              </Col>

              {/* Controls */}
              <Col xs={24} lg={10}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <Text style={{ color: '#ccd6f6', fontWeight: 'bold', marginBottom: '10px' }}>Bảng điều khiển:</Text>
                  
                  <Button 
                    size="large"
                    onClick={() => setBoxState('normal')}
                    style={{ 
                      height: 'auto', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      background: boxState === 'normal' ? 'rgba(100, 255, 218, 0.1)' : '#0a192f',
                      borderColor: boxState === 'normal' ? '#64ffda' : 'rgba(136, 146, 176, 0.3)',
                      color: boxState === 'normal' ? '#64ffda' : '#8892b0',
                      fontWeight: 'bold', fontSize: '16px'
                    }}
                  >
                    <span>Trạng thái mặc định</span>
                    {boxState === 'normal' && <CheckCircleOutlined />}
                  </Button>

                  <Button 
                    size="large"
                    onClick={() => setBoxState('none')}
                    style={{ 
                      height: 'auto', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      background: boxState === 'none' ? 'rgba(232, 62, 140, 0.1)' : '#0a192f',
                      borderColor: boxState === 'none' ? '#e83e8c' : 'rgba(136, 146, 176, 0.3)',
                      color: boxState === 'none' ? '#e83e8c' : '#8892b0',
                      fontFamily: 'monospace', fontSize: '16px', fontWeight: 'bold'
                    }}
                  >
                    <span>display: none;</span>
                    {boxState === 'none' && <CheckCircleOutlined />}
                  </Button>

                  <Button 
                    size="large"
                    onClick={() => setBoxState('hidden')}
                    style={{ 
                      height: 'auto', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      background: boxState === 'hidden' ? 'rgba(59, 130, 246, 0.1)' : '#0a192f',
                      borderColor: boxState === 'hidden' ? '#3b82f6' : 'rgba(136, 146, 176, 0.3)',
                      color: boxState === 'hidden' ? '#3b82f6' : '#8892b0',
                      fontFamily: 'monospace', fontSize: '16px', fontWeight: 'bold'
                    }}
                  >
                    <span>visibility: hidden;</span>
                    {boxState === 'hidden' && <CheckCircleOutlined />}
                  </Button>

                  <div style={{ marginTop: '20px', padding: '20px', background: 'rgba(100, 255, 218, 0.05)', borderRadius: '12px', border: '1px solid rgba(100, 255, 218, 0.2)' }}>
                    <Text style={{ color: '#64ffda', lineHeight: 1.6 }}>
                      {getStatusMessage()}
                    </Text>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </motion.section>

      {/* Detailed Comparison Section */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }} 
        variants={fadeInUp}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
          <div style={{ width: '45px', height: '45px', background: 'rgba(168, 85, 247, 0.1)', color: '#a855f7', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
            <BlockOutlined />
          </div>
          <Title level={2} style={{ color: '#ccd6f6', margin: 0 }}>Phân tích chuyên sâu</Title>
        </div>

        <Row gutter={[24, 24]}>
          {[
            {
              icon: <ColumnWidthOutlined />, title: '1. Không gian chiếm dụng',
              none: <><strong>Không</strong> chiếm bất kỳ không gian nào. Layout tự động co lại lấp đầy chỗ trống.</>,
              hidden: <><strong>Vẫn giữ nguyên</strong> không gian, vị trí. Để lại khoảng trống đúng bằng kích thước của nó.</>
            },
            {
              icon: <BranchesOutlined />, title: '2. Document Flow (Luồng tài liệu)',
              none: <>Bị <strong>rút khỏi</strong> luồng tài liệu (removed from flow).</>,
              hidden: <>Vẫn <strong>nằm trong</strong> luồng tài liệu (remains in flow).</>
            },
            {
              icon: <BlockOutlined />, title: '3. Phần tử con (Child Elements)',
              none: <>Tất cả phần tử con bị ẩn theo. Bạn <strong>không thể</strong> hiển thị lại con bằng display:block.</>,
              hidden: <>Phần tử con bị ẩn, <strong>nhưng</strong> có thể hiển thị lại nếu bạn set visibility:visible riêng cho chúng.</>
            },
            {
              icon: <ThunderboltOutlined />, title: '4. Hiệu suất (Performance)',
              none: <>Kích hoạt <strong style={{ color: '#e83e8c' }}>Reflow</strong> (tính toán lại toàn bộ layout), tiêu tốn tài nguyên hơn.</>,
              hidden: <>Chỉ kích hoạt <strong style={{ color: '#3b82f6' }}>Repaint</strong> (vẽ lại pixel), hiệu suất tốt hơn nếu cần ẩn/hiện liên tục (VD: animation chớp tắt).</>
            }
          ].map((item, idx) => (
            <Col xs={24} md={12} key={idx}>
              <Card 
                style={{ background: '#112240', border: '1px solid rgba(136, 146, 176, 0.2)', borderRadius: '16px', height: '100%' }}
                bodyStyle={{ padding: '30px' }}
                hoverable
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                  <div style={{ width: '40px', height: '40px', background: '#0a192f', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8892b0', fontSize: '18px' }}>
                    {item.icon}
                  </div>
                  <Title level={4} style={{ color: '#ccd6f6', margin: 0 }}>{item.title}</Title>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ background: 'rgba(232, 62, 140, 0.05)', padding: '15px', borderRadius: '8px', borderLeft: '3px solid #e83e8c' }}>
                    <Text code style={{ background: 'transparent', color: '#e83e8c', border: 'none', padding: 0, fontWeight: 'bold' }}>display: none</Text>
                    <Paragraph style={{ color: '#8892b0', marginTop: '10px', marginBottom: 0 }}>{item.none}</Paragraph>
                  </div>
                  <div style={{ background: 'rgba(59, 130, 246, 0.05)', padding: '15px', borderRadius: '8px', borderLeft: '3px solid #3b82f6' }}>
                    <Text code style={{ background: 'transparent', color: '#3b82f6', border: 'none', padding: 0, fontWeight: 'bold' }}>visibility: hidden</Text>
                    <Paragraph style={{ color: '#8892b0', marginTop: '10px', marginBottom: 0 }}>{item.hidden}</Paragraph>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </motion.section>

      {/* Summary / TLDR Section */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.3 }} 
        variants={fadeInUp}
        style={{ background: 'linear-gradient(135deg, #112240 0%, #020c1b 100%)', borderRadius: '24px', padding: '50px 40px', border: '1px solid rgba(136, 146, 176, 0.2)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
      >
        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} md={6} style={{ textAlign: 'center' }}>
            <div style={{ width: '100px', height: '100px', background: 'rgba(255, 189, 46, 0.1)', color: '#ffbd2e', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '50px' }}>
              <BulbOutlined />
            </div>
          </Col>
          <Col xs={24} md={18}>
            <Title level={2} style={{ color: '#ccd6f6', marginBottom: '25px' }}>Tóm tắt ngắn gọn (TL;DR)</Title>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <div style={{ display: 'flex', gap: '20px' }}>
                <DeleteOutlined style={{ fontSize: '24px', color: '#e83e8c', marginTop: '4px' }} />
                <Paragraph style={{ color: '#8892b0', fontSize: '1.15rem', margin: 0, lineHeight: 1.7 }}>
                  Dùng <Text code style={{ background: 'rgba(232, 62, 140, 0.2)', color: '#e83e8c', border: 'none' }}>display: none</Text> khi bạn muốn <strong style={{ color: '#ccd6f6' }}>"xóa sổ"</strong> hoàn toàn phần tử khỏi giao diện. Layout sẽ tự động co giãn và sắp xếp lại để lấp đầy khoảng trống đó.
                </Paragraph>
              </div>
              <div style={{ display: 'flex', gap: '20px' }}>
                <EyeInvisibleOutlined style={{ fontSize: '24px', color: '#3b82f6', marginTop: '4px' }} />
                <Paragraph style={{ color: '#8892b0', fontSize: '1.15rem', margin: 0, lineHeight: 1.7 }}>
                  Dùng <Text code style={{ background: 'rgba(59, 130, 246, 0.2)', color: '#3b82f6', border: 'none' }}>visibility: hidden</Text> khi bạn chỉ muốn giấu phần tử đó đi (như <strong style={{ color: '#ccd6f6' }}>tàng hình</strong>) nhưng vẫn muốn giữ nguyên bộ khung layout để các phần tử khác không bị xô lệch.
                </Paragraph>
              </div>
            </div>
          </Col>
        </Row>
      </motion.section>

    </div>
  );
};

export default DisplayVsVisibility;
