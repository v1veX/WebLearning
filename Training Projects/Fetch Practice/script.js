let posts = [];

function createPostElement(author, title, body, likes, id) {
    const titleFormatted = title ? title : 'Заголовок отсутствует';

    const postElementHTML = 
    `
    <li class="posts__item">
        <article class="post" id="post-${id}">
            <header class="post__header post__inner">
                <div class="post__author-name">${author}</div>
            </header>
            <div class="post__body post__inner">
                <h3 class="post__title ${title ? '' : 'visually-hidden'}">
                    ${titleFormatted}
                </h3>
                <p class="post__text">
                    ${body}
                </p>
            </div>
            <footer class="post__footer post__inner">
                <span class="post__likes-counter">Лайки: ${likes}</span>
                <button type="button" class="post__like-button" data-js-like-button data-post-id="${id}" data-current-likes="${likes}">👍</button>
            </footer>
        </article>
    </li>
    `;

    return postElementHTML;
}

function updateLikesOnPost(postId, likes) {
    const postElement = document.querySelector(`#post-${postId}`);
    const likesElement = postElement.querySelector('.post__likes-counter');
    const likeButtonElement = postElement.querySelector('[data-js-like-button]');

    likesElement.textContent = `Лайки: ${likes}`;
    likeButtonElement.dataset.currentLikes = likes;
}

async function getPosts() {
    const url = 'http://localhost:3000/posts';

    const response = await fetch(url);

    posts = await response.json();
}

function showError() {
    const postsListElement = document.querySelector('.posts__list');
    postsListElement.innerHTML = '';

    const errorMessageElement = document.createElement('div');
    errorMessageElement.textContent = 'Произошла ошибка! Проверьте подключение к сети.'

    postsListElement.append(errorMessageElement);
}

function renderPosts() {
    const postsListElement = document.querySelector('.posts__list');

    postsListElement.innerHTML = '';

    posts.forEach(post => {
        const { ownerName, title, body, likes, id } = post; 

        const postElement = createPostElement(ownerName, title, body, likes, id);

        postsListElement.insertAdjacentHTML('afterbegin', postElement);
    });
}

function bindLikesEvents() {
    document.addEventListener('click', event => {
        const likeButtonElement = event.target.closest('[data-js-like-button]');

        if (!likeButtonElement) return;

        const postId = likeButtonElement.dataset.postId;
        const newLikes = Number(likeButtonElement.dataset.currentLikes) + 1;

        fetch(`http://localhost:3000/posts/${postId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ 'likes': newLikes})
        })
        
        updateLikesOnPost(postId, newLikes);
    });
}

function clearPostForm() {
    const postFormElement = document.querySelector('#post-form');

    for (const formElement of postFormElement.elements) {
        formElement.value = '';
    }
}

function bindPostFormEvents() {
    const postFormElement = document.querySelector('#post-form');

    postFormElement.addEventListener('submit', event => {
        event.preventDefault();

        const newPost = {
            title: postFormElement.title.value,
            body: postFormElement.body.value,
            likes: 0,
            ownerId: '0',
            ownerName: postFormElement.ownerName.value,
        };

        const newPostJSON = JSON.stringify(newPost);

        fetch(`http://localhost:3000/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: newPostJSON
        })
        .then(response => response.json())
        .then(post => {
            posts.push(post);
        })
        .then(() => renderPosts())
        .then(() => clearPostForm());
    });
}

function start() {
    getPosts()
        .then(() => renderPosts())
        .catch(() => showError());
    bindLikesEvents();
    bindPostFormEvents();
}

start();