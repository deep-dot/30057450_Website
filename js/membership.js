document.getElementById('load-more-btn').addEventListener('click', function() {
    // Get the membership section
    var membershipSection = document.querySelector('.membership-cards');
    
    // Add new memberships (example)
    var newmemberships = `
      <div class="card">
        <div class="stars">★★★★★</div>
        <p>Proin ultricies quam et lacus varius pharetra. Nulla facilisi. Praesent eu mauris nunc.</p>
        <div class="user-info">
          <img src="/images/profilepic.png" alt="User 4">
          <p>User 4</p>
        </div>
      </div>
      <div class="card">
        <div class="stars">★★★★★</div>
        <p>Suspendisse ac risus et nulla congue ullamcorper. Duis vel dui at eros vehicula finibus eu vel arcu.</p>
        <div class="user-info">
          <img src="user5.jpg" alt="User 5">
          <p>User 5</p>
        </div>
      </div>
      <div class="card">
        <div class="stars">★★★★★</div>
        <p>Etiam euismod, nisi ut blandit sollicitudin, ligula magna venenatis urna, ac ultricies est libero vitae lorem.</p>
        <div class="user-info">
          <img src="user6.jpg" alt="User 6">
          <p>User 6</p>
        </div>
      </div>
    `;
    
    // Append new memberships to the membership section
    membershipSection.innerHTML += newmemberships;
  });
  