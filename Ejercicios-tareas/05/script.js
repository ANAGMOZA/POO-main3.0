document.querySelector('.login').addEventListener('click', function () {
    this.textContent = this.textContent === 'Login' ? 'Logout' : 'Login';
});

document.querySelector('.add').addEventListener('click', function () {
    this.style.display = 'none';
});

document.querySelectorAll('.like').forEach(button => {
    button.addEventListener('click', function () {
        alert('Ninja was liked'); 
    });
});