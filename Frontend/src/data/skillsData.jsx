import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaFigma, FaTrello } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiSass, SiAntdesign, SiMongodb, SiExpress, SiPostman } from 'react-icons/si';

export const skills = [
    // Frontend
    { name: 'HTML5', icon: <FaHtml5 size={40} />, level: 95, category: 'Frontend', color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt size={40} />, level: 95, category: 'Frontend', color: '#1572B6' },
    { name: 'JavaScript', icon: <FaJs size={40} />, level: 90, category: 'Frontend', color: '#F7DF1E' },
    { name: 'React', icon: <FaReact size={40} />, level: 90, category: 'Frontend', color: '#61DAFB' },
    { name: 'TypeScript', icon: <SiTypescript size={40} />, level: 80, category: 'Frontend', color: '#3178C6' },
    { name: 'Tailwind', icon: <SiTailwindcss size={40} />, level: 90, category: 'Frontend', color: '#06B6D4' },
    { name: 'SCSS', icon: <SiSass size={40} />, level: 85, category: 'Frontend', color: '#CC6699' },
    { name: 'Ant Design', icon: <SiAntdesign size={40} />, level: 85, category: 'Frontend', color: '#0170FE' },
    { name: 'Bootstrap', icon: <FaBootstrap size={40} />, level: 80, category: 'Frontend', color: '#7952B3' },

    // Backend
    { name: 'Node.js', icon: <FaNodeJs size={40} />, level: 70, category: 'Backend', color: '#339933' },
    { name: 'Express', icon: <SiExpress size={40} />, level: 65, category: 'Backend', color: '#000000' },
    { name: 'MongoDB', icon: <SiMongodb size={40} />, level: 70, category: 'Backend', color: '#47A248' },

    // Tools
    { name: 'Figma', icon: <FaFigma size={40} />, level: 70, category: 'Tools', color: '#F24E1E' },
    { name: 'Postman', icon: <SiPostman size={40} />, level: 80, category: 'Tools', color: '#FF6C37' },
    { name: 'Trello', icon: <FaTrello size={40} />, level: 85, category: 'Tools', color: '#0052CC' }
];