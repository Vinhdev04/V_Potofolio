import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Button, Tag, Divider } from 'antd';
import { ArrowLeftOutlined, CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blogData';
import BoxModelInteractive from '@/components/blog/BoxModelInteractive';
import VarLetConst from '@/components/blog/VarLetConst';
import ZIndexStackingContext from '@/components/blog/ZIndexStackingContext';
import FlexboxVsGrid from '@/components/blog/FlexboxVsGrid';
import DisplayVsVisibility from '@/components/blog/DisplayVsVisibility';
import AsyncVsDefer from '@/components/blog/AsyncVsDefer';
import DoctypeGuide from '@/components/blog/DoctypeGuide';
import EqualityCoercion from '@/components/blog/EqualityCoercion';
import EventDelegation from '@/components/blog/EventDelegation';
import PromiseCombinators from '@/components/blog/PromiseCombinators';
import StateAndProps from '@/components/blog/StateAndProps';
import UseEffectGuide from '@/components/blog/UseEffectGuide';
import RelatedPosts from '@/components/blog/RelatedPosts';
import BlogContentRenderer from '@/components/blog/BlogContentRenderer';
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

  const renderContent = () => {
    if (post.isStructured) {
      return <BlogContentRenderer content={post.content} />;
    }

    if (post.id === 9) {
      return <VarLetConst />;
    }

    if (post.id === 10) {
      return <ZIndexStackingContext />;
    }

    if (post.id === 11) {
      return <FlexboxVsGrid />;
    }

    if (post.id === 12) {
      return <DisplayVsVisibility />;
    }

    if (post.id === 13) {
      return <AsyncVsDefer />;
    }

    if (post.id === 14) {
      return <DoctypeGuide />;
    }

    if (post.id === 15) {
      return <EqualityCoercion />;
    }

    if (post.id === 16) {
      return <EventDelegation />;
    }

    if (post.id === 17) {
      return <PromiseCombinators />;
    }

    if (post.id === 18) {
      return <StateAndProps />;
    }

    if (post.id === 19) {
      return <UseEffectGuide />;
    }

    if (post.id === 4) {
      // Split content to insert the interactive component
      const parts = post.content.split('<div id="interactive-box-model"></div>');
      return (
        <>
          <div 
            className="blog-content"
            style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccd6f6' }}
            dangerouslySetInnerHTML={{ __html: parts[0] }} 
          />
          <BoxModelInteractive />
          <div 
            className="blog-content"
            style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccd6f6' }}
            dangerouslySetInnerHTML={{ __html: parts[1] }} 
          />
        </>
      );
    }
    return (
      <div 
        className="blog-content"
        style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccd6f6' }}
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="blog-detail-container"
      style={{ padding: '120px 20px 50px', maxWidth: '1200px', margin: '0 auto', color: '#8892b0' }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
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
      </div>
      
      <img 
        src={post.image} 
        alt={post.title} 
        style={{ width: '100%', borderRadius: '24px', marginBottom: '60px', border: '1px solid rgba(100, 255, 218, 0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }} 
      />

      <div className="w-full">
        {renderContent()}
      </div>
      
      <div style={{ maxWidth: '1200px', margin: '80px auto 0' }}>
        <RelatedPosts currentPostId={post.id} />
        
        <Divider style={{ borderColor: 'rgba(136, 146, 176, 0.2)', margin: '60px 0' }} />
        
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Title level={4} style={{ color: '#ccd6f6' }}>Chia sẻ bài viết này</Title>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogDetail;