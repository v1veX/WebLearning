const postsListElement = document.querySelector('.posts-list');

async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) throw new Error('Что-то пошло не так :(');

    const posts = await response.json();

    return posts;
}

async function drawPosts() {
    try {
        const posts = await getPosts();

        const postsItemsHTML = posts
            .map(({ id, title, body }) => {
                return `
                    <li class="posts-item">
                        <article class="posts-article post" id="post-${id}" data-post-id="${id}">
                            <h3 class="post-title">${title}</h3>
                            <p class="post-text">${body}</p>
                        </article>
                    </li>
                `;
            })
            .join('');
    
        postsListElement.insertAdjacentHTML('afterbegin', postsItemsHTML);
    }
    catch (error) {
        const errorHTML = `<li><p>${error.message}</p></li>`;
        postsListElement.insertAdjacentHTML('afterbegin', errorHTML);
        return;
    }

    
}

async function getComments(postId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);

    if (!response.ok) throw new Error('Что-то пошло не так :(');

    const comments = await response.json();

    return comments;
} 

async function logComments(postId) {
    try {
        const comments = await getComments(postId);
        console.log(comments);
    }
    catch (error) {
        console.error(error.message);
    }
}

postsListElement.addEventListener('click', event => {
    const target = event.target.closest('[data-post-id]');
    if (!target) return;

    const postId = target.dataset.postId;
    logComments(postId);
});

drawPosts();