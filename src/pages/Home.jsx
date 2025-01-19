import Sidebar from '../componentes/Sidebar';
import Nav from '../componentes/Nav';
import Footer from '../componentes/Footer';

function Home() {
  return (
    <div id="wrapper">
      <Sidebar menuAtivo='home'/>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Nav />
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Home</h6>
                </div>
                <div className="card-body">
                    <p>Todavia, a consolidação das estruturas não pode mais se dissociar do orçamento setorial. Gostaria de enfatizar que a consolidação das estruturas obstaculiza a apreciação da importância do orçamento setorial.</p>
                </div>
            </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
