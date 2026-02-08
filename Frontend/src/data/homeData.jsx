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
    title: 'Phát Triển Frontend', 
    desc: 'Xây dựng giao diện responsive với ReactJS, Tailwind CSS và Ant Design. Tối ưu trải nghiệm người dùng.', 
    icon: '💻',
    color: '#64ffda'
  },
  { 
    title: 'Kiến Thức Backend', 
    desc: 'Hiểu biết cơ bản về Node.js, Express và cách thiết kế RESTful API để kết nối với Frontend.', 
    icon: '⚙️',
    color: '#3b82f6'
  },
  { 
    title: 'Học Tập & Nghiên Cứu', 
    desc: 'Luôn cập nhật các công nghệ mới, rèn luyện kỹ năng giải quyết vấn đề và tư duy thuật toán.', 
    icon: '📚',
    color: '#a855f7'
  }
];
