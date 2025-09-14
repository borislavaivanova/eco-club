// Import modules
import { initVideo } from './modules/video.js';
import { loadAllEvents } from './modules/events.js';
import { loadMainNav, loadFooterNav, initSmoothScroll } from './modules/navigation.js';
import { initForms } from './modules/forms.js';

// Initialize application
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Initialize UI components
        initVideo();
        initForms();
        initSmoothScroll();

        // Load dynamic content
        await Promise.all([
            loadAllEvents(),
            loadMainNav(),
            loadFooterNav()
        ]);
    } catch (error) {
        console.error('Error initializing application:', error);
    }
});