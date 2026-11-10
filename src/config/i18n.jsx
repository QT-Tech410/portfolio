import { createContext, useContext, useState, useEffect } from 'react'

export const dict = {
  vi: {
    'nav.home': 'Trang chủ',
    'nav.about': 'Giới thiệu',
    'nav.skills': 'Kỹ năng',
    'nav.projects': 'Dự án',
    'nav.resumeSection': 'Học vấn & CV',
    'nav.contact': 'Liên hệ',
    'nav.resume': 'Github',
    'nav.cvBtn': 'Xem CV',
    'nav.menu': 'Mở menu điều hướng',
    'home.hello': 'Xin chào, tôi là',
    'home.badge': 'Sinh viên năm cuối Kỹ thuật phần mềm · GPA 3.7/4.0',
    'home.type1': 'Full-stack Web Developer',
    'home.type2': 'Node.js & React Developer',
    'home.type3': 'Backend & RESTful API Builder',
    'home.type4': 'Software Engineering Student',
    'home.btnProjects': 'Xem dự án',
    'home.btnContact': 'Liên hệ',
    'home.btnCv': 'Mở CV (Google Drive)',
    'home.desc':
      'Sinh viên năm cuối ngành Công nghệ thông tin (Kỹ thuật phần mềm), định hướng phát triển Web Full-stack với trọng tâm là Node.js, Express.js, React và thiết kế RESTful API / CSDL thực chiến.',
    'home.quickFocusLabel': 'Trọng tâm ứng tuyển',
    'home.quickFocusVal': 'Full-stack Web / Node.js & React',
    'home.quickGpaLabel': 'GPA Đại học',
    'home.quickGpaVal': '3.7 / 4.0 (2 học bổng + NCKH Xuất sắc)',
    'home.termTitle': 'toannq@portfolio:~/cv-profile',
    'home.scroll': 'Cuộn xuống',
    'about.title': 'Giới thiệu & Định hướng',
    'about.subtitle': 'Hồ sơ năng lực, mục tiêu nghề nghiệp và nền tảng học thuật từ CV',
    'about.role': 'Full-stack Web Developer · Định hướng Node.js & React',
    'about.p1':
      'Tôi là Nguyễn Quang Toàn (Toan Nguyen Quang), sinh viên năm cuối ngành Công nghệ thông tin (chuyên ngành Kỹ thuật phần mềm) tại Trường Đại học Tài nguyên và Môi trường Hà Nội, có định hướng phát triển web full-stack và đặc biệt quan tâm đến hệ sinh thái Node.js.',
    'about.p2':
      'Tôi đã trực tiếp tham gia thực hiện cả các dự án cá nhân lẫn dự án nhóm (React, Node.js/Express, Socket.IO, Spring Boot, Laravel, MySQL, MongoDB), qua đó rèn luyện kỹ năng thiết kế RESTful API, cơ sở dữ liệu và phối hợp làm việc nhóm hiệu quả.',
    'about.shortTermTitle': 'Mục tiêu ngắn hạn',
    'about.shortTermDesc':
      'Tích lũy kinh nghiệm thực tế thông qua việc tham gia các dự án thực tế tại doanh nghiệp, đồng thời nâng cao kỹ năng chuyên môn (Node.js, React, kiến trúc API) và khả năng giải quyết vấn đề.',
    'about.longTermTitle': 'Mục tiêu dài hạn',
    'about.longTermDesc':
      'Xây dựng sự nghiệp ổn định trong lĩnh vực công nghệ và phát triển các giải pháp phần mềm hữu ích, mang lại giá trị thiết thực cho người dùng và doanh nghiệp.',
    'about.eduTitle': 'Học vấn',
    'about.eduSchool': 'Trường Đại học Tài nguyên và Môi trường Hà Nội (HUNRE)',
    'about.eduMajor': 'Chuyên ngành: Kỹ thuật phần mềm (2023 - 2027)',
    'about.eduGpa': 'GPA: 3.7 / 4.0',
    'about.eduCoursesLabel': 'Các môn học liên quan:',
    'about.eduCourses':
      'Cấu trúc dữ liệu và giải thuật, Lập trình hướng đối tượng (OOP), Phân tích và thiết kế phần mềm, Lập trình ứng dụng web.',
    'about.awardsTitle': 'Giải thưởng & Thành tích',
    'about.award1': 'Học bổng năm học thứ hai, học kỳ 1 năm 2024.',
    'about.award2': 'Học bổng năm thứ ba, học kỳ 1 năm 2025.',
    'about.award3': 'Đạt loại Xuất sắc trong nghiên cứu khoa học sinh viên năm học 2025 - 2026.',
    'about.location': 'Hà Nội, Việt Nam',
    'about.openToWork': 'Sẵn sàng nhận việc',
    'skills.title': 'Kỹ năng & Công cụ',
    'skills.subtitle': 'Bộ kỹ năng chuyên môn và công cụ phát triển phần mềm trong CV',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.other': 'Công cụ khác',
    'skills.langTitle': 'Ngôn ngữ lập trình',
    'skills.langNote': 'Thành thạo HTML, CSS, JavaScript, TypeScript, SQL; có kinh nghiệm làm việc với Python, PHP và C++.',
    'skills.techTitle': 'Framework & Công nghệ Web',
    'skills.techNote': 'Trọng tâm Node.js (Express.js, Socket.IO), React, Tailwind CSS, Spring Boot, Laravel, MongoDB & MySQL.',
    'skills.toolsTitle': 'Công cụ & Môi trường làm việc',
    'skills.toolsNote': 'Quản lý mã nguồn, môi trường phát triển và quy trình làm việc nhóm.',
    'projects.title': 'Dự án thực tế',
    'projects.subtitle': 'Các dự án cá nhân & dự án nhóm đã hoàn thành kèm mã nguồn công khai trên GitHub',
    'projects.filterAll': 'Tất cả (4)',
    'projects.filterFullstack': 'Full-stack / Node.js & Laravel',
    'projects.filterBackend': 'RESTful API & Database',
    'projects.filterIot': 'IoT & NCKH',
    'projects.github': 'Xem trên GitHub',
    'projects.details': 'Chi tiết',
    'projects.close': 'Đóng',
    'projects.tech': 'Công nghệ',
    'projects.highlights': 'Đóng góp & Triển khai kỹ thuật',
    'projects.cvHighlight': 'Nổi bật trong CV',
    'contact.title': 'Liên hệ',
    'contact.lead':
      'Bạn đang tìm kiếm Thực tập sinh / Fresher Full-stack Web (Node.js, React, Backend API)? Hãy liên hệ với tôi — phản hồi trong vòng 24h.',
    'contact.namePh': 'Tên của bạn',
    'contact.emailPh': 'Email của bạn',
    'contact.msgPh': 'Tin nhắn',
    'contact.send': 'Gửi',
    'contact.copyEmail': 'Nhấn để copy email',
    'contact.viewCv': 'Xem bản CV đầy đủ (PDF)',
    'footer.madeWith': 'Được xây dựng với React',
    'lang.toggle': 'EN'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.resumeSection': 'Education & CV',
    'nav.contact': 'Contact',
    'nav.resume': 'Github',
    'nav.cvBtn': 'View CV',
    'nav.menu': 'Toggle navigation menu',
    'home.hello': "Hello, I'm",
    'home.badge': 'Final-year Software Engineering Student · GPA 3.7/4.0',
    'home.type1': 'Full-stack Web Developer',
    'home.type2': 'Node.js & React Developer',
    'home.type3': 'Backend & RESTful API Builder',
    'home.type4': 'Software Engineering Student',
    'home.btnProjects': 'View Projects',
    'home.btnContact': 'Contact Me',
    'home.btnCv': 'Open CV (Google Drive)',
    'home.desc':
      'Final-year Information Technology (Software Engineering) student focused on Full-stack Web Development, specializing in Node.js, Express.js, React, RESTful APIs, and relational/NoSQL databases.',
    'home.quickFocusLabel': 'Target Role',
    'home.quickFocusVal': 'Full-stack Web / Node.js & React',
    'home.quickGpaLabel': 'University GPA',
    'home.quickGpaVal': '3.7 / 4.0 (2x Scholarship + Excellent Research)',
    'home.termTitle': 'toannq@portfolio:~/cv-profile',
    'home.scroll': 'Scroll down',
    'about.title': 'About Me & Career Goals',
    'about.subtitle': 'Background, career objectives, education, and academic honors from my CV',
    'about.role': 'Full-stack Web Developer · Node.js & React Focus',
    'about.p1':
      "I'm Toan Nguyen Quang (Nguyễn Quang Toàn), a final-year Information Technology (Software Engineering) student at Hanoi University of Natural Resources and Environment (HUNRE), focused on full-stack web development with a strong passion for Node.js.",
    'about.p2':
      'Through building both personal and 4-member team projects using React, Node.js/Express, Socket.IO, Spring Boot, Laravel, MySQL, and MongoDB, I have developed solid skills in RESTful API architecture, database design, and collaborative software delivery.',
    'about.shortTermTitle': 'Short-term Goal',
    'about.shortTermDesc':
      'Gain hands-on industry experience by contributing to real-world production projects while sharpening core technical depth in Node.js, React, and problem solving.',
    'about.longTermTitle': 'Long-term Goal',
    'about.longTermDesc':
      'Build a sustainable software engineering career and create reliable, high-value web solutions for users and businesses.',
    'about.eduTitle': 'Education',
    'about.eduSchool': 'Hanoi University of Natural Resources and Environment (HUNRE)',
    'about.eduMajor': 'Major: Software Engineering (2023 - 2027)',
    'about.eduGpa': 'GPA: 3.7 / 4.0',
    'about.eduCoursesLabel': 'Relevant Coursework:',
    'about.eduCourses':
      'Data Structures & Algorithms, Object-Oriented Programming (OOP), Software Analysis & Design, Web Application Development.',
    'about.awardsTitle': 'Honors & Scholarships',
    'about.award1': 'Academic Merit Scholarship — Sophomore Year, Semester 1 (2024).',
    'about.award2': 'Academic Merit Scholarship — Junior Year, Semester 1 (2025).',
    'about.award3': 'Excellence Award in Student Scientific Research (Academic Year 2025 - 2026).',
    'about.location': 'Hanoi, Vietnam',
    'about.openToWork': 'Open to work',
    'skills.title': 'Professional Skillset & Tools',
    'skills.subtitle': 'Programming languages, frameworks, and developer tools from my CV',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.other': 'Other Tools',
    'skills.langTitle': 'Programming Languages',
    'skills.langNote': 'Core proficiency in HTML, CSS, JavaScript, TypeScript, SQL; working experience with Python, PHP, and C++.',
    'skills.techTitle': 'Frameworks & Databases',
    'skills.techNote': 'Focused on Node.js (Express.js, Socket.IO), React, Tailwind CSS, Spring Boot, Laravel, MongoDB & MySQL.',
    'skills.toolsTitle': 'Tools & Environment',
    'skills.toolsNote': 'Version control, development environment, and daily engineering workflow.',
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Personal and team software projects with public GitHub repositories',
    'projects.filterAll': 'All Projects (4)',
    'projects.filterFullstack': 'Full-stack / Node.js & Laravel',
    'projects.filterBackend': 'RESTful API & Database',
    'projects.filterIot': 'IoT & Research',
    'projects.github': 'View on GitHub',
    'projects.details': 'Details',
    'projects.close': 'Close',
    'projects.tech': 'Tech',
    'projects.highlights': 'Technical Implementation & Contributions',
    'projects.cvHighlight': 'Featured in CV',
    'contact.title': 'Contact',
    'contact.lead':
      'Looking for a Full-stack Web / Node.js & React Intern or Fresher? Feel free to reach out — I reply within 24 hours.',
    'contact.namePh': 'Your name',
    'contact.emailPh': 'Your email',
    'contact.msgPh': 'Message',
    'contact.send': 'Send',
    'contact.copyEmail': 'Click to copy email',
    'contact.viewCv': 'View Full CV (PDF)',
    'footer.madeWith': 'Built with React',
    'lang.toggle': 'VI'
  }
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('lang')
      return saved === 'en' ? 'en' : 'vi'
    } catch {
      return 'vi'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('lang', lang)
    } catch {
      // storage unavailable (e.g. SSR, private mode) — language still works in-memory
    }
    try {
      if (typeof document !== 'undefined') {
        document.documentElement.lang = lang
      }
    } catch {
      // document unavailable (e.g. SSR) — language still works in-memory
    }
  }, [lang])

  const t = (key) => dict[lang][key] ?? key
  const toggle = () => setLang((l) => (l === 'vi' ? 'en' : 'vi'))

  return (
    <LanguageContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
