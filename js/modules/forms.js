export function handleSubscribe(event) {
    event.preventDefault();
    const email = document.querySelector('.footer-input').value;
    if (email) {
        console.log('Subscribing email:', email);
        // TODO: Implement subscription logic
    }
}

export function initForms() {
    document.querySelector('.footer-form')?.addEventListener('submit', handleSubscribe);
}