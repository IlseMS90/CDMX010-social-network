import { home } from './home.js';
import { posting } from './posting.js';
import { post } from './post.js';
import { singlepost } from './single-post.js';

const rootDiv = document.getElementById('root');


export const routes = {
  '/': home,
  '/posting': posting,
  '/post': post,
  '/singlepost': singlepost,
};

let firebase = null

export const load = (firebaseFromMain) => {
  firebase = firebaseFromMain
};

export const onNavigate = (path) => {
  const [pathname] = path.split('?');
  window.history.pushState(
    {},
    pathname,
    `${window.location.origin}${path}`,
  );

  const viewFunction = routes[pathname];
  viewFunction(rootDiv, firebase);
};

window.onpopstate = () => {
  const viewFunction = routes[window.location.pathname];
  viewFunction(rootDiv, firebase);
};
