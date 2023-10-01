const cardImages = document.querySelectorAll(".card-image-container .card-img");
const cardContent = document.querySelectorAll(
	".card-content-container .card-content"
);
const topicIcon = document.querySelectorAll(".card-content .icon-wrapper");

function selectedIcon(topicNum) {
	topicIcon.forEach((icon) => {
		icon.classList.add("icon-circle-o");
		icon.classList.remove("icon-circle");
		const cardTopic = icon.parentElement.getAttribute("card-topic");
		if (cardTopic === topicNum) {
			icon.classList.remove("icon-circle-o");
			icon.classList.add("icon-circle");
		}
	});
}

function showFirstTopic() {
	//icon
	topicIcon.forEach((icon, idx) => {
		icon.classList.add("icon-circle-o");
		icon.classList.remove("icon-circle");
		if (idx === 0) {
			icon.classList.remove("icon-circle-o");
			icon.classList.add("icon-circle");
		}
	});
	// image
	cardImages.forEach((cardImage, idx) => {
		if (idx !== 0) {
			cardImage.style.display = "none";
		}
	});
}

showFirstTopic();

function showCardImage(topicNum) {
	cardImages.forEach((cardImage) => {
		cardImage.style.display = "none";
	});

	const image = document.querySelector(`.card-img[card-topic="${topicNum}"]`);
	if (image) {
		image.style.display = "block";
	}
}

function selectedTopic() {
	cardContent.forEach((card) => {
		const button = card.querySelector(".icon-wrapper");
		button.addEventListener("click", (e) => {
			// holds topic #
			const parentElement = e.target.closest(".card-content");
			const topicNum = parentElement.getAttribute("card-topic");
			if (topicNum) {
				selectedIcon(topicNum);
				showCardImage(topicNum);
			}
		});
	});
}

selectedTopic();
