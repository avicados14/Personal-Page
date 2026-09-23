document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (toggle && navLinks) {
        const closeMenu = () => {
            toggle.setAttribute('aria-expanded', 'false');
            navLinks.classList.remove('is-open');
        };

        toggle.addEventListener('click', () => {
            const opening = toggle.getAttribute('aria-expanded') !== 'true';
            toggle.setAttribute('aria-expanded', String(opening));
            navLinks.classList.toggle('is-open', opening);
        });

        navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

        document.addEventListener('click', (event) => {
            if (!event.target.closest('.site-nav')) closeMenu();
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') closeMenu();
        });
    }

    document.querySelectorAll('[data-year]').forEach((node) => {
        node.textContent = new Date().getFullYear();
    });

    const animated = document.querySelectorAll('[data-reveal]');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion || !('IntersectionObserver' in window)) {
        animated.forEach((node) => node.classList.add('is-visible'));
    } else {
        const observer = new IntersectionObserver((entries, revealObserver) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            });
        }, { threshold: 0.14, rootMargin: '0px 0px -40px' });

        animated.forEach((node) => observer.observe(node));
    }

    const copyButton = document.querySelector('[data-copy-email]');
    const copyStatus = document.querySelector('[data-copy-status]');

    if (copyButton && copyStatus) {
        copyButton.addEventListener('click', async () => {
            const email = copyButton.dataset.copyEmail;
            try {
                await navigator.clipboard.writeText(email);
                copyStatus.textContent = 'Email copied to clipboard.';
            } catch (error) {
                copyStatus.textContent = `Copy unavailable. Email: ${email}`;
            }
        });
    }
});
