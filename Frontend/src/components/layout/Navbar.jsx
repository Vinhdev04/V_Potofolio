import React, { useState, useEffect } from 'react';
import { Layout, Menu, Drawer, Button, Grid } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { menuItems } from '@/data/menuData';
import '@/assets/css/layout.scss'; // Reuse existing styles

const { Header } = Layout;
const { useBreakpoint } = Grid;

const Navbar = () => {
  const location = useLocation();
  const screens = useBreakpoint();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <Header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">VinhDev</div>
      
      {/* Desktop Menu */}
      {screens.md ? (
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[getSelectedKey()]}
          items={menuItemsConfig}
          style={{ flex: 1, minWidth: 0, justifyContent: 'flex-end', border: 'none' }}
        />
      ) : (
        /* Mobile Menu Button */
        <Button 
          type="text" 
          icon={<MenuOutlined style={{ color: '#64ffda', fontSize: '20px' }} />} 
          onClick={() => setDrawerVisible(true)}
          className="mobile-menu-btn"
        />
      )}

      {/* Mobile Drawer */}
      <Drawer
        title={<span style={{ color: '#64ffda', fontFamily: 'Fira Code' }}>Menu</span>}
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        styles={{ 
          body: { padding: 0, background: '#112240' },
          header: { background: '#0a192f', borderBottom: '1px solid #233554' }
        }}
        width={250}
      >
        <Menu
          theme="dark"
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
