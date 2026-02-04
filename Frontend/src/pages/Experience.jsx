import React from 'react';
import { Typography, Card, Tag } from 'antd';
import { motion } from 'framer-motion';

const { Title, Text, Paragraph } = Typography;

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Frontend Engineer',
      company: 'TechCorp Solutions',
      date: '2021 - Hiện tại',
      color: '#3b82f6',
      responsibilities: [
        'Thiết kế và dẫn dắt phát triển dashboard micro-frontend phục vụ hơn 50k người dùng hàng ngày.',
        'Cải thiện điểm Core Web Vitals thêm 40% thông qua code splitting và tối ưu hóa tài nguyên.',
        'Hướng dẫn nhóm 4 lập trình viên trẻ và thiết lập các hướng dẫn review code.'
      ]
    },
    {
      title: 'UI Developer',
      company: 'Creative StartUp Inc',
      date: '2019 - 2021',
      color: '#d946ef', // Pinkish/Purple
      responsibilities: [
        'Phát triển và duy trì hệ thống thiết kế đa nền tảng được sử dụng trên 3 sản phẩm chính.',
        'Hợp tác chặt chẽ với các nhà thiết kế UX để chuyển đổi các bản thiết kế Figma thành các component React hoàn hảo.',
        'Triển khai các tiêu chuẩn truy cập WCAG 2.1 AA trên toàn bộ trang web tiếp thị chính.'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'Digital Agency XY',
      date: '2018 - 2019',
      color: '#10b981', // Green
      responsibilities: [
        'Xây dựng các trang landing page đáp ứng cho nhiều khách hàng khác nhau sử dụng HTML5, SCSS và JavaScript.',
        'Tối ưu hóa các trang web khách hàng hiện có để đáp ứng di động và SEO.',
        'Hỗ trợ các nhiệm vụ tích hợp backend sử dụng PHP và MySQL.'
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ padding: '50px 0', maxWidth: 1000, margin: '0 auto' }}
    >
      <Title level={2} style={{ color: '#ccd6f6', marginBottom: 50 }}>Kinh Nghiệm</Title>
      
      <div style={{ position: 'relative', paddingLeft: 30 }}>
        {/* Vertical Line */}
        <div style={{ 
          position: 'absolute', 
          left: 7, 
          top: 10, 
          bottom: 10, 
          width: 2, 
          background: '#233554' 
        }}></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            style={{ marginBottom: 50, position: 'relative' }}
          >
            {/* Dot */}
            <div style={{ 
              position: 'absolute', 
              left: -30, 
              top: 5, 
              width: 16, 
              height: 16, 
              borderRadius: '50%', 
              background: exp.color,
              boxShadow: `0 0 0 4px rgba(${parseInt(exp.color.slice(1,3), 16)}, ${parseInt(exp.color.slice(3,5), 16)}, ${parseInt(exp.color.slice(5,7), 16)}, 0.2)`
            }}></div>

            <Card 
              style={{ background: '#112240', border: 'none', borderRadius: 12 }}
              bodyStyle={{ padding: 30 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: 20 }}>
                <div>
                    <Title level={3} style={{ color: '#ccd6f6', margin: 0 }}>{exp.title}</Title>
                    <Text style={{ color: '#8892b0', fontSize: '1.1rem' }}>{exp.company}</Text>
                </div>
                <Tag color="#233554" style={{ 
                    color: '#ccd6f6', 
                    border: '1px solid #3b82f6', 
                    padding: '5px 15px', 
                    fontSize: '0.9rem',
                    borderRadius: 20
                }}>
                    {exp.date}
                </Tag>
              </div>

              <ul style={{ paddingLeft: 20, color: '#8892b0', fontSize: '1rem', lineHeight: 1.8 }}>
                {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} style={{ marginBottom: 10 }}>{resp}</li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
