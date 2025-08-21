
// 页面加载完成后执行
        document.addEventListener('DOMContentLoaded', function() {
            var eles = document.getElementsByTagName('*');
            for (var i = 0; i < eles.length; i++) {
                eles[i].style.userSelect = 'text';
            }
            // 页面加载动画
            const pageLoader = document.getElementById('pageLoader');
            const fadeElements = document.querySelectorAll('.fade-in');
            
            // 显示加载动画后隐藏，同时显示页面内容
            setTimeout(function() {
                pageLoader.style.opacity = '0';
                pageLoader.style.visibility = 'hidden';
                
                // 显示淡入元素
                setTimeout(function() {
                    fadeElements.forEach(el => {
                        el.classList.add('visible');
                    });
                }, 100);
            }, 800);


            // 导航栏滚动效果
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });

            // 移动端菜单切换
            const menuToggle = document.getElementById('menuToggle');
            const navLinks = document.getElementById('navLinks');
            
            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                // 切换菜单图标并添加动画
                menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
                menuToggle.style.transform = navLinks.classList.contains('active') ? 'rotate(90deg)' : 'rotate(0)';
            });

            // 点击导航链接后关闭移动菜单
            const navLinkItems = document.querySelectorAll('.nav-links a');
            navLinkItems.forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth <= 768) {
                        navLinks.classList.remove('active');
                        menuToggle.textContent = '☰';
                        menuToggle.style.transform = 'rotate(0)';
                    }
                });
            });

            // 阅读进度条
            const progressBar = document.getElementById('progressBar');
            window.addEventListener('scroll', () => {
                const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (winScroll / height) * 100;
                progressBar.style.width = scrolled + '%';
            });

            // 返回顶部按钮
            const backToTopButton = document.getElementById('backToTop');
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    backToTopButton.classList.add('show');
                } else {
                    backToTopButton.classList.remove('show');
                }
            });
            
            backToTopButton.addEventListener('click', () => {
                // 平滑滚动到顶部
                const scrollToTop = () => {
                    const position = window.scrollY;
                    if (position > 0) {
                        window.scrollTo(0, position - Math.max(20, position / 10));
                        requestAnimationFrame(scrollToTop);
                    }
                };
                scrollToTop();
            });

            // 暗色模式切换
            const themeToggle = document.getElementById('themeToggle');
            
            // 检查本地存储中的主题偏好
            if (localStorage.getItem('theme') === 'dark' || 
                (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.body.classList.add('dark-mode');
                themeToggle.textContent = '☀️';
                // 更新加载动画颜色
                if (pageLoader) {
                    pageLoader.classList.add('dark-mode');
                }
            } else {
                document.body.classList.remove('dark-mode');
                themeToggle.textContent = '🌚';
            }
            
            themeToggle.addEventListener('click', () => {
                // 添加切换动画类
                document.body.classList.add('theme-transition');
                document.body.classList.toggle('dark-mode');
                
                // 切换图标
                themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌚';
                
                // 保存主题偏好到本地存储
                if (document.body.classList.contains('dark-mode')) {
                    localStorage.setItem('theme', 'dark');
                } else {
                    localStorage.setItem('theme', 'light');
                }
                
                // 移除动画类
                setTimeout(() => {
                    document.body.classList.remove('theme-transition');
                }, 300);
            });


            // 平滑滚动
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // 窗口大小变化时重置移动菜单状态
            window.addEventListener('resize', () => {
                if (window.innerWidth > 768) {
                    navLinks.classList.remove('active');
                    menuToggle.textContent = '☰';
                    menuToggle.style.transform = 'rotate(0)';
                }
            });
        });
document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('click', function(event) {
        const effect = document.createElement('div');
        effect.classList.add('click-effect');

        // 随机颜色
        const randomColor = '#dddddd';
        effect.style.backgroundColor = randomColor;

        effect.style.left = event.pageX - 25 + 'px';
        effect.style.top = event.pageY - 25 + 'px';
        document.body.appendChild(effect);

        effect.addEventListener('animationend', function() {
            document.body.removeChild(effect);
        });
    });
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
    