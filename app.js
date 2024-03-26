document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');


    if (username === 'aldi@gmail.com' && password === '233307062') {
       
        window.location.href = 'order.html';
    } else {
      
        errorMessage.innerText = 'Email or password is incorrect.';
        errorMessage.classList.add('active');
    }
});

