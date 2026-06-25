// 1. Register GSAP Plugins
gsap.registerPlugin(TextPlugin, ScrollTrigger);

// 2. Initialize EmailJS
(function() {
    emailjs.init("x7uRDRgp7KRALYhVz");
})();

/**
 * PAGE NAVIGATION LOGIC
 */
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.nav-link');
    const activePage = document.querySelector('.active-page');

    // Kill all active scroll triggers to prevent memory leaks and positioning bugs
    ScrollTrigger.getAll().forEach(t => t.kill());

    gsap.to(activePage, {
        opacity: 0, 
        y: 15, 
        duration: 0.3,
        onComplete: () => {
            // UI Reset
            pages.forEach(p => p.classList.remove('active-page'));
            navLinks.forEach(l => l.classList.remove('active'));
            
            const targetPage = document.getElementById(pageId);
            targetPage.classList.add('active-page');
            
            const link = document.querySelector(`[data-page="${pageId}"]`);
            if(link) link.classList.add('active');

            // Page Entrance
            gsap.fromTo(targetPage, 
                { opacity: 0, y: 15 }, 
                { opacity: 1, y: 0, duration: 0.5 }
            );

            window.scrollTo(0, 0);

            // Trigger specific animations based on ID
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
            
            // Refresh ScrollTrigger positions for the new content
            ScrollTrigger.refresh();
        }
    });
}

/**
 * ANIMATION MODULES
 */

function runHomeAnimations() {
    gsap.to("#typing-hero", { 
        duration: 3, 
        text: "Bridging the gap between top-tier tech talent and industry leaders. 6+ years of expertise in IT Staffing.", 
        ease: "none" 
    });
    gsap.to("#hero-paragraph", { opacity: 1, y: 0, duration: 1, delay: 0.5 });
}

function runSkillsAnimations() {
    gsap.from(".reveal-text", { y: 100, opacity: 0, duration: 1, ease: "power4.out" });
    gsap.from(".reveal-sub", { y: 20, opacity: 0, duration: 1, delay: 0.3 });
    
    gsap.utils.toArray('.skill-progress-fill').forEach(bar => {
        const targetWidth = bar.style.width;
        gsap.fromTo(bar, { width: '0%' }, { 
            width: targetWidth, 
            duration: 2, 
            ease: "power2.out", 
            scrollTrigger: { trigger: bar, start: "top 90%" } 
        });
    });

    gsap.utils.toArray('.skill-circle').forEach(circle => {
        const offset = circle.getAttribute('stroke-dashoffset');
        gsap.fromTo(circle, { strokeDashoffset: "364.4" }, { 
            strokeDashoffset: offset, 
            duration: 2, 
            ease: "power2.out", 
            scrollTrigger: { trigger: circle, start: "top 90%" } 
        });
    });
}

function runClientsAnimations() {
    gsap.from(".client-title", { y: 80, opacity: 0, duration: 1, ease: "power4.out" });
    gsap.from(".client-reveal-card", { y: 80, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out" });
    gsap.from(".domain-grid-card", { scale: 0.8, opacity: 0, duration: 1, stagger: 0.2, ease: "back.out(1.7)" });
}

function runServicesAnimations() {
    gsap.from(".service-main-title", { y: 80, opacity: 0, duration: 1.2, ease: "power4.out" });
    gsap.from(".service-hero-title", { y: 120, opacity: 0, duration: 1.5, ease: "power4.out" });
    gsap.from(".reveal-service-sub", { opacity: 0, y: 40, duration: 1.2, delay: 0.4 });
    gsap.from(".service-reveal-card", { opacity: 0, y: 100, duration: 1, stagger: 0.15, ease: "power3.out" });
    gsap.from(".stat-card", { scale: 0.5, opacity: 0, duration: 1, stagger: 0.2, ease: "power4.out" });
}

function runCertificationsAnimations() {
    gsap.set([".cert-hero-title", ".reveal-cert-sub", ".cert-card"], { opacity: 0 });
    
    gsap.to(".cert-hero-title", { opacity: 1, y: 0, duration: 1.4, ease: "power4.out" });
    gsap.to(".reveal-cert-sub", { opacity: 1, y: 0, duration: 1, delay: 0.3 });
    gsap.to(".cert-card", { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.15, delay: 0.5, ease: "back.out(1.7)" });
}

function runEducationAnimations() {
    gsap.from(".edu-hero-badge", { scale: 0, opacity: 0, duration: 1 });
    gsap.from(".edu-hero-title", { y: 100, opacity: 0, duration: 1.5 });
    
    gsap.utils.toArray(".edu-card").forEach(card => {
        gsap.from(card, {
            scrollTrigger: { trigger: card, start: "top 85%" },
            y: 100, opacity: 0, duration: 1
        });
    });

    gsap.from(".edu-stage", { opacity: 0, y: 50, stagger: 0.3, duration: 1 });
}

function runExperienceMuseumAnimations() {
    gsap.utils.toArray('.museum-counter').forEach(counter => {
        const target = +counter.getAttribute('data-target');
        gsap.to(counter, {
            innerText: target, duration: 2, snap: { innerText: 1 },
            scrollTrigger: { trigger: counter, start: "top 95%" }
        });
    });

    const journeyTL = gsap.timeline({ scrollTrigger: { trigger: "#journey-1", start: "top 85%" } });
    journeyTL.to("#journey-1", { opacity: 1, x: 0, duration: 1.2, ease: "power4.out" })
             .to("#journey-2", { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }, "-=0.8")
             .to("#journey-3", { opacity: 1, x: 0, duration: 1.2, ease: "power4.out" }, "-=0.8");

    // Timeline reveals
    [1, 2, 3].forEach(num => {
        gsap.to(`#timeline-${num}`, { 
            opacity: 1, x: 0, duration: 1.2, ease: "power3.out",
            scrollTrigger: { trigger: `#timeline-${num}`, start: "top 80%" }
        });
    });
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
                const xpBar = document.getElementById('global-xp-bar');
                if(xpBar) xpBar.style.width = xp + '%';
                
                const xpCount = document.getElementById('xp-counter');
                if(xpCount) xpCount.innerText = (xp * 90) + ' / 9000 XP';
                
                document.querySelectorAll('.progress-indicator-node').forEach(node => {
                    if(node.getAttribute('data-node') <= lvl) node.classList.add('active');
                });
            }
        });

        gsap.from(card, {
            scrollTrigger: { trigger: card, start: "top 80%" },
            opacity: 0,
            x: i % 2 === 0 ? -100 : 100,
            duration: 1.2
        });
    });
}

