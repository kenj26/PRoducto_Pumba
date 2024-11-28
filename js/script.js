
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.section');
    let lastScrollTop = 0;
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    window.onscroll = function() {
        const header = document.querySelector('header');
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
            header.classList.add('scrolled');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
    };
});
