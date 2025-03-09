document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.createElement('div');
    fetch('Header.html')
        .then(response => response.text())
        .then(html => {
            headerContainer.innerHTML = html;
            document.body.insertBefore(headerContainer, document.body.firstChild);
        });
});