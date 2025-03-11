document.addEventListener('DOMContentLoaded', async () => {
    pageName = window.location.pathname.split("/").pop().split(".")[0];

    try {
        const response = await fetch('https://cdn.lalliancegroup.com/assets/data/' + pageName + '.json?v=' + new Date().getTime());
        if (!response.ok) {
            throw new Error("ArticleLoadError");
        }
        jsonData = await response.json();
        
        jsonData.forEach(article => {

            rawDate = new Date(article['publicationDate']);

            options = { day: 'numeric', month: 'long', year: 'numeric' };
            formatter = new Intl.DateTimeFormat('fr-FR', options);

            date = formatter.format(rawDate);
            document.getElementById('content').innerHTML += '<div class="article-container small"><div class="title">' + article['title'] + '</div><div class="content">' + article['body'] + '</div><div class="date">' + date + '</div><div class="author-wrapper"><img src="https://cdn.lalliancegroup.com/assets/material/authors/' + article['author'] + '.png" onerror="this.onerror=null;this.src=\'https://cdn.lalliancegroup.com/assets/material/authors/default.png\'" /><div>par ' + article['author'] + '</div></div><div class="expand" onclick="this.style.display = \'none\'; this.parentElement.classList.remove(\'small\');">Voir en entier</div></div>';
        });
    } catch (error) {
        throw error;
    }
});