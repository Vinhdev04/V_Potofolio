import React from 'react';
import { Typography, Row, Col, Card, Progress, Segmented } from 'antd';
import { motion } from 'framer-motion';
import '@/assets/css/Skills.scss';

const { Title, Paragraph } = Typography;

import { skills } from '@data/skillsData';

const Skills = () => {
  const [filter, setFilter] = React.useState('All');

  const filteredSkills = filter === 'All' ? skills : skills.filter(s => s.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="skills-container"
    >
      <div className="skills-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Title level={1} className="skills-title">Kỹ Năng Của Tôi</Title>
          <Paragraph className="skills-description">
            Danh sách các công cụ, ngôn ngữ và công nghệ tôi sử dụng để tạo ra các sản phẩm kỹ thuật số mạnh mẽ.
          </Paragraph>
          
          <div className="skills-filter">
            <Segmented
              options={['All', 'Frontend', 'Backend', 'Tools']}
              value={filter}
              onChange={setFilter}
              size="large"
              className="custom-segmented"
            />
          </div>
        </motion.div>
      </div>

      <Row gutter={[24, 24]}>
        {filteredSkills.map((skill, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={skill.name}>
            <motion.div
              layout
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
            >
              <Card className="skill-card">
                {/* Animated Background Gradient */}
                <div 
                  className="skill-card-bg" 
                  style={{ background: `linear-gradient(135deg, ${skill.color}15, transparent)` }}
                ></div>
                
                {/* Skill Icon */}
                <motion.div 
                  className="skill-icon-wrapper"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <div 
                    className="skill-icon-glow" 
                    style={{ boxShadow: `0 0 40px ${skill.color}40` }}
                  ></div>
                </motion.div>
                
                {/* Skill Details */}
                <div className="skill-details">
                  <div className="skill-header">
                    <Title level={4} className="skill-name">{skill.name}</Title>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="skill-progress-wrapper">
                    <Progress 
                      percent={skill.level} 
                      showInfo={false} 
                      strokeColor={{
                        '0%': skill.color,
                        '100%': '#64ffda'
                      }}
                      trailColor="rgba(255, 255, 255, 0.05)"
                      strokeWidth={8}
                      className="skill-progress"
                    />
                  </div>
                  
                  {/* Skill Level Indicator */}
                  <div className="skill-level">
                    {skill.level >= 90 ? '🌟 Expert' : 
                     skill.level >= 75 ? '⭐ Advanced' : 
                     '✨ Intermediate'}
                  </div>
                </div>
                
                {/* Hover Effect Circle */}
                <div className="hover-circle" style={{ background: skill.color }}></div>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
      
      {/* Skill Statistics */}
      <motion.div 
        className="skills-stats"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={8}>
            <div className="stat-card">
              <motion.div 
                className="stat-number"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.8 }}
              >
                {skills.length}+
              </motion.div>
              <div className="stat-label">Công Nghệ</div>
            </div>
          </Col>
          <Col xs={24} sm={8}>
            <div className="stat-card">
              <motion.div 
                className="stat-number"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.8, delay: 0.1 }}
              >
                5+
              </motion.div>
              <div className="stat-label">Năm Kinh Nghiệm</div>
            </div>
          </Col>
          <Col xs={24} sm={8}>
            <div className="stat-card">
              <motion.div 
                className="stat-number"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
              >
                50+
              </motion.div>
              <div className="stat-label">Dự Án Hoàn Thành</div>
            </div>
          </Col>
        </Row>
      </motion.div>
    </motion.div>
  );
};

export default Skills;