function runContactAnimations() {
    gsap.from(".contact-hero-title", { y: 100, opacity: 0, duration: 1.5, ease: "power4.out" });
    
    const elements = ["#contact-matrix", "#contact-form-container", "#collaboration-grid", "#communication-philosophy", "#social-connectivity"];
    elements.forEach(el => {
        if(document.querySelector(el)) {
            gsap.from(el, {
                y: 50, opacity: 0, duration: 1.5,
                scrollTrigger: { trigger: el, start: "top 85%" }
            });
        }
    });

    gsap.to(".luxury-beam", {
        opacity: 0.3, y: 500, duration: 10, repeat: -1, yoyo: true, stagger: 2, ease: "sine.inOut"
    });
}

/**
 * UTILS & EVENT LISTENERS
 */

function toggleMobileMenu() { 
    document.getElementById('mobile-menu').classList.toggle('hidden'); 
}

function openCertificate(src) {
    if (src.toLowerCase().endsWith('.pdf')) {
        window.open(src, '_blank');
        return;
    }
    document.getElementById('certificateImage').src = src;
    document.getElementById('certificateModal').classList.replace('hidden', 'flex');
}

function closeCertificate() {
    document.getElementById('certificateModal').classList.replace('flex', 'hidden');
}

function updateCharCount(textarea) {
    const countEl = document.getElementById('char-current');
    countEl.innerText = textarea.value.length;
    countEl.classList.toggle('text-orange-500', textarea.value.length > 900);
}

// Universal Cursor and Glow Effect
document.addEventListener('mousemove', (e) => {
    gsap.to('#cursor-light', { x: e.clientX - 400, y: e.clientY - 400, duration: 1.5 });

    // Proximity Brightness for Experience cards
    const cards = document.querySelectorAll('.proximity-glow');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardX = rect.left + rect.width / 2;
        const cardY = rect.top + rect.height / 2;
        const dist = Math.hypot(e.clientX - cardX, e.clientY - cardY);
        const brightness = Math.max(1, 1.4 - (dist / 600));
        gsap.to(card, { filter: `brightness(${brightness})`, duration: 0.4 });
    });
});

// Form Submission
const contactForm = document.getElementById("contactForm");
if(contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const btn = this.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;

        btn.innerHTML = "TRANSMITTING...";
        btn.disabled = true;

        emailjs.sendForm("service_hxmmpwv", "template_ly118pc", this)
            .then(() => {
                btn.innerHTML = "✓ INQUIRY SENT";
                const toast = document.getElementById("successToast");
                toast.classList.remove("translate-x-[500px]", "opacity-0");
                this.reset();
                setTimeout(() => toast.classList.add("translate-x-[500px]", "opacity-0"), 5000);
                setTimeout(() => { btn.innerHTML = originalText; btn.disabled = false; }, 3000);
            })
            .catch((err) => {
                console.error(err);
                btn.innerHTML = "FAILED - TRY AGAIN";
                setTimeout(() => { btn.innerHTML = originalText; btn.disabled = false; }, 3000);
            });
    });
}

// Initial Load
window.onload = () => {
    runHomeAnimations();
};
