export type tRoute = {
	path: string;
	title: string;
};

export const AppRoutes = {
	home: { path: "", title: "Početna" },
	quizList: { path: "kvizovi", title: "Kvizovi" },
	quizDetails: { path: "kviz/:id", title: "Kviz" },
	leaderboard: { path: "leaderboard", title: "Leaderboard" },
	privacyPolicy: { path: "politika-privatnosti", title: "Politika Privatnosti" },
	cookiePolicy: { path: "politika-kolacica", title: "Politika Kolačića" },
} as const satisfies Record<string, tRoute>;
