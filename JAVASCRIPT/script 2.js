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

// for testimonial


$(document).ready(function(){
    $('.pp-quote').click(function(){
      $('.pp-quote').removeClass("active");
      $(this).addClass("active");
  });
  });
  
  $(document).ready(function(){
      
         // hide-top
  
          $('.li-quote-1').click(function(e){ 
              e.stopPropagation();
              $(".show").addClass('hide-top');
              $(".hide-top").removeClass('show');
              $('.quote-text-1').addClass('show');
              $('.quote-text-1').removeClass('hide-bottom');             
          });
  
          $('.li-quote-2').click(function(e){ 
              e.stopPropagation();
              $(".show").addClass('hide-top');
              $(".hide-top").removeClass('show');
              $('.quote-text-2').addClass('show');             
              $('.quote-text-2').removeClass('hide-bottom');
          });
  
          $('.li-quote-3').click(function(e){ 
              e.stopPropagation();
              $(".show").addClass('hide-top');
              $(".hide-top").removeClass('show');         
              $('.quote-text-3').addClass('show');             
              $('.quote-text-3').removeClass('hide-bottom');
          });
          $('.li-quote-4').click(function(e){ 
              e.stopPropagation();
              $(".show").addClass('hide-top');
              $(".hide-top").removeClass('show');      
              $('.quote-text-4').addClass('show');             
              $('.quote-text-4').removeClass('hide-bottom');
          });
          $('.li-quote-5').click(function(e){ 
              e.stopPropagation();
              $(".show").addClass('hide-top');
              $(".hide-top").removeClass('show');      
              $('.quote-text-5').addClass('show');             
              $('.quote-text-5').removeClass('hide-bottom');
          });
          $('.li-quote-6').click(function(e){ 
              e.stopPropagation();
              $(".show").addClass('hide-top');
              $(".hide-top").removeClass('show');      
              $('.quote-text-6').addClass('show');             
              $('.quote-text-6').removeClass('hide-bottom');
          });
          $('.li-quote-7').click(function(e){ 
              e.stopPropagation();
              $(".show").addClass('hide-top');
              $(".hide-top").removeClass('show');      
              $('.quote-text-7').addClass('show');             
              $('.quote-text-7').removeClass('hide-bottom');
          });
          $('.li-quote-8').click(function(e){ 
              e.stopPropagation();
              $(".show").addClass('hide-top');
              $(".hide-top").removeClass('show');      
              $('.quote-text-8').addClass('show');             
              $('.quote-text-8').removeClass('hide-bottom');
          });
             
      
  });
  
  
  $(document).ready(function(){
      
         // hide-top
  
          $('.li-quote-1').click(function(e){ 
              e.stopPropagation();
              $(".look").addClass('hide-dp-top');
              $(".hide-dp-top").removeClass('look');
              $('.dp-name-1').addClass('look');
              $('.dp-name-1').removeClass('hide-dp-bottom');             
          });
  
          $('.li-quote-2').click(function(e){ 
              e.stopPropagation();
              $(".look").addClass('hide-dp-top');
              $(".hide-dp-top").removeClass('look');
              $('.dp-name-2').addClass('look');
              $('.dp-name-2').removeClass('hide-dp-bottom');             
          });
  
          $('.li-quote-3').click(function(e){ 
              e.stopPropagation();
              $(".look").addClass('hide-dp-top');
              $(".hide-dp-top").removeClass('look');
              $('.dp-name-3').addClass('look');
              $('.dp-name-3').removeClass('hide-dp-bottom');             
          });
          $('.li-quote-4').click(function(e){ 
              e.stopPropagation();
              $(".look").addClass('hide-dp-top');
              $(".hide-dp-top").removeClass('look');
              $('.dp-name-4').addClass('look');
              $('.dp-name-4').removeClass('hide-dp-bottom');             
          });
          
          $('.li-quote-5').click(function(e){ 
              e.stopPropagation();
              $(".look").addClass('hide-dp-top');
              $(".hide-dp-top").removeClass('look');
              $('.dp-name-5').addClass('look');
              $('.dp-name-5').removeClass('hide-dp-bottom');             
          });
          
          $('.li-quote-6').click(function(e){ 
              e.stopPropagation();
              $(".look").addClass('hide-dp-top');
              $(".hide-dp-top").removeClass('look');
              $('.dp-name-6').addClass('look');
              $('.dp-name-6').removeClass('hide-dp-bottom');             
          });
          $('.li-quote-7').click(function(e){ 
              e.stopPropagation();
              $(".look").addClass('hide-dp-top');
              $(".hide-dp-top").removeClass('look');
              $('.dp-name-7').addClass('look');
              $('.dp-name-7').removeClass('hide-dp-bottom');             
          });
          $('.li-quote-8').click(function(e){ 
              e.stopPropagation();
              $(".look").addClass('hide-dp-top');
              $(".hide-dp-top").removeClass('look');
              $('.dp-name-8').addClass('look');
              $('.dp-name-8').removeClass('hide-dp-bottom');             
          });
             
      
  });