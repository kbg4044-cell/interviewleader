import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'
import { BasicServicePage, ProServicePage, AdvancedServicePage } from './components'

type Bindings = {
  NOTION_API_KEY: string
  NOTION_DATABASE_ID: string
}

const app = new Hono<{ Bindings: Bindings }>()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Use renderer for all routes
app.use(renderer)

// Notion API 함수들
async function createNotionPage(apiKey: string, databaseId: string, name: string, email: string, message: string) {
  const url = 'https://api.notion.com/v1/pages';
  
  const body = {
    parent: {
      database_id: databaseId
    },
    properties: {
      '이름': {
        title: [
          {
            text: {
              content: name
            }
          }
        ]
      },
      '이메일': {
        email: email
      },
      '문의내용': {
        rich_text: [
          {
            text: {
              content: message
            }
          }
        ]
      },
      '접수일시': {
        date: {
          start: new Date().toISOString()
        }
      },
      'Select': {
        select: {
          name: '신규'
        }
      }
    }
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'Notion-Version': '2022-06-28'
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Notion API Error: ${response.status} - ${errorText}`);
  }

  return await response.json();
}

// API Routes
app.post('/api/contact', async (c) => {
  try {
    const { env } = c
    const body = await c.req.json()
    const { name, email, message } = body
    
    // 입력 데이터 검증
    if (!name || !email || !message) {
      return c.json({ 
        success: false, 
        message: '모든 필드를 입력해주세요.' 
      }, 400)
    }
    
    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return c.json({ 
        success: false, 
        message: '올바른 이메일 주소를 입력해주세요.' 
      }, 400)
    }
    
    // 이름 길이 검증
    if (name.length < 2 || name.length > 50) {
      return c.json({ 
        success: false, 
        message: '이름은 2-50자 사이로 입력해주세요.' 
      }, 400)
    }
    
    // 문의내용 길이 검증
    if (message.length < 10 || message.length > 1000) {
      return c.json({ 
        success: false, 
        message: '문의내용은 10-1000자 사이로 입력해주세요.' 
      }, 400)
    }
    
    // Notion API 키와 데이터베이스 ID 확인
    const notionApiKey = env?.NOTION_API_KEY
    const notionDatabaseId = env?.NOTION_DATABASE_ID
    
    if (!notionApiKey || !notionDatabaseId) {
      console.log('Notion 설정이 없어 콘솔에만 출력:', { name, email, message })
      return c.json({ 
        success: true, 
        message: '문의가 접수되었습니다. (개발 모드: 콘솔 출력)' 
      })
    }
    
    // Notion에 데이터 저장
    try {
      await createNotionPage(notionApiKey, notionDatabaseId, name, email, message)
      
      return c.json({ 
        success: true, 
        message: '문의가 성공적으로 전송되었습니다. 24시간 내에 답변드리겠습니다.' 
      })
    } catch (notionError) {
      console.error('Notion API Error:', notionError)
      
      // Notion 저장 실패 시 폴백으로 콘솔 출력
      console.log('Notion 저장 실패, 콘솔 출력:', { 
        timestamp: new Date().toISOString(),
        name, 
        email, 
        message,
        error: notionError.message 
      })
      
      return c.json({ 
        success: true, 
        message: '문의가 접수되었습니다. 빠른 시일 내에 답변드리겠습니다.' 
      })
    }
    
  } catch (error) {
    console.error('Contact form error:', error)
    return c.json({ 
      success: false, 
      message: '문의 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' 
    }, 500)
  }
})

// Main Page
app.get('/', (c) => {
  return c.render(
    <div>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">
            면접리더
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors smooth-scroll">소개</a>
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors smooth-scroll">서비스</a>
            <a href="#case" className="text-gray-600 hover:text-primary transition-colors smooth-scroll">성과</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors smooth-scroll">상담하기</a>
          </div>
          <button className="md:hidden text-gray-600" id="mobile-menu-btn">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className="md:hidden hidden bg-white border-t border-gray-100" id="mobile-menu">
          <div className="px-6 py-4 space-y-4">
            <a href="#about" className="block text-gray-600 hover:text-primary transition-colors smooth-scroll">소개</a>
            <a href="#services" className="block text-gray-600 hover:text-primary transition-colors smooth-scroll">서비스</a>
            <a href="#case" className="block text-gray-600 hover:text-primary transition-colors smooth-scroll">성과</a>
            <a href="#contact" className="block text-gray-600 hover:text-primary transition-colors smooth-scroll">상담하기</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
              이직, 이제
              <br />
              <span className="text-accent">합격을 설계하다</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              10년 경력 HR 전문가, <strong>면접리더</strong>
              <br />
              당신의 이직 성공을 과학적으로 설계합니다
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                className="bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl smooth-scroll"
                onClick="scrollToSection('contact')"
              >
                <i className="fas fa-comment-dots mr-2"></i>
                나와 상담하기
              </button>
              
              <button 
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 smooth-scroll"
                onClick="scrollToSection('case')"
              >
                <i className="fas fa-trophy mr-2"></i>
                성공후기 보기
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i className="fas fa-chevron-down text-gray-400 text-xl"></i>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">면접리더 소개</h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  저는 <strong>10년간 HR/면접 현장에서 100회 이상의 면접을 진행</strong>하며, 
                  취준생과 이직러의 합격을 설계해왔습니다.
                  <br /><br />
                  현재 <strong>코스피 상장사 HRD를 담당</strong>하며, 동시에 취업 컨설턴트 
                  <strong>'면접리더'</strong>로 활동하고 있습니다.
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <i className="fas fa-award text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">10년 HR 경력</h4>
                    <p className="text-gray-600">100회 이상 면접 진행</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="timeline-item" data-aos="fade-left" data-aos-delay="100">
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-accent rounded-full"></div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary">2024–현재</h4>
                      <p className="text-gray-600">코스피 상장사 HRD</p>
                    </div>
                  </div>
                </div>
                
                <div className="timeline-item" data-aos="fade-left" data-aos-delay="200">
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-accent rounded-full"></div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary">2023–2024</h4>
                      <p className="text-gray-600">스타트업 HR</p>
                    </div>
                  </div>
                </div>
                
                <div className="timeline-item" data-aos="fade-left" data-aos-delay="300">
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-accent rounded-full"></div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary">2016–현재</h4>
                      <p className="text-gray-600">취업 컨설턴트 활동</p>
                    </div>
                  </div>
                </div>
                
                <div className="timeline-item" data-aos="fade-left" data-aos-delay="400">
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-accent rounded-full"></div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary">2016–2019</h4>
                      <p className="text-gray-600">지방 사립대학교 교직원</p>
                    </div>
                  </div>
                </div>
                
                <div className="timeline-item" data-aos="fade-left" data-aos-delay="500">
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-accent rounded-full"></div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary">2015</h4>
                      <p className="text-gray-600">외국계 대기업 세일즈팀</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">서비스 안내</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              당신의 목표와 현재 상황에 맞는 맞춤형 코칭 프로그램을 선택하세요
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border-t-4 border-gray-300" data-aos="fade-up" data-aos-delay="100">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-primary mb-2">베이직</h3>
                <div className="text-3xl font-bold text-accent mb-4">79만원</div>
                <div className="text-gray-600">1개월 과정</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <i className="fas fa-check text-accent mt-1"></i>
                  <span>온라인 코칭 6회 (1회당 60분+)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="fas fa-check text-accent mt-1"></i>
                  <span>지원회사 1곳 서류 또는 면접 중 선택 영역 집중 강화</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="fas fa-check text-accent mt-1"></i>
                  <span>목표 기업 맞춤형 이직 전략 수립</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="fas fa-check text-accent mt-1"></i>
                  <span>기간 내 상시 질의응답 (카카오톡)</span>
                </li>
              </ul>
              
              <div className="text-sm text-gray-600 mb-6">
                <strong>추천 대상:</strong> 직무가 명확하고 서류/면접 한 영역만 집중 개선이 필요한 분
              </div>
              
              <div className="space-y-3">
                <a href="/services/basic" className="block w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors text-center">
                  자세히 보기
                </a>
                <button className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors smooth-scroll" onClick="scrollToSection('contact')">
                  상담 신청
                </button>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border-t-4 border-accent transform scale-105" data-aos="fade-up" data-aos-delay="200">
              <div className="text-center mb-6">
                <div className="bg-accent text-white text-sm px-3 py-1 rounded-full inline-block mb-2">인기</div>
                <h3 className="text-2xl font-bold text-primary mb-2">프로</h3>
                <div className="text-3xl font-bold text-accent mb-4">149만원</div>
                <div className="text-gray-600">2개월 과정</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <i className="fas fa-check text-accent mt-1"></i>
                  <span>온라인 코칭 10회 (1회당 60분+)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="fas fa-check text-accent mt-1"></i>
                  <span>동일 직무 환승이직 특화</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="fas fa-check text-accent mt-1"></i>
                  <span>서류부터 면접까지 맞춤형 완벽 대비</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="fas fa-check text-accent mt-1"></i>
                  <span>이력서/경력기술서/자소서 첨삭</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="fas fa-check text-accent mt-1"></i>
                  <span>포트폴리오 구성 기획/방향성 제시</span>
                </li>
              </ul>
              
              <div className="text-sm text-gray-600 mb-6">
                <strong>추천 대상:</strong> 전과정 맞춤 코칭 필요자, 환승 이직 목표자
              </div>
              
              <div className="space-y-3">
                <a href="/services/pro" className="block w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors text-center">
                  자세히 보기
                </a>
                <button className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors smooth-scroll" onClick="scrollToSection('contact')">
                  상담 신청
                </button>
              </div>
            </div>

            {/* Advanced Plan */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border-t-4 border-gray-300" data-aos="fade-up" data-aos-delay="300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-primary mb-2">어드밴스드</h3>
                <div className="text-3xl font-bold text-accent mb-4">239만원</div>
                <div className="text-gray-600">4개월 과정</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <i className="fas fa-check text-accent mt-1"></i>
                  <span>온라인 코칭 20회 (1회당 60분)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="fas fa-check text-accent mt-1"></i>
                  <span>커리어 방향성 재정립</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="fas fa-check text-accent mt-1"></i>
                  <span>맞춤형 커리어 전환 전략</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="fas fa-check text-accent mt-1"></i>
                  <span>장기적 성장 로드맵 설계</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="fas fa-check text-accent mt-1"></i>
                  <span>고난도 면접 대응 전략</span>
                </li>
              </ul>
              
              <div className="text-sm text-gray-600 mb-6">
                <strong>추천 대상:</strong> 물경력 극복, 긴 공백기, 다중 직무 고민, 장기 커리어 설계 필요자
              </div>
              
              <div className="space-y-3">
                <a href="/services/advanced" className="block w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors text-center">
                  자세히 보기
                </a>
                <button className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors smooth-scroll" onClick="scrollToSection('contact')">
                  상담 신청
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="case" className="py-20 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">성공 사례</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              면접리더와 함께한 고객들의 실제 성공 후기를 확인해보세요
            </p>
          </div>
          
          {/* Success Stories Carousel */}
          <div className="relative mb-16">
            <div className="overflow-hidden">
              <div id="testimonial-carousel" className="flex transition-transform duration-500 ease-in-out">
                {/* Testimonial 1 */}
                <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-gray-50 p-6 rounded-lg h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">김*영</div>
                      <div className="ml-3">
                        <h4 className="font-semibold text-primary">삼성전자 합격</h4>
                        <p className="text-sm text-gray-600">마케팅 → IT기획</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"3년간 이직 실패를 반복했는데, 면접리더님 덕분에 드디어 원하는 대기업에 합격했습니다. 체계적인 면접 전략이 정말 도움이 되었어요."</p>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-gray-50 p-6 rounded-lg h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">박*수</div>
                      <div className="ml-3">
                        <h4 className="font-semibold text-primary">LG화학 이직</h4>
                        <p className="text-sm text-gray-600">영업 → 컨설턴트</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"경력 전환이 쉽지 않았는데, 저의 강점을 새롭게 발견하고 포지셔닝할 수 있었습니다. 연봉도 50% 이상 올랐어요!"</p>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-gray-50 p-6 rounded-lg h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">이*민</div>
                      <div className="ml-3">
                        <h4 className="font-semibold text-primary">네이버 입사</h4>
                        <p className="text-sm text-gray-600">2년 공백 → 개발자</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"2년 공백기가 있어서 자신감이 없었는데, 면접리더님과 함께 준비하면서 오히려 강점으로 어필할 수 있게 되었습니다."</p>
                  </div>
                </div>

                {/* Testimonial 4 */}
                <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-gray-50 p-6 rounded-lg h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">최*진</div>
                      <div className="ml-3">
                        <h4 className="font-semibold text-primary">카카오 합격</h4>
                        <p className="text-sm text-gray-600">기획 → 데이터분석</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"완전히 다른 직무로 전환하는 것이 두려웠는데, 체계적인 로드맵 덕분에 꿈꿨던 테크 기업에 입사할 수 있었어요."</p>
                  </div>
                </div>

                {/* Testimonial 5 */}
                <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-gray-50 p-6 rounded-lg h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">정*현</div>
                      <div className="ml-3">
                        <h4 className="font-semibold text-primary">현대자동차 입사</h4>
                        <p className="text-sm text-gray-600">제조업 → 자동차</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"업계 전환에 대한 두려움이 컸는데, 면접리더님의 코칭으로 자신감을 갖고 도전해서 성공했습니다."</p>
                  </div>
                </div>

                {/* Testimonial 6 */}
                <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-gray-50 p-6 rounded-lg h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">한*미</div>
                      <div className="ml-3">
                        <h4 className="font-semibold text-primary">SK하이닉스 합격</h4>
                        <p className="text-sm text-gray-600">화학 → 반도체</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"반도체 업계 진입이 쉽지 않다고 들었는데, 전략적인 접근 방법을 배워서 첫 지원에 합격할 수 있었어요."</p>
                  </div>
                </div>

                {/* Testimonial 7 */}
                <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-gray-50 p-6 rounded-lg h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">오*규</div>
                      <div className="ml-3">
                        <h4 className="font-semibold text-primary">포스코 이직</h4>
                        <p className="text-sm text-gray-600">중소기업 → 대기업</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"중소기업 경력만 있어서 대기업 이직이 막막했는데, 경력을 재포장하는 방법을 배워 성공할 수 있었습니다."</p>
                  </div>
                </div>

                {/* Testimonial 8 */}
                <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-gray-50 p-6 rounded-lg h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">장*희</div>
                      <div className="ml-3">
                        <h4 className="font-semibold text-primary">CJ ENM 합격</h4>
                        <p className="text-sm text-gray-600">교육 → 미디어</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"미디어 업계는 처음이었지만, 면접리더님과 준비한 포트폴리오와 답변으로 꿈꿔왔던 회사에 입사했어요."</p>
                  </div>
                </div>

                {/* Testimonial 9 */}
                <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-gray-50 p-6 rounded-lg h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">윤*석</div>
                      <div className="ml-3">
                        <h4 className="font-semibold text-primary">롯데 입사</h4>
                        <p className="text-sm text-gray-600">스타트업 → 대기업</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"스타트업에서 대기업으로 가는 것이 쉽지 않다고 생각했는데, 경험을 체계화하는 방법을 배워 성공했습니다."</p>
                  </div>
                </div>

                {/* Testimonial 10 */}
                <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-gray-50 p-6 rounded-lg h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">신*아</div>
                      <div className="ml-3">
                        <h4 className="font-semibold text-primary">아모레퍼시픽 합격</h4>
                        <p className="text-sm text-gray-600">의료 → 화장품</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"의료업계에서 화장품으로 전환하는 것이 가능할까 의심스러웠는데, 전문적인 가이드 덕분에 성공했어요."</p>
                  </div>
                </div>

                {/* Testimonial 11 */}
                <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-gray-50 p-6 rounded-lg h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">임*우</div>
                      <div className="ml-3">
                        <h4 className="font-semibold text-primary">KT 이직</h4>
                        <p className="text-sm text-gray-600">금융 → 통신</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"금융권에서 통신으로 업종을 바꾸는 것이 어려웠지만, 체계적인 준비로 원하는 회사에 합격할 수 있었습니다."</p>
                  </div>
                </div>

                {/* Testimonial 12 */}
                <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-gray-50 p-6 rounded-lg h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">조*영</div>
                      <div className="ml-3">
                        <h4 className="font-semibold text-primary">두산 입사</h4>
                        <p className="text-sm text-gray-600">서비스업 → 제조업</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"제조업 경험이 전혀 없었는데도, 면접리더님의 코칭으로 자신감을 갖고 도전해서 합격했어요."</p>
                  </div>
                </div>

                {/* Testimonial 13 */}
                <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-gray-50 p-6 rounded-lg h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">강*민</div>
                      <div className="ml-3">
                        <h4 className="font-semibold text-primary">GS건설 합격</h4>
                        <p className="text-sm text-gray-600">건축 → 건설</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"건설업계 대기업 진입이 까다롭다고 들었는데, 전략적인 면접 준비로 한 번에 성공할 수 있었습니다."</p>
                  </div>
                </div>

                {/* Testimonial 14 */}
                <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-gray-50 p-6 rounded-lg h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">서*준</div>
                      <div className="ml-3">
                        <h4 className="font-semibold text-primary">한화시스템 이직</h4>
                        <p className="text-sm text-gray-600">IT → 방산</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"방산업계는 특수한 분야라 준비가 어려웠는데, 맞춤형 코칭 덕분에 원하는 포지션에 합격했어요."</p>
                  </div>
                </div>

                {/* Testimonial 15 */}
                <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-gray-50 p-6 rounded-lg h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">배*연</div>
                      <div className="ml-3">
                        <h4 className="font-semibold text-primary">신한은행 입사</h4>
                        <p className="text-sm text-gray-600">공백기 1년 → 금융</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"1년 공백기 때문에 고민이 많았는데, 면접리더님과 함께 준비해서 안정적인 금융권에 취업할 수 있었습니다."</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button id="prev-btn" className="bg-accent text-white p-3 rounded-full hover:bg-blue-600 transition-colors">
                <i className="fas fa-chevron-left"></i>
              </button>
              <div className="flex space-x-2">
                <button class="carousel-dot w-3 h-3 rounded-full bg-accent" data-slide="0"></button>
                <button class="carousel-dot w-3 h-3 rounded-full bg-gray-300" data-slide="1"></button>
                <button class="carousel-dot w-3 h-3 rounded-full bg-gray-300" data-slide="2"></button>
                <button class="carousel-dot w-3 h-3 rounded-full bg-gray-300" data-slide="3"></button>
                <button class="carousel-dot w-3 h-3 rounded-full bg-gray-300" data-slide="4"></button>
              </div>
              <button id="next-btn" className="bg-accent text-white p-3 rounded-full hover:bg-blue-600 transition-colors">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
          
          {/* Success Companies */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-primary mb-8">주요 합격 기업</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-xl font-bold text-gray-700">삼성전자</div>
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-xl font-bold text-gray-700">LG화학</div>
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-xl font-bold text-gray-700">네이버</div>
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-xl font-bold text-gray-700">카카오</div>
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-xl font-bold text-gray-700">현대자동차</div>
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-xl font-bold text-gray-700">SK하이닉스</div>
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-xl font-bold text-gray-700">포스코</div>
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-xl font-bold text-gray-700">CJ ENM</div>
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-xl font-bold text-gray-700">롯데</div>
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-xl font-bold text-gray-700">아모레퍼시픽</div>
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-xl font-bold text-gray-700">KT</div>
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-xl font-bold text-gray-700">신한은행</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-white" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">상담 신청</h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                당신의 이직 목표를 알려주세요. 맞춤형 상담을 통해 성공 전략을 설계해드립니다.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <form id="contact-form" className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">이름 *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="성함을 입력해주세요"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">이메일 *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="이메일을 입력해주세요"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">상담 내용 *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5" 
                      required 
                      className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                      placeholder="현재 상황과 상담받고 싶은 내용을 자세히 적어주세요"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-accent text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors"
                  >
                    <i className="fas fa-paper-plane mr-2"></i>
                    전송하기
                  </button>
                </form>
              </div>
              
              {/* Direct Contact */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">빠른 상담</h3>
                  
                  <a 
                    href="http://pf.kakao.com/_txixovn" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-yellow-400 text-yellow-900 py-4 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors text-center"
                  >
                    <i className="fas fa-comment mr-2"></i>
                    카톡으로 바로 상담하기
                  </a>
                </div>
                
                <div className="border-t border-gray-600 pt-8">
                  <h4 className="text-lg font-semibold mb-4">상담 운영 시간</h4>
                  <div className="space-y-2 text-gray-300">
                    <p><i className="far fa-clock mr-2"></i> 평일: 오전 9시 - 오후 6시</p>
                    <p><i className="far fa-clock mr-2"></i> 주말: 사전 예약제</p>
                    <p><i className="fas fa-phone mr-2"></i> 응답 시간: 24시간 내</p>
                  </div>
                </div>
                
                <div className="bg-secondary p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3">
                    <i className="fas fa-gift mr-2 text-accent"></i>
                    진단 혜택
                  </h4>
                  <p className="text-gray-300">
                    프로 또는 어드밴스 구매 시<br />
                    <strong className="text-white">진단비 전액 할인</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">면접리더</div>
            <p className="text-gray-400 mb-6">이직, 이제 합격을 설계하다</p>
            
            <div className="flex justify-center space-x-6 mb-6">
              <a href="http://pf.kakao.com/_txixovn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <i className="fas fa-comment text-xl"></i>
              </a>
            </div>
            
            <p className="text-sm text-gray-500">
              © 2024 면접리더. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
})

// Service Detail Pages
app.get('/services/basic', (c) => {
  return c.render(<BasicServicePage />)
})

app.get('/services/pro', (c) => {
  return c.render(<ProServicePage />)
})

app.get('/services/advanced', (c) => {
  return c.render(<AdvancedServicePage />)
})

export default app