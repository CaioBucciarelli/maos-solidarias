import "../css/style.css"
import Doacao from "../assets/icones/doacao.svg";
import Voluntario from "../assets/icones/voluntario.svg";
import Trabalhe from "../assets/icones/trabalhe.svg";
 
function Ajuda() {

return (
    <article className="ajuda container">
        <h1>Como nos ajudar</h1>
        <div className="ajuda-conteudo">
            <div className="ajuda-item">
                <div>
                    <img src={Doacao} alt="" />
                    <h2>Doações com Segurança</h2>
                </div>
                <p>Você pode fazer parte da transformação que proporciona a famílias um lar seguro e acolhedor. Cada doação, por menor que seja, faz a diferença. Ajude-nos a construir lares felizes e a criar um futuro melhor para todos. Faça sua doação hoje e seja parte dessa jornada incrível! Obrigado por fazer a diferença.</p>
            </div>
            <div className="ajuda-item">
                <div>
                    <img src={Voluntario} alt="" />
                    <h2>Seja um Voluntário</h2>
                </div>
                <p>Seu tempo e paixão são essenciais para construir lares felizes e vidas cheias de possibilidades. Para se envolver, entre em contato através do nosso site, telefone ou visitando nosso escritório. Juntos, podemos fazer a diferença!</p>
            </div>
            <div className="ajuda-item aaa">
                <div>
                    <img src={Trabalhe} alt="" />
                    <h2>Trabalhe Conosco</h2>
                </div>
                <p>Junte-se a nós na missão de ajudar famílias a encontrarem um lar seguro e acolhedor. Como voluntário, você fará parte de um movimento que vai além da moradia, proporcionando apoio emocional, habilidades valiosas e criando um ambiente acolhedor. Seja parte dessa mudança positiva, contribua com projetos de construção, eventos comunitários, aconselhamento, workshops ou conscientização. O tempo que você dedica faz uma diferença real. Cada sorriso que ajudamos a criar, cada passo que damos juntos, aproxima-nos de nossa visão de um mundo onde todos tenham um lar seguro e amoroso. Seu tempo e paixão são essenciais para construir lares felizes e vidas cheias de possibilidades. Para se envolver, entre em contato através do nosso site, telefone ou visitando nosso escritório. Juntos, podemos fazer a diferença!</p>
            </div>
        </div>
    </article>
  )
}

export default Ajuda;