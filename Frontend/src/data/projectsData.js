import petUi from '@/assets/images/PETui.png';
import antiVirus from '@/assets/images/anti-virus-mask-store.png';
import createQr from '@/assets/images/create-qr-js.png';
import dictionary from '@/assets/images/dictonary-api.png';
import doctorHub from '@/assets/images/doctor-hub.png';
import fashion from '@/assets/images/ecommerce-fashion.png';
import education from '@/assets/images/education-page.png';
import fShop from '@/assets/images/f-shop.png';
import passwordGen from '@/assets/images/generatepassword-js.png';
import guessPic from '@/assets/images/guess-pictures-js.png';
import landingPage from '@/assets/images/landing-page-02.png';
import manCity from '@/assets/images/man-city-web.png';
import musicPlayer from '@/assets/images/music-player.png';
import ogInform from '@/assets/images/oginform.png';
import quizApp from '@/assets/images/quiz-app-js.png';
import softwareM4s from '@/assets/images/software-m4s.png';
import softyPinko from '@/assets/images/softy-pinko.png';
import rps from '@/assets/images/stone-paper-scissors.png';
import ticTacToe from '@/assets/images/tic-tac-toe.png';
import toastMsg from '@/assets/images/toast-message.png';
import todoJs from '@/assets/images/todo-js.png';
import todoReact from '@/assets/images/todoList.png';
import vRealEstate from '@/assets/images/vRealEstate.png';
import valorant from '@/assets/images/valorant-game.png';
import vocab from '@/assets/images/vocabulary-search.png';
import weather from '@/assets/images/weather-app.png';
import xPadGame from '@/assets/images/xPadGame.png';
import jobFinder from '@/assets/images/jobFinderHUB.png';
import appFlutter from '@/assets/images/app-flutter.jpg';

