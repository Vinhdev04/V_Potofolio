import React from 'react';
import { Typography, Row, Col, Card, Progress, Segmented } from 'antd';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaDocker, FaPython, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb, SiAmazonaws, SiGraphql } from 'react-icons/si';

const { Title, Paragraph } = Typography;

const Skills = () => {
  const [filter, setFilter] = React.useState('All');

  const skills = [
    { name: 'React', icon: <FaReact size={40} color="#61DAFB" />, level: 95, category: 'Frontend' },
    { name: 'TypeScript', icon: <SiTypescript size={40} color="#3178C6" />, level: 90, category: 'Frontend' },
    { name: 'Node.js', icon: <FaNodeJs size={40} color="#339933" />, level: 85, category: 'Backend' },
    { name: 'Tailwind', icon: <SiTailwindcss size={40} color="#06B6D4" />, level: 98, category: 'Frontend' },
    { name: 'PostgreSQL', icon: <SiPostgresql size={40} color="#336791" />, level: 80, category: 'Backend' },
    { name: 'Docker', icon: <FaDocker size={40} color="#2496ED" />, level: 70, category: 'Tools' },
    { name: 'Figma', icon: <FaFigma size={40} color="#F24E1E" />, level: 92, category: 'Tools' },
    { name: 'Python', icon: <FaPython size={40} color="#3776AB" />, level: 75, category: 'Backend' },
    { name: 'MongoDB', icon: <SiMongodb size={40} color="#47A248" />, level: 85, category: 'Backend' },
    { name: 'AWS', icon: <SiAmazonaws size={40} color="#FF9900" />, level: 65, category: 'Tools' },
    { name: 'GraphQL', icon: <SiGraphql size={40} color="#E10098" />, level: 80, category: 'Backend' }
  ];

  const filteredSkills = filter === 'All' ? skills : skills.filter(s => s.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ padding: '50px 0', maxWidth: 1200, margin: '0 auto' }}
    >
      <div style={{ textAlign: 'center', marginBottom: 50 }}>
        <Title level={1} style={{ color: '#ccd6f6' }}>Kỹ Năng Của Tôi</Title>
        <Paragraph style={{ color: '#8892b0', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto' }}>
          Danh sách các công cụ, ngôn ngữ và công nghệ tôi sử dụng để tạo ra các sản phẩm kỹ thuật số mạnh mẽ.
        </Paragraph>
        
        <div style={{ marginTop: 30 }}>
            <Segmented
                options={['All', 'Frontend', 'Backend', 'Tools']}
                value={filter}
                onChange={setFilter}
                style={{ background: '#112240', color: '#8892b0', padding: 5 }}
            />
        </div>
      </div>

      <Row gutter={[24, 24]}>
        {filteredSkills.map((skill, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <motion.div
                layout
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <Card
                    style={{ background: '#112240', border: 'none', borderRadius: 12 }}
                    styles={{ body: { padding: 25 } }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 15 }}>
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: 10, borderRadius: 8 }}>
                            {skill.icon}
                        </div>
                        <span style={{ color: '#8892b0', fontWeight: 'bold' }}>{skill.level}%</span>
                    </div>
                    
                    <Title level={4} style={{ color: '#ccd6f6', marginTop: 10, marginBottom: 15 }}>{skill.name}</Title>
                    
                    <Progress 
                        percent={skill.level} 
                        showInfo={false} 
                        strokeColor={{ '0%': '#3b82f6', '100%': '#64ffda' }} 
                        trailColor="#233554"
                    />
                </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
};

export default Skills;
