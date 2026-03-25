import React, { useState } from 'react';
import { Typography, Row, Col, Card, Tag, Button, Alert } from 'antd';
import { 
  ExperimentOutlined,
  CodeOutlined,
  BlockOutlined,
  PushpinOutlined,
  AppstoreOutlined,
  EyeInvisibleOutlined,
  FormatPainterOutlined,
  WarningOutlined,
  BulbOutlined,
  BugOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph, Text } = Typography;

const ZIndexStackingContext = () => {
  const [hasBug, setHasBug] = useState(false);

  // Animation variants
  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', width: '100%', position: 'relative' }}>
      
      {/* Hero Section */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.3 }} 
        variants={itemVariants} 
        style={{ textAlign: 'center', padding: '60px 20px', position: 'relative', zIndex: 10 }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Tag color="#112240" style={{ border: '1px solid #e83e8c', color: '#e83e8c', padding: '6px 16px', borderRadius: '20px', fontSize: '14px', marginBottom: '30px', fontWeight: 'bold' }}>
            🎨 CSS Masterclass
          </Tag>
          <Title level={1} style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '30px', color: '#ccd6f6', lineHeight: 1.2 }}>
            Làm chủ <span style={{ color: '#e83e8c', textShadow: '0 0 20px rgba(232, 62, 140, 0.4)' }}>Z-index</span> & <br/> Ngữ Cảnh Xếp Chồng
          </Title>
          <Paragraph style={{ fontSize: '1.2rem', color: '#8892b0', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8 }}>
            Giải mã bí ẩn đằng sau câu hỏi kinh điển: <br/>
            <Text code style={{ background: 'rgba(232, 62, 140, 0.1)', color: '#e83e8c', border: 'none', fontSize: '1rem', marginTop: '10px', display: 'inline-block' }}>
              "Tại sao tôi set z-index: 9999 mà nó vẫn bị chìm?"
            </Text>
          </Paragraph>
        </div>
      </motion.div>

      {/* Section 1: Z-index cơ bản */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }} 
        variants={itemVariants}
      >
        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} md={12}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <div style={{ width: '40px', height: '40px', background: 'rgba(100, 255, 218, 0.1)', color: '#64ffda', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>1</div>
              <Title level={2} style={{ color: '#ccd6f6', margin: 0 }}>Z-index hoạt động ra sao?</Title>
            </div>
            <Paragraph style={{ fontSize: '1.1rem', color: '#8892b0', lineHeight: 1.8 }}>
              <Text strong style={{ color: '#64ffda' }}>z-index</Text> là thuộc tính CSS quyết định thứ tự hiển thị dọc theo trục Z (trục vuông góc với màn hình) của các phần tử khi chúng đè lên nhau. Giá trị càng lớn, phần tử càng "nổi" lên trên.
            </Paragraph>
            
            <Alert
              message={<span style={{ fontWeight: 'bold', color: '#ffbd2e' }}><WarningOutlined /> Điều kiện tiên quyết</span>}
              description={
                <div style={{ marginTop: '10px', color: '#ccd6f6' }}>
                  <span style={{ color: '#8892b0' }}><code>z-index</code> <Text type="danger" strong>KHÔNG</Text> có tác dụng với phần tử mang <code>position: static</code> (mặc định). Nó chỉ hoạt động khi:</span>
                  <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                    <li>Phần tử có <code>position</code> là <Tag color="#112240" style={{border: '1px solid #8892b0', color: '#64ffda'}}>relative</Tag>, <Tag color="#112240" style={{border: '1px solid #8892b0', color: '#64ffda'}}>absolute</Tag>, <Tag color="#112240" style={{border: '1px solid #8892b0', color: '#64ffda'}}>fixed</Tag>, hoặc <Tag color="#112240" style={{border: '1px solid #8892b0', color: '#64ffda'}}>sticky</Tag>.</li>
                    <li>Phần tử là con trực tiếp của Flexbox hoặc Grid container.</li>
                  </ul>
                </div>
              }
              type="warning"
              style={{ background: 'rgba(255, 189, 46, 0.05)', border: '1px solid rgba(255, 189, 46, 0.3)', borderRadius: '12px' }}
            />
          </Col>

          {/* Basic Demo Box */}
          <Col xs={24} md={12}>
            <div style={{ height: '350px', background: '#0a192f', borderRadius: '24px', border: '1px solid rgba(136, 146, 176, 0.2)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'radial-gradient(#64ffda 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              
              <div style={{ position: 'absolute', width: '120px', height: '120px', background: '#3b82f6', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.2rem', border: '2px solid rgba(255,255,255,0.2)', transform: 'translate(-40px, -40px)', zIndex: 1, transition: 'transform 0.3s' }}>
                z: 1
              </div>
              <div style={{ position: 'absolute', width: '120px', height: '120px', background: '#e83e8c', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.2rem', border: '2px solid rgba(255,255,255,0.2)', zIndex: 2, transition: 'transform 0.3s' }}>
                z: 2
              </div>
              <div style={{ position: 'absolute', width: '120px', height: '120px', background: '#ffbd2e', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#112240', fontWeight: 'bold', fontSize: '1.2rem', border: '2px solid rgba(255,255,255,0.2)', transform: 'translate(40px, 40px)', zIndex: 3, transition: 'transform 0.3s' }}>
                z: 3
              </div>
            </div>
          </Col>
        </Row>
      </motion.section>

      {/* Section 2: Stacking Context */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.1 }} 
        variants={itemVariants}
      >
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '40px', background: 'rgba(232, 62, 140, 0.1)', color: '#e83e8c', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>2</div>
            <Title level={2} style={{ color: '#ccd6f6', margin: 0 }}>Stacking Context là gì?</Title>
          </div>
          <Paragraph style={{ fontSize: '1.2rem', color: '#8892b0', maxWidth: '700px', margin: '0 auto' }}>
            Đây chính là chìa khóa để giải thích câu hỏi hóc búa nhất CSS phía trên.
          </Paragraph>
        </div>

        <Row gutter={[40, 40]} align="stretch">
          {/* Explanation */}
          <Col xs={24} lg={10}>
            <div style={{ background: '#112240', border: '1px solid rgba(136, 146, 176, 0.1)', borderRadius: '24px', padding: '40px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Title level={3} style={{ color: '#ccd6f6', marginBottom: '20px' }}>Nguyên lý "Chiếc Hộp Kính"</Title>
              <Paragraph style={{ color: '#8892b0', fontSize: '1.1rem', marginBottom: '30px', lineHeight: 1.8 }}>
                Hãy tưởng tượng <Text strong style={{ color: '#e83e8c' }}>Stacking Context</Text> giống như một chiếc hộp kính. Khi một phần tử tạo ra Stacking Context, tất cả các phần tử con của nó sẽ bị "nhốt" vào trong chiếc hộp đó.
              </Paragraph>
              
              <div style={{ background: 'rgba(100, 255, 218, 0.05)', borderLeft: '4px solid #64ffda', padding: '20px', borderRadius: '0 12px 12px 0' }}>
                <Text strong style={{ color: '#64ffda', display: 'block', marginBottom: '10px' }}>Quy tắc vàng:</Text>
                <Text style={{ color: '#ccd6f6', lineHeight: 1.6 }}>
                  Trình duyệt KHÔNG so sánh z-index của 2 phần tử con nằm ở 2 chiếc hộp khác nhau. Nó sẽ <Text strong style={{ color: '#ffbd2e' }}>so sánh z-index của chính 2 chiếc hộp cha</Text> trước!
                </Text>
              </div>
            </div>
          </Col>

          {/* Interactive Demo */}
          <Col xs={24} lg={14}>
            <div style={{ background: 'linear-gradient(145deg, #0a192f 0%, #112240 100%)', border: '1px solid rgba(136, 146, 176, 0.2)', borderRadius: '24px', padding: '30px', display: 'flex', flexDirection: 'column', height: '100%', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', flexWrap: 'wrap', gap: '15px' }}>
                <div>
                  <Title level={4} style={{ color: '#e83e8c', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <ExperimentOutlined /> Mô phỏng lỗi thực tế
                  </Title>
                </div>
                <Button 
                  type="primary" 
                  size="large"
                  onClick={() => setHasBug(!hasBug)}
                  style={{ 
                    background: hasBug ? '#28a745' : '#e83e8c', 
                    borderColor: hasBug ? '#28a745' : '#e83e8c',
                    boxShadow: hasBug ? '0 0 15px rgba(40,167,69,0.4)' : '0 0 15px rgba(232,62,140,0.4)',
                    fontWeight: 'bold',
                    transition: 'all 0.3s'
                  }}
                  icon={hasBug ? <CheckCircleOutlined /> : <BugOutlined />}
                >
                  {hasBug ? 'Gỡ lỗi (Bỏ Transform)' : 'Kích hoạt lỗi (Thêm Transform)'}
                </Button>
              </div>
              
              <div style={{ minHeight: '60px', marginBottom: '20px' }}>
                {hasBug ? (
                  <Paragraph style={{ color: '#e83e8c', margin: 0 }}>
                    <Text strong style={{ color: '#e83e8c' }}><BugOutlined /> Bị nhốt!</Text> Hộp A vừa được thêm <Text code style={{ background: 'rgba(232, 62, 140, 0.2)', color: '#fff', border: 'none' }}>transform: scale(0.95)</Text>, tạo ra một <strong>Stacking Context mới</strong>. Dù phần tử A1 (Hồng đậm) có z-index: 9999, nó vẫn bị chìm dưới B1 vì Hộp cha A (z:1) thấp hơn Hộp cha B (z:2).
                  </Paragraph>
                ) : (
                  <Paragraph style={{ color: '#64ffda', margin: 0 }}>
                    <Text strong style={{ color: '#64ffda' }}><CheckCircleOutlined /> Trạng thái bình thường</Text>: Phần tử A1 (Hồng) với z-index 9999 có thể thoải mái đè lên tất cả. Hộp cha A chưa tạo Stacking Context.
                  </Paragraph>
                )}
              </div>

              <div style={{ flex: 1, position: 'relative', background: '#020c1b', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden', minHeight: '300px' }}>
                
                {/* Parent B */}
                <div style={{ position: 'absolute', top: '30px', right: '30px', width: '200px', height: '200px', background: 'rgba(59, 130, 246, 0.2)', backdropFilter: 'blur(5px)', border: '2px solid #3b82f6', borderRadius: '12px', padding: '15px', zIndex: 2 }}>
                  <Text style={{ color: '#60a5fa', fontWeight: 'bold', fontSize: '0.8rem' }}>Hộp B (z-index: 2)</Text>
                  
                  {/* Child B1 */}
                  <div style={{ position: 'absolute', bottom: '15px', right: '15px', width: '100px', height: '100px', background: '#3b82f6', border: '2px solid #60a5fa', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold', boxShadow: '0 10px 20px rgba(0,0,0,0.5)', zIndex: 1 }}>
                    B1 (z:1)
                  </div>
                </div>

                {/* Parent A */}
                <div style={{ 
                  position: 'absolute', top: '70px', left: '30px', width: '200px', height: '200px', background: 'rgba(232, 62, 140, 0.2)', backdropFilter: 'blur(5px)', border: '2px solid #e83e8c', borderRadius: '12px', padding: '15px', zIndex: 1,
                  transform: hasBug ? 'scale(0.95)' : 'none',
                  transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}>
                  <Text style={{ color: '#f472b6', fontWeight: 'bold', fontSize: '0.8rem' }}>Hộp A {hasBug ? '(Có Transform)' : '(z-index: 1)'}</Text>
                  
                  {/* Child A1 */}
                  <div style={{ position: 'absolute', top: '-30px', right: '-40px', width: '140px', height: '140px', background: '#e83e8c', border: '2px solid #f472b6', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold', boxShadow: '0 10px 30px rgba(232,62,140,0.5)', zIndex: 9999, transition: 'all 0.5s' }}>
                    <span>A1</span>
                    <span style={{ fontSize: '0.8rem', fontWeight: 'normal' }}>(z: 9999)</span>
                  </div>
                </div>

              </div>
            </div>
          </Col>
        </Row>
      </motion.section>

      {/* Section 3: Triggers */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.1 }} 
        variants={itemVariants}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
          <div style={{ width: '40px', height: '40px', background: 'rgba(100, 255, 218, 0.1)', color: '#64ffda', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>3</div>
          <Title level={2} style={{ color: '#ccd6f6', margin: 0 }}>Cách tạo ra Stacking Context</Title>
        </div>
        
        <Paragraph style={{ fontSize: '1.1rem', color: '#8892b0', marginBottom: '40px' }}>
          Một phần tử HTML sẽ tự động tạo ra một "chiếc hộp kính" (Stacking Context) cho riêng nó nếu nó sở hữu một trong các thuộc tính CSS sau:
        </Paragraph>

        <Row gutter={[24, 24]}>
          {[
            { title: 'Thẻ gốc HTML', desc: 'Thẻ <html> mặc định tạo ra Root Stacking Context chứa toàn bộ trang.', icon: <CodeOutlined />, color: '#64ffda' },
            { title: 'Position + Z-index', desc: 'Có position: absolute / relative VÀ có z-index khác auto.', icon: <BlockOutlined />, color: '#3b82f6' },
            { title: 'Fixed / Sticky', desc: 'Các phần tử có position: fixed hoặc sticky tự động tạo ngữ cảnh mới.', icon: <PushpinOutlined />, color: '#8b5cf6' },
            { title: 'Flex / Grid Child', desc: 'Là phần tử con của Flexbox/Grid VÀ có z-index khác auto.', icon: <AppstoreOutlined />, color: '#e83e8c' },
            { title: 'Opacity < 1', desc: 'Có opacity nhỏ hơn 1 (ví dụ: 0.99) sẽ tạo ra một Stacking Context.', icon: <EyeInvisibleOutlined />, color: '#ffbd2e' },
            { title: 'Transform / Filter', desc: 'Transform, filter khác none. Đây là thủ phạm gây lỗi Z-index nhiều nhất khi làm UI Animation!', icon: <FormatPainterOutlined />, color: '#ff5f56', alert: true }
          ].map((item, index) => (
            <Col xs={24} md={12} lg={8} key={index}>
              <Card 
                style={{ height: '100%', background: '#112240', border: item.alert ? `1px solid ${item.color}` : '1px solid rgba(136, 146, 176, 0.1)', borderRadius: '16px', overflow: 'hidden' }}
                bodyStyle={{ padding: '24px' }}
                hoverable
              >
                {item.alert && <div style={{ position: 'absolute', top: 0, right: 0, width: '4px', height: '100%', background: item.color }} />}
                <div style={{ width: '50px', height: '50px', background: `rgba(${parseInt(item.color.slice(1,3),16)}, ${parseInt(item.color.slice(3,5),16)}, ${parseInt(item.color.slice(5,7),16)}, 0.1)`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', color: item.color, marginBottom: '20px' }}>
                  {item.icon}
                </div>
                <Title level={4} style={{ color: '#ccd6f6', marginBottom: '10px' }}>{item.title}</Title>
                <Paragraph style={{ color: '#8892b0', margin: 0, fontSize: '0.95rem' }}>{item.desc}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </motion.section>

      {/* Conclusion */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.5 }} 
        variants={itemVariants}
        style={{ background: 'linear-gradient(135deg, #112240 0%, #0a192f 100%)', border: '1px solid rgba(100, 255, 218, 0.2)', borderRadius: '24px', padding: '50px 30px', textAlign: 'center' }}
      >
        <BulbOutlined style={{ fontSize: '40px', color: '#ffbd2e', marginBottom: '20px' }} />
        <Title level={3} style={{ color: '#ccd6f6', marginBottom: '20px' }}>Lời khuyên đắt giá cho Frontend Developer</Title>
        <Paragraph style={{ fontSize: '1.2rem', color: '#8892b0', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
          Việc hiểu và quản lý tốt Stacking Context sẽ giúp bạn tránh được tình trạng phải spam một cách tuyệt vọng <Text code style={{ background: 'rgba(255, 95, 86, 0.1)', color: '#ff5f56', border: 'none', fontSize: '1rem' }}>z-index: 999999</Text>. Nếu một phần tử không chịu "nổi lên", đừng cố tăng z-index của nó, hãy kiểm tra lại các thẻ cha HTML xem thẻ nào đang khóa nó lại trong một Stacking Context nhé!
        </Paragraph>
      </motion.section>
    </div>
  );
};

export default ZIndexStackingContext;
