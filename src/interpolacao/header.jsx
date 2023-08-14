import "../css/style.css"
import logo from "../assets/logo-ong.svg";
 
function Header() {


return (
    <header className="header-bg">
      <div className="header container">
        <img src={logo} className="logo" alt="Farmacy" />
        <nav>
          <ul className="header-menu font-1-m cor-0">
            <li><a href="/">Home</a></li>
            <li><a href="/sobre">Sobre</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;