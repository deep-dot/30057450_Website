
   
    // document.addEventListener('DOMContentLoaded', function() {
    //     var more = document.querySelector('.more > a');
    //     var navbar = document.querySelector('.navbar');
    //     let isDropdownOpen = true; // Track dropdown open state
    //     navbar.style.background = 'linear-gradient(180deg, rgba(153,134,95,1) 0%, rgba(255,224,158,1) 50%)';
    
    //     more.addEventListener('click', function(event) {
    //         event.preventDefault(); // Prevent default link behavior
    //         var dropdown = this.nextElementSibling;

    //         if (isDropdownOpen && dropdown.style.display === 'flex') {
    //             dropdown.style.display = 'none';
    //             isDropdownOpen = false;
    //             // https://cssgradient.io/
    //             navbar.style.background = 'linear-gradient(180deg, rgba(153,134,95,1) 0%, rgba(255,224,158,1) 50%)';
    //         } else {
    //             dropdown.style.display = 'flex';
    //             isDropdownOpen = true;
    //             navbar.style.background = 'linear-gradient(180deg, rgba(153,134,95,1) 100%, rgba(255,224,158,1) 15%)';
    //         }
    //         //dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex'; // Toggle display
    //     });
    //     document.body.addEventListener('click', function () {
    //         if (!isDropdownOpen) {
    //             dropdown.style.display = 'none';
    //             isDropdownOpen = false;
    //         }
    //     });
    // });

    document.addEventListener('DOMContentLoaded', function() {
        var more = document.querySelector('.more > a');
        var dropdown = document.querySelector('.more .dropdown-content');
        var navbar = document.querySelector('.navbar');
        navbar.style.background = 'linear-gradient(180deg, rgba(153,134,95,1) 0%, rgba(255,224,158,1) 50%)';
    
        dropdown.style.display = 'none';
        // Function to close dropdown and reset styles
        function closeDropdown() {
            dropdown.style.display = 'none';
            navbar.style.background = 'linear-gradient(180deg, rgba(153,134,95,1) 0%, rgba(255,224,158,1) 50%)';
        }
    
        more.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            event.stopPropagation(); // Stop click from immediately propagating to document level
    
            if (dropdown.style.display === 'flex') {
                closeDropdown();
            } else {
                dropdown.style.display = 'flex';
                navbar.style.background = 'linear-gradient(180deg, rgba(153,134,95,1) 100%, rgba(255,224,158,1) 15%)';
            }
        });
    
        document.body.addEventListener('click', function () {
            closeDropdown(); // Close dropdown when clicking anywhere in the body
        });
    });
    