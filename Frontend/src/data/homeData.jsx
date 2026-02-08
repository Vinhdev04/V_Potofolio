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

export const quotesData = [
  {
    text: "I don’t just write code — I design solutions that scale.",
    author: "VinhDev",
    color: "#64ffda"
  },
  {
    text: "Clean code is not a luxury. It’s a responsibility.",
    author: "VinhDev",
    color: "#3b82f6"
  },
  {
    text: "Software is built twice: once in the mind, once in code.",
    author: "VinhDev",
    color: "#a855f7"
  },
  {
    text: "Readable code today saves debugging time tomorrow.",
    author: "VinhDev",
    color: "#f472b6"
  },
  {
    text: "Good code solves problems. Great code prevents future ones.",
    author: "VinhDev",
    color: "#fbbf24"
  },
  {
    text: "Performance, security, and maintainability are features — not afterthoughts.",
    author: "VinhDev",
    color: "#34d399"
  },
  {
    text: "I write code for humans first, machines second.",
    author: "VinhDev",
    color: "#60a5fa"
  },
  {
    text: "Every line of code is a long-term decision.",
    author: "VinhDev",
    color: "#f87171"
  },
  {
    text: "The best software feels simple because the hard work is hidden.",
    author: "VinhDev",
    color: "#2dd4bf"
  }
];
