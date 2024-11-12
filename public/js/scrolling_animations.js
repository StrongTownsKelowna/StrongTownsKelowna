const scrollFactor = 3.75
document.addEventListener('DOMContentLoaded', () => {
	const lists = document.querySelectorAll('[h-scroll-role="list"]')
	document.addEventListener('scroll', () => {
		lists.forEach((el) => {
			if (isElementPartiallyInViewport(el)) {
				el.scrollLeft = window.scrollY * scrollFactor
			}
		})
	})
})
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
