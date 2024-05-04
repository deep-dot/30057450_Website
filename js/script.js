
document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', function() {
        // Toggle the 'active' class on the nav-links
        navLinks.classList.toggle('active');
        });
    });


// // Function to adjust body content padding
// function adjustBodyPadding() {
//     const navbar = document.querySelector('.navbar');
//     var more = document.querySelector('.more > a');
//     const bodyContent = document.querySelector('.body-content');
//     const height = navbar.offsetHeight; // Get the dynamic height of the navbar

//     bodyContent.style.paddingTop = `${height}px`; // Set the top padding of the body content
// }

// // Example event that triggers the menu expansion and runs the function
// document.querySelector('.more > a').addEventListener('click', adjustBodyPadding); // Adjust as per your actual event


function adjustBodyPadding() {
    const navbar = document.querySelector('.navbar');
    const more = document.querySelector('.more > a');
    const dropdowncontent = document.querySelector('.dropdown-content')
   //const dropdown = more.nextElementSibling; // Assuming dropdown is right next to the more link
    const bodyContent = document.querySelector('.body-content');
    
    // Check if the dropdown is currently displayed
    if (dropdowncontent.style.display === 'none' || !dropdowncontent.style.display) {
        dropdowncontent.style.display = 'flex'; // Show the dropdowncontent
        const height = navbar.offsetHeight; // Get the height after expansion
        bodyContent.style.paddingTop = `${height}px`; // Adjust body padding
    } else {
        dropdowncontent.style.display = 'none'; // Hide the dropdowncontent
        bodyContent.style.paddingTop = '0px'; // Reset body padding
    }
}

// Add event listener to the 'More' link
document.querySelector('.more > a').addEventListener('click', adjustBodyPadding);