export const projects = [
  {
    title: 'App Healthy | Mobile App',
    subtitle: 'Ứng Dụng Chăm Sóc Sức Khỏe Toàn Diện',
    description: 'Ứng dụng Flutter giúp người dùng theo dõi và quản lý các chỉ số sức khỏe hàng ngày như bước đi, lượng nước uống, cân nặng.',
    tags: ['Flutter', 'Firebase', 'Mobile App', 'Dart'],
    category: 'Mobile Apps',
    image: appFlutter,
    role: 'Mobile Developer',
    timeline: 'Ongoing',
    challenge: 'Xây dựng ứng dụng đa nền tảng mượt mà và tích hợp theo dõi thời gian thực.',
    solution: 'Sử dụng Flutter framework và Firebase Authentication để quản lý người dùng.',
    features: [
      { title: 'Tracking', desc: 'Theo dõi bước chân, nước uống.' },
      { title: 'Profile', desc: 'Quản lý thông tin sức khỏe cá nhân.' }
    ],
    demoLink: '#',
    repoLink: 'https://github.com/Vinhdev04/App_Healthy.git'
  },
  {
    title: 'Pet UI | Mobile App',
    subtitle: 'Ứng Dụng Chăm Sóc Thú Cưng',
    description: 'Giao diện ứng dụng mobile giúp quản lý sức khỏe và lịch trình cho thú cưng với thiết kế hiện đại.',
    tags: ['React Native', 'UI Design', 'Figma'],
    category: 'Mobile Apps',
    image: petUi,
    role: 'UI/UX Designer',
    timeline: '2 Tuần',
    challenge: 'Thiết kế trải nghiệm người dùng thân thiện cho người nuôi thú cưng.',
    solution: 'Tập trung vào màu sắc tươi sáng và các icon dễ hiểu.',
    features: [
      { title: 'Tracking', desc: 'Theo dõi sức khỏe thú cưng.' },
      { title: 'Reminder', desc: 'Nhắc nhở lịch tiêm phòng.' }
    ],
    demoLink: '#',
    repoLink: '#'
  },
  {
    title: 'Anti-Virus Mask Store',
    subtitle: 'Cửa Hàng Khẩu Trang Y Tế',
    description: 'Landing page bán hàng khẩu trang và thiết bị y tế trong mùa dịch, tích hợp giỏ hàng đơn giản.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    category: 'Web Apps',
    image: antiVirus,
    role: 'Frontend Developer',
    timeline: '1 Tuần',
    challenge: 'Xây dựng nhanh chóng để đáp ứng nhu cầu thị trường.',
    solution: 'Sử dụng Bootstrap để đẩy nhanh quá trình phát triển giao diện.',
    features: [
      { title: 'Responsive', desc: 'Tương thích mọi thiết bị.' },
      { title: 'Đặt hàng nhanh', desc: 'Form đặt hàng tối giản.' }
    ],
    demoLink: '#',
    repoLink: '#'
  },
  {
    title: 'QR Code Generator',
    subtitle: 'Công Cụ Tạo Mã QR',
    description: 'Ứng dụng tạo mã QR code từ văn bản hoặc đường dẫn URL, cho phép tải xuống hình ảnh QR.',
    tags: ['JavaScript', 'API', 'DOM'],
    category: 'Tools',
    image: createQr,
    role: 'Frontend Developer',
    timeline: '3 Ngày',
    challenge: 'Xử lý dữ liệu nhập vào và tạo mã QR realtime.',
    solution: 'Sử dụng thư viện qrcode.js để tạo mã nhanh chóng.',
    features: [
      { title: 'Tạo QR', desc: 'Hỗ trợ Text và URL.' },
      { title: 'Download', desc: 'Tải mã QR về máy.' }
    ],
    demoLink: '#',
    repoLink: '#'
  },
  {
    title: 'Dictionary API',
    subtitle: 'Từ Điển Trực Tuyến',
    description: 'Ứng dụng tra cứu từ điển sử dụng API miễn phí, hỗ trợ phát âm và ví dụ câu.',
    tags: ['React', 'Rest API', 'Axios'],
    category: 'Web Apps',
    image: dictionary,
    role: 'Frontend Developer',
    timeline: '1 Tuần',
    challenge: 'Hiển thị dữ liệu phức tạp từ API một cách rõ ràng.',
    solution: 'Thiết kế layout thẻ từ vựng khoa học.',
    features: [
      { title: 'Tra từ', desc: 'Tìm kiếm nghĩa của từ.' },
      { title: 'Phát âm', desc: 'Nghe cách đọc chuẩn.' }
    ],
    demoLink: '#',
    repoLink: '#'
  },
  {
    title: 'Doctor Hub',
    subtitle: 'Đặt Lịch Khám Bệnh',
    description: 'Nền tảng kết nối bệnh nhân và bác sĩ, hỗ trợ đặt lịch khám và tư vấn trực tuyến.',
    tags: ['React', 'Node.js', 'MongoDB'],
    category: 'Web Apps',
    image: doctorHub,
    role: 'Full Stack Developer',
    timeline: '3 Tháng',
    challenge: 'Quản lý lịch khám và hồ sơ bệnh án bảo mật.',
    solution: 'Xây dựng hệ thống xác thực và phân quyền chặt chẽ.',
    features: [
      { title: 'Booking', desc: 'Đặt lịch khám dễ dàng.' },
      { title: 'Profile', desc: 'Hồ sơ bác sĩ chi tiết.' }
    ],
    demoLink: '#',
    repoLink: '#'
  },
  {
    title: 'Fashion Ecommerce',
    subtitle: 'Shop Thời Trang Online',
    description: 'Website thương mại điện tử chuyên về thời trang với trải nghiệm mua sắm hiện đại.',
    tags: ['React', 'Redux', 'Firebase'],
    category: 'E-commerce',
    image: fashion,
    role: 'Frontend Developer',
    timeline: '2 Tháng',
    challenge: 'Tích hợp giỏ hàng và thanh toán.',
    solution: 'Sử dụng Redux quản lý state giỏ hàng.',
    features: [
      { title: 'Shopping Cart', desc: 'Thêm sửa xóa sản phẩm.' },
      { title: 'Filter', desc: 'Lọc sản phẩm theo danh mục.' }
    ],
    demoLink: '#',
    repoLink: '#'
  },
  {
    title: 'Education Platform',
    subtitle: 'Nền Tảng Giáo Dục',
    description: 'Landing page giới thiệu các khóa học trực tuyến với giao diện sáng sủa, thu hút học viên.',
    tags: ['HTML/CSS', 'Responsive', 'Animation'],
    category: 'Web Apps',
    image: education,
    role: 'Frontend Developer',
    timeline: '1 Tuần',
    challenge: 'Trình bày thông tin khóa học hấp dẫn.',
    solution: 'Sử dụng CSS Grid và Flexbox cho layout.',
    features: [
      { title: 'Course List', desc: 'Danh sách khóa học nổi bật.' },
      { title: 'Teachers', desc: 'Thông tin giảng viên.' }
    ],
    demoLink: '#',
    repoLink: '#'
  },
  {
    title: 'F-Shop',
    subtitle: 'Cửa Hàng Nội Thất',
    description: 'Website bán đồ nội thất với phong cách thiết kế tối giản, tập trung vào hình ảnh sản phẩm.',
    tags: ['Vue.js', 'Vuex', 'SCSS'],
    category: 'E-commerce',
    image: fShop,
    role: 'Frontend Developer',
    timeline: '1.5 Tháng',
    challenge: 'Tối ưu hóa hình ảnh sản phẩm chất lượng cao.',
    solution: 'Sử dụng kỹ thuật Lazy Loading cho hình ảnh.',
    features: [
      { title: 'Gallery', desc: 'Thư viện ảnh đẹp mắt.' },
      { title: 'Cart', desc: 'Giỏ hàng tiện lợi.' }
    ],
    demoLink: '#',
    repoLink: '#'
  },
  {
    title: 'Password Generator',
    subtitle: 'Tạo Mật Khẩu Ngẫu Nhiên',
    description: 'Công cụ giúp người dùng tạo ra các mật khẩu mạnh với nhiều tùy chọn ký tự khác nhau.',
    tags: ['JavaScript', 'Algorithm', 'Security'],
    category: 'Tools',
    image: passwordGen,
    role: 'Developer',
    timeline: '2 Ngày',
    challenge: 'Đảm bảo tính ngẫu nhiên và độ mạnh của mật khẩu.',
    solution: 'Áp dụng các thuật toán random an toàn.',
    features: [
      { title: 'Customizable', desc: 'Tùy chọn độ dài, ký tự.' },
      { title: 'Copy', desc: 'Sao chép nhanh vào clipboard.' }
    ],
    demoLink: '#',
    repoLink: '#'
  },
  {
    title: 'Guess The Picture',
    subtitle: 'Trò Chơi Đoán Hình',
    description: 'Mini-game tương tác, người chơi đoán tên vật thể qua các hình ảnh bị che mờ hoặc gợi ý.',
    tags: ['JavaScript', 'Game Logic', 'DOM'],
    category: 'Games',
    image: guessPic,
    role: 'Game Developer',
    timeline: '1 Tuần',
    challenge: 'Tạo logic game thú vị và quản lý điểm số.',
    solution: 'Xây dựng state machine đơn giản cho game.',
    features: [
      { title: 'Levels', desc: 'Nhiều cấp độ khó.' },
      { title: 'Score', desc: 'Tính điểm realtime.' }
    ],
    demoLink: '#',
    repoLink: '#'
  },
  {
    title: 'Modern Landing Page',
    subtitle: 'Trang Giới Thiệu Sản Phẩm',
    description: 'Mẫu Landing Page hiện đại với các hiệu ứng scroll và animation mượt mà.',
    tags: ['HTML5', 'Sass', 'GSAP'],
    category: 'Web Apps',
    image: landingPage,
    role: 'Frontend Developer',
    timeline: '5 Ngày',
    challenge: 'Tạo ấn tượng thị giác mạnh mẽ.',
    solution: 'Sử dụng GSAP cho các hiệu ứng chuyển động.',
    features: [
      { title: 'Hero Section', desc: 'Banner ấn tượng.' },
      { title: 'Features', desc: 'Grid tính năng đẹp mắt.' }
    ],
    demoLink: '#',
    repoLink: '#'
  },
  {
    title: 'Man City Fan Club',
    subtitle: 'Website CLB Manchester City',
    description: 'Trang tin tức và thông tin cầu thủ dành cho người hâm mộ câu lạc bộ Man City.',
    tags: ['Bootstrap', 'jQuery', 'HTML'],
    category: 'Web Apps',
    image: manCity,
    role: 'Frontend Developer',
    timeline: '2 Tuần',
    challenge: 'Cập nhật tin tức và lịch thi đấu.',
    solution: 'Layout dạng tạp chí thể thao.',
    features: [
      { title: 'Players', desc: 'Danh sách cầu thủ.' },
      { title: 'News', desc: 'Tin tức mới nhất.' }
    ],
    demoLink: '#',
    repoLink: '#'
  },
  {
    title: 'Music Player',
    subtitle: 'Trình Phát Nhạc UI',
    description: 'Giao diện máy nghe nhạc sành điệu với các chức năng phát, tạm dừng, chuyển bài cơ bản.',
    tags: ['JavaScript', 'Audio API', 'CSS'],
    category: 'Tools',
    image: musicPlayer,
    role: 'Developer',
    timeline: '1 Tuần',
    challenge: 'Xử lý audio stream và thanh tiến trình.',
    solution: 'Sử dụng HTML5 Audio API.',
    features: [
      { title: 'Playlist', desc: 'Danh sách bài hát.' },
      { title: 'Controls', desc: 'Điều khiển nhạc đầy đủ.' }
    ],
    demoLink: '#',
    repoLink: '#'
  },
  {
    title: 'OG Inform',
    subtitle: 'Form Đăng Ký Thông Tin',
    description: 'Mẫu form thu thập thông tin người dùng với validate dữ liệu chặt chẽ.',
    tags: ['HTML', 'CSS', 'Form Validation'],
    category: 'UI Components',
    image: ogInform,
    role: 'Frontend Developer',
    timeline: '2 Ngày',
    challenge: 'Xử lý validation form phức tạp.',
    solution: 'Viết custom validator tái sử dụng được.',
    features: [
      { title: 'Validation', desc: 'Kiểm tra lỗi nhập liệu.' },
      { title: 'Responsive', desc: 'Hiển thị tốt trên mobile.' }
    ],
    demoLink: '#',
    repoLink: '#'
  },
  {
    title: 'Quiz App',
    subtitle: 'Ứng Dụng Trắc Nghiệm',
    description: 'Ứng dụng thi trắc nghiệm trực tuyến với bộ đếm giờ và tính điểm tự động.',
    tags: ['JavaScript', 'Local Storage', 'JSON'],
    category: 'Web Apps',
    image: quizApp,
    role: 'Developer',
    timeline: '1 Tuần',
    challenge: 'Quản lý ngân hàng câu hỏi và trạng thái thi.',
    solution: 'Lưu trữ tiến độ vào Local Storage.',
    features: [
      { title: 'Timer', desc: 'Đếm ngược thời gian.' },
      { title: 'Result', desc: 'Xem kết quả ngay lập tức.' }
    ],
    demoLink: '#',
    repoLink: '#'
  },
  {
    title: 'Software M4S',
    subtitle: 'Giải Pháp Phần Mềm M4S',
    description: 'Trang giới thiệu sản phẩm phần mềm doanh nghiệp với giao diện chuyên nghiệp.',
    tags: ['React', 'Tailwind CSS'],
    category: 'Web Apps',
    image: softwareM4s,
    role: 'Frontend Developer',
    timeline: '2 Tuần',
    challenge: 'Truyền tải thông tin kỹ thuật một cách dễ hiểu.',
    solution: 'Sử dụng các biểu đồ và icon minh họa.',
    features: [
      { title: 'Dashboard', desc: 'Giao diện quản trị.' },
      { title: 'Analytics', desc: 'Phân tích dữ liệu.' }
    ],
    demoLink: '#',
    repoLink: '#'
  },
  {
    title: 'Softy Pinko',
    subtitle: 'Thiết Kế UI Soft',
    description: 'Giao diện web với phong cách thiết kế mềm mại, tông màu hồng chủ đạo.',
    tags: ['UI/UX', 'CSS3', 'Design'],
    category: 'UI Components',
    image: softyPinko,
    role: 'Designer',
    timeline: '3 Ngày',
    challenge: 'Phối màu sắc hài hòa.',
    solution: 'Sử dụng bảng màu pastel.',
    features: [
      { title: 'Soft UI', desc: 'Phong cách nhẹ nhàng.' },
      { title: 'Animations', desc: 'Hiệu ứng hover tinh tế.' }
    ],
    demoLink: '#',
    repoLink: '#'
  },
  {
    title: 'Rock Paper Scissors',
    subtitle: 'Oẳn Tù Tì',
    description: 'Game Oẳn Tù Tì kinh điển thi đấu với máy tính.',
    tags: ['JavaScript', 'Game Logic'],
    category: 'Games',
    image: rps,
    role: 'Developer',
    timeline: '2 Ngày',
    challenge: 'Tạo logic AI đơn giản cho máy.',
    solution: 'Sử dụng Math.random() cho nước đi của máy.',
    features: [
      { title: 'Scoreboard', desc: 'Bảng điểm.' },
      { title: 'Effects', desc: 'Hiệu ứng thắng thua.' }
    ],
    demoLink: '#',
    repoLink: '#'
  },
  {
    title: 'Tic Tac Toe',
    subtitle: 'Cờ Caro',
    description: 'Game Cờ Caro (Tic Tac Toe) cho 2 người chơi hoặc đấu với máy.',
    tags: ['React', 'Game Algorithm'],
    category: 'Games',
    image: ticTacToe,
    role: 'Developer',
    timeline: '3 Ngày',
    challenge: 'Xác định điều kiện thắng thua.',
    solution: 'Thuật toán kiểm tra các hàng, cột, chéo.',
    features: [
      { title: '2 Players', desc: 'Chế độ 2 người chơi.' },
      { title: 'Reset', desc: 'Chơi lại nhanh chóng.' }
    ],
    demoLink: '#',
    repoLink: '#'
  },
  {
    title: 'Toast Notification',
    subtitle: 'Thư Viện Thông Báo',
    description: 'Module hiển thị thông báo toast message tùy chỉnh (Success, Error, Warning).',
    tags: ['JavaScript', 'CSS Animation'],
    category: 'UI Components',
    image: toastMsg,
    role: 'Frontend Developer',
    timeline: '2 Ngày',
    challenge: 'Quản lý nhiều thông báo cùng lúc.',
    solution: 'Xây dựng queue quản lý hiển thị.',
    features: [
      { title: 'Types', desc: 'Đủ các loại thông báo.' },
      { title: 'Auto-dismiss', desc: 'Tự động tắt sau vài giây.' }
    ],
    demoLink: '#',
    repoLink: '#'
  },
  {
    title: 'Todo List JS',
    subtitle: 'Quản Lý Công Việc (JS)',
    description: 'Ứng dụng Todo đơn giản viết bằng thuần JavaScript.',
    tags: ['Vanilla JS', 'DOM Manipulation'],
    category: 'Tools',
    image: todoJs,
    role: 'Developer',
    timeline: '3 Ngày',
    challenge: 'Thao tác DOM hiệu quả.',
    solution: 'Tối ưu hóa các event listener.',
    features: [
      { title: 'CRUD', desc: 'Thêm, sửa, xóa task.' },
      { title: 'Filter', desc: 'Lọc task đã xong.' }
    ],
    demoLink: '#',
    repoLink: '#'
  },
  {
    title: 'Todo List React',
    subtitle: 'Quản Lý Công Việc Pro',
    description: 'Phiên bản nâng cấp của Todo App sử dụng ReactJS và Redux.',
    tags: ['ReactJS', 'Redux', 'Ant Design'],
    category: 'Web Apps',
    image: todoReact,
    role: 'Frontend Developer',
    timeline: '2 Tháng',
    challenge: 'Quản lý state phức tạp.',
    solution: 'Sử dụng Redux Toolkit.',
    features: [
      { title: 'Drag & Drop', desc: 'Kéo thả công việc.' },
      { title: 'Statistics', desc: 'Thống kê tiến độ.' }
    ],
    demoLink: 'https://todoapps-reactjs.netlify.app/',
    repoLink: 'https://github.com/Vinhdev04/todo-reactjs.git'
  },
  {
    title: 'vReal Estate',
    subtitle: 'Bất Động Sản Trực Tuyến',
    description: 'Nền tảng giao dịch bất động sản với bản đồ tích hợp.',
    tags: ['MERN Stack', 'Google Maps API'],
    category: 'Web Apps',
    image: vRealEstate,
    role: 'Full Stack Developer',
    timeline: '1 Tháng',
    challenge: 'Tích hợp bản đồ và tìm kiếm địa điểm.',
    solution: 'Sử dụng Google Maps API.',
    features: [
      { title: 'Map View', desc: 'Xem nhà trên bản đồ.' },
      { title: 'Real-time', desc: 'Cập nhật tin đăng tức thì.' }
    ],
    demoLink: 'https://vreal-estate.netlify.app/',
    repoLink: 'https://github.com/Vinhdev04/V_Real-Estate.git'
  },
  {
    title: 'Valorant Wiki',
    subtitle: 'Thông Tin Game Valorant',
    description: 'Wiki tra cứu thông tin về các Agent, súng và bản đồ trong game Valorant.',
    tags: ['React', 'API', 'Gaming'],
    category: 'Web Apps',
    image: valorant,
    role: 'Frontend Developer',
    timeline: '2 Tuần',
    challenge: 'Lấy dữ liệu từ API bên thứ 3.',
    solution: 'Sử dụng Valorant-API.',
    features: [
      { title: 'Agents', desc: 'Chi tiết kỹ năng nhân vật.' },
      { title: 'Weapons', desc: 'Thông số súng.' }
    ],
    demoLink: '#',
    repoLink: '#'
  },
  {
    title: 'Vocabulary Search',
    subtitle: 'Tra Cứu Từ Vựng',
    description: 'Công cụ tìm kiếm từ vựng tiếng Anh nhanh chóng.',
    tags: ['JavaScript', 'Dictionary API'],
    category: 'Tools',
    image: vocab,
    role: 'Developer',
    timeline: '4 Ngày',
    challenge: 'Tìm kiếm nhanh (Instant Search).',
    solution: 'Kỹ thuật Debounce ô tìm kiếm.',
    features: [
      { title: 'Instant', desc: 'Kết quả hiện ngay khi gõ.' },
      { title: 'Audio', desc: 'Nghe phát âm.' }
    ],
    demoLink: '#',
    repoLink: '#'
  },
  {
    title: 'Weather App',
    subtitle: 'Dự Báo Thời Tiết',
    description: 'Ứng dụng xem thời tiết hiện tại và dự báo 7 ngày tới cho mọi thành phố.',
    tags: ['React', 'OpenWeatherMap'],
    category: 'Tools',
    image: weather,
    role: 'Frontend Developer',
    timeline: '1 Tuần',
    challenge: 'Xử lý dữ liệu thời tiết nhiều địa điểm.',
    solution: 'Tích hợp OpenWeatherMap API.',
    features: [
      { title: 'Forecast', desc: 'Dự báo chi tiết.' },
      { title: 'Location', desc: 'Tự động định vị.' }
    ],
    demoLink: '#',
    repoLink: '#'
  },
  {
    title: 'Premium GameXbox',
    subtitle: 'Cửa Hàng Thiết Bị Game',
    description: 'Website thương mại điện tử chuyên cung cấp tay cầm và phụ kiện chơi game cao cấp với giao diện Dark Mode ấn tượng.',
    tags: ['React', 'Tailwind CSS', 'Redux'],
    category: 'E-commerce',
    image: xPadGame,
    role: 'Frontend Developer',
    timeline: '3 Tuần',
    challenge: 'Xây dựng giao diện Dark Mode ấn tượng và trải nghiệm mua sắm mượt mà.',
    solution: 'Sử dụng Tailwind CSS cho styling và Redux quản lý giỏ hàng.',
    features: [
      { title: 'Dark UI', desc: 'Giao diện tối chuyên nghiệp.' },
      { title: 'Product Filter', desc: 'Lọc sản phẩm thông minh.' }
    ],
    demoLink: '#',
    repoLink: '#'
  },
  {
    title: 'Internship System',
    subtitle: 'Hệ Thống Tìm Kiếm Thực Tập',
    description: 'Nền tảng kết nối sinh viên với doanh nghiệp, hỗ trợ tìm kiếm cơ hội thực tập và việc làm phù hợp.',
    tags: ['React', 'TypeScript', 'TailwindCSS'],
    category: 'Web Apps',
    image: jobFinder,
    role: 'Full Stack Developer',
    timeline: '1 Tháng',
    challenge: 'Xây dựng hệ thống tìm kiếm và lọc việc làm hiệu quả.',
    solution: 'Tối ưu hóa query tìm kiếm và giao diện thân thiện.',
    features: [
      { title: 'Job Search', desc: 'Tìm kiếm theo ngành nghề.' },
      { title: 'Application', desc: 'Nộp CV trực tuyến.' }
    ],
    demoLink: '#',
    repoLink: '#'
  }
];
