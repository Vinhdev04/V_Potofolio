import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Button, Tag, Divider } from 'antd';
import { ArrowLeftOutlined, CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blogData';
import '@/assets/css/Blog.scss';

const { Title } = Typography;

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div style={{ textAlign: 'center', padding: '150px 20px', color: '#ccd6f6' }}>
        <Title level={2} style={{ color: '#ccd6f6' }}>Bài viết không tồn tại</Title>
        <Button type="primary" onClick={() => navigate('/blog')}>Quay lại Blog</Button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="blog-detail-container"
      style={{ padding: '120px 20px 50px', maxWidth: '800px', margin: '0 auto', color: '#8892b0' }}
    >
      <Button 
        type="link" 
        icon={<ArrowLeftOutlined />} 
        onClick={() => navigate('/blog')}
        style={{ marginBottom: '20px', paddingLeft: 0, color: '#64ffda', fontSize: '16px' }}
      >
        Quay lại Blog
      </Button>
      
      <div className="blog-header" style={{ textAlign: 'left', marginBottom: '30px' }}>
        <div className="blog-meta" style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Tag color="#64ffda" style={{ color: '#0a192f', fontWeight: 'bold' }}>{post.category}</Tag>
          <span><CalendarOutlined /> {post.date}</span>
          <span><ClockCircleOutlined /> {post.readTime}</span>
        </div>

        <Title level={1} style={{ color: '#ccd6f6', marginBottom: '20px', fontSize: '2.5rem' }}>{post.title}</Title>
      </div>
      
      <img 
        src={post.image} 
        alt={post.title} 
        style={{ width: '100%', borderRadius: '12px', marginBottom: '40px', border: '1px solid rgba(100, 255, 218, 0.1)' }} 
      />

      <div 
        className="blog-content"
        style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccd6f6' }}
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />
      
      <Divider style={{ borderColor: 'rgba(136, 146, 176, 0.2)', margin: '40px 0' }} />
      
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Title level={4} style={{ color: '#ccd6f6' }}>Chia sẻ bài viết này</Title>
        {/* Social share buttons could go here */}
      </div>
    </motion.div>
  );
};

export default BlogDetail;