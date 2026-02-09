import React from 'react';
import { Typography, Button, Row, Col, Tag, Card, message, Divider, List, Timeline } from 'antd';
import { motion } from 'framer-motion';
import { DownloadOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined, GithubOutlined, LinkedinOutlined, CalendarOutlined, GlobalOutlined } from '@ant-design/icons';
import avatarImg from '@/assets/images/avt.png';

const { Title, Paragraph, Text } = Typography;

import { experiences, education, skills, additionalInfo } from '@data/aboutData';
import { contactInfo, socialLinks } from '@/data/socialData';
import FloatingQuote from '@/components/FloatingQuote';
import { quotesData } from '@/data/homeData';

const About = () => {
  const quote = quotesData[1];
  const handleDownloadCV = () => {
    message.success('Đang tải xuống CV...');
    // Fake download for demo
    setTimeout(() => {
        const link = document.createElement('a');
        link.href = '#';
        link.download = 'PhamCongVinh_CV.pdf';
        link.click();
    }, 1000);
  };

  const githubUrl = socialLinks.find(s => s.name === 'GitHub')?.link;
  const linkedinUrl = socialLinks.find(s => s.name === 'LinkedIn')?.link;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      style={{ padding: '50px 0', maxWidth: 1200, margin: '0 auto', position: 'relative' }}
    >
      {quote && (
        <FloatingQuote 
          text={quote.text} 
          author={quote.author} 
          color={quote.color} 
          style={{ 
            top: '100px', 
            right: '-140px', 
            zIndex: 10
          }} 
        />
      )}
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
                    <Text style={{ color: '#3b82f6', fontSize: '1.1rem', fontWeight: 500 }}>Frontend Developer (Intern)</Text>
                    <Paragraph style={{ color: '#8892b0', marginTop: 15, fontSize: '0.95rem' }}>
                        Sinh viên năm cuối ngành Công nghệ Phần mềm tại Đại học HUTECH.
                    </Paragraph>
                    
                    <div style={{ marginTop: 25, display: 'flex', flexDirection: 'column', gap: 15, alignItems: 'flex-start', paddingLeft: 10 }}>
                        <SpaceIcon icon={<EnvironmentOutlined />} text={contactInfo.location} />
                        <SpaceIcon icon={<MailOutlined />} text={contactInfo.email} />
                        <SpaceIcon icon={<PhoneOutlined />} text={contactInfo.phone} />
                        <SpaceIcon icon={<GlobalOutlined />} text="vinhdev04.github.io" link={contactInfo.website} />
                        <SpaceIcon icon={<GithubOutlined />} text="github.com/Vinhdev04" link={githubUrl} />
                        <SpaceIcon icon={<LinkedinOutlined />} text="linkedin.com/in/..." link={linkedinUrl} />
                    </div>

                    <div style={{ marginTop: 30, display: 'flex', gap: 10 }}>
                        <Button 
                            type="primary" 
                            block 
                            icon={<DownloadOutlined />} 
                            style={{ height: 45, background: '#3b82f6', fontWeight: 600, flex: 1 }}
                            onClick={handleDownloadCV}
                        >
                            Tải CV
                        </Button>
                        <Button 
                            block 
                            icon={<span style={{ fontSize: '1.2rem', display: 'flex' }}>🎵</span>} 
                            style={{ height: 45, background: '#000000', borderColor: '#000000', color: '#fff', fontWeight: 600, flex: 1 }}
                            href="https://www.tiktok.com/@devcraftt"
                            target="_blank"
                        >
                            TikTok
                        </Button>
                    </div>
                </div>
            </Card>
        </Col>

        {/* Right Column: CV Content */}
        <Col xs={24} lg={16}>
            <Card style={{ background: '#112240', border: 'none', borderRadius: 16 }} styles={{ body: { padding: 40 } }}>
                <Title level={2} style={{ color: '#ccd6f6', marginTop: 0, borderBottom: '2px solid #233554', paddingBottom: 15, marginBottom: 25 }}>
                    Mục Tiêu Nghề Nghiệp
                </Title>
                <Paragraph style={{ color: '#8892b0', fontSize: '1.1rem', lineHeight: 1.8 }}>
                    Sinh viên năm cuối ngành Công nghệ Phần mềm tại Đại học Công Nghệ TP.HCM. Có nền tảng vững chắc về HTML, CSS, JavaScript và ReactJS.
                </Paragraph>
                <Paragraph style={{ color: '#8892b0', fontSize: '1.1rem', lineHeight: 1.8 }}>
                    Định hướng phát triển thành FullStack Developer chuyên nghiệp, làm chủ các giải pháp AI trong tương lai, luôn chủ động học hỏi và cập nhật công nghệ mới.
                </Paragraph>

                {/* Experience Section */}
                <div style={{ marginTop: 40 }}>
                    <Title level={3} style={{ color: '#ccd6f6', display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ color: '#64ffda' }}>01.</span> Dự Án Trong Quá Trình Học Tập
                    </Title>
                    <Timeline 
                        items={experiences.map((exp, index) => ({
                            color: '#3b82f6',
                            children: (
                                <div style={{ paddingBottom: 20 }}>
                                    <Title level={4} style={{ color: '#e6f1ff', margin: 0 }}>{exp.role}</Title>
                                    {exp.link ? (
                                        <a href={exp.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
                                            <Text style={{ color: '#3b82f6', fontSize: '1rem', fontWeight: 500, cursor: 'pointer' }} underline>@{exp.company}</Text>
                                        </a>
                                    ) : (
                                        <Text style={{ color: '#3b82f6', fontSize: '1rem', fontWeight: 500 }}>@{exp.company}</Text>
                                    )}
                                    <div style={{ color: '#8892b0', marginBottom: 10, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 5 }}>
                                        <CalendarOutlined /> {exp.period}
                                    </div>
                                    <ul style={{ paddingLeft: 20, color: '#8892b0' }}>
                                        {exp.description.map((desc, i) => (
                                            <li key={i} style={{ marginBottom: 5 }}>
                                                {desc.split(/(https?:\/\/[^\s]+)/g).map((part, index) => 
                                                    part.match(/(https?:\/\/[^\s]+)/g) ? (
                                                        <a key={index} href={part} target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', textDecoration: 'underline' }}>
                                                            {part}
                                                        </a>
                                                    ) : part
                                                )}
                                            </li>
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

                {/* Additional Info Section */}
                <div style={{ marginTop: 40 }}>
                    <Title level={3} style={{ color: '#ccd6f6', display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ color: '#64ffda' }}>04.</span> {additionalInfo.title}
                    </Title>
                    <Paragraph style={{ color: '#8892b0', fontSize: '1rem', lineHeight: 1.8 }}>
                        {additionalInfo.content}
                    </Paragraph>
                </div>

            </Card>
        </Col>
      </Row>
    </motion.div>
  );
};

// Helper component for icon + text
const SpaceIcon = ({ icon, text, link }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#8892b0' }}>
        <span style={{ color: '#3b82f6', fontSize: '1.2rem' }}>{icon}</span>
        {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                <Text style={{ color: '#8892b0', cursor: 'pointer' }} underline>{text}</Text>
            </a>
        ) : (
            <Text style={{ color: '#8892b0' }}>{text}</Text>
        )}
    </div>
);

export default About;
