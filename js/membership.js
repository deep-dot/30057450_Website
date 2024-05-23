
const membershipsData = [
{
    "name": "Federation University Ballarat",
    "description": "Currently pursuing a Bachelor's Degree in Information Technology, focusing on software development and data structures.",
    "website": "https://federation.edu.au/",
     "logo": "https://federation.edu.au/__data/assets/image/0011/466859/FED_colour_logo_large.png"
},

  {
      "name": "Freelance Platform Deedeveloper.com",
      "description": "A platform providing design, development, and consulting services to those in need within the IT industry.",
      "website": "http://deedeveloper.com",
      "logo": "../images/logo.png"
  },

    {
        "name": "Professional Software Developers Association",
        "description": "An organization dedicated to advancing the skills of software developers through conferences, workshops, and resources.",
        "website": "https://www.psda.org",
        "logo": "../images/PSDA.png"
    },
    {
        "name": "Web Designers Forum",
        "description": "A community for web designers and developers to share knowledge, trends, tools, and best practices.",
        "website": "https://www.webdesignforum.com",
        "logo": "../images/webDesignForum.png"
    }
];
function renderMemberships() {
    const container = document.getElementById('memberships-container');
    membershipsData.forEach(item => {
        const section = document.createElement('div');
        section.className = 'membership';
        section.innerHTML = `
            <img src="${item.logo}" alt="Organization Logo">
            <div>
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <a href="${item.website}">Visit Website</a>
            </div>
        `;
        container.appendChild(section);
    });
}
document.addEventListener('DOMContentLoaded', renderMemberships);