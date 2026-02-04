import React, { useState } from 'react';
import { Typography, Row, Col, Card, Tag, Button, Empty } from 'antd';
import { motion } from 'framer-motion';
import ProjectModal from '../components/ProjectModal';

const { Title, Paragraph } = Typography;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(3);

  const projects = [
    {
      title: 'FinTrack Dashboard',
      subtitle: 'Nền Tảng Phân Tích Tài Chính Thời Gian Thực',
      description: 'Công cụ trực quan hóa tài chính toàn diện cho phép người dùng theo dõi chi tiêu theo thời gian thực. Xây dựng với Next.js và Supabase.',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
      category: 'Web Apps',
      image: 'https://via.placeholder.com/600x400/112240/64ffda?text=FinTrack',
      role: 'Lead Frontend Engineer',
      timeline: '2 Tháng',
      challenge: 'Khách hàng cần một bảng điều khiển có thể xử lý hàng ngàn giao dịch mỗi giây mà không bị lag. Thách thức chính là tối ưu hóa hiệu suất render của các tập dữ liệu lớn và đảm bảo cập nhật thời gian thực qua WebSockets.',
      solution: 'Đã triển khai ảo hóa (virtualization) cho các danh sách dài để duy trì cuộn 60fps. Sử dụng Supabase Realtime để cập nhật dữ liệu tức thì và Recharts cho trực quan hóa dữ liệu hiệu suất cao. Thêm chế độ tối/sáng để trải nghiệm người dùng tốt hơn.',
      features: [
        { title: 'Cập nhật Thời gian thực', desc: 'Phản ánh tức thì các thay đổi dữ liệu trên tất cả các client đang kết nối.' },
        { title: 'Trực quan hóa Dữ liệu', desc: 'Biểu đồ và đồ thị tương tác để theo dõi chi tiêu.' },
        { title: 'Phân quyền Truy cập', desc: 'Bảng điều khiển admin và người dùng bảo mật với các quyền khác nhau.' },
        { title: 'Xuất Báo cáo', desc: 'Chức năng xuất PDF và CSV chỉ với một cú nhấp chuột.' }
      ],
      demoLink: 'https://demo.fintrack.com',
      repoLink: 'https://github.com/username/fintrack'
    },
    {
      title: 'E-Commerce API',
      subtitle: 'Backend Mở Rộng Cho Bán Lẻ Trực Tuyến',
      description: 'API RESTful hiệu suất cao được thiết kế cho các cửa hàng trực tuyến lưu lượng lớn, với tính năng caching nâng cao bằng Redis.',
      tags: ['Node.js', 'Docker', 'Redis', 'PostgreSQL'],
      category: 'Open Source',
      image: 'https://via.placeholder.com/600x400/112240/64ffda?text=API',
      role: 'Backend Developer',
      timeline: '4 Tuần',
      challenge: 'Xử lý các yêu cầu đồng thời trong các đợt bán hàng flash sale là một nút thắt cổ chai. Các truy vấn cơ sở dữ liệu chậm và thời gian phản hồi máy chủ tăng lên khi chịu tải.',
      solution: 'Triển khai caching Redis cho dữ liệu sản phẩm thường xuyên truy cập, giảm tải cơ sở dữ liệu xuống 40%. Sử dụng Docker để container hóa nhằm đảm bảo môi trường nhất quán và dễ dàng mở rộng. Tối ưu hóa các truy vấn SQL và thêm indexing.',
      features: [
        { title: 'Redis Caching', desc: 'Thời gian phản hồi dưới mili giây cho dữ liệu được cache.' },
        { title: 'Rate Limiting', desc: 'Bảo vệ chống lại các cuộc tấn công DDoS và lạm dụng API.' },
        { title: 'Tích hợp Thanh toán', desc: 'Tích hợp cổng thanh toán an toàn Stripe và PayPal.' },
        { title: 'Kiểm thử Tự động', desc: 'Bộ kiểm thử đơn vị và tích hợp đầy đủ với Jest.' }
      ],
      demoLink: 'https://api.ecommerce.com/docs',
      repoLink: 'https://github.com/username/ecommerce-api'
    },
    {
      title: 'TaskFlow Mobile',
      subtitle: 'Ứng Dụng Năng Suất Tối Giản',
      description: 'Ứng dụng di động năng suất tập trung vào điều hướng bằng cử chỉ và giao diện người dùng tối giản. Xây dựng với React Native.',
      tags: ['React Native', 'Figma', 'Firebase'],
      category: 'Web Apps',
      image: 'https://placehold.co/600x400/112240/64ffda?text=TaskFlow',
      role: 'Mobile Developer',
      timeline: '3 Tháng',
      challenge: 'Tạo ra một hệ thống điều hướng bằng cử chỉ độc đáo cảm thấy trực quan và mượt mà trên cả thiết bị iOS và Android.',
      solution: 'Sử dụng React Native Reanimated cho xử lý cử chỉ phức tạp và hoạt hình mượt mà. Thiết kế ngăn xếp điều hướng tùy chỉnh để hỗ trợ các tương tác vuốt độc đáo. Tích hợp Firebase để đồng bộ dữ liệu ngoại tuyến.',
      features: [
        { title: 'Điều hướng Cử chỉ', desc: 'Các cử chỉ vuốt trực quan cho mọi hành động.' },
        { title: 'Chế độ Ngoại tuyến', desc: 'Đầy đủ chức năng mà không cần kết nối internet.' },
        { title: 'Đồng bộ Đám mây', desc: 'Đồng bộ hóa liền mạch trên nhiều thiết bị.' },
        { title: 'Dark Mode', desc: 'Giao diện tối được tối ưu hóa cho màn hình OLED.' }
      ],
      demoLink: '#',
      repoLink: '#'
    },
    {
      title: 'AlgoVisualizer',
      subtitle: 'Công Cụ Thuật Toán Giáo Dục',
      description: 'Công cụ giáo dục tương tác để trực quan hóa các thuật toán sắp xếp và tìm đường. Giúp hơn 5,000 sinh viên học thuật toán.',
      tags: ['Vue.js', 'D3.js', 'Algorithms'],
      category: 'Open Source',
      image: 'https://placehold.co/600x400/112240/64ffda?text=Algo',
      role: 'Full Stack Developer',
      timeline: 'Dự án Cá nhân',
      challenge: 'Trực quan hóa các bước thuật toán phức tạp theo cách dễ hiểu cho người mới bắt đầu, trong khi vẫn giữ cho hoạt hình mượt mà.',
      solution: 'Sử dụng D3.js để thao tác DOM dựa trên thay đổi dữ liệu. Tạo một công cụ thực thi từng bước cho phép người dùng tạm dừng, phát và đi qua từng bước của thuật toán.',
      features: [
        { title: 'Thuật toán Sắp xếp', desc: 'Trực quan hóa Bubble, Merge, Quick, và Heap sort.' },
        { title: 'Tìm đường', desc: 'Trực quan hóa tìm đường Dijkstra và A* tương tác.' },
        { title: 'Điều khiển Tốc độ', desc: 'Tốc độ hoạt hình có thể điều chỉnh để học tập tốt hơn.' },
        { title: 'Code Walkthrough', desc: 'Làm nổi bật thực thi mã song song.' }
      ],
      demoLink: '#',
      repoLink: '#'
    },
    {
      title: 'DeFi Exchange',
      subtitle: 'Sàn Giao Dịch Token Phi Tập Trung',
      description: 'Giao diện sàn giao dịch phi tập trung cho phép người dùng hoán đổi token trên mạng Ethereum.',
      tags: ['Web3.js', 'Solidity', 'React'],
      category: 'Web Apps',
      image: 'https://via.placeholder.com/600x400/112240/64ffda?text=DeFi',
      role: 'Blockchain Developer',
      timeline: '6 Tuần',
      challenge: 'Đảm bảo an toàn giao dịch và xử lý bản chất bất đồng bộ của xác nhận blockchain mà không gây nhầm lẫn cho người dùng.',
      solution: 'Tích hợp Web3.js để tương tác hợp đồng thông minh. Triển khai cập nhật giao diện người dùng lạc quan và chỉ báo trạng thái giao dịch rõ ràng. Kiểm toán các hợp đồng thông minh cho các lỗ hổng phổ biến.',
      features: [
        { title: 'Hoán đổi Token', desc: 'Hoán đổi tức thì giữa các token ERC-20.' },
        { title: 'Kết nối Ví', desc: 'Hỗ trợ MetaMask và WalletConnect.' },
        { title: 'Giá Trực tiếp', desc: 'Nguồn cấp dữ liệu giá thời gian thực từ Chainlink oracles.' },
        { title: 'Liquidity Pools', desc: 'Giao diện để thêm/xóa thanh khoản.' }
      ],
      demoLink: '#',
      repoLink: '#'
    },
    {
      title: 'Nexus Landing Page',
      subtitle: 'Landing Page SaaS Chuyển Đổi Cao',
      description: 'Landing page đoạt giải thưởng cho một startup SaaS. Tập trung vào tỷ lệ chuyển đổi cao thông qua thiết kế UX chiến lược.',
      tags: ['HTML5', 'GSAP', 'CSS3'],
      category: 'UI/UX',
      image: 'https://placehold.co/600x400/112240/64ffda?text=Nexus',
      role: 'Frontend Developer',
      timeline: '2 Tuần',
      challenge: 'Tạo các hoạt hình kích hoạt khi cuộn phức tạp mà không ảnh hưởng đến tốc độ tải trang và SEO.',
      solution: 'Sử dụng GSAP cho các hoạt hình hiệu suất cao và Intersection Observers để kích hoạt chúng. Tối ưu hóa tài nguyên và sử dụng lazy loading để đảm bảo điểm Lighthouse 95+.',
      features: [
        { title: 'Hoạt hình Cuộn', desc: 'Hiệu ứng xuất hiện hấp dẫn khi cuộn.' },
        { title: 'Thiết kế Đáp ứng', desc: 'Tối ưu hóa hoàn hảo cho di động và máy tính để bàn.' },
        { title: 'Tối ưu SEO', desc: 'HTML ngữ nghĩa và thẻ meta được tối ưu hóa.' },
        { title: 'Tải Nhanh', desc: 'First Contentful Paint dưới một giây.' }
      ],
      demoLink: '#',
      repoLink: '#'
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ padding: '50px 0' }}
    >
      <div style={{ textAlign: 'center', marginBottom: 50 }}>
        <Title level={1} style={{ color: '#ccd6f6' }}>Thư Viện Dự Án</Title>
        <Paragraph style={{ color: '#8892b0', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto' }}>
          Một bộ sưu tập được chọn lọc các dự án kỹ thuật, đóng góp mã nguồn mở và thử nghiệm giao diện người dùng được thiết kế để giải quyết các vấn đề thực tế.
        </Paragraph>
        
        <div style={{ marginTop: 30 }}>
            {['All', 'Web Apps', 'Open Source', 'UI/UX'].map(cat => (
              <Button 
                key={cat}
                type={filter === cat ? 'primary' : 'default'}
                ghost={filter !== cat}
                onClick={() => { setFilter(cat); setVisibleCount(3); }}
                style={{ 
                  marginRight: 10, 
                  marginBottom: 10,
                  background: filter === cat ? '#3b82f6' : 'transparent',
                  color: filter === cat ? '#fff' : '#8892b0',
                  borderColor: filter === cat ? '#3b82f6' : '#233554'
                }}
              >
                {cat}
              </Button>
            ))}
        </div>
      </div>

      <Row gutter={[24, 24]}>
        {displayedProjects.length > 0 ? (
          displayedProjects.map((project, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <motion.div
                  layout
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
              >
                  <Card
                  hoverable
                  onClick={() => setSelectedProject(project)}
                  cover={<img alt={project.title} src={project.image} style={{ height: 200, objectFit: 'cover' }} />}
                  style={{ background: '#112240', border: 'none', borderRadius: 12, overflow: 'hidden' }}
                  styles={{ body: { padding: 24 } }}
                  >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                     <Tag color="#233554" style={{ color: '#64ffda', border: 'none', margin: 0 }}>{project.category}</Tag>
                  </div>
                  <Title level={4} style={{ color: '#ccd6f6', marginTop: 0 }}>{project.title}</Title>
                  <Paragraph ellipsis={{ rows: 3 }} style={{ color: '#8892b0', minHeight: 66 }}>
                      {project.description}
                  </Paragraph>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 15 }}>
                      {project.tags.slice(0, 3).map(tag => (
                      <Tag key={tag} color="transparent" style={{ color: '#8892b0', border: '1px solid #233554' }}>
                          {tag}
                      </Tag>
                      ))}
                      {project.tags.length > 3 && <Tag color="transparent" style={{ color: '#8892b0', border: '1px solid #233554' }}>+{project.tags.length - 3}</Tag>}
                  </div>
                  </Card>
              </motion.div>
            </Col>
          ))
        ) : (
          <Col span={24}>
            <Empty description={<span style={{ color: '#8892b0' }}>Không tìm thấy dự án nào trong danh mục này.</span>} />
          </Col>
        )}
      </Row>

      {visibleCount < filteredProjects.length && (
        <div style={{ textAlign: 'center', marginTop: 50 }}>
            <Button 
              size="large" 
              ghost 
              onClick={handleLoadMore}
              style={{ color: '#64ffda', borderColor: '#64ffda' }}
            >
                Xem Thêm Dự Án
            </Button>
        </div>
      )}

      <ProjectModal 
        project={selectedProject} 
        visible={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </motion.div>
  );
};

export default Projects;
