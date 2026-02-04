import React from 'react';
import { Layout, Row, Col, Typography, Space } from 'antd';
import { GithubOutlined, FacebookFilled, MailOutlined, PhoneOutlined } from '@ant-design/icons';

const { Footer: AntFooter } = Layout;
const { Text, Title, Link } = Typography;

const Footer = () => {
  return (
    <AntFooter style={{ background: '#020c1b', color: '#8892b0', padding: '50px 50px 20px' }}>
      <Row gutter={[32, 32]} justify="center">
        <Col xs={24} md={8}>
          <Title level={4} style={{ color: '#ccd6f6' }}>Vinhdev04</Title>
          <Text style={{ color: '#8892b0' }}>
            Xây dựng trải nghiệm web hiện đại, hiệu suất cao và có khả năng mở rộng.
          </Text>
        </Col>
        
        <Col xs={24} md={8}>
          <Title level={5} style={{ color: '#ccd6f6' }}>Liên Kết</Title>
          <Space direction="vertical">
            <Link href="#about-section" style={{ color: '#8892b0' }}>Về Tôi</Link>
            <Link href="#projects-section" style={{ color: '#8892b0' }}>Dự Án</Link>
            <Link href="#contact-section" style={{ color: '#8892b0' }}>Liên Hệ</Link>
          </Space>
        </Col>

        <Col xs={24} md={8}>
          <Title level={5} style={{ color: '#ccd6f6' }}>Kết Nối</Title>
          <Space direction="vertical">
            <Space>
                <GithubOutlined /> <Link href="https://github.com/Vinhdev04/" target="_blank" style={{ color: '#8892b0' }}>GitHub</Link>
            </Space>
            <Space>
                <FacebookFilled /> <Link href="https://www.facebook.com/i.padygamy1210" target="_blank" style={{ color: '#8892b0' }}>Facebook</Link>
            </Space>
            <Space>
                <PhoneOutlined /> <Text style={{ color: '#8892b0' }}>0352032375</Text>
            </Space>
            <Space>
                <MailOutlined /> <Text style={{ color: '#8892b0' }}>PCV.FED@GMAIL.COM</Text>
            </Space>
          </Space>
        </Col>
      </Row>
      
      <div style={{ textAlign: 'center', marginTop: 40, borderTop: '1px solid #233554', paddingTop: 20 }}>
        <Text style={{ color: '#8892b0' }}>
          © {new Date().getFullYear()} Vinhdev04. All Rights Reserved.
        </Text>
      </div>
    </AntFooter>
  );
};

export default Footer;
