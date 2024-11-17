document.addEventListener('DOMContentLoaded', () => {
	const SCRUB_SPEED = 1
	const DEBUG = false

	//const ABOUT_TITLE_SELECTOR = '[about="title"]'
	const ABOUT_ITEM_SELECTOR = '[about="item"]'
	const ABOUT_SECTION_SELECTOR = '[about="section"]'
	const ABOUT_LIST_SELECTOR = '[about="list"]'
	const HERO_LIST_SELECTOR = '[hero="list"]'
	const HERO_ITEM_SELECTOR = '[hero="item"]'
	const ARTICLE_SECTION_SELECTOR = '[article="section"]'
	const ARTICLE_ITEM_SELECTOR = '[article="item"]'


	let scrolling_enabled = false
	let hero_to_x = 0
	let hero_start = () => { }
	let hero_end = ""
	//let about_title_start = ""
	let about_start = ""
	let about_from_x = 0
	let about_to_x = 0
	let article_start = ""
	let article_end = ""
	let article_from_x = 0
	let article_to_x = 0

	gsap.registerPlugin(ScrollTrigger)

	if (window.innerWidth >= 1536) {
		scrolling_enabled = true
		hero_to_x = -4500
		hero_start = () => "bottom bottom"
		hero_end = "top 100px"
		//about_title_start = 'center 5%'
		about_start = 'center center'
		article_start = 'center center'
		article_end = 'bottom 25%'
		about_from_x = 1500
		about_to_x = -1020
		article_from_x = 1000
		article_to_x = 20
	}
	else if (window.innerWidth >= 1280) {
		scrolling_enabled = true
		hero_to_x = -3000
		hero_start = () => "bottom bottom"
		hero_end = "top 100px"
		//about_title_start = 'center 5%'
		about_start = 'center center'
		article_start = 'center center'
		article_end = 'bottom 25%'
		about_from_x = 1010
		about_to_x = -1500
		article_from_x = 1000
		article_to_x = 20
	}
	else if (window.innerWidth >= 1024) {
		scrolling_enabled = true
		hero_to_x = -2000
		hero_start = () => {
			const el = document.querySelector(HERO_LIST_SELECTOR)
			return "top " + window.scrollY + el.getBoundingClientRect().top
		}
		hero_end = "top 100px"
		//about_title_start = 'center 5%'
		about_start = 'center center'
		article_start = 'center center'
		article_end = 'bottom 25%'
		about_from_x = 600
		about_to_x = -1700
		article_from_x = 1000
		article_to_x = 20
	}
	else if (window.innerWidth >= 768) {
		hero_to_x = -1500
		hero_start = () => {
			const el = document.querySelector(HERO_LIST_SELECTOR)
			return "top " + window.scrollY + el.getBoundingClientRect().top
		}
		hero_end = "top 100px"
	}
	else if (window.innerWidth >= 375) {
		hero_to_x = -1800
		hero_start = () => {
			const el = document.querySelector(HERO_LIST_SELECTOR)
			return "top " + window.scrollY + el.getBoundingClientRect().top
		}
		hero_end = "top 100px"
	}
	const heroTl = gsap.timeline({
		scrollTrigger: {
			trigger: HERO_LIST_SELECTOR,
			start: hero_start,
			end: hero_end,
			scrub: SCRUB_SPEED,
			markers: DEBUG,
		}
	})
	heroTl.to(
		HERO_ITEM_SELECTOR,
		{
			x: hero_to_x,
		},
	)

	if (scrolling_enabled) {

		//const aboutTitleTl = gsap.timeline({
		//	scrollTrigger: {
		//		trigger: ABOUT_TITLE_SELECTOR,
		//		start: about_title_start,
		//		scrub: SCRUB_SPEED,
		//		markers: DEBUG,
		//	}
		//})
		//
		//aboutTitleTl.fromTo(
		//	ABOUT_TITLE_SELECTOR,
		//	{
		//		opacity: 1
		//	},
		//	{
		//		opacity: 0
		//	}
		//)

		const aboutTl = gsap.timeline({
			scrollTrigger: {
				trigger: ABOUT_LIST_SELECTOR,
				start: about_start,
				scrub: SCRUB_SPEED,
				pin: ABOUT_SECTION_SELECTOR,
				markers: DEBUG,
			}
		})
		aboutTl.fromTo(
			ABOUT_ITEM_SELECTOR,
			{
				x: about_from_x
			},
			{
				x: about_to_x,
			}
		)

		const articleTl = gsap.timeline({
			scrollTrigger: {
				trigger: ARTICLE_SECTION_SELECTOR,
				start: article_start,
				end: article_end,
				scrub: SCRUB_SPEED,
				pin: true,
				markers: DEBUG,
			}
		})
		articleTl.fromTo(
			ARTICLE_ITEM_SELECTOR,
			{
				x: article_from_x,
				opacity: 0,
			},
			{
				x: article_to_x,
				opacity: 1,
				stagger: 0.5
			}
		)
	}
})
