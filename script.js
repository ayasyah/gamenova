
// GAMENOVA SEARCH FUNCTION

const searchButton = document.querySelector(".search-btn");

searchButton.addEventListener("click", function () {
    const keyword = prompt("Cari game di GameNova:");

    if (keyword === null) return;

    const cards = document.querySelectorAll(
        ".news-card, .game-box"
    );

    const searchWord = keyword.trim().toLowerCase();

    if (searchWord === "") {
        cards.forEach(card => {
            card.style.display = "";
        });
        return;
    }

    let found = false;

    cards.forEach(card => {
        const text = card.textContent.toLowerCase();

        if (text.includes(searchWord)) {
            card.style.display = "";
            found = true;
        } else {
            card.style.display = "none";
        }
    });

    if (!found) {
        alert("Maaf, tiada hasil dijumpai!");
    }
});


// HAMBURGER MENU

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});


// CLOSE MENU AFTER CLICKING A LINK

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});