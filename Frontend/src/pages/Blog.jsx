import React, { useState, useEffect } from 'react';
import { Typography, Row, Col, Card, Tabs, Button, Tag } from 'antd';
import { motion } from 'framer-motion';
import { CalendarOutlined, ClockCircleOutlined, PlayCircleFilled, EyeOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import '@/assets/css/Blog.scss';
import { blogPosts, tiktokVideos } from '@/data/blogData';

const { Title, Paragraph } = Typography;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const ArticlesList = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Row gutter={[24, 24]}>
        {blogPosts.map((post) => (
          <Col xs={24} md={12} lg={8} key={post.id}>
            <motion.div variants={itemVariants} style={{ height: '100%' }}>
              <Card 
                className="article-card" 
                variant="borderless" 
                hoverable 
                onClick={() => navigate(`/blog/${post.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <div className="article-image">
                  <img src={post.image} alt={post.title} />
                  <Tag color="#64ffda" className="article-category" style={{ position: 'absolute', top: '10px', right: '10px', margin: 0, color: '#0a192f', fontWeight: 'bold', border: 'none' }}>
                    {post.category}
                  </Tag>
                </div>
                <div className="article-content">
                  <div className="article-meta">
                    <span><CalendarOutlined /> {post.date}</span>
                    <span><ClockCircleOutlined /> {post.readTime}</span>
                  </div>
                  <Title level={3} className="article-title">{post.title}</Title>
                  <Paragraph className="article-excerpt" ellipsis={{ rows: 3 }}>
                    {post.excerpt}
                  </Paragraph>
                  <Button type="link" className="read-more-btn" icon={<ArrowRightOutlined />}>
                    Đọc tiếp
                  </Button>
                </div>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
};

const TikTokGrid = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
         <blockquote 
             className="tiktok-embed" 
             cite="https://www.tiktok.com/@devcraftt" 
             data-unique-id="devcraftt" 
             data-embed-type="creator" 
             style={{ maxWidth: '780px', minWidth: '288px' }} 
         > 
             <section> 
                 <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@devcraftt?refer=creator_embed">@devcraftt</a> 
             </section> 
         </blockquote>
      </div>

      <Row gutter={[20, 20]}>
        {tiktokVideos.map((video) => (
          <Col xs={12} sm={8} md={6} lg={4} key={video.id}>
            <motion.div variants={itemVariants}>
              <div 
                className="tiktok-card" 
                onClick={() => window.open(video.link, '_blank')}
              >
                <img src={video.thumbnail} alt={video.title} />
                <div className="tiktok-overlay">
                  <div className="tiktok-stats">
                    <EyeOutlined /> {video.views}
                  </div>
                  <PlayCircleFilled className="play-icon" />
                  <div className="tiktok-info">
                    <Title level={5} className="tiktok-title">{video.title}</Title>
                  </div>
                </div>
              </div>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
};

const Blog = () => {
  const [activeTab, setActiveTab] = useState('articles');

  const items = [
    {
      key: 'articles',
      label: 'Bài Viết (Articles)',
      children: <ArticlesList />,
    },
    {
      key: 'tiktok',
      label: 'TikTok Channel',
      children: <TikTokGrid />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="blog-container"
    >
      <div className="blog-header">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Title level={1} className="blog-title">Blog & Chia Sẻ</Title>
          <Paragraph className="blog-description">
            Nơi tôi chia sẻ kiến thức về lập trình, kinh nghiệm làm việc và những video thú vị từ kênh TikTok của mình.
          </Paragraph>
        </motion.div>
      </div>

      <div className="blog-tabs">
        <Tabs 
          activeKey={activeTab} 
          onChange={setActiveTab} 
          centered 
          items={items}
          size="large"
        />
      </div>
    </motion.div>
  );
};

export default Blog;