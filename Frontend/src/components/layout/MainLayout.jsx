import React from 'react';
import { Layout } from 'antd';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import BackToTop from '@components/BackToTop';
import SocialFloatingButtons from '@components/SocialFloatingButtons';
import ScrollProgress from '@components/ScrollProgress';
import Navbar from './Navbar';
import Footer from './Footer';
import '@/assets/css/layout.scss';


const { Content } = Layout;

const MainLayout = () => {
  const location = useLocation();

  return (
    <Layout className="main-layout">
      <ScrollProgress />
      <Navbar />
      <Content className="main-content">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            className="route-shell"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </Content>
      <Footer />
      <BackToTop />
      <SocialFloatingButtons />
    </Layout>
  );
};

export default MainLayout;
