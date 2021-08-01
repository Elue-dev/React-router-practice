import '../components/Content.css'
import {Link} from 'react-router-dom'

function Content() {
    return(
        <div className="content">
            <div className="bg">
              <div className="show-text">
                <h1>Welcome to React Router <span>Content</span> Page</h1>
                <p>Lorem ipsum dolor sit amet,
                     consectetur adipisicing elit. 
                     Adipisci, eaque.</p>

                     <Link to = "/">
                     <button>Back To Home</button>
                     </Link>
              </div>
            </div>

            <div className="content">
                <h2>What will you learn?</h2>

                <p className="top">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates beatae doloremque molestias! Consectetur id voluptatum corrupti dolorum, harum enim molestias! Sit nam qui quis, fuga voluptate maiores esse ullam similique?
                </p>

                <div className="image">
                    <img src="rxer.png" alt="" />
                </div>

                <p className="top">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga doloremque harum vel laboriosam reiciendis numquam earum odio nobis quia, eveniet reprehenderit veritatis quo minus beatae mollitia, sapiente veniam! Cum, voluptate?
                </p>
            </div>

            <Link to = "/final">
                <div className="btn">
                    <button className ="center">Back To Final Page</button>
                </div>
             </Link>

            <div className="footer">
                <p>&copy; 2021 React App. Developed by Elue Wisdom</p>
            </div>
        </div>
    )
}

export default Content