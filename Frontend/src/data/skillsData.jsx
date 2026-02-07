import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaDocker, FaPython, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb, SiAmazonaws, SiGraphql } from 'react-icons/si';

export const skills = [
    { name: 'React', icon: <FaReact size={40} />, level: 95, category: 'Frontend', color: '#61DAFB' },
    { name: 'TypeScript', icon: <SiTypescript size={40} />, level: 90, category: 'Frontend', color: '#3178C6' },
    { name: 'Node.js', icon: <FaNodeJs size={40} />, level: 85, category: 'Backend', color: '#339933' },
    { name: 'Tailwind', icon: <SiTailwindcss size={40} />, level: 98, category: 'Frontend', color: '#06B6D4' },
    { name: 'PostgreSQL', icon: <SiPostgresql size={40} />, level: 80, category: 'Backend', color: '#336791' },
    { name: 'Docker', icon: <FaDocker size={40} />, level: 70, category: 'Tools', color: '#2496ED' },
    { name: 'Figma', icon: <FaFigma size={40} />, level: 92, category: 'Tools', color: '#F24E1E' },
    { name: 'Python', icon: <FaPython size={40} />, level: 75, category: 'Backend', color: '#3776AB' },
    { name: 'MongoDB', icon: <SiMongodb size={40} />, level: 85, category: 'Backend', color: '#47A248' },
    { name: 'AWS', icon: <SiAmazonaws size={40} />, level: 65, category: 'Tools', color: '#FF9900' },
    { name: 'GraphQL', icon: <SiGraphql size={40} />, level: 80, category: 'Backend', color: '#E10098' }
];
