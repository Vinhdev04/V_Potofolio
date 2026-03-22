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
  
  // Lấy các bài viết blog khác
  const otherPosts = blogPosts
    .filter(post => post.id !== currentPostId)
    .slice(0, 2); // Lấy 2 bài blog

  // Tìm video TikTok liên quan (ví dụ video id 5 cho bài viết Box Model id 4)
  const relatedTiktok = currentPostId === 4 
    ? tiktokVideos.find(v => v.id === 5)
    : null;

  const allRelated = relatedTiktok 
    ? [...otherPosts, { ...relatedTiktok, isTiktok: true }]
    : blogPosts.filter(post => post.id !== currentPostId).slice(0, 3);

  if (allRelated.length === 0) return null;

  return (
    <div className="related-posts" style={{ marginTop: '60px' }}>
      <Title level={3} style={{ color: '#ccd6f6', marginBottom: '30px', textAlign: 'center' }}>
        Bài viết & Video liên quan
      </Title>
      
      <Row gutter={[24, 24]}>
        {allRelated.map((item, index) => (
          <Col xs={24} md={8} key={item.isTiktok ? `tiktok-${item.id}` : `post-${item.id}`}>
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card 
                className="article-card" 
                variant="borderless" 
                hoverable 
                onClick={() => {
                  if (item.isTiktok) {
                    window.open(item.link, '_blank');
                  } else {
                    navigate(`/blog/${item.id}`);
                    window.scrollTo(0, 0);
                  }
                }}
                style={{ 
                  background: '#112240', 
                  border: item.isTiktok ? '1px solid #64ffda' : '1px solid rgba(100, 255, 218, 0.1)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  height: '100%'
                }}
                cover={
                  <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      alt={item.title} 
                      src={item.isTiktok ? item.thumbnail : item.image} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: item.isTiktok ? 0.7 : 1 }} 
                    />
                    {item.isTiktok && (
                      <div style={{ 
                        position: 'absolute', 
                        top: 0, left: 0, right: 0, bottom: 0, 
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: 'rgba(0,0,0,0.2)'
                      }}>
                        <PlayCircleOutlined style={{ fontSize: '48px', color: '#64ffda' }} />
                      </div>
                    )}
                    <Tag 
                      color={item.isTiktok ? "#ff0050" : "#64ffda"} 
                      style={{ 
                        position: 'absolute', 
                        top: '10px', 
                        right: '10px', 
                        color: item.isTiktok ? '#fff' : '#0a192f', 
                        fontWeight: 'bold',
                        margin: 0,
                        border: 'none'
                      }}
                    >
                      {item.isTiktok ? 'TikTok Video' : item.category}
                    </Tag>
                  </div>
                }
              >
                <div style={{ display: 'flex', gap: '10px', fontSize: '12px', color: '#8892b0', marginBottom: '10px' }}>
                  {item.isTiktok ? (
                    <span><EyeOutlined /> {item.views} views</span>
                  ) : (
                    <>
                      <span><CalendarOutlined /> {item.date}</span>
                      <span><ClockCircleOutlined /> {item.readTime}</span>
                    </>
                  )}
                </div>
                
                <Title level={5} style={{ color: '#ccd6f6', marginBottom: '10px', minHeight: '48px', fontSize: '1rem' }}>
                  {item.title}
                </Title>
                
                {!item.isTiktok && (
                  <Paragraph 
                    ellipsis={{ rows: 2 }} 
                    style={{ color: '#8892b0', fontSize: '13px', marginBottom: '15px' }}
                  >
                    {item.excerpt}
                  </Paragraph>
                )}
                
                <Button 
                  type="link" 
                  style={{ padding: 0, color: '#64ffda' }}
                  icon={<ArrowRightOutlined />}
                >
                  {item.isTiktok ? 'Xem trên TikTok' : 'Đọc tiếp'}
                </Button>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RelatedPosts;
