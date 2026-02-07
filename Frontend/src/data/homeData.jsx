import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaAws } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiPostgresql } from 'react-icons/si';

export const techStack = [
  { icon: <FaReact size={30} />, name: 'React' },
  { icon: <FaNodeJs size={30} />, name: 'Node.js' },
  { icon: <SiTypescript size={30} />, name: 'TypeScript' },
  { icon: <FaHtml5 size={30} />, name: 'HTML5' },
  { icon: <SiTailwindcss size={30} />, name: 'Tailwind' },
  { icon: <SiPostgresql size={30} />, name: 'PostgreSQL' },
  { icon: <FaAws size={30} />, name: 'AWS' },
];

export const expertiseData = [
  { 
    title: 'Tối Ưu Hóa Frontend', 
    desc: 'Các kỹ thuật nâng cao để giảm kích thước bundle, cải thiện Core Web Vitals và đảm bảo animation 60fps.', 
    icon: '⚡',
    color: '#64ffda'
  },
  { 
    title: 'Thiết Kế Hệ Thống', 
    desc: 'Kiến trúc microservices mở rộng và hệ thống backend serverless có khả năng xử lý đồng thời cao.', 
    icon: '🗄️',
    color: '#3b82f6'
  },
  { 
    title: 'Hạ Tầng Đám Mây', 
    desc: 'Triển khai và điều phối các ứng dụng container hóa sử dụng Docker, Kubernetes và các dịch vụ AWS.', 
    icon: '☁️',
    color: '#a855f7'
  }
];
