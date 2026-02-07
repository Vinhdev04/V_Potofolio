import React from 'react';
import { Typography, Button, Row, Col, Tag, Card, message, Divider, List, Timeline } from 'antd';
import { motion } from 'framer-motion';
import { DownloadOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined, GithubOutlined, LinkedinOutlined, CalendarOutlined, GlobalOutlined } from '@ant-design/icons';
import avatarImg from '@/assets/images/avt.png';

const { Title, Paragraph, Text } = Typography;

import { experiences, education, skills } from '@data/aboutData';

const About = () => {
  const handleDownloadCV = () => {
    // In a real scenario, this would link to a real PDF file
    message.success('Đang tải xuống CV...');
    // Fake download for demo
    setTimeout(() => {
        const link = document.createElement('a');
        link.href = '#';
        link.download = 'PhamCongVinh_CV.pdf';
        link.click();
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      style={{ padding: '50px 0', maxWidth: 1200, margin: '0 auto' }}
    >
      <Row gutter={[48, 48]}>
        {/* Left Column: Profile Card */}
        <Col xs={24} lg={8}>
            <Card
                style={{ background: '#112240', border: 'none', borderRadius: 16, overflow: 'hidden', position: 'sticky', top: 20 }}
                styles={{ body: { padding: 0 } }}
            >
                <div style={{ padding: 30, textAlign: 'center', background: '#112240' }}>
                    <div style={{ 
                        width: 160, height: 160, 
                        background: '#ccd6f6', 
                        borderRadius: '50%', 
                        margin: '0 auto 20px',
                        overflow: 'hidden',
                        border: '4px solid #3b82f6',
                        boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
                    }}>
                        <img src={avatarImg} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <Title level={3} style={{ color: '#ccd6f6', marginBottom: 5 }}>Phạm Công Vinh</Title>
                    <Text style={{ color: '#3b82f6', fontSize: '1.1rem', fontWeight: 500 }}>Senior Fullstack Developer</Text>
                    <Paragraph style={{ color: '#8892b0', marginTop: 15, fontSize: '0.95rem' }}>
                        10+ năm kinh nghiệm xây dựng các ứng dụng web quy mô lớn, hiệu năng cao và bảo mật.
                    </Paragraph>
                    
                    <div style={{ marginTop: 25, display: 'flex', flexDirection: 'column', gap: 15, alignItems: 'flex-start', paddingLeft: 10 }}>
                        <SpaceIcon icon={<EnvironmentOutlined />} text="TP. Hồ Chí Minh, Việt Nam" />
                        <SpaceIcon icon={<MailOutlined />} text="vinhdev04@example.com" />
                        <SpaceIcon icon={<PhoneOutlined />} text="+84 909 123 456" />
                        <SpaceIcon icon={<GlobalOutlined />} text="https://vinhdev.com" />
                        <SpaceIcon icon={<GithubOutlined />} text="github.com/Vinhdev04" />
                        <SpaceIcon icon={<LinkedinOutlined />} text="linkedin.com/in/vinhdev04" />
                    </div>

                    <Button 
                        type="primary" 
                        block 
                        icon={<DownloadOutlined />} 
                        style={{ marginTop: 30, height: 45, background: '#3b82f6', fontWeight: 600 }}
                        onClick={handleDownloadCV}
                    >
                        Tải CV (PDF)
                    </Button>
                </div>
            </Card>
        </Col>

        {/* Right Column: CV Content */}
        <Col xs={24} lg={16}>
            <Card style={{ background: '#112240', border: 'none', borderRadius: 16 }} styles={{ body: { padding: 40 } }}>
                <Title level={2} style={{ color: '#ccd6f6', marginTop: 0, borderBottom: '2px solid #233554', paddingBottom: 15, marginBottom: 25 }}>
                    Về Tôi
                </Title>
                <Paragraph style={{ color: '#8892b0', fontSize: '1.1rem', lineHeight: 1.8 }}>
                    Là một Senior Fullstack Developer với hơn 10 năm kinh nghiệm, tôi chuyên thiết kế và xây dựng các hệ thống web phức tạp, có khả năng mở rộng cao. 
                    Tôi am hiểu sâu sắc về Clean Code, SOLID principles và Design Patterns.
                </Paragraph>
                <Paragraph style={{ color: '#8892b0', fontSize: '1.1rem', lineHeight: 1.8 }}>
                    Mục tiêu của tôi là tạo ra những sản phẩm công nghệ không chỉ hoạt động tốt mà còn mang lại trải nghiệm người dùng tuyệt vời, 
                    đồng thời tối ưu hóa chi phí và hiệu suất vận hành cho doanh nghiệp.
                </Paragraph>

                {/* Experience Section */}
                <div style={{ marginTop: 40 }}>
                    <Title level={3} style={{ color: '#ccd6f6', display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ color: '#64ffda' }}>01.</span> Kinh Nghiệm Làm Việc
                    </Title>
                    <Timeline 
                        items={experiences.map((exp, index) => ({
                            color: '#3b82f6',
                            children: (
                                <div style={{ paddingBottom: 20 }}>
                                    <Title level={4} style={{ color: '#e6f1ff', margin: 0 }}>{exp.role}</Title>
                                    <Text style={{ color: '#3b82f6', fontSize: '1rem', fontWeight: 500 }}>@{exp.company}</Text>
                                    <div style={{ color: '#8892b0', marginBottom: 10, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 5 }}>
                                        <CalendarOutlined /> {exp.period}
                                    </div>
                                    <ul style={{ paddingLeft: 20, color: '#8892b0' }}>
                                        {exp.description.map((desc, i) => (
                                            <li key={i} style={{ marginBottom: 5 }}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        }))}
                    />
                </div>

                {/* Education Section */}
                <div style={{ marginTop: 20 }}>
                    <Title level={3} style={{ color: '#ccd6f6', display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ color: '#64ffda' }}>02.</span> Học Vấn
                    </Title>
                    {education.map((edu, idx) => (
                         <div key={idx} style={{ marginBottom: 25, borderLeft: '3px solid #3b82f6', paddingLeft: 20 }}>
                            <Title level={4} style={{ color: '#e6f1ff', margin: 0 }}>{edu.school}</Title>
                            <Text style={{ color: '#ccd6f6', fontSize: '1.1rem' }}>{edu.degree}</Text>
                            <div style={{ color: '#8892b0', marginTop: 5 }}>{edu.year}</div>
                            <div style={{ color: '#8892b0', marginTop: 5 }}>{edu.description}</div>
                        </div>
                    ))}
                </div>

                {/* Skills Section */}
                <div style={{ marginTop: 40 }}>
                    <Title level={3} style={{ color: '#ccd6f6', display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ color: '#64ffda' }}>03.</span> Kỹ Năng Chuyên Môn
                    </Title>
                    <Row gutter={[24, 24]}>
                        {Object.entries(skills).map(([category, items], idx) => (
                            <Col xs={24} sm={12} key={idx}>
                                <div style={{ marginBottom: 20 }}>
                                    <Text strong style={{ color: '#ccd6f6', fontSize: '1.1rem', display: 'block', marginBottom: 10 }}>{category}</Text>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                        {items.map(skill => (
                                            <Tag key={skill} color="rgba(59, 130, 246, 0.1)" style={{ color: '#64ffda', border: '1px solid rgba(100, 255, 218, 0.2)', padding: '5px 12px', fontSize: '0.9rem' }}>
                                                {skill}
                                            </Tag>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>

            </Card>
        </Col>
      </Row>
    </motion.div>
  );
};

// Helper component for icon + text
const SpaceIcon = ({ icon, text }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#8892b0' }}>
        <span style={{ color: '#3b82f6', fontSize: '1.2rem' }}>{icon}</span>
        <Text style={{ color: '#8892b0' }}>{text}</Text>
    </div>
);

export default About;
