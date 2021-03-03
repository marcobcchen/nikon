function trackEvent(action, category, label) {
    label = label || '';
    gtag('event', action, {'event_category':category, 'event_label':label});
}

function trackPageView(id, title) {
    gtag('config', id, {'page_title': title});
}