export const projects = [
    {
      title: 'FinTrack Dashboard',
      subtitle: 'Nền Tảng Phân Tích Tài Chính Thời Gian Thực',
      description: 'Công cụ trực quan hóa tài chính toàn diện cho phép người dùng theo dõi chi tiêu theo thời gian thực. Xây dựng với Next.js và Supabase.',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
      category: 'Web Apps',
      image: 'https://placehold.co/600x400/112240/64ffda?text=FinTrack',
      role: 'Lead Frontend Engineer',
      timeline: '2 Tháng',
      challenge: 'Khách hàng cần một bảng điều khiển có thể xử lý hàng ngàn giao dịch mỗi giây mà không bị lag.',
      solution: 'Đã triển khai ảo hóa cho các danh sách dài để duy trì cuộn 60fps. Sử dụng Supabase Realtime cho cập nhật dữ liệu tức thì.',
      features: [
        { title: 'Cập nhật Thời gian thực', desc: 'Phản ánh tức thì các thay đổi dữ liệu trên tất cả các client.' },
        { title: 'Trực quan hóa Dữ liệu', desc: 'Biểu đồ và đồ thị tương tác để theo dõi chi tiêu.' },
        { title: 'Phân quyền Truy cập', desc: 'Bảng điều khiển admin và người dùng với các quyền khác nhau.' },
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
      image: 'https://placehold.co/600x400/112240/64ffda?text=API',
      role: 'Backend Developer',
      timeline: '4 Tuần',
      challenge: 'Xử lý các yêu cầu đồng thời trong các đợt bán hàng flash sale.',
      solution: 'Triển khai caching Redis cho dữ liệu sản phẩm thường xuyên truy cập, giảm tải cơ sở dữ liệu xuống 40%.',
      features: [
        { title: 'Redis Caching', desc: 'Thời gian phản hồi dưới mili giây cho dữ liệu được cache.' },
        { title: 'Rate Limiting', desc: 'Bảo vệ chống lại các cuộc tấn công DDoS.' },
        { title: 'Tích hợp Thanh toán', desc: 'Stripe và PayPal an toàn.' },
        { title: 'Kiểm thử Tự động', desc: 'Bộ kiểm thử đầy đủ với Jest.' }
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
      challenge: 'Tạo ra một hệ thống điều hướng bằng cử chỉ độc đáo cảm thấy trực quan và mượt mà.',
      solution: 'Sử dụng React Native Reanimated cho xử lý cử chỉ phức tạp và hoạt hình mượt mà.',
      features: [
        { title: 'Điều hướng Cử chỉ', desc: 'Các cử chỉ vuốt trực quan.' },
        { title: 'Chế độ Ngoại tuyến', desc: 'Đầy đủ chức năng không cần internet.' },
        { title: 'Đồng bộ Đám mây', desc: 'Đồng bộ liền mạch trên nhiều thiết bị.' },
        { title: 'Dark Mode', desc: 'Giao diện tối được tối ưu hóa.' }
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
      challenge: 'Trực quan hóa các bước thuật toán phức tạp theo cách dễ hiểu.',
      solution: 'Sử dụng D3.js để thao tác DOM dựa trên thay đổi dữ liệu.',
      features: [
        { title: 'Thuật toán Sắp xếp', desc: 'Bubble, Merge, Quick, và Heap sort.' },
        { title: 'Tìm đường', desc: 'Dijkstra và A* tương tác.' },
        { title: 'Điều khiển Tốc độ', desc: 'Tốc độ hoạt hình có thể điều chỉnh.' },
        { title: 'Code Walkthrough', desc: 'Làm nổi bật thực thi mã.' }
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
      image: 'https://placehold.co/600x400/112240/64ffda?text=DeFi',
      role: 'Blockchain Developer',
      timeline: '2 Tháng',
      challenge: 'Đảm bảo an toàn giao dịch và tương tác mượt mà với ví Metamask.',
      solution: 'Tích hợp Ethers.js và tối ưu hóa gas fee cho smart contracts.',
      features: [
        { title: 'Swap Token', desc: 'Giao dịch ERC-20 tokens.' },
        { title: 'Liquidity Pool', desc: 'Cung cấp thanh khoản và nhận thưởng.' },
        { title: 'Wallet Connect', desc: 'Hỗ trợ Metamask, WalletConnect.' },
        { title: 'Real-time Price', desc: 'Cập nhật giá token theo thời gian thực.' }
      ],
      demoLink: '#',
      repoLink: '#'
    }
  ];
