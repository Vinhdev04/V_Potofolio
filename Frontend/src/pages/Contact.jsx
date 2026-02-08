import React from 'react';
import { Typography, Form, Input, Button, Row, Col, Card, message } from 'antd';
import { motion } from 'framer-motion';
import { SendOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { socialLinks as socialLinksData, contactInfo as contactInfoData } from '@/data/socialData';
import '@/assets/css/Contact.scss';
import FloatingQuote from '@/components/FloatingQuote';
import { quotesData } from '@/data/homeData';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const Contact = () => {
  const quote = quotesData[8];
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
    message.success('Tin nhắn đã được gửi thành công! Tôi sẽ phản hồi sớm nhất có thể.');
    form.resetFields();
  };

  const contactInfo = [
    {
      icon: <MailOutlined />,
      title: 'Email',
      value: contactInfoData.email,
      link: `mailto:${contactInfoData.email}`,
      color: '#64ffda'
    },
    {
      icon: <PhoneOutlined />,
      title: 'Điện Thoại',
      value: contactInfoData.phone,
      link: `tel:${contactInfoData.phone}`,
      color: '#3b82f6'
    },
    {
      icon: <EnvironmentOutlined />,
      title: 'Địa Chỉ',
      value: contactInfoData.location,
      link: null,
      color: '#a855f7'
    }
  ];

  // Filter main social links
  const socialLinks = socialLinksData.filter(item => 
    ['GitHub', 'LinkedIn', 'Facebook', 'Zalo'].includes(item.name)
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="contact-container"
      style={{ position: 'relative' }}
    >
      {quote && (
        <FloatingQuote 
          text={quote.text} 
          author={quote.author} 
          color={quote.color} 
          style={{ 
            top: '80px', 
            right: '20px', 
            zIndex: 10
          }} 
        />
      )}
      <div className="contact-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Title level={1} className="contact-title">Liên Hệ</Title>
          <Paragraph className="contact-description">
            Tôi đang tìm kiếm cơ hội mới, hộp thư của tôi luôn mở. Dù bạn có thắc mắc hay chỉ muốn chào hỏi, tôi sẽ cố gắng hết sức để phản hồi bạn!
          </Paragraph>
        </motion.div>
      </div>

      <Row gutter={[48, 48]}>
        {/* Contact Information */}
        <Col xs={24} md={12}>
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Title level={3} className="section-subtitle">Thông Tin Liên Hệ</Title>
            
            <div className="contact-info-list">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-info-item"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ x: 10 }}
                >
                  <div className="info-icon" style={{ color: info.color }}>
                    {info.icon}
                  </div>
                  <div className="info-content">
                    <Text strong className="info-title">{info.title}</Text>
                    {info.link ? (
                      <a href={info.link} className="info-value">{info.value}</a>
                    ) : (
                      <Text className="info-value">{info.value}</Text>
                    )}
                  </div>
                  <div className="info-glow" style={{ background: info.color }}></div>
                </motion.div>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="social-links">
              <Title level={5} className="social-title">Kết Nối</Title>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="icon-wrapper" style={{ '--hover-color': social.color }}>
                      {social.icon}
                    </div>
                    <span className="social-name">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
            
            {/* Decorative Quote removed per request */}
            <div className="contact-quote" style={{ display: 'none' }}>
              <div className="quote-icon">"</div>
              <Paragraph className="quote-text">
                Hãy cùng nhau xây dựng điều gì đó tuyệt vời!
              </Paragraph>
            </div>
          </motion.div>
        </Col>

        {/* Contact Form */}
        <Col xs={24} md={12}>
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="contact-form-card">
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                className="contact-form"
              >
                <Form.Item
                  name="name"
                  label={<span className="form-label">Họ và Tên</span>}
                  rules={[{ required: true, message: 'Vui lòng nhập tên của bạn!' }]}
                >
                  <Input 
                    size="large" 
                    placeholder="Nguyễn Văn A" 
                    className="form-input"
                    prefix={<span className="input-icon">👤</span>}
                  />
                </Form.Item>

                <Form.Item
                  name="email"
                  label={<span className="form-label">Email</span>}
                  rules={[
                    { required: true, message: 'Vui lòng nhập email!' }, 
                    { type: 'email', message: 'Vui lòng nhập email hợp lệ!' }
                  ]}
                >
                  <Input 
                    size="large" 
                    placeholder="nguyenvana@example.com" 
                    className="form-input"
                    prefix={<span className="input-icon">📧</span>}
                  />
                </Form.Item>

                <Form.Item
                  name="subject"
                  label={<span className="form-label">Tiêu Đề</span>}
                  rules={[{ required: true, message: 'Vui lòng nhập tiêu đề!' }]}
                >
                  <Input 
                    size="large" 
                    placeholder="Chủ đề bạn muốn thảo luận" 
                    className="form-input"
                    prefix={<span className="input-icon">💬</span>}
                  />
                </Form.Item>

                <Form.Item
                  name="message"
                  label={<span className="form-label">Tin Nhắn</span>}
                  rules={[{ required: true, message: 'Vui lòng nhập tin nhắn!' }]}
                >
                  <TextArea 
                    rows={5} 
                    placeholder="Xin chào, tôi muốn..." 
                    className="form-textarea"
                  />
                </Form.Item>

                <Form.Item>
                  <Button 
                    type="primary" 
                    htmlType="submit" 
                    size="large" 
                    block 
                    icon={<SendOutlined />} 
                    className="submit-btn"
                  >
                    <span>Gửi Tin Nhắn</span>
                    <span className="btn-glow"></span>
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default Contact;