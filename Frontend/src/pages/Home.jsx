import React, { Suspense, lazy } from 'react';
import { Typography, Button, Space, Row, Col, Card, Divider, Spin } from 'antd';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { techStack, expertiseData } from '@/data/homeData';
import avatarImg from '@/assets/images/avt.png';
import '@/assets/css/Home.scss';

// Lazy load sections to optimize initial bundle size
const About = lazy(() => import('@/pages/About'));
const Projects = lazy(() => import('@/pages/Projects'));
const Skills = lazy(() => import('@/pages/Skills'));
const Experience = lazy(() => import('@/pages/Experience'));
const Contact = lazy(() => import('@/pages/Contact'));

const { Title, Paragraph } = Typography;

const SectionLoader = () => (
  <div style={{ padding: '50px 0', textAlign: 'center' }}>
    <Spin size="large" />
  </div>
);

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="home-container"
    >
      {/* Hero Section */}
      <div className="hero-section">
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={12}>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="hero-content"
            >
              <motion.div 
                className="greeting"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                👋 Xin chào, tôi là
              </motion.div>
              
              <Title level={1} className="hero-title">
                Xây Dựng <span className="highlight-text">Trải Nghiệm Web</span> Có Khả Năng Mở Rộng
              </Title>
              
              <Paragraph className="hero-description">
                Tôi là một Full Stack Engineer chuyên về các ứng dụng React hiệu năng cao, kiến trúc cloud-native và tạo ra giao diện người dùng hoàn hảo.
              </Paragraph>
              
              <Space size="middle" className="hero-buttons">
                <Button 
                  type="primary" 
                  size="large" 
                  className="primary-btn"
                  onClick={() => document.getElementById('projects-section').scrollIntoView({ behavior: 'smooth' })}
                >
                  <span>Xem Dự Án</span>
                  <span className="btn-arrow">→</span>
                </Button>
                <Button 
                  ghost 
                  size="large" 
                  className="ghost-btn"
                  onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })}
                >
                  Liên Hệ Tôi
                </Button>
              </Space>

              <div className="tech-stack">
                <Title level={5} className="tech-stack-title">
                  TECH STACK
                </Title>
                <Space size="large" wrap className="tech-icons">
                  {techStack.map((tech, index) => (
                    <motion.div 
                      key={index} 
                      className="tech-item"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.05 }}
                    >
                      <div className="tech-icon-wrapper">
                        {tech.icon}
                      </div>
                      <span className="tech-name">{tech.name}</span>
                    </motion.div>
                  ))}
                </Space>
              </div>
            </motion.div>
          </Col>
          
          <Col xs={24} md={12}>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="hero-image-wrapper"
            >
              <div className="hero-image-container">
                {/* Animated Background Elements */}
                <div className="bg-blob blob-1"></div>
                <div className="bg-blob blob-2"></div>
                <div className="bg-blob blob-3"></div>
                
                {/* Profile Image */}
                <motion.div 
                  className="profile-image"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={avatarImg} alt="VinhDev" />
                  <div className="image-border"></div>
                </motion.div>
                
                {/* Floating Cards */}
                <motion.div 
                  className="floating-card card-1"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="card-icon">💻</div>
                  <div className="card-text">Full Stack Dev</div>
                </motion.div>
                
                <motion.div 
                  className="floating-card card-2"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <div className="card-icon">🚀</div>
                  <div className="card-text">React Expert</div>
                </motion.div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </div>

      {/* Expertise Section */}
      <div className="expertise-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Title level={2} className="section-title">Chuyên Môn</Title>
          <Row gutter={[24, 24]}>
            {expertiseData.map((item, idx) => (
              <Col xs={24} md={8} key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="expertise-card">
                    <motion.div 
                      className="expertise-icon"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      style={{ '--icon-color': item.color }}
                    >
                      <span style={{ fontSize: '2rem' }}>{item.icon}</span>
                    </motion.div>
                    <Title level={4} className="expertise-title">{item.title}</Title>
                    <Paragraph className="expertise-desc">{item.desc}</Paragraph>
                    <div className="expertise-glow" style={{ background: item.color }}></div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </div>

      <Divider className="section-divider" />

      <Suspense fallback={<SectionLoader />}>
        <div id="about-section">
          <About />
        </div>
        
        <Divider className="section-divider" />

        <div id="skills-section">
          <Skills />
        </div>

        <Divider className="section-divider" />

        <div id="experience-section">
          <Experience />
        </div>

        <Divider className="section-divider" />

        <div id="projects-section">
          <Projects />
        </div>

        <Divider className="section-divider" />

        <div id="contact-section">
          <Contact />
        </div>
      </Suspense>
    </motion.div>
  );
};

export default Home;