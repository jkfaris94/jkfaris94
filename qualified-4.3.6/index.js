/*
Add event listeners to the `.expand_button` buttons
*/
function expandArticleBody() {
  // your code here
    // Select all buttons with the class 'expand_button'
    const expandButtons = document.querySelectorAll('.expand_button');

    // Loop through each button and add a click event listener
    expandButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Find the closest article element to the clicked button
            const article = button.closest('.article');
            const articleBody = article.querySelector('.article_body');

            // Check the current text on the button
            if (button.textContent === 'V') {
                // If it's "V", hide the article body and set button text to ">"
                articleBody.style.display = 'none';
                button.textContent = '>';
            } else {
                // Otherwise, show the article body and set button text to "V"
                articleBody.style.display = 'block';
                button.textContent = 'V';
            }
        });
    });
}

/*
Add event listeners to the `.highlightBtn` buttons
*/
function highlightArticle() {
  // your code here
}

function main() {
  expandArticleBody();
  highlightArticle();
}

main();