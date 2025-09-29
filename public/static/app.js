// JavaScript for 면접리더 Branding Page

// Initialize AOS (Animate On Scroll) when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }
  
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      
      // Toggle icon
      const icon = mobileMenuBtn.querySelector('i');
      if (mobileMenu.classList.contains('hidden')) {
        icon.className = 'fas fa-bars';
      } else {
        icon.className = 'fas fa-times';
      }
    });
  }
  
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          const icon = mobileMenuBtn.querySelector('i');
          icon.className = 'fas fa-bars';
        }
      }
    });
  });
  
  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      try {
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>전송 중...';
        submitBtn.disabled = true;
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message')
        };
        
        // Validate data
        if (!data.name || !data.email || !data.message) {
          throw new Error('모든 필드를 입력해주세요.');
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
          throw new Error('올바른 이메일 주소를 입력해주세요.');
        }
        
        // Send to API
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (result.success) {
          showMessage('문의가 성공적으로 전송되었습니다. 24시간 내에 답변드리겠습니다.', 'success');
          contactForm.reset();
        } else {
          throw new Error(result.message || '전송 중 오류가 발생했습니다.');
        }
        
      } catch (error) {
        showMessage(error.message, 'error');
      } finally {
        // Reset button state
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }
    });
  }
});

// Utility function to scroll to a section
function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (target) {
    const offsetTop = target.offsetTop - 80; // Account for fixed navbar
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}

// Show success/error messages
function showMessage(message, type) {
  // Remove existing messages
  const existingMessages = document.querySelectorAll('.message');
  existingMessages.forEach(msg => msg.remove());
  
  // Create new message
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${type}`;
  messageDiv.innerHTML = `
    <div class="flex items-center">
      <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} mr-2"></i>
      <span>${message}</span>
      <button type="button" class="ml-auto text-lg font-bold" onclick="this.parentElement.parentElement.remove()">×</button>
    </div>
  `;
  
  // Insert message before the form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.parentElement.insertBefore(messageDiv, contactForm);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      if (messageDiv.parentElement) {
        messageDiv.remove();
      }
    }, 5000);
  }
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('nav');
  if (navbar) {
    if (window.scrollY > 100) {
      navbar.classList.add('shadow-md');
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
      navbar.classList.remove('shadow-md');
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }
  }
});

// Add loading animation to buttons with external links
document.addEventListener('click', function(e) {
  const target = e.target.closest('a');
  if (target && target.href && target.target === '_blank') {
    const icon = target.querySelector('i');
    if (icon) {
      const originalClass = icon.className;
      icon.className = 'fas fa-spinner fa-spin';
      
      // Reset after 2 seconds
      setTimeout(() => {
        icon.className = originalClass;
      }, 2000);
    }
  }
});

// Performance optimization: Lazy loading for images
const observerOptions = {
  threshold: 0.1,
  rootMargin: '50px'
};

const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.classList.remove('opacity-0');
        img.classList.add('opacity-100');
        imageObserver.unobserve(img);
      }
    }
  });
}, observerOptions);

// Observe all images with data-src attribute
document.querySelectorAll('img[data-src]').forEach(img => {
  imageObserver.observe(img);
});

// Analytics tracking (placeholder for future integration)
function trackEvent(category, action, label) {
  // Google Analytics or other tracking service integration
  console.log('Analytics Event:', { category, action, label });
}

// Track CTA button clicks
document.addEventListener('click', function(e) {
  const target = e.target.closest('button, a');
  if (target) {
    const text = target.textContent.trim();
    if (text.includes('상담') || text.includes('문의')) {
      trackEvent('CTA', 'click', text);
    }
  }
});

// Add smooth reveal animations for elements in viewport
const revealElements = document.querySelectorAll('[data-aos]');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fadeInUp');
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(element => {
  revealObserver.observe(element);
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
  // ESC key to close mobile menu
  if (e.key === 'Escape') {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      if (mobileMenuBtn) {
        const icon = mobileMenuBtn.querySelector('i');
        icon.className = 'fas fa-bars';
      }
    }
  }
});

// Console greeting
console.log(`
🚀 면접리더 브랜딩 페이지
📧 기술 문의: 개발자에게 연락
🔧 Built with Hono + Cloudflare Pages
`);

// Add viewport height adjustment for mobile browsers
function setVH() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setVH();
window.addEventListener('resize', setVH);