document.addEventListener('DOMContentLoaded', function () {
  var video = document.querySelector('video'); // Change to querySelector
  video.play();
});

function toggleMenu() {
  var navList = document.querySelector('.nav-list');
  navList.classList.toggle('active');
}



//greetings
document.addEventListener('DOMContentLoaded', function () {
  // Get the current hour
  var currentHour = new Date().getHours();
  var greetingMessage = document.getElementById('greeting-message');

  if (currentHour < 12) {
      greetingMessage.textContent = 'Good morning!';
  } else if (currentHour < 18) {
      greetingMessage.textContent = 'Good afternoon!';
  } else {
      greetingMessage.textContent = 'Good evening!';
  }
});



//full page tab
document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.nav-list a');
  const sections = document.querySelectorAll('.section');

  function showSection(sectionId) {
      sections.forEach(section => {
          section.classList.remove('active');
      });

      const sectionToShow = document.getElementById(sectionId);
      if (sectionToShow) {
          sectionToShow.classList.add('active');
      }
  }


  function handleTabClick(event) {
    event.preventDefault();

    const clickedTab = event.target;
    const sectionId = clickedTab.getAttribute('href').substring(1);

    showSection(sectionId);

    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    clickedTab.classList.add('active');
}

tabs.forEach(tab => {
    tab.addEventListener('click', handleTabClick);
});

// Initial setup based on the URL hash
const initialSectionId = window.location.hash.substring(1);
const initialTab = document.querySelector(`.nav-list a[href="#${initialSectionId}"]`);

if (initialTab) {
    showSection(initialSectionId);
    initialTab.classList.add('active');
}
});




//certificates
document.addEventListener('DOMContentLoaded', function () {
    const certificatesSection = document.getElementById('certificates');
    const navMenu = document.querySelector('.nav-menu');
    const certificateImages = certificatesSection.querySelector('.certificate-images');
  
    certificatesSection.addEventListener('click', function () {
      certificatesSection.classList.toggle('active');
    });
  });
  


  //education details
  function openTab(tabName) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.style.display = 'none';
    });

    // Show the selected tab content
    document.getElementById(tabName).style.display = 'block';
}



  //recruiters form
  function submitForm() {
    var companyName = document.getElementById("companyName").value;
    var contactDetails = document.getElementById("contactDetails").value;
    var description = document.getElementById("description").value;

    if (companyName === "" || contactDetails === "" || description === "") {
      alert("Please fill all the fields in the form.");
    } else {
      // Clear the form
      document.getElementById("recruiterForm").reset();

      // Display success message
      alert("Your response has been successfully entered.");
    }
  }