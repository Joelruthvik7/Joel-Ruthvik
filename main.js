<!-- SUCCESS TOAST -->

<div id="successToast"
     class="fixed top-10 right-10 z-[9999] translate-x-[500px] opacity-0 transition-all duration-500">

    <div class="glass border border-green-500/30 bg-black/70 backdrop-blur-xl px-8 py-5 rounded-3xl shadow-2xl shadow-green-500/20">

        <div class="flex items-center gap-4">

            <div class="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <i class="fa-solid fa-check text-green-400 text-xl"></i>
            </div>

            <div>
                <h4 class="font-bold text-green-400">
                    Inquiry Sent Successfully
                </h4>

                <p class="text-sm text-gray-400">
                    Thank you. I will respond shortly.
                </p>
            </div>

        </div>

    </div>

</div>

<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>


    <footer class="py-12 text-center text-gray-600 text-[10px] font-bold uppercase tracking-[0.5em] border-t border-white/5">
        <p>© THUMMALA JOEL RUTHVIK • RECRUITMENT EXCELLENCE</p>
    </footer>

    <script>
        gsap.registerPlugin(TextPlugin, ScrollTrigger);

        function showPage(pageId) {
            const pages = document.querySelectorAll('.page');
            const navLinks = document.querySelectorAll('.nav-link');
            gsap.to('.active-page', {
                opacity: 0, y: 15, duration: 0.3,
                onComplete: () => {
                    pages.forEach(p => p.classList.remove('active-page'));
                    navLinks.forEach(l => l.classList.remove('active'));
                    document.getElementById(pageId).classList.add('active-page');
                    const link = document.querySelector(`[data-page="${pageId}"]`);
                    if(link) link.classList.add('active');
                    gsap.fromTo(document.getElementById(pageId), { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 });
                    window.scrollTo(0, 0);
                    if(pageId === 'home') runHomeAnimations();
                    if(pageId === 'skills') runSkillsAnimations();
		    if(pageId === 'clients') runClientsAnimations();
                    if(pageId === 'services') runServicesAnimations();
		    if(pageId === 'web-portfolio') runWebPortfolioAnimations();
                    if(pageId === 'certifications') runCertificationsAnimations();
                    if(pageId === 'education') runEducationAnimations();
		    if(pageId === 'contact') runContactAnimations();
	            if(pageId === 'experience') setTimeout(runExperienceMuseumAnimations, 300);                    
		    window.scrollTo(0, 0);
                }
            });
        }

        function runHomeAnimations() {
            gsap.to("#typing-hero", { duration: 3, text: "Bridging the gap between top-tier tech talent and industry leaders. 6+ years of expertise in IT Staffing.", ease: "none" });
            gsap.to("#hero-paragraph", { opacity: 1, y: 0, duration: 1, delay: 0.5 });
        }

        function runSkillsAnimations() {
            gsap.from(".reveal-text", { y: 100, opacity: 0, duration: 1, ease: "power4.out" });
            gsap.from(".reveal-sub", { y: 20, opacity: 0, duration: 1, delay: 0.3 });
            
            // Animate progress bars
            gsap.utils.toArray('.skill-progress-fill').forEach(bar => {
                const targetWidth = bar.style.width;
                bar.style.width = '0%';
                gsap.to(bar, { width: targetWidth, duration: 2, ease: "power2.out", scrollTrigger: bar });
            });

            // Animate circular skills
            gsap.utils.toArray('.skill-circle').forEach(circle => {
                const offset = circle.getAttribute('stroke-dashoffset');
                circle.style.strokeDashoffset = "364.4";
                gsap.to(circle, { strokeDashoffset: offset, duration: 2, ease: "power2.out", scrollTrigger: circle });
            });
        }

