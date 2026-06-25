/**
 * THUMMALA JOEL RUTHVIK - PORTFOLIO CORE ENGINE
 * Optimized for Performance, Memory Management, and SPA Integrity.
 */

// 1. DOM CACHE & STATE
const UI = {
    successToast: document.getElementById('successToast'),
    cursorLight: document.getElementById('cursor-light'),
    contactForm: document.getElementById('contactForm'),
    certModal: document.getElementById('certificateModal'),
    certImg: document.getElementById('certificateImage'),
    testimonialModal: document.getElementById('testimonialModal'),
    testimonialContent: document.getElementById('testimonialContent'),
    mobileMenu: document.getElementById('mobile-menu'),
    xpBar: document.getElementById('global-xp-bar'),
    xpCounter: document.getElementById('xp-counter'),
    lvlText: document.getElementById('current-lvl-text')
};

// State to prevent duplicate listener attachment
const State = {
    initializedListeners: new Set(),
    activeScrollTriggers: []
};

// 2. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(TextPlugin, ScrollTrigger);
    initGlobalAnimations();
    showPage('home'); // Initial load
});

// 3. CORE NAVIGATION LOGIC (SPA)
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.nav-link');
    const targetPage = document.getElementById(pageId);

    if (!targetPage) return;

    // Cleanup previous state to prevent memory leaks
    cleanupAnimations();

    gsap.to('.active-page', {
        opacity: 0, 
        y: 15, 
        duration: 0.3,
        onComplete: () => {
            pages.forEach(p => p.classList.remove('active-page'));
            navLinks.forEach(l => l.classList.remove('active'));

            targetPage.classList.add('active-page');
            const link = document.querySelector(`[data-page="${pageId}"]`);
            if (link) link.classList.add('active');

            gsap.fromTo(targetPage, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 });
            window.scrollTo(0, 0);

            // Router: Trigger animations based on page
            switch(pageId) {
                case 'home': runHomeAnimations(); break;
                case 'skills': runSkillsAnimations(); break;
                case 'clients': runClientsAnimations(); break;
                case 'services': runServicesAnimations(); break;
                case 'web-portfolio': runWebPortfolioAnimations(); break;
                case 'certifications': runCertificationsAnimations(); break;
                case 'education': runEducationAnimations(); break;
                case 'contact': runContactAnimations(); break;
                case 'experience': setTimeout(runExperienceMuseumAnimations, 300); break;
            }
        }
    });
}

/**
 * Kills all active ScrollTriggers and Tweens before switching pages.
 * Critical for SPA performance.
 */
function cleanupAnimations() {
    ScrollTrigger.getAll().forEach(t => t.kill());
    gsap.killTweensOf("*");
}

// 4. GLOBAL ANIMATIONS (Run Once)
function initGlobalAnimations() {
    // Optimized Cursor Light using quickTo
    if (UI.cursorLight) {
        const xTo = gsap.quickTo(UI.cursorLight, "x", { duration: 0.8, ease: "power3" });
        const yTo = gsap.quickTo(UI.cursorLight, "y", { duration: 0.8, ease: "power3" });

        window.addEventListener('mousemove', e => {
            xTo(e.clientX - 400);
            yTo(e.clientY - 400);
        });
    }
}

// 5. PAGE SPECIFIC ANIMATIONS
function runHomeAnimations() {
    gsap.to("#typing-hero", { duration: 3, text: "Bridging the gap between top-tier tech talent and industry leaders. 6+ years of expertise in IT Staffing.", ease: "none" });
    gsap.to("#hero-paragraph", { opacity: 1, y: 0, duration: 1, delay: 0.5 });
}

function runSkillsAnimations() {
    gsap.from(".reveal-text", { y: 100, opacity: 0, duration: 1, ease: "power4.out" });
    
    gsap.utils.toArray('.skill-progress-fill').forEach(bar => {
        const targetWidth = bar.getAttribute('style').match(/width:\s*(\d+)%/)[0];
        gsap.fromTo(bar, { width: '0%' }, { width: targetWidth, duration: 2, ease: "power2.out", scrollTrigger: bar });
    });

    gsap.utils.toArray('.skill-circle').forEach(circle => {
        const offset = circle.getAttribute('stroke-dashoffset');
        gsap.fromTo(circle, { strokeDashoffset: "364.4" }, { strokeDashoffset: offset, duration: 2, ease: "power2.out", scrollTrigger: circle });
    });
}

