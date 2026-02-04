import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          style={{
            position: 'fixed',
            bottom: 40,
            right: 40,
            zIndex: 1000,
          }}
        >
          <Button
            type="primary"
            shape="circle"
            size="large"
            icon={<ArrowUpOutlined />}
            onClick={scrollToTop}
            style={{
              width: 50,
              height: 50,
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
              background: '#64ffda',
              color: '#0a192f',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
