import React from 'react';
import { Typography, Row, Col, Card, Table, Tag, Space, Divider } from 'antd';
import { 
  InfoCircleOutlined, 
  WarningOutlined, 
  CheckCircleOutlined, 
  DatabaseOutlined,
  SendOutlined,
  ClockCircleOutlined,
  HistoryOutlined,
  SafetyCertificateOutlined,
  BulbOutlined,
  ThunderboltOutlined,
  FireOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Text, Paragraph } = Typography;

const BlogContentRenderer = ({ content }) => {
  if (!content || typeof content === 'string') {
    return <div className="blog-content" dangerouslySetInnerHTML={{ __html: content }} />;
  }

  // Scroll Animation variants for individual items
  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', width: '100%', position: 'relative' }}>
      {content.map((section, idx) => {
        switch (section.type) {
          case 'header':
            return (
              <motion.div 
                key={idx} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, amount: 0.3 }} 
                variants={itemVariants} 
                style={{ textAlign: 'center', padding: '40px 20px', position: 'relative', zIndex: 10 }}
              >
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                  <Tag color="#112240" style={{ border: '1px solid #64ffda', color: '#64ffda', padding: '6px 16px', borderRadius: '20px', fontSize: '14px', marginBottom: '30px', fontWeight: 'bold' }}>
                    <DatabaseOutlined style={{ marginRight: '8px' }} />
                    {section.badge}
                  </Tag>
                  <Title level={1} style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '30px', color: '#ccd6f6', lineHeight: 1.2 }}>
                    {section.title_parts.map((part, pIdx) => (
                      <span key={pIdx} style={part.gradient ? { color: '#64ffda', textShadow: '0 0 20px rgba(100, 255, 218, 0.3)' } : {}}>
                        {part.text}
                      </span>
                    ))}
                  </Title>
                  <Paragraph style={{ fontSize: '1.2rem', color: '#8892b0', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8 }}>
                    {section.description}
                  </Paragraph>
                </div>
              </motion.div>
            );

          case 'table':
            return (
              <motion.section 
                key={idx} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, amount: 0.2 }} 
                variants={itemVariants} 
                style={{ background: '#112240', border: '1px solid rgba(100, 255, 218, 0.1)', borderRadius: '24px', padding: '40px', position: 'relative' }}
              >
                <Title level={2} style={{ color: '#ccd6f6', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '50px', height: '50px', background: 'rgba(100, 255, 218, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <HistoryOutlined style={{ color: '#64ffda', fontSize: '24px' }} />
                  </div>
                  {section.title}
                </Title>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
                    <thead>
                      <tr style={{ background: 'rgba(10, 25, 47, 0.5)', borderBottom: '2px solid rgba(100, 255, 218, 0.1)' }}>
                        <th style={{ padding: '20px', textAlign: 'left', color: '#8892b0', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Đặc điểm</th>
                        {section.headers.map((h, hIdx) => (
                          <th key={hIdx} style={{ padding: '20px', textAlign: 'left', color: '#64ffda', fontWeight: 'bold' }}>{h.text}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.rows.map((row, rIdx) => (
                        <tr key={rIdx} style={{ borderBottom: '1px solid rgba(136, 146, 176, 0.1)', transition: 'background 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(10, 25, 47, 0.3)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                          <td style={{ padding: '20px', color: '#ccd6f6', fontWeight: 'bold' }}>{row.label}</td>
                          {row.cells.map((cell, cIdx) => (
                            <td key={cIdx} style={{ padding: '20px', color: '#8892b0' }}>
                              {cell.tag ? (
                                <Tag color="#0a192f" style={{ border: '1px solid #64ffda', color: '#64ffda', padding: '4px 12px', borderRadius: '6px' }}>
                                  {cell.text}
                                </Tag>
                              ) : cell.isServer ? (
                                <span style={{ color: '#ffbd2e', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                  <SendOutlined /> {cell.text}
                                </span>
                              ) : cell.security ? (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                  <span style={{ color: '#ff5f56', fontWeight: 'bold' }}>{cell.text}</span>
                                  {cell.subText && <span style={{ color: '#27c93f', fontSize: '12px' }}>{cell.subText}</span>}
                                </div>
                              ) : (
                                <span>{cell.text}</span>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.section>
            );

          case 'grid':
            return (
              <motion.div 
                key={idx} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, amount: 0.1 }} 
                variants={itemVariants} 
                style={{ width: '100%' }}
              >
                <Title level={2} style={{ textAlign: 'center', color: '#ccd6f6', marginBottom: '50px', fontSize: '2.5rem' }}>{section.title}</Title>
                <Row gutter={[30, 30]}>
                  {section.items.map((item, iIdx) => {
                    const iconColorMap = {
                      'hard-drive': '#64ffda',
                      'clock': '#ffbd2e',
                      'cookie': '#ff5f56'
                    };
                    const titleColorMap = {
                      'app': '#64ffda',
                      'warn': '#ffbd2e',
                      'security': '#ff5f56',
                      'feature': '#3b82f6'
                    };
                    return (
                      <Col xs={24} lg={section.items.length === 2 ? 12 : 8} key={iIdx}>
                        <Card 
                          style={{ height: '100%', background: '#112240', border: '1px solid rgba(136, 146, 176, 0.1)', borderRadius: '24px', overflow: 'hidden' }}
                          bodyStyle={{ padding: '30px' }}
                          hoverable
                        >
                          <div style={{ height: '6px', background: 'linear-gradient(90deg, #64ffda, #0a192f)', position: 'absolute', top: 0, left: 0, right: 0 }} />
                          <div style={{ width: '60px', height: '60px', background: 'rgba(10, 25, 47, 0.8)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid rgba(100, 255, 218, 0.2)' }}>
                            {item.icon === 'hard-drive' && <DatabaseOutlined style={{ fontSize: '28px', color: iconColorMap[item.icon] }} />}
                            {item.icon === 'clock' && <ClockCircleOutlined style={{ fontSize: '28px', color: iconColorMap[item.icon] }} />}
                            {item.icon === 'cookie' && <CheckCircleOutlined style={{ fontSize: '28px', color: iconColorMap[item.icon] }} />}
                            {!['hard-drive', 'clock', 'cookie'].includes(item.icon) && <BulbOutlined style={{ fontSize: '28px', color: '#64ffda' }} />}
                          </div>
                          <Title level={3} style={{ color: '#ccd6f6', marginBottom: '16px' }}>{item.title}</Title>
                          <Paragraph style={{ color: '#8892b0', fontSize: '1.1rem', marginBottom: '30px', minHeight: '60px' }}>{item.description}</Paragraph>
                          
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {item.blocks.map((block, bIdx) => (
                              <div key={bIdx} style={{ background: 'rgba(10, 25, 47, 0.4)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(136, 146, 176, 0.1)' }}>
                                <div style={{ color: titleColorMap[block.type] || '#64ffda', fontWeight: 'bold', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>
                                  {block.type === 'app' && <InfoCircleOutlined />}
                                  {block.type === 'warn' && <WarningOutlined />}
                                  {block.type === 'security' && <SafetyCertificateOutlined />}
                                  {block.type === 'feature' && <ThunderboltOutlined />}
                                  {block.title}
                                </div>
                                <ul style={{ paddingLeft: '20px', margin: 0, color: '#8892b0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                  {block.list && block.list.map((li, lIdx) => (
                                    <li key={lIdx} style={{ fontSize: '0.95rem' }}>{li}</li>
                                  ))}
                                  {block.text && <Paragraph style={{ margin: 0, color: '#8892b0', fontSize: '0.95rem' }}>{block.text}</Paragraph>}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
              </motion.div>
            );

          case 'closing':
            return (
              <motion.div 
                key={idx} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, amount: 0.5 }} 
                variants={itemVariants} 
                style={{ textAlign: 'center', padding: '60px 40px', background: 'rgba(100, 255, 218, 0.05)', border: '1px dashed rgba(100, 255, 218, 0.3)', borderRadius: '32px', marginTop: '40px' }}
              >
                <Title level={3} style={{ color: '#64ffda', margin: 0, fontStyle: 'italic', fontWeight: 'normal' }}>
                  <FireOutlined style={{ marginRight: '10px' }} />
                  "{section.text}"
                </Title>
              </motion.div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default BlogContentRenderer;
