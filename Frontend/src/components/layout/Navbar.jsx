import React, { useState, useEffect } from 'react';
import { Layout, Menu, Drawer, Button, Grid } from 'antd';
import { MenuOutlined, SunOutlined, MoonOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { menuItems } from '@/data/menuData';
import { useTheme } from '@/context/ThemeContext';
import '@/assets/css/layout.scss'; // Reuse existing styles

const { Header } = Layout;
const { useBreakpoint } = Grid;

const Navbar = () => {
  const location = useLocation();
  const screens = useBreakpoint();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getSelectedKey = () => {
    const path = location.pathname;
    const item = menuItems.find(item => item.path === path || (path !== '/' && path.includes(item.path)));
    return item ? item.key : '1';
  };

  const menuItemsConfig = menuItems.map(item => ({
    key: item.key,
    label: <Link to={item.path} onClick={() => setDrawerVisible(false)}>{item.label}</Link>
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
      <div className="logo">VinhDev</div>
      
      {/* Desktop Menu */}
      {screens.md ? (
        <div style={{ display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'flex-end' }}>
          <Menu
            theme={theme === 'dark' ? 'dark' : 'light'}
            mode="horizontal"
            selectedKeys={[getSelectedKey()]}
            items={menuItemsConfig}
            style={{ minWidth: 0, border: 'none', background: 'transparent' }}
          />
          <ThemeToggle />
        </div>
      ) : (
        /* Mobile Menu Button */
        <div style={{ display: 'flex', alignItems: 'center' }}>
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

      {/* Mobile Drawer */}
      <Drawer
        title={<span style={{ color: 'var(--secondary-color)', fontFamily: 'Fira Code' }}>Menu</span>}
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        styles={{ 
          body: { padding: 0, background: 'var(--bg-secondary)' },
          header: { background: 'var(--bg-color)', borderBottom: '1px solid var(--text-secondary)' }
        }}
        width={250}
      >
        <Menu
          theme={theme === 'dark' ? 'dark' : 'light'}
          mode="vertical"
          selectedKeys={[getSelectedKey()]}
          items={menuItemsConfig}
          style={{ background: 'transparent', border: 'none' }}
        />
      </Drawer>
    </Header>
  );
};

export default React.memo(Navbar);
