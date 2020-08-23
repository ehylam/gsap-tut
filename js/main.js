gsap.registerPlugin(ScrollTrigger);

function initHeaderTilt() {
	document.querySelector('header').addEventListener('mousemove', moveImages);
}

function moveImages(e) {
	console.log(e);

	const { offsetX, offsetY, target } = e;
	const { clientWidth, clientHeight } = target;

	console.log(offsetX, offsetY, clientWidth, clientHeight);
	const xPos = offsetX / clientWidth - 0.5;
	const yPos = offsetY / clientHeight - 0.5;

	const leftImages = gsap.utils.toArray('.hg__left .hg__image');
	const rightImages = gsap.utils.toArray('.hg__right .hg__image');

	const modifer = index => index * 1.2 + 0.5;

	console.log(leftImages);

	leftImages.forEach((image, index) => {
		gsap.to(image, {
			duration: 1.2,
			x: xPos * 30 * modifer(index),
			y: yPos * 40 * modifer(index),
			rotationY: xPos * 40,
			rotationX: yPos * 10
		});
	});

	rightImages.forEach((image, index) => {
		gsap.to(image, {
			duration: 1.2,
			x: xPos * 30 * modifer(index),
			y: yPos * 40 * modifer(index),
			rotationY: xPos * 40,
			rotationX: yPos * 10
		});
	});
}

function init() {
	// start here
	initHeaderTilt();
}

window.addEventListener('load', function() {
	init();
});
