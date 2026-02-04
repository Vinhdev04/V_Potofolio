import React from 'react';
import { Button, Result, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const { Paragraph } = Typography;

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            background: '#0a192f'
        }}
    >
      <Result
        status="404"
        title={<span style={{ color: '#ccd6f6', fontSize: '4rem', fontWeight: 'bold' }}>404</span>}
        subTitle={<Paragraph style={{ color: '#8892b0', fontSize: '1.2rem' }}>Xin lỗi, trang bạn tìm kiếm không tồn tại.</Paragraph>}
        extra={
          <Button 
            type="primary" 
            size="large"
            onClick={() => navigate('/')}
            style={{ backgroundColor: '#64ffda', color: '#0a192f', border: 'none', fontWeight: 'bold' }}
          >
            Về Trang Chủ
          </Button>
        }
      />
    </motion.div>
  );
};

export default NotFound;
