// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', body.dataset.theme);
    updateThemeIcon();
});

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    icon.className = body.dataset.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
body.dataset.theme = savedTheme;
updateThemeIcon();

// Typewriter Effect
const typewriterText = document.getElementById('typewriter-text');
const phrases = [
    'Computer Science Student',
    'Software Developer',
    'Problem Solver',
    'Tech Enthusiast'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typewriterText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeWriter, 2000);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    const typingSpeed = isDeleting ? 100 : 200;
    setTimeout(typeWriter, typingSpeed);
}

typeWriter();

// Terminal Animation
function startTerminalAnimation() {
    const commands = [
        { text: "npm start", delay: 1000 },
        { text: "git status", delay: 3000 },
        { text: "ls -la", delay: 5500 },
        { text: "echo 'Welcome to my portfolio!'", delay: 8000 }
    ];

    let currentCommand = 0;

    function typeCommand(commandText, elementId, cursorId, outputId, nextLineId) {
        return new Promise((resolve) => {
            const commandElement = document.getElementById(elementId);
            const cursorElement = cursorId.startsWith('.') ? 
                document.querySelector(cursorId) : 
                document.getElementById(cursorId);
            let charIndex = 0;

            const typingInterval = setInterval(() => {
                if (charIndex < commandText.length) {
                    commandElement.textContent = commandText.substring(0, charIndex + 1);
                    charIndex++;
                } else {
                    clearInterval(typingInterval);
                    
                    // Hide cursor for this line (except for the final one)
                    if (!cursorId.includes('final-cursor')) {
                        cursorElement.style.display = 'none';
                    }
                    
                    // Show output after a short delay
                    setTimeout(() => {
                        if (outputId) {
                            document.getElementById(outputId).style.display = 'block';
                        }
                        
                        // Show next command line after another delay
                        setTimeout(() => {
                            if (nextLineId) {
                                document.getElementById(nextLineId).style.display = 'block';
                            }
                            resolve();
                        }, 800);
                    }, 400);
                }
            }, 80 + Math.random() * 40); // Slightly random typing speed
        });
    }

    // Start the sequence
    setTimeout(async () => {
        await typeCommand(commands[0].text, 'command1', 'cursor1', 'output1', 'line2');
        await typeCommand(commands[1].text, 'command2', 'cursor2', 'output2', 'line3');
        await typeCommand(commands[2].text, 'command3', 'cursor3', 'output3', 'line4');
        await typeCommand(commands[3].text, 'command4', '.final-cursor', null, null);
    }, 1500);
}

// Start terminal animation when page loads
window.addEventListener('load', () => {
    setTimeout(startTerminalAnimation, 2000);
});

// Smooth Scrolling
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// Project Filters
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.dataset.filter;
        
        projectCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Contact Form
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    try {
        // Replace with your actual form submission endpoint
        const response = await fetch('https://formspree.io/f/mjkgqqkq', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert('Message sent successfully!');
            contactForm.reset();
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        alert('Error sending message. Please try again.');
        console.error('Error:', error);
    }
});

// Mobile Menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const mobileOverlay = document.getElementById('mobileOverlay');
const navLinkItems = document.querySelectorAll('.nav-links a');

// Toggle mobile menu
function toggleMobileMenu() {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Close mobile menu
function closeMobileMenu() {
    navLinks.classList.remove('active');
    mobileMenuBtn.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Event listeners
mobileMenuBtn.addEventListener('click', toggleMobileMenu);
mobileOverlay.addEventListener('click', closeMobileMenu);

// Close menu when clicking on nav links
navLinkItems.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Close menu on window resize if open
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
        closeMobileMenu();
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const isDark = document.body.dataset.theme === 'dark';
    
    if (window.scrollY > 100) {
        navbar.style.background = isDark ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'var(--bg-primary)';
        navbar.style.backdropFilter = 'none';
    }
});

// Active section highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// // Scroll to Top Button
// const scrollTopBtn = document.createElement('button');
// scrollTopBtn.innerHTML = '↑';
// scrollTopBtn.className = 'scroll-top-btn';
// document.body.appendChild(scrollTopBtn);

// window.addEventListener('scroll', () => {
//     if (window.pageYOffset > 300) {
//         scrollTopBtn.classList.add('show');
//     } else {
//         scrollTopBtn.classList.remove('show');
//     }
// });

// scrollTopBtn.addEventListener('click', () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// });

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
}); 