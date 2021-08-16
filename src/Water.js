import { Link } from "react-router-dom";

function Water () {
    return (
        <div className="Water">
            <h1>It's water!</h1>
            <img 
              src="https://earth911.com/wp-content/uploads/2020/01/AdobeStock_120994293-1.jpeg"
              alt="refreshing water"
              />
            <p>Go to <Link to="/">Vending Machine</Link> page</p>
        </div>
    )
}

export default Water;