// Menu mobile
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            const mobileMenu = document.getElementById('mobile-menu');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Cursor emoji
const cursor = document.createElement("div");
cursor.id = "cursor";
cursor.textContent = "💻";
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// Troca de emoji por seção
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    let emoji = "💻"; // padrão
    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            if (sec.id === "about") emoji = "📚";
            if (sec.id === "projects") emoji = "🎨";
            if (sec.id === "contact") emoji = "📩";
        }
    });
    cursor.textContent = emoji;
});

// Efeito hover no cursor
const clickableElements = document.querySelectorAll('a, button, input, textarea, .hover-grow, .tech-icon, .project-card');
clickableElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.4)';
    });
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
    });
});
