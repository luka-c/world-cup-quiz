import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { AppRoutes } from './shared/utils/routes';
import { QuizList } from './features/quiz-list/quiz-list';
import { QuizDetails } from './features/quiz-details/quiz-details';
import { Leaderboard } from './features/leaderboard/leaderboard';
import { CookiePolicy } from './features/cookie-policy/cookie-policy';
import { PrivacyPolicy } from './features/privacy-policy/privacy-policy';

export const routes: Routes = [
  {
    path: AppRoutes.home,
    component: Home,
  },
  {
    path: AppRoutes.quizList,
    component: QuizList,
  },
  {
    path: AppRoutes.quizDetails,
    component: QuizDetails,
  },
  {
    path: AppRoutes.leaderboard,
    component: Leaderboard,
  },
  {
    path: AppRoutes.cookiePolicy,
    component: CookiePolicy,
  },
  {
    path: AppRoutes.privacyPolicy,
    component: PrivacyPolicy,
  },
];