function runClientsAnimations() {

    gsap.from(".client-title", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    });

    gsap.from(".client-reveal-card", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });

    gsap.from(".domain-grid-card", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)"
    });

}

        function toggleMobileMenu() { document.getElementById('mobile-menu').classList.toggle('hidden'); }

        document.addEventListener('mousemove', (e) => {
            gsap.to('#cursor-light', { x: e.clientX - 400, y: e.clientY - 400, duration: 2 });
        });

        window.onload = () => {
            runHomeAnimations();
        }
    
function runServicesAnimations() {

    gsap.from(".service-main-title", {y: 80,opacity: 0,duration: 1.2,ease: "power4.out"
    });

gsap.from(".service-hero-title", { y: 120, opacity: 0, duration: 1.5, ease: "power4.out" });
            gsap.from(".reveal-service-sub", { opacity: 0, y: 40, duration: 1.2, delay: 0.4 });
            
gsap.from(".service-reveal-card", {opacity: 0,y: 100,duration: 1,stagger: 0.15,ease: "power3.out", clearProps: "opacity,transform"
});
            
gsap.from(".animated-skill-border", {
                opacity: 0, y: 50, duration: 0.8, stagger: 0.05, ease: "power3.out"
            });
            gsap.from(".stat-card", {
                scale: 0.5, opacity: 0, duration: 1, stagger: 0.2, ease: "power4.out"
            });
            gsap.from(".service-quote", {
                opacity: 0, scale: 0.9, duration: 2, ease: "power2.out"
            });
        }



function runCertificationsAnimations() {

```
gsap.killTweensOf(".cert-hero-title");
gsap.killTweensOf(".reveal-cert-sub");
gsap.killTweensOf(".cert-card");

gsap.set(".cert-hero-title", {
    opacity: 0,
    y: 100
});

gsap.set(".reveal-cert-sub", {
    opacity: 0,
    y: 40
});

gsap.set(".cert-card", {
    opacity: 0,y: 80,scale: 0.8
});

gsap.to(".cert-hero-title", {
    opacity: 1,y: 0,duration: 1.4,ease: "power4.out"
});

gsap.to(".reveal-cert-sub", {
    opacity: 1,y: 0,duration: 1,delay: 0.3,ease: "power3.out"
});

gsap.to(".cert-card", {
    opacity: 1,y: 0,scale: 1,duration: 1,stagger: 0.15,delay: 0.5,ease: "back.out(1.7)"
});
```
gsap.from(".cert-quote", { opacity: 0, scale: 0.95, duration: 2, ease: "power2.out" });

}   

function openCertificate(src) {

    // PDF files
    if (src.toLowerCase().endsWith('.pdf')) {
        window.open(src, '_blank');
        return;
    }

    // Images (jpg, png, jpeg)
    document.getElementById('certificateImage').src = src;
    document.getElementById('certificateModal').classList.remove('hidden');
    document.getElementById('certificateModal').classList.add('flex');
}

function closeCertificate() {
    document.getElementById('certificateModal').classList.add('hidden');
    document.getElementById('certificateModal').classList.remove('flex');
}

document.getElementById("certificateModal").addEventListener("click", function(e) {
    if (e.target === this) {
        closeCertificate();
    }
});
 
function runEducationAnimations() {

    gsap.from(".edu-hero-badge", {
        scale: 0,opacity: 0,duration: 1
    });


    gsap.from(".edu-hero-title", {
        y: 100,opacity: 0,duration: 1.5
    });

    gsap.from(".reveal-edu-sub", {
        y: 50,opacity: 0,duration: 1,delay: 0.3
    });

    gsap.utils.toArray(".edu-card").forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%"
            },
            y: 100,
            opacity: 0,
            duration: 1
        });
    });

   gsap.utils.toArray(".edu-stage").forEach(stage => {
        gsap.from(stage, {
            scrollTrigger: {
                trigger: stage,
                start: "top 85%"
            },
            x: -100,
            opacity: 0,
            duration: 1.2
        });
    });

gsap.from(".edu-quote", {
    opacity: 0,scale: 0.9,duration: 2,ease: "power2.out"
});

