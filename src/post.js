import { onNavigate } from './routes.js';
import CardPost from './components/CardPost.js';

export const post = async (target, firebase) => {
  const templeteHome = `
    <div id="post-container"></div>
  `;
  target.innerHTML = templeteHome;
  
  const posts = await firebase.getAllPosts();
  
  // render posts
  const postTemplates = posts.map(post => CardPost(post));
  const postContainer = document.getElementById('post-container');
  postContainer.innerHTML = postTemplates.join('');
  
  // register/attach edit events
  const btnsEdit = document.querySelectorAll('.btn-edit');
  btnsEdit.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      onNavigate('/post');
      e.preventDefault();
      
      
      const url = new URL(e.currentTarget.href)
      onNavigate(url.pathname + url.search);   
    });
  });
  
  // register/attach delete events
  const btnsDelete = document.querySelectorAll('.btn-delete');
  btnsDelete.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const confirmar = confirm('¿Seguro que quieres borrar tu post?');
      if (confirmar) {
        firebase.deletePost(e.target.dataset.id);
      }
    });
  });
};

export default post;
