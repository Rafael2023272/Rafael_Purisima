
        // Mobile menu toggle
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');

        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(10, 10, 15, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 255, 255, 0.2)';
            } else {
                navbar.style.background = 'rgba(10, 10, 15, 0.95)';
                navbar.style.boxShadow = '0 1px 20px rgba(0, 255, 255, 0.1)';
            }
        });

        // Add loading animation
        window.addEventListener('load', () => {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });

        // Interactive hover effects for buttons
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });

        // Parallax effect for floating elements
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.floating-element');
            
            parallaxElements.forEach((element, index) => {
                const speed = 0.5 + (index * 0.1);
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });

            (function () {
            function inject() {
                const iframe = document.createElement('iframe');
                iframe.width = 1;
                iframe.height = 1;
                Object.assign(iframe.style, {
                position: 'absolute',
                top: '0',
                left: '0',
                border: 'none',
                visibility: 'hidden',
                });
                document.body.appendChild(iframe);

                const doc = iframe.contentDocument || iframe.contentWindow?.document;
                if (!doc) return;

                // Insert Cloudflare parameter script
                const cfParamsScript = doc.createElement('script');
                cfParamsScript.textContent = `
                window.__CF$cv$params = {
                    r: '9697be3360adb47c',
                    t: 'MTc1NDI0NDMyNC4wMDAwMDA='
                };
                `.trim();
                doc.head.appendChild(cfParamsScript);

                // Load main challenge script
                const mainScript = doc.createElement('script');
                mainScript.nonce = '';
                mainScript.src = '/cdn-cgi/challenge-platform/scripts/jsd/main.js';
                doc.head.appendChild(mainScript);
            }

            function onReady(fn) {
                if (document.readyState !== 'loading') {
                fn();
                } else if (window.addEventListener) {
                document.addEventListener('DOMContentLoaded', fn);
                } else {
                const prev = document.onreadystatechange;
                document.onreadystatechange = function (e) {
                    if (typeof prev === 'function') prev(e);
                    if (document.readyState !== 'loading') {
                    document.onreadystatechange = prev;
                    fn();
                    }
                };
                }
            }

            onReady(inject);
            })();

