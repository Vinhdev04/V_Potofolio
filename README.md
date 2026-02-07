# DevPortfolio - Vinhdev04

Một hệ thống Portfolio cá nhân chuyên nghiệp, hiện đại được xây dựng với **ReactJS** (Frontend) và **Node.js** (Backend). Dự án thể hiện kỹ năng Fullstack, tối ưu hóa hiệu suất và trải nghiệm người dùng.

## 🌟 Tính Năng Nổi Bật

### Frontend (User Interface)
- **Thiết kế Responsive:** Tương thích hoàn hảo trên mọi thiết bị (Mobile, Tablet, Desktop).
- **Dark Mode UI:** Giao diện tối hiện đại, dịu mắt dành cho lập trình viên.
- **Single Page Experience:** Tích hợp mượt mà các phần giới thiệu, kỹ năng, dự án, kinh nghiệm trên một trang duy nhất với hiệu ứng cuộn trơn tru.
- **Github Profile Integration:** Hiển thị trực quan thông tin Github (Pinned Repos, Contribution Graph, Stats).
- **Project Gallery:** Bộ lọc dự án thông minh (Web Apps, Open Source, UI/UX) và tính năng tải thêm (Load More).
- **Performance Optimization:** Sử dụng `React.lazy` và `Suspense` để tối ưu thời gian tải trang.
- **Custom 404 Page:** Trang lỗi thân thiện và điều hướng người dùng.
- **Contact Form:** Tích hợp form liên hệ gửi tin nhắn trực tiếp.
- **Floating Actions:** Nút BackToTop và các nút liên hệ nhanh (Zalo, Facebook, Email).

### Backend (API)
- **RESTful API:** Cung cấp dữ liệu cho Frontend.
- **Database Connection:** Kết nối cơ sở dữ liệu (nếu có).
- **Error Handling:** Xử lý lỗi tập trung.

## 🚀 Công Nghệ Sử Dụng

### Frontend
- **Core:** [ReactJS](https://reactjs.org/) (Vite), [React Router DOM v6](https://reactrouter.com/)
- **UI Framework:** [Ant Design 5](https://ant.design/)
- **Styling:** SCSS, Tailwind CSS (Optional)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** React Icons, Ant Design Icons
- **State Management:** React Hooks (useState, useEffect, useContext)

### Backend
- **Core:** Node.js, Express
- **Utilities:** Cors, Dotenv

## 🛠 Cài Đặt và Chạy Dự Án

### Yêu cầu
- Node.js (v16 trở lên)
- npm hoặc yarn
- Git

### 1. Clone Dự Án
```bash
git clone https://github.com/Vinhdev04/V_Potofolio.git
cd V_Potofolio
```

### 2. Setup Frontend
```bash
cd Frontend
# Cài đặt thư viện
npm install

# Chạy môi trường phát triển
npm run dev
```
Truy cập: `http://localhost:5173`

### 3. Deploy (Triển khai)

#### Option 1: Deploy lên Netlify (Recommended)
1. Đăng nhập Netlify và chọn **Add new site** -> **Import an existing project**.
2. Kết nối với GitHub và chọn repository `V_Potofolio`.
3. Điền các thông số Build settings như sau:
   - **Base directory:** `Frontend`
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Nhấn **Deploy**.

#### Option 2: Deploy lên GitHub Pages
Dự án đã được cấu hình sẵn để deploy tự động lên GitHub Pages bằng `gh-pages`.

```bash
cd Frontend
# Build và Deploy
npm run deploy
```
*Lưu ý: Nếu dùng GitHub Pages, cần đổi lại `base` trong `vite.config.js` thành `/V_Potofolio/`.*

### 4. Setup Backend (Optional)
```bash
cd Backend
npm install
npm run dev
```
Server chạy tại: `http://localhost:5000`

## 📂 Cấu Trúc Thư Mục
```
V_Potofolio/
├── Frontend/           # ReactJS Application
│   ├── src/
│   │   ├── assets/     # Images, fonts
│   │   ├── components/ # Reusable components (Header, Footer, GithubProfile...)
│   │   ├── pages/      # Page components (Home, Projects, Contact...)
│   │   ├── routes/     # Router configuration
│   │   ├── styles/     # SCSS files
│   │   ├── App.jsx     # Root component
│   │   └── main.jsx    # Entry point
│   └── ...
├── Backend/            # Node.js API
│   ├── controllers/
│   ├── routes/
│   └── ...
└── README.md
```

## 👤 Author
**Phạm Công Vinh (Vinhdev04)**
- **Github:** [https://github.com/Vinhdev04](https://github.com/Vinhdev04)
- **Facebook:** [https://www.facebook.com/i.padygamy1210](https://www.facebook.com/i.padygamy1210)
- **Email:** PCV.FED@GMAIL.COM
- **Zalo:** 0352032375

---
© 2026 Vinhdev04. All Rights Reserved.
"Write Once, Run Anywhere"
