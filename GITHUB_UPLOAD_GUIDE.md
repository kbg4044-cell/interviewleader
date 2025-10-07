# 📤 GitHub 수동 업로드 가이드

## 방법 1: GitHub 웹사이트에서 직접 업로드

### Step 1: Repository 생성 후 파일 업로드
1. **https://github.com** 에서 새 repository 생성
2. Repository 페이지에서 **"uploading an existing file"** 클릭
3. 다음 파일들을 드래그 앤 드롭으로 업로드:

### 📁 업로드할 파일 목록:
```
webapp/
├── src/
│   ├── index.tsx
│   ├── components.tsx
│   └── renderer.tsx
├── public/
│   └── static/
│       ├── app.js
│       └── style.css
├── package.json
├── vercel.json
├── vite.config.ts
├── tsconfig.json
├── ecosystem.config.cjs
├── .dev.vars
├── README.md
└── DEPLOYMENT_GUIDE.md
```

### Step 2: Commit 메시지 작성
```
면접리더 웹사이트 초기 업로드

- Hono + Cloudflare Workers 기반 웹사이트
- 베이직/스탠다드/프리미엄 3가지 서비스
- Notion API 연동 문의 폼
- Vercel 배포 설정 완료
```

## 방법 2: Git 명령어 (터미널 사용시)

### 로컬에서 GitHub에 푸시:
```bash
# 1. GitHub에서 repository 생성 후 URL 복사
# 2. 로컬에서 원격 저장소 추가
git remote add origin https://github.com/YOUR_USERNAME/interview-leader-website.git

# 3. 코드 푸시
git branch -M main
git push -u origin main
```

## ✅ 업로드 완료 확인
업로드 후 다음을 확인하세요:
- [ ] `package.json` 파일 존재
- [ ] `vercel.json` 파일 존재  
- [ ] `src/` 폴더 및 모든 파일 존재
- [ ] `public/static/` 폴더 및 파일 존재

## 🚀 다음 단계: Vercel 배포
GitHub 업로드 완료 후 Vercel에서 import 진행!