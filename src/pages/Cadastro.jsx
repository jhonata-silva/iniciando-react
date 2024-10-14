import Header from '../componentes/Header';
import Footer from '../componentes/Footer';

function Cadastro() {
  return (
    <div className="row">
      <div className=''>
        <Header menuAtivo='Cadastro'/>
        <main className="col-12 row">
          <section className="col-12 col-md-8 m-0 p-0">
            Conteúdo Cadastro
          </section>
          <aside className="col-12 col-md-4 m-0 p-0">
            itens lateral
          </aside>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Cadastro;
