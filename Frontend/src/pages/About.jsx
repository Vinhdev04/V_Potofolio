import React from 'react';
import { Typography, Button, Row, Col, Tag, Card, message } from 'antd';
import { motion } from 'framer-motion';
import { DownloadOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const About = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'VinhDev_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    message.success('Đã bắt đầu tải xuống!');
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
        {/* Left Column: Profile Card (Like Image 2 Sidebar) */}
        <Col xs={24} lg={8}>
            <Card
                style={{ background: '#112240', border: 'none', borderRadius: 16, overflow: 'hidden' }}
                styles={{ body: { padding: 0 } }}
            >
                <div style={{ padding: 30, textAlign: 'center', background: '#112240' }}>
                    <div style={{ 
                        width: 150, height: 150, 
                        background: '#ccd6f6', 
                        borderRadius: '50%', 
                        margin: '0 auto 20px',
                        overflow: 'hidden',
                        border: '4px solid #3b82f6'
                    }}>
                        {/* Placeholder for Profile Image */}
                        <img src={avatarImg} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <Title level={3} style={{ color: '#ccd6f6', marginBottom: 5 }}>Phạm Công Vinh</Title>
                    <Text style={{ color: '#3b82f6', fontSize: '1rem' }}>Web Developer</Text>
                    <Paragraph style={{ color: '#8892b0', marginTop: 10 }}>Sinh viên IT năm cuối trường Đại Học Công Nghệ TP.HCM chuyên ngành Công Nghệ Phần Mềm</Paragraph>
                    
                    <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center', gap: 10 }}>
                        <Button shape="circle" icon={<EnvironmentOutlined />} ghost style={{ borderColor: '#8892b0', color: '#8892b0' }} />
                        <Button shape="circle" icon={<MailOutlined />} ghost style={{ borderColor: '#8892b0', color: '#8892b0' }} />
                        <Button shape="circle" icon={<PhoneOutlined />} ghost style={{ borderColor: '#8892b0', color: '#8892b0' }} />
                    </div>

                    <Button 
                        type="primary" 
                        block 
                        icon={<DownloadOutlined />} 
                        style={{ marginTop: 30, height: 45, background: '#3b82f6' }}
                        onClick={handleDownloadCV}
                    >
                        Tải CV
                    </Button>
                </div>

                <div style={{ padding: 30, borderTop: '1px solid #233554' }}>
                    <Text strong style={{ color: '#ccd6f6', display: 'block', marginBottom: 15 }}>CÔNG NGHỆ CHÍNH</Text>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {['ReactJS', 'Javascript', 'Node.js', 'Tailwind CSS', 'TypeScript', 'PostgreSQL'].map(tech => (
                            <Tag key={tech} color="#233554" style={{ color: '#64ffda', border: 'none', padding: '4px 10px' }}>
                                {tech}
                            </Tag>
                        ))}
                    </div>
                </div>
            </Card>
        </Col>

        {/* Right Column: About Me Content */}
        <Col xs={24} lg={16}>
            <Card style={{ background: '#112240', border: 'none', borderRadius: 16 }} styles={{ body: { padding: 40 } }}>
                <Title level={2} style={{ color: '#ccd6f6', marginTop: 0 }}>Giới Thiệu</Title>
                <Paragraph style={{ color: '#8892b0', fontSize: '1.1rem', lineHeight: 1.8 }}>
                    Tôi là một sinh viên IT năm cuối chuyên ngành Công Nghệ Phần Mềm tại Đại Học Công Nghệ TP.HCM (HUTECH). 
                    Tôi có niềm đam mê mạnh mẽ với lập trình web, đặc biệt là ReactJS và hệ sinh thái JavaScript.
                </Paragraph>
                <Paragraph style={{ color: '#8892b0', fontSize: '1.1rem', lineHeight: 1.8 }}>
                    Tôi luôn tìm tòi học hỏi các công nghệ mới và áp dụng chúng vào các dự án thực tế để tạo ra những sản phẩm chất lượng, hiệu quả.
                </Paragraph>
            </Card>

            <div style={{ marginTop: 30 }}>
                <Title level={3} style={{ color: '#ccd6f6', borderLeft: '4px solid #3b82f6', paddingLeft: 15 }}>
                    Học Vấn
                </Title>
                
                {[
                    { school: 'Đại Học Công Nghệ TP.HCM (HUTECH)', place: 'Công Nghệ Phần Mềm', year: 'Năm cuối', gpa: '', icon: '🎓' },
                ].map((edu, idx) => (
                    <Card key={idx} style={{ background: '#112240', border: 'none', borderRadius: 12, marginTop: 15 }} styles={{ body: { padding: 25 } }}>
                        <Row align="middle">
                            <Col flex="60px">
                                <div style={{ fontSize: 30, color: '#3b82f6' }}>{edu.icon}</div>
                            </Col>
                            <Col flex="auto">
                                <Title level={4} style={{ color: '#ccd6f6', margin: 0 }}>{edu.school}</Title>
                                <Text style={{ color: '#8892b0' }}>{edu.place}</Text>
                                <div style={{ color: '#8892b0', fontSize: '0.9rem', marginTop: 5 }}>{edu.year} • {edu.gpa || edu.desc}</div>
                            </Col>
                        </Row>
                    </Card>
                ))}
            </div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default About;
