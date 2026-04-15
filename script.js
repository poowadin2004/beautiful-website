document.addEventListener('DOMContentLoaded', () => {
    // Add animation to elements when they become visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Select all elements with fade-in class
    document.querySelectorAll('.fade-in').forEach((el, index) => {
        // Stagger the animation slightly for each element
        setTimeout(() => {
            observer.observe(el);
            // Fallback: add visible class immediately if IntersectionObserver fails or misses
            el.classList.add('visible');
        }, index * 200);
    });

    // Mouse movement effect on glass cards
    document.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.glass-card');
        const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 50;

        cards.forEach(card => {
            if(!card.classList.contains('floating-1') && !card.classList.contains('floating-2')) {
               card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
            }
        });
    });
});
