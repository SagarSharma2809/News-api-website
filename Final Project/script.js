document.addEventListener("DOMContentLoaded", () => {
    const apiKey = '32f3375b61c64a479f40bc89c3aa1b6b';
    const apiUrl = `https://newsapi.org/v2/everything?q=India%20water%20bodies&apiKey=${apiKey}`;

    const newsList = document.getElementById("news-list");

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            data.articles.forEach(article => {
                const listItem = document.createElement("li");
                const image = article.urlToImage ? `<img src="${article.urlToImage}" alt="Article Image" class="article-image">` : '';
                listItem.innerHTML = `
                    ${image}
                    <div class="article-content">
                        <strong>${article.title}</strong><br>
                        ${article.description}<br>
                        <a href="${article.url}" target="_blank">Read more</a>
                    </div>`;
                newsList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching news:', error);
        });
});
