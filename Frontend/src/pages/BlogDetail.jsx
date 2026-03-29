import React, { Suspense, lazy, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Button, Tag, Divider, Space } from 'antd';
import { ArrowLeftOutlined, CalendarOutlined, ClockCircleOutlined, TagOutlined } from '@ant-design/icons';
import { blogPosts } from '@/data/blogData';
import PageShell from '@/components/motion/PageShell';
import Reveal from '@/components/motion/Reveal';
import '@/assets/css/Blog.scss';

const { Title, Paragraph } = Typography;
const BlogContentRenderer = lazy(() => import('@/components/blog/BlogContentRenderer'));
const RelatedPosts = lazy(() => import('@/components/blog/RelatedPosts'));
const BoxModelInteractive = lazy(() => import('@/components/blog/BoxModelInteractive'));

const blogWidgetsById = {
  9: lazy(() => import('@/components/blog/VarLetConst')),
  10: lazy(() => import('@/components/blog/ZIndexStackingContext')),
  11: lazy(() => import('@/components/blog/FlexboxVsGrid')),
  12: lazy(() => import('@/components/blog/DisplayVsVisibility')),
  13: lazy(() => import('@/components/blog/AsyncVsDefer')),
  14: lazy(() => import('@/components/blog/DoctypeGuide')),
  15: lazy(() => import('@/components/blog/EqualityCoercion')),
  16: lazy(() => import('@/components/blog/EventDelegation')),
  17: lazy(() => import('@/components/blog/PromiseCombinators')),
  18: lazy(() => import('@/components/blog/StateAndProps')),
  19: lazy(() => import('@/components/blog/UseEffectGuide')),
};

const InlineLoader = () => <div className="blog-inline-loader">Đang tải nội dung...</div>;

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((item) => item.id === parseInt(id, 10));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="blog-detail-empty">
        <Title level={2}>Bài viết không tồn tại</Title>
        <Button type="primary" onClick={() => navigate('/blog')}>
          Quay lại Blog
        </Button>
      </div>
    );
  }

  const renderContent = () => {
    if (post.isStructured) {
      return (
        <Suspense fallback={<InlineLoader />}>
          <BlogContentRenderer content={post.content} />
        </Suspense>
      );
    }

    const BlogWidget = blogWidgetsById[post.id];
    if (BlogWidget) {
      return (
        <Suspense fallback={<InlineLoader />}>
          <BlogWidget />
        </Suspense>
      );
    }

    if (post.id === 4) {
      const parts = post.content.split('<div id="interactive-box-model"></div>');
      return (
        <>
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: parts[0] }} />
          <Suspense fallback={<InlineLoader />}>
            <BoxModelInteractive />
          </Suspense>
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: parts[1] }} />
        </>
      );
    }

    return <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />;
  };

  return (
    <PageShell
      className="blog-detail-container"
      accent="#3b82f6"
      style={{ padding: '120px 0 50px', maxWidth: '1240px', margin: '0 auto' }}
    >
      <div className="blog-detail-shell">
        <Reveal className="blog-detail-main">
          <Button type="link" icon={<ArrowLeftOutlined />} onClick={() => navigate('/blog')} className="blog-back-btn">
            Quay lại Blog
          </Button>

          <div className="blog-detail-hero section-shell">
            <div className="blog-detail-meta">
              <Tag className="article-category-chip">{post.category}</Tag>
              <span>
                <CalendarOutlined /> {post.date}
              </span>
              <span>
                <ClockCircleOutlined /> {post.readTime}
              </span>
            </div>

            <Title level={1} className="blog-detail-title">
              {post.title}
            </Title>
            <Paragraph className="blog-detail-excerpt">{post.excerpt}</Paragraph>

            <Space size={[8, 10]} wrap className="blog-detail-tags">
              {post.tags?.map((tag) => (
                <Tag key={tag} className="article-tag" icon={<TagOutlined />}>
                  {tag.toUpperCase()}
                </Tag>
              ))}
            </Space>
          </div>

          <div className="blog-cover-wrap">
            <img src={post.image} alt={post.title} className="blog-cover-image" />
          </div>

          <article className="blog-reading-panel">{renderContent()}</article>
        </Reveal>

        <Reveal direction="right" className="blog-detail-aside">
          <div className="blog-aside-card">
            <div className="section-badge">Reading note</div>
            <Title level={4}>Tóm tắt nhanh</Title>
            <Paragraph>
              Bài viết này được trình bày theo hướng dễ quét, dễ đọc và ưu tiên ví dụ thực tế để bạn xem nhanh rồi
              áp dụng ngay.
            </Paragraph>
            <div className="blog-aside-facts">
              <div>
                <span>Chủ đề</span>
                <strong>{post.category}</strong>
              </div>
              <div>
                <span>Thời gian đọc</span>
                <strong>{post.readTime}</strong>
              </div>
              <div>
                <span>Mức độ</span>
                <strong>{post.level || 'Tổng hợp'}</strong>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="blog-related-shell">
        <Suspense fallback={<InlineLoader />}>
          <RelatedPosts currentPostId={post.id} />
        </Suspense>
        <Divider style={{ borderColor: 'rgba(136, 146, 176, 0.16)', margin: '60px 0 32px' }} />
      </div>
    </PageShell>
  );
};

export default BlogDetail;
