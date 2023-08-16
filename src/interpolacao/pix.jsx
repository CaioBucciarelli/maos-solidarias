import "../css/style.css"
import qrcodePix from "../assets/imgs/unnamed.jpg";

 
function Pix() {


return (
    <article className="container pix">
        <h1>Contribuição</h1>
        <p>Contribua com as famílias necessitadas mandando qualquer quantida neste QRcode de Pix.</p>
        <img src={qrcodePix} alt="" />
    </article>
  )
}

export default Pix;