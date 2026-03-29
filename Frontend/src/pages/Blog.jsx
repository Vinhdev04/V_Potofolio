import React, { useState, useEffect, useMemo } from 'react';
import { Typography, Row, Col, Card, Tabs, Button, Tag, Space, Select, Skeleton, Statistic } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarOutlined, ClockCircleOutlined, PlayCircleFilled, EyeOutlined, ArrowRightOutlined, FilterOutlined, TagOutlined, BarChartOutlined, BookOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import '@/assets/css/Blog.scss';
import { blogPosts, tiktokVideos } from '@/data/blogData';
import FloatingQuote from '@/components/FloatingQuote';
import { quotesData } from '@/data/homeData';
import PageShell from '@/components/motion/PageShell';
import Reveal, { RevealGroup, RevealItem } from '@/components/motion/Reveal';

const { Title, Paragraph, Text } = Typography;
const { Option } = Select;

const BlogSkeleton = () => (
  <Row gutter={[24, 24]}>
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <Col xs={24} md={12} lg={8} key={i}>
        <Card className="article-card article-card--skeleton" variant="borderless">
          <Skeleton.Button active style={{ width: '100%', height: '220px', borderRadius: '18px' }} />
          <div className="article-content">
            <Skeleton active title={{ width: '80%' }} paragraph={{ rows: 3 }} />
          </div>
        </Card>
      </Col>
    ))}
  </Row>
);

const ArticlesList = ({ posts, loading, hasMore, onLoadMore }) => {
  const navigate = useNavigate();
  const loaderRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore && !loading) onLoadMore();
    }, { threshold: 0.6 });

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [hasMore, loading, onLoadMore]);

  const getLevelClass = (level) => {
    switch (level) {
      case 'Cơ bản': return 'basic';
      case 'Trung bình': return 'medium';
      case 'Nâng cao': return 'advanced';
      default: return 'basic';
    }
  };

  return (
    <RevealGroup>
      <Row gutter={[24, 24]}>
        <AnimatePresence>
          {posts.map((post, index) => (
            <Col xs={24} md={12} lg={8} key={post.id}>
              <RevealItem layout transition={{ duration: 0.35, delay: index * 0.04 }} style={{ height: '100%' }}>
                <Card className="article-card" variant="borderless" hoverable onClick={() => navigate(`/blog/${post.id}`)}>
                  <div className="article-image">
                    <img src={post.image} alt={post.title} />
                    <div className="article-image-overlay" />
                    <div className="article-image-top">
                      <Tag className="article-category-chip">{post.category}</Tag>
                      <Tag className={`article-level article-level--${getLevelClass(post.level)}`}>{post.level}</Tag>
                    </div>
                  </div>

                  <div className="article-content">
                    <div className="article-meta">
                      <span><CalendarOutlined /> {post.date}</span>
                      <span><ClockCircleOutlined /> {post.readTime}</span>
                    </div>
                    <Title level={3} className="article-title">{post.title}</Title>
                    <Paragraph className="article-excerpt" ellipsis={{ rows: 3 }}>{post.excerpt}</Paragraph>

                    <div className="article-tags">
                      <Space size={[6, 8]} wrap>
                        {post.tags?.slice(0, 3).map((tag) => (
                          <Tag key={tag} icon={<TagOutlined />} className="article-tag">{tag.toUpperCase()}</Tag>
                        ))}
                      </Space>
                    </div>

                    <Button type="link" className="read-more-btn" icon={<ArrowRightOutlined />}>Đọc tiếp</Button>
                  </div>
                </Card>
              </RevealItem>
            </Col>
          ))}
        </AnimatePresence>
      </Row>

      {loading && <div style={{ marginTop: 24 }}><BlogSkeleton /></div>}
      {!loading && hasMore && <div ref={loaderRef} style={{ height: 24, margin: '24px 0' }} />}

      {posts.length === 0 && !loading && (
        <div className="blog-empty-state">
          <Title level={4}>Không tìm thấy bài viết phù hợp</Title>
          <Text>Thử thay đổi bộ lọc để xem thêm kết quả.</Text>
        </div>
      )}
    </RevealGroup>
  );
};

