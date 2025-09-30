import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="ko">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>면접리더 - 이직, 이제 합격을 설계하다</title>
        <meta name="description" content="10년 경력 HR 전문가 면접리더와 함께 이직 성공을 설계하세요. 맞춤형 면접 코칭과 컨설팅으로 합격률을 높이세요." />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Pretendard:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Tailwind CSS */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    fontFamily: {
                      'pretendard': ['Pretendard', 'system-ui', 'sans-serif'],
                    },
                    colors: {
                      'primary': '#1f2937',
                      'secondary': '#374151',
                      'accent': '#3b82f6',
                    }
                  }
                }
              }
            `,
          }}
        />
        
        {/* Icons */}
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        
        {/* Custom CSS */}
        <link href="/static/style.css" rel="stylesheet" />
        
        {/* Animation Library */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" rel="stylesheet" />
      </head>
      <body className="font-pretendard bg-white text-gray-900 overflow-x-hidden">
        {children}
        
        {/* JavaScript */}
        <script src="/static/app.js"></script>
      </body>
    </html>
  )
})