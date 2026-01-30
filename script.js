document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Navigation Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('is-active');
        });
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('is-active');
        });
    });

    // Smooth Scroll for Anchor Links (Native smooth scroll is in CSS, this is fallback/enhancement)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Offset for fixed header
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

    // Reveal Animations on Scroll
    const revealElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .service-card, .gallery-item');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
                element.style.opacity = "1";
                element.style.transform = "translate(0)";
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Trigger once on load
    revealOnScroll();

    // Stats Counter Animation (Simple version)
    const stats = document.querySelectorAll('.stat-number');
    let statsAnimated = false;

    const animateStats = () => {
        const statsSection = document.querySelector('.experience');
        if (!statsSection) return;

        const sectionTop = statsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100 && !statsAnimated) {
            stats.forEach(stat => {
                const target = +stat.innerText.replace('+', ''); // Remove + for calculation
                const isPlus = stat.innerText.includes('+');
                let count = 0;
                const increment = target / 50; // Speed

                const updateCount = () => {
                    count += increment;
                    if (count < target) {
                        stat.innerText = Math.ceil(count) + (isPlus ? '+' : '');
                        setTimeout(updateCount, 40);
                    } else {
                        stat.innerText = target + (isPlus ? '+' : '');
                    }
                };
                updateCount();
            });
            statsAnimated = true;
        }
    };

    window.addEventListener('scroll', animateStats);

});
