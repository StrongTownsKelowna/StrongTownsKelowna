document.addEventListener('DOMContentLoaded', () => {
	heroScroll()
	aboutLift()
})
function aboutLift() {
	// Set up IntersectionObserver to detect when each container is in view and centered
	document.addEventListener('scroll', () => {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting && isCenteredInViewport(entry)) {
					entry.target.classList.remove('h-scroll-picture-half')
					entry.target.classList.add('h-scroll-picture-full')
				} else {
					entry.target.classList.remove('h-scroll-picture-full')
					entry.target.classList.add('h-scroll-picture-half')
				}
			});
		}, { threshold: 0.5 }); // Adjust threshold if needed
		const els = document.querySelectorAll('[h-scroll-role="picture"]')
		els.forEach(el => observer.observe(el))
	})
}
function heroScroll() {
	const scrollFactor = 3.75
	const el = document.querySelector('[h-scroll-role="text"]')
	document.addEventListener('scroll', () => {
		if (isElementPartiallyInViewport(el)) {
			el.scrollLeft = window.scrollY * scrollFactor
		}
	})
}
function isCenteredInViewport(element) {
	const rect = element.boundingClientRect;
	const viewportHeight = window.innerHeight;
	const elementCenter = rect.top + rect.height / 2;
	const viewportCenter = viewportHeight / 2;
	return Math.abs(elementCenter - viewportCenter) < 200;
}
function getOffsetTop(el) {
	const rect = el.getBoundingClientRect();
	return rect.top - window.scrollY
}
function isElementPartiallyInViewport(el) {
	const rect = el.getBoundingClientRect();
	return (
		rect.top < window.innerHeight &&
		rect.bottom > 0 &&
		rect.left < window.innerWidth &&
		rect.right > 0
	);
}

function isElementInViewport(el) {
	const rect = el.getBoundingClientRect();
	return (
		rect.top <= window.innerHeight &&
		rect.bottom >= 0 &&
		rect.left <= window.innerWidth &&
		rect.right >= 0
	);
}
