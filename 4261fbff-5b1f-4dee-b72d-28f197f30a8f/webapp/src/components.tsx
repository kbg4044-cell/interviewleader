// 서비스 상세 페이지 컴포넌트들

export function ServiceDetailLayout({ title, children }: { title: string, children: any }) {
  return (
    <div>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-primary hover:text-accent transition-colors">
            면접리더
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="/#about" className="text-gray-600 hover:text-primary transition-colors">소개</a>
            <a href="/#services" className="text-gray-600 hover:text-primary transition-colors">서비스</a>
            <a href="/#case" className="text-gray-600 hover:text-primary transition-colors">성과</a>
            <a href="/#contact" className="text-gray-600 hover:text-primary transition-colors">상담하기</a>
          </div>
          <button className="md:hidden text-gray-600" id="mobile-menu-btn">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>

      <main className="pt-20">
        {children}
      </main>

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
}

export function StandardServicePage() {
  return (
    <ServiceDetailLayout title="스탠다드 코칭 프로그램">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              인기 프로그램 🔥
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              스탠다드 <span className="text-accent">4개월 코칭</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              중견·대기업 진입과 연봉 상승을 목표로 하는 체계적 4개월 코칭 프로그램
            </p>
            <div className="text-4xl font-bold text-accent mb-8">150만원</div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/#contact" className="bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <i className="fas fa-comment-dots mr-2"></i>
                상담 신청하기
              </a>
              <a href="http://pf.kakao.com/_txixovn" target="_blank" rel="noopener noreferrer" className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                <i className="fas fa-comment mr-2"></i>
                카톡 상담
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 프로그램 특징 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">스탠다드 프로그램 특징</h2>
            <div className="bg-blue-50 p-6 rounded-lg mb-8 text-center">
              <h3 className="text-xl font-semibold text-primary mb-2">이런 분들에게 추천합니다</h3>
              <p className="text-gray-700">중견·대기업 진입을 목표로 하고, 연봉 상승과 체계적인 커리어 성장을 원하는 분들</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 border-2 border-accent rounded-lg">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-building text-white text-2xl"></i>
                </div>
                <h3 className="font-semibold text-primary mb-2">중견·대기업 특화</h3>
                <p className="text-gray-600">중견기업 및 대기업 입사를 위한 맞춤형 전략</p>
              </div>

              <div className="text-center p-6 border-2 border-accent rounded-lg">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-chart-line text-white text-2xl"></i>
                </div>
                <h3 className="font-semibold text-primary mb-2">연봉 상승 전략</h3>
                <p className="text-gray-600">체계적인 연봉 협상 및 가치 어필 방법</p>
              </div>

              <div className="text-center p-6 border-2 border-accent rounded-lg">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-trophy text-white text-2xl"></i>
                </div>
                <h3 className="font-semibold text-primary mb-2">체계적 성장</h3>
                <p className="text-gray-600">4개월간의 단계별 커리어 발전 프로그램</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 상세 커리큘럼 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">16주 체계적 커리큘럼</h2>
            
            <div className="space-y-6">
              {/* 1-4주차 */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 text-white px-3 py-1 rounded mr-3 font-bold">1-4주</div>
                  <h3 className="text-xl font-semibold text-primary">커리어 목표 설정 및 전략 수립</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-2">개인 역량 분석</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 강점과 개선점 정밀 분석</li>
                      <li>• 경력 경쟁력 진단</li>
                      <li>• 목표 직무 적합성 평가</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-2">시장 분석 및 전략 수립</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 중견·대기업 채용 트렌드 분석</li>
                      <li>• 목표 기업군 선정</li>
                      <li>• 맞춤형 이직 전략 설계</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 5-8주차 */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 text-white px-3 py-1 rounded mr-3 font-bold">5-8주</div>
                  <h3 className="text-xl font-semibold text-primary">서류 최적화 및 완성</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-2">서류 기본 완성</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 이력서/경력기술서 핵심 포인트 도출</li>
                      <li>• 자기소개서 차별화 전략</li>
                      <li>• 경험 스토리텔링 고도화</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-2">기업별 맞춤화</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 기업별 서류 커스터마이징</li>
                      <li>• 포트폴리오 구성 및 개선</li>
                      <li>• 최종 서류 완성도 점검</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 9-12주차 */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500 text-white px-3 py-1 rounded mr-3 font-bold">9-12주</div>
                  <h3 className="text-xl font-semibold text-primary">면접 기본기 완성</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-2">면접 스킬 개발</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 중견·대기업 면접 특성 파악</li>
                      <li>• 핵심 질문별 답변 전략</li>
                      <li>• 스피치 및 프레젠테이션 스킬</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-2">실전 준비</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 면접 유형별 대응 전략</li>
                      <li>• 모의면접 및 피드백</li>
                      <li>• 압박 상황 대처 방법</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 13-16주차 */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-500 text-white px-3 py-1 rounded mr-3 font-bold">13-16주</div>
                  <h3 className="text-xl font-semibold text-primary">실전 면접 및 연봉 협상</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-2">고난도 면접 대응</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 실전 면접 시뮬레이션</li>
                      <li>• 까다로운 질문 완벽 대응</li>
                      <li>• 면접관 유형별 소통 전략</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-2">연봉 협상 및 입사 준비</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 전략적 연봉 협상 기법</li>
                      <li>• 복수 오퍼 관리 방법</li>
                      <li>• 성공적인 입사 준비</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 제공 서비스 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">제공 서비스 및 deliverable</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-user text-white text-2xl"></i>
                </div>
                <h3 className="font-semibold text-primary mb-2 text-center">1:1 코칭</h3>
                <p className="text-gray-600 text-sm text-center">16회 × 60분 개인 맞춤 코칭</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-file-alt text-white text-2xl"></i>
                </div>
                <h3 className="font-semibold text-primary mb-2 text-center">서류 완성</h3>
                <p className="text-gray-600 text-sm text-center">이력서, 자소서, 포트폴리오 완성본</p>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-microphone text-white text-2xl"></i>
                </div>
                <h3 className="font-semibold text-primary mb-2 text-center">면접 대비</h3>
                <p className="text-gray-600 text-sm text-center">질문별 답변 스크립트 + 실전 훈련</p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-chart-line text-white text-2xl"></i>
                </div>
                <h3 className="font-semibold text-primary mb-2 text-center">연봉 협상</h3>
                <p className="text-gray-600 text-sm text-center">전략적 연봉 협상 가이드</p>
              </div>
            </div>

            <div className="mt-12 bg-accent text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">스탠다드 프로그램 특별 혜택</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-lg">📞 <strong>3개월 애프터 케어</strong></p>
                  <p className="text-sm opacity-90">입사 후 적응 및 추가 상담</p>
                </div>
                <div>
                  <p className="text-lg">💬 <strong>실시간 카카오톡 상담</strong></p>
                  <p className="text-sm opacity-90">기간 내 언제든지 질의응답</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">중견·대기업 진입의 확실한 선택, 스탠다드 프로그램</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            체계적인 4개월 코칭으로 원하는 기업, 원하는 연봉을 실현하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" className="bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
              <i className="fas fa-calendar-check mr-2"></i>
              무료 상담 신청
            </a>
            <a href="http://pf.kakao.com/_txixovn" target="_blank" rel="noopener noreferrer" className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              <i className="fab fa-kakao mr-2"></i>
              카톡 바로 상담
            </a>
          </div>
        </div>
      </section>
    </ServiceDetailLayout>
  )
}

export function PremiumServicePage() {
  return (
    <ServiceDetailLayout title="프리미엄 코칭 프로그램">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-gradient-to-r from-purple-600 to-accent text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              프리미엄 프로그램 ⭐
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              프리미엄 <span className="text-accent">6개월 코칭</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              커리어 전환, 고난도 이직, 리더십 기회 획득을 위한 최고 수준의 6개월 프리미엄 코칭
            </p>
            <div className="text-4xl font-bold text-accent mb-8">225만원</div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/#contact" className="bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <i className="fas fa-comment-dots mr-2"></i>
                상담 신청하기
              </a>
              <a href="http://pf.kakao.com/_txixovn" target="_blank" rel="noopener noreferrer" className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                <i className="fas fa-comment mr-2"></i>
                카톡 상담
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 특화 영역 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">어드밴스드 특화 영역</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-b from-red-50 to-white rounded-lg border border-red-200">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-user-times text-white text-2xl"></i>
                </div>
                <h3 className="font-semibold text-primary mb-2">물경력 극복</h3>
                <p className="text-gray-600 text-sm">경력의 양적/질적 한계를 극복하는 전략적 접근</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-b from-orange-50 to-white rounded-lg border border-orange-200">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-pause text-white text-2xl"></i>
                </div>
                <h3 className="font-semibold text-primary mb-2">긴 공백기</h3>
                <p className="text-gray-600 text-sm">공백기를 오히려 강점으로 전환하는 스토리텔링</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-b from-blue-50 to-white rounded-lg border border-blue-200">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-route text-white text-2xl"></i>
                </div>
                <h3 className="font-semibold text-primary mb-2">다중 직무 고민</h3>
                <p className="text-gray-600 text-sm">여러 직무 중 최적의 선택과 방향성 설정</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-b from-green-50 to-white rounded-lg border border-green-200">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-chess text-white text-2xl"></i>
                </div>
                <h3 className="font-semibold text-primary mb-2">장기 커리어 설계</h3>
                <p className="text-gray-600 text-sm">5-10년 장기 관점의 체계적 커리어 로드맵</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 16주 커리큘럼 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">16주 완전 맞춤 커리큘럼</h2>
            
            <div className="space-y-6">
              {/* 1-6주차 */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-500 text-white px-3 py-1 rounded mr-3 font-bold">1-6주</div>
                  <h3 className="text-xl font-semibold text-primary">전략적 커리어 진단 및 로드맵 설계</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-2">전면적 커리어 분석</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 현재 커리어 상태 진단</li>
                      <li>• 강점·약점·기회·위협 분석</li>
                      <li>• 주요 업계/기업 동향 연구</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-2">맞춤형 전략 수립</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 기업/역할별 진입 전략</li>
                      <li>• 단계별 마일스톤 설정</li>
                      <li>• 리스크 관리 및 대안 전략</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 7-12주차 */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 text-white px-3 py-1 rounded mr-3 font-bold">7-12주</div>
                  <h3 className="text-xl font-semibold text-primary">신중한 역량 개발 및 서류 완성</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-2">고난도 역량 개발</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 전략적 사고력 향상 훈련</li>
                      <li>• 리더십 역량 발굴 및 강화</li>
                      <li>• 네트워킹 및 인플루언싱 스킬</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-2">에스크 레벨 서류 완성</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 개인 브랜드 스토리 개발</li>
                      <li>• 임팩트 있는 경험 스토리 작성</li>
                      <li>• 특별한 포트폴리오 구성</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 13-18주차 */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500 text-white px-3 py-1 rounded mr-3 font-bold">13-18주</div>
                  <h3 className="text-xl font-semibold text-primary">고급 면접 전략 및 실전 훈련</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-2">전략적 면접 기법</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• C-level 면접관 대응 전략</li>
                      <li>• 고난도 케이스 스터디 방법론</li>
                      <li>• 전략적 사고력 어필 기법</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-2">리더십 면접 준비</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 비전 프레젠테이션 스킬</li>
                      <li>• 조직 변화 리더십 어필</li>
                      <li>• 고급 소통 및 설득 기법</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 19-24주차 */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 text-white px-3 py-1 rounded mr-3 font-bold">19-24주</div>
                  <h3 className="text-xl font-semibold text-primary">입사 후 성공 전략 및 지속 성장</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-2">연봉 협상 및 입사 전략</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 고급 연봉 협상 전략</li>
                      <li>• 복수 오퍼 활용 방법</li>
                      <li>• 첫 100일 전략적 적응 과정</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-2">지속적 성장 전략</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 첫 행동 3개월 전략 수립</li>
                      <li>• 새로운 역할 및 네트워킹</li>
                      <li>• 다음 커리어 스텝 준비</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 성과 및 보장 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">어드밴스드 성과 보장</h2>
            
            <div className="bg-gradient-to-r from-accent to-blue-600 text-white p-8 rounded-lg text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">100% 맞춤형 1:1 코칭</h3>
              <p className="text-lg">20회 × 60분 = 총 20시간의 완전 개인화 코칭</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">성과 지표</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-3"></i>
                    <span>평균 93% 합격률</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-3"></i>
                    <span>평균 67% 연봉 상승</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-3"></i>
                    <span>100% 방향성 명확화</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">특별 보장</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <i className="fas fa-shield-alt text-accent mr-3"></i>
                    <span>6개월 애프터 케어</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-shield-alt text-accent mr-3"></i>
                    <span>무제한 질의응답</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-shield-alt text-accent mr-3"></i>
                    <span>추가 면접 시 무료 코칭</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">인생 커리어의 완전한 전환점</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            어드밴스드 프로그램으로 커리어의 새로운 장을 열어보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" className="bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
              <i className="fas fa-calendar-check mr-2"></i>
              무료 상담 신청
            </a>
            <a href="http://pf.kakao.com/_txixovn" target="_blank" rel="noopener noreferrer" className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              <i className="fab fa-kakao mr-2"></i>
              카톡 바로 상담
            </a>
          </div>
        </div>
      </section>
    </ServiceDetailLayout>
  )
}

export function BasicServicePage() {
  return (
    <ServiceDetailLayout title="베이직 코칭 프로그램">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              베이직 프로그램
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              베이직 <span className="text-accent">2개월 코칭</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              명확한 목표와 방향성을 가진 분들을 위한 효율적인 2개월 집중 코칭 프로그램
            </p>
            <div className="text-4xl font-bold text-accent mb-8">96만원</div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/#contact" className="bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <i className="fas fa-comment-dots mr-2"></i>
                상담 신청하기
              </a>
              <a href="http://pf.kakao.com/_txixovn" target="_blank" rel="noopener noreferrer" className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                <i className="fas fa-comment mr-2"></i>
                카톡 상담
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 프로그램 개요 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-lg mb-8 text-center">
              <h3 className="text-xl font-semibold text-primary mb-2">이런 분들에게 추천합니다</h3>
              <p className="text-gray-700">목표가 명확하고 이미 어느 정도 방향성이 설정된 분들 중, 효율적이고 실용적인 도움이 필요한 분들</p>
            </div>
            
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">프로그램 개요</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  <i className="fas fa-calendar-alt mr-2 text-accent"></i>
                  기간 & 횟수
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 총 기간: 2개월</li>
                  <li>• 코칭 횟수: 8회</li>
                  <li>• 1회 시간: 60분+</li>
                  <li>• 진행 방식: 온라인 1:1</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  <i className="fas fa-target mr-2 text-accent"></i>
                  추천 대상
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 목표 직무가 명확한 분</li>
                  <li>• 효율적인 이직 준비가 필요한 분</li>
                  <li>• 단기간 집중적인 개선이 필요한 분</li>
                  <li>• 실용적인 솔루션을 원하는 분</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 상세 커리큘럼 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">8주 집중 커리큘럼</h2>
            
            <div className="space-y-6">
              {/* 1-2주차 */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 text-white px-3 py-1 rounded mr-3 font-bold">1-2주</div>
                  <h3 className="text-xl font-semibold text-primary">현황 진단 및 전략 수립</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-2">현재 상태 점검</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 현재 이직 준비 상황 진단</li>
                      <li>• 강점 및 개선점 파악</li>
                      <li>• 목표 기업 및 포지션 구체화</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-2">전략적 접근법</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 목표 달성을 위한 핵심 전략 수립</li>
                      <li>• 우선순위별 액션 아이템 정리</li>
                      <li>• 일정 및 마일스톤 설정</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3-4주차 */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 text-white px-3 py-1 rounded mr-3 font-bold">3-4주</div>
                  <h3 className="text-xl font-semibold text-primary">서류 최적화</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-2">핵심 서류 개선</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 이력서/경력기술서 핵심 포인트 강화</li>
                      <li>• 자기소개서 차별화 전략</li>
                      <li>• 경험 중심의 스토리텔링</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-2">완성도 향상</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 첨삭을 통한 서류 완성</li>
                      <li>• 포트폴리오 구성 가이드</li>
                      <li>• 기업별 커스터마이징 방법</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 5-6주차 */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500 text-white px-3 py-1 rounded mr-3 font-bold">5-6주</div>
                  <h3 className="text-xl font-semibold text-primary">면접 기본기 완성</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-2">기본 면접 스킬</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 면접 유형별 대응 전략</li>
                      <li>• 핵심 질문 답변 구조화</li>
                      <li>• 스피치 및 프레젠테이션 기법</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-2">실전 준비</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 모의면접 및 피드백</li>
                      <li>• 압박 질문 대응 방법</li>
                      <li>• 면접 매너 및 태도 개선</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 7-8주차 */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-500 text-white px-3 py-1 rounded mr-3 font-bold">7-8주</div>
                  <h3 className="text-xl font-semibold text-primary">최종 점검 및 실전 대응</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-2">실전 시뮬레이션</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 실제 면접 환경 재연</li>
                      <li>• 종합적인 면접 능력 점검</li>
                      <li>• 마지막 개선점 보완</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-2">성공적 마무리</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 최종 체크리스트 작성</li>
                      <li>• 합격을 위한 마지막 준비</li>
                      <li>• 이후 액션 플랜 수립</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 제공 서비스 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">제공 서비스 및 deliverable</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-video text-white text-2xl"></i>
                </div>
                <h3 className="font-semibold text-primary mb-2 text-center">1:1 코칭</h3>
                <p className="text-gray-600 text-sm text-center">8회 × 60분 개인 맞춤 코칭</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-file-alt text-white text-2xl"></i>
                </div>
                <h3 className="font-semibold text-primary mb-2 text-center">서류 완성</h3>
                <p className="text-gray-600 text-sm text-center">이력서, 자소서, 포트폴리오 가이드</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-microphone text-white text-2xl"></i>
                </div>
                <h3 className="font-semibold text-primary mb-2 text-center">면접 대비</h3>
                <p className="text-gray-600 text-sm text-center">핵심 질문 답변 스크립트</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-comments text-white text-2xl"></i>
                </div>
                <h3 className="font-semibold text-primary mb-2 text-center">실시간 상담</h3>
                <p className="text-gray-600 text-sm text-center">기간 내 카카오톡 질의응답</p>
              </div>
            </div>

            <div className="mt-12 bg-gray-600 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">베이직 프로그램 특별 혜택</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-lg">🎯 <strong>명확한 실행 가이드</strong></p>
                  <p className="text-sm opacity-90">단계별 체크리스트 및 액션 플랜</p>
                </div>
                <div>
                  <p className="text-lg">💬 <strong>즉시 피드백</strong></p>
                  <p className="text-sm opacity-90">신속하고 정확한 개선 방향 제시</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">효율적인 이직 준비, 베이직 프로그램</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            2개월 집중 코칭으로 명확한 목표 달성을 실현하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" className="bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
              <i className="fas fa-calendar-check mr-2"></i>
              무료 상담 신청
            </a>
            <a href="http://pf.kakao.com/_txixovn" target="_blank" rel="noopener noreferrer" className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              <i className="fab fa-kakao mr-2"></i>
              카톡 바로 상담
            </a>
          </div>
        </div>
      </section>
    </ServiceDetailLayout>
  )
}