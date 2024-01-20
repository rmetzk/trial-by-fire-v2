// ArticlesPage.js

import { useState } from 'react'

function ArticlesPage() {

  const [articles, setArticles] = useState(() => {
    // get articles from localStorage
  })

  function deleteArticle(article) {
    // delete article logic
  }

  return (
    <div>
      <h1>Articles</h1>
      
      {articles.map(article => (
        <Article 
          key={article.id}
          article={article}
          onDelete={deleteArticle}
        />
      ))}

    </div>
  )

}

function Article({article, onDelete}) {
  return (
    <div className="article">
      {/* article content */}
      <button onClick={() => onDelete(article)}>
        Delete
      </button>
    </div>
  )
}

export default ArticlesPage