// releases.js - Dynamic changelog management
(function() {
    // Generate HTML for a single release
    function generateReleaseHTML(release) {
        let contentHTML = '';

        if (release.description) {
            // Single description paragraph
            contentHTML = `<p>${release.description}</p>`;
        } else if (release.changes && Array.isArray(release.changes)) {
            // Multiple changes as bullet list
            contentHTML = `
                <ul class="privacy-centered-list">
                    ${release.changes.map(change => `<li>${change}</li>`).join('\n                    ')}
                </ul>
            `;
        }

        return `
            <div class="content">
                <div class="section">
                    <h2>Version ${release.version}</h2>
                    ${contentHTML}
                </div>
            </div>
        `;
    }

    // Render all releases
    function renderReleases(data) {
        const container = document.getElementById('releases-container');

        if (!data || !data.releases || !Array.isArray(data.releases)) {
            showError('Invalid data format');
            return;
        }

        const releasesHTML = data.releases
            .map(release => generateReleaseHTML(release))
            .join('\n        ');

        container.innerHTML = releasesHTML;
    }

    // Show error message
    function showError(message) {
        const container = document.getElementById('releases-container');
        container.innerHTML = `
            <div class="content">
                <div class="section">
                    <p style="color: #ff3b30;">Failed to load releases. ${message}</p>
                    <p style="color: #6e6e73; font-size: 1rem; margin-top: 10px;">Please try refreshing the page.</p>
                </div>
            </div>
        `;
    }

    // Load releases from JSON
    function loadReleases() {
        fetch('releases.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => renderReleases(data))
            .catch(error => {
                console.error('Error loading releases:', error);
                showError('Please check your connection.');
            });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadReleases);
    } else {
        loadReleases();
    }
})();
