// Moon icon element select karna
const themeToggleBtn = document.querySelector('.theme-icon');

themeToggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // Body par light-theme class toggle karna
    document.body.classList.toggle('light-theme');
    
    // Icon change (Moon se Sun aur Sun se Moon)
    const icon = themeToggleBtn.querySelector('i');
    if (document.body.classList.contains('light-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});
la

/* ==========================================
   DYNAMIC BACKGROUND STARS GENERATOR
========================================== */
const starsContainer = document.querySelector(".stars") || document.querySelector(".hero");

if (starsContainer) {
    const starCount = 100;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("span");
        star.className = "dynamic-star";

        // Random position and sizes
        const size = Math.random() * 2.5 + 1; // 1px - 3.5px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random blinking timings
        star.style.animationDelay = `${Math.random() * 5}s`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;

        fragment.appendChild(star);
    }

    starsContainer.appendChild(fragment);
}