# AGENTS.md

Hướng dẫn cho mọi coding agent làm việc trong repo này. Đọc file này trước khi sửa bất kỳ UI nào.

## 1. Dự án là gì

Portfolio one-page của **Toan Nguyen Quang** — sinh viên, Full-stack Developer.
React 18 + Vite + Bootstrap 5, song ngữ VI/EN, deploy Vercel.

- **Product truth:** [`PRODUCT.md`](PRODUCT.md) — người đọc, mục tiêu, ràng buộc, điều cấm bịa.
- **Visual system:** `DESIGN.md` — **chưa có**. Đây là khoảng trống tài liệu, không phải sự cho phép đổi theme. Theme hiện tại (dark purple neon, Poppins + JetBrains Mono) nằm trong `src/App.css` và là authority.
- **Nhiệm vụ của trang:** biến người lạ thành một cuộc trò chuyện tuyển dụng / freelance / kết nối. Portfolio thuộc mode **Experience** — tác phẩm dẫn dắt, giao diện lùi lại.

## 2. Hai skill, hai vai trò khác nhau

Đừng dùng lẫn. Chúng không thay thế nhau.

| | `impeccable` | `ui-ux-pro-max` |
|---|---|---|
| Vị trí | `.claude/skills/impeccable/` (project) | `~/.claude/skills/ui-ux-pro-max/` (global) |
| Bản chất | Quy trình thiết kế + engine kiểm tra + hook tự động | Cơ sở dữ liệu tra cứu (search, không sửa code) |
| Vai trò | **Chủ trì** mọi việc UI: plan, sửa, review, verify | **Cố vấn**: lấy dữ liệu khi cần một quyết định cụ thể |
| Authority | Cao — đọc `PRODUCT.md` + code hiện tại | Tham khảo — không override brief hay theme đang có |

Quy tắc phân xử khi hai bên nói khác nhau:

1. `PRODUCT.md` và theme hiện có trong code thắng.
2. Yêu cầu trực tiếp của người dùng thắng tất cả.
3. Đề xuất của ui-ux-pro-max chỉ thắng khi hai bên trên không quyết định gì.

Ví dụ cụ thể: ui-ux-pro-max sẽ trả về cặp font `Inter / Inter` cho portfolio developer. **Không đổi.** Dự án dùng Poppins + JetBrains Mono theo chủ đích.

## 3. impeccable — cách dùng

### Một lần mỗi session

```bash
./.claude/skills/impeccable/scripts/impeccable context
```

Trên PowerShell không có `sh`, dùng `.\.claude\skills\impeccable\scripts\impeccable.cmd context`.
Kết quả trả về directive — làm theo, **không chạy lại**.

### Trước mọi thao tác sửa UI

Đọc `.claude/skills/impeccable/reference/craft-floor.md`. Đây là quality floor bắt buộc: các lệnh cấm tuyệt đối và những lỗi detector không bắt được. Không đọc cho công việc chỉ-lập-kế-hoạch.

### Lệnh thường dùng ở repo này

| Mục đích | Lệnh |
|---|---|
| Review UX có điểm số | `/impeccable critique home` (hoặc `projects`, `contact`) |
| Kiểm tra a11y / perf / responsive | `/impeccable audit` |
| Lượt dọn cuối trước khi ship | `/impeccable polish <target>` |
| Sửa typography / spacing | `/impeccable typeset <target>` · `/impeccable layout <target>` |
| Thêm chuyển động có chủ đích | `/impeccable animate <target>` |
| Ghi lại hệ thống visual hiện tại | `/impeccable document` → tạo `DESIGN.md` |
| Duyệt biến thể trong trình duyệt | `/impeccable live` |

Lưu ý:
- **Không chạy lại `/impeccable init`.** `PRODUCT.md` đã tồn tại và đã được xác nhận với người dùng.
- Target hẹp cho kết quả tốt hơn target rộng. `critique projects` > `critique cả trang`.
- Chạy `/impeccable document` khi cần chốt `DESIGN.md`; **không** tự tạo file này trong lúc làm việc khác.

### Hook đã bật — hãy để nó làm việc

`.claude/settings.local.json` đã cấu hình:

- **PostToolUse** (`Edit|Write`): quét file UI vừa sửa, trả finding về ngay.
- **Stop**: lượt quét sâu toàn bộ rule.

Khi hook trả finding, sửa trước khi báo xong việc. Không tắt hook để tránh bị báo lỗi. Nếu cần tắt tạm: `/impeccable hooks off`.

### Kiểm tra bằng engine (không cần agent)

```powershell
# Quét tĩnh source
.\.claude\skills\impeccable\scripts\bin\windows-x64\impeccable.exe detect src

# Quét trang đã render — cần cho rule contrast / font size / element
npx impeccable detect http://localhost:5173
```

Exit code `2` = có finding, `1` = không quét được target.

Quét `src` chỉ chạy được rule regex (`.css`, `.js/.jsx`). Rule cần DOM thật chỉ chạy khi quét URL — **luôn chạy thêm lần quét dev server trước khi nói "đã sạch"**.

## 4. ui-ux-pro-max — cách dùng

Đây là công cụ tra cứu. Luôn gọi bằng đường dẫn tuyệt đối, không phụ thuộc cwd:

```powershell
$S = "$env:USERPROFILE\.claude\skills\ui-ux-pro-max\scripts\search.py"
python $S "<query>" --domain <domain>
```

Skill này đang cài global, **không** phải plugin — `${CLAUDE_PLUGIN_ROOT}` không được set, đừng dùng biến đó.

### Khi nào gọi

