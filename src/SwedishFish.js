import { Link } from "react-router-dom";

function SwedishFish () {
    return (
        <div className="SwedishFish">
            <h1>It's Swedish Fish 🎏</h1>
            <img 
              src="https://www.candywarehouse.com/item-images/131761-01_swedish-fish-candy-2-ounce-packs-24-piece-box.jpg"
              alt="yummy-looking swedish fish"
              />
            <p>Go to <Link to="/">Vending Machine</Link> page</p>
        </div>
    )
}

export default SwedishFish;