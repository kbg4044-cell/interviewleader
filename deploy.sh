#!/bin/bash

# 면접리더 웹사이트 자동 배포 스크립트

echo "🚀 면접리더 웹사이트 자동 배포를 시작합니다..."

# 1. 프로젝트 정보 설정
PROJECT_NAME="interview-leader"
DOMAIN_NAME=""  # 여기에 도메인 입력 (예: yourdomain.com)

echo "📝 프로젝트명: $PROJECT_NAME"

# 2. 빌드
echo "📦 프로젝트를 빌드하고 있습니다..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 빌드에 실패했습니다."
    exit 1
fi

echo "✅ 빌드 완료"

# 3. Wrangler 인증 확인
echo "🔐 Cloudflare 인증을 확인하고 있습니다..."
npx wrangler whoami

if [ $? -ne 0 ]; then
    echo "❌ Cloudflare 인증에 실패했습니다. API 키를 확인해주세요."
    exit 1
fi

# 4. Pages 프로젝트 생성 (이미 존재하면 무시됨)
echo "🏗️ Cloudflare Pages 프로젝트를 생성하고 있습니다..."
npx wrangler pages project create $PROJECT_NAME \
  --production-branch main \
  --compatibility-date 2024-01-01 2>/dev/null || echo "프로젝트가 이미 존재합니다."

# 5. 배포
echo "🚀 Cloudflare Pages에 배포하고 있습니다..."
npx wrangler pages deploy dist --project-name $PROJECT_NAME

if [ $? -ne 0 ]; then
    echo "❌ 배포에 실패했습니다."
    exit 1
fi

echo "✅ 배포 완료!"

# 6. 도메인 연결 (설정된 경우)
if [ -n "$DOMAIN_NAME" ]; then
    echo "🔗 커스텀 도메인을 연결하고 있습니다..."
    npx wrangler pages domain add $DOMAIN_NAME --project-name $PROJECT_NAME
    
    echo "📋 도메인 DNS 설정 안내:"
    echo "   도메인 관리 페이지에서 다음 설정을 추가하세요:"
    echo "   Type: CNAME"
    echo "   Name: @ (또는 www)"
    echo "   Value: $PROJECT_NAME.pages.dev"
    echo ""
fi

# 7. 배포 URL 출력
echo ""
echo "🎉 배포가 성공적으로 완료되었습니다!"
echo ""
echo "📍 접속 가능한 URL:"
echo "   - Cloudflare URL: https://$PROJECT_NAME.pages.dev"
if [ -n "$DOMAIN_NAME" ]; then
    echo "   - 커스텀 도메인: https://$DOMAIN_NAME (DNS 설정 후)"
fi
echo ""
echo "⚠️  DNS 전파에는 최대 24시간이 소요될 수 있습니다."