export const blogPosts = [
  {
    id: 1,
    title: 'Tối ưu hóa React Performance',
    excerpt: 'Những kỹ thuật quan trọng để cải thiện hiệu suất ứng dụng React của bạn: Memoization, Lazy Loading, và Code Splitting.',
    date: '2023-10-15',
    readTime: '5 min read',
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tiktokId: 2,
    tags: ['react', 'js'],
    level: 'Nâng cao',
    isStructured: true,
    content: [
      {
        type: 'header',
        badge: 'React Mastery',
        title_parts: [
          { text: 'Tối ưu hóa ', gradient: '' },
          { text: 'React Performance', gradient: 'from-cyan-400 to-blue-600' }
        ],
        description: 'Đưa ứng dụng React của bạn lên tầm cao mới với các kỹ thuật tối ưu hóa hiệu suất chuyên sâu.'
      },
      {
        type: 'grid',
        title: 'Kỹ thuật then chốt',
        items: [
          {
            title: 'Memoization',
            description: 'Ghi nhớ các giá trị và component để tránh render thừa.',
            theme_gradient: 'from-blue-400 to-indigo-500',
            icon: 'hard-drive',
            icon_bg: 'bg-blue-50',
            icon_color: 'text-blue-600',
            blocks: [
              {
                type: 'app',
                title: 'Công cụ',
                bg: 'bg-blue-50/50',
                border: 'border-blue-100',
                title_color: 'text-blue-900',
                text_color: 'text-blue-800',
                list: ['React.memo', 'useMemo', 'useCallback']
              }
            ]
          },
          {
            title: 'Lazy Loading',
            description: 'Chỉ tải code khi người dùng thực sự cần đến.',
            theme_gradient: 'from-purple-400 to-pink-500',
            icon: 'clock',
            icon_bg: 'bg-purple-50',
            icon_color: 'text-purple-600',
            blocks: [
              {
                type: 'feature',
                title: 'Thực thi',
                bg: 'bg-purple-50/50',
                border: 'border-purple-100',
                title_color: 'text-purple-900',
                text_color: 'text-purple-800',
                list: ['React.lazy', 'Suspense component']
              }
            ]
          },
          {
            title: 'Code Splitting',
            description: 'Chia nhỏ bundle để tăng tốc độ tải trang ban đầu.',
            theme_gradient: 'from-orange-400 to-amber-500',
            icon: 'cookie',
            icon_bg: 'bg-orange-50',
            icon_color: 'text-orange-600',
            blocks: [
              {
                type: 'security',
                title: 'Lợi ích',
                bg: 'bg-green-50/50',
                border: 'border-green-100',
                title_color: 'text-green-900',
                text_color: 'text-green-800',
                list: ['Giảm Initial Bundle Size', 'Tăng điểm Core Web Vitals']
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Clean Code trong JavaScript',
    excerpt: 'Tại sao Clean Code lại quan trọng? Các quy tắc đặt tên biến, hàm và cấu trúc code để dễ bảo trì.',
    date: '2023-11-02',
    readTime: '7 min read',
    category: 'Coding Standard',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['js'],
    level: 'Trung bình',
    isStructured: true,
    content: [
      {
        type: 'header',
        badge: 'Software Craftsmanship',
        title_parts: [
          { text: 'Nghệ thuật ', gradient: '' },
          { text: 'Clean Code', gradient: 'from-emerald-500 to-teal-700' },
          { text: 'trong JavaScript', gradient: '' }
        ],
        description: 'Viết mã không chỉ để máy chạy, mà để con người có thể hiểu và bảo trì.'
      },
      {
        type: 'grid',
        title: 'Quy tắc vàng',
        items: [
          {
            title: 'Naming',
            description: 'Tên gọi là linh hồn của biến và hàm.',
            theme_gradient: 'from-emerald-400 to-teal-600',
            icon: 'hard-drive',
            icon_bg: 'bg-emerald-50',
            icon_color: 'text-emerald-600',
            blocks: [
              {
                type: 'app',
                title: 'Quy tắc',
                bg: 'bg-emerald-50/50',
                border: 'border-emerald-100',
                title_color: 'text-emerald-900',
                text_color: 'text-emerald-800',
                list: ['Rõ ràng, mang tính mô tả', 'Tránh tên viết tắt vô nghĩa', 'Sử dụng camelCase']
              }
            ]
          },
          {
            title: 'Functions',
            description: 'Hàm nên làm một việc và làm thật tốt việc đó.',
            theme_gradient: 'from-blue-400 to-cyan-500',
            icon: 'clock',
            icon_bg: 'bg-blue-50',
            icon_color: 'text-blue-600',
            blocks: [
              {
                type: 'feature',
                title: 'SRP Principle',
                bg: 'bg-blue-50/50',
                border: 'border-blue-100',
                title_color: 'text-blue-900',
                text_color: 'text-blue-800',
                list: ['Single Responsibility', 'Hàm ngắn gọn (dưới 20 dòng)', 'Ít tham số đầu vào']
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Lộ trình Fullstack Developer 2024',
    excerpt: 'Những công nghệ cần học để trở thành Fullstack Developer: Frontend, Backend, DevOps và Soft Skills.',
    date: '2023-12-20',
    readTime: '10 min read',
    category: 'Career',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tiktokId: 4,
    tags: ['html', 'css', 'js', 'react'],
    level: 'Cơ bản',
    isStructured: true,
    content: [
      {
        type: 'header',
        badge: 'Career Path 2024',
        title_parts: [
          { text: 'Lộ trình ', gradient: '' },
          { text: 'Fullstack Developer', gradient: 'from-violet-600 to-indigo-600' }
        ],
        description: 'Bản đồ toàn diện để chinh phục thế giới lập trình từ con số 0.'
      },
      {
        type: 'grid',
        title: 'Các trụ cột chính',
        items: [
          {
            title: 'Frontend',
            description: 'Giao diện và trải nghiệm người dùng.',
            theme_gradient: 'from-violet-400 to-fuchsia-500',
            icon: 'hard-drive',
            icon_bg: 'bg-violet-50',
            icon_color: 'text-violet-600',
            blocks: [
              {
                type: 'app',
                title: 'Công nghệ',
                bg: 'bg-violet-50/50',
                border: 'border-violet-100',
                title_color: 'text-violet-900',
                text_color: 'text-violet-800',
                list: ['HTML5, CSS3, JS (ES6+)', 'React / Vue / Angular', 'Tailwind CSS / Ant Design']
              }
            ]
          },
          {
            title: 'Backend',
            description: 'Xử lý logic, database và server.',
            theme_gradient: 'from-indigo-400 to-blue-500',
            icon: 'clock',
            icon_bg: 'bg-indigo-50',
            icon_color: 'text-indigo-600',
            blocks: [
              {
                type: 'feature',
                title: 'Nền tảng',
                bg: 'bg-indigo-50/50',
                border: 'border-indigo-100',
                title_color: 'text-indigo-900',
                text_color: 'text-indigo-800',
                list: ['Node.js / Python / Go', 'SQL (Postgres) / NoSQL (Mongo)', 'REST API / GraphQL']
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Giải Ngố CSS Box Model - "Trùm Cuối" Phỏng Vấn Frontend',
    excerpt: 'Bạn đã bao giờ set width: 100px cho một thẻ div, nhưng khi chạy lên nó lại to chà bá chưa? Nếu rồi, thì chào mừng bạn đến với cú lừa đầu đời mang tên CSS Box Model.',
    date: '2024-03-22',
    readTime: '5 min read',
    category: 'CSS Cơ Bản',
    image: 'https://images.unsplash.com/photo-1505322022379-7c3353ee6291?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tiktokId: 5,
    tags: ['css', 'html'],
    level: 'Cơ bản',
    isStructured: true,
    content: [
      {
        type: 'header',
        badge: 'CSS Master Series',
        title_parts: [
          { text: 'Giải Ngố ', gradient: '' },
          { text: 'CSS Box Model', gradient: 'from-pink-500 to-rose-500' }
        ],
        description: 'Bạn đã bao giờ set width: 100px cho một thẻ div, nhưng khi chạy lên nó lại to chà bá chưa? Nếu rồi, thì chào mừng bạn đến với cú lừa đầu đời mang tên CSS Box Model.'
      },
      {
        type: 'grid',
        title: 'Cấu phẫu một chiếc "Hộp"',
        items: [
          {
            title: 'Content & Padding',
            description: 'Phần lõi và lớp đệm bảo vệ bên trong.',
            theme_gradient: 'from-blue-500 to-indigo-600',
            icon: 'hard-drive',
            icon_bg: 'bg-blue-100',
            icon_color: 'text-blue-600',
            blocks: [
              {
                type: 'app',
                title: 'Content (Lõi)',
                bg: 'bg-blue-50/50',
                border: 'border-blue-100',
                title_color: 'text-blue-900',
                text_color: 'text-blue-800',
                list: ['Nơi chứa nội dung thực sự', 'Width/Height quyết định kích thước này']
              },
              {
                type: 'feature',
                title: 'Padding (Lớp đệm)',
                bg: 'bg-green-50/50',
                border: 'border-green-100',
                title_color: 'text-green-900',
                text_color: 'text-green-800',
                list: ['Khoảng cách giữa Content và Border', 'Background lan ra tận đây']
              }
            ]
          },
          {
            title: 'Border & Margin',
            description: 'Đường viền và khoảng cách với bên ngoài.',
            theme_gradient: 'from-purple-500 to-pink-500',
            icon: 'clock',
            icon_bg: 'bg-purple-100',
            icon_color: 'text-purple-600',
            blocks: [
              {
                type: 'app',
                title: 'Border (Đường viền)',
                bg: 'bg-yellow-50/50',
                border: 'border-yellow-100',
                title_color: 'text-yellow-900',
                text_color: 'text-yellow-800',
                list: ['Ranh giới của chiếc hộp']
              },
              {
                type: 'warn',
                title: 'Margin (Khoảng cách)',
                bg: 'bg-orange-50/50',
                border: 'border-orange-100',
                title_color: 'text-orange-900',
                text_color: 'text-orange-800',
                list: ['Không gian bên ngoài cùng', 'Dùng để đẩy các hộp ra xa nhau']
              }
            ]
          },
          {
            title: 'box-sizing',
            description: 'Quyết định cách tính tổng kích thước hộp.',
            theme_gradient: 'from-teal-400 to-emerald-500',
            icon: 'cookie',
            icon_bg: 'bg-teal-100',
            icon_color: 'text-teal-600',
            blocks: [
              {
                type: 'security',
                title: 'border-box (Khuyên dùng)',
                bg: 'bg-green-50/50',
                border: 'border-green-100',
                title_color: 'text-green-900',
                text_color: 'text-green-800',
                list: ['Tổng kích thước cố định', 'Padding/Border nằm bên trong']
              }
            ]
          }
        ]
      },
      {
        type: 'closing',
        text: 'Làm chủ Box Model là bước đầu tiên để trở thành Master CSS!'
      }
    ]
  },
  {
    id: 5,
    title: 'Ngữ Nghĩa Học Trong HTML & Kiến Trúc Trải Nghiệm Web Hiện Đại',
    excerpt: 'Phân tích tác động toàn diện từ SEO, Khả năng tiếp cận đến sự sẵn sàng cho kỷ nguyên AI thông qua Semantic HTML.',
    date: '2024-03-23',
    readTime: '8 min read',
    category: 'HTML Ngữ Nghĩa',
    image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['html'],
    level: 'Trung bình',
    isStructured: true,
    content: [
      {
        type: 'header',
        badge: 'Semantic Web Architecture',
        title_parts: [
          { text: 'Ngữ Nghĩa Học Trong ', gradient: '' },
          { text: 'HTML & Trải Nghiệm Web', gradient: 'from-teal-600 to-emerald-600' }
        ],
        description: 'Phân tích tác động toàn diện từ SEO, Khả năng tiếp cận đến sự sẵn sàng cho kỷ nguyên AI thông qua Semantic HTML.'
      },
      {
        type: 'grid',
        title: 'Triết lý & Thực thi',
        items: [
          {
            title: 'Nền tảng triết học',
            description: 'Ngữ nghĩa biểu thị ý nghĩa nội tại của mã, tách biệt khỏi hiển thị.',
            theme_gradient: 'from-blue-500 to-indigo-600',
            icon: 'hard-drive',
            icon_bg: 'bg-blue-100',
            icon_color: 'text-blue-600',
            blocks: [
              {
                type: 'app',
                title: 'HTML5 Landmark',
                bg: 'bg-blue-50/50',
                border: 'border-blue-100',
                title_color: 'text-blue-900',
                text_color: 'text-blue-800',
                list: ['<header>, <nav>, <main>', '<article>, <section>, <footer>']
              }
            ]
          },
          {
            title: 'SEO & AI',
            description: 'AI hiểu nội dung tốt hơn nhờ cấu trúc ngữ nghĩa rõ ràng.',
            theme_gradient: 'from-purple-500 to-pink-500',
            icon: 'clock',
            icon_bg: 'bg-purple-100',
            icon_color: 'text-purple-600',
            blocks: [
              {
                type: 'security',
                title: 'AI Readiness',
                bg: 'bg-green-50/50',
                border: 'border-green-100',
                title_color: 'text-green-900',
                text_color: 'text-green-700',
                text: 'Cung cấp dữ liệu đã được phân cấp sẵn cho AI và Search Engine.'
              }
            ]
          }
        ]
      },
      {
        type: 'closing',
        text: 'Sự thanh lịch của mã là trụ cột của sinh thái mạng!'
      }
    ]
  },
  {
    id: 6,
    title: 'Giải Mã DOCTYPE: "Lời Khai Báo" Quyền Lực Trong HTML',
    excerpt: 'Tại sao mọi file HTML đều phải bắt đầu bằng <!DOCTYPE html>? Tìm hiểu sự khác biệt giữa Standards Mode và Quirks Mode.',
    date: '2024-03-24',
    readTime: '4 min read',
    category: 'HTML Cơ Bản',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['html'],
    level: 'Cơ bản',
    isStructured: true,
    content: [
      {
        type: 'header',
        badge: 'HTML Deep Dive',
        title_parts: [
          { text: 'Giải Mã ', gradient: '' },
          { text: 'DOCTYPE', gradient: 'from-purple-600 to-pink-500' },
          { text: '"Lời Khai Báo" Quyền Lực', gradient: '' }
        ],
        description: 'Tại sao mọi file HTML đều phải bắt đầu bằng <!DOCTYPE html>? Tìm hiểu sự khác biệt giữa Standards Mode và Quirks Mode.'
      },
      {
        type: 'grid',
        title: 'Kiến thức cốt lõi',
        items: [
          {
            title: 'Luật chơi',
            description: 'DOCTYPE không phải là thẻ HTML, nó là hướng dẫn cho trình duyệt về phiên bản HTML đang dùng.',
            theme_gradient: 'from-indigo-500 to-purple-600',
            icon: 'hard-drive',
            icon_bg: 'bg-indigo-100',
            icon_color: 'text-indigo-600',
            blocks: [
              {
                type: 'app',
                title: 'HTML5',
                bg: 'bg-slate-50/50',
                border: 'border-slate-200',
                title_color: 'text-slate-800',
                text_color: 'text-slate-600',
                list: ['<!DOCTYPE html>']
              }
            ]
          },
          {
            title: 'Chế độ hiển thị',
            description: 'Sự khác biệt giữa việc có và không có DOCTYPE.',
            theme_gradient: 'from-red-400 to-orange-500',
            icon: 'clock',
            icon_bg: 'bg-red-100',
            icon_color: 'text-red-600',
            blocks: [
              {
                type: 'warn',
                title: 'Quirks Mode',
                bg: 'bg-red-50/50',
                border: 'border-red-100',
                title_color: 'text-red-900',
                text_color: 'text-red-700',
                list: ['Tương thích IE5', 'Sai lệch Box Model']
              },
              {
                type: 'security',
                title: 'Standards Mode',
                bg: 'bg-green-50/50',
                border: 'border-green-100',
                title_color: 'text-green-900',
                text_color: 'text-green-700',
                list: ['Chuẩn hiện đại', 'Đồng nhất trình duyệt']
              }
            ]
          },
          {
            title: 'Quy tắc vàng',
            description: 'Cách sử dụng DOCTYPE đúng cách.',
            theme_gradient: 'from-teal-400 to-emerald-500',
            icon: 'cookie',
            icon_bg: 'bg-teal-100',
            icon_color: 'text-teal-600',
            blocks: [
              {
                type: 'feature',
                title: 'Dòng số 1',
                bg: 'bg-teal-50/50',
                border: 'border-teal-100',
                title_color: 'text-teal-900',
                text_color: 'text-teal-800',
                list: ['Luôn ở dòng đầu tiên', 'Không phân biệt hoa thường']
              }
            ]
          }
        ]
      },
      {
        type: 'closing',
        text: 'Hãy luôn bắt đầu file HTML của bạn đúng cách!'
      }
    ]
  },
  {
    id: 7,
    title: 'Học HTML: Nền tảng cốt lõi - Bài 1: Doctype',
    excerpt: 'Tìm hiểu sâu hơn về DOCTYPE, tại sao nó là "lời khai báo" quan trọng nhất cho trình duyệt và cách nó ngăn chặn Quirks Mode.',
    date: '2024-03-25',
    readTime: '6 min read',
    category: 'HTML Cơ Bản',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['html'],
    level: 'Cơ bản',
    isStructured: true,
    content: [
      {
        type: 'header',
        badge: 'HTML Foundation Series',
        title_parts: [
          { text: 'Học HTML: ', gradient: '' },
          { text: 'Doctype', gradient: 'from-blue-600 to-indigo-600' },
          { text: 'Nền tảng cốt lõi', gradient: '' }
        ],
        description: 'Doctype là gì? Tại sao cần khai báo <!DOCTYPE html>? Tìm hiểu lý do đằng sau dòng code số 1 này.'
      },
      {
        type: 'grid',
        title: 'Khái niệm & Cách dùng',
        items: [
          {
            title: 'DOCTYPE là gì?',
            description: 'DOCTYPE (Document Type Declaration) không phải là một thẻ HTML. Nó là một "lời khai báo" gửi tới trình duyệt.',
            theme_gradient: 'from-blue-500 to-indigo-600',
            icon: 'hard-drive',
            icon_bg: 'bg-blue-100',
            icon_color: 'text-blue-600',
            blocks: [
              {
                type: 'app',
                title: 'Khai báo chuẩn HTML5',
                bg: 'bg-slate-900',
                border: 'border-slate-800',
                title_color: 'text-blue-400',
                text_color: 'text-slate-300',
                list: ['<!DOCTYPE html>'],
                text: 'Luôn đặt ở dòng số 1 của mọi file HTML.'
              }
            ]
          },
          {
            title: 'Tại sao cần khai báo?',
            description: 'Việc khai báo DOCTYPE quyết định cách trình duyệt "hiểu" và render trang web của bạn.',
            theme_gradient: 'from-green-500 to-teal-500',
            icon: 'clock',
            icon_bg: 'bg-green-100',
            icon_color: 'text-green-600',
            blocks: [
              {
                type: 'warn',
                title: 'Nếu THIẾU',
                bg: 'bg-red-50/50',
                border: 'border-red-100',
                title_color: 'text-red-900',
                text_color: 'text-red-700',
                list: ['Kích hoạt Quirks Mode', 'Lỗi hiển thị bố cục', 'Sai lệch font chữ & kích thước']
              },
              {
                type: 'security',
                title: 'Nếu CÓ',
                bg: 'bg-green-50/50',
                border: 'border-green-100',
                title_color: 'text-green-900',
                text_color: 'text-green-700',
                list: ['Kích hoạt Standards Mode', 'Đảm bảo hiển thị chuẩn W3C']
              }
            ]
          },
          {
            title: 'Ghi nhớ nhanh',
            description: 'Một quy tắc đơn giản nhưng cực kỳ quan trọng để bắt đầu mọi dự án web.',
            theme_gradient: 'from-orange-400 to-amber-500',
            icon: 'cookie',
            icon_bg: 'bg-orange-100',
            icon_color: 'text-orange-600',
            blocks: [
              {
                type: 'feature',
                title: '💡 Tip',
                bg: 'bg-orange-50/50',
                border: 'border-orange-100',
                title_color: 'text-orange-900',
                text_color: 'text-orange-800',
                text: 'Đừng bao giờ quên DOCTYPE nếu không muốn website của mình trông như từ những năm 90!'
              }
            ]
          }
        ]
      },
      {
        type: 'closing',
        text: 'Nắm vững nền tảng để xây dựng những trang web chuyên nghiệp!'
      }
    ]
  },
  {
    id: 8,
    title: 'Phân biệt LocalStorage, SessionStorage & Cookies',
    excerpt: 'Ba cơ chế lưu trữ dữ liệu phổ biến nhất trên trình duyệt. Hiểu rõ sự khác biệt để lựa chọn giải pháp tối ưu và an toàn nhất cho ứng dụng web của bạn.',
    date: '2024-03-26',
    readTime: '6 min read',
    category: 'Web Storage API',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tiktokId: 6,
    tags: ['js', 'web-storage'],
    level: 'Cơ bản',
    isStructured: true,
    content: [
      {
        type: 'header',
        badge: 'Web Storage API & Cơ sở dữ liệu Client',
        title_parts: [
          { text: 'Phân biệt', gradient: '' },
          { text: 'LocalStorage, SessionStorage', gradient: 'from-blue-600 via-indigo-600 to-purple-600' },
          { text: '& Cookies', gradient: 'from-orange-500 to-amber-500' }
        ],
        description: 'Ba cơ chế lưu trữ dữ liệu phổ biến nhất trên trình duyệt. Hiểu rõ sự khác biệt để lựa chọn giải pháp tối ưu và an toàn nhất cho ứng dụng web của bạn.'
      },
      {
        type: 'table',
        title: 'Bảng So Sánh Nhanh',
        headers: [
          { text: 'LocalStorage', color: 'text-blue-700' },
          { text: 'SessionStorage', color: 'text-purple-700' },
          { text: 'Cookies', color: 'text-orange-700' }
        ],
        rows: [
          {
            label: 'Dung lượng tối đa',
            cells: [
              { text: 'Lớn (~5MB - 10MB)', tag: { style: 'bg-blue-100 text-blue-800' } },
              { text: 'Lớn (~5MB)', tag: { style: 'bg-purple-100 text-purple-800' } },
              { text: 'Rất nhỏ (~4KB)', tag: { style: 'bg-orange-100 text-orange-800' } }
            ]
          },
          {
            label: 'Vòng đời (Thời gian sống)',
            cells: [
              { text: 'Vĩnh viễn (Đến khi xóa thủ công)' },
              { text: 'Tạm thời (Mất khi đóng tab/trình duyệt)' },
              { text: 'Do lập trình viên set (Có ngày hết hạn)' }
            ]
          },
          {
            label: 'Giao tiếp Server',
            cells: [
              { text: 'Không (Chỉ nằm ở Client)' },
              { text: 'Không (Chỉ nằm ở Client)' },
              { text: 'Có (Gửi kèm mỗi HTTP Request)', isServer: true }
            ]
          },
          {
            label: 'Phạm vi truy cập',
            cells: [
              { text: 'Mọi tab cùng Origin (Domain)' },
              { text: 'Chỉ tab/cửa sổ hiện tại' },
              { text: 'Mọi tab cùng Origin' }
            ]
          },
          {
            label: 'Rủi ro bảo mật',
            cells: [
              { text: 'Dễ bị XSS', security: true },
              { text: 'Dễ bị XSS', security: true },
              { text: 'XSS & CSRF', security: true, subText: '(Bảo vệ bằng HttpOnly, Secure)' }
            ]
          }
        ]
      },
      {
        type: 'grid',
        title: 'Chi Tiết & Ứng Dụng Thực Tế',
        items: [
          {
            title: 'LocalStorage',
            description: 'Lưu trữ dữ liệu vô thời hạn trên trình duyệt. Dữ liệu vẫn tồn tại ngay cả khi khởi động lại máy tính.',
            theme_gradient: 'from-blue-500 to-indigo-600',
            icon: 'hard-drive',
            icon_bg: 'bg-blue-100',
            icon_color: 'text-blue-600',
            blocks: [
              {
                type: 'app',
                title: 'Ứng dụng',
                bg: 'bg-blue-50/50',
                border: 'border-blue-100',
                title_color: 'text-blue-900',
                text_color: 'text-blue-800',
                list: ['Lưu giao diện (Dark/Light mode)', 'Giỏ hàng (Chưa đăng nhập)', 'Cache dữ liệu tĩnh ít thay đổi']
              },
              {
                type: 'warn',
                title: 'Cảnh báo',
                bg: 'bg-red-50/50',
                border: 'border-red-100',
                title_color: 'text-red-900',
                text_color: 'text-red-700',
                text: 'Tuyệt đối không lưu mật khẩu, Token, thông tin nhạy cảm vì dễ bị đánh cắp qua mã độc XSS.'
              }
            ]
          },
          {
            title: 'SessionStorage',
            description: 'Dữ liệu chỉ tồn tại trong một "phiên" làm việc. Khi đóng tab hoặc trình duyệt, dữ liệu sẽ bốc hơi.',
            theme_gradient: 'from-purple-500 to-pink-500',
            icon: 'clock',
            icon_bg: 'bg-purple-100',
            icon_color: 'text-purple-600',
            blocks: [
              {
                type: 'app',
                title: 'Ứng dụng',
                bg: 'bg-purple-50/50',
                border: 'border-purple-100',
                title_color: 'text-purple-900',
                text_color: 'text-purple-800',
                list: ['Form đăng ký nhiều bước (Multi-step)', 'Lưu trạng thái bộ lọc tìm kiếm tạm thời', 'Dữ liệu nhạy cảm cần xóa ngay khi rời đi']
              },
              {
                type: 'feature',
                title: 'Đặc trưng',
                bg: 'bg-slate-50/50',
                border: 'border-slate-200',
                title_color: 'text-slate-700',
                text_color: 'text-slate-600',
                text: 'Mở một tab mới với cùng URL sẽ tạo ra một session mới hoàn toàn độc lập.'
              }
            ]
          },
          {
            title: 'Cookies',
            description: 'Cơ chế lâu đời, tự động bám theo mọi Request gửi lên Server. Dung lượng rất nhỏ giọt.',
            theme_gradient: 'from-orange-400 to-amber-500',
            icon: 'cookie',
            icon_bg: 'bg-orange-100',
            icon_color: 'text-orange-600',
            blocks: [
              {
                type: 'app',
                title: 'Ứng dụng',
                bg: 'bg-orange-50/50',
                border: 'border-orange-100',
                title_color: 'text-orange-900',
                text_color: 'text-orange-800',
                list: ['Quản lý phiên đăng nhập (Session ID)', 'Xác thực người dùng (Auth Token)', 'Tracking quảng cáo / Phân tích hành vi']
              },
              {
                type: 'security',
                title: 'Bảo mật',
                bg: 'bg-green-50/50',
                border: 'border-green-100',
                title_color: 'text-green-900',
                text_color: 'text-green-700',
                text: 'Có thể chống XSS bằng cờ HttpOnly và chống CSRF bằng SameSite.'
              }
            ]
          }
        ]
      },
      {
        type: 'closing',
        text: 'Bảng tổng hợp kiến thức Frontend cơ bản'
      }
    ]
  },
  {
    id: 9,
    title: 'Sự khác biệt giữa var, let và const',
    excerpt: 'Hiểu rõ cách khai báo biến là bước đầu tiên để viết mã JavaScript sạch, ít lỗi và dễ bảo trì. Hãy cùng khám phá sự khác biệt cốt lõi của chúng!',
    date: '2024-03-27',
    readTime: '5 min read',
    category: 'JavaScript Cơ Bản',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['js'],
    level: 'Cơ bản',
    isStructured: false,
    content: ''
  },
  {
    id: 10,
    title: 'Z-index & Stacking Context - Hướng Dẫn Chi Tiết',
    excerpt: 'Giải mã bí ẩn đằng sau câu hỏi kinh điển: Tại sao tôi set z-index: 9999 mà nó vẫn bị chìm? Cùng tìm hiểu về Stacking Context qua các ví dụ giả lập trực quan!',
    date: '2024-03-28',
    readTime: '7 min read',
    category: 'CSS Nâng Cao',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['css'],
    level: 'Nâng cao',
    isStructured: false,
    content: ''
  },
  {
    id: 11,
    title: 'Phân biệt Flexbox và CSS Grid',
    excerpt: 'Khám phá sự khác biệt cốt lõi giữa hai hệ thống bố cục mạnh mẽ nhất trong CSS hiện đại và cách chọn công cụ phù hợp cho dự án của bạn (Content-first vs Layout-first).',
    date: '2024-03-29',
    readTime: '6 min read',
    category: 'CSS Nâng Cao',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['css', 'layout'],
    level: 'Cơ bản',
    isStructured: false,
    content: ''
  },
  {
    id: 12,
    title: 'Phân biệt display: none và visibility: hidden',
    excerpt: 'Câu hỏi phỏng vấn kinh điển! Khám phá điểm khác biệt cốt lõi nhất về cách hai thuộc tính này tác động đến Luồng tài liệu (Document Flow) của trang web.',
    date: '2024-03-30',
    readTime: '5 min read',
    category: 'CSS Nâng Cao',
    image: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['css', 'interview'],
    level: 'Cơ bản',
    isStructured: false,
    content: ''
  },
  {
    id: 13,
    title: 'Hiểu rõ <script>, async và defer trong JavaScript',
    excerpt: 'Giải quyết triệt để vấn đề "chặn hiển thị" (render-blocking) để mang lại trải nghiệm mượt mà nhất cho người dùng khi trang web tải các tệp JavaScript bên ngoài.',
    date: '2024-03-31',
    readTime: '6 min read',
    category: 'JavaScript Tối Ưu',
    image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['js', 'performance'],
    level: 'Cơ bản',
    isStructured: false,
    content: ''
  },
  {
    id: 14,
    title: 'Tìm hiểu về DOCTYPE trong HTML - Nền tảng cốt lõi',
    excerpt: 'Doctype là gì? Tại sao cần khai báo <!DOCTYPE html>? Tìm hiểu sâu hơn về "lời khai báo" quan trọng nhất cho trình duyệt.',
    date: '2024-04-01',
    readTime: '4 min read',
    category: 'HTML Cơ Bản',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['html'],
    level: 'Cơ bản',
    isStructured: false,
    content: ''
  },
  {
    id: 15,
    title: 'JS: == vs === & Implicit Coercion',
    excerpt: 'Hiểu rõ sự khác biệt giữa phép so sánh lỏng lẻo (==) và nghiêm ngặt (===) cùng cơ chế ép kiểu ngầm định đầy thú vị nhưng cũng dễ gây bug trong JavaScript.',
    date: '2024-04-02',
    readTime: '5 min read',
    category: 'JavaScript Cơ Bản',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['js'],
    level: 'Trung bình',
    isStructured: false,
    content: ''
  },
  {
    id: 16,
    title: 'Event Delegation - Tối Ưu Hiệu Suất JavaScript',
    excerpt: 'Khám phá kỹ thuật Event Delegation – bí quyết viết JavaScript gọn gàng, tiết kiệm bộ nhớ và xử lý linh hoạt các phần tử DOM được tạo ra động dựa trên cơ chế Event Bubbling.',
    date: '2024-04-08',
    readTime: '6 min read',
    category: 'JavaScript Nâng Cao',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['js'],
    level: 'Trung bình',
    isStructured: false,
    content: ''
  },
  {
    id: 17,
    title: 'Tuyệt Kỹ Xử Lý Đa Promise Cùng Lúc',
    excerpt: 'Phân tích trực quan sự khác biệt giữa Promise.all, Promise.allSettled và Promise.race qua demo animation tương tác. Biết khi nào dùng cái nào để viết code async chuyên nghiệp.',
    date: '2024-04-15',
    readTime: '7 min read',
    category: 'JavaScript Nâng Cao',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['js'],
    level: 'Nâng cao',
    isStructured: false,
    content: ''
  },
  {
    id: 18,
    title: 'Giải mã State & Props trong React',
    excerpt: 'Nắm vững sự khác biệt giữa State và Props, cách luồng dữ liệu một chiều hoạt động trong React, và thực hành với demo Parent/Child component tương tác.',
    date: '2024-04-20',
    readTime: '6 min read',
    category: 'React',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['react'],
    level: 'Trung bình',
    isStructured: false,
    content: ''
  },
  {
    id: 19,
    title: 'Luồng Chạy useEffect - Bí Mật Vòng Đời React',
    excerpt: 'Trực quan hóa vòng đời thực thi của useEffect: Render → Paint → Cleanup → Run Effect. Hiểu rõ sức mạnh của Dependency Array qua 3 trường hợp sử dụng và demo tương tác.',
    date: '2024-04-25',
    readTime: '7 min read',
    category: 'React',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['react'],
    level: 'Trung bình',
    isStructured: false,
    content: ''
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
  },
  {
    id: 5,
    title: 'CSS Box Model – Toàn tập giải ngố',
    videoId: '7604184715272228113',
    thumbnail: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=400&h=600&fit=crop',
    views: '20.5K',
    link: 'https://www.tiktok.com/@devcraftt/video/7604184715272228113?is_from_webapp=1&sender_device=pc&web_id=7619667361486833153'
  },
  {
    id: 6,
    title: 'Cookie, Local Storage & Session Storage khác nhau thế nào?',
    videoId: '7590799921607937281',
    thumbnail: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=600&fit=crop',
    views: '12.5K',
    link: 'https://www.tiktok.com/@devcraftt/video/7590799921607937281?is_from_webapp=1&sender_device=pc&web_id=7619667361486833153'
  }
];
