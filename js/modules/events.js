// Events module
async function loadAllEvents() {
    try {
        const response = await fetch('./data/events.json');
        const data = await response.json();
        
        await Promise.all([
            updateEventsSection(data),
            updateUpcomingEvents(data)
        ]);
    } catch (error) {
        console.error('Error loading events:', error);
    }
}

async function updateEventsSection(data) {
    const eventsSection = document.querySelector('.events');
    if (!eventsSection) return;

    eventsSection.innerHTML = `
        <span class="section-label">${data.sectionTitle}</span>
        <h2 class="events-title">${data.sectionDescription}</h2>
        <div class="events-row">
            ${data.testimonials.map(testimonial => `
                <div class="event-card">
                    <div class="event-img">
                        <img src="${testimonial.image}" alt="${testimonial.alt}" class="event-img-wrapper">
                    </div>
                    <div class="event-desc">
                        „${testimonial.quote}"<br>
                        <span class="event-author">— ${testimonial.author}, ${testimonial.class}. клас</span>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

async function updateUpcomingEvents(data) {
    const upcomingEventsSection = document.querySelector('.next-events');
    if (!upcomingEventsSection) return;

    upcomingEventsSection.innerHTML = `
        <h2 class="next-events-title">${data.upcoming.sectionTitle}</h2>
        <div class="next-events-row">
            ${data.upcoming.events.map(event => `
                <div class="next-event-card">
                    <div class="next-event-date">
                        <span class="next-event-day">${event.day}</span>
                        <span class="next-event-month">${event.month}</span>
                    </div>
                    <div class="next-event-info">
                        <span class="next-event-label">${event.label}</span>
                        <span class="next-event-title">${event.title}</span>
                        <span class="next-event-arrow">→</span>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

export { loadAllEvents };