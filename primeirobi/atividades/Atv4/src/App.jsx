import Header from './components/Header';
import Article from './components/Article';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './index.css'; 

export default function App() {
  const dadosPosts = [
    {
      id: 1,
      title: "Filamentos FDM: PLA vs ABS vs PETG",
      date: "10 de Março de 2026",
      author: "Raven Master",
      content: "Escolher o material correto é o primeiro passo para garantir o sucesso da sua impressão 3D. O PLA é ideal para iniciantes devido à facilidade de uso, enquanto o ABS oferece alta resistência térmica. O PETG surge como o meio-termo perfeito, combinando resistência e facilidade de impressão."
    },
    {
      id: 2,
      title: "Como Calibrar o EIXO Z da sua Impressora",
      date: "05 de Março de 2026",
      author: "Raven Master",
      content: "Uma primeira camada perfeita garante a aderência de todo o projeto. Aprenda a ajustar o Z-offset e alinhar a mesa de impressão para evitar problemas de descolamento (warping) e garantir detalhes precisos."
    }
  ];

  const postsRelacionados = [
    { id: 101, title: "Guia Básico: Modelagem 3D no Blender" },
    { id: 102, title: "Qual a melhor resina para miniaturas?" }
  ];

  return (
    <>
      <Header />

      <main className="conteiner" id="inicio">
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
          <div style={{ flex: '1 1 65%' }}>
            <section id="artigos" className="secao-artigos">
              <h2>Últimas Atualizações</h2>
              
              {dadosPosts.map((post) => (
                <Article 
                  key={post.id}
                  title={post.title}
                  date={post.date}
                  author={post.author}
                  content={post.content}
                />
              ))}
              
            </section>
          </div>

          <div style={{ flex: '1 1 30%' }}>
            <Sidebar relatedPosts={postsRelacionados} />
          </div>
        </div>

        <section id="midia">
          <h2>Mídia e Tutoriais</h2>
          <h3 className="subtitulo-midia">IMPRESSÃO 3D: Como ESCOLHER o filamento IDEAL pra cada PROJETO</h3>
          <div className="conteiner-video">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube-nocookie.com/embed/BkyaVh3SOcg" 
              title="IMPRESSÃO 3D: Como ESCOLHER o filamento IDEAL pra cada PROJETO" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </section>

        <section id="galeria">
          <h2>Exposição de Trabalhos</h2>
          <p className="descricao-galeria">Confira algumas peças, protótipos e miniaturas impressos em nossas impressoras FDM e Resina.</p>
          
          <div className="grade-galeria">
            <figure className="item-galeria">
              <img src="./img/corvo.jpeg" alt="O corvo imortal" />
              <figcaption>O corvo imortal</figcaption>
            </figure>

            <figure className="item-galeria">
              <img src="./img/funko.jpeg" alt="O casal mais lindo do Brasil" />
              <figcaption>O casal mais lindo do Brasil</figcaption>
            </figure>

            <figure className="item-galeria">
              <img src="./img/darbo.jpeg" alt="Darbo o assistente virtual" />
              <figcaption>Darbo o assistente virtual</figcaption>
            </figure>

            <figure className="item-galeria">
              <img src="./img/swain.jpeg" alt="Swain o gereral noxiano" />
              <figcaption>Swain o gereral noxiano</figcaption>
            </figure>
          </div>
        </section>

        <section id="contato" className="secao-formulario">
          <h2>Inscreva-se na Newsletter ForgeRaven</h2>
          <p>Receba dicas exclusivas de fatiamento, modelos 3D gratuitos e novidades sobre materiais.</p>
          
          <form action="#" method="POST" className="formulario-newsletter">
            <div className="grupo-campo">
              <label htmlFor="nome">Nome Completo:</label>
              <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required />
            </div>

            <div className="grupo-campo">
              <label htmlFor="email">E-mail corporativo ou pessoal:</label>
              <input type="email" id="email" name="email" placeholder="seuemail@exemplo.com" required />
            </div>

            <div className="grupo-campo">
              <label htmlFor="tipo-impressora">Sua Impressora Principal:</label>
              <select id="tipo-impressora" name="tipo-impressora">
                <option value="fdm">FDM (Filamento)</option>
                <option value="resina">SLA / DLP (Resina)</option>
                <option value="nenhuma">Ainda não tenho</option>
              </select>
            </div>

            <div className="grupo-campo grupo-checkbox">
              <input type="checkbox" id="termos" name="termos" required />
              <label htmlFor="termos">Aceito receber e-mails informativos da ForgeRaven 3D.</label>
            </div>

            <button type="submit" className="botao-enviar">Inscrever-se</button>
          </form>
        </section>

      </main>

      <Footer />
    </>
  );
}