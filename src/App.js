import './css/style.scss';
import logo from './assets/images/logo.webp';

function App() {
  return (
    <div className="row">
      <div className=''>
        <header className="col-12 row">
          <div className="col-1">
            <img src={logo} alt='logo do projeto iniciando com react'></img>
          </div>
          <nav className='col-11'>
            <ul>
              <li>Home</li>
              <li>Cadastro</li>
              <li>Sobre</li>
              <li>Login</li>
            </ul>
          </nav>
        </header>

        <main className="col-12 row m-0">
          <section className="col-12 col-md-8" >
            Conteúdo
          </section>
          <aside className="col-12 col-md-4">
            itens lateral
          </aside>
        </main>

        <footer className="col-12">
          footer
        </footer>
      </div>
    </div>
  );
}

export default App;
