import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "@/layout/AppLayout.vue";
import { getAccessToken } from "@/composables/useLocalStorage";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/manage",
			component: AppLayout,
			meta: {
				requiresAuth: true
			},
			children: [
				{
					path: "/dashboard",
					name: "dashboard",
					component: () => import("@/views/dashboard/Dashboard.vue")
				}
				// {
				// 	path: "/live/:id",
				// 	name: "live-detail",
				// 	meta: {
				// 		breadcrumb: ["Live stream"]
				// 	},
				// 	component: () => import("@/views/live/Detail.vue")
				// }
			]
		},
		{
			path: "/login",
			name: "login",
			component: () => import("@/views/auth/Login.vue")
		},
		{
			path: "/",
			name: "landing page",
			component: () => import("@/views/landing/LandingPage.vue")
		},
		{
			path: "/home",
			name: "home not auth",
			component: () => import("@/views/layoutNotAuth/HomeNotAuth.vue")
		},
		{
			path: "/detail/:id",
			name: "detail not auth",
			component: () => import("@/views/layoutNotAuth/DetailNotAuth.vue")
		},
		{
			path: "/list-pending",
			name: "list-pending",
			component: () => import("@/views/layoutNotAuth/ListPending.vue")
		},
		{
			path: "/list-accept",
			name: "list-accept",
			component: () => import("@/views/layoutNotAuth/ListAccept.vue")
		},
		{
			path: "/list-reject",
			name: "list-reject",
			component: () => import("@/views/layoutNotAuth/ListReject.vue")
		}
	]
});

console.log("router init");
const isLogin = getAccessToken();

router.beforeEach((to, from, next) => {
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (!isLogin) {
			next({ name: "login" });
		} else {
			next();
		}
	} else {
		console.info(from, "from");
		next();
	}
});

export default router;
