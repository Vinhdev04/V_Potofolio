import React, { useState } from 'react';
import { Typography, Row, Col, Card, Tag, Button, Empty } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import { EyeOutlined, GithubOutlined } from '@ant-design/icons';
import ProjectModal from '../components/ProjectModal';
import '@/assets/css/Projects.scss';
import { projects } from '@data/projectsData';

const { Title, Paragraph } = Typography;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="projects-container"
    >
      <div className="projects-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Title level={1} className="projects-title">Thư Viện Dự Án</Title>
          <Paragraph className="projects-description">
            Một bộ sưu tập được chọn lọc các dự án kỹ thuật, đóng góp mã nguồn mở và thử nghiệm giao diện người dùng được thiết kế để giải quyết các vấn đề thực tế.
          </Paragraph>
          
          <div className="projects-filter">
            {['All', 'Web Apps', 'Open Source', 'UI/UX'].map(cat => (
              <Button 
                key={cat}
                type={filter === cat ? 'primary' : 'default'}
                size="large"
                onClick={() => { setFilter(cat); setVisibleCount(6); }}
                className={filter === cat ? 'filter-btn active' : 'filter-btn'}
              >
                {cat}
              </Button>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        <Row gutter={[24, 24]}>
          {displayedProjects.length > 0 ? (
            displayedProjects.map((project, index) => (
              <Col xs={24} sm={12} lg={8} key={project.title}>
                <motion.div
                  layout
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="project-card">
                    {/* Project Image with Overlay */}
                    <div className="project-image-wrapper">
                      <img alt={project.title} src={project.image} className="project-image" />
                      <div className="project-overlay">
                        <div className="overlay-content">
                          <Button 
                            type="primary" 
                            shape="circle" 
                            icon={<EyeOutlined />} 
                            size="large"
                            className="overlay-btn"
                            onClick={() => setSelectedProject(project)}
                          />
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
                    
                    {/* Project Content */}
                    <div className="project-content">
                      <Title level={4} className="project-title">{project.title}</Title>
                      <Paragraph ellipsis={{ rows: 3 }} className="project-description">
                        {project.description}
                      </Paragraph>
                      
                      {/* Tech Tags */}
                      <div className="project-tags">
                        {project.tags.slice(0, 3).map(tag => (
                          <Tag key={tag} className="tech-tag">{tag}</Tag>
                        ))}
                        {project.tags.length > 3 && (
                          <Tag className="tech-tag more-tag">+{project.tags.length - 3}</Tag>
                        )}
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="card-shine"></div>
                  </Card>
                </motion.div>
              </Col>
            ))
          ) : (
            <Col span={24}>
              <Empty 
                description={<span className="empty-text">Không tìm thấy dự án nào trong danh mục này.</span>}
                className="empty-state" 
              />
            </Col>
          )}
        </Row>
      </AnimatePresence>

      {visibleCount < filteredProjects.length && (
        <motion.div 
          className="load-more-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Button 
            size="large" 
            onClick={handleLoadMore}
            className="load-more-btn"
          >
            Xem Thêm Dự Án
            <span className="btn-arrow">↓</span>
          </Button>
        </motion.div>
      )}

      <ProjectModal 
        project={selectedProject} 
        visible={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </motion.div>
  );
};

export default Projects;