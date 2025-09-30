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

export function ProServicePage() {
  return (
    <ServiceDetailLayout title="프로 코칭 프로그램">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              인기 프로그램 🔥
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              환승이직 <span className="text-accent">프로</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              동일 직무 환승이직 특화! 서류부터 면접까지 완벽 대비하는 2개월 집중 과정
            </p>
            <div className="text-4xl font-bold text-accent mb-8">149만원</div>
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
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">프로 프로그램 특징</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 border-2 border-accent rounded-lg">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-exchange-alt text-white text-2xl"></i>
                </div>
                <h3 className="font-semibold text-primary mb-2">환승이직 특화</h3>
                <p className="text-gray-600">동일 직무 내 더 나은 회사로의 이동에 최적화된 전략</p>
              </div>

              <div className="text-center p-6 border-2 border-accent rounded-lg">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-clipboard-list text-white text-2xl"></i>
                </div>
                <h3 className="font-semibold text-primary mb-2">전과정 커버</h3>
                <p className="text-gray-600">서류부터 면접까지 빠짐없는 맞춤형 완벽 대비</p>
              </div>

              <div className="text-center p-6 border-2 border-accent rounded-lg">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-trophy text-white text-2xl"></i>
                </div>
                <h3 className="font-semibold text-primary mb-2">성공률 극대화</h3>
                <p className="text-gray-600">기존 경험의 가치를 극대화하는 차별화 전략</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 상세 커리큘럼 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">8주 완성 커리큘럼</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* 1-2주차 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">1-2</div>
                  <h3 className="text-xl font-semibold text-primary">진단 및 전략 수립</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• 현재 상황 정확한 진단</li>
                  <li>• 목표 기업 상세 분석</li>
                  <li>• 개인별 맞춤 전략 수립</li>
                  <li>• 차별화 포인트 발굴</li>
                </ul>
              </div>

              {/* 3-4주차 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">3-4</div>
                  <h3 className="text-xl font-semibold text-primary">서류 완성</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• 이력서/경력기술서/자소서 첨삭</li>
                  <li>• 범용 버전 완성</li>
                  <li>• 포트폴리오 구성 기획</li>
                  <li>• 경험 스토리텔링 고도화</li>
                </ul>
              </div>

              {/* 5-6주차 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">5-6</div>
                  <h3 className="text-xl font-semibold text-primary">면접 기본기</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• 동일 직무 자주 묻는 질문 집중 대비</li>
                  <li>• 탈락 패턴 분석 및 극복 전략</li>
                  <li>• 경쟁자와의 차별점 강화</li>
                  <li>• 면접 시뮬레이션 기초</li>
                </ul>
              </div>

              {/* 7-8주차 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">7-8</div>
                  <h3 className="text-xl font-semibold text-primary">실전 완성</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• 실전 면접 시뮬레이션</li>
                  <li>• 답변 설계 및 완성</li>
                  <li>• 스피치 능력 향상 트레이닝</li>
                  <li>• 최종 점검 및 피드백</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 성과 지표 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-12">프로 프로그램 성과</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="text-4xl font-bold text-accent mb-2">87%</div>
                <h3 className="font-semibold text-primary mb-2">합격률</h3>
                <p className="text-gray-600">프로 프로그램 수강생 평균 합격률</p>
              </div>

              <div className="p-6">
                <div className="text-4xl font-bold text-accent mb-2">+42%</div>
                <h3 className="font-semibold text-primary mb-2">평균 연봉 상승</h3>
                <p className="text-gray-600">기존 대비 연봉 상승률</p>
              </div>

              <div className="p-6">
                <div className="text-4xl font-bold text-accent mb-2">2.3개</div>
                <h3 className="font-semibold text-primary mb-2">평균 최종 합격</h3>
                <p className="text-gray-600">수강생 평균 최종 합격 회사 수</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">환승이직의 정답, 프로 프로그램</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            더 나은 회사, 더 높은 연봉으로의 성공적인 이직을 보장합니다
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

export function AdvancedServicePage() {
  return (
    <ServiceDetailLayout title="어드밴스드 코칭 프로그램">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-gradient-to-r from-purple-600 to-accent text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              프리미엄 프로그램 ⭐
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              완전 전환 <span className="text-accent">어드밴스드</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              물경력 극복, 공백기 해결, 커리어 재설계까지! 4개월 완전 맞춤 코칭
            </p>
            <div className="text-4xl font-bold text-accent mb-8">239만원</div>
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
            
            <div className="space-y-8">
              {/* 1단계 */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded mr-3">1-4주</span>
                  커리어 방향성 재정립
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-3">숨겨진 역량 발굴</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 경험 재해석 및 가치 발굴</li>
                      <li>• 잠재 강점 및 역량 분석</li>
                      <li>• 성향 및 적성 정밀 진단</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-3">직무별 필수 역량 분석</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 희망 직무 요구사항 분석</li>
                      <li>• 역량 갭 분석 및 습득 전략</li>
                      <li>• 최적 직무 매칭</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2단계 */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded mr-3">5-8주</span>
                  맞춤형 커리어 전환 전략
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-3">전략적 접근법</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 물경력/공백기 → 강점 전환 전략</li>
                      <li>• 새 직무 맞춤 경험 재구성</li>
                      <li>• 차별화 포지셔닝 설계</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-3">실행 계획</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 단계별 실행 로드맵</li>
                      <li>• 필요 역량 습득 계획</li>
                      <li>• 네트워킹 및 정보 수집 전략</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3단계 */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded mr-3">9-12주</span>
                  장기적 성장 로드맵 설계
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-3">연차별 로드맵</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 1-3년차: 기반 구축 전략</li>
                      <li>• 4-7년차: 전문성 심화 방향</li>
                      <li>• 8년차+: 리더십 발전 경로</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-3">지속 성장 전략</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 핵심 역량 개발 계획</li>
                      <li>• 네트워크 확장 전략</li>
                      <li>• 개인 브랜딩 방향성</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 4단계 */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded mr-3">13-16주</span>
                  고난도 면접 대응 전략
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-3">커뮤니케이션 스킬</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 공백기/퇴사사유 설득 전략</li>
                      <li>• 물경력을 강점화하는 화법</li>
                      <li>• 직무전환 논리적 설명법</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-3">까다로운 질문 대응</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 경험 부족 관련 질문 대응</li>
                      <li>• 인사담당자 우려 불식 전략</li>
                      <li>• 압박 상황 돌파 기법</li>
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
              집중 강화 <span className="text-accent">베이직</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              직무가 명확하고 한 영역에 집중이 필요한 분들을 위한 1개월 집중 코칭
            </p>
            <div className="text-4xl font-bold text-accent mb-8">79만원</div>
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
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">프로그램 개요</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  <i className="fas fa-calendar-alt mr-2 text-accent"></i>
                  기간 & 횟수
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 총 기간: 1개월</li>
                  <li>• 코칭 횟수: 6회</li>
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
                  <li>• 서류 OR 면접 한 영역 집중 개선 필요</li>
                  <li>• 단기간 집중 코칭 선호</li>
                  <li>• 첫 번째 이직 준비자</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 상세 커리큘럼 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">상세 커리큘럼</h2>
            
            <div className="space-y-8">
              {/* A코스 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-primary mb-4">A코스: 서류 집중 강화</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-3">1-3회차: 서류 기반 다지기</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 목표 기업 분석 및 전략 수립</li>
                      <li>• 경력기술서 핵심 포인트 도출</li>
                      <li>• 자기소개서 기본 구조 설계</li>
                      <li>• 경험 스토리텔링 기법</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-3">4-6회차: 완성도 극대화</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 경력기술서 + 자기소개서 첨삭 완성</li>
                      <li>• 포트폴리오 방향성 개선 가이드</li>
                      <li>• 차별화 포인트 강화</li>
                      <li>• 최종 서류 완성 및 검토</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* B코스 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-primary mb-4">B코스: 면접 집중 강화</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-3">1-3회차: 면접 기초 완성</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 1차, PT, 최종면접 전략 수립</li>
                      <li>• 핵심 질문별 모범 답변 설계</li>
                      <li>• 스피치 스킬 및 태도 교정</li>
                      <li>• 면접 시뮬레이션 (기초)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-3">4-6회차: 실전 완벽 대비</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 실전 모의면접 집중 훈련</li>
                      <li>• 압박 질문 대응 전략</li>
                      <li>• 면접관 유형별 대응법</li>
                      <li>• 최종 점검 및 마무리</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 포함 서비스 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">포함 서비스</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-video text-white text-2xl"></i>
                </div>
                <h3 className="font-semibold text-primary mb-2">1:1 온라인 코칭</h3>
                <p className="text-gray-600">총 6회, 회당 60분+ 집중 코칭</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-chart-line text-white text-2xl"></i>
                </div>
                <h3 className="font-semibold text-primary mb-2">맞춤 전략 수립</h3>
                <p className="text-gray-600">목표 기업 맞춤형 이직 전략</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-comments text-white text-2xl"></i>
                </div>
                <h3 className="font-semibold text-primary mb-2">상시 질의응답</h3>
                <p className="text-gray-600">기간 내 카카오톡 실시간 상담</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">베이직 프로그램으로 시작하세요</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            집중된 한 달, 확실한 변화를 경험해보세요
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