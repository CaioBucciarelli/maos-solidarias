import "../css/style.css"
import Header from "../interpolacao/header"
import Introducao from "../interpolacao/introducao"
import Separador from "../interpolacao/separador-introducao"
import Footer from "../interpolacao/footer"

function Home(){

    return(
        <div>
            <Header/>
            <Introducao/>
            <Separador/>
            <Footer/>
        </div>
    )

}

export default Home;