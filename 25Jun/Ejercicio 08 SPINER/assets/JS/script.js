document.addEventListener('DOMContentLoaded', () => {

    const spinner = document.getElementById('spinner');
    const welcome = document.getElementById('welcome');

    setTimeout(() => {
        spinner.classList.add('hidden');
        welcome.classList.remove('hidden');
    },3000);
});