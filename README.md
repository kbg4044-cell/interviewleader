# 면접리더 - 브랜딩 페이지

## 프로젝트 개요
- **이름**: 면접리더 브랜딩 페이지
- **목표**: 10년 경력 HR 전문가 '면접리더' 개인 브랜드를 전문적으로 보여주는 원페이지 웹사이트
- **타겟**: 이직/취업 준비생 및 기업 HR 담당자

## 현재 완료된 기능
✅ **Hero Section**: 메인 카피 "이직, 이제 합격을 설계하다"와 CTA 버튼  
✅ **About Section**: 면접리더 소개 및 경력 타임라인 (2015-현재)  
✅ **Services Section**: 3개 요금제 (베이직 79만원, 프로 149만원, 어드밴스드 239만원)  
✅ **서비스 상세 페이지**: 각 요금제별 전용 상세 설명 페이지 + 라우팅  
✅ **Case Study Section**: 15개 성공사례 캐러셀 + 주요 합격기업 로고  
✅ **Contact Section**: 문의 폼 및 카카오톡 상담 연동 + **Notion API 연동**  
✅ **반응형 디자인**: 모바일/데스크톱 최적화  
✅ **애니메이션**: AOS 라이브러리 + 캐러셀 애니메이션  
✅ **캐러셀 기능**: 자동 슬라이드, 터치/스와이프 지원, 키보드 네비게이션  

## 주요 기능 URIs
- **메인 페이지**: `/` - 모든 섹션이 포함된 원페이지
- **서비스 상세 페이지들**:
  - `/services/basic` - 베이직 프로그램 상세 정보
  - `/services/pro` - 프로 프로그램 상세 정보  
  - `/services/advanced` - 어드밴스드 프로그램 상세 정보
- **문의 API**: `POST /api/contact` - 폼 데이터 처리 및 Notion 저장
  - 파라미터: `{ name: string, email: string, message: string }`
  - 응답: `{ success: boolean, message: string }`
  - 유효성 검증: 이름(2-50자), 이메일 형식, 메시지(10-1000자)
- **정적 파일**: `/static/*` - CSS, JS, 이미지 파일

## 아직 구현되지 않은 기능
⏳ **이메일 알림**: 문의 접수 시 자동 이메일 발송  
⏳ **애널리틱스**: Google Analytics 연동  
⏳ **관리자 대시보드**: 문의 관리 및 통계 페이지  

## 다음 개발 단계 추천
1. **SendGrid 이메일 연동**: 문의 접수 시 자동 응답 메일 및 관리자 알림
2. **Notion 설정**: 실제 Notion API 키 및 데이터베이스 연동 (NOTION_SETUP.md 참조)
3. **SEO 최적화**: 메타 태그, 구조화된 데이터, 사이트맵 추가
4. **성능 최적화**: 이미지 최적화, CSS/JS 압축, CDN 활용
5. **A/B 테스트**: CTA 버튼 색상/문구 테스트
6. **관리자 대시보드**: Notion 연동 문의 관리 페이지

## URLs
- **개발 서버**: https://3000-ik3rod9w0e0e0lus5qyno-6532622b.e2b.dev
- **GitHub**: (배포 예정)
- **운영**: (Cloudflare Pages 배포 예정)

## 기술 스택
- **백엔드**: Hono (Cloudflare Workers)
- **프론트엔드**: JSX + Tailwind CSS
- **폰트**: Pretendard
- **애니메이션**: AOS (Animate On Scroll)
- **아이콘**: Font Awesome
- **배포**: Cloudflare Pages

## 데이터 구조

### 문의 폼 데이터
```typescript
interface ContactForm {
  name: string;      // 이름 (2-50자)
  email: string;     // 이메일 (형식 검증)
  message: string;   // 상담 내용 (10-1000자)
}
```

### Notion 데이터베이스 구조
| 속성명 | 타입 | 설명 |
|--------|------|------|
| 이름 | Title | 문의자 이름 |
| 이메일 | Email | 문의자 이메일 |  
| 문의내용 | Text | 문의 내용 |
| 접수일시 | Date | 자동 생성 타임스탬프 |
| 상태 | Select | 신규/처리중/완료 |

## 사용자 가이드
1. **메인 페이지 접속**: 면접리더 브랜드 소개 확인
2. **서비스 선택**: 3개 요금제 중 적합한 프로그램 확인
3. **서비스 선택**: 
   - 메인 페이지에서 3개 요금제 개요 확인
   - "자세히 보기" 버튼으로 각 서비스 상세 페이지 이동
   - 전용 상세 페이지에서 커리큘럼, 포함 서비스, 성과 등 확인
4. **성공 사례**: 실제 고객 후기 및 주요 합격기업 확인
5. **상담 신청**: 
   - 폼 작성 후 전송 (Notion에 자동 저장) 또는
   - 카카오톡으로 바로 상담 (http://pf.kakao.com/_txixovn)
   - 입력 검증: 이름 2-50자, 올바른 이메일, 메시지 10-1000자

## 배포 상태
- **플랫폼**: Cloudflare Pages (예정)
- **상태**: 🟡 개발 완료, 배포 대기
- **마지막 업데이트**: 2024년 12월 29일

## 디자인 특징
- **컬러**: 화이트/블랙/그레이 + 블루 액센트
- **스타일**: 미니멀하고 전문적인 디자인
- **레이아웃**: 원페이지 스크롤형
- **폰트**: Pretendard (한글 최적화)

## 개발 명령어
```bash
# 개발 서버 시작
npm run build && pm2 start ecosystem.config.cjs

# 빌드
npm run build

# 포트 정리
npm run clean-port

# 배포
npm run deploy:prod

# API 테스트
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"김테스트","email":"test@example.com","message":"테스트 메시지입니다. 충분히 긴 메시지입니다."}'
```

## Notion 연동 설정
실제 운영을 위해서는 **NOTION_SETUP.md** 파일을 참조하여 다음을 설정하세요:

1. **Notion 데이터베이스 생성** (이름, 이메일, 문의내용, 접수일시, 상태 속성)
2. **Notion Integration 생성** 및 API 키 발급
3. **환경 변수 설정**:
   ```bash
   # .dev.vars (로컬)
   NOTION_API_KEY=secret_your_api_key
   NOTION_DATABASE_ID=your_database_id
   
   # Cloudflare Pages (프로덕션)
   npx wrangler pages secret put NOTION_API_KEY
   npx wrangler pages secret put NOTION_DATABASE_ID
   ```

환경 변수가 없으면 콘솔 로그만 출력되며 정상 응답을 반환합니다.