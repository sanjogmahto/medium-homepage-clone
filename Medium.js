// Select all bookmark buttons
const bookmarkButtons = document.querySelectorAll(".bookmark-btn");
const readingList = document.getElementById("reading-list");

// Store saved articles
let savedArticles = [];

// Add bookmark functionality
bookmarkButtons.forEach((button) => {
    button.addEventListener("click", function () {

        // Get article title
        const articleCard = this.closest(".article-card");
        const articleTitle =
            articleCard.querySelector("h2").textContent;

        const icon = this.querySelector("i");

        // Check if article already saved
        const index = savedArticles.indexOf(articleTitle);

        if (index === -1) {
            // Save article
            savedArticles.push(articleTitle);

            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");

            this.classList.add("active");
        } else {
            // Remove article
            savedArticles.splice(index, 1);

            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");

            this.classList.remove("active");
        }

        updateReadingList();
    });
});

// Update reading list
function updateReadingList() {

    readingList.innerHTML = "";

    if (savedArticles.length === 0) {
        readingList.innerHTML =
            "<li>No saved articles yet.</li>";
        return;
    }

    savedArticles.forEach((title) => {

        const li = document.createElement("li");
        li.textContent = title;

        readingList.appendChild(li);
    });
}

// Initialize reading list
updateReadingList();


// Follow button functionality
const followButtons =
    document.querySelectorAll(".follow-user button");

followButtons.forEach((button) => {

    button.addEventListener("click", function () {

        if (this.textContent === "Follow") {

            this.textContent = "Following";
            this.style.backgroundColor = "#242424";
            this.style.color = "#ffffff";

        } else {

            this.textContent = "Follow";
            this.style.backgroundColor = "transparent";
            this.style.color = "#242424";
        }
    });
});


// Category tabs functionality
const tabs = document.querySelectorAll(".tabs span");

tabs.forEach((tab) => {

    tab.addEventListener("click", function () {

        tabs.forEach((item) => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});


// Search functionality
const searchInput =
    document.querySelector(".search-box input");

const articles =
    document.querySelectorAll(".article-card");

searchInput.addEventListener("keyup", function () {

    const searchValue =
        this.value.toLowerCase();

    articles.forEach((article) => {

        const title =
            article.querySelector("h2")
            .textContent
            .toLowerCase();

        const description =
            article.querySelector("p")
            .textContent
            .toLowerCase();

        if (
            title.includes(searchValue) ||
            description.includes(searchValue)
        ) {
            article.style.display = "flex";
        } else {
            article.style.display = "none";
        }
    });
});


// Navbar shadow on scroll
window.addEventListener("scroll", function () {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 10) {

        navbar.style.boxShadow =
            "0 2px 10px rgba(0, 0, 0, 0.1)";

    } else {

        navbar.style.boxShadow = "none";
    }
});