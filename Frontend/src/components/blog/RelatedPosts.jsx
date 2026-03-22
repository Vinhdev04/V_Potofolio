import React from 'react';
import { Row, Col, Card, Typography, Tag, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CalendarOutlined, ClockCircleOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { blogPosts } from '@/data/blogData';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const RelatedPosts = ({ currentPostId }) => {
  const navigate = useNavigate();
  
  // Lọc bài viết hiện tại và lấy tối đa 3 bài viết khác
  const related = blogPosts
    .filter(post => post.id !== currentPostId)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <div className="related-posts" style={{ marginTop: '60px' }}>
      <Title level={3} style={{ color: '#ccd6f6', marginBottom: '30px', textAlign: 'center' }}>
        Bài viết liên quan
      </Title>
      
      <Row gutter={[24, 24]}>
        {related.map((post) => (
          <Col xs={24} md={8} key={post.id}>
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card 
                className="article-card" 
                variant="borderless" 
                hoverable 
                onClick={() => {
                  navigate(`/blog/${post.id}`);
                  window.scrollTo(0, 0);
                }}
                style={{ 
                  background: '#112240', 
                  border: '1px solid rgba(100, 255, 218, 0.1)',
                  borderRadius: '12px',
                  overflow: 'hidden'
                }}
                cover={
                  <div style={{ height: '160px', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      alt={post.title} 
                      src={post.image} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                    <Tag 
                      color="#64ffda" 
                      style={{ 
                        position: 'absolute', 
                        top: '10px', 
                        right: '10px', 
                        color: '#0a192f', 
                        fontWeight: 'bold',
                        margin: 0
                      }}
                    >
                      {post.category}
                    </Tag>
                  </div>
                }
              >
                <div style={{ display: 'flex', gap: '10px', fontSize: '12px', color: '#8892b0', marginBottom: '10px' }}>
                  <span><CalendarOutlined /> {post.date}</span>
                  <span><ClockCircleOutlined /> {post.readTime}</span>
                </div>
                
                <Title level={5} style={{ color: '#ccd6f6', marginBottom: '10px', minHeight: '48px' }}>
                  {post.title}
                </Title>
                
                <Paragraph 
                  ellipsis={{ rows: 2 }} 
                  style={{ color: '#8892b0', fontSize: '13px', marginBottom: '15px' }}
                >
                  {post.excerpt}
                </Paragraph>
                
                <Button 
                  type="link" 
                  style={{ padding: 0, color: '#64ffda' }}
                  icon={<ArrowRightOutlined />}
                >
                  Đọc tiếp
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
