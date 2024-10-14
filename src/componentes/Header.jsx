import Nav from '../componentes/Nav';
import logo from '../assets/images/logo.webp';

function Header({menuAtivo = "Home"}) {
  return (
    <header className="col-12 row">
      <div className="col-1">
        <img src={logo} alt='logo do projeto iniciando com react' />
      </div>
      <Nav menuAtivo={menuAtivo} />
    </header>
  );
}

export default Header;
