// jQuery
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
    
   this.style.color = 'red';
});

$('h1.text-white')
.click(function(event) {
   this.style.background = 'red';
});

// Vanilla
function myFunction() {
    var x = document.getElementById("testandrei");
    x.style.background = 'red';
}

[].forEach.call(document.querySelectorAll('h1.text-white.display-1'), function(el) {
    el.addEventListener('click', function() {
      this.style.background = 'red';
    })
});
