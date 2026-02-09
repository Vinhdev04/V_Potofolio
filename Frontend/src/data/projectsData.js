import petUi from '@/assets/images/Project/PETui.png';
import antiVirus from '@/assets/images/Project/anti-virus-mask-store.png';
import createQr from '@/assets/images/Project/create-qr-js.png';
import dictionary from '@/assets/images/Project/dictonary-api.png';
import doctorHub from '@/assets/images/Project/doctor-hub.png';
import fashion from '@/assets/images/Project/ecommerce-fashion.png';
import education from '@/assets/images/Project/education-page.png';
import fShop from '@/assets/images/Project/f-shop.png';
import passwordGen from '@/assets/images/Project/generatepassword-js.png';
import guessPic from '@/assets/images/Project/guess-pictures-js.png';
import landingPage from '@/assets/images/Project/landing-page-02.png';
import manCity from '@/assets/images/Project/man-city-web.png';
import musicPlayer from '@/assets/images/music-player.png';
import ogInform from '@/assets/images/Project/oginform.png';
import quizApp from '@/assets/images/Project/quiz-app-js.png';
import softwareM4s from '@/assets/images/Project/software-m4s.png';
import softyPinko from '@/assets/images/Project/softy-pinko.png';
import rps from '@/assets/images/Project/stone-paper-scissors.png';
import ticTacToe from '@/assets/images/Project/tic-tac-toe.png';
import toastMsg from '@/assets/images/Project/toast-message.png';
import todoJs from '@/assets/images/Project/todo-js.png';
import todoReact from '@/assets/images/Project/todoList.png';
import vRealEstate from '@/assets/images/Project/vRealEstate.png';
import valorant from '@/assets/images/Project/valorant-game.png';
import vocab from '@/assets/images/Project/vocabulary-search.png';
import weather from '@/assets/images/Project/weather-app.png';
import xPadGame from '@/assets/images/Project/xPadGame.png';
import jobFinder from '@/assets/images/Project/jobFinderHUB.png';
import appFlutter from '@/assets/images/Project/app-flutter.jpg';

