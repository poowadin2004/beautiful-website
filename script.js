document.addEventListener('DOMContentLoaded', () => {
    // 1. Page transition effect (Fade in)
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);

    // 2. Scroll Reveal Animation for interactive feeling
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // Trigger threshold

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    // Attach scroll listener and trigger once on load
    window.addEventListener('scroll', revealOnScroll);
    setTimeout(revealOnScroll, 150); // delay ensures CSS is fully parsed

    // 3. Navbar scroll effect (shrinks and adds shadow when scrolled)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            navbar.style.padding = '0.8rem 8%';
            navbar.style.boxShadow = '0 10px 30px -10px rgba(0, 0, 0, 0.1)';
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.padding = '1.2rem 8%';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });

    // 4. Highlight active link in nav based on current URL
    let activePage = window.location.pathname.split("/").pop();
    if(activePage === "" || activePage === "index.html") {
        activePage = "index.html"; 
    }
    
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active'); // reset all
        if (link.getAttribute('href') === activePage) {
            link.classList.add('active');
        }
    });
});
