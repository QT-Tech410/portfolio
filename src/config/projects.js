export const PROJECTS = [
  {
    id: 'chatapp',
    title: 'ChatApp',
    subtitleVi: 'Dự án cá nhân',
    subtitleEn: 'Personal Project',
    period: '01/2026 - 05/2026',
    featured: true,
    category: 'fullstack',
    descVi: 'Ứng dụng trò chuyện thời gian thực với React, Node.js, Socket.IO và MongoDB',
    descEn: 'Real-time chat application built with React, Node.js, Socket.IO, and MongoDB',
    longVi:
      'Ứng dụng nhắn tin thời gian thực phát triển bằng React, Node.js (Express.js) và Socket.IO, hỗ trợ trò chuyện tức thời theo phòng, xác thực bảo mật bằng JWT & bcrypt, lưu trữ lịch sử tin nhắn trên MongoDB và theo dõi trạng thái online/đang nhập theo thời gian thực.',
    longEn:
      'A full-stack real-time messaging application built with React, Node.js (Express.js), and Socket.IO supporting room-based instant messaging, secure JWT & bcrypt session authentication, MongoDB message persistence, and real-time online/typing status indicators.',
    highlightsVi: [
      'Phát triển ứng dụng trò chuyện thời gian thực sử dụng React, Node.js và Socket.IO, hỗ trợ nhắn tin tức thời và giao tiếp dựa trên phòng trò chuyện.',
      'Triển khai xác thực người dùng và quản lý phiên đăng nhập an toàn bằng JWT và bcrypt, kết hợp lưu trữ lịch sử tin nhắn trong MongoDB.',
      'Thiết kế giao diện với Tailwind CSS và xây dựng tính năng theo dõi trạng thái trực tuyến/ngoại tuyến, chỉ báo người dùng đang nhập tin nhắn theo thời gian thực.'
    ],
    highlightsEn: [
      'Developed a real-time chat system using React, Node.js, and Socket.IO supporting instant messaging and room-based communication.',
      'Implemented secure user authentication and session management with JWT and bcrypt alongside MongoDB message history persistence.',
      'Designed a responsive UI with Tailwind CSS featuring live online/offline presence tracking and real-time typing indicators.'
    ],
    tech: ['React', 'Node.js', 'Express.js', 'Socket.IO', 'MongoDB', 'JWT', 'Tailwind CSS', 'TypeScript'],
    github: 'https://github.com/QT-Tech410/ChatApp',
    image: ''
  },
  {
    id: 'banhmyking',
    title: 'Banh My King',
    subtitleVi: 'Dự án nhóm (4 thành viên)',
    subtitleEn: 'Team Project (4 members)',
    period: '08/2026 - 10/2026',
    featured: true,
    category: 'backend',
    descVi: 'Hệ thống đặt bánh mì & đơn hàng trực tuyến với RESTful API và MySQL',
    descEn: 'Online banh mi ordering application with RESTful API and MySQL',
    longVi:
      'Ứng dụng đặt bánh mì và đặt hàng trực tuyến xây dựng với kiến trúc RESTful API, xử lý logic nghiệp vụ quản lý sản phẩm, đơn hàng, khách hàng và tối ưu hóa truy vấn cơ sở dữ liệu MySQL đảm bảo tính nhất quán.',
    longEn:
      'An online banh mi ordering application engineered with RESTful APIs and business logic for managing products, orders, and customer records backed by a normalized MySQL relational database.',
    highlightsVi: [
      'Phát triển ứng dụng đặt bánh mì và đặt hàng trực tuyến sử dụng Spring Boot / Laravel và MySQL.',
      'Xây dựng RESTful API và logic nghiệp vụ để quản lý sản phẩm, đơn hàng và thông tin khách hàng.',
      'Thiết kế và triển khai các thao tác cơ sở dữ liệu nhằm bảo đảm tính nhất quán và hiệu quả của quy trình làm việc.'
    ],
    highlightsEn: [
      'Developed an online food ordering application using Spring Boot / Laravel and MySQL.',
      'Built RESTful APIs and core business logic to manage products, customer orders, and user profiles.',
      'Designed and implemented relational database operations ensuring transactional consistency and workflow efficiency.'
    ],
    tech: ['Spring Boot', 'Laravel', 'RESTful API', 'MySQL', 'Web'],
    github: 'https://github.com/QT-Tech410/banhmyking',
    image: ''
  },
  {
    id: 'sports-booking',
    title: 'Sports Booking',
    altTitle: 'ArenaSportBooking',
    subtitleVi: 'Dự án nhóm (4 thành viên)',
    subtitleEn: 'Team Project (4 members)',
    period: '08/2026 - 10/2026',
    featured: true,
    category: 'fullstack',
    descVi: 'Nền tảng đặt sân thể thao trực tuyến (ArenaSportBooking) tích hợp cổng thanh toán',
    descEn: 'Online sports venue booking platform (ArenaSportBooking) with payment integration',
    longVi:
      'Nền tảng đặt sân thể thao trực tuyến (ArenaSportBooking) phát triển bằng Laravel, MySQL và Blade, cho phép người dùng tìm kiếm sân, chọn khung giờ trống và đặt sân nhanh chóng kèm tích hợp cổng thanh toán an toàn.',
    longEn:
      'An online sports venue booking platform (ArenaSportBooking) built with Laravel, MySQL, and Blade enabling users to search courts, select available time slots, and complete bookings with secure payment gateway integration.',
    highlightsVi: [
      'Phát triển nền tảng đặt sân thể thao trực tuyến sử dụng Laravel, MySQL và Blade, cho phép người dùng tìm kiếm, lựa chọn khung giờ và đặt sân.',
      'Đóng góp vào thiết kế cơ sở dữ liệu phía backend, triển khai RESTful API và tích hợp cổng thanh toán an toàn.'
    ],
    highlightsEn: [
      'Built an online sports venue reservation platform using Laravel, MySQL, and Blade for searching courts, selecting time slots, and booking.',
      'Contributed to backend relational schema design, RESTful API endpoints, and secure payment gateway integration.'
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'Blade', 'RESTful API'],
    github: 'https://github.com/QT-Tech410/sports-booking-laravel',
    image: ''
  },
  {
    id: 'driversafeiot',
    title: 'DriverSafeIoT',
    subtitleVi: 'Nghiên cứu & Dự án IoT',
    subtitleEn: 'Research & IoT Project',
    period: '2025 - 2026',
    featured: false,
    category: 'iot',
    descVi: 'Hệ thống IoT giám sát an toàn lái xe và cảnh báo mất tập trung thời gian thực',
    descEn: 'IoT system for real-time driver safety monitoring and drowsiness alerting',
    longVi:
      'DriverSafeIoT thu thập dữ liệu từ cảm biến và xử lý bằng Python để phát hiện, cảnh báo sớm các tình huống lái xe không an toàn như buồn ngủ hoặc mất tập trung, góp phần đạt giải Xuất sắc Nghiên cứu khoa học sinh viên 2025–2026.',
    longEn:
      'DriverSafeIoT collects and processes sensor streams with Python to detect and alert unsafe driving conditions such as drowsiness or distraction in real time.',
    highlightsVi: [
      'Thu thập và xử lý dữ liệu cảm biến theo thời gian thực bằng Python để phát hiện dấu hiệu buồn ngủ hoặc mất tập trung khi lái xe.',
      'Thiết kế luồng cảnh báo tức thời và giao diện giám sát giúp nâng cao độ tin cậy trong vận hành thực tế.'
    ],
    highlightsEn: [
      'Collected and processed real-time sensor streams in Python to detect driver drowsiness and distraction.',
      'Engineered low-latency alert pipelines and monitoring interfaces for practical road safety.'
    ],
    tech: ['Python', 'IoT', 'Embedded', 'Sensors'],
    github: 'https://github.com/QT-Tech410/DriverSafeIoT',
    image: ''
  }
]
