// ACCORDIAN FAQ

const accordianItemHeaders = document.querySelectorAll(
	".accordian-item-header"
);

accordianItemHeaders.forEach((accordianItemHeader) => {
	accordianItemHeader.addEventListener("click", () => {
		const current = document.querySelector(".accordian-item-header.active");

		if (current && current !== accordianItemHeader) {
			current.classList.toggle("active");
			current.nextElementSibling.style.maxHeight = 0;
		}
		accordianItemHeader.classList.toggle("active");

		const accordianItemBody = accordianItemHeader.nextElementSibling;

		if (accordianItemHeader.classList.contains("active")) {
			accordianItemBody.style.maxHeight =
				accordianItemBody.scrollHeight + "px";
		} else {
			accordianItemBody.style.maxHeight = 0;
		}
	});
});

//   scroll magic on background video
const hero = document.querySelector(".hero");
const video = hero.querySelector(".scroll-video");
const heroText = hero.querySelector(".scroll-text");
const herowWrapper = hero.querySelector(".hero-wrapper");

const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
	duration: 5000,
	triggerElement: hero,
	triggerHook: 0,
})
	.setPin(hero)
	.addTo(controller);

const heroTextAnimation = TweenMax.fromTo(
	heroText,
	3,
	{opacity: 1, scale: 1},
	{opacity: 0, scale: 2}
);
let scene2 = new ScrollMagic.Scene({
	duration: 5000,
	triggerElement: hero,
	triggerHook: 0,
})

	.setTween(heroTextAnimation)
	.addTo(controller);
