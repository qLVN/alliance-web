document.addEventListener('DOMContentLoaded', async () => {
    pageName = window.location.pathname.split("/").pop().split(".")[0];

    try {
        const response = await fetch('data/' + pageName + '.json');
        if (!response.ok) {
            throw new Error("ArticleLoadError");
        }
        jsonData = await response.json();
        
        jsonData.forEach(article => {

            rawDate = new Date(article['publicationDate']);

            options = { day: 'numeric', month: 'long', year: 'numeric' };
            formatter = new Intl.DateTimeFormat('fr-FR', options);

            date = formatter.format(rawDate);
            document.getElementById('content').innerHTML += '<div class="article-container"><div class="title">' + article['title'] + '</div><div class="content">' + article['body'] + '</div><div class="date">' + date + '</div><div class="author-wrapper"><img src="assets/material/authors/' + article['author'] + '.png" onerror="this.onerror=null;this.src=\'assets/material/authors/default.png\'" /><div>par ' + article['author'] + '</div></div></div>';
        });
    } catch (error) {
        throw error;
    }
});