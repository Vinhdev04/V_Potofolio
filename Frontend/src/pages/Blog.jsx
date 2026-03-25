import React, { useState, useEffect, useMemo } from 'react';
import { Typography, Row, Col, Card, Tabs, Button, Tag, Space, Select, Skeleton } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CalendarOutlined, 
  ClockCircleOutlined, 
  PlayCircleFilled, 
  EyeOutlined, 
  ArrowRightOutlined,
  FilterOutlined,
  TagOutlined,
  BarChartOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import '@/assets/css/Blog.scss';
import { blogPosts, tiktokVideos } from '@/data/blogData';
import FloatingQuote from '@/components/FloatingQuote';
import { quotesData } from '@/data/homeData';

const { Title, Paragraph, Text } = Typography;
const { Option } = Select;

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

const BlogSkeleton = () => (
  <Row gutter={[24, 24]}>
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <Col xs={24} md={12} lg={8} key={i}>
        <Card
          className="article-card"
          variant="borderless"
          style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <Skeleton.Button active style={{ width: '100%', height: '200px', borderRadius: '16px' }} />
          <div style={{ padding: '20px' }}>
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
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          onLoadMore();
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [hasMore, loading, onLoadMore]);

  const getLevelColor = (level) => {
    switch (level) {
      case 'Cơ bản': return 'green';
      case 'Trung bình': return 'blue';
      case 'Nâng cao': return 'volcano';
      default: return 'default';
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Row gutter={[24, 24]}>
        <AnimatePresence>
          {posts.map((post) => (
            <Col xs={24} md={12} lg={8} key={post.id}>
              {/* Card content remains same */}
              <motion.div 
                variants={itemVariants} 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                style={{ height: '100%' }}
              >
                <Card 
                  className="article-card" 
                  variant="borderless" 
                  hoverable 
                  onClick={() => navigate(`/blog/${post.id}`)}
                  style={{ cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <div className="article-image">
                    <img src={post.image} alt={post.title} />
                    <div style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                      <Tag color="#64ffda" className="article-category" style={{ margin: 0, color: '#0a192f', fontWeight: 'bold', border: 'none' }}>
                        {post.category}
                      </Tag>
                      <Tag color={getLevelColor(post.level)} style={{ margin: 0, fontWeight: 'bold', textTransform: 'uppercase', fontSize: '10px' }}>
                        {post.level}
                      </Tag>
                    </div>
                  </div>
                  <div className="article-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div className="article-meta">
                      <span><CalendarOutlined /> {post.date}</span>
                      <span><ClockCircleOutlined /> {post.readTime}</span>
                    </div>
                    <Title level={3} className="article-title">{post.title}</Title>
                    
                    <div style={{ marginBottom: '15px' }}>
                      <Space size={[0, 4]} wrap>
                        {post.tags?.map(tag => (
                          <Tag key={tag} icon={<TagOutlined />} style={{ borderRadius: '4px', background: 'rgba(100, 255, 218, 0.1)', color: '#64ffda', border: '1px solid rgba(100, 255, 218, 0.2)' }}>
                            {tag.toUpperCase()}
                          </Tag>
                        ))}
                      </Space>
                    </div>

                    <Paragraph className="article-excerpt" ellipsis={{ rows: 3 }} style={{ flex: 1 }}>
                      {post.excerpt}
                    </Paragraph>
                    <Button type="link" className="read-more-btn" icon={<ArrowRightOutlined />} style={{ padding: 0 }}>
                      Đọc tiếp
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </AnimatePresence>
      </Row>

      {loading && (
        <div style={{ marginTop: '24px' }}>
          <BlogSkeleton />
        </div>
      )}

      {!loading && hasMore && (
        <div ref={loaderRef} style={{ height: '20px', margin: '20px 0' }} />
      )}

      {posts.length === 0 && !loading && (
        <div style={{ textAlign: 'center', padding: '100px 0', color: '#8892b0' }}>
          <Title level={4} style={{ color: '#8892b0' }}>Không tìm thấy bài viết nào phù hợp</Title>
          <Text color="secondary">Thử thay đổi bộ lọc để xem thêm kết quả</Text>
        </div>
      )}
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
  const quote = quotesData[6];
  const [activeTab, setActiveTab] = useState('articles');
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  
  // Pagination & Infinite Scroll State
  const [displayPosts, setDisplayPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const pageSize = 6;

  const allTags = ['html', 'css', 'js', 'react', 'bootstrap', 'antd'];
  const allLevels = ['Cơ bản', 'Trung bình', 'Nâng cao'];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchTags = selectedTags.length === 0 || selectedTags.some(tag => post.tags?.includes(tag));
      const matchLevels = selectedLevels.length === 0 || selectedLevels.includes(post.level);
      return matchTags && matchLevels;
    });
  }, [selectedTags, selectedLevels]);

  useEffect(() => {
    // Reset when filters change
    setPage(1);
    setDisplayPosts([]);
    loadMorePosts(true);
  }, [filteredPosts]);

  const loadMorePosts = (reset = false) => {
    if (loading) return;
    
    setLoading(true);
    // Simulate API delay
    setTimeout(() => {
      const start = reset ? 0 : page * pageSize;
      const end = start + pageSize;
      const newPosts = filteredPosts.slice(0, end);
      
      setDisplayPosts(newPosts);
      if (!reset) setPage(prev => prev + 1);
      setLoading(false);
    }, 800);
  };

  const hasMore = displayPosts.length < filteredPosts.length;

  const items = [
    {
      key: 'articles',
      label: 'Bài Viết (Articles)',
      children: (
        <>
          <div className="filter-section" style={{ marginBottom: '40px', background: 'rgba(17, 34, 64, 0.5)', padding: '24px', borderRadius: '12px', border: '1px solid rgba(100, 255, 218, 0.1)' }}>
            <Row gutter={[24, 24]} align="middle">
              <Col xs={24} md={10}>
                <div style={{ marginBottom: '8px', color: '#64ffda', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <TagOutlined /> <Text strong style={{ color: '#64ffda' }}>Lọc theo Công nghệ</Text>
                </div>
                <Select
                  mode="multiple"
                  style={{ width: '100%' }}
                  placeholder="Chọn ngôn ngữ/framework..."
                  onChange={setSelectedTags}
                  value={selectedTags}
                  allowClear
                >
                  {allTags.map(tag => (
                    <Option key={tag} value={tag}>{tag.toUpperCase()}</Option>
                  ))}
                </Select>
              </Col>
              <Col xs={24} md={10}>
                <div style={{ marginBottom: '8px', color: '#64ffda', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <BarChartOutlined /> <Text strong style={{ color: '#64ffda' }}>Lọc theo Mức độ</Text>
                </div>
                <Select
                  mode="multiple"
                  style={{ width: '100%' }}
                  placeholder="Chọn mức độ bài viết..."
                  onChange={setSelectedLevels}
                  value={selectedLevels}
                  allowClear
                >
                  {allLevels.map(level => (
                    <Option key={level} value={level}>{level}</Option>
                  ))}
                </Select>
              </Col>
              <Col xs={24} md={4} style={{ display: 'flex', alignItems: 'flex-end', height: '100%' }}>
                <Button 
                  icon={<FilterOutlined />} 
                  onClick={() => { setSelectedTags([]); setSelectedLevels([]); }}
                  style={{ width: '100%', marginTop: '30px' }}
                >
                  Xóa lọc
                </Button>
              </Col>
            </Row>
          </div>
          <ArticlesList 
            posts={displayPosts} 
            loading={loading} 
            hasMore={hasMore} 
            onLoadMore={() => loadMorePosts()} 
          />
        </>
      ),
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
      style={{ position: 'relative' }}
    >
      <FloatingQuote 
        text={quote.text} 
        author={quote.author} 
        color={quote.color} 
        style={{ 
          top: '120px', 
          right: '20px', 
          zIndex: 10
        }} 
      />
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
