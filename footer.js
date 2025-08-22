// footer.js - Dynamic footer management
(function() {
    // Footer configuration - manage all links in one place
    const footerConfig = {
        links: [
            { text: "Home", href: "index.html", pages: ["privacy-policy.html", "support.html", "whatsnew.html"] },
            { text: "What's New?", href: "whatsnew.html", pages: ["index.html", "privacy-policy.html", "support.html"] },
            { text: "Support", href: "support.html", pages: ["index.html", "privacy-policy.html", "whatsnew.html"] },
            { text: "Privacy Policy", href: "privacy-policy.html", pages: ["index.html", "support.html", "whatsnew.html"] }
        ]
    };

    // Get current page filename
    function getCurrentPage() {
        const path = window.location.pathname;
        const page = path.split('/').pop() || 'index.html';
        return page === '' ? 'index.html' : page;
    }

    // Generate footer HTML
    function generateFooter() {
        const currentPage = getCurrentPage();
        
        // Filter links to exclude current page
        const visibleLinks = footerConfig.links.filter(link => {
            return link.pages.includes(currentPage);
        });

        // Generate link HTML
        const linksHTML = visibleLinks.map(link => 
            `<a href="${link.href}">${link.text}</a>`
        ).join('\n                ');

        return `
            <footer class="footer">
                <p>
                    ${linksHTML}
                </p>
            </footer>
        `;
    }

    // Initialize footer when DOM is ready
    function initFooter() {
        // Find existing footer and replace it
        const existingFooter = document.querySelector('.footer');
        if (existingFooter) {
            const newFooter = document.createElement('div');
            newFooter.innerHTML = generateFooter();
            existingFooter.parentNode.replaceChild(newFooter.firstElementChild, existingFooter);
        } else {
            // If no footer exists, add it to the end of body
            document.body.insertAdjacentHTML('beforeend', generateFooter());
        }
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFooter);
    } else {
        initFooter();
    }
})();