gsap.from(".stat-card", {
    scale: 0.5,opacity: 0,duration: 1,stagger: 0.2,ease: "power4.out"
});

}

function runProjectsAnimations() {
            gsap.from(".achievement-hero-title", { y: 100, opacity: 0, duration: 1.5, ease: "power4.out" });
            gsap.from(".reveal-achievement-sub", { opacity: 0, y: 40, duration: 1, delay: 0.5 });
            gsap.from(".glass", {
                opacity: 0, y: 50, duration: 1, stagger: 0.1, ease: "power3.out"
            });
            gsap.from(".achievement-quote", {
                opacity: 0, scale: 0.9, duration: 2, ease: "power2.out"
            });
            gsap.from(".stat-card", {
                scale: 0.5, opacity: 0, duration: 1, stagger: 0.2, ease: "power4.out"
            });
        }

function runSocialAnimations() {
            gsap.from(".social-hero-title", { y: 100, opacity: 0, duration: 1.5, ease: "power4.out" });
            gsap.from(".reveal-social-sub", { opacity: 0, y: 40, duration: 1.2, delay: 0.4 });
            gsap.from(".glass", {
                opacity: 0, y: 50, duration: 1, stagger: 0.1, ease: "power3.out"
            });
            gsap.from(".social-quote", {
                opacity: 0, scale: 0.9, duration: 2, ease: "power2.out"
            });
            gsap.from(".stat-card", {
                scale: 0.5, opacity: 0, duration: 1, stagger: 0.2, ease: "power4.out"
            });
        }

 function runBlogAnimations() {
            gsap.from(".blog-hero-title", { y: 100, opacity: 0, duration: 1.5, ease: "power4.out" });
            gsap.from(".reveal-blog-sub", { opacity: 0, y: 40, duration: 1.2, delay: 0.4 });
            gsap.from(".glass", {
                opacity: 0, y: 50, duration: 1, stagger: 0.1, ease: "power3.out"
            });
            gsap.from(".blog-quote", {
                opacity: 0, scale: 0.9, duration: 2, ease: "power2.out"
            });
            gsap.from(".stat-card", {
                scale: 0.5, opacity: 0, duration: 1, stagger: 0.2, ease: "power4.out"
            });
        }

/* NEWLY ADDED CODE 13th June 2026 */
function runContactAnimations() {
    // Reveal Sequence
    gsap.from(".contact-hero-title", { y: 100, opacity: 0, duration: 1.5, ease: "power4.out" });
    gsap.from(".reveal-contact-sub", { opacity: 0, y: 40, duration: 1.2, delay: 0.4 });

    // Alternating ScrollTrigger reveals
    gsap.from("#contact-matrix", {
        x: -100, opacity: 0, duration: 1.5, ease: "power3.out",
        scrollTrigger: { trigger: "#contact-matrix", start: "top 80%" }
    });

    gsap.from("#contact-form-container", {
        x: 100, opacity: 0, duration: 1.5, ease: "power3.out",
        scrollTrigger: { trigger: "#contact-form-container", start: "top 80%" }
    });

    gsap.from("#collaboration-grid", {
        y: 100, opacity: 0, duration: 1.5, ease: "power3.out",
        scrollTrigger: { trigger: "#collaboration-grid", start: "top 80%" }
    });
    

    gsap.from("#communication-philosophy", {
        x: -100, opacity: 0, duration: 1.5, ease: "power3.out",
        scrollTrigger: { trigger: "#communication-philosophy", start: "top 80%" }
    });

    gsap.from("#social-connectivity", {
        x: 100, opacity: 0, duration: 1.5, ease: "power3.out",
        scrollTrigger: { trigger: "#social-connectivity", start: "top 80%" }
    });

    gsap.from(".contact-quote", { opacity: 0, scale: 0.9, duration: 2, ease: "power2.out" });

    // Luxury Beam Animation
    gsap.to(".luxury-beam", {
        opacity: 0.3, y: 500, duration: 10, repeat: -1, yoyo: true, stagger: 2, ease: "sine.inOut"
    });

    // Magnetic Effect for Social Links
    document.querySelectorAll('.social-link-magnetic').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(btn, { x: x * 0.4, y: y * 0.4, duration: 0.3 });
        });
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
        });
    });
}

