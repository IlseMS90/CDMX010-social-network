import { getPostById} from './lib/firebase.js';
import { onNavigate } from './routes.js';

export const singlepost = async (target) => {
  const templetesinglepost = `
  <div id="post-container"></div>
  
`;
  target.innerHTML = templetesinglepost;
  const posts = await getPostById();
  const postTemplates = posts.map((post) => `
  <a href="#" class="single-post" data-id="${post.id}">
    <h2 class="title-list">${post.title}</h2>
  </a>
`);


const postList = document.getElementById('post-list');
postList.innerHTML = postTemplates.join('');
  
};

export default singlepost;