document.addEventListener('DOMContentLoaded', () => {

    // =====================
    // Mobile Navigation
    // =====================
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('is-active');
        });
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            if (mobileMenuBtn) mobileMenuBtn.classList.remove('is-active');
        });
    });

    // =====================
    // Smooth Scroll
    // =====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // =====================
    // Navbar Glassmorphism on Scroll
    // =====================
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // =====================
    // Scroll Reveal (IntersectionObserver)
    // =====================
    const revealElements = document.querySelectorAll('.service-card, .testimonial-card, .step-icon, .experience-text, .experience-image');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        revealObserver.observe(el);
    });

    // =====================
    // Counter Animation (Scroll-triggered)
    // =====================
    const statElements = document.querySelectorAll('[data-count]');
    let statsAnimated = false;

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsAnimated) {
                statsAnimated = true;
                statElements.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-count'));
                    const prefix = stat.getAttribute('data-prefix') || '';
                    let count = 0;
                    const duration = 2000; // 2 seconds
                    const increment = target / (duration / 30);

                    const updateCount = () => {
                        count += increment;
                        if (count < target) {
                            stat.textContent = prefix + Math.ceil(count);
                            requestAnimationFrame(updateCount);
                        } else {
                            stat.textContent = prefix + target;
                        }
                    };
                    updateCount();
                });
            }
        });
    }, { threshold: 0.3 });

    // Observe the stats section
    const statsSection = document.querySelector('[data-count]');
    if (statsSection && statsSection.parentElement) {
        counterObserver.observe(statsSection.closest('section') || statsSection);
    }

    // =====================
    // FAQ Accordion
    // =====================
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const heading = item.querySelector('h4');
        if (heading) {
            heading.addEventListener('click', () => {
                // Close all other items
                faqItems.forEach(other => {
                    if (other !== item) {
                        other.classList.remove('active');
                    }
                });
                // Toggle current
                item.classList.toggle('active');
            });
        }
    });

    // =====================
    // Hero fade-in elements
    // =====================
    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    });

});
