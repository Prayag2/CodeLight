var input = document.querySelectorAll('input, textarea');
for (var i = 0; i < input.length; i++) {
  input[i].addEventListener('blur', function () {
    if (this.value.length < 1) {
      this.classList.remove('hasvalue');
    } else {
      this.classList.add('hasvalue');
    }
  });
}

// navbar

var ham = document.querySelector('.nav-menu');
var backdrop = document.querySelector('.sidenav-backdrop');
var sidenav = document.querySelector('.sidenav');
ham.addEventListener('click', function () {
  backdrop.style.display = "block";
  sidenav.style.left = "0";
});
backdrop.addEventListener('click', function () {
  backdrop.style.display = "none";
  sidenav.style.left = "-100%";
});