import { Link } from "react-router-dom";

function Cheezies () {
    return (
        <div className="Cheezies">
            <p>It's Cheezies!</p>
            <p>Go to <Link to="/">Vending Machine</Link> page</p>
        </div>
    )
}

export default Cheezies;