import React from 'react';
import { Layout, Row, Col, Typography, Space, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { 
  GithubOutlined, 
  FacebookFilled, 
  MailOutlined, 
  PhoneOutlined, 
  RightOutlined,
  HeartFilled
} from '@ant-design/icons';
import { socialLinks, contactInfo } from '@/data/socialData';
import '@/assets/css/Footer.scss';

const { Footer: AntFooter } = Layout;
const { Text, Title } = Typography;

const Footer = () => {
  return (
    <AntFooter className="footer">
      <div className="footer-container">
        <Row gutter={[32, 32]}>
          {/* Brand Section */}
          <Col xs={24} md={8} lg={9}>
            <div className="footer-brand">
              <Title level={3} className="brand-title">Vinhdev04</Title>
              <Text className="brand-desc" display="block">
                Chuyên xây dựng các ứng dụng web hiện đại, hiệu suất cao và trải nghiệm người dùng tối ưu. Luôn cập nhật công nghệ mới nhất để mang lại giá trị tốt nhất.
              </Text>
              
              <div className="social-links" style={{ marginTop: '20px' }}>
                {socialLinks.map((social, index) => (
                  <Tooltip title={social.name} key={index}>
                    <a 
                      href={social.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-btn"
                      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      {React.cloneElement(social.icon, { size: 20 })}
                    </a>
                  </Tooltip>
                ))}
              </div>
            </div>
          </Col>
          
          {/* Quick Links */}
          <Col xs={24} sm={12} md={8} lg={7}>
            <Title level={5} className="footer-title">Liên Kết Nhanh</Title>
            <div className="footer-links">
              <Link to="/about"><RightOutlined style={{ fontSize: '10px' }} /> Về Tôi</Link>
              <Link to="/projects"><RightOutlined style={{ fontSize: '10px' }} /> Dự Án</Link>
              <Link to="/skills"><RightOutlined style={{ fontSize: '10px' }} /> Kỹ Năng</Link>
              <Link to="/experience"><RightOutlined style={{ fontSize: '10px' }} /> Kinh Nghiệm</Link>
              <Link to="/certificates"><RightOutlined style={{ fontSize: '10px' }} /> Chứng Chỉ</Link>
            </div>
          </Col>

          {/* Contact Info */}
          <Col xs={24} sm={12} md={8} lg={8}>
            <Title level={5} className="footer-title">Thông Tin Liên Hệ</Title>
            <div className="contact-info">
              <div className="contact-item">
                <PhoneOutlined />
                <Text>{contactInfo.phone}</Text>
              </div>
              <div className="contact-item">
                <MailOutlined />
                <Text>{contactInfo.email}</Text>
              </div>
              <div className="contact-item">
                <GithubOutlined />
                <a href={socialLinks.find(s => s.name === 'GitHub')?.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                  github.com/Vinhdev04
                </a>
              </div>
            </div>
          </Col>
        </Row>
        
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <Text className="copyright">
            © {new Date().getFullYear()} Designed & Built by <span>Vinhdev04</span> with <HeartFilled style={{ color: '#e25555' }} />
          </Text>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;
