// Navigation module
async function loadMainNav() {
    try {
        const response = await fetch('./data/navigation.json');
        const data = await response.json();
        
        const mainNav = document.querySelector('.navbar-links');
        if (!mainNav) return;

        mainNav.innerHTML = data.mainNav.map(item => `
            <a href="${item.href}">${item.title}</a>
        `).join('');
    } catch (error) {
        console.error('Error loading main navigation:', error);
    }
}

async function loadFooterNav() {
    try {
        const response = await fetch('./data/navigation.json');
        const data = await response.json();
        
        const footerLinks = document.querySelector('.footer-links');
        if (!footerLinks) return;

        footerLinks.innerHTML = Object.entries(data.footerNav).map(([, section]) => `
            <div class="footer-group">
                ${section.links.map(link => `
                    <a href="${link.href}">${link.title}</a>
                `).join('')}
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading footer navigation:', error);
    }
}

// Initialize smooth scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

export { loadMainNav, loadFooterNav, initSmoothScroll };