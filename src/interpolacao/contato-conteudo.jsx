import "../css/style.css"
import Instagram from "../assets/icones/instagram.svg";
import Facebook from "../assets/icones/facebook.svg";
 
function ContatoConteudo() {


return (
  <main>
      <div className="titulo-bg">
        <div className="titulo container">
          <p>resposta em até 24h</p>
          <h1>Nosso Contato</h1>
        </div>
      </div>
      <article className="contato container">
        <section className="contato-formulario" aria-label="Formulário">
          <h2 className="font-2-l-b">Entraremos em contato em breve.</h2>
          <form className="form" action="/contato">
            <div>
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" name="nome" placeholder="Seu nome"/>
            </div>
            <div>
              <label htmlFor="telefone">Telefone</label>
              <input type="text" id="telefone" name="telefone" placeholder="(11) 9999-9999" />
            </div>
            <div className="col-2">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="contato@contato.com" />
            </div>
            <div className="col-2">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea rows={5} type="text" id="mensagem" name="mensagem" placeholder="O que você precisa?"></textarea>
            </div>
            <button className="botao col-2">Enviar Mensagem</button>
          </form>
        </section>
        <section className="contato-informacoes" aria-label="Formas de Contato">
          <h2 className="font-2-l-b">Nossos Contatos</h2>
          <a href="mailto:contato@contato.com" className="font-2-m email">contato@maossolidarias.com</a>
          <a href="tel:+551199999999" className="font-2-m telefone">+55 11 9999-9999</a>
          <div className="contato-redes">
            <a href="/"><img src={Instagram} alt="instagram" /></a>
            <a href="/"><img src={Facebook} alt="facebook" /></a>
          </div>
        </section>
      </article>
    </main>
  )
}

export default ContatoConteudo;