import React, { useState } from 'react';
import { Typography, Row, Col, Card, Tag, Button, Empty } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import { EyeOutlined, GithubOutlined } from '@ant-design/icons';
import ProjectModal from '../components/ProjectModal';
import '@/assets/css/Projects.scss';
import { projects } from '@data/projectsData';
import FloatingQuote from '@/components/FloatingQuote';
import { quotesData } from '@/data/homeData';
import PageShell from '@/components/motion/PageShell';
import Reveal, { RevealGroup, RevealItem } from '@/components/motion/Reveal';

const { Title, Paragraph } = Typography;
const categories = ['All', 'Web Apps', 'Mobile Apps', 'E-commerce', 'Games', 'Tools', 'UI Components'];

const Projects = () => {
  const quote = quotesData[2];
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects = filter === 'All' ? projects : projects.filter((p) => p.category === filter);
  const displayedProjects = filteredProjects.slice(0, visibleCount);

  return (
    <PageShell className="projects-container" accent="#a855f7" style={{ position: 'relative' }}>
      {quote && <FloatingQuote text={quote.text} author={quote.author} color={quote.color} style={{ top: '150px', left: '20px', zIndex: 10 }} />}

      <Reveal className="projects-header section-shell">
        <div className="section-badge">Selected work</div>
        <Title level={1} className="projects-title">Thư Viện Dự Án</Title>
        <Paragraph className="projects-description">
          Một bộ sưu tập dự án tập trung vào giao diện, tính ứng dụng và trải nghiệm thực tế, từ landing page, tool nhỏ đến sản phẩm học tập lớn hơn.
        </Paragraph>

        <div className="projects-filter">
          {categories.map((cat) => (
            <Button
              key={cat}
              type={filter === cat ? 'primary' : 'default'}
              size="large"
              onClick={() => {
                setFilter(cat);
                setVisibleCount(6);
              }}
              className={filter === cat ? 'filter-btn active' : 'filter-btn'}
            >
              {cat}
            </Button>
          ))}
        </div>
      </Reveal>

      <AnimatePresence mode="wait">
        <RevealGroup>
          <Row gutter={[24, 24]}>
            {displayedProjects.length > 0 ? (
              displayedProjects.map((project, index) => (
                <Col xs={24} sm={12} lg={8} key={project.title}>
                  <RevealItem layout transition={{ duration: 0.4, delay: index * 0.05 }} whileHover={{ y: -10 }}>
                    <Card className="project-card">
                      <div className="project-image-wrapper">
                        <img alt={project.title} src={project.image} className="project-image" />
                        <div className="project-overlay">
                          <div className="overlay-content">
                            <Button type="primary" shape="circle" icon={<EyeOutlined />} size="large" className="overlay-btn" onClick={() => setSelectedProject(project)} />
                            {project.repoLink !== '#' && (
                              <Button
                                type="default"
                                shape="circle"
                                icon={<GithubOutlined />}
                                size="large"
                                className="overlay-btn"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  window.open(project.repoLink, '_blank');
                                }}
                              />
                            )}
                          </div>
                        </div>
                        <div className="project-category-badge">
                          <Tag className="category-tag">{project.category}</Tag>
                        </div>
                      </div>

                      <div className="project-content">
                        <Title level={4} className="project-title">{project.title}</Title>
                        <Paragraph ellipsis={{ rows: 3 }} className="project-description">{project.description}</Paragraph>
                        <div className="project-tags">
                          {project.tags.slice(0, 3).map((tag) => <Tag key={tag} className="tech-tag">{tag}</Tag>)}
                          {project.tags.length > 3 && <Tag className="tech-tag more-tag">+{project.tags.length - 3}</Tag>}
                        </div>
                      </div>

                      <div className="card-shine" />
                    </Card>
                  </RevealItem>
                </Col>
              ))
            ) : (
              <Col span={24}>
                <Empty description={<span className="empty-text">Không tìm thấy dự án nào trong danh mục này.</span>} className="empty-state" />
              </Col>
            )}
          </Row>
        </RevealGroup>
      </AnimatePresence>

      {visibleCount < filteredProjects.length && (
        <motion.div className="load-more-wrapper" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <Button size="large" onClick={() => setVisibleCount((prev) => prev + 3)} className="load-more-btn">
            Xem Thêm Dự Án
            <span className="btn-arrow">↓</span>
          </Button>
        </motion.div>
      )}

      <ProjectModal project={selectedProject} visible={!!selectedProject} onClose={() => setSelectedProject(null)} />
    </PageShell>
  );
};

export default Projects;
