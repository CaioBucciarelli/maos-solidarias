import "../css/style.css"
import criancasAtendidas from "../assets/icones/criancas-atendidas.svg";
import familiasAtendidas from "../assets/icones/familias-atendidas.svg";
import atividadesMes from "../assets/icones/atividades-mes.svg";
import casasConstruidas from "../assets/icones/casas-contruidas.svg";
 
function Numeros() {


return (
    <article className="numeros-bg">
        <div className="container numeros">
            <h1>Os Números</h1>
            <p>Sempre buscando resultados melhores!</p>
            <ul>
                <li className="criancas-atendidas-before">
                    <div className="numeros-conteudo criancas-atendidas">
                        <img src={criancasAtendidas} alt="icone uma pessoa" />
                    </div>
                    <p className="numeros-texto">Crianças Atendidas</p>
                </li>
                <li className="familias-atendidas-before">
                    <div className="numeros-conteudo familias-atendidas">
                        <img src={familiasAtendidas} alt="icone varias pessoas" width={60} height={60}/>
                    </div>
                    <p className="numeros-texto">Famílias Atendidas</p>
                </li>
                <li className="atividades-mes-before">
                    <div className="numeros-conteudo atividades-mes">
                        <img src={atividadesMes} alt="icone avião de papel" />
                    </div>
                    <p className="numeros-texto">Atividades por Mês</p>
                </li>
                <li className="casas-construidas-before">
                    <div className="numeros-conteudo casas-construidas">
                        <img src={casasConstruidas} alt="icone de casa" />
                    </div>
                    <p className="numeros-texto">Casas Construídas</p>
                </li>
            </ul>
        </div>
    </article>
  )
}

export default Numeros;