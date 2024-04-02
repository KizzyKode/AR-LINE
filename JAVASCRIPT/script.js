// for the counter i added to the section right above the testimonials 
function startAnimation(counterElement, targetValue, duration) {
    let currentValue = 0;
    let increment = Math.ceil(targetValue / (duration / 16)); 
  
    function updateCounter() {
        if (currentValue < targetValue) {
            currentValue += increment;
            if (currentValue > targetValue) {
                currentValue = targetValue;
            }
            if (currentValue === 40 || currentValue === 16) {
                counterElement.innerText = currentValue + '+';
            } else {
                counterElement.innerText = currentValue;
            }
            setTimeout(updateCounter, 16);
        }
    }
  
    updateCounter();
}


// the counter only counts when in view
function inView(element) {
    const rect = element.getBoundingClientRect(); 
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function initializeCounters() {
    const container = document.querySelector('.sec9');
    if (inView(container)) {
        const counters = container.querySelectorAll('.counter');
        counters.forEach(counter => {
            const targetValue = parseInt(counter.dataset.targetValue);
            startAnimation(counter, targetValue, 3000); 
        });
    }
}

// load counter when page is refreshed
document.addEventListener('DOMContentLoaded', () => {
    initializeCounters();
});

window.addEventListener('scroll', () => {
    initializeCounters();
});


// calendly trigger

 




