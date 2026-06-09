# Fusion Mobility Inc. — Website

**fusmokorea.github.io** (또는 설정한 도메인)

## 파일 구조

```
fusmo-website/
├── index.html              ← 메인 홈페이지
├── contact.html            ← 문의 페이지
├── projects.html           ← 프로젝트 페이지
├── assets/
│   ├── css/
│   │   └── style.css       ← 전체 스타일
│   ├── js/
│   │   └── main.js         ← 네비게이션 등 JS
│   └── images/             ← 사진 파일 저장 위치
├── services/
│   ├── 01-project-management.html
│   ├── 02-refit-repair.html
│   ├── 03-inspection.html
│   ├── 04-equipment.html
│   ├── 05-design.html
│   ├── 06-rnd.html
│   ├── 07-usnav.html
│   └── 08-workforce.html
└── README.md
```

## GitHub Pages 배포 방법 (초보자용)

### 1단계 — GitHub 계정 준비
- https://github.com 접속 → 회원가입 (이미 있으면 로그인)

### 2단계 — 새 Repository(저장소) 만들기
1. 우측 상단 `+` 버튼 → **New repository** 클릭
2. Repository name: `fusmokorea.github.io`  
   ※ 본인 GitHub 아이디가 `fusmokorea` 라면 주소가 **https://fusmokorea.github.io** 가 됩니다
3. **Public** 선택
4. **Create repository** 클릭

### 3단계 — 파일 업로드
1. 새로 만든 repository 페이지에서 **uploading an existing file** 클릭
2. 이 폴더 안의 **모든 파일과 폴더**를 드래그앤드롭
3. 아래 **Commit changes** 클릭

### 4단계 — GitHub Pages 활성화
1. Repository 상단 탭에서 **Settings** 클릭
2. 왼쪽 메뉴 **Pages** 클릭
3. Source: **Deploy from a branch** 선택
4. Branch: **main** → **/ (root)** → **Save** 클릭
5. 1~2분 후 `https://[아이디].github.io` 접속하면 완료!

---

## 문의 폼 연결 (Formspree)

현재 contact.html의 form action이 `YOUR_FORM_ID`로 되어 있습니다.  
이메일을 받으려면 아래 과정이 필요합니다:

1. https://formspree.io 접속 → 무료 회원가입
2. **New Form** 생성 → 이메일 주소 입력
3. 생성된 Form ID (예: `xpwzabcd`) 복사
4. `contact.html` 파일에서  
   `YOUR_FORM_ID` → 실제 Form ID로 교체  
   예: `action="https://formspree.io/f/xpwzabcd"`
5. 저장 후 GitHub에 재업로드

---

## 사진 추가 방법

1. 사진 파일을 `assets/images/` 폴더에 저장
2. `projects.html` 내 `<div class="project-img">[ Photo ]</div>` 부분을  
   `<img src="assets/images/파일명.jpg" alt="설명">` 으로 교체
3. GitHub에 업로드

---

## 로고 이미지 추가

1. 로고 파일 (PNG 투명 배경 권장)을 `assets/images/logo.png` 로 저장
2. 각 HTML 파일의 `.logo` 부분에 img 태그 추가  
   `<img src="../assets/images/logo.png" alt="Fusion Mobility" height="36"/>`
