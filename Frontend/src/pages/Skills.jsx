import React from 'react';
import { Typography, Row, Col, Card, Progress, Segmented } from 'antd';
import { motion } from 'framer-motion';
import '@/assets/css/Skills.scss';
import FloatingQuote from '@/components/FloatingQuote';
import { quotesData } from '@/data/homeData';
import PageShell from '@/components/motion/PageShell';
import Reveal, { RevealGroup, RevealItem } from '@/components/motion/Reveal';
import { skills } from '@data/skillsData';

const { Title, Paragraph } = Typography;

const Skills = () => {
  const quote = quotesData[3];
  const [filter, setFilter] = React.useState('All');
  const filteredSkills = filter === 'All' ? skills : skills.filter((s) => s.category === filter);

  return (
    <PageShell className="skills-container" accent="#64ffda" style={{ position: 'relative' }}>
      {quote && <FloatingQuote text={quote.text} author={quote.author} color={quote.color} style={{ top: '100px', left: '20px', zIndex: 10 }} />}

      <Reveal className="skills-header section-shell">
        <div className="section-badge">Capabilities</div>
        <Title level={1} className="skills-title">Kỹ Năng Của Tôi</Title>
        <Paragraph className="skills-description">
          Danh sách các công cụ, ngôn ngữ và công nghệ tôi dùng để xây dựng sản phẩm số với trải nghiệm mượt, rõ và có chiều sâu thị giác.
        </Paragraph>

        <div className="skills-filter">
          <Segmented options={['All', 'Frontend', 'Backend', 'Tools']} value={filter} onChange={setFilter} size="large" className="custom-segmented" />
        </div>
      </Reveal>

      <RevealGroup>
        <Row gutter={[24, 24]}>
          {filteredSkills.map((skill, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={skill.name}>
              <RevealItem layout transition={{ duration: 0.3, delay: index * 0.05 }} whileHover={{ y: -10 }}>
                <Card className="skill-card">
                  <div className="skill-card-bg" style={{ background: `linear-gradient(135deg, ${skill.color}15, transparent)` }} />
                  <motion.div className="skill-icon-wrapper" whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }}>
                    <div className="skill-icon" style={{ color: skill.color }}>{skill.icon}</div>
                    <div className="skill-icon-glow" style={{ boxShadow: `0 0 40px ${skill.color}40` }} />
                  </motion.div>

                  <div className="skill-details">
                    <div className="skill-header">
                      <Title level={4} className="skill-name">{skill.name}</Title>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>

                    <div className="skill-progress-wrapper">
                      <Progress percent={skill.level} showInfo={false} strokeColor={{ '0%': skill.color, '100%': '#64ffda' }} trailColor="rgba(255, 255, 255, 0.05)" size={['100%', 8]} className="skill-progress" />
                    </div>

                    <div className="skill-level">
                      {skill.level >= 90 ? 'Expert' : skill.level >= 75 ? 'Advanced' : 'Intermediate'}
                    </div>
                  </div>

                  <div className="hover-circle" style={{ background: skill.color }} />
                </Card>
              </RevealItem>
            </Col>
          ))}
        </Row>
      </RevealGroup>

      <Reveal className="skills-stats">
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={8}>
            <div className="stat-card">
              <motion.div className="stat-number" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: 'spring', duration: 0.8 }}>
                {skills.length}+
              </motion.div>
              <div className="stat-label">Công Nghệ</div>
            </div>
          </Col>
          <Col xs={24} sm={8}>
            <div className="stat-card">
              <motion.div className="stat-number" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: 'spring', duration: 0.8, delay: 0.1 }}>
                5+
              </motion.div>
              <div className="stat-label">Năm Tự Học</div>
            </div>
          </Col>
          <Col xs={24} sm={8}>
            <div className="stat-card">
              <motion.div className="stat-number" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: 'spring', duration: 0.8, delay: 0.2 }}>
                50+
              </motion.div>
              <div className="stat-label">Dự Án Hoàn Thành</div>
            </div>
          </Col>
        </Row>
      </Reveal>
    </PageShell>
  );
};

export default Skills;
