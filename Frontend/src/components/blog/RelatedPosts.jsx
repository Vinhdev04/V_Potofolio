import React, { useState } from 'react';
import { Row, Col, Card, Typography, Tag, Button, Pagination } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ArrowRightOutlined, PlayCircleOutlined, EyeOutlined } from '@ant-design/icons';
import { blogPosts, tiktokVideos } from '@/data/blogData';
import { motion, AnimatePresence } from 'framer-motion';

const { Title } = Typography;

const RelatedPosts = ({ currentPostId }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  // Tìm video TikTok của bài viết hiện tại
  const currentPost = blogPosts.find(p => p.id === currentPostId);
  const currentVideoId = currentPost?.tiktokId;

  // Sắp xếp danh sách video: Video của bài viết hiện tại lên đầu
  const sortedVideos = [...tiktokVideos].sort((a, b) => {
    if (a.id === currentVideoId) return -1;
    if (b.id === currentVideoId) return 1;
    return 0;
  });

  // Logic phân trang
  const startIndex = (currentPage - 1) * pageSize;
  const currentVideos = sortedVideos.slice(startIndex, startIndex + pageSize);

  if (sortedVideos.length === 0) return null;

  return (
    <div className="related-posts" style={{ marginTop: '60px' }}>
      <Title level={3} style={{ color: '#ccd6f6', marginBottom: '30px', textAlign: 'center' }}>
        Video minh họa liên quan
      </Title>
      
      <div style={{ minHeight: '450px' }}> {/* Cố định chiều cao tối thiểu để tránh nhảy trang khi chuyển pagination */}
        <Row gutter={[24, 24]}>
          <AnimatePresence mode="wait">
            {currentVideos.map((item) => (
              <Col xs={24} md={8} key={`tiktok-${item.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
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
                      border: item.id === currentVideoId ? '2px solid #64ffda' : '1px solid rgba(100, 255, 218, 0.2)',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative'
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
                          color={item.id === currentVideoId ? "#64ffda" : "#ff0050"} 
                          style={{ 
                            position: 'absolute', 
                            top: '12px', 
                            right: '12px', 
                            color: item.id === currentVideoId ? '#0a192f' : '#fff', 
                            fontWeight: 'bold',
                            margin: 0,
                            border: 'none',
                            padding: '2px 8px'
                          }}
                        >
                          {item.id === currentVideoId ? 'Đang xem' : 'TikTok Video'}
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
          </AnimatePresence>
        </Row>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <Pagination
          current={currentPage}
          total={sortedVideos.length}
          pageSize={pageSize}
          onChange={(page) => {
            setCurrentPage(page);
            // Cuộn mượt lên đầu phần RelatedPosts khi chuyển trang
            document.querySelector('.related-posts').scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          showSizeChanger={false}
          style={{ 
            background: 'transparent',
          }}
          className="custom-pagination"
        />
      </div>
    </div>
  );
};

export default RelatedPosts;
