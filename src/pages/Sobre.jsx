import Header from '../componentes/Header';
import Footer from '../componentes/Footer';

function Sobre() {
  return (
    <div className="row">
      <div className=''>
        <Header menuAtivo='Sobre'/>
        <main className="col-12 row">
          <section className="col-12 col-md-8">
            Conteúdo Sobre
          </section>
          <aside className="col-12 col-md-4">
            itens lateral
          </aside>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Sobre;
