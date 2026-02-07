import React from 'react';
import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HomeOutlined, RocketOutlined } from '@ant-design/icons';
import '@/assets/css/NotFound.scss';

const { Title, Paragraph } = Typography;

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      {/* Animated Background */}
      <div className="notfound-background">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="notfound-content"
      >
        {/* Animated 404 */}
        <div className="error-code">
          <motion.div
            className="number"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 1, delay: 0.2 }}
          >
            4
          </motion.div>
          
          <motion.div
            className="astronaut-wrapper"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="astronaut">🚀</div>
          </motion.div>
          
          <motion.div
            className="number"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 1, delay: 0.4 }}
          >
            4
          </motion.div>
        </div>

        {/* Message */}
        <motion.div
          className="error-message"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Title level={2} className="error-title">
            Oops! Trang Không Tồn Tại
          </Title>
          <Paragraph className="error-description">
            Có vẻ như bạn đã lạc vào vùng không gian chưa được khám phá. 
            Hãy quay về trang chủ để tiếp tục hành trình!
          </Paragraph>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="error-actions"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Button 
            type="primary" 
            size="large"
            icon={<HomeOutlined />}
            onClick={() => navigate('/')}
            className="home-button"
          >
            <span>Về Trang Chủ</span>
            <span className="btn-glow"></span>
          </Button>
          
          <Button 
            ghost
            size="large"
            icon={<RocketOutlined />}
            onClick={() => navigate(-1)}
            className="back-button"
          >
            Quay Lại
          </Button>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          className="fun-fact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="fact-icon">💡</div>
          <Paragraph className="fact-text">
            <strong>Bạn có biết?</strong> Lỗi 404 được đặt tên theo số phòng tại CERN 
            nơi máy chủ web đầu tiên được đặt. Phòng 404!
          </Paragraph>
        </motion.div>

        {/* Floating Elements */}
        <div className="floating-elements">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="floating-element"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              {['⭐', '🌟', '✨', '💫'][Math.floor(Math.random() * 4)]}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;