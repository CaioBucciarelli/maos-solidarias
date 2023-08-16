import "../css/style.css"
import Header from "../interpolacao/header"
import Introducao from "../interpolacao/introducao"
import Separador from "../interpolacao/separador-introducao"
import Ajuda from "../interpolacao/como-ajudar"
import Numeros from "../interpolacao/numeros"
import Pix from "../interpolacao/pix"
import Footer from "../interpolacao/footer"

function Home(){

    return(
        <div>
            <Header/>
            <Introducao/>
            <Separador/>
            <Ajuda/>
            <Numeros/>
            <Pix/>
            <Footer/>
        </div>
    )

}

export default Home;