| Cần gì | Lệnh |
|---|---|
| Checklist UX / a11y / form / nav | `--domain ux "..."` |
| Gợi ý palette cho một section mới | `--domain color "..."` |
| Cặp font thay thế để cân nhắc | `--domain typography "..."` |
| Cấu trúc landing / hero | `--domain landing "..."` |
| Icon | `--domain icons "..."` |
| Motion preset GSAP | `--domain gsap "..."` |
| Hướng dẫn theo stack | `--stack react "<keyword>"` |

Stack của repo là **`react`** (Vite, không phải Next.js). Luôn truyền `--stack react` tường minh — auto-detect có thể nhận nhầm `nextjs`.

**Đừng pipe output qua `Select-Object -First N`.** Nó ngắt pipeline giữa chừng, giết tiến trình Python và trả exit code 255 dù lệnh đã chạy đúng. Muốn xem ít dòng thì ghi ra file rồi đọc, hoặc để nguyên output.

### Ba điều cấm

1. **Không chạy `--design-system --persist`.** Nó ghi `design-system/<slug>/MASTER.md` và tạo một nguồn authority thứ hai chống lại `PRODUCT.md` + `DESIGN.md`. Chỉ dùng `--design-system` không kèm `--persist` để tham khảo trong session.
2. **Không copy palette mặc định vào code.** Trả về `#1E293B / #22C55E / Inter` là dữ liệu chung, không phải quyết định của dự án. Theme thật đọc từ `src/App.css`.
3. **Không coi output là sự thật khi search ra 0 kết quả.** Nói rõ là fallback mặc định, đừng trình bày như dữ liệu DB.

## 5. Quy trình chuẩn cho một thay đổi UI

1. Xác định target hẹp (một section, một component).
2. Chạy `impeccable context`; đọc `PRODUCT.md` nếu chưa nắm.
3. Nếu cần dữ liệu cụ thể (palette, checklist, motion) → tra ui-ux-pro-max, truyền `--domain`/`--stack` tường minh.
4. Load playbook impeccable tương ứng (`reference/<command>.md`), rồi `reference/craft-floor.md`.
5. Sửa code.
6. Đọc finding của hook → sửa.
7. Verify bằng cách nhìn kết quả render thật: `npm run dev`, kiểm tra 375 / 768 / 1440 px.
8. Chạy `npm test` và `npm run build` nếu có đụng logic.

## 6. Ràng buộc nội dung — không được vi phạm

Từ `PRODUCT.md`, đã xác nhận với chủ dự án:

- **Đang là sinh viên.** Không copy nào được ngụ ý kinh nghiệm đi làm, số năm nghề, hay chức danh senior.
- **Cả 4 dự án là thật và đã hoàn thành**, có link GitHub public. Không hạ thấp thành "dự án học tập" khi nội dung không nói vậy.
- **Số điện thoại công khai là quyết định có chủ đích.** Không xoá, không ẩn, không "vì bảo mật".
- **Không bịa:** testimonial, logo khách hàng, lịch sử làm việc, chứng chỉ, số liệu người dùng.
- **Ảnh chụp dự án thật đã có** nhưng chưa nằm trong repo (`image` rỗng trong `src/config/projects.js`). Không tạo mockup rồi trình bày như ảnh sản phẩm. Hỏi chủ dự án khi cần ảnh.

## 7. Ràng buộc kỹ thuật

- **Mọi chuỗi UI đi qua `src/config/i18n.jsx`.** Không hardcode text trong component, kể cả placeholder và aria-label. Thêm key cho cả `vi` và `en`.
- **Dữ liệu cá nhân nằm trong `src/config/`** (`contact.js`, `projects.js`). Không rải vào component.
- Không thêm router, backend, CMS, analytics, hay gọi GitHub API động — đã nằm ngoài phạm vi.
- Form liên hệ dùng `mailto:`, không có service gửi form.
- Có test Vitest cho mọi component. Sửa behavior thì cập nhật test.

**Điểm lệch đang mở:** `PRODUCT.md` ghi tiếng Anh là mặc định, nhưng `src/config/i18n.jsx` vẫn trả `'vi'` khi `localStorage` chưa có lựa chọn. Chưa sửa. Nếu đụng vào i18n, hỏi chủ dự án muốn theo bên nào rồi sửa cả logic lẫn test.

## 8. Git

Commit các file sau — **đừng** ignore cả thư mục `.impeccable/`:

```
PRODUCT.md
DESIGN.md                     (khi đã có)
.impeccable/config.json
.impeccable/live/config.json
.impeccable/surfaces/
.impeccable/design.json
.impeccable/critique/ignore.md
```

`**/.impeccable/{questions,mocks,review,live/sessions}/`, `config.local.json`, và binary engine `scripts/bin/` đã tự ignore trong `.gitignore`.

`.claude/settings.local.json` (chứa hook) hiện **không** được commit: global gitignore của máy đang bỏ qua `**/.claude/settings.local.json`. Hệ quả là teammate clone repo sẽ không có hook detector. Nếu muốn cả team dùng hook, chuyển phần `hooks` sang `.claude/settings.json` và commit file đó.

## 9. Định nghĩa "xong"

- Hook không còn finding chưa xử lý, hoặc finding còn lại đã được giải thích là false positive có lý do.
- `npx impeccable detect http://localhost:5173` sạch (đây là lần quét có DOM thật).
- `npm test` pass. `npm run build` không warning.
- Đã nhìn render ở 375 / 768 / 1440 px.
- Không có chuỗi UI hardcode; bản `vi` và `en` đều đúng.
- Không thêm claim mới nào chưa được chủ dự án xác nhận.
