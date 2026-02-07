import React, { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import LoadingScreen from '@/components/LoadingScreen';
import NotFound from '@/pages/NotFound';

// Lazy load pages
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Projects = lazy(() => import('@/pages/Projects'));
const Skills = lazy(() => import('@/pages/Skills'));
const Experience = lazy(() => import('@/pages/Experience'));
const Contact = lazy(() => import('@/pages/Contact'));
const Certificates = lazy(() => import('@/pages/Certificates'));
const Blog = lazy(() => import('@/pages/Blog'));
const BlogDetail = lazy(() => import('@/pages/BlogDetail'));

const SuspenseWrapper = ({ children }) => (
  <Suspense fallback={<LoadingScreen />}>
    {children}
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <SuspenseWrapper><Home /></SuspenseWrapper>,
      },
      {
        path: 'about',
        element: <SuspenseWrapper><About /></SuspenseWrapper>,
      },
      {
        path: 'projects',
        element: <SuspenseWrapper><Projects /></SuspenseWrapper>,
      },
      {
        path: 'skills',
        element: <SuspenseWrapper><Skills /></SuspenseWrapper>,
      },
      {
        path: 'experience',
        element: <SuspenseWrapper><Experience /></SuspenseWrapper>,
      },
      {
        path: 'certificates',
        element: <SuspenseWrapper><Certificates /></SuspenseWrapper>,
      },
      {
        path: 'blog',
        element: <SuspenseWrapper><Blog /></SuspenseWrapper>,
      },
      {
        path: 'blog/:id',
        element: <SuspenseWrapper><BlogDetail /></SuspenseWrapper>,
      },
      {
        path: 'contact',
        element: <SuspenseWrapper><Contact /></SuspenseWrapper>,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_URL,
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  }
});