function runClientsAnimations() {
    gsap.from(".client-title", { y: 80, opacity: 0, duration: 1, ease: "power4.out" });
    gsap.from(".client-reveal-card", { y: 80, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out" });
    gsap.from(".domain-grid-card", { scale: 0.8, opacity: 0, duration: 1, stagger: 0.2, ease: "back.out(1.7)" });
}

function runServicesAnimations() {
    gsap.from(".service-main-title", { y: 80, opacity: 0, duration: 1.2, ease: "power4.out" });
    gsap.from(".service-reveal-card", { opacity: 0, y: 100, duration: 1, stagger: 0.15, ease: "power3.out" });
    gsap.from(".stat-card", { scale: 0.5, opacity: 0, duration: 1, stagger: 0.2, ease: "power4.out" });
}

function runCertificationsAnimations() {
    gsap.from(".cert-hero-title", { opacity: 0, y: 100, duration: 1.4, ease: "power4.out" });
    gsap.from(".cert-card", { opacity: 0, y: 80, scale: 0.8, duration: 1, stagger: 0.15, ease: "back.out(1.7)" });
}

function runEducationAnimations() {
    gsap.from(".edu-hero-badge", { scale: 0, opacity: 0, duration: 1 });
    gsap.from(".edu-card", {
        y: 100, opacity: 0, duration: 1, stagger: 0.3,
        scrollTrigger: { trigger: ".edu-card", start: "top 85%" }
    });
}

function runExperienceMuseumAnimations() {
    // Counter Animation
    gsap.utils.toArray('.museum-counter').forEach(counter => {
        const target = +counter.getAttribute('data-target');
        gsap.to(counter, {
            innerText: target, duration: 2, snap: { innerText: 1 },
            scrollTrigger: { trigger: counter, start: "top 95%" }
        });
    });

    // Proximity Effect (Optimized with single global listener check)
    if (!State.initializedListeners.has('museum-proximity')) {
        document.addEventListener('mousemove', (e) => {
            if (!document.getElementById('experience').classList.contains('active-page')) return;
            const cards = document.querySelectorAll('.proximity-glow');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const dist = Math.hypot(e.clientX - (rect.left + rect.width / 2), e.clientY - (rect.top + rect.height / 2));
                const brightness = Math.max(1, 1.4 - (dist / 600));
                gsap.to(card, { filter: `brightness(${brightness})`, duration: 0.4 });
            });
        });
        State.initializedListeners.add('museum-proximity');
    }
}

function runWebPortfolioAnimations() {
    gsap.from(".wp-hero-title", { y: 100, opacity: 0, duration: 1.5, ease: "power4.out" });
    
    gsap.utils.toArray('.wp-card').forEach((card, i) => {
        const lvl = card.getAttribute('data-lvl');
        const xp = card.getAttribute('data-xp');
        
        ScrollTrigger.create({
            trigger: card,
            start: "top center",
            onEnter: () => {
                if(UI.xpBar) UI.xpBar.style.width = xp + '%';
                if(UI.xpCounter) UI.xpCounter.innerText = (xp * 90) + ' / 9000 XP';
                if(UI.lvlText) UI.lvlText.innerText = 'LVL 0' + lvl;
                
                document.querySelectorAll('.progress-indicator-node').forEach(node => {
                    if(node.getAttribute('data-node') <= lvl) node.classList.add('active');
                });
            }
        });
    });
}

function runContactAnimations() {
    gsap.from(".contact-hero-title", { y: 100, opacity: 0, duration: 1.5, ease: "power4.out" });

    // Magnetic Effect (Delegated to prevent listener stacking)
    if (!State.initializedListeners.has('magnetic-links')) {
        document.body.addEventListener('mousemove', (e) => {
            const btn = e.target.closest('.social-link-magnetic');
            if (!btn) return;
            const rect = btn.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) * 0.4;
            const y = (e.clientY - rect.top - rect.height / 2) * 0.4;
            gsap.to(btn, { x, y, duration: 0.3 });
        });
        document.body.addEventListener('mouseleave', (e) => {
            const btn = e.target.closest('.social-link-magnetic');
            if (btn) gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
        }, true);
        State.initializedListeners.add('magnetic-links');
    }
}

// 6. UTILITIES (Modals, Forms)
function toggleMobileMenu() { UI.mobileMenu?.classList.toggle('hidden'); }

function openCertificate(src) {
    if (src.toLowerCase().endsWith('.pdf')) {
        window.open(src, '_blank');
        return;
    }
    UI.certImg.src = src;
    UI.certModal.classList.replace('hidden', 'flex');
}

function closeCertificate() { UI.certModal.classList.replace('flex', 'hidden'); }

function openTestimonial(btn) {
    UI.testimonialContent.innerText = btn.getAttribute('data-fulltext');
    UI.testimonialModal.classList.replace('hidden', 'flex');
}

function closeTestimonial() { UI.testimonialModal.classList.replace('flex', 'hidden'); }

function updateCharCount(textarea) {
    const countEl = document.getElementById('char-current');
    if (!countEl) return;
    countEl.innerText = textarea.value.length;
    countEl.classList.toggle('text-orange-500', textarea.value.length > 900);
}

// 7. EMAIL JS INTEGRATION
if (UI.contactForm) {
    emailjs.init("x7uRDRgp7KRALYhVz");
    UI.contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const btn = this.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;

        btn.innerHTML = "TRANSMITTING...";
        btn.disabled = true;

        emailjs.sendForm("service_hxmmpwv", "template_ly118pc", this)
            .then(() => {
                btn.innerHTML = "✓ INQUIRY SENT";
                UI.successToast.classList.remove("translate-x-[500px]", "opacity-0");
                this.reset();
                setTimeout(() => UI.successToast.classList.add("translate-x-[500px]", "opacity-0"), 5000);
                setTimeout(() => { btn.innerHTML = originalText; btn.disabled = false; }, 3000);
            })
            .catch((err) => {
                console.error("Email Error:", err);
                btn.innerHTML = "FAILED - TRY AGAIN";
                setTimeout(() => { btn.innerHTML = originalText; btn.disabled = false; }, 3000);
            });
    });
}
