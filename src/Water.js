import { Link } from "react-router-dom";

function Water () {
    return (
        <div className="Water">
            <p>It's water!</p>
            <p>Go to <Link to="/">Vending Machine</Link> page</p>
        </div>
    )
}

export default Water;