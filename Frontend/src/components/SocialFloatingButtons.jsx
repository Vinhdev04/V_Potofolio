import React from 'react';
import { Button, Tooltip } from 'antd';
import { FacebookFilled, MailFilled, PhoneFilled } from '@ant-design/icons';
import { motion } from 'framer-motion';
import '@/assets/css/layout.scss';

const SocialFloatingButtons = () => {
  return (
    <div className="floating-socials">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Tooltip title="Facebook" placement="left">
          <Button
            shape="circle"
            size="large"
            icon={<span className="floating-socials__icon"><FacebookFilled /></span>}
            href="https://www.facebook.com/i.padygamy1210"
            target="_blank"
            className="floating-socials__button floating-socials__button--facebook"
          />
        </Tooltip>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        <Tooltip title="Zalo" placement="left">
          <Button
            shape="circle"
            size="large"
            icon={<span className="floating-socials__label">Zalo</span>}
            href="https://zalo.me/0352032375"
            target="_blank"
            className="floating-socials__button floating-socials__button--zalo"
          />
        </Tooltip>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <Tooltip title="Email" placement="left">
          <Button
            shape="circle"
            size="large"
            icon={<span className="floating-socials__icon"><MailFilled /></span>}
            href="mailto:pcv.fed@gmail.com"
            className="floating-socials__button floating-socials__button--mail"
          />
        </Tooltip>
      </motion.div>
    </div>
  );
};

export default SocialFloatingButtons;