export const projects = [
  {
    title: 'DevPortfolio',
    subtitle: 'Portfolio Cá Nhân',
    description: 'Website cá nhân định vị thương hiệu, nơi giới thiệu chi tiết về Bản thân, Kỹ năng, Kinh nghiệm và các Dự án đã thực hiện. Hệ thống bao gồm các trang chức năng: Home, About, Projects, Contact với giao diện hiện đại, chuyên nghiệp.',
    tags: ['ReactJS', 'Ant Design', 'SCSS', 'Framer Motion', 'Vite'],
    category: 'Web Apps',
    image: landingPage,
    role: 'Frontend Developer (Personal)',
    timeline: 'Ongoing',
    challenge: 'Thể hiện đầy đủ thông tin cá nhân một cách trực quan, ấn tượng nhưng vẫn đảm bảo hiệu suất cao.',
    solution: 'Thiết kế bố cục rõ ràng cho từng trang (About, Skills, Projects) và sử dụng Framer Motion cho hiệu ứng chuyển cảnh.',
    features: [
      { title: 'Home & About', desc: 'Intro ấn tượng, Bio chi tiết, Download CV, hiển thị Skills visual.' },
      { title: 'Project Gallery', desc: 'Danh sách dự án có bộ lọc (Filter), xem chi tiết (Modal/Page).' },
      { title: 'Contact & Socials', desc: 'Form liên hệ gửi Email trực tiếp, tích hợp mạng xã hội.' },
      { title: 'System UX', desc: 'Dark/Light Mode, Responsive toàn diện, tối ưu SEO & Performance.' }
    ],
    demoLink: '#',
    repoLink: 'https://github.com/Vinhdev04/V_Potofolio.git'
  },
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
    title: 'Pet UI',
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
    demoLink: 'https://pet-ui.vercel.app/',
    repoLink: 'https://github.com/Vinhdev04/pet-UI.git'
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
      { title: 'Cart', desc: 'Giỏ hàng JavaScript thuần.' }
    ],
    demoLink: 'https://anti-virus-mask-store.vercel.app/',
    repoLink: 'https://github.com/Vinhdev04/AntiVirus_Mask_Store.git'
  },
  {
    title: 'Create QR JS',
    subtitle: 'Công Cụ Tạo Mã QR',
    description: 'Ứng dụng tạo mã QR code nhanh chóng từ văn bản hoặc liên kết nhập vào.',
    tags: ['JavaScript', 'API', 'Tool'],
    category: 'Web Apps',
    image: createQr,
    role: 'Frontend Developer',
    timeline: '3 Ngày',
    challenge: 'Tích hợp thư viện tạo QR code và xử lý dữ liệu đầu vào.',
    solution: 'Sử dụng thư viện qrcode.js để tạo mã QR động.',
    features: [
      { title: 'Generator', desc: 'Tạo QR từ text/URL.' },
      { title: 'Download', desc: 'Tải xuống ảnh QR.' }
    ],
    demoLink: 'https://create-qr-chi.vercel.app/',
    repoLink: 'https://github.com/Vinhdev04/CreateQR.git'
  },
  {
    title: 'Dictionary API',
    subtitle: 'Từ Điển Tiếng Anh Online',
    description: 'Ứng dụng tra cứu từ điển sử dụng API miễn phí, hỗ trợ phát âm và ví dụ minh họa.',
    tags: ['JavaScript', 'API', 'Fetch'],
    category: 'Web Apps',
    image: dictionary,
    role: 'Frontend Developer',
    timeline: '5 Ngày',
    challenge: 'Xử lý dữ liệu JSON phức tạp từ API từ điển.',
    solution: 'Tối ưu hóa việc gọi API và hiển thị kết quả rõ ràng.',
    features: [
      { title: 'Search', desc: 'Tra cứu từ vựng.' },
      { title: 'Audio', desc: 'Phát âm chuẩn bản xứ.' }
    ],
    demoLink: 'https://dictonary-api-fawn.vercel.app/',
    repoLink: 'https://github.com/Vinhdev04/Dictonary-API.git'
  },
  {
    title: 'Doctor Hub',
    subtitle: 'Đặt Lịch Khám Bệnh',
    description: 'Giao diện ứng dụng đặt lịch khám bệnh với bác sĩ, xem hồ sơ và đánh giá.',
    tags: ['ReactJS', 'UI/UX', 'Medical'],
    category: 'Web Apps',
    image: doctorHub,
    role: 'Frontend Developer',
    timeline: '2 Tuần',
    challenge: 'Thiết kế giao diện tin cậy và dễ sử dụng cho bệnh nhân.',
    solution: 'Sử dụng màu xanh y tế và layout sạch sẽ.',
    features: [
      { title: 'Booking', desc: 'Đặt lịch hẹn.' },
      { title: 'Profile', desc: 'Hồ sơ bác sĩ chi tiết.' }
    ],
    demoLink: 'https://doctor-hubs.vercel.app/',
    repoLink: 'https://github.com/Vinhdev04/doctorHub.git'
  },
  {
    title: 'Ecommerce Fashion',
    subtitle: 'Cửa Hàng Thời Trang',
    description: 'Website bán quần áo thời trang với đầy đủ tính năng: danh mục, chi tiết sản phẩm, giỏ hàng.',
    tags: ['ReactJS', 'Redux', 'E-commerce'],
    category: 'Web Apps',
    image: fashion,
    role: 'Frontend Developer',
    timeline: '3 Tuần',
    challenge: 'Quản lý trạng thái giỏ hàng và dữ liệu sản phẩm lớn.',
    solution: 'Sử dụng Redux Toolkit để quản lý state toàn cục.',
    features: [
      { title: 'Products', desc: 'Danh sách & Lọc sản phẩm.' },
      { title: 'Cart', desc: 'Thêm/Sửa/Xóa giỏ hàng.' }
    ],
    demoLink: 'https://ecommerce-fashion-seven.vercel.app/',
    repoLink: 'https://github.com/Vinhdev04/Ecommerce_Fashion.git'
  },
  {
    title: 'Education Page',
    subtitle: 'Landing Page Giáo Dục',
    description: 'Trang giới thiệu khóa học trực tuyến với thiết kế hiện đại và thu hút.',
    tags: ['HTML/CSS', 'Responsive', 'Landing Page'],
    category: 'Web Apps',
    image: education,
    role: 'Frontend Developer',
    timeline: '4 Ngày',
    challenge: 'Tạo ấn tượng đầu tiên tốt cho người học.',
    solution: 'Sử dụng hình ảnh chất lượng cao và bố cục hợp lý.',
    features: [
      { title: 'Courses', desc: 'Giới thiệu khóa học nổi bật.' },
      { title: 'Testimonials', desc: 'Đánh giá học viên.' }
    ],
    demoLink: 'https://education-page-eight.vercel.app/',
    repoLink: 'https://github.com/Vinhdev04/Educate_page.git'
  },
  {
    title: 'F-Shop',
    subtitle: 'Shop Giày Sneaker',
    description: 'Website bán giày Sneaker với giao diện dark mode cực chất.',
    tags: ['ReactJS', 'SCSS', 'Shopping'],
    category: 'Web Apps',
    image: fShop,
    role: 'Frontend Developer',
    timeline: '2 Tuần',
    challenge: 'Thiết kế giao diện đậm chất thể thao và cá tính.',
    solution: 'Sử dụng tông màu tối và hình ảnh sản phẩm nổi bật.',
    features: [
      { title: 'Gallery', desc: 'Trưng bày sản phẩm đẹp mắt.' },
      { title: 'Filter', desc: 'Lọc theo hãng, size, giá.' }
    ],
    demoLink: 'https://f-shop-seven.vercel.app/',
    repoLink: 'https://github.com/Vinhdev04/F_Shop.git'
  },
  {
    title: 'Password Generator',
    subtitle: 'Tạo Mật Khẩu An Toàn',
    description: 'Công cụ tạo mật khẩu ngẫu nhiên với các tùy chọn độ dài, ký tự đặc biệt.',
    tags: ['JavaScript', 'Tool', 'Security'],
    category: 'Web Apps',
    image: passwordGen,
    role: 'Frontend Developer',
    timeline: '2 Ngày',
    challenge: 'Đảm bảo tính ngẫu nhiên và bảo mật của mật khẩu.',
    solution: 'Sử dụng Math.random() kết hợp với các bộ ký tự.',
    features: [
      { title: 'Custom', desc: 'Tùy chỉnh độ dài, ký tự.' },
      { title: 'Copy', desc: 'Sao chép nhanh vào clipboard.' }
    ],
    demoLink: 'https://generate-password-a8mm.vercel.app/',
    repoLink: 'https://github.com/Vinhdev04/GeneratePassword.git'
  },
  {
    title: 'Guess Pictures',
    subtitle: 'Game Đoán Hình',
    description: 'Trò chơi đoán tên đồ vật qua hình ảnh, giúp học từ vựng tiếng Anh.',
    tags: ['JavaScript', 'Game', 'Education'],
    category: 'Web Apps',
    image: guessPic,
    role: 'Game Developer',
    timeline: '1 Tuần',
    challenge: 'Tạo logic game thú vị và quản lý điểm số.',
    solution: 'Xây dựng mảng dữ liệu câu hỏi phong phú.',
    features: [
      { title: 'Quiz', desc: 'Câu hỏi trắc nghiệm hình ảnh.' },
      { title: 'Score', desc: 'Tính điểm và xếp hạng.' }
    ],
    demoLink: 'https://guess-pictures.vercel.app/',
    repoLink: 'https://github.com/Vinhdev04/GuessPictures.git'
  },
  {
    title: 'Man City Web',
    subtitle: 'Fanpage Manchester City',
    description: 'Website tin tức và thông tin cầu thủ của CLB Manchester City.',
    tags: ['HTML/CSS', 'Fanpage', 'Football'],
    category: 'Web Apps',
    image: manCity,
    role: 'Frontend Developer',
    timeline: '3 Ngày',
    challenge: 'Thể hiện tình yêu bóng đá qua giao diện.',
    solution: 'Sử dụng màu xanh truyền thống của Man City.',
    features: [
      { title: 'News', desc: 'Cập nhật tin tức CLB.' },
      { title: 'Players', desc: 'Danh sách cầu thủ.' }
    ],
    demoLink: 'https://web-mancity.vercel.app/',
    repoLink: 'https://github.com/Vinhdev04/ManCity-Web.git'
  },
  {
    title: 'Music Player',
    subtitle: 'Trình Phát Nhạc',
    description: 'Ứng dụng nghe nhạc với giao diện đẹp, hỗ trợ play/pause, next/prev bài hát.',
    tags: ['JavaScript', 'Audio API', 'UI'],
    category: 'Web Apps',
    image: musicPlayer,
    role: 'Frontend Developer',
    timeline: '1 Tuần',
    challenge: 'Xử lý logic phát nhạc và đồng bộ thanh tiến trình.',
    solution: 'Sử dụng HTML5 Audio API.',
    features: [
      { title: 'Playlist', desc: 'Danh sách bài hát.' },
      { title: 'Controls', desc: 'Điều khiển nhạc đầy đủ.' }
    ],
    demoLink: 'https://music-player-two-kappa.vercel.app/',
    repoLink: 'https://github.com/Vinhdev04/Music_Player.git'
  },
  {
    title: 'OG Inform',
    subtitle: 'Trang Tin Tức Game',
    description: 'Blog chia sẻ tin tức, thủ thuật về các tựa game hot hiện nay.',
    tags: ['ReactJS', 'Blog', 'Gaming'],
    category: 'Web Apps',
    image: ogInform,
    role: 'Content Creator',
    timeline: 'Ongoing',
    challenge: 'Tối ưu trải nghiệm đọc và tốc độ tải trang.',
    solution: 'Sử dụng Next.js (nếu có) hoặc tối ưu React.',
    features: [
      { title: 'Posts', desc: 'Bài viết chi tiết.' },
      { title: 'Categories', desc: 'Phân loại game.' }
    ],
    demoLink: '#',
    repoLink: '#'
  },
  {
    title: 'Quiz App',
    subtitle: 'Ứng Dụng Trắc Nghiệm',
    description: 'App thi trắc nghiệm online với bộ đếm thời gian và tính điểm tự động.',
    tags: ['JavaScript', 'Quiz', 'Logic'],
    category: 'Web Apps',
    image: quizApp,
    role: 'Frontend Developer',
    timeline: '4 Ngày',
    challenge: 'Xử lý logic chuyển câu hỏi và tính kết quả.',
    solution: 'Lưu trữ câu trả lời tạm thời và so sánh đáp án.',
    features: [
      { title: 'Timer', desc: 'Đếm ngược thời gian làm bài.' },
      { title: 'Result', desc: 'Hiển thị kết quả chi tiết.' }
    ],
    demoLink: 'https://quiz-app-js-rho.vercel.app/',
    repoLink: 'https://github.com/Vinhdev04/QuizAppJS.git'
  },
  {
    title: 'Software M4S',
    subtitle: 'Landing Page Phần Mềm',
    description: 'Trang giới thiệu sản phẩm phần mềm quản lý bán hàng.',
    tags: ['HTML/CSS', 'Bootstrap', 'Business'],
    category: 'Web Apps',
    image: softwareM4s,
    role: 'Frontend Developer',
    timeline: '5 Ngày',
    challenge: 'Trình bày tính năng phần mềm rõ ràng, thuyết phục.',
    solution: 'Sử dụng các section giới thiệu tính năng và lợi ích.',
    features: [
      { title: 'Features', desc: 'Tính năng nổi bật.' },
      { title: 'Pricing', desc: 'Bảng giá dịch vụ.' }
    ],
    demoLink: 'https://software-m4-3scb.vercel.app/',
    repoLink: 'https://github.com/Vinhdev04/SoftwareM4.git'
  },
  {
    title: 'Softy Pinko',
    subtitle: 'Blog Cá Nhân Hồng',
    description: 'Blog cá nhân với tông màu hồng chủ đạo, nhẹ nhàng và nữ tính.',
    tags: ['HTML/CSS', 'Design', 'Blog'],
    category: 'Web Apps',
    image: softyPinko,
    role: 'Frontend Developer',
    timeline: '3 Ngày',
    challenge: 'Phối màu hồng sao cho không bị sến.',
    solution: 'Sử dụng các sắc độ hồng pastel dịu mắt.',
    features: [
      { title: 'Diary', desc: 'Nhật ký hàng ngày.' },
      { title: 'Gallery', desc: 'Album ảnh.' }
    ],
    demoLink: 'https://softy-pinko-two.vercel.app/',
    repoLink: 'https://github.com/Vinhdev04/Softy_Pinko.git'
  },
  {
    title: 'RPS Game',
    subtitle: 'Kéo Búa Bao',
    description: 'Game Kéo Búa Bao cổ điển đấu với máy tính.',
    tags: ['JavaScript', 'Game', 'Fun'],
    category: 'Web Apps',
    image: rps,
    role: 'Game Developer',
    timeline: '1 Ngày',
    challenge: 'Tạo AI đơn giản cho máy tính.',
    solution: 'Random lựa chọn của máy tính.',
    features: [
      { title: 'Game', desc: 'Chế độ chơi đơn.' },
      { title: 'Score', desc: 'Lưu điểm số.' }
    ],
    demoLink: 'https://stone-paper-scissors-weld.vercel.app/',
    repoLink: 'https://github.com/Vinhdev04/Stone-Paper-Scissors.git'
  },
  {
    title: 'Tic Tac Toe',
    subtitle: 'Cờ Caro',
    description: 'Game Cờ Caro (X/O) huyền thoại, hỗ trợ 2 người chơi.',
    tags: ['ReactJS', 'Game', 'Logic'],
    category: 'Web Apps',
    image: ticTacToe,
    role: 'Game Developer',
    timeline: '2 Ngày',
    challenge: 'Xác định người thắng cuộc theo các đường.',
    solution: 'Thuật toán kiểm tra win condition.',
    features: [
      { title: 'Multiplayer', desc: 'Chơi 2 người trên cùng máy.' },
      { title: 'Reset', desc: 'Chơi lại ván mới.' }
    ],
    demoLink: 'https://tic-tac-toe-js-wheat.vercel.app/',
    repoLink: 'https://github.com/Vinhdev04/tic-tac-toe-js.git'
  },
  {
    title: 'Toast Message',
    subtitle: 'Thông Báo UI',
    description: 'Component hiển thị thông báo (Toast) đẹp mắt, có thể tái sử dụng.',
    tags: ['HTML/CSS', 'JavaScript', 'UI Component'],
    category: 'Web Apps',
    image: toastMsg,
    role: 'Frontend Developer',
    timeline: '1 Ngày',
    challenge: 'Xử lý hiệu ứng xuất hiện và biến mất mượt mà.',
    solution: 'Sử dụng CSS Animation và setTimeout.',
    features: [
      { title: 'Types', desc: 'Success, Error, Warning.' },
      { title: 'Auto-close', desc: 'Tự động đóng sau 3s.' }
    ],
    demoLink: 'https://toast-message-three.vercel.app/',
    repoLink: 'https://github.com/Vinhdev04/Toast_Message.git'
  },
  {
    title: 'Todo JS',
    subtitle: 'Quản Lý Công Việc (JS)',
    description: 'Ứng dụng Todo List đơn giản viết bằng JavaScript thuần.',
    tags: ['JavaScript', 'DOM', 'Local Storage'],
    category: 'Web Apps',
    image: todoJs,
    role: 'Frontend Developer',
    timeline: '2 Ngày',
    challenge: 'Thao tác DOM hiệu quả.',
    solution: 'Tối ưu hóa các selector và event listener.',
    features: [
      { title: 'CRUD', desc: 'Thêm, sửa, xóa công việc.' },
      { title: 'Save', desc: 'Lưu vào Local Storage.' }
    ],
    demoLink: 'https://todo-list-eta-gray-74.vercel.app/',
    repoLink: '#'
  },
  {
    title: 'Todo React',
    subtitle: 'Quản Lý Công Việc (React)',
    description: 'Ứng dụng Todo List nâng cao viết bằng ReactJS.',
    tags: ['ReactJS', 'State', 'Hooks'],
    category: 'Web Apps',
    image: todoReact,
    role: 'Frontend Developer',
    timeline: '3 Ngày',
    challenge: 'Quản lý state phức tạp hơn.',
    solution: 'Sử dụng useState và useEffect.',
    features: [
      { title: 'Filter', desc: 'Lọc công việc đã xong/chưa xong.' },
      { title: 'Edit', desc: 'Chỉnh sửa trực tiếp.' }
    ],
    demoLink: 'https://todoapps-reactjs.netlify.app/',
    repoLink: 'https://github.com/Vinhdev04/todoList-ReactJS.git'
  },
  {
    title: 'V-Real Estate',
    subtitle: 'Bất Động Sản',
    description: 'Website môi giới bất động sản với tính năng tìm kiếm và bản đồ.',
    tags: ['ReactJS', 'Real Estate', 'Map'],
    category: 'Web Apps',
    image: vRealEstate,
    role: 'Frontend Developer',
    timeline: 'Ongoing',
    challenge: 'Tích hợp bản đồ và lọc dữ liệu bất động sản.',
    solution: 'Sử dụng Google Maps API.',
    features: [
      { title: 'Search', desc: 'Tìm kiếm theo khu vực, giá.' },
      { title: 'Map', desc: 'Xem vị trí trên bản đồ.' }
    ],
    demoLink: 'https://vreal-estate.netlify.app/',
    repoLink: 'https://github.com/Vinhdev04/V_Real-Estate.git'
  },
  {
    title: 'Valorant Game',
    subtitle: 'Valorant Wiki',
    description: 'Trang thông tin về các Agent và vũ khí trong game Valorant.',
    tags: ['ReactJS', 'API', 'Gaming'],
    category: 'Web Apps',
    image: valorant,
    role: 'Frontend Developer',
    timeline: '1 Tuần',
    challenge: 'Hiển thị thông tin chi tiết và hình ảnh đẹp.',
    solution: 'Sử dụng API Valorant không chính thức.',
    features: [
      { title: 'Agents', desc: 'Chi tiết kỹ năng từng tướng.' },
      { title: 'Weapons', desc: 'Thông số súng.' }
    ],
    demoLink: 'https://valorant-game-pi.vercel.app/',
    repoLink: 'https://github.com/Vinhdev04/ValorantGame.git'
  },
  {
    title: 'Vocabulary Search',
    subtitle: 'Tra Cứu Từ Vựng',
    description: 'Công cụ tra cứu từ vựng tiếng Anh nhanh chóng.',
    tags: ['JavaScript', 'Search', 'Data'],
    category: 'Web Apps',
    image: vocab,
    role: 'Frontend Developer',
    timeline: '3 Ngày',
    challenge: 'Tìm kiếm realtime nhanh chóng.',
    solution: 'Tối ưu thuật toán tìm kiếm chuỗi.',
    features: [
      { title: 'Instant', desc: 'Kết quả hiện ngay khi gõ.' },
      { title: 'History', desc: 'Lưu lịch sử tra cứu.' }
    ],
    demoLink: 'https://vocabulary-search.vercel.app/',
    repoLink: '#'
  },
  {
    title: 'Weather App',
    subtitle: 'Dự Báo Thời Tiết',
    description: 'Ứng dụng xem thời tiết hiện tại và dự báo 7 ngày tới.',
    tags: ['ReactJS', 'Weather API', 'Geolocation'],
    category: 'Web Apps',
    image: weather,
    role: 'Frontend Developer',
    timeline: '4 Ngày',
    challenge: 'Xử lý dữ liệu thời tiết và định vị người dùng.',
    solution: 'Sử dụng OpenWeatherMap API.',
    features: [
      { title: 'Current', desc: 'Nhiệt độ, độ ẩm hiện tại.' },
      { title: 'Forecast', desc: 'Dự báo các ngày tới.' }
    ],
    demoLink: 'https://weather-app-ten-psi-16.vercel.app/',
    repoLink: 'https://github.com/Vinhdev04/weather-app.git'
  },
  {
    title: 'xPadGame',
    subtitle: 'Cửa Hàng Game Gear',
    description: 'E-commerce chuyên bán tay cầm và phụ kiện chơi game.',
    tags: ['ReactJS', 'E-commerce', 'Payment'],
    category: 'Web Apps',
    image: xPadGame,
    role: 'Frontend Developer',
    timeline: 'Ongoing',
    challenge: 'Tích hợp thanh toán và quản lý đơn hàng.',
    solution: 'Sử dụng Stripe hoặc PayPal sandbox.',
    features: [
      { title: 'Checkout', desc: 'Thanh toán trực tuyến.' },
      { title: 'Admin', desc: 'Trang quản trị đơn hàng.' }
    ],
    demoLink: 'https://xpadgame.netlify.app/about',
    repoLink: 'https://github.com/Vinhdev04/Ecomerce-reactjs.git'
  },
  {
    title: 'Job Finder HUB',
    subtitle: 'Tìm Việc Làm IT',
    description: 'Cổng thông tin việc làm chuyên ngành IT, kết nối nhà tuyển dụng và ứng viên.',
    tags: ['ReactJS', 'NodeJS', 'Recruitment'],
    category: 'Web Apps',
    image: jobFinder,
    role: 'Fullstack Developer',
    timeline: 'Ongoing',
    challenge: 'Xây dựng hệ thống matching ứng viên phù hợp.',
    solution: 'Sử dụng thuật toán gợi ý việc làm.',
    features: [
      { title: 'Jobs', desc: 'Tìm kiếm việc làm.' },
      { title: 'CV', desc: 'Tạo và quản lý CV.' }
    ],
    demoLink: 'https://jobfinderhubb.netlify.app/',
    repoLink: '#'
  },
  {
    title: 'Login Form',
    subtitle: 'Mẫu Đăng Nhập',
    description: 'Các mẫu giao diện đăng nhập/đăng ký đẹp mắt và hiện đại.',
    tags: ['HTML/CSS', 'UI Design', 'Form'],
    category: 'Web Apps',
    image: landingPage, // Sử dụng ảnh tạm
    role: 'Frontend Developer',
    timeline: '2 Ngày',
    challenge: 'Tạo form validation và hiệu ứng chuyển đổi giữa Login/Register.',
    solution: 'Sử dụng CSS thuần và một chút JS.',
    features: [
      { title: 'Validation', desc: 'Kiểm tra định dạng email/pass.' },
      { title: 'Animation', desc: 'Hiệu ứng chuyển tab mượt mà.' }
    ],
    demoLink: 'https://login-form-1rsw.vercel.app/',
    repoLink: 'https://github.com/Vinhdev04/LoginForm.git'
  },
  {
    title: 'Landing Page 03',
    subtitle: 'Trang Đích Mẫu 3',
    description: 'Mẫu Landing Page hiện đại phục vụ mục đích giới thiệu sản phẩm.',
    tags: ['HTML/CSS', 'Responsive', 'Landing Page'],
    category: 'Web Apps',
    image: landingPage,
    role: 'Frontend Developer',
    timeline: '3 Ngày',
    challenge: 'Tối ưu hóa layout cho mọi thiết bị.',
    solution: 'Sử dụng Flexbox và Grid system.',
    features: [
      { title: 'Hero', desc: 'Banner giới thiệu ấn tượng.' },
      { title: 'Responsive', desc: 'Tương thích mobile/desktop.' }
    ],
    demoLink: 'https://landing-page-03-rho.vercel.app/',
    repoLink: 'https://github.com/Vinhdev04/Landing_Page_03.git'
  },
  {
    title: 'Landing Page 02',
    subtitle: 'Trang Đích Mẫu 2',
    description: 'Một mẫu Landing Page khác với phong cách thiết kế tối giản.',
    tags: ['HTML/CSS', 'UI/UX', 'Landing Page'],
    category: 'Web Apps',
    image: landingPage,
    role: 'Frontend Developer',
    timeline: '3 Ngày',
    challenge: 'Tạo điểm nhấn với typography và whitespace.',
    solution: 'Áp dụng nguyên tắc thiết kế tối giản.',
    features: [
      { title: 'Minimal', desc: 'Thiết kế sạch sẽ, dễ đọc.' },
      { title: 'Fast', desc: 'Tốc độ tải trang nhanh.' }
    ],
    demoLink: 'https://landing-page-02-nine.vercel.app/',
    repoLink: 'https://github.com/Vinhdev04/Landing_page_02.git'
  },
  {
    title: 'Landing Page Collection',
    subtitle: 'Bộ Sưu Tập Landing Page',
    description: 'Tổng hợp các mẫu Landing Page đa dạng cho nhiều mục đích sử dụng.',
    tags: ['HTML/CSS', 'Collection', 'Responsive'],
    category: 'Web Apps',
    image: landingPage,
    role: 'Frontend Developer',
    timeline: '1 Tuần',
    challenge: 'Xây dựng cấu trúc code có thể tái sử dụng cho nhiều mẫu.',
    solution: 'Tạo các component CSS chung.',
    features: [
      { title: 'Variety', desc: 'Nhiều phong cách thiết kế.' },
      { title: 'Flexible', desc: 'Dễ dàng tùy chỉnh.' }
    ],
    demoLink: 'https://landing-page-eta-beryl.vercel.app/',
    repoLink: 'https://github.com/Vinhdev04/Landing_page.git'
  },
  {
    title: 'The Band',
    subtitle: 'Trang Web Ban Nhạc',
    description: 'Website giới thiệu ban nhạc, tour diễn và bán vé (dựa trên w3_band).',
    tags: ['HTML/CSS', 'Classic', 'Music'],
    category: 'Web Apps',
    image: landingPage, // Tạm dùng ảnh này
    role: 'Frontend Developer',
    timeline: '4 Ngày',
    challenge: 'Thực hành các kỹ thuật layout cơ bản.',
    solution: 'Code thuần HTML/CSS theo mẫu w3schools.',
    features: [
      { title: 'Tour', desc: 'Lịch diễn và đặt vé.' },
      { title: 'Music', desc: 'Nghe thử các bài hát.' }
    ],
    demoLink: 'https://bandmusic-five.vercel.app/',
    repoLink: 'https://github.com/Vinhdev04/w3_band.git'
  }
];
