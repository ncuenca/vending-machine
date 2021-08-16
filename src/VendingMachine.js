import { Link } from "react-router-dom";

function VendingMachine() {
    return (
        <div className='VendingMachine'>
            <p>It's a vending machine!</p>
            <p>Go to <Link to="/water">Water</Link> page</p>
            <p>Go to <Link to="/swedishfish">Swedish Fish</Link> page</p>
            <p>Go to <Link to="/cheezies">Cheezies</Link> page</p>
        </div>
    )
}
export default VendingMachine;