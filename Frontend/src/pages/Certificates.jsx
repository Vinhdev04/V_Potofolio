import React from 'react';
import { Typography, Row, Col, Card, Tag, Button } from 'antd';
import { motion } from 'framer-motion';
import { SafetyCertificateOutlined, LinkOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const Certificates = () => {
  const certificates = [
    {
      title: 'Meta Frontend Developer Professional Certificate',
      issuer: 'Coursera - Meta',
      date: '2023',
      description: 'Chứng chỉ chuyên nghiệp xác nhận kỹ năng chuyên sâu về React, JavaScript và Frontend Development.',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'UI/UX'],
      link: '#'
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'Udemy',
      date: '2022',
      description: 'Khóa học toàn diện về xây dựng ứng dụng web với MERN Stack (MongoDB, Express, React, Node.js).',
      skills: ['Node.js', 'Express', 'MongoDB', 'REST API'],
      link: '#'
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'FreeCodeCamp',
      date: '2022',
      description: 'Thành thạo các cấu trúc dữ liệu cơ bản và giải thuật trong JavaScript.',
      skills: ['Algorithms', 'Data Structures', 'JavaScript'],
      link: '#'
    },
    {
      title: 'Responsive Web Design',
      issuer: 'FreeCodeCamp',
      date: '2021',
      description: 'Chứng chỉ về thiết kế web đáp ứng sử dụng HTML5 và CSS3 hiện đại.',
      skills: ['Responsive Design', 'CSS Grid', 'Flexbox'],
      link: '#'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ padding: '50px 0', maxWidth: 1200, margin: '0 auto' }}
    >
      <div style={{ textAlign: 'center', marginBottom: 50 }}>
        <Title level={1} style={{ color: '#ccd6f6' }}>Chứng Chỉ & Bằng Cấp</Title>
        <Paragraph style={{ color: '#8892b0', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto' }}>
          Các chứng chỉ và khóa học tôi đã hoàn thành để nâng cao kỹ năng chuyên môn.
        </Paragraph>
      </div>

      <Row gutter={[24, 24]}>
        {certificates.map((cert, index) => (
          <Col xs={24} md={12} key={index}>
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
            >
                <Card
                    hoverable
                    style={{ background: '#112240', border: 'none', borderRadius: 12, height: '100%' }}
                    styles={{ body: { padding: 30 } }}
                >
                    <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 20 }}>
                        <div style={{ 
                            background: 'rgba(100, 255, 218, 0.1)', 
                            padding: 15, 
                            borderRadius: '50%', 
                            marginRight: 20,
                            color: '#64ffda',
                            fontSize: 24
                        }}>
                            <SafetyCertificateOutlined />
                        </div>
                        <div>
                            <Title level={4} style={{ color: '#ccd6f6', marginTop: 0, marginBottom: 5 }}>{cert.title}</Title>
                            <Text style={{ color: '#3b82f6', fontSize: '1rem' }}>{cert.issuer}</Text>
                            <div style={{ color: '#8892b0', fontSize: '0.9rem', marginTop: 5 }}>Năm cấp: {cert.date}</div>
                        </div>
                    </div>

                    <Paragraph style={{ color: '#8892b0', marginBottom: 20, minHeight: 44 }}>
                        {cert.description}
                    </Paragraph>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
                        {cert.skills.map(skill => (
                            <Tag key={skill} color="#233554" style={{ color: '#64ffda', border: 'none' }}>
                                {skill}
                            </Tag>
                        ))}
                    </div>

                    <Button 
                        type="link" 
                        icon={<LinkOutlined />} 
                        style={{ padding: 0, color: '#64ffda' }}
                        href={cert.link}
                        target="_blank"
                    >
                        Xem chứng chỉ
                    </Button>
                </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
};

export default Certificates;
