document.getElementById('projects-btn').addEventListener('click', (e) => {
  smoothScroll(e);
});
document.getElementById('contact-btn').addEventListener('click', (e) => {
  smoothScroll(e);
});
document.getElementById('about-btn').addEventListener('click', (e) => {
  smoothScroll(e);
});

function smoothScroll(e) {
  e.preventDefault();
  const href = e.target.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
};

(function() {
  emailjs.init(secrets.USER); //please encrypted user id for malicious attacks
})();

//set the parameter as per you template parameter[https://dashboard.emailjs.com/templates]


document.getElementById('contact-form').addEventListener('submit', (e) => {  
  e.preventDefault();

  var templateParams = {
    to_name: 'Alberto Lopez',
    from_name: document.getElementById('name').value,
    message: document.getElementById('message').value,
    email: document.getElementById('email').value,
  };

  if(validateForm(templateParams)){
    debugger;
    emailjs.send(secrets.SERVICE, secrets.TEMPLATE, templateParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      console.log('FAILED...', error);
    });

    alert('Thank you very much for your message, I will contact you soon!');
  }
});

function validateForm(template){
  if(template.from_name === ''){
    alert('Please, complete the field Name');
    return false;
  }
  if(template.email === ''){
    alert('Please, complete the field email');
    return false;
  }
  if(template.message === ''){
    alert('Please, write a message');
    return false;
  }
  return true;

}

