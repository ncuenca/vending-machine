import { Link } from "react-router-dom";
import "./VendingMachine.css";

function VendingMachine() {
    return (
        <div className='VendingMachine'>
            <div className='textbox'>
                <h1>It's a vending machine!</h1>
                <p>Go to <Link to="/water">Water</Link> page</p>
                <p>Go to <Link to="/swedishfish">Swedish Fish</Link> page</p>
                <p>Go to <Link to="/cheezies">Cheezies</Link> page</p>
                <img 
                  src="https://images.unsplash.com/photo-1552349471-57c1b1cce2d3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmVuZGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                  alt="Vending Machines" />
            </div>
        </div>
    )
}
export default VendingMachine;