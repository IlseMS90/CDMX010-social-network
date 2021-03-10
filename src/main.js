
// En este documento solamente tenemos lo que manipula el DOM
import { onNavigate, load, routes } from './routes.js';
import * as firebase from './lib/firebase.js'

load(firebase)

const rootDiv = document.getElementById('root');
const homeViewFunction = routes[window.location.pathname];
homeViewFunction(rootDiv, firebase);

const postForm = document.getElementById('form');

// Funciones para botones de navegación
document.getElementById('toHome').addEventListener('click', (e) => {
  e.preventDefault();
  onNavigate('/');
});

document.getElementById('toPosting').addEventListener('click', async (e) => {
  e.preventDefault();
  onNavigate('/posting');
});

document.getElementById('toPost').addEventListener('click', (e) => {
  e.preventDefault();
  onNavigate('/post');
});

// Botón de editar
const btnsEdit = document.querySelectorAll('.btn-edit');
btnsEdit.forEach((btn) => {
  btn.addEventListener('click', async (e) => {
    const postEditing = await getPostInfo(e.target.dataset.id);
    editStatus = true;
    id = doc.id;
    postForm['post-title'].value = postEditing.title;
    postForm['post-location'].value = postEditing.location;
    postForm['post-description'].value = postEditing.description;
    postForm.save.innerText = 'Actualizar';
  });
});

