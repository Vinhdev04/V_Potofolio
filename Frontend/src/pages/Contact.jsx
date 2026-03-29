import React from 'react';
import { Typography, Form, Input, Button, Row, Col, Card, message } from 'antd';
import { motion } from 'framer-motion';
import { SendOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { socialLinks as socialLinksData, contactInfo as contactInfoData } from '@/data/socialData';
import '@/assets/css/Contact.scss';
import FloatingQuote from '@/components/FloatingQuote';
import { quotesData } from '@/data/homeData';
import PageShell from '@/components/motion/PageShell';
import Reveal, { RevealGroup, RevealItem } from '@/components/motion/Reveal';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const Contact = () => {
  const quote = quotesData[8];
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
    message.success('Tin nhắn đã được ghi nhận. Tôi sẽ phản hồi sớm nhất có thể.');
    form.resetFields();
  };

  const contactInfo = [
    { icon: <MailOutlined />, title: 'Email', value: contactInfoData.email, link: `mailto:${contactInfoData.email}`, color: '#64ffda' },
    { icon: <PhoneOutlined />, title: 'Điện Thoại', value: contactInfoData.phone, link: `tel:${contactInfoData.phone}`, color: '#3b82f6' },
    { icon: <EnvironmentOutlined />, title: 'Địa Chỉ', value: contactInfoData.location, link: null, color: '#a855f7' },
  ];

  const socialLinks = socialLinksData.filter((item) => ['GitHub', 'LinkedIn', 'Facebook', 'Zalo'].includes(item.name));

  return (
    <PageShell className="contact-container" accent="#64ffda" style={{ position: 'relative' }}>
      {quote && <FloatingQuote text={quote.text} author={quote.author} color={quote.color} style={{ top: '80px', right: '20px', zIndex: 10 }} />}

      <Reveal className="contact-header section-shell">
        <div className="section-badge">Let's build something</div>
        <Title level={1} className="contact-title">Liên Hệ</Title>
        <Paragraph className="contact-description">
          Nếu bạn đang cần một giao diện web chỉn chu hơn, có chuyển động tốt hơn hoặc muốn hợp tác ở một dự án mới, tôi luôn sẵn sàng trao đổi.
        </Paragraph>
      </Reveal>

      <Row gutter={[48, 48]}>
        <Col xs={24} md={12}>
          <Reveal direction="left">
            <Title level={3} className="section-subtitle">Thông Tin Liên Hệ</Title>

            <RevealGroup className="contact-info-list">
              {contactInfo.map((info, index) => (
                <RevealItem key={index} className="contact-info-item" transition={{ delay: 0.1 * index }} whileHover={{ x: 10 }}>
                  <div className="info-icon" style={{ color: info.color }}>{info.icon}</div>
                  <div className="info-content">
                    <Text strong className="info-title">{info.title}</Text>
                    {info.link ? <a href={info.link} className="info-value">{info.value}</a> : <Text className="info-value">{info.value}</Text>}
                  </div>
                  <div className="info-glow" style={{ background: info.color }} />
                </RevealItem>
              ))}
            </RevealGroup>

            <div className="social-links">
              <Title level={5} className="social-title">Kết Nối</Title>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <motion.a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="social-icon" whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <div className="icon-wrapper" style={{ '--hover-color': social.color }}>{social.icon}</div>
                    <span className="social-name">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </Reveal>
        </Col>

        <Col xs={24} md={12}>
          <Reveal direction="right">
            <Card className="contact-form-card">
              <Form form={form} layout="vertical" onFinish={onFinish} className="contact-form">
                <Form.Item name="name" label={<span className="form-label">Họ và Tên</span>} rules={[{ required: true, message: 'Vui lòng nhập tên của bạn.' }]}>
                  <Input size="large" placeholder="Nguyễn Văn A" className="form-input" prefix={<span className="input-icon">👤</span>} />
                </Form.Item>

                <Form.Item
                  name="email"
                  label={<span className="form-label">Email</span>}
                  rules={[
                    { required: true, message: 'Vui lòng nhập email.' },
                    { type: 'email', message: 'Vui lòng nhập email hợp lệ.' },
                  ]}
                >
                  <Input size="large" placeholder="nguyenvana@example.com" className="form-input" prefix={<span className="input-icon">📧</span>} />
                </Form.Item>

                <Form.Item name="subject" label={<span className="form-label">Tiêu Đề</span>} rules={[{ required: true, message: 'Vui lòng nhập tiêu đề.' }]}>
                  <Input size="large" placeholder="Chủ đề bạn muốn trao đổi" className="form-input" prefix={<span className="input-icon">💬</span>} />
                </Form.Item>

                <Form.Item name="message" label={<span className="form-label">Tin Nhắn</span>} rules={[{ required: true, message: 'Vui lòng nhập tin nhắn.' }]}>
                  <TextArea rows={5} placeholder="Xin chào, tôi muốn..." className="form-textarea" />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" size="large" block icon={<SendOutlined />} className="submit-btn">
                    <span>Gửi Tin Nhắn</span>
                    <span className="btn-glow" />
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Reveal>
        </Col>
      </Row>
    </PageShell>
  );
};

export default Contact;
