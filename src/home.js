import { onNavigate } from './routes.js';


export const home = async (target, firebase) => {
  const templeteHome = `
    <div id="back-list"><div id="post-list"></div>
`;
  target.innerHTML = templeteHome;
  const posts = await firebase.getAllPosts();
  const postTemplates = posts.map((post) => `
    <a href="#" class="single-post" data-id="${post.id}">
      <h2 class="title-list">${post.title}</h2>
    </a>
  `);

  const postList = document.getElementById('post-list');
  postList.innerHTML = postTemplates.join('');

  const btnsPost = document.querySelectorAll('.single-post');
  btnsPost.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      onNavigate('/singlepost');
      // const doc = await getPostInfo(e.target.dataset.id);
      // console.log(doc);
    });
  });
};

export default home;
