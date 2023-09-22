export type Route = {
  path: '/' | '/post/recipeId' | 'category/:categoryId';
  Component: () => JSX.Element;
};
