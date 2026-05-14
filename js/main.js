// Initialize Lenis Smooth Scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Update ScrollTrigger on Lenis scroll
lenis.on('scroll', ScrollTrigger.update);

// Integrate Lenis and GSAP ticker
gsap.ticker.add((time)=>{
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if(menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');

        if(navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
            lenis.stop();
        } else {
            document.body.style.overflow = '';
            lenis.start();
        }
    });
}

// Global Animations
document.addEventListener("DOMContentLoaded", (event) => {
    // Navbar Animation
    gsap.from(".navbar", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        delay: 0.2
    });

    // Subtle fade in for sections
    const sections = document.querySelectorAll('section, .footer');
    sections.forEach(section => {
        gsap.fromTo(section,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
});

// Home Page Specific Animations
document.addEventListener("DOMContentLoaded", (event) => {
    // Hero Animation
    if(document.querySelector('.hero')) {
        const heroTl = gsap.timeline();

        heroTl.from(".hero-content h1", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.5
        })
        .from(".hero-content p", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.6")
        .from(".hero-cta .btn", {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "power3.out"
        }, "-=0.4")
        .from(".hero-image-wrapper", {
            scale: 0.9,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out"
        }, "-=1")
        .from(".hero-stat-card", {
            x: -50,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.7)"
        }, "-=0.8");
    }

    // Projects Stagger
    if(document.querySelector('.projects-grid')) {
        const projects = document.querySelectorAll('.project-item');
        projects.forEach(project => {
            gsap.from(project, {
                scrollTrigger: {
                    trigger: project,
                    start: "top 80%",
                },
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out"
            });
        });
    }

    // Process Cards Stagger
    if(document.querySelector('.process-grid')) {
        gsap.from(".process-card", {
            scrollTrigger: {
                trigger: ".process-grid",
                start: "top 75%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        });

        gsap.from(".process-line", {
            scrollTrigger: {
                trigger: ".process-grid",
                start: "top 75%",
            },
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1.5,
            ease: "power3.inOut"
        });
    }
});

// Project Page Specific Animations
document.addEventListener("DOMContentLoaded", (event) => {
    if(document.querySelector('.project-hero')) {
        const projectTl = gsap.timeline();

        projectTl.from(".project-title h1", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.3
        })
        .from(".detail-col", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out"
        }, "-=0.6")
        .from(".project-main-image", {
            y: 50,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out"
        }, "-=0.6");

        // Gallery Images Stagger
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach(item => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
        });
    }
});

// About Page Specific Animations
document.addEventListener("DOMContentLoaded", (event) => {
    if(document.querySelector('.about-hero')) {
        gsap.from(".about-header h1", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.3
        });

        gsap.from(".about-header p", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.5
        });

        gsap.from(".about-main-image", {
            y: 50,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.7
        });

        // Experience List Stagger
        const expItems = document.querySelectorAll('.experience-item');
        expItems.forEach(item => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                },
                x: -50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            });
        });
    }
});

// Contact Page Specific Animations
document.addEventListener("DOMContentLoaded", (event) => {
    if(document.querySelector('.contact-hero')) {
        const contactTl = gsap.timeline();

        contactTl.from(".contact-info h1", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.3
        })
        .from(".contact-info > p", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.6")
        .from(".contact-detail-item", {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out"
        }, "-=0.4")
        .from(".contact-form-container", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        }, "-=0.8");
    }
});
