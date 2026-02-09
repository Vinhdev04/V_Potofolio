import React from 'react';
import { Typography, Row, Col, Card, Tag, Button, Image } from 'antd';
import { motion } from 'framer-motion';
import { SafetyCertificateOutlined, LinkOutlined, TrophyOutlined, CheckCircleOutlined } from '@ant-design/icons';
import '@/assets/css/Certificates.scss';
import { certificates } from '@data/certificatesData';
import FloatingQuote from '@/components/FloatingQuote';
import { quotesData } from '@/data/homeData';

const { Title, Paragraph, Text } = Typography;

const Certificates = () => {
  const quote = quotesData[5];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="certificates-container"
      style={{ position: 'relative' }}
    >
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
      {/* Header */}
      <div className="certificates-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="header-icon">
            <TrophyOutlined />
          </div>
          <Title level={1} className="certificates-title">Chứng Chỉ & Bằng Cấp</Title>
          <Paragraph className="certificates-description">
            Các chứng chỉ và khóa học tôi đã hoàn thành để nâng cao kỹ năng chuyên môn.
          </Paragraph>
        </motion.div>
      </div>

      {/* Certificates Grid */}
      <Row gutter={[24, 24]}>
        {certificates.map((cert, index) => (
          <Col xs={24} md={12} key={index}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <Card className="certificate-card">
                {/* Background Pattern */}
                <div className="card-pattern"></div>
                
                {/* Level Badge */}
                <div className="level-badge" style={{ background: cert.color }}>
                  <CheckCircleOutlined /> {cert.level}
                </div>
                
                {/* Card Content */}
                <div className="certificate-content">
                  {/* Icon Section */}
                  <motion.div 
                    className="certificate-icon"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    style={{ '--icon-color': cert.color }}
                  >
                    <SafetyCertificateOutlined />
                    <div className="icon-glow" style={{ background: cert.color }}></div>
                  </motion.div>
                  
                  {/* Info Section */}
                  <div className="certificate-info">
                    <Title level={4} className="certificate-title">{cert.title}</Title>
                    <Text className="certificate-issuer">{cert.issuer}</Text>
                    <div className="certificate-date">
                      <span className="date-icon">📅</span>
                      Năm cấp: {cert.date}
                    </div>
                  </div>
                </div>

                {/* Certificate Image */}
                {cert.image && (
                  <div style={{ marginTop: '16px', textAlign: 'center' }}>
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      height={150}
                      style={{ objectFit: 'contain', borderRadius: '8px', border: `1px solid ${cert.color}` }}
                    />
                  </div>
                )}

                {/* Description */}
                <Paragraph className="certificate-description">
                  {cert.description}
                </Paragraph>

                {/* Skills Tags */}
                <div className="certificate-skills">
                  {cert.skills.map(skill => (
                    <Tag key={skill} className="skill-tag" style={{ '--tag-color': cert.color }}>
                      {skill}
                    </Tag>
                  ))}
                </div>

                {/* View Button */}
                <Button 
                  type="link" 
                  icon={<LinkOutlined />} 
                  className="view-certificate-btn"
                  href={cert.link}
                  target="_blank"
                  style={{ '--btn-color': cert.color }}
                >
                  Xem chứng chỉ
                  <span className="btn-arrow">→</span>
                </Button>
                
                {/* Decorative Corner */}
                <div className="corner-decoration" style={{ background: cert.color }}></div>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      {/* Stats Section */}
      <motion.div 
        className="certificates-stats"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={8}>
            <div className="stat-item">
              <motion.div 
                className="stat-number"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.8 }}
              >
                {certificates.length}+
              </motion.div>
              <div className="stat-label">Chứng Chỉ</div>
            </div>
          </Col>
          <Col xs={24} sm={8}>
            <div className="stat-item">
              <motion.div 
                className="stat-number"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.8, delay: 0.1 }}
              >
                500+
              </motion.div>
              <div className="stat-label">Giờ Học</div>
            </div>
          </Col>
          <Col xs={24} sm={8}>
            <div className="stat-item">
              <motion.div 
                className="stat-number"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
              >
                3+
              </motion.div>
              <div className="stat-label">Nền Tảng</div>
            </div>
          </Col>
        </Row>
      </motion.div>
    </motion.div>
  );
};

export default Certificates;