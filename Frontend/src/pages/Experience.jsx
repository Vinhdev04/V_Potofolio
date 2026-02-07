import React from 'react';
import { Typography, Card, Tag } from 'antd';
import { motion } from 'framer-motion';
import { AuditOutlined, CalendarOutlined, CheckCircleOutlined } from '@ant-design/icons';
import '@/assets/css/Experience.scss';

import { experiences } from '@data/experienceData';

const { Title, Text, Paragraph } = Typography;

const Experience = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="experience-container"
    >
      {/* Header */}
      <div className="experience-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="header-icon">
            <AuditOutlined />
          </div>
          <Title level={2} className="experience-title">Kinh Nghiệm Làm Việc</Title>
          <Paragraph className="experience-description">
            Hành trình phát triển nghề nghiệp của tôi trong lĩnh vực phát triển web
          </Paragraph>
        </motion.div>
      </div>
      
      {/* Timeline */}
      <div className="timeline-wrapper">
        {/* Vertical Line */}
        <div className="timeline-line">
          <motion.div 
            className="timeline-progress"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>

        {/* Experience Items */}
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            {/* Timeline Dot */}
            <div className="timeline-dot-wrapper">
              <motion.div 
                className="timeline-dot" 
                style={{ background: exp.color }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
              >
                <div className="dot-pulse" style={{ background: exp.color }}></div>
              </motion.div>
            </div>

            {/* Experience Card */}
            <Card className="experience-card">
              {/* Card Header */}
              <div className="card-header">
                <div className="header-main">
                  <div className="company-info">
                    <Title level={3} className="job-title" style={{ color: exp.color }}>
                      {exp.title}
                    </Title>
                    <Text className="company-name">{exp.company}</Text>
                  </div>
                  
                  <div className="job-meta">
                    <Tag className="date-tag" icon={<CalendarOutlined />}>
                      {exp.date}
                    </Tag>
                  </div>
                </div>
                
                <div className="header-badges">
                  <Tag className="location-tag">📍 {exp.location}</Tag>
                  <Tag className="type-tag">{exp.type}</Tag>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="responsibilities">
                <Text strong className="section-label">Trách nhiệm chính:</Text>
                <ul className="responsibilities-list">
                  {exp.responsibilities.map((resp, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + idx * 0.1 }}
                    >
                      <CheckCircleOutlined className="check-icon" style={{ color: exp.color }} />
                      <span>{resp}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="technologies">
                <Text strong className="section-label">Công nghệ:</Text>
                <div className="tech-tags">
                  {exp.technologies.map((tech, idx) => (
                    <Tag 
                      key={idx} 
                      className="tech-tag"
                      style={{ 
                        '--tech-color': exp.color,
                        '--tech-delay': `${idx * 0.1}s`
                      }}
                    >
                      {tech}
                    </Tag>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="card-glow" style={{ background: exp.color }}></div>
              <div className="card-corner" style={{ background: exp.color }}></div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Summary Stats */}
      <motion.div 
        className="experience-summary"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="summary-card">
          <div className="summary-item">
            <motion.div 
              className="summary-number"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8 }}
            >
              {experiences.length}+
            </motion.div>
            <div className="summary-label">Công Ty</div>
          </div>
          <div className="summary-divider"></div>
          <div className="summary-item">
            <motion.div 
              className="summary-number"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8, delay: 0.1 }}
            >
              5+
            </motion.div>
            <div className="summary-label">Năm Kinh Nghiệm</div>
          </div>
          <div className="summary-divider"></div>
          <div className="summary-item">
            <motion.div 
              className="summary-number"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
            >
              50+
            </motion.div>
            <div className="summary-label">Dự Án</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;