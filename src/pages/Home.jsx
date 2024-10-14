import Header from '../componentes/Header';
import Footer from '../componentes/Footer';

function Home() {
  return (
    <div className="row">
      <div className="">
        <Header menuAtivo='Home'/>
        <main className="col-12 row">
          <section className="col-12 col-md-8 m-0 p-0">
            Conteúdo Home
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

export default Home;
