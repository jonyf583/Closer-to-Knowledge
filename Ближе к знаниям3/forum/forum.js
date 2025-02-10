document.getElementById('submit').addEventListener('click', function() {
    const username = document.getElementById('username').value.trim();
    const message = document.getElementById('message').value.trim();

    if (username && message) {
        const postContainer = document.createElement('div');
        postContainer.classList.add('post');

        const postContent = `<strong>${username}</strong>: <p>${message}</p>`;
        postContainer.innerHTML = postContent;

        document.getElementById('posts').appendChild(postContainer);

        // Очистка полей ввода
        document.getElementById('username').value = '';
        document.getElementById('message').value = '';
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
});
