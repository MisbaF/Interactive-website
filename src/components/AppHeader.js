import { Link } from "react-router-dom"

export default function AppHeader(){
        return(
            <header className="App-header">
        
        <p>
          Website
        </p>
        {/* navbar is below */}
        <navbar>
           <Link to ="/home">
           <button>Home</button>
           </Link> 
           <Link to ="/posts">
           <button>Posts</button>
           </Link>
           <Link to="/about-us">
           <button>About me</button>
           </Link>
           <Link to ="/contact-info">
           <button>Contact Info</button>
           </Link>
           
        </navbar>
      </header>
        )
}