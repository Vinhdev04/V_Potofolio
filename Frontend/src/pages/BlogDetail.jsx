import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Button, Tag, Divider, Space } from 'antd';
import { ArrowLeftOutlined, CalendarOutlined, ClockCircleOutlined, TagOutlined } from '@ant-design/icons';
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
import PageShell from '@/components/motion/PageShell';
import Reveal from '@/components/motion/Reveal';
import '@/assets/css/Blog.scss';

const { Title, Paragraph } = Typography;

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === parseInt(id));

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
    if (post.isStructured) return <BlogContentRenderer content={post.content} />;
    if (post.id === 9) return <VarLetConst />;
    if (post.id === 10) return <ZIndexStackingContext />;
    if (post.id === 11) return <FlexboxVsGrid />;
    if (post.id === 12) return <DisplayVsVisibility />;
    if (post.id === 13) return <AsyncVsDefer />;
    if (post.id === 14) return <DoctypeGuide />;
    if (post.id === 15) return <EqualityCoercion />;
    if (post.id === 16) return <EventDelegation />;
    if (post.id === 17) return <PromiseCombinators />;
    if (post.id === 18) return <StateAndProps />;
    if (post.id === 19) return <UseEffectGuide />;

    if (post.id === 4) {
      const parts = post.content.split('<div id="interactive-box-model"></div>');
      return (
        <>
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: parts[0] }} />
          <BoxModelInteractive />
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: parts[1] }} />
        </>
      );
    }

    return <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />;
  };

  return (
    <PageShell className="blog-detail-container" accent="#3b82f6" style={{ padding: '120px 20px 50px', maxWidth: '1240px', margin: '0 auto', color: '#8892b0' }}>
      <div className="blog-detail-shell">
        <Reveal className="blog-detail-main">
          <Button type="link" icon={<ArrowLeftOutlined />} onClick={() => navigate('/blog')} className="blog-back-btn">
            Quay lại Blog
          </Button>

          <div className="blog-detail-hero section-shell">
            <div className="blog-detail-meta">
              <Tag className="article-category-chip">{post.category}</Tag>
              <span><CalendarOutlined /> {post.date}</span>
              <span><ClockCircleOutlined /> {post.readTime}</span>
            </div>

            <Title level={1} className="blog-detail-title">{post.title}</Title>
            <Paragraph className="blog-detail-excerpt">{post.excerpt}</Paragraph>

            <Space size={[8, 10]} wrap className="blog-detail-tags">
              {post.tags?.map((tag) => (
                <Tag key={tag} className="article-tag" icon={<TagOutlined />}>{tag.toUpperCase()}</Tag>
              ))}
            </Space>
          </div>

          <div className="blog-cover-wrap">
            <img src={post.image} alt={post.title} className="blog-cover-image" />
          </div>

          <article className="blog-reading-panel">
            {renderContent()}
          </article>
        </Reveal>

        <Reveal direction="right" className="blog-detail-aside">
          <div className="blog-aside-card">
            <div className="section-badge">Reading note</div>
            <Title level={4}>Tóm tắt nhanh</Title>
            <Paragraph>
              Bài viết này được trình bày theo hướng dễ quét, dễ đọc và ưu tiên ví dụ thực tế để bạn xem nhanh rồi áp dụng ngay.
            </Paragraph>
            <div className="blog-aside-facts">
              <div><span>Chủ đề</span><strong>{post.category}</strong></div>
              <div><span>Thời gian đọc</span><strong>{post.readTime}</strong></div>
              <div><span>Mức độ</span><strong>{post.level || 'Tổng hợp'}</strong></div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="blog-related-shell">
        <RelatedPosts currentPostId={post.id} />
        <Divider style={{ borderColor: 'rgba(136, 146, 176, 0.16)', margin: '60px 0 32px' }} />
      </div>
    </PageShell>
  );
};

export default BlogDetail;
