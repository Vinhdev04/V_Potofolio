import React, { Suspense, lazy } from 'react';
import { Typography, Button, Space, Row, Col, Card, Divider } from 'antd';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaAws, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiPostgresql } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';
import GithubProfile from '../components/GithubProfile';
import avatarImg from '../assets/avt.png';

const { Title, Paragraph } = Typography;

const Home = () => {
  const navigate = useNavigate();

  const techStack = [
    { icon: <FaReact size={30} />, name: 'React' },
    { icon: <FaNodeJs size={30} />, name: 'Node.js' },
    { icon: <SiTypescript size={30} />, name: 'TypeScript' },
    { icon: <FaHtml5 size={30} />, name: 'HTML5' },
    { icon: <SiTailwindcss size={30} />, name: 'Tailwind' },
    { icon: <SiPostgresql size={30} />, name: 'PostgreSQL' },
    { icon: <FaAws size={30} />, name: 'AWS' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ padding: '50px 0', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
    >
      <Row gutter={[32, 32]} align="middle">
        <Col xs={24} md={12}>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Title level={1} style={{ fontSize: '3.5rem', color: '#ccd6f6', marginBottom: 0, lineHeight: 1.1 }}>
              Xây Dựng <span style={{ color: '#3b82f6' }}>Trải Nghiệm Web</span> Có Khả Năng Mở Rộng
            </Title>
            <Paragraph style={{ fontSize: '1.1rem', color: '#8892b0', marginTop: 20, maxWidth: 500 }}>
              Tôi là một Full Stack Engineer chuyên về các ứng dụng React hiệu năng cao, kiến trúc cloud-native và tạo ra giao diện người dùng hoàn hảo.
            </Paragraph>
            <Space size="middle" style={{ marginTop: 20 }}>
              <Button 
                type="primary" 
                size="large" 
                style={{ backgroundColor: '#3b82f6', height: 45, padding: '0 25px' }}
                onClick={() => document.getElementById('projects-section').scrollIntoView({ behavior: 'smooth' })}
              >
                Xem Dự Án
              </Button>
              <Button 
                ghost 
                size="large" 
                style={{ height: 45, padding: '0 25px', color: '#ccd6f6', borderColor: '#ccd6f6' }}
                onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })}
              >
                Liên Hệ Tôi
              </Button>
            </Space>

            <div style={{ marginTop: 60 }}>
              <Title level={5} style={{ color: '#8892b0', letterSpacing: 2, fontSize: '0.8rem', marginBottom: 20 }}>
                TECH STACK
              </Title>
              <Space size="large" wrap>
                {techStack.map((tech, index) => (
                  <div key={index} style={{ textAlign: 'center', color: '#8892b0' }}>
                    <div style={{ 
                      background: 'rgba(255,255,255,0.05)', 
                      padding: 15, 
                      borderRadius: 8, 
                      marginBottom: 8,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {tech.icon}
                    </div>
                    <span style={{ fontSize: '0.8rem' }}>{tech.name}</span>
                  </div>
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
          >
            <div style={{ 
              background: 'linear-gradient(45deg, #112240, #233554)', 
              borderRadius: 20, 
              padding: 20,
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
              position: 'relative',
              overflow: 'hidden',
              minHeight: 400,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
                {/* Hero Image */}
                <div style={{ width: 300, height: 300, borderRadius: '50%', overflow: 'hidden', border: '5px solid #64ffda', boxShadow: '0 0 30px rgba(100, 255, 218, 0.3)', zIndex: 1 }}>
                    <img src={avatarImg} alt="VinhDev" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                {/* Decorative Elements */}
                <div style={{ position: 'absolute', top: 20, right: 20, width: 100, height: 100, background: '#3b82f6', filter: 'blur(80px)', opacity: 0.2 }}></div>
                <div style={{ position: 'absolute', bottom: 20, left: 20, width: 150, height: 150, background: '#64ffda', filter: 'blur(100px)', opacity: 0.1 }}></div>
            </div>
          </motion.div>
        </Col>
      </Row>

      <div style={{ marginTop: 100 }}>
        <Title level={2} style={{ color: '#ccd6f6', marginBottom: 40 }}>Chuyên Môn</Title>
        <Row gutter={[24, 24]}>
            {[
                { title: 'Tối Ưu Hóa Frontend', desc: 'Các kỹ thuật nâng cao để giảm kích thước bundle, cải thiện Core Web Vitals và đảm bảo animation 60fps.', icon: '⚡' },
                { title: 'Thiết Kế Hệ Thống', desc: 'Kiến trúc microservices mở rộng và hệ thống backend serverless có khả năng xử lý đồng thời cao.', icon: '🏗️' },
                { title: 'Hạ Tầng Đám Mây', desc: 'Triển khai và điều phối các ứng dụng container hóa sử dụng Docker, Kubernetes và các dịch vụ AWS.', icon: '☁️' }
            ].map((item, idx) => (
                <Col xs={24} md={8} key={idx}>
                    <Card 
                        variant="borderless" 
                        style={{ background: '#112240', borderRadius: 12, height: '100%' }}
                        styles={{ body: { padding: 30 } }}
                    >
                        <div style={{ fontSize: 30, marginBottom: 20 }}>{item.icon}</div>
                        <Title level={4} style={{ color: '#ccd6f6' }}>{item.title}</Title>
                        <Paragraph style={{ color: '#8892b0' }}>{item.desc}</Paragraph>
                    </Card>
                </Col>
            ))}
        </Row>
      </div>

      <Divider style={{ borderColor: '#233554', margin: '60px 0' }} />

      <div style={{ marginTop: 50 }}>
        <Title level={2} style={{ color: '#ccd6f6', marginBottom: 30 }}>Github Profile</Title>
        <GithubProfile />
      </div>

      <Divider style={{ borderColor: '#233554', margin: '60px 0' }} />

      <div id="about-section" style={{ marginTop: 50 }}>
        <About />
      </div>
      
      <Divider style={{ borderColor: '#233554', margin: '60px 0' }} />

      <div id="skills-section" style={{ marginTop: 50 }}>
        <Skills />
      </div>

      <Divider style={{ borderColor: '#233554', margin: '60px 0' }} />

      <div id="experience-section" style={{ marginTop: 50 }}>
        <Experience />
      </div>

      <Divider style={{ borderColor: '#233554', margin: '60px 0' }} />

      <div id="projects-section" style={{ marginTop: 50 }}>
        <Projects />
      </div>

      <Divider style={{ borderColor: '#233554', margin: '60px 0' }} />

      <div id="contact-section" style={{ marginTop: 50 }}>
        <Contact />
      </div>
    </motion.div>
  );
};

export default Home;
