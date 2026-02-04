import React from 'react';
import { Typography, Form, Input, Button, Row, Col, Card, message } from 'antd';
import { motion } from 'framer-motion';
import { SendOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
    message.success('Tin nhắn đã được gửi thành công! Tôi sẽ phản hồi sớm nhất có thể.');
    form.resetFields();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      style={{ padding: '50px 0', maxWidth: 1000, margin: '0 auto' }}
    >
      <div style={{ textAlign: 'center', marginBottom: 50 }}>
        <Title level={1} style={{ color: '#ccd6f6' }}>Liên Hệ</Title>
        <Paragraph style={{ color: '#8892b0', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto' }}>
          Tôi đang tìm kiếm cơ hội mới, hộp thư của tôi luôn mở. Dù bạn có thắc mắc hay chỉ muốn chào hỏi, tôi sẽ cố gắng hết sức để phản hồi bạn!
        </Paragraph>
      </div>

      <Row gutter={[48, 48]}>
        <Col xs={24} md={12}>
          <Title level={3} style={{ color: '#ccd6f6' }}>Thông Tin Liên Hệ</Title>
          <div style={{ marginTop: 30 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
                <MailOutlined style={{ fontSize: 24, color: '#64ffda', marginRight: 15 }} />
                <div>
                    <Text strong style={{ color: '#e6f1ff', display: 'block' }}>Email</Text>
                    <Text style={{ color: '#8892b0' }}>PCV.FED@GMAIL.COM</Text>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
                <PhoneOutlined style={{ fontSize: 24, color: '#64ffda', marginRight: 15 }} />
                <div>
                    <Text strong style={{ color: '#e6f1ff', display: 'block' }}>Điện Thoại</Text>
                    <Text style={{ color: '#8892b0' }}>0352032375</Text>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
                <EnvironmentOutlined style={{ fontSize: 24, color: '#64ffda', marginRight: 15 }} />
                <div>
                    <Text strong style={{ color: '#e6f1ff', display: 'block' }}>Địa Chỉ</Text>
                    <Text style={{ color: '#8892b0' }}>TP. Hồ Chí Minh, Việt Nam</Text>
                </div>
            </div>
          </div>
        </Col>

        <Col xs={24} md={12}>
            <Card style={{ background: '#112240', border: 'none', borderRadius: 12 }} bodyStyle={{ padding: 30 }}>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="name"
                        label={<span style={{ color: '#ccd6f6' }}>Họ và Tên</span>}
                        rules={[{ required: true, message: 'Vui lòng nhập tên của bạn!' }]}
                    >
                        <Input size="large" placeholder="Nguyễn Văn A" style={{ background: '#0a192f', border: '1px solid #233554', color: '#ccd6f6' }} />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label={<span style={{ color: '#ccd6f6' }}>Email</span>}
                        rules={[{ required: true, message: 'Vui lòng nhập email!' }, { type: 'email', message: 'Vui lòng nhập email hợp lệ!' }]}
                    >
                        <Input size="large" placeholder="nguyenvana@example.com" style={{ background: '#0a192f', border: '1px solid #233554', color: '#ccd6f6' }} />
                    </Form.Item>

                    <Form.Item
                        name="message"
                        label={<span style={{ color: '#ccd6f6' }}>Tin Nhắn</span>}
                        rules={[{ required: true, message: 'Vui lòng nhập tin nhắn!' }]}
                    >
                        <TextArea rows={4} placeholder="Xin chào, tôi muốn..." style={{ background: '#0a192f', border: '1px solid #233554', color: '#ccd6f6' }} />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block icon={<SendOutlined />} style={{ background: '#64ffda', color: '#0a192f', fontWeight: 'bold', border: 'none' }}>
                            Gửi Tin Nhắn
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </Col>
      </Row>
    </motion.div>
  );
};

export default Contact;
