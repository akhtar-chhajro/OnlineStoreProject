// Simple alert on form submit
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you for contacting Gracious Garments! We'll get back to you soon.");
  this.reset();
});