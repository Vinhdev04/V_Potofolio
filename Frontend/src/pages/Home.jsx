import React, { Suspense, lazy } from 'react';
import { Typography, Button, Space, Row, Col, Card, Divider, Spin } from 'antd';
import { motion, useScroll, useTransform } from 'framer-motion';
import { techStack, expertiseData, quotesData } from '@/data/homeData';
import FloatingQuote from '@/components/FloatingQuote';
import PageShell from '@/components/motion/PageShell';
import Reveal, { RevealGroup, RevealItem } from '@/components/motion/Reveal';
import avatarImg from '@/assets/images/avt.png';
import '@/assets/css/Home.scss';

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
  const quote = quotesData[0];
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, -70]);
  const heroRotate = useTransform(scrollY, [0, 600], [0, 8]);

  return (
    <PageShell className="home-container" accent="#3b82f6" style={{ position: 'relative' }}>
      <FloatingQuote text={quote.text} author={quote.author} color={quote.color} style={{ top: '120px', right: '5%', zIndex: 20 }} />

      <section className="hero-section section-shell">
        <div className="hero-orbit hero-orbit--one" />
        <div className="hero-orbit hero-orbit--two" />
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={12}>
            <Reveal className="hero-content" direction="left">
              <div className="section-badge">Available for frontend work</div>
              <motion.div className="greeting">Xin chào, tôi là</motion.div>
              <Title level={1} className="hero-title">
                Xây Dựng <span className="highlight-text">Giao Diện Web</span> Hiện Đại và Tối Ưu
              </Title>
              <Paragraph className="hero-description">
                Tôi tập trung vào ReactJS, trải nghiệm người dùng mượt mà, và các giao diện có chiều sâu thị giác, chuyển động có chủ đích và cảm giác sử dụng cao cấp.
              </Paragraph>

              <Space size="middle" className="hero-buttons">
                <Button type="primary" size="large" className="primary-btn" onClick={() => document.getElementById('projects-section').scrollIntoView({ behavior: 'smooth' })}>
                  <span>Xem Dự Án</span>
                  <span className="btn-arrow">→</span>
                </Button>
                <Button ghost size="large" className="ghost-btn" onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })}>
                  Liên Hệ Tôi
                </Button>
              </Space>

              <RevealGroup className="tech-stack" delayChildren={0.2}>
                <Title level={5} className="tech-stack-title">TECH STACK</Title>
                <Space size="large" wrap className="tech-icons">
                  {techStack.map((tech, index) => (
                    <RevealItem key={tech.name || index} className="tech-item" whileHover={{ y: -5, scale: 1.05 }}>
                      <div className="tech-icon-wrapper">{tech.icon}</div>
                      <span className="tech-name">{tech.name}</span>
                    </RevealItem>
                  ))}
                </Space>
              </RevealGroup>
            </Reveal>
          </Col>

          <Col xs={24} md={12}>
            <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="hero-image-wrapper" style={{ y: heroY }}>
              <div className="hero-image-container">
                <div className="bg-blob blob-1" />
                <div className="bg-blob blob-2" />
                <div className="bg-blob blob-3" />

                <motion.div className="profile-image" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }} style={{ rotate: heroRotate }}>
                  <img src={avatarImg} alt="VinhDev" />
                  <div className="image-border" />
                </motion.div>

                <motion.div className="floating-card card-1" animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                  <div className="card-icon">💻</div>
                  <div className="card-text">Frontend Dev</div>
                </motion.div>

                <motion.div className="floating-card card-2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
                  <div className="card-icon">🚀</div>
                  <div className="card-text">React Dev</div>
                </motion.div>
              </div>
            </motion.div>
          </Col>
        </Row>

        <motion.button type="button" className="scroll-cue" onClick={() => document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' })} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
          <span>Scroll xuống</span>
        </motion.button>
      </section>

      <section className="expertise-section section-shell">
        <Reveal>
          <div className="section-badge">What I focus on</div>
          <Title level={2} className="section-title">Chuyên Môn</Title>
        </Reveal>

        <RevealGroup>
          <Row gutter={[24, 24]}>
            {expertiseData.map((item, idx) => (
              <Col xs={24} md={8} key={idx}>
                <RevealItem whileHover={{ y: -10 }}>
                  <Card className="expertise-card">
                    <motion.div className="expertise-icon" whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.5 }} style={{ '--icon-color': item.color }}>
                      <span style={{ fontSize: '2rem' }}>{item.icon}</span>
                    </motion.div>
                    <Title level={4} className="expertise-title">{item.title}</Title>
                    <Paragraph className="expertise-desc">{item.desc}</Paragraph>
                    <div className="expertise-glow" style={{ background: item.color }} />
                  </Card>
                </RevealItem>
              </Col>
            ))}
          </Row>
        </RevealGroup>
      </section>

      <Divider className="section-divider" />

      <Suspense fallback={<SectionLoader />}>
        <div id="about-section"><About /></div>
        <Divider className="section-divider" />
        <div id="skills-section"><Skills /></div>
        <Divider className="section-divider" />
        <div id="experience-section"><Experience /></div>
        <Divider className="section-divider" />
        <div id="projects-section"><Projects /></div>
        <Divider className="section-divider" />
        <div id="contact-section"><Contact /></div>
      </Suspense>
    </PageShell>
  );
};

export default Home;
