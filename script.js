$(document).ready(function(){
    $(window).scroll(function(){
      if(this.scrollY > 20){
        $(".navbar").addClass("sticky");
        $(".goTop").fadeIn();
      }
      else{
        $(".navbar").removeClass("sticky");
        $(".goTop").fadeOut();
      }
    });
  
    $(".goTop").click(function(){scroll(0,0)});
  
    $('.menu-toggler').click(function(){
      $(this).toggleClass("active");
      $(".navbar-menu").toggleClass("active");
    });
  
    $(".works").magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery:{enabled:true}
    });
  });

//button manuplation 
  function showAlert() {
    alert("You need to sign-up first before Add a testemoiyas");
}
function showAlert1() {
  alert("You need to sign-up first before Show my-Blog");
}


//testimony
//new 
function displayTestimonials() {
  var testimonialList = document.getElementById('testimonialList');
  testimonialList.innerHTML = ''; // Clear the list

  for (var i = 0; i < testimonials.length; i++) {
      var testimonialElement = document.createElement('div');
      testimonialElement.classList.add('col');

      var testimonialDiv = document.createElement('div');
      testimonialDiv.classList.add('testimonial');
      testimonialElement.appendChild(testimonialDiv);

      var imgElement = document.createElement('img');
      imgElement.src = testimonials[i].photo;
      testimonialDiv.appendChild(imgElement);

      var nameElement = document.createElement('div');
      nameElement.classList.add('name');
      nameElement.textContent = testimonials[i].name;
      testimonialDiv.appendChild(nameElement);

      var starsElement = document.createElement('div');
      starsElement.classList.add('stars');
      starsElement.innerHTML = '<i class="fas fa-star"></i>'.repeat(5); // Add 5 stars
      testimonialDiv.appendChild(starsElement);

      var textElement = document.createElement('p');
      textElement.textContent = testimonials[i].testimonial;
      testimonialDiv.appendChild(textElement);

      testimonialList.appendChild(testimonialElement);
  }
}
//end of new 
    // Array to store the testimonials
var testimonials = [];

// Function to submit a testimonial
function submitTestimonial() {
    // Get the input values
    var name = document.getElementById('name').value;
    var jobTitle = document.getElementById('jobTitle').value;
    var photo = document.getElementById('photo').files[0];
    var testimonial = document.getElementById('testimonial').value;

    // Add the new testimonial to the array
    testimonials.push({
        name: name,
        jobTitle: jobTitle,
        photo: URL.createObjectURL(photo),
        testimonial: testimonial
    });

    // Clear the input fields
    document.getElementById('name').value = '';
    document.getElementById('jobTitle').value = '';
    document.getElementById('photo').value = '';
    document.getElementById('testimonial').value = '';
}

// Function to display the testimonials
function displayTestimonials() {
    // Get the container for the testimonials
    var testimonialList = document.getElementById('testimonialList');

    // Clear the container
    testimonialList.innerHTML = '';

    // Loop through the testimonials
    for (var i = 0; i < testimonials.length; i++) {
        // Create a new testimonial element
        var testimonialElement = document.createElement('div');
        testimonialElement.classList.add('col');

        // Create the inner testimonial div
        var testimonialDiv = document.createElement('div');
        testimonialDiv.classList.add('testimonial');

        // Create and append the img element
        var imgElement = document.createElement('img');
        imgElement.src = testimonials[i].photo;
        testimonialDiv.appendChild(imgElement);

        // Create and append the name element
        var nameElement = document.createElement('div');
        nameElement.classList.add('name');
        nameElement.textContent = testimonials[i].name;
        testimonialDiv.appendChild(nameElement);

        // Create and append the job title element
        var jobTitleElement = document.createElement('div');
        jobTitleElement.classList.add('jobTitle');
        jobTitleElement.textContent = testimonials[i].jobTitle;
        testimonialDiv.appendChild(jobTitleElement);

        // Create and append the stars element
        var starsElement = document.createElement('div');
        starsElement.classList.add('stars');
        starsElement.innerHTML = '<i class="fa fa-star"></i>'.repeat(5); // Add 5 stars
        testimonialDiv.appendChild(starsElement);

        // Create and append the testimonial text element
        var textElement = document.createElement('p');
        textElement.textContent = testimonials[i].testimonial;
        testimonialDiv.appendChild(textElement);

        // Append the testimonial div to the testimonial element
        testimonialElement.appendChild(testimonialDiv);

        // Append the testimonial element to the testimonial list
        testimonialList.appendChild(testimonialElement);
    }
}



document.addEventListener('DOMContentLoaded', () => {
    const clickedItems = {
        A: false,
        B: false,
        C: false,
    };
    const clickedTabs = {
        A: true,
        B: false,
        C: false,
        D: false,
    };

    const clickHandler = (item) => {
        clickedItems[item] = !clickedItems[item];
        document.getElementById(`btn${item}`).classList.toggle('clicked');
        setTimeout(() => {
            clickedItems[item] = false;
            document.getElementById(`btn${item}`).classList.remove('clicked');
        }, 300);
    };

    const handleClick = (tab) => {
        for (let key in clickedTabs) {
            clickedTabs[key] = false;
            document.getElementById(`tab${key}`).classList.remove('tab-clicked');
        }
        clickedTabs[tab] = true;
        document.getElementById(`tab${tab}`).classList.add('tab-clicked');
        loadContent(tab);
    };

    const loadContent = (tab) => {
        const content = document.getElementById('content');
        content.innerHTML = `<p>Content for ${tab}</p>`;
    };

    // Initialize default tab
    handleClick('A');
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simulate email sending
        setTimeout(() => {
            successMessage.style.display = 'flex';
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 3000);
        }, 1000);
    });
});
