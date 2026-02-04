import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import BackToTop from '../BackToTop';
import SocialFloatingButtons from '../SocialFloatingButtons';
import Footer from './Footer';
import '@/styles/layout.scss';

const { Header, Content } = Layout;

const MainLayout = () => {
  const location = useLocation();

  const getSelectedKey = () => {
    const path = location.pathname;
    if (path === '/') return '1';
    if (path.includes('/about')) return '2';
    if (path.includes('/projects')) return '3';
    if (path.includes('/skills')) return '4';
    if (path.includes('/experience')) return '5';
    if (path.includes('/certificates')) return '7';
    if (path.includes('/contact')) return '6';
    return '1';
  };

  return (
    <Layout className="main-layout">
      <Header className="header">
        <div className="logo">VinhDev</div>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[getSelectedKey()]}
          items={[
            { key: '1', label: <Link to="/">Home</Link> },
            { key: '2', label: <Link to="/about">About</Link> },
            { key: '3', label: <Link to="/projects">Projects</Link> },
            { key: '4', label: <Link to="/skills">Stack</Link> },
            { key: '5', label: <Link to="/experience">Experience</Link> },
            { key: '6', label: <Link to="/contact">Contact</Link> },
          ]}
          style={{ flex: 1, minWidth: 0, justifyContent: 'flex-end' }}
        />
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 84 }}>
        <AnimatePresence mode='wait'>
            <Outlet />
        </AnimatePresence>
      </Content>
      <Footer />
      <BackToTop />
      <SocialFloatingButtons />
    </Layout>
  );
};

export default MainLayout;
