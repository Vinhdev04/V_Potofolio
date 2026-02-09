import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes/index.routes';
import { ThemeProvider } from '@/context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
