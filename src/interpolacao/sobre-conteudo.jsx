import "../css/style.css"
import imgHistoria from "../assets/imgs/img-historia.png";
import imgMissao from "../assets/imgs/img-missao.png";
 
function SobreConteudo() {


return (
  <main>
    <div className="titulo-bg">
      <div className="titulo container">
        <p>saiba mais sobre a nossa história</p>
        <h1>Quem nós Somos</h1>
      </div>
    </div>
    <article className="sobre-conteudo container">
      <div className="historia">
        <img src={imgHistoria} alt="" />
        <div>
          <h2>História</h2>
          <p>A ONG Mãos Solidárias nasceu do desejo de oferecer um lar seguro e acolhedor para todas as famílias. Acreditamos que um lar vai além das necessidades básicas e deve ser um lugar de amor e cuidado, um ponto de partida para sonhos e conquistas. Contamos com voluntários dedicados e o apoio generoso da comunidade para construir lares e alicerces de esperança. </p>
          <p>Oferecemos não apenas moradia, mas também apoio emocional, educação e oportunidades de emprego. Nosso objetivo é sensibilizar a sociedade sobre a importância de ajudar aqueles que buscam um lar. Ao unir forças, empoderamos comunidades e transformamos vidas. Junte-se a nós na busca por lares felizes, onde as famílias possam crescer, sorrir e prosperar.</p>
          <p>Se você deseja fazer parte dessa jornada de Mãos Solidárias, seja como voluntário, doador ou apoiador, junte-se a nós na busca por lares felizes. Juntos, podemos criar um impacto duradouro, construir esperança e ajudar famílias a encontrarem um lar onde possam criar memórias, crescer e florescer.</p>
        </div>
      </div>

      <div className="missao">
        <div>
          <h2>Nossa Missão</h2>
          <p>Nós exemplificamos a convergência entre solidariedade e tecnologia moderna. Oferecemos uma experiência de doação interativa, compartilhando histórias e imagens das famílias ajudadas para estabelecer conexões emocionais entre doadores e beneficiários. A inteligência artificial personaliza sugestões de campanhas com base nas preferências dos doadores, fomentando doações recorrentes e laços duradouros.</p>
          <p>A ONG também organizou parcerias com empresas locais e startups de tecnologia para impulsionar ainda mais sua missão. Por exemplo, um aplicativo móvel permite que as pessoas doem com facilidade, recebam atualizações instantâneas sobre as campanhas em andamento e compartilhem histórias inspiradoras em suas redes sociais, ampliando assim o alcance da solidariedade.</p>
        </div>
        <img src={imgMissao} alt="" />
      </div>
    </article>
  </main>
  )
}

export default SobreConteudo;
