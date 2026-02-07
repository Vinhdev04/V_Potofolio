export const blogPosts = [
  {
    id: 1,
    title: 'Tối ưu hóa React Performance',
    excerpt: 'Những kỹ thuật quan trọng để cải thiện hiệu suất ứng dụng React của bạn: Memoization, Lazy Loading, và Code Splitting.',
    date: '2023-10-15',
    readTime: '5 min read',
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    content: `
      <p>React là một thư viện mạnh mẽ, nhưng nếu không chú ý đến hiệu suất, ứng dụng của bạn có thể trở nên chậm chạp. Dưới đây là các kỹ thuật quan trọng:</p>
      <h3>1. Memoization với React.memo, useMemo và useCallback</h3>
      <p>Tránh việc render lại không cần thiết bằng cách ghi nhớ các component và giá trị tính toán.</p>
      <h3>2. Lazy Loading</h3>
      <p>Sử dụng React.lazy và Suspense để chỉ tải các component khi cần thiết, giảm thời gian tải trang ban đầu.</p>
      <h3>3. Code Splitting</h3>
      <p>Chia nhỏ bundle của bạn thành các phần nhỏ hơn để trình duyệt có thể tải song song.</p>
    `
  },
  {
    id: 2,
    title: 'Clean Code trong JavaScript',
    excerpt: 'Tại sao Clean Code lại quan trọng? Các quy tắc đặt tên biến, hàm và cấu trúc code để dễ bảo trì.',
    date: '2023-11-02',
    readTime: '7 min read',
    category: 'Coding Standard',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    content: `
      <p>Clean Code không chỉ là viết code cho máy chạy, mà là viết cho con người đọc.</p>
      <h3>1. Đặt tên biến có ý nghĩa</h3>
      <p>Thay vì <code>const d = 10;</code>, hãy dùng <code>const daysSinceCreation = 10;</code>.</p>
      <h3>2. Hàm nên làm một việc duy nhất</h3>
      <p>Nguyên tắc Single Responsibility Principle (SRP) giúp hàm dễ test và bảo trì hơn.</p>
    `
  },
  {
    id: 3,
    title: 'Lộ trình Fullstack Developer 2024',
    excerpt: 'Những công nghệ cần học để trở thành Fullstack Developer: Frontend, Backend, DevOps và Soft Skills.',
    date: '2023-12-20',
    readTime: '10 min read',
    category: 'Career',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    content: `
      <p>Trở thành Fullstack Developer là một hành trình dài. Dưới đây là lộ trình gợi ý:</p>
      <h3>Frontend</h3>
      <p>HTML, CSS, JavaScript, React/Vue/Angular.</p>
      <h3>Backend</h3>
      <p>Node.js, Python, Go, Database (SQL & NoSQL).</p>
      <h3>DevOps</h3>
      <p>Docker, CI/CD, AWS/Azure.</p>
    `
  }
];

export const tiktokVideos = [
  {
    id: 1,
    title: 'Javascript 2025 có gì mới?',
    videoId: '7589092325414980865',
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=600&fit=crop',
    views: '10.5K',
    link: 'https://www.tiktok.com/@devcraftt/video/7589092325414980865?is_from_webapp=1&sender_device=pc&web_id=7576100077330253320'
  },
  {
    id: 2,
    title: 'useCallback – Tối ưu hiệu năng React',
    videoId: '7592928609245924609',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=600&fit=crop',
    views: '8.2K',
    link: 'https://www.tiktok.com/@devcraftt/video/7592928609245924609?is_from_webapp=1&sender_device=pc&web_id=7576100077330253320'
  },
  {
    id: 3,
    title: 'Làm chủ useContext - Props Drilling',
    videoId: '7592927546132483345',
    thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=600&fit=crop',
    views: '15.1K',
    link: 'https://www.tiktok.com/@devcraftt/video/7592927546132483345?is_from_webapp=1&sender_device=pc&web_id=7576100077330253320'
  },
  {
    id: 4,
    title: 'npm, pnpm hay yarn?',
    videoId: '7591434813689580801',
    thumbnail: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=600&fit=crop',
    views: '12K',
    link: 'https://www.tiktok.com/@devcraftt/video/7591434813689580801?is_from_webapp=1&sender_device=pc&web_id=7576100077330253320'
  }
];
