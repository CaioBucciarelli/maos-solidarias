import "../css/style.css"
import iconeCasinha from "../assets/icones/casinha.svg";
 
function Separador() {

return (
    <section className="separador-bg">
        <ul className="separador container">
            <li>
                <img className="icone-separador" src={iconeCasinha} alt="" />
                <p>Ajude famílias a terem um lar aconchegante</p>
            </li>
            <li>
                <img className="icone-separador" src={iconeCasinha} alt="" />
                <p>Ajude famílias a terem um lar aconchegante</p>
            </li>
            <li>
                <img className="icone-separador" src={iconeCasinha} alt="" />
                <p>Ajude famílias a terem um lar aconchegante</p>
            </li>
        </ul>
    </section>
  )
}

export default Separador;