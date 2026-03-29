import React, { useState, useEffect } from 'react';
import { Layout, Menu, Drawer, Button, Grid } from 'antd';
import { MenuOutlined, SunOutlined, MoonOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { menuItems } from '@/data/menuData';
import { useTheme } from '@/context/ThemeContext';
import '@/assets/css/layout.scss';

const { Header } = Layout;
const { useBreakpoint } = Grid;

const Navbar = () => {
  const location = useLocation();
  const screens = useBreakpoint();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getSelectedKey = () => {
    const path = location.pathname;
    const item = menuItems.find((entry) => entry.path === path || (path !== '/' && path.includes(entry.path)));
    return item ? item.key : '1';
  };

  const menuItemsConfig = menuItems.map((item) => ({
    key: item.key,
    label: (
      <Link to={item.path} onClick={() => setDrawerVisible(false)}>
        {item.label}
      </Link>
    ),
  }));

  const ThemeToggle = () => (
    <Button
      type="text"
      icon={theme === 'dark' ? <SunOutlined style={{ color: 'var(--secondary-color)' }} /> : <MoonOutlined style={{ color: 'var(--secondary-color)' }} />}
      onClick={toggleTheme}
      className="theme-toggle-btn"
      style={{ marginLeft: '1rem' }}
    />
  );

  return (
    <Header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <motion.div
        className="logo"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/">VinhDev</Link>
      </motion.div>
      {screens.md ? (
        <motion.div
          className="navbar-actions"
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Menu
            theme={theme === 'dark' ? 'dark' : 'light'}
            mode="horizontal"
            selectedKeys={[getSelectedKey()]}
            items={menuItemsConfig}
            className="navbar-menu"
          />
          <ThemeToggle />
        </motion.div>
      ) : (
        <div className="navbar-actions mobile">
          <ThemeToggle />
          <Button
            type="text"
            icon={<MenuOutlined style={{ color: 'var(--secondary-color)', fontSize: '20px' }} />}
            onClick={() => setDrawerVisible(true)}
            className="mobile-menu-btn"
            style={{ marginLeft: '10px' }}
          />
        </div>
      )}

      <Drawer
        title={<span className="navbar-drawer-title">Menu</span>}
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        className="navbar-drawer"
        styles={{
          body: { padding: 0, background: 'var(--bg-secondary)' },
          header: {
            background: 'color-mix(in srgb, var(--bg-card) 92%, transparent)',
            borderBottom: '1px solid var(--border-color)',
          },
        }}
        width={250}
      >
        <Menu
          theme={theme === 'dark' ? 'dark' : 'light'}
          mode="vertical"
          selectedKeys={[getSelectedKey()]}
          items={menuItemsConfig}
          className="navbar-drawer-menu"
          style={{ background: 'transparent', border: 'none' }}
        />
      </Drawer>
    </Header>
  );
};

export default React.memo(Navbar);
