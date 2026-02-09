import responsiveCert from '@/assets/images/certification/responsive.png';
import geminiCert from '@/assets/images/certification/geminiCertifiedStudent.pdf';
import geminiImg from '@/assets/images/certification/geminiCertificateStudent.png';
import geminiEducatorImg from '@/assets/images/certification/geminiCertificateEducator.png';

export const certificates = [
    {
      title: 'Gemini Certified Educator',
      issuer: 'Google for Education',
      date: '2026',
      description: 'Chứng nhận khả năng ứng dụng Gemini và AI để nâng cao hiệu quả giảng dạy và học tập.',
      skills: ['AI in Education', 'Gemini', 'Teaching Innovation'],
      link: 'https://pdf.credential.net/07vqqwtr_1770648679165.pdf',
      image: geminiEducatorImg,
      level: 'Professional',
      color: '#4285f4'
    },
    {
      title: 'Gemini Certified Student',
      issuer: 'Google',
      date: '2024',
      description: 'Chứng chỉ công nhận khả năng ứng dụng Gemini để giải quyết vấn đề và tối ưu hóa quy trình phát triển phần mềm.',
      skills: ['Generative AI', 'Prompt Engineering', 'Gemini'],
      link: 'https://pdf.credential.net/58wzpusb_1770647337317.pdf',
      image: geminiImg,
      level: 'Advanced',
      color: '#8b5cf6'
    },
    {
      title: 'Responsive Web Design',
      issuer: 'FreeCodeCamp',
      date: '2021',
      description: 'Chứng chỉ về thiết kế web đáp ứng sử dụng HTML5 và CSS3 hiện đại.',
      skills: ['Responsive Design', 'CSS Grid', 'Flexbox'],
      link: 'https://www.freecodecamp.org/certification/fcc3ceb7e9c-b01f-488e-a485-459e145e2ffb/responsive-web-design',
      level: 'Intermediate',
      color: '#f59e0b',
      image: responsiveCert
    },
    {
      title: 'Meta Frontend Developer Professional Certificate',
      issuer: 'Coursera - Meta',
      date: '2023',
      description: 'Chứng chỉ chuyên nghiệp xác nhận kỹ năng chuyên sâu về React, JavaScript và Frontend Development.',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'UI/UX'],
      link: '#',
      level: 'Professional',
      color: '#3b82f6'
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'Udemy',
      date: '2022',
      description: 'Khóa học toàn diện về xây dựng ứng dụng web với MERN Stack (MongoDB, Express, React, Node.js).',
      skills: ['Node.js', 'Express', 'MongoDB', 'REST API'],
      link: '#',
      level: 'Advanced',
      color: '#10b981'
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'FreeCodeCamp',
      date: '2022',
      description: 'Thành thạo các cấu trúc dữ liệu cơ bản và giải thuật trong JavaScript.',
      skills: ['Algorithms', 'Data Structures', 'JavaScript'],
      link: '#',
      level: 'Intermediate',
      color: '#a855f7'
    }
  ];
