# Spec Thiết kế: Portfolio Toan Nguyen Quang

Ngày: 2026-11-06
Trạng thái: Bản nháp — chờ Toan xem xét

## 1. Tổng quan

Portfolio cá nhân one-page cho **Toan Nguyen Quang (ToanNQ)**, lấy cảm hứng từ mẫu [soumyajit.vercel.app](https://soumyajit.vercel.app) (source: github.com/soumyajit4419/Portfolio) nhưng viết lại toàn bộ code, không sao chép trực tiếp.

**Điểm khác biệt so với mẫu:**
- Song ngữ Việt-Anh với toggle (mặc định tiếng Việt)
- Dữ liệu cá nhân tập trung vào file config, dễ cập nhật
- Nội dung và 4 dự án riêng của ToanNQ

## 2. Công nghệ

- **React 18 + Vite** — SPA one-page, không router phức tạp (scroll giữa các section)
- **Bootstrap 5** — responsive, dark theme
- Typewriter effect cho phần giới thiệu (tự viết hoặc dùng thư viện nhẹ)
- Deploy target: Vercel

## 3. Thông tin cá nhân

| Trường | Giá trị |
|---|---|
| Tên hiển thị | Toan Nguyen Quang |
| GitHub username | QT-Tech410 |
| Email | quangtoan2005.work@gmail.com |
| Điện thoại | (+84) 362156059 |
| LinkedIn | linkedin.com/in/toan-nguyen-quang |
| GitHub | github.com/QT-Tech410 |
| Avatar | `https://avatars.githubusercontent.com/u/206489880?v=4` |
| Chức danh | Full-stack Developer |

## 4. Cấu trúc thư mục

```
2_Portfolio/
├── docs/superpowers/specs/          # Spec & kế hoạch
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css                      # Theme chung, dark mode
    ├── config/
    │   ├── i18n.jsx                 # Từ điển VI/EN + Context Provider
    │   ├── projects.js              # 4 dự án chính
    │   └── contact.js               # Thông tin liên hệ (mục 3)
    └── components/
        ├── Navbar.jsx               # Toggle ngôn ngữ + menu responsive
        ├── Home.jsx                 # Hero + Typewriter
        ├── About.jsx                # Giới thiệu + avatar
        ├── Skills.jsx               # Kỹ năng theo nhóm
        ├── Projects.jsx             # Card dự án + modal chi tiết
        ├── Contact.jsx              # Thông tin LH + form mailto
        └── Footer.jsx
```

## 5. Nội dung các section

### 5.1 Navbar
- Logo "ToanNQ." phía trái
- Link: Home, About, Skills, Projects, Contact
- Nút toggle VI/EN phía phải
- Mobile: hamburger menu

### 5.2 Home (Hero)
- "Xin chào, tôi là" → **Toan Nguyen Quang**
- Typewriter xoay vòng: "Full-stack Developer" / "React Developer" / "Laravel Developer"
- 2 nút: "Xem dự án" (scroll tới Projects) + "Liên hệ" (scroll tới Contact)

### 5.3 About
- Avatar từ GitHub
- Giới thiệu ngắn về ToanNQ: sinh viên/lập trình viên full-stack, đam mê xây dựng web app hoàn chỉnh từ front-end đến back-end
- Thông tin nhanh: email, vị trí (Việt Nam), trạng thái sẵn sàng nhận việc

### 5.4 Skills
Chia 3 nhóm:
- **Frontend**: React, TypeScript, JavaScript, HTML/CSS, Bootstrap, Tailwind
- **Backend**: Laravel/PHP, Node.js, MySQL
- **Công cụ khác**: Python, Git, REST API, IoT

### 5.5 Projects — 4 dự án chính

| # | Dự án | Mô tả | Tech | Link |
|---|---|---|---|---|
| 1 | DriverSafeIoT | Hệ thống IoT giám sát an toàn lái xe | Python, IoT | github.com/QT-Tech410/DriverSafeIoT |
| 2 | ChatApp | Ứng dụng chat thời gian thực | TypeScript, React | github.com/QT-Tech410/ChatApp |
| 3 | Sports Booking | Nền tảng đặt sân thể thao | Laravel, Blade, MySQL | github.com/QT-Tech410/sports-booking-laravel |
| 4 | Banh My King | Website thương mại điện tử | Web, Laravel | github.com/QT-Tech410/banhmyking |

Mỗi dự án: card với ảnh preview (placeholder nếu chưa có), tag công nghệ, click mở **modal chi tiết** (mô tả dài + link GitHub).

### 5.6 Contact
- Card thông tin: Email, SĐT (+84) 362156059, LinkedIn, GitHub
- Form liên hệ gửi qua `mailto:` (không cần backend)
- Icon từ react-icons hoặc SVG inline

### 5.7 Footer
- Copyright + link social

## 6. Song ngữ (i18n)

- Context Provider `LanguageContext` + hook `useLanguage()`
- Từ điển trong `src/config/i18n.jsx`: cấu trúc `{ vi: {...}, en: {...} }`
- Mặc định: `vi`; lựa chọn lưu vào `localStorage`
- Toggle ở Navbar; toàn bộ text UI (kể cả placeholder form) qua i18n

## 7. Xử lý lỗi & Edge cases

- **Ảnh dự án**: nếu không load được → hiển thị placeholder gradient với tên dự án
- **Avatar GitHub**: fallback về icon người dùng nếu URL lỗi
- **Form mailto**: nếu trình duyệt không mở được mail client → hiển thị email dạng text để copy
- Không gọi API ngoài khi chạy → không có rate limit

## 8. Kiểm thử & Hoàn thành

- `npm run build` pass không lỗi, không warning
- Toggle VI/EN: toàn bộ text chuyển ngôn ngữ, refresh giữ lựa chọn
- Responsive: kiểm tra ở 375px (mobile), 768px (tablet), 1440px (desktop)
- Mọi link GitHub/LinkedIn/email hoạt động đúng
- Deploy được lên Vercel

## 9. Phạm vi loại trừ (Out of scope)

- Không có blog, CMS, hay phần quản trị
- Không có backend riêng — form liên hệ dùng mailto
- Không tích hợp GitHub API động (dữ liệu tĩnh theo yêu cầu)
- Không có analytics
