import React from 'react';
import { FaTiktok, FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaYoutube, FaCamera, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';

export const socialLinks = [
  {
    id: 1,
    name: 'TikTok (Học tập)',
    handle: '@devcraftt',
    link: 'https://www.tiktok.com/@devcraftt?is_from_webapp=1&sender_device=pc',
    icon: <FaTiktok size={40} />,
    color: '#000000',
    description: 'Phục vụ học tập, chia sẻ kiến thức lập trình.',
    followers: '450',
    statLabel: 'Followers',
    category: 'Video ngắn'
  },
  {
    id: 2,
    name: 'TikTok (Giải trí)',
    handle: '@congvinhhere',
    link: 'https://www.tiktok.com/@congvinhhere?is_from_webapp=1&sender_device=pc',
    icon: <FaTiktok size={40} />,
    color: '#FE2C55',
    description: 'Kênh TikTok giải trí cá nhân.',
    followers: '2K+',
    statLabel: 'Followers',
    category: 'Video ngắn'
  },
  {
    id: 3,
    name: 'Facebook',
    handle: 'Phạm Công Vinh',
    link: 'https://www.facebook.com/i.padygamy1210',
    icon: <FaFacebook size={40} />,
    color: '#1877F2',
    description: 'Cập nhật hoạt động cá nhân và các dự án mới.',
    followers: '5K+',
    statLabel: 'Friends',
    category: 'Mạng xã hội'
  },
  {
    id: 4,
    name: 'Instagram',
    handle: '@its_me_vinh',
    link: 'https://www.instagram.com/its_me_vinh/',
    icon: <FaInstagram size={40} />,
    color: '#E4405F',
    description: 'Những khoảnh khắc đời thường và behind-the-scenes.',
    followers: '750',
    statLabel: 'Followers',
    category: 'Hình ảnh'
  },
  {
    id: 5,
    name: 'Locket',
    handle: 'locket.cam',
    link: 'https://locket.cam',
    icon: <FaCamera size={40} />,
    color: '#FFB800',
    description: 'Chia sẻ khoảnh khắc với bạn bè thân thiết.',
    followers: '30',
    statLabel: 'Members',
    category: 'Hình ảnh'
  },
  {
    id: 6,
    name: 'GitHub',
    handle: 'Vinhdev04',
    link: 'https://github.com/Vinhdev04',
    icon: <FaGithub size={40} />,
    color: '#333333',
    description: 'Nơi lưu trữ source code các dự án cá nhân và open source.',
    followers: '94',
    statLabel: 'Repositories',
    category: 'Code'
  },
  {
    id: 7,
    name: 'LinkedIn',
    handle: 'Phạm Công Vinh',
    link: 'https://www.linkedin.com/in/ph%E1%BA%A1m-c%C3%B4ng-vinh-39513a338/',
    icon: <FaLinkedin size={40} />,
    color: '#0A66C2',
    description: 'Kết nối chuyên nghiệp và hồ sơ năng lực.',
    followers: '500+',
    statLabel: 'Connections',
    category: 'Công việc'
  },
  {
    id: 8,
    name: 'YouTube',
    handle: '@phamcongvinh.channel',
    link: 'https://www.youtube.com/@phamcongvinh.channel',
    icon: <FaYoutube size={40} />,
    color: '#FF0000',
    description: 'Video hướng dẫn lập trình chi tiết và tutorial.',
    followers: '1K+',
    statLabel: 'Subscribers',
    category: 'Video dài'
  },
  {
    id: 9,
    name: 'Gmail',
    handle: 'pcv.fed@gmail.com',
    link: 'mailto:pcv.fed@gmail.com',
    icon: <FaEnvelope size={40} />,
    color: '#EA4335',
    description: 'Liên hệ trực tiếp qua Email cho công việc.',
    followers: 'Contact Me',
    statLabel: 'Via Email',
    category: 'Liên hệ'
  },
  {
    id: 10,
    name: 'Zalo',
    handle: '0352032375',
    link: 'https://zalo.me/0352032375',
    icon: <SiZalo size={40} />,
    color: '#0068FF',
    description: 'Nhắn tin hoặc gọi điện trực tiếp qua Zalo.',
    followers: 'Contact Me',
    statLabel: 'Via Zalo',
    category: 'Liên hệ'
  }
];

export const contactInfo = {
  email: 'pcv.fed@gmail.com',
  phone: '0352032375',
  location: 'TP. Hồ Chí Minh, Việt Nam',
  website: 'https://vinhdev04.github.io'
};
