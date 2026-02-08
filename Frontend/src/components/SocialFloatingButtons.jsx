import React from 'react';
import { Button, Tooltip } from 'antd';
import { FacebookFilled, MailFilled, PhoneFilled } from '@ant-design/icons';
import { motion } from 'framer-motion';

const SocialFloatingButtons = () => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 100,
        right: 40,
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: 15,
      }}
    >
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Tooltip title="Facebook" placement="left">
          <Button
            shape="circle"
            size="large"
            icon={<FacebookFilled />}
            href="https://www.facebook.com/i.padygamy1210"
            target="_blank"
            style={{
              width: 50,
              height: 50,
              background: '#3b5998',
              color: 'white',
              border: 'none',
              boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
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
            // Zalo doesn't have a standard icon in Antd, using Phone as fallback or custom text
            icon={<span style={{ fontWeight: 'bold', fontSize: 12 }}>Zalo</span>}
            href="https://zalo.me/0352032375"
            target="_blank"
            style={{
              width: 50,
              height: 50,
              background: '#0068ff',
              color: 'white',
              border: 'none',
              boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
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
            icon={<MailFilled />}
            href="mailto:pcv.fed@gmail.com"
            style={{
              width: 50,
              height: 50,
              background: '#ea4335',
              color: 'white',
              border: 'none',
              boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </Tooltip>
      </motion.div>
    </div>
  );
};

export default SocialFloatingButtons;
