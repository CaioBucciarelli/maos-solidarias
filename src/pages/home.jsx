import "../css/style.css"
import Header from "../interpolacao/header"
import Introducao from "../interpolacao/introducao"
import Separador from "../interpolacao/separador-introducao"
import Ajuda from "../interpolacao/como-ajudar"
import Numeros from "../interpolacao/numeros"
import Footer from "../interpolacao/footer"

function Home(){

    return(
        <div>
            <Header/>
            <Introducao/>
            <Separador/>
            <Ajuda/>
            <Numeros/>
            <Footer/>
        </div>
    )

}

export default Home;