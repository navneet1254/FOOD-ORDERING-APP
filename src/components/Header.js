import "../assets/css/nav-bar.css";
import Search from "./Search";

const Header = ({name, basket,handleSearch}) => {
    const openNav = () => {
        document.getElementById("mySidenav").style.height = "350px";
        document.getElementById("mySidelog").style.height = "0";
    };
    const openLog = () => {
        document.getElementById("mySidelog").style.height = "560px";
        document.getElementById("mySidenav").style.height = "0";
    };

    return (
        <nav className="navbar navbar-light navbar-expand-md navigation-clean sticky-top">
            <div className="container"><a className="navbar-brand" href="/Menu">{name}</a>
                <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
                    <span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="navbar-nav align-items-baseline ms-auto">
                        <li className="nav-item"><a className="nav-link" href="/Menu">Menu</a></li>
                        <li className="nav-item"><a className="nav-link" href="https://www.grabon.in/food-coupons/" target="_blank" rel="noreferrer noopener">Deals</a></li>
                        <li className="nav-item">
                            <button onClick={openNav} className="btn btn-outline-dark d-flex align-items-end"
                                    type="button"><i
                                className="fas fa-shopping-basket"/><span className="badge bg-danger">{basket}</span>
                            </button>
                        </li>
                        <li>
                        <form className="form-inline m-2  ">
                        <Search handleSearch={handleSearch} />
                            {/* <input className="form-control ml-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
                            {/* {filteredDishes ? <Item item={filteredDishes} addItem={addItem} /> : ""} */}
                            <button className="btn btn-outline-success my-2 " type="submit">Search</button>
                        </form>
                        </li>
                        <button onClick={openLog} className="btn btn-outline-dark d-flex align-items-end"
                                    type="button">
                        <li className="nav-item">Login</li>
                            </button>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
