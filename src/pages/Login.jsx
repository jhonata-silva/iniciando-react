import Header from '../componentes/Header';
import Footer from '../componentes/Footer';

function Login() {
  return (
    <div className="row">
      <div className=''>
        <Header menuAtivo='Login'/>
        <main className="col-12 row">
          <section className="col-12 col-md-8 m-0 m-0 p-0">
            Conteúdo Login
          </section>
          <aside className="col-12 col-md-4 m-0 m-0 p-0">
            itens lateral
          </aside>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Login;
