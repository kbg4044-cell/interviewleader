# Notion API 설정 가이드

문의 폼 데이터를 Notion 데이터베이스에 저장하기 위한 설정 가이드입니다.

## 1. Notion 데이터베이스 생성

### 1.1 새 페이지 생성
1. Notion에서 새 페이지를 생성합니다
2. 페이지 제목: "면접리더 문의 접수"

### 1.2 데이터베이스 테이블 생성
페이지 내에서 `/table` 명령을 입력하여 테이블을 생성하고 다음 속성들을 추가하세요:

| 속성명 | 속성 타입 | 설명 |
|--------|-----------|------|
| **이름** | Title | 문의자 이름 (기본 제목 속성) |
| **이메일** | Email | 문의자 이메일 |
| **문의내용** | Text | 문의 내용 |
| **접수일시** | Date | 문의 접수 시간 |
| **상태** | Select | 신규/처리중/완료 |

### 1.3 상태 선택 옵션 설정
상태 속성에서 다음 옵션들을 추가하세요:
- **신규** (빨간색)
- **처리중** (노란색)  
- **완료** (초록색)

## 2. Notion API 키 발급

### 2.1 Integration 생성
1. [Notion Developers](https://www.notion.so/my-integrations)에 접속
2. "New integration" 클릭
3. Integration 정보 입력:
   - Name: "면접리더 문의 시스템"
   - Associated workspace: 해당 워크스페이스 선택
   - Capabilities: "Read content", "Update content", "Insert content" 체크

### 2.2 API 키 복사
생성된 Integration에서 "Internal Integration Token"을 복사합니다.
형식: `secret_...` 로 시작하는 긴 문자열

## 3. 데이터베이스 ID 확인

### 3.1 데이터베이스 공유
1. 생성한 데이터베이스 페이지에서 "Share" 버튼 클릭
2. "Add connections" 섹션에서 생성한 Integration 선택
3. "Invite" 클릭

### 3.2 데이터베이스 ID 복사
데이터베이스 URL에서 ID를 추출합니다:
```
https://notion.so/{workspace}/{DATABASE_ID}?v={view_id}
```
DATABASE_ID 부분 (32자리 문자열)을 복사합니다.

## 4. 환경 변수 설정

### 4.1 로컬 개발 환경 (.dev.vars)
```bash
NOTION_API_KEY=secret_YOUR_ACTUAL_API_KEY
NOTION_DATABASE_ID=YOUR_ACTUAL_DATABASE_ID
```

### 4.2 Cloudflare Pages 프로덕션 환경
```bash
# Cloudflare Pages 대시보드에서 환경 변수 설정
# 또는 wrangler 명령어로 설정:

npx wrangler pages secret put NOTION_API_KEY
# 입력 프롬프트에서 실제 API 키 입력

npx wrangler pages secret put NOTION_DATABASE_ID  
# 입력 프롬프트에서 실제 데이터베이스 ID 입력
```

## 5. 테스트

### 5.1 로컬 테스트
```bash
# 환경 변수가 설정된 상태에서
npm run build
pm2 start ecosystem.config.cjs

# 테스트 요청
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "김테스트", 
    "email": "test@example.com", 
    "message": "Notion 연동 테스트입니다."
  }'
```

### 5.2 프로덕션 테스트
웹사이트의 문의 폼을 통해 실제 테스트를 진행하고 Notion 데이터베이스에 데이터가 저장되는지 확인합니다.

## 6. 데이터 확인

Notion 데이터베이스에서 다음과 같은 형태로 데이터가 저장됩니다:

| 이름 | 이메일 | 문의내용 | 접수일시 | 상태 |
|------|--------|----------|----------|------|
| 김테스트 | test@example.com | Notion 연동 테스트입니다. | 2024-12-29 15:30 | 신규 |

## 7. 트러블슈팅

### 7.1 일반적인 오류들

**"Notion API Error: 401"**
- API 키가 올바르지 않거나 만료됨
- Integration이 데이터베이스에 접근 권한이 없음

**"Notion API Error: 404"**  
- 데이터베이스 ID가 올바르지 않음
- 데이터베이스가 Integration에 공유되지 않음

**"property does not exist"**
- 데이터베이스의 속성명이 코드와 일치하지 않음
- 속성 타입이 올바르지 않음

### 7.2 폴백 시스템
환경 변수가 설정되지 않은 경우 콘솔에 로그만 출력되며, 사용자에게는 정상 처리된 것으로 응답합니다.

## 8. 보안 주의사항

- API 키는 절대 Git에 커밋하지 마세요
- .dev.vars 파일은 .gitignore에 포함되어 있습니다  
- 프로덕션에서는 반드시 Cloudflare Secrets를 사용하세요
- Integration 권한은 필요한 최소한으로 설정하세요