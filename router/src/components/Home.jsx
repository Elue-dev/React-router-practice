import '../components/Home.css'
import {Link} from 'react-router-dom'


function Home() {
    return(
        <div className="home">
            <div className="hero">
                <div className="content">
                    <h1>My <span>React Router</span> Trial</h1>
                    <p>Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. 
                    Praesentium, assumenda.</p>
                </div>
            </div>

            <div className = "learn">
                <h1>What I Have Learnt</h1>
                <div className="wrapper">
                    <div className="box">
                        <h2>Switch Statement</h2>
                        <img src="./react-show.jfif" alt="" />
                        <p>Lorem ipsum dolor sit, 
                            amet consectetur adipisicing elit. 
                            Explicabo, error.</p>
                            <Link to = "/showcase">
                             <button>Try Showcase Page</button>
                            </Link>
                    </div>

                    <div className="box">
                        <h2>Router Statement</h2>
                        <img src="./react-footer.jfif" alt="" />
                        <p>Lorem ipsum dolor sit, 
                            amet consectetur adipisicing elit. 
                            Explicabo, error.</p>
                            <Link  to = "/content">
                             <button>Try Content Page</button>
                            </Link>
                    </div>

                    <div className="box">
                        <h2>Route Statement</h2>
                        <img src="./react-content.jfif" alt="" />
                        <p>Lorem ipsum dolor sit, 
                            amet consectetur adipisicing elit. 
                            Explicabo, error.</p>
                            <Link  to = "/final">
                             <button>Try Final Page</button>
                            </Link>
                    </div>
                </div>
           </div>

           <div className="footer">
                <p>&copy; 2021 React App. Developed by Elue Wisdom</p>
            </div>
        </div>
    )
}

export default Home