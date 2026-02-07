import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import BackToTop from '@components/BackToTop';
import SocialFloatingButtons from '@components/SocialFloatingButtons';
import Navbar from './Navbar';
import Footer from './Footer';
import '@/assets/css/layout.scss';


const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout className="main-layout">
      <Navbar />
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
