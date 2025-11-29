// Wait for DOM to load completely
document.addEventListener('DOMContentLoaded', function() {
    
    // ==================== HAMBURGER MENU ====================
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    const navOverlay = document.getElementById('navOverlay');
    const navLinks = document.querySelectorAll('nav ul li a');

    if (hamburger && nav && navOverlay) {
        // Toggle menu on hamburger click
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
            navOverlay.classList.toggle('active');
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu on overlay click
        navOverlay.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            navOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Close menu when clicking on nav links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                navOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu on window resize if open
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                navOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // ==================== SCROLL TO TOP BUTTON ====================
    const scrollToTopBtn = document.getElementById('scrollToTop');

    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ==================== SKILLS PROGRESS BARS ====================
    const skillsSection = document.querySelector('.skills-section');
    
    if (skillsSection) {
        const observerOptions = {
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBars = entry.target.querySelectorAll('.progress-value');
                    progressBars.forEach(bar => {
                        const progress = bar.getAttribute('data-progress');
                        bar.style.width = progress + '%';
                    });
                }
            });
        }, observerOptions);

        observer.observe(skillsSection);
    }

    // ==================== SUBMIT BUTTON EFFECTS ====================
    const btn = document.querySelector('.submit-btn');

    if (btn) {
        btn.addEventListener('click', function(e) {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 100);
            }, 50);
        });

        btn.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            this.style.setProperty('--mouse-x', x + 'px');
            this.style.setProperty('--mouse-y', y + 'px');
        });
    }

    // ==================== CV DOWNLOAD MODAL ====================
    const openBtn = document.querySelector('.open-btn');
    const modal = document.getElementById('modal');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('closeBtn');
    const cancelBtn = document.getElementById('cancelBtn');

    if (openBtn && modal && modalOverlay) {
        // Open modal
        openBtn.addEventListener('click', () => {
            modal.classList.add('active');
            modalOverlay.classList.add('active');
        });

        // Close modal function
        function closeModal() {
            modal.classList.remove('active');
            modalOverlay.classList.remove('active');
        }

        // Close button
        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }

        // Cancel button
        if (cancelBtn) {
            cancelBtn.addEventListener('click', closeModal);
        }

        // Click outside modal to close
        modalOverlay.addEventListener('click', closeModal);

        // Prevent modal from closing when clicking inside it
        modal.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
});
