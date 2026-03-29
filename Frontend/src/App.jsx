import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ConfigProvider, theme as antdTheme } from 'antd';
import { router } from '@/routes/index.routes';
import { ThemeProvider, useTheme } from '@/context/ThemeContext';

const ThemedRouter = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        token: {
          colorPrimary: isDark ? '#3dd9c0' : '#0f766e',
          colorInfo: isDark ? '#38bdf8' : '#2563eb',
          colorSuccess: isDark ? '#34d399' : '#16a34a',
          colorWarning: isDark ? '#f59e0b' : '#d97706',
          colorError: isDark ? '#f87171' : '#dc2626',
          borderRadius: 14,
          colorBgBase: isDark ? '#07111f' : '#f4f8fb',
          colorBgContainer: isDark ? '#10203a' : '#ffffff',
          colorTextBase: isDark ? '#e6eef8' : '#142437',
          colorTextSecondary: isDark ? '#90a4bf' : '#526277',
          colorBorder: isDark ? '#233554' : '#d5e1ec',
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <ThemedRouter />
    </ThemeProvider>
  );
};

export default App;