function updateCharCount(textarea) {
    document.getElementById('char-current').innerText = textarea.value.length;
    if (textarea.value.length > 900) {
        document.getElementById('char-current').classList.add('text-orange-500');
    } else {
        document.getElementById('char-current').classList.remove('text-orange-500');
    }
}
/* NEWLY ADDED CODE ENDED HERE 13th June 2026 */

/* Generic shared trigger functions for previous sections */
        function runEducationAnimations() { gsap.from(".edu-stage", { opacity: 0, y: 50, stagger: 0.3 }); }
        function runProjectsAnimations() { gsap.from(".animated-skill-border", { opacity: 0, scale: 0.9 }); }
        function runSocialAnimations() { gsap.from(".social-hero-title", { y: 80, opacity: 0 }); }
        function runBlogAnimations() { gsap.from(".blog-hero-title", { x: -50, opacity: 0 }); }

/* Testimonal functions */
		
function openTestimonial(btn) {
            document.getElementById('testimonialContent').innerText = btn.getAttribute('data-fulltext');
            document.getElementById('testimonialModal').classList.remove('hidden');
            document.getElementById('testimonialModal').classList.add('flex');
        }
        function closeTestimonial() {
            document.getElementById('testimonialModal').classList.add('hidden');
            document.getElementById('testimonialModal').classList.remove('flex');
        }

        document.addEventListener('mousemove', (e) => {
            gsap.to('#cursor-light', { x: e.clientX - 300, y: e.clientY - 300, duration: 1.5 });
        });

 /* NEWLY ADDED CODE 11th June 2026 */
        function runExperienceMuseumAnimations() {
            // 1. Counter Reset & Trigger
            gsap.utils.toArray('.museum-counter').forEach(counter => {
                const target = +counter.getAttribute('data-target');
                gsap.to(counter, {
                    innerText: target, duration: 2, snap: { innerText: 1 },
                    scrollTrigger: { trigger: counter, start: "top 95%" }
                });
            });

            // 2. Career Journey Reveal Sequence (Left, Bottom, Right)
            const journeyTL = gsap.timeline({ scrollTrigger: { trigger: "#journey-1", start: "top 85%" } });
            journeyTL.to("#journey-1", { opacity: 1, x: 0, duration: 1.2, ease: "power4.out" })
                     .to("#journey-2", { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }, "-=0.8")
                     .to("#journey-3", { opacity: 1, x: 0, duration: 1.2, ease: "power4.out" }, "-=0.8");

            // 3. Original Timeline Reveal Sequence (L-to-C and R-to-C)
            gsap.to("#timeline-1", { 
                opacity: 1, x: 0, duration: 1.2, ease: "power3.out",
                scrollTrigger: { trigger: "#timeline-1", start: "top 80%", toggleActions: "play none none none" }
            });
            gsap.to("#timeline-2", { 
                opacity: 1, x: 0, duration: 1.2, ease: "power3.out",
                scrollTrigger: { trigger: "#timeline-2", start: "top 80%", toggleActions: "play none none none" }
            });
            gsap.to("#timeline-3", { 
                opacity: 1, x: 0, duration: 1.2, ease: "power3.out",
                scrollTrigger: { trigger: "#timeline-3", start: "top 80%", toggleActions: "play none none none" }
            });

            // 4. Proximity Brightness Interaction
            document.addEventListener('mousemove', (e) => {
                const cards = document.querySelectorAll('.proximity-glow');
                cards.forEach(card => {
                    const rect = card.getBoundingClientRect();
                    const cardX = rect.left + rect.width / 2;
                    const cardY = rect.top + rect.height / 2;
                    const dist = Math.hypot(e.clientX - cardX, e.clientY - cardY);
                    
                    // Executive proximity effect: brighten only when within 400px
                    const brightness = Math.max(1, 1.4 - (dist / 600));
                    gsap.to(card, { filter: `brightness(${brightness})`, duration: 0.4 });
                });
            });
        }
        /* NEWLY ADDED CODE ENDED HERE 11th June 2026 */


