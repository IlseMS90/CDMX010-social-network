const CardPost = (post) => {
    return `
    <div id="mainPost">
            <h2 class="title">${post.title}</h2>
            <p class="plocation">${post.location}</p>
            <p class="pdescription">${post.description}</p>
            <div id="icons">
              <i class="far fa-trash-alt btn-delete" data-id="${post.id}"></i>
              <span><i class="fas fa-heart"></i></span>
              <i class="fas fa-pencil-alt btn-edit" data-id="${post.id}"></i>
            </div>  
        </div>
    `;
}
export default CardPost