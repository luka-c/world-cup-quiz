import { Routes } from "@angular/router";
import { Home } from "./features/home/home";
import { AppRoutes } from "./shared/utils/routes";
import { QuizList } from "./features/quiz-list/quiz-list";
import { QuizDetails } from "./features/quiz-details/quiz-details";
import { Leaderboard } from "./features/leaderboard/leaderboard";
import { CookiePolicy } from "./features/cookie-policy/cookie-policy";
import { PrivacyPolicy } from "./features/privacy-policy/privacy-policy";
import { Constants } from "./shared/utils/constants";

export const routes: Routes = [
	{
		path: AppRoutes.home.path,
		component: Home,
		title: Constants.appName,
	},
	{
		path: AppRoutes.quizList.path,
		component: QuizList,
		title: `${Constants.appName} - ${AppRoutes.quizList.title}`,
	},
	{
		path: AppRoutes.quizDetails.path,
		component: QuizDetails,
	},
	{
		path: AppRoutes.leaderboard.path,
		component: Leaderboard,
		title: `${Constants.appName} - ${AppRoutes.leaderboard.title}`,
	},
	{
		path: AppRoutes.cookiePolicy.path,
		component: CookiePolicy,
		title: `${Constants.appName} - ${AppRoutes.cookiePolicy.title}`,
	},
	{
		path: AppRoutes.privacyPolicy.path,
		component: PrivacyPolicy,
		title: `${Constants.appName} - ${AppRoutes.privacyPolicy.title}`,
	},
	{
		path: "**",
		redirectTo: AppRoutes.home.path,
	},
];
