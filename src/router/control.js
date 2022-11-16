import router from ".";

router.beforeEach((to, from, next) => {
	document.title = to.meta.title;
	next()
})