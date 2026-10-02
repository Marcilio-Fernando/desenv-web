export default function Sidebar({ relatedPosts }) {
  return (
    <aside className="secao-artigos">
      <h2>Posts Relacionados</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {relatedPosts.map((post) => (
          <article key={post.id} className="cartao-post" style={{ padding: '15px' }}>
            <header className="cabecalho-post">
              <h3 style={{ fontSize: '1.1rem', margin: 0 }}>
                <a href={`#post-${post.id}`} style={{ color: '#00b37e', textDecoration: 'none' }}>
                  {post.title}
                </a>
              </h3>
            </header>
          </article>
        ))}
      </div>
    </aside>
  );
}