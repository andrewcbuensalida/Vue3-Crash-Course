import { createRouter, createWebHistory } from "vue-router";
import QuizesView from "../views/QuizesView.vue";
import QuizView from "../views/QuizView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "quizes",
			component: QuizesView,
		},
		{
			path: "/home",
			redirect: "/",
		},
		{
			path: "/quiz/:id",
			name: "quiz",
			component: QuizView,
			// could have nested routes with children
		},
		{
			path: "/:catchall(.*)*", // this is regex
			name: "notFoundView",
			component: NotFoundView, // any other path goes to this
		},
	],
});

export default router;
