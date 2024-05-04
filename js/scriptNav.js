
   
    document.addEventListener('DOMContentLoaded', function() {
        var more = document.querySelector('.more > a');
        var dropdown = document.querySelector('.more .dropdown-content');
        var navbar = document.querySelector('.navbar');
        var navsection = document.querySelector('.navsection');
        var bodyContent = document.querySelector('.body-content');
        navsection.style.background = 'linear-gradient(180deg, rgba(153,134,95,1) 0%, rgba(255,224,158,1) 50%)';
        navbar.style.background = 'linear-gradient(180deg, rgba(153,134,95,1) 0%, rgba(255,224,158,1) 50%)';
        var height
        dropdown.style.display = 'none';
        
        function closeDropdown() {
            dropdown.style.display = 'none';
            navbar.style.background = 'linear-gradient(180deg, rgba(153,134,95,1) 0%, rgba(255,224,158,1) 50%)';
            navsection.style.background = 'linear-gradient(180deg, rgba(153,134,95,1) 0%, rgba(255,224,158,1) 50%)';
            bodyContent.style.paddingTop = 0;
        }
    
        more.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            event.stopPropagation(); // Stop click from immediately propagating to document level
    
            if (dropdown.style.display === 'flex') {
                closeDropdown();
            } else {
                dropdown.style.display = 'flex';
                navbar.style.background = 'linear-gradient(180deg, rgba(153,134,95,1) 100%, rgba(255,224,158,1) 15%)';
                navsection.style.background = 'linear-gradient(180deg, rgba(153,134,95,1) 100%, rgba(255,224,158,1) 15%)';
                const height = navbar.offsetHeight; 
                bodyContent.style.paddingTop = `${height}px`;
            }
        });
    
        document.body.addEventListener('click', function () {
            closeDropdown(); 
        });
    });
    