import '../components/Final.css'
import {Link} from 'react-router-dom'

function Final() {
    return(
        <div className="final">
            <div className="bg">
              <div className="show-text">
                <h1>Welcome to React Router <span>Final</span> Page</h1>
                <p>Lorem ipsum dolor sit amet,
                     consectetur adipisicing elit.
                      Adipisci, eaque.</p>
                      <Link to = "/">
                        <button>Back To Home</button>
                     </Link>
               </div>
            </div>

            <div className="content">
                <h2>Whay is it important?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus corrupti ab, non odit pariatur distinctio. Ex quaerat modi et odit.
                </p>
                <p className="top">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates beatae doloremque molestias! Consectetur id voluptatum corrupti dolorum, harum enim molestias! Sit nam qui quis, fuga voluptate maiores esse ullam similique?
                </p>

                <div className="image">
                    <img src="rxerr.png" alt="" />
                </div>

                <p className="top">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga doloremque harum vel laboriosam reiciendis numquam earum odio nobis quia, eveniet reprehenderit veritatis quo minus beatae mollitia, sapiente veniam! Cum, voluptate?</p>
            </div>

            <Link to = "/showcase">
                <div className="btn">
                    <button className="center">Back To Showcase Page</button>
                 </div>
             </Link>

            <div className="footer">
                <p>&copy; 2021 React App. Developed by Elue Wisdom</p>
            </div>
        </div>
    )
}

export default Final