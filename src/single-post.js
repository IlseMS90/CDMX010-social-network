import { onNavigate } from './routes.js';


export const singlepost = (target) => {
  onNavigate();
  const templeteSinglePost = `
      <div id="post-container"></div>
    `;
  target.innerHTML = templeteSinglePost;
};
export default singlepost;
