import { Link } from 'react-router-dom'; // Importando o Link

function Nav({ menuAtivo = "home" }) {
  return (
    <nav className='col-11'>
      <ul>
        <li><Link to="/" className={menuAtivo === "Home" ? "ativo" : ""}>Home</Link></li>
        <li><Link to="/Sobre" className={menuAtivo === "Sobre" ? "ativo" : ""}>Sobre</Link></li>
        <li><Link to="/Cadastro" className={menuAtivo === "Cadastro" ? "ativo" : ""}>Cadastro</Link></li>
        <li><Link to="/Login" className={menuAtivo === "Login" ? "ativo" : ""}>Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
