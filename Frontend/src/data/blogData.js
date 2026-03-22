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
    tiktokId: 4,
    content: `
      <p>Trở thành Fullstack Developer là một hành trình dài. Dưới đây là lộ trình gợi ý:</p>
      <h3>Frontend</h3>
      <p>HTML, CSS, JavaScript, React/Vue/Angular.</p>
      <h3>Backend</h3>
      <p>Node.js, Python, Go, Database (SQL & NoSQL).</p>
      <h3>DevOps</h3>
      <p>Docker, CI/CD, AWS/Azure.</p>
    `
  },
  {
    id: 4,
    title: 'Giải Ngố CSS Box Model - "Trùm Cuối" Phỏng Vấn Frontend',
    excerpt: 'Bạn đã bao giờ set width: 100px cho một thẻ div, nhưng khi chạy lên nó lại to chà bá chưa? Nếu rồi, thì chào mừng bạn đến với cú lừa đầu đời mang tên CSS Box Model.',
    date: '2024-03-22',
    readTime: '5 min read',
    category: 'CSS Cơ Bản',
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tiktokId: 5,
    content: `
      <p class="intro-text">
        Bạn đã bao giờ set <code class="highlight-pink">width: 100px</code> cho một thẻ div, nhưng khi chạy lên nó lại to chà bá chưa? Nếu rồi, thì chào mừng bạn đến với cú lừa đầu đời mang tên CSS Box Model.
      </p>

      <div id="interactive-box-model"></div>

      <h2 class="section-title">1. Cấu phẫu một chiếc "Hộp"</h2>
      <p>Mọi phần tử trên HTML đều là một hình chữ nhật. Chiếc hộp này được cấu tạo từ 4 lớp từ trong ra ngoài:</p>
      
      <ul class="box-model-list">
          <li class="list-item-hover">
              <span class="icon-box blue"><i class="fa-solid fa-cube"></i></span>
              <div><strong>Content (Lõi):</strong> Nơi chứa nội dung thực sự (chữ, hình ảnh). Kích thước của nó được quyết định bởi <code class="highlight-pink">width</code> và <code class="highlight-pink">height</code>.</div>
          </li>
          <li class="list-item-hover">
              <span class="icon-box green"><i class="fa-solid fa-compress"></i></span>
              <div><strong>Padding (Lớp đệm):</strong> Không gian giữa Content và Border. Nó giống như lớp xốp chống sốc. Background của phần tử sẽ lan ra tận lớp này.</div>
          </li>
          <li class="list-item-hover">
              <span class="icon-box yellow"><i class="fa-regular fa-square"></i></span>
              <div><strong>Border (Đường viền):</strong> Ranh giới của chiếc hộp.</div>
          </li>
          <li class="list-item-hover">
              <span class="icon-box orange"><i class="fa-solid fa-arrows-up-down-left-right"></i></span>
              <div><strong>Margin (Khoảng cách):</strong> Không gian bên ngoài cùng, dùng để đẩy chiếc hộp này ra xa các chiếc hộp khác xung quanh.</div>
          </li>
      </ul>

      <h2 class="section-title">2. "Điểm ăn tiền" khi phỏng vấn: box-sizing</h2>
      <p>Câu hỏi kinh điển từ nhà tuyển dụng: <em>"Sự khác biệt giữa content-box và border-box là gì?"</em></p>
      
      <div class="comparison-grid">
          <div class="box-card content-box-card">
              <h4 class="card-title red"><i class="fa-solid fa-xmark"></i> content-box (Mặc định)</h4>
              <p>Kích thước bạn set (width/height) CHỈ áp dụng cho phần Content. Nếu bạn thêm padding và border, tổng kích thước hộp sẽ phình to ra và phá vỡ layout.</p>
              
              <div class="formula-box red">
                  <div class="formula-header">Công thức tính thực tế:</div>
                  <div class="formula-content">
                      <span class="bold">Real_Width</span> = width + paddingX + borderX<br>
                      <span class="bold">Real_Height</span> = height + paddingY + borderY
                  </div>
              </div>
          </div>
          <div class="box-card border-box-card">
              <h4 class="card-title green"><i class="fa-solid fa-check"></i> border-box (Khuyên dùng)</h4>
              <p>Kích thước bạn set là tổng kích thước của cả hộp (bao gồm cả content, padding, border). Trình duyệt sẽ tự động ép phần content nhỏ lại.</p>

              <div class="formula-box green">
                  <div class="formula-header">Công thức tính thực tế:</div>
                  <div class="formula-content">
                      <span class="bold-green">Real_Width</span> = width (đúng CSS)<br>
                      <span class="bold-green">Real_Height</span> = height (đúng CSS)
                  </div>
              </div>
          </div>
      </div>

      <div class="code-reset-block">
          <div class="code-label">CSS Reset Chuẩn Thực Tế</div>
          <pre class="code-pre"><code>* {
  <span class="prop">margin</span>: <span class="val">0</span>;
  <span class="prop">padding</span>: <span class="val">0</span>;
  <span class="prop">box-sizing</span>: <span class="val">border-box</span>;
}</code></pre>
      </div>

      <h2 class="section-title">3. Bẫy phỏng vấn: Margin Collapse</h2>
      <p>Khi hai khối (block elements) đứng cạnh nhau theo chiều dọc, khoảng cách margin giữa chúng không được cộng dồn lại. Thay vào đó, chúng sẽ bị "hòa vào nhau" và lấy theo <strong>giá trị margin lớn hơn</strong>.</p>
      
      <div class="example-highlight-box">
          <p><strong>Ví dụ:</strong> Khối A ở trên có <code class="highlight-pink">margin-bottom: 20px</code>. Khối B ở dưới có <code class="highlight-pink">margin-top: 30px</code>. Khoảng cách thực tế giữa A và B sẽ là <strong>30px</strong> (chứ không phải 50px).</p>
      </div>

      <hr class="divider">
      
      <p class="closing-text">
          Chúc các bạn ôn tập tốt và pass phỏng vấn thành công! 🚀
      </p>
    `
  },
  {
    id: 5,
    title: 'Ngữ Nghĩa Học Trong HTML & Kiến Trúc Trải Nghiệm Web Hiện Đại',
    excerpt: 'Phân tích tác động toàn diện từ SEO, Khả năng tiếp cận đến sự sẵn sàng cho kỷ nguyên AI thông qua Semantic HTML.',
    date: '2024-03-23',
    readTime: '8 min read',
    category: 'HTML Ngữ Nghĩa',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    content: `
      <p class="intro-text">
        Trong khoa học máy tính, <strong>"ngữ nghĩa" (semantics)</strong> biểu thị ý nghĩa nội tại và mục đích cốt lõi của mã, tách biệt hoàn toàn khỏi hình thức hiển thị. 
        <span class="highlight-pink">HTML Ngữ nghĩa (POSH)</span> không chỉ là code, nó là một triết lý kiến trúc khắt khe.
      </p>

      <h2 class="section-title">1. Nền Tảng Triết Học & Sự Tiến Hóa</h2>
      <p>Sự ra đời của HTML5 đã vĩnh viễn thay đổi mô hình bằng cách giới thiệu các phần tử cấu trúc mang đậm tính ngữ nghĩa.</p>
      
      <div class="box-card border-box-card mb-8">
        <h4 class="card-title green"><i class="fa-solid fa-check"></i> HTML5: Bước ngoặt 2014</h4>
        <ul class="box-model-list">
          <li class="list-item-hover">
            <span class="icon-box blue"><i class="fa-solid fa-tag"></i></span>
            <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;footer&gt;</code>
          </li>
        </ul>
      </div>

      <h2 class="section-title">2. Kiến Trúc Landmarks & Hệ Thống Phân Cấp</h2>
      <p>Để cấu trúc một trang web có ý nghĩa, nhà phát triển phải phân bổ các khối nội dung vào đúng các <strong>"điểm mốc" (landmarks)</strong>.</p>
      
      <div class="comparison-grid">
        <div class="box-card content-box-card">
          <h4 class="card-title blue">&lt;header&gt; & &lt;nav&gt;</h4>
          <p>Vai trò banner toàn cục và chứa các liên kết điều hướng chính, hỗ trợ cực tốt cho Screen Readers.</p>
        </div>
        <div class="box-card border-box-card">
          <h4 class="card-title green">&lt;main&gt; & &lt;article&gt;</h4>
          <p>Trái tim của trang web và các nội dung độc lập, có khả năng tái sử dụng cao.</p>
        </div>
      </div>

      <h2 class="section-title">3. SEO & Accessibility</h2>
      <div class="example-highlight-box">
        <p><strong>Sự thật thú vị:</strong> 71.6% người khiếm thị điều hướng bằng cách nhảy qua các tiêu đề. Sử đúng cấu trúc Heading (H1-H6) là chìa khóa của khả năng tiếp cận.</p>
      </div>

      <div class="code-reset-block">
        <div class="code-label">Ví dụ Cấu trúc Chuẩn</div>
        <pre class="code-pre"><code><span class="prop">&lt;main&gt;</span>
  <span class="prop">&lt;article&gt;</span>
    <span class="prop">&lt;h1&gt;</span>Tiêu đề bài viết<span class="prop">&lt;/h1&gt;</span>
    <span class="prop">&lt;section&gt;</span>...<span class="prop">&lt;/section&gt;</span>
  <span class="prop">&lt;/article&gt;</span>
<span class="prop">&lt;/main&gt;</span></code></pre>
      </div>

      <h2 class="section-title">4. Sự Sẵn Sàng Cho Trí Tuệ Nhân Tạo (AI)</h2>
      <p>Trong kỷ nguyên 2025-2026, AI Readiness không còn là tùy chọn. HTML Ngữ nghĩa cung cấp luồng dữ liệu thô đã được làm giàu sẵn bởi phân cấp con người, giúp AI hiểu nội dung chính xác hơn.</p>

      <hr class="divider">
      
      <p class="closing-text">
        "Sự thanh lịch của một cấu trúc mã là trụ cột cho tính bền vững của sinh thái mạng toàn cầu." 🚀
      </p>
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
  },
  {
    id: 5,
    title: 'CSS Box Model – Toàn tập giải ngố',
    videoId: '7604184715272228113',
    thumbnail: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=400&h=600&fit=crop',
    views: '20.5K',
    link: 'https://www.tiktok.com/@devcraftt/video/7604184715272228113?is_from_webapp=1&sender_device=pc&web_id=7619667361486833153'
  }
];
