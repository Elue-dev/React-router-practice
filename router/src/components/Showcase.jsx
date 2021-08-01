import '../components/Showcase.css'
import {Link} from 'react-router-dom'

function Showcase() {
    return(
        <div className="showcase">
            <div className="bg">
                <div className="show-text">
                    <h1>Welcome to React Router <span>Showcase</span> Page</h1>
                    <p>Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. 
                        Adipisci, eaque.</p>
                        <Link to = "/">
                            <button>Back To Home</button>
                        </Link>
                     </div>
            </div>

            <div className="content">
                <h2>What is it about?</h2>
                <p><i className="fab fa-telegram-plane"></i> Lorem ipsum dolor sit amet.</p>
                <p><i className="fab fa-telegram-plane"></i> Lorem ipsum dolor sit amet.</p>
                <p><i className="fab fa-telegram-plane"></i> Lorem ipsum dolor sit amet.</p>
                <p><i className="fab fa-telegram-plane"></i> Lorem ipsum dolor sit amet.</p>

                <div className="image">
                    <img src="router.png" alt="" />
                </div>

                <p className="top">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates beatae doloremque molestias! Consectetur id voluptatum corrupti dolorum, harum enim molestias! Sit nam qui quis, fuga voluptate maiores esse ullam similique?
                </p>

                <p className="top">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga doloremque harum vel laboriosam reiciendis numquam earum odio nobis quia, eveniet reprehenderit veritatis quo minus beatae mollitia, sapiente veniam! Cum, voluptate?</p>
            </div>

            <Link to = "/content">
                <div className="btn">
                    <button className="center">Back To Content Page</button>
                 </div>
             </Link>

            <div className="footer">
                <p>&copy; 2021 React App. Developed by Elue Wisdom</p>
            </div>
        </div>
    )
}

export default Showcase