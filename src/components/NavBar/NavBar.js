import CartWidget from "../CartWidget/CartWidget"
import logo from './assets/logo2.png'

const NavBar = () => {
    return (
        <nav className="row header">
            <div className="col-3">
                <img className="logo" src={logo} alt="logo" style={{ width: '100px', height: '100px' }}/>
                <h3 className="mt-3">Cultivos Sanos</h3>
            </div>

            <div className="col-6 mt-3">
                <button className="btn btn-outline-primary ms-3 me-3"> Parafernaria </button>
                <button className="btn btn-outline-primary ms-3 me-3"> Semillas </button>
                <button className="btn btn-outline-primary ms-3 me-3"> Indumentaria </button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar