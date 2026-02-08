import React from 'react';
import { Row, Col, Typography, Card, Button } from 'antd';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaUsers } from 'react-icons/fa';
import { socialLinks } from '@/data/socialData';
import FloatingQuote from '@/components/FloatingQuote';
import { quotesData } from '@/data/homeData';
import '@/assets/css/Socials.scss';

const { Title, Paragraph } = Typography;

const Socials = () => {
  const quote = quotesData[7];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="socials-container" style={{ position: 'relative' }}>
      <FloatingQuote 
        text={quote.text} 
        author={quote.author} 
        color={quote.color} 
        style={{ 
          top: '100px', 
          right: '20px', 
          zIndex: 10
        }} 
      />
      <motion.div
        className="socials-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title level={1} className="socials-title">Kết Nối Với Tôi</Title>
        <Paragraph className="socials-description">
          Theo dõi tôi trên các nền tảng mạng xã hội để cập nhật những chia sẻ mới nhất về lập trình, công nghệ và cuộc sống.
        </Paragraph>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Row gutter={[24, 24]} justify="center">
          {socialLinks.map((social) => (
            <Col xs={24} sm={12} md={8} lg={6} key={social.id}>
              <motion.div variants={itemVariants} style={{ height: '100%' }}>
                <div className="social-card">
                  <div 
                    className="social-icon-wrapper"
                    style={{ 
                      color: social.color,
                      border: `2px solid ${social.color}20`,
                      background: `${social.color}10`
                    }}
                  >
                    {social.icon}
                  </div>
                  
                  <div className="social-name">{social.name}</div>
                  <div className="social-handle">{social.handle}</div>
                  
                  <div className="social-description">
                    {social.description}
                  </div>

                  <div className="social-stats">
                    <div className="stat-item">
                      <span className="stat-value">{social.followers}</span>
                      <span className="stat-label">{social.statLabel || 'Followers'}</span>
                    </div>
                  </div>

                  <Button 
                    type="primary" 
                    className="social-btn"
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: social.color, borderColor: social.color }}
                  >
                    Truy cập <FaExternalLinkAlt size={12} />
                  </Button>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </div>
  );
};

export default Socials;
