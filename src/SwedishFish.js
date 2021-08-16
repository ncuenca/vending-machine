import { Link } from "react-router-dom";

function SwedishFish () {
    return (
        <div className="SwedishFish">
            <p>It's Swedish Fish 🎏</p>
            <p>Go to <Link to="/">Vending Machine</Link> page</p>
        </div>
    )
}

export default SwedishFish;