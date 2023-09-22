import Home from '../pages/Home/Home';
import MainLayout from '../layouts/MainLayout';
import RecipePage from '../pages/RecipePage/RecipePage';

export const HOME_PATH = '/';
export const RECIPE_PAGE_PATH = `${HOME_PATH}post/categoryId`;

export const mainLayoutRoutes = {
  Layout: MainLayout,
  routes: [
    {
      path: HOME_PATH,
      Component: Home,
    },
    { path: RECIPE_PAGE_PATH, Component: RecipePage },
  ],
};
