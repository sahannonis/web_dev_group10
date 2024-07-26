document.addEventListener("DOMContentLoaded", () => {
    const showMoreBtn = document.getElementById("show-more");
    const itemContainer = document.getElementById("item-container");
    const items = Array.from(document.querySelectorAll(".item"));
    const searchInput = document.getElementById("search-input");
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = document.querySelector(".close");
    let isShowingMore = false;

    const toggleItems = (showAll) => {
        items.forEach((item, index) => {
            if (showAll) {
                item.style.display = "flex";
            } else {
                item.style.display = index < 8 ? "flex" : "none";
            }
        });
    };

    toggleItems(false);

    showMoreBtn.addEventListener("click", () => {
        isShowingMore = !isShowingMore;
        toggleItems(isShowingMore);
        showMoreBtn.textContent = isShowingMore ? "Show less" : "Show more";
    });

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        items.forEach(item => {
            const title = item.getAttribute("data-title").toLowerCase();
            if (title.includes(query)) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        });
    });

    document.querySelectorAll(".quick-view-btn").forEach(button => {
        button.addEventListener("click", (event) => {
            const item = event.target.closest(".item");
            const imgSrc = item.querySelector("img").src;
            const title = item.getAttribute("data-title");

            modalImage.src = imgSrc;
            modalDescription.innerHTML = `<strong>${title}</strong><br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consequat bibendum eros vel cursus.`;
            modal.style.display = "block";
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
