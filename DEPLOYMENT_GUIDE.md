# 🚀 면접리더 웹사이트 수동 배포 가이드

## 📋 개요
API 토큰 권한 문제로 자동 배포가 안 될 때 사용하는 수동 배포 가이드입니다.

## 🔧 방법 1: Cloudflare Dashboard 업로드

### Step 1: 빌드 파일 준비
현재 `dist` 폴더에 빌드된 파일들이 있습니다:
```
dist/
├── _worker.js      (메인 애플리케이션)
├── _routes.json    (라우팅 설정)  
└── static/         (정적 파일들)
```

### Step 2: Cloudflare Dashboard에서 배포
1. **https://dash.cloudflare.com** 로그인
2. 좌측 사이드바에서 **"Workers & Pages"** 클릭
3. **"Create application"** → **"Pages"** → **"Upload assets"** 선택
4. 프로젝트 이름: `interview-leader` 입력
5. `dist` 폴더의 모든 파일을 드래그 앤 드롭으로 업로드
6. **"Deploy site"** 클릭

### Step 3: 도메인 연결 (선택사항)
1. 배포 완료 후 **"Custom domains"** 탭으로 이동
2. **"Set up a custom domain"** 클릭
3. 본인의 도메인 입력 (예: mydomain.com)
4. DNS 설정 안내에 따라 CNAME 레코드 추가

## 🔧 방법 2: GitHub Pages 배포

### Step 1: GitHub Repository 생성
1. GitHub에서 새 repository 생성 (예: `interview-leader-website`)
2. Public 설정

### Step 2: 코드 업로드
```bash
cd /home/user/webapp
git remote add origin https://github.com/YOUR_USERNAME/interview-leader-website.git
git push -u origin main
```

### Step 3: GitHub Pages 설정  
1. Repository → Settings → Pages
2. Source: Deploy from a branch
3. Branch: main / docs (또는 gh-pages)
4. **Save** 클릭

### Step 4: GitHub Actions 워크플로우 생성
`.github/workflows/deploy.yml` 파일 생성:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
    - run: npm install
    - run: npm run build
    - uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## 🔧 방법 3: Vercel 배포 (가장 간단)

### Step 1: Vercel 계정 생성
- **https://vercel.com** 에서 GitHub 계정으로 로그인

### Step 2: 프로젝트 import
1. **"New Project"** 클릭
2. GitHub repository 선택
3. Framework Preset: **"Other"** 선택
4. Build Command: `npm run build`  
5. Output Directory: `dist`
6. **"Deploy"** 클릭

### Step 3: 도메인 연결
1. 프로젝트 대시보드 → **"Domains"** 탭
2. **"Add"** 버튼으로 커스텀 도메인 추가
3. DNS 설정 안내에 따라 설정

## 📱 배포 후 확인사항

### ✅ 체크리스트
- [ ] 메인 페이지 로딩 확인
- [ ] 서비스 상세 페이지 접속 확인 (/services/basic, /services/standard, /services/premium)
- [ ] 문의 폼 작동 확인 (Notion API 연동)
- [ ] 카카오톡 상담 링크 작동 확인
- [ ] 모바일 반응형 확인
- [ ] 성공사례 캐러셀 작동 확인

### 🔗 예상 URL
- **Cloudflare**: https://interview-leader.pages.dev
- **GitHub Pages**: https://username.github.io/interview-leader-website
- **Vercel**: https://interview-leader.vercel.app
- **커스텀 도메인**: https://yourdomain.com

## ⚠️ 주의사항

### Notion API 설정
실제 운영 시 환경변수 설정이 필요합니다:
```
NOTION_API_KEY=secret_your_api_key
NOTION_DATABASE_ID=your_database_id  
```

각 플랫폼별 환경변수 설정:
- **Cloudflare Pages**: Dashboard → Settings → Environment variables
- **Vercel**: Dashboard → Settings → Environment Variables
- **GitHub Pages**: Repository → Settings → Secrets and variables

## 🆘 문제 해결

### 404 오류 발생 시
- SPA 라우팅 설정 확인
- `_routes.json` 파일이 올바르게 업로드되었는지 확인

### API 호출 실패 시  
- 환경변수 설정 확인
- Notion API 키 및 데이터베이스 ID 확인
- CORS 설정 확인

### 성능 이슈
- CDN 설정 활성화
- 이미지 최적화 
- CSS/JS 압축 확인