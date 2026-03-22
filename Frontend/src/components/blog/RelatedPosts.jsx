import React from 'react';
import { Row, Col, Card, Typography, Tag, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CalendarOutlined, ClockCircleOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { blogPosts, tiktokVideos } from '@/data/blogData';
import { motion } from 'framer-motion';
import { PlayCircleOutlined, EyeOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const RelatedPosts = ({ currentPostId }) => {
  const navigate = useNavigate();
  
  // Lấy 3 video TikTok khác
  const relatedTiktok = tiktokVideos
    .filter(v => v.id !== (currentPostId === 4 ? 5 : -1)) // Lọc video đang xem nếu có
    .slice(0, 3);

  if (relatedTiktok.length === 0) return null;

  return (
    <div className="related-posts" style={{ marginTop: '60px' }}>
      <Title level={3} style={{ color: '#ccd6f6', marginBottom: '30px', textAlign: 'center' }}>
        Video minh họa liên quan
      </Title>
      
      <Row gutter={[24, 24]}>
        {relatedTiktok.map((item) => (
          <Col xs={24} md={8} key={`tiktok-${item.id}`}>
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              style={{ height: '100%' }}
            >
              <Card 
                className="article-card tiktok-card-related" 
                variant="borderless" 
                hoverable 
                onClick={() => window.open(item.link, '_blank')}
                style={{ 
                  background: '#112240', 
                  border: '1px solid rgba(100, 255, 218, 0.2)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                cover={
                  <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      alt={item.title} 
                      src={item.thumbnail} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} 
                    />
                    <div style={{ 
                      position: 'absolute', 
                      top: 0, left: 0, right: 0, bottom: 0, 
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'rgba(0,0,0,0.3)'
                    }}>
                      <PlayCircleOutlined style={{ fontSize: '54px', color: '#64ffda', opacity: 0.9 }} />
                    </div>
                    <Tag 
                      color="#ff0050" 
                      style={{ 
                        position: 'absolute', 
                        top: '12px', 
                        right: '12px', 
                        color: '#fff', 
                        fontWeight: 'bold',
                        margin: 0,
                        border: 'none',
                        padding: '2px 8px'
                      }}
                    >
                      TikTok Video
                    </Tag>
                  </div>
                }
              >
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: '10px', fontSize: '13px', color: '#8892b0', marginBottom: '12px' }}>
                    <span><EyeOutlined /> {item.views} views</span>
                  </div>
                  
                  <Title level={5} style={{ color: '#ccd6f6', marginBottom: '15px', minHeight: '48px', fontSize: '1.05rem', lineHeight: '1.4' }}>
                    {item.title}
                  </Title>
                  
                  <div style={{ marginTop: 'auto' }}>
                    <Button 
                      type="link" 
                      style={{ padding: 0, color: '#64ffda', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}
                    >
                      Xem trên TikTok <ArrowRightOutlined />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RelatedPosts;
