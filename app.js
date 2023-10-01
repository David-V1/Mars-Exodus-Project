const cardImages = document.querySelectorAll(".card-image-container .card-img");
const cardContent = document.querySelectorAll(
	".card-content-container .card-content"
);

function showFirstTopic() {
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
				showCardImage(topicNum);
			}
		});
	});
}

selectedTopic();
