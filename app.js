const cardImages = document.querySelectorAll(".card-image-container .card-img");
const cardContents = document.querySelectorAll(".card-content-container .card-content");
const mobileCarouselContainer = document.querySelector("#mobile_carousel-container");
const bulletPointsContainer = document.querySelector(".bullet-points-btns-container");

function generateBulletPointsButtons(container) {
	if (cardContents.length === cardImages.length) {
		for (let i = 0; i < cardContents.length; i++) {
			const bulletPointButton = document.createElement("button");
			const bulletPointDiv = document.createElement("div");

			bulletPointButton.classList.add("bullet-point", "topic-btn");
			bulletPointButton.setAttribute("card-topic", i + 1);
			bulletPointDiv.classList.add("icon-wrapper", "icon-circle-o");
			bulletPointButton.appendChild(bulletPointDiv);
			container.appendChild(bulletPointButton);
		}
	} else {
		console.error("Something went wrong. cardContents.length !== cardImages.length");
	}
}
generateBulletPointsButtons(bulletPointsContainer);

function selectedIcon(topicNum) {
	const topicIcon = document.querySelectorAll(".icon-wrapper");
	topicIcon.forEach((icon) => {
		console.log("icon", icon);
		icon.classList.add("icon-circle-o");
		icon.classList.remove("icon-circle");
		const cardTopic = icon.parentElement.getAttribute("card-topic");
		if (cardTopic === topicNum) {
			icon.classList.remove("icon-circle-o");
			icon.classList.add("icon-circle");
		}
	});
}
selectedTopic();

function showFirstTopic() {
	//icon
	const topicIcon = document.querySelectorAll(".icon-wrapper");
	topicIcon.forEach((icon, idx) => {
		icon.classList.toggle("icon-circle", idx === 0);
		icon.classList.toggle("icon-circle-o", idx !== 0);
	});
	// A helper function to toggle display based on index
	const toggleDisplay = (elements) => {
		elements.forEach((element, idx) => {
			element.style.display = idx === 0 ? "" : "none";
		});
	};
	toggleDisplay(cardImages);
	toggleDisplay(cardContents);
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

function showCardImageContent(topicNum) {
	cardContents.forEach((card) => {
		card.style.display = "none";
	});
	const imageContent = document.querySelector(`.card-content[card-topic="${topicNum}"]`);
	if (imageContent) {
		imageContent.style.display = "block";
	}
}

function selectedTopic() {
	const bulletPoints = document.querySelectorAll(".bullet-point");
	bulletPoints.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			const topicNum = btn.getAttribute("card-topic");
			if (topicNum) {
				selectedIcon(topicNum);
				showCardImage(topicNum);
				showCardImageContent(topicNum);
			}
		});
	});
}

// selectedTopic();

function mobileCarousel() {
	console.log("mobileCarousel");
	// change div background color of mobileCarouselContainer
	// icon.classList.add("icon-circle-o"); to mobileCarouselContainer
	// icon.classList.remove("icon-circle"); to mobileCarouselContainer
	// mobileCarouselContainer.classList.add("icon-circle-o");
}

// mobileCarousel();
