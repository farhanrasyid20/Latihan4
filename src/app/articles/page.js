import { getArticles } from "./services/getarticles";
import Card from "./components/card_articles";

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Daftar Artikel</h1>
      <ul className="space-y-2">
        {articles.map((article) => (
          <li key={article.id} className="p-3">            
            <Card img={article.urlImage} title={article.title} desc={article.description} author={article.author} />
          </li>
        ))}
      </ul>
    </div>
  );
}