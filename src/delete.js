/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
const dataBase = firebase.firestore();
const deletePost = (id) => dataBase.collection('post').doc(id).delete();
export const deletefunction = () => {
  const btnsDelete = document.querySelectorAll('.btn-delete');
  btnsDelete.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      const confirmar = confirm('¿Seguro que quieres borrar tu post?');
      if (confirmar === true) {
        await deletePost(e.target.dataset.id);
      }
    });
  });
};
