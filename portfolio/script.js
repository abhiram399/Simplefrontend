const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
	  console.log(entry); // Ensure this logs each entry correctly
	  if (entry.isIntersecting) {
		entry.target.classList.add("show");
	  } else {
		entry.target.classList.remove("show");
	  }
	});
  });
  
  // Get elements with the class "hidden" and observe each
  const hiddenElements = document.getElementsByClassName("hidden");
  Array.from(hiddenElements).forEach((el) => observer.observe(el));
  

  const customCursor = document.getElementById('custom-cursor');
const fakeSection = document.querySelector('.fake');

fakeSection.addEventListener('mousemove', (e) => {
  customCursor.style.left = `${e.clientX}px`;
  customCursor.style.top = `${e.clientY}px`;
  customCursor.style.opacity = '1'; // Show cursor on hover
});

fakeSection.addEventListener('mouseleave', () => {
  customCursor.style.opacity = '0'; // Hide cursor when leaving
});