const TikTokGrid = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    <RevealGroup className="tiktok-section">
      <Reveal className="tiktok-creator-card">
        <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@devcraftt" data-unique-id="devcraftt" data-embed-type="creator" style={{ maxWidth: '780px', minWidth: '288px' }}>
          <section><a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@devcraftt?refer=creator_embed">@devcraftt</a></section>
        </blockquote>
      </Reveal>

      <Row gutter={[20, 20]}>
        {tiktokVideos.map((video) => (
          <Col xs={12} sm={8} md={6} lg={4} key={video.id}>
            <RevealItem>
              <div className="tiktok-card" onClick={() => window.open(video.link, '_blank')}>
                <img src={video.thumbnail} alt={video.title} />
                <div className="tiktok-overlay">
                  <div className="tiktok-stats"><EyeOutlined /> {video.views}</div>
                  <PlayCircleFilled className="play-icon" />
                  <div className="tiktok-info"><Title level={5} className="tiktok-title">{video.title}</Title></div>
                </div>
              </div>
            </RevealItem>
          </Col>
        ))}
      </Row>
    </RevealGroup>
  );
};

const Blog = () => {
  const quote = quotesData[6];
  const [activeTab, setActiveTab] = useState('articles');
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const pageSize = 6;
  const allTags = ['html', 'css', 'js', 'react', 'bootstrap', 'antd'];
  const allLevels = ['Cơ bản', 'Trung bình', 'Nâng cao'];

  const filteredPosts = useMemo(() => (
    blogPosts.filter((post) => {
      const matchTags = selectedTags.length === 0 || selectedTags.some((tag) => post.tags?.includes(tag));
      const matchLevels = selectedLevels.length === 0 || selectedLevels.includes(post.level);
      return matchTags && matchLevels;
    })
  ), [selectedTags, selectedLevels]);

  useEffect(() => {
    setVisibleCount(6);
  }, [filteredPosts]);

  const displayPosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  const items = [
    {
      key: 'articles',
      label: 'Bài Viết',
      children: (
        <>
          <Reveal className="filter-shell">
            <Row gutter={[24, 24]} align="middle">
              <Col xs={24} md={9}>
                <div className="filter-label"><TagOutlined /> Công nghệ</div>
                <Select mode="multiple" style={{ width: '100%' }} placeholder="Chọn ngôn ngữ / framework" onChange={setSelectedTags} value={selectedTags} allowClear>
                  {allTags.map((tag) => <Option key={tag} value={tag}>{tag.toUpperCase()}</Option>)}
                </Select>
              </Col>
              <Col xs={24} md={9}>
                <div className="filter-label"><BarChartOutlined /> Mức độ</div>
                <Select mode="multiple" style={{ width: '100%' }} placeholder="Chọn mức độ bài viết" onChange={setSelectedLevels} value={selectedLevels} allowClear>
                  {allLevels.map((level) => <Option key={level} value={level}>{level}</Option>)}
                </Select>
              </Col>
              <Col xs={24} md={6}>
                <Button icon={<FilterOutlined />} onClick={() => { setSelectedTags([]); setSelectedLevels([]); }} className="filter-reset-btn">Xóa lọc</Button>
              </Col>
            </Row>
          </Reveal>

          <ArticlesList posts={displayPosts} loading={false} hasMore={hasMore} onLoadMore={() => setVisibleCount((prev) => prev + pageSize)} />
        </>
      ),
    },
    {
      key: 'tiktok',
      label: 'TikTok',
      children: <TikTokGrid />,
    },
  ];

  return (
    <PageShell className="blog-container" accent="#64ffda" style={{ position: 'relative' }}>
      <FloatingQuote text={quote.text} author={quote.author} color={quote.color} style={{ top: '120px', right: '20px', zIndex: 10 }} />

      <Reveal className="blog-hero section-shell">
        <div className="blog-hero__grid">
          <div className="blog-hero__content">
            <div className="section-badge">Editorial space</div>
            <Title level={1} className="blog-title">Blog và Chia Sẻ</Title>
            <Paragraph className="blog-description">
              Nơi tôi gom lại kiến thức frontend, các chủ đề dễ nhầm khi học web, và những nội dung ngắn gọn, dễ xem, dễ áp dụng vào dự án thực tế.
            </Paragraph>
          </div>

          <div className="blog-hero__stats">
            <Card className="blog-stat-card"><Statistic title="Bài viết" value={blogPosts.length} prefix={<BookOutlined />} /></Card>
            <Card className="blog-stat-card"><Statistic title="Video" value={tiktokVideos.length} prefix={<VideoCameraOutlined />} /></Card>
          </div>
        </div>
      </Reveal>

      <div className="blog-tabs">
        <Tabs activeKey={activeTab} onChange={setActiveTab} centered items={items} size="large" />
      </div>
    </PageShell>
  );
};

export default Blog;
