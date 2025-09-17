gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  multiplier: 1,
  smartphone: { smooth: true }, // mobile smooth scroll enable
  tablet: { smooth: true }      // tablet smooth scroll enable
});

// Locomotive scroll update → ScrollTrigger ko sync karna
locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger scrollerProxy setup
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// Resize / refresh par update
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();




// Hero Section Load Animations - Premium Version

// 1️⃣ Heading Animation - layered fade + subtle scale
gsap.from(".hero-content h1", {
    y: 80,             // slightly more dramatic vertical entrance
    opacity: 0,
    scale: 0.95,       // subtle zoom in
    duration: 1.6,
    ease: "power4.out", 
  });
  
  // 2️⃣ Paragraph Animation - delayed, smooth fade with slide
  gsap.from(".hero-content p", {
    y: 40,
    opacity: 0,
    duration: 1.4,
    delay: 0.4,
    ease: "power3.out",
  });
  
  // 3️⃣ Button Animation - pop + bounce effect for CTA
  gsap.from(".btn-primary", {
    scale: 0.6,
    opacity: 0,
    duration: 0.9,
    delay: 0.7,
    ease: "back.out(2.0)",
  });
  
  // 4️⃣ Floating Hero Image - subtle 3D floating + opacity pulse
  gsap.to(".hero-img img", {
    y: 25,                     // slightly more pronounced float
    rotationZ: 1,               // micro rotation for 3D feel
    opacity: 1,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
  
  // 5️⃣ Optional: Hero Container subtle parallax effect
  gsap.to(".hero-container", {
    y: 10,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
  


  // About Section Scroll animation
document.querySelectorAll(".about-block").forEach(block => {
    gsap.from(block.querySelector(".about-content"), {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: block,
        scroller: "#main",
        start: "top 80%",
        end: "top 30%",
        scrub: true
      }
    });
  
    gsap.from(block.querySelector(".about-image img"), {
      y: 50,
      opacity: 0,
      duration: 1.5,
      delay: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: block,
        scroller: "#main",
        start: "top 80%",
        end: "top 30%",
        scrub: true
      }
    });
  });



  // Services Section Animation

gsap.from(".services", {
    scrollTrigger: {
      trigger: ".about", 
      start: "bottom bottom", 
      toggleActions: "play none none reverse",
    },
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });
  


gsap.from(".service-card", {
    scrollTrigger: {
      trigger: ".services",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    y: 50,
    opacity: 1,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out"
  });
  




  gsap.from(".testimonials .section-title", {
    scrollTrigger: {
      trigger: ".testimonials",
      start: "top 80%"
    },
    y: 40,
    opacity: 1,
    duration: 1,
    ease: "power3.out"
  });
  
  gsap.from(".testimonial-card", {
    scrollTrigger: {
      trigger: ".testimonials",
      start: "top 70%"
    },
    y: 30,
    opacity: 1,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out"
  });
  


// Contact section scroll animation
gsap.from(".contact-section .section-title", {
    scrollTrigger: {
      trigger: ".contact-section",
      start: "top 80%",
    },
    y: 50,
    opacity: 1,
    duration: 1,
    ease: "power3.out"
  });
  
  gsap.from(".contact-form", {
    scrollTrigger: {
      trigger: ".contact-section",
      start: "top 70%",
    },
    y: 80,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.3
  });
  


  // Footer animation
gsap.from(".footer-container > div", {
    scrollTrigger: {
      trigger: ".footer",
      start: "top 80%",
    },
    y: 50,
    opacity: 1,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out"
  });
  