/* GAMIFIED WEB PORTFOLIO ANIMATIONS */
function runWebPortfolioAnimations() {
    gsap.from(".wp-hero-title", { y: 100, opacity: 0, duration: 1.5, ease: "power4.out" });
    gsap.from(".reveal-wp-sub", { opacity: 0, y: 40, duration: 1.2, delay: 0.4 });

    // Handle Scroll Tracking for Missions
    gsap.utils.toArray('.wp-card').forEach((card, i) => {
        const lvl = card.getAttribute('data-lvl');
        const xp = card.getAttribute('data-xp');
        
        ScrollTrigger.create({
            trigger: card,
            start: "top center",
            onEnter: () => {
                // Update Progress Header
                document.getElementById('global-xp-bar').style.width = xp + '%';
                document.getElementById('xp-counter').innerText = (xp * 90) + ' / 9000 XP';
                document.getElementById('current-lvl-text').innerText = 'LVL 0' + lvl;
                
                // Highlight Nodes
                document.querySelectorAll('.progress-indicator-node').forEach(node => {
                    if(node.getAttribute('data-node') <= lvl) node.classList.add('active');
                });

                // Animate Mission Stats
                const fills = card.querySelectorAll('.mission-stat-fill');
                fills.forEach(fill => {
                    const w = fill.style.width;
                    fill.style.width = '0%';
                    gsap.to(fill, { width: w, duration: 1.5, delay: 0.3, ease: "power4.out" });
                });
            }
        });

        // Entrance animation
        gsap.from(card, {
            scrollTrigger: { trigger: card, start: "top 80%" },
            opacity: 0,
            x: i % 2 === 0 ? -100 : 100,
            duration: 1.2,
            ease: "power3.out"
        });
    });

    // Achievement Badges Animation
    gsap.from(".wp-achievement", {
        scrollTrigger: { trigger: ".wp-achievement", start: "top 90%" },
        opacity: 0,
        scale: 0.5,
        stagger: 0.1,
        duration: 1,
        ease: "back.out(1.7)"
    });

    gsap.from(".wp-cta", {
        scrollTrigger: { trigger: ".wp-cta", start: "top 85%" },
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: "power4.out"
    });
}

		
</script>

<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>

<script>
emailjs.init("x7uRDRgp7KRALYhVz");

document.getElementById("contactForm").addEventListener("submit", function(e) {

    e.preventDefault();

    const btn = this.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    btn.innerHTML = "TRANSMITTING...";
    btn.disabled = true;

    emailjs.sendForm(
        "service_hxmmpwv",
        "template_ly118pc",
        this
    )
    .then(() => {

        btn.innerHTML = "✓ INQUIRY SENT";

        const toast = document.getElementById("successToast");

        toast.classList.remove("translate-x-[500px]", "opacity-0");

        this.reset();

	setTimeout(() => {
   		 toast.classList.add("translate-x-[500px]", "opacity-0");
	}, 5000);

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 3000);

    })
    .catch((error) => {

        console.error(error);

        btn.innerHTML = "FAILED - TRY AGAIN";

        alert("Unable to send inquiry. Please try again.");

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 3000);
    });
});
</script>

<div id="certificateModal"
     class="fixed inset-0 bg-black/90 z-[9999] hidden items-center justify-center p-6">

    <button onclick="closeCertificate()"
            class="absolute top-6 right-6 text-white text-5xl">
        ×
    </button>

    <img id="certificateImage"
         src=""
         class="max-w-full max-h-full rounded-2xl shadow-2xl">
</div>
