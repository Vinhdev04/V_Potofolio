import React from 'react';
import { Modal, Typography, Tag, Button, Row, Col, Divider, Space } from 'antd';
import { GithubOutlined, EyeOutlined, CloseOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const ProjectModal = ({ project, visible, onClose }) => {
  if (!project) return null;

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      width={1000}
      centered
      closeIcon={<CloseOutlined style={{ color: '#ccd6f6', fontSize: 20 }} />}
      styles={{ 
        content: { 
            background: '#112240', 
            padding: 0, 
            borderRadius: 16, 
            overflow: 'hidden',
            border: '1px solid #233554'
        },
        body: {
            padding: 0
        }
      }}
    >
      {/* Header Image */}
      <div style={{ height: 300, overflow: 'hidden', position: 'relative' }}>
        <img 
          src={project.image} 
          alt={project.title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <div style={{ 
          position: 'absolute', 
          top: 0, left: 0, right: 0, bottom: 0, 
          background: 'linear-gradient(to bottom, transparent 0%, #112240 100%)' 
        }}></div>
        <div style={{ position: 'absolute', bottom: 30, left: 40 }}>
            <Tag color="#3b82f6" style={{ marginBottom: 10, border: 'none' }}>Web Application</Tag>
            <Title level={1} style={{ color: '#ccd6f6', margin: 0, fontSize: '3rem' }}>{project.title}</Title>
            <Paragraph style={{ color: '#8892b0', fontSize: '1.2rem', margin: 0, maxWidth: 600 }}>
                {project.subtitle || 'A revolutionary platform for modern web experiences.'}
            </Paragraph>
        </div>
      </div>

      <div style={{ padding: 40 }}>
        <Row gutter={[48, 48]}>
            {/* Left Content */}
            <Col xs={24} lg={16}>
                <div style={{ marginBottom: 40 }}>
                    <Title level={3} style={{ color: '#ccd6f6', display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ color: '#3b82f6' }}>⚡</span> The Challenge
                    </Title>
                    <Paragraph style={{ color: '#8892b0', lineHeight: 1.8, fontSize: '1.05rem' }}>
                        {project.challenge || "The client needed a high-performance solution to handle real-time data visualization. The existing system was suffering from significant latency issues, taking up to 30 seconds to refresh critical market data."}
                    </Paragraph>
                </div>

                <div style={{ marginBottom: 40 }}>
                    <Title level={3} style={{ color: '#ccd6f6', display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ color: '#3b82f6' }}>💡</span> The Solution
                    </Title>
                    <Paragraph style={{ color: '#8892b0', lineHeight: 1.8, fontSize: '1.05rem' }}>
                        {project.solution || "I engineered a single-page application (SPA) using React for a seamless user experience. To handle real-time data efficiently, I implemented a WebSocket connection using Socket.io, reducing data refresh latency to under 100ms."}
                    </Paragraph>
                </div>

                {project.features && (
                    <div style={{ marginBottom: 40 }}>
                        <Title level={3} style={{ color: '#ccd6f6', display: 'flex', alignItems: 'center', gap: 10 }}>
                            <span style={{ color: '#3b82f6' }}>✨</span> Key Features
                        </Title>
                        <Row gutter={[16, 16]}>
                            {project.features.map((feature, idx) => (
                                <Col span={12} key={idx}>
                                    <div style={{ background: '#0a192f', padding: 20, borderRadius: 8, height: '100%' }}>
                                        <Text strong style={{ color: '#e6f1ff', display: 'block', marginBottom: 8 }}>{feature.title}</Text>
                                        <Text style={{ color: '#8892b0', fontSize: '0.9rem' }}>{feature.desc}</Text>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                )}
            </Col>

            {/* Right Sidebar */}
            <Col xs={24} lg={8}>
                <div style={{ background: '#172a45', padding: 25, borderRadius: 12 }}>
                    <Title level={4} style={{ color: '#ccd6f6', marginTop: 0 }}>Project Details</Title>
                    
                    <div style={{ marginBottom: 20 }}>
                        <Text strong style={{ color: '#8892b0', display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: 1 }}>Role</Text>
                        <Text style={{ color: '#ccd6f6' }}>{project.role || 'Full Stack Developer'}</Text>
                    </div>

                    <div style={{ marginBottom: 20 }}>
                        <Text strong style={{ color: '#8892b0', display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: 1 }}>Timeline</Text>
                        <Text style={{ color: '#ccd6f6' }}>{project.timeline || '3 Weeks (Sprint)'}</Text>
                    </div>

                    <div style={{ marginBottom: 25 }}>
                        <Text strong style={{ color: '#8892b0', display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Tech Stack</Text>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                            {project.tags && project.tags.map(tag => (
                                <Tag key={tag} color="#233554" style={{ color: '#64ffda', border: 'none', margin: 0 }}>{tag}</Tag>
                            ))}
                        </div>
                    </div>

                    <Space direction="vertical" style={{ width: '100%' }}>
                        <Button type="primary" block icon={<EyeOutlined />} style={{ height: 40, background: '#3b82f6' }} href={project.demoLink} target="_blank">
                            View Live Demo
                        </Button>
                        <Button block icon={<GithubOutlined />} ghost style={{ height: 40, color: '#ccd6f6', borderColor: '#ccd6f6' }} href={project.repoLink} target="_blank">
                            View Source Code
                        </Button>
                    </Space>
                </div>
            </Col>
        </Row>
      </div>
    </Modal>
  );
};

export default ProjectModal;
