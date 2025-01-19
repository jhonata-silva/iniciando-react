import { Link } from 'react-router-dom'; // Importando o Link
import rocket from '../assets/images/undraw_rocket.svg';

function Sidebar({ menuAtivo = "Home" }) {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Admin DFE</div>
            </a>

            <hr className="sidebar-divider my-0" />

            <li className={"nav-item active"}>
                <Link className="nav-link" to="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Home</span>
                </Link>
            </li>


            <hr className="sidebar-divider" />

            <div className="sidebar-heading">
                Outras Links
            </div>

            <li className={menuAtivo !== "home" ? "nav-item active" : "nav-item"}>
                <a className={ menuAtivo !== "home"? "nav-link" : "nav-link collapsed" } href="#" data-bs-toggle="collapse" data-bs-target="#OutrosLinks" data-toggle="collapse" data-target="#OutrosLinks"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Outros Links</span>
                </a>
                <div id="OutrosLinks" className={ menuAtivo !== "home"? "collapse show" : "collapse" } aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Paginas</h6>
                        <ul>
                            <li>
                                <Link className={menuAtivo === "sobre" ? "collapse-item bg-secondary text-white" : "collapse-item"} to="/sobre">
                                    <i className="fas fa-fw fa-chart-area"></i>
                                    <span>Sobre</span>
                                </Link>
                            </li>
                            <li className={menuAtivo === "cadastro" ? "active" : ""}>
                                <Link className={menuAtivo === "cadastro" ? "collapse-item bg-secondary text-white" : "collapse-item"} to="/cadastro">
                                    <i className="fas fa-fw fa-table"></i>
                                    <span>Cadastro</span>
                                </Link>
                            </li>
                            <li className={menuAtivo === "login" ? "active" : ""}>
                                <Link className={menuAtivo === "login" ? "collapse-item bg-secondary text-white" : "collapse-item"} to="/login">
                                    <i className="fas fa-fw fa-cog"></i>
                                    <span>Login</span>
                                </Link>
                            </li>
                        </ul>
            
                    </div>
                </div>
            </li>

            <hr className="sidebar-divider d-none d-md-block" />

            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

            <div className="sidebar-card d-none d-lg-flex">
                <img className="sidebar-card-illustration mb-2" src={rocket} alt="..." />
                <p className="text-center mb-2"><strong>DFE</strong> <br/>Layout adaptado nos estudos de Front End com React</p>
            
            </div>

        </ul>

    );
}

export default Sidebar;
