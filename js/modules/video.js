export const videoBtn = document.querySelector('.play-btn');

export function handleVideoPlay() {
    // TODO: Implement video player functionality
    console.log('Video play clicked');
}

// Initialize video functionality
export function initVideo() {
    videoBtn?.addEventListener('click', handleVideoPlay);
}