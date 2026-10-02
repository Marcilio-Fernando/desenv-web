export default function Article({ title, date, author, content }) {
  return (
    <article className="cartao-post">
      <header className="cabecalho-post">
        <h3>{title}</h3>
        <p className="meta-post">
          Publicado em <time>{date}</time> por <strong>{author}</strong>
        </p>
      </header>
      <div>
        <p>{content}</p>
      </div>
    </article>
  );
}