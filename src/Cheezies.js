import { Link } from "react-router-dom";

function Cheezies () {
    return (
        <div className="Cheezies">
            <h1>It's Cheezies!</h1>
            <img
              src="https://www.londondrugs.com/on/demandware.static/-/Sites-londondrugs-master/default/dw0290134e/products/L0349316/large/L0349316.JPG"
              alt="cheezies looking delicious"
              />
            <p>Go to <Link to="/">Vending Machine</Link> page</p>
        </div>
    )
}

export default Cheezies;