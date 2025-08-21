// 滚动动画效果
        document.addEventListener('DOMContentLoaded', function() {
            const fadeElements = document.querySelectorAll('.fade-in');
            
            const fadeInObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        fadeInObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            fadeElements.forEach(element => {
                fadeInObserver.observe(element);
            });
            // 平滑滚动
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 70,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            // 项目轮播功能
            const carousel = document.querySelector('.project-carousel');
            const carouselItems = document.querySelectorAll('.carousel-item');
            const prevBtn = document.querySelector('.prev-btn');
            const nextBtn = document.querySelector('.next-btn');
            const dots = document.querySelectorAll('.carousel-dot');
            let currentIndex = 0;
            const itemWidth = 100; // 百分比
            let interval;
            
            // 初始化轮播
            function initCarousel() {
                updateCarousel();
                startAutoPlay();
                
                // 事件监听
                prevBtn.addEventListener('click', () => {
                    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
                    updateCarousel();
                    resetAutoPlay();
                });
                
                nextBtn.addEventListener('click', () => {
                    currentIndex = (currentIndex + 1) % carouselItems.length;
                    updateCarousel();
                    resetAutoPlay();
                });
                
                dots.forEach(dot => {
                    dot.addEventListener('click', () => {
                        currentIndex = parseInt(dot.dataset.index);
                        updateCarousel();
                        resetAutoPlay();
                    });
                });
            }
            
            // 更新轮播显示
            function updateCarousel() {
                carousel.style.transform = `translateX(-${currentIndex * itemWidth}%)`;
                
                // 更新指示器
                dots.forEach((dot, index) => {
                    if (index === currentIndex) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            }
            
            // 自动播放
            function startAutoPlay() {
                interval = setInterval(() => {
                    currentIndex = (currentIndex + 1) % carouselItems.length;
                    updateCarousel();
                }, 5000); // 5秒切换一次
            }
            
            // 重置自动播放计时器
            function resetAutoPlay() {
                clearInterval(interval);
                startAutoPlay();
            }
            
            // 启动轮播
            initCarousel();
        });
function closeAnnouncement() {
        document.getElementById('announcement').classList.remove('show');
    }

    // 模拟页面加载后显示公告
    window.onload = function() {
        setTimeout(function() {
            document.getElementById('announcement').classList.add('show');
        }, 500); // 延迟0.5秒显示公告
    };