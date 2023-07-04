import React from "react"
import {useLocation, useNavigate} from 'react-router-dom';
import '../styles/home.css';
import Login from "./Login";
import Progress from './Progress';
import Assignment from './Assignment';

function Home (){
    const location=useLocation()
    const logout = ()=> {
        return (
            <Login />
        )
    }

    return (
        <div>
        <div ClassNameName="homepage">
            <h4>Hello {location.state.id} and welcome to the home</h4>
            <div style={{backgroundColor: '#75C9b8'}}>
            <nav>
      <div ClassName="navigation container">
        <div ClassName="logo_container">
          <img src="../images/imagesss/logo.jpg"  style={{height:"45px"}} alt="logo" />
        </div>
        <div ClassName="bar_icon">
          <i ClassName="fas fa-bars"></i>
        </div>
        <div id="logout" >
          <i ClassName="fas fa-sign-out-alt" onClick={logout}></i>
        </div>
      </div>
    </nav>
            </div>
        </div>
        <div ClassName="container">
        <div ClassName="main">
          <div ClassName="main_image">
            <img src="../images/imagesss/mains.jpeg"  style={{height:"400px"}} alt="image" />
          </div>
          <div ClassName="main_content">
            <div ClassName="tag">50% Off on all courses for first users !</div>
            <h1>learn with experts</h1>
            <p>
               achieve success with us ! show the world your real potental.
            </p>
           <a href="/form.html" target="_blank"> <button ClassName="explore_btn">Register Now</button> </a>
          </div>
        </div>
        <section ClassName="features">
          <div ClassName="feature">
            <img src="../icons/teacher.jpg" alt="" />
            <div ClassName="feature_content">
              <h3>Best Teachers</h3>
                Learn from best teachers of world!.
            </div>
          </div>
          <div ClassName="feature">
            <img src="../icons/notes.jpg" alt="" />
            <div ClassName="feature_content">
              <h3>Best content</h3>
              study material prepared by the best researchers of industry.
            </div>
            <a href={<Progress />} target="_blank" style={{ textDecoration: 'none', color: 'black'}} />  </div>
         <div ClassName="feature">
           <img src="../icons/guidance.jpg" alt="" />
            <div ClassName="feature_content">
              <h3>Interact with your mentors and peers !</h3>
              Track your progress with your personal mentor.
            </div> 
          </div>
        </section>
        <div ClassName="divider"></div>
        <div ClassName="menu">
          <div ClassName="tag">Our courses</div>
          <h2>Explore Our courses</h2>
  
          <div ClassName="grid">
           <div ClassName="item1">
            <a href="https://youtu.be/yRpLlJmRo2w"   target="_blank">  <img
                ClassName="grid-image"
                src="../images/image1.jpg"
                alt="image 1"
              /> </a>
            </div>
            <div ClassName="item2">
              <a href="https://youtu.be/rGx1QNdYzvs"  target="_blank">  <img
                ClassName="grid-image"
                src="../images/image2.jpg"
                alt="image 2"
              />  </a>
            </div>
            <div ClassName="item3">
              <a href="https://www.youtube.com/live/Ewx1bo3Vyzg?feature=share" target="_blank">   <img
                ClassName="grid-image"
                src="../images/image3.jpg"
                alt="image 3"
              /></a>
            </div>
            <div ClassName="item4">
              <a href="https://youtu.be/JL_grPUnXzY"   target="_blank">   <img
                ClassName="grid-image"
                src="../images/image4.jpg"
                alt="image 4"
              /></a>
            </div>
            <div ClassName="item5">
              <a href="https://youtu.be/BrJbJIw6KhE"  target="_blank">  <img
                ClassName="grid-image"
                src="../images/image5.webp"
                alt="image 5"
              /></a>
            </div>
            <div ClassName="item6">
              <a href="https://youtu.be/6cCkrYuqOdE"   target="_blank">   <img
                ClassName="grid-image"
                src="../images/image6.jpg"
                alt="image 6"
              /></a>
            </div>
            <div ClassName="item7">
              <a href="https://youtu.be/5ZeW8EWGcCs"   target="_blank">   <img
                ClassName="grid-image"
                src="../images/image7.jpg"
                alt="image 7"
              /> </a>
            </div>
          </div>
        </div>
      </div>
      <footer>
      <div ClassName="footer_container container">
        <div ClassName="footer_logo">
          <img src="../images/imagesss/footer.jpg" alt="logo" />
        </div>
        <div ClassName="link_lists">
          <h3>Main Links</h3>
          <ul>
           <a href={<Assignment />} target="_blank" style={{color: 'black',  textDecoration: 'none'}}> <li>Submit assignment</li></a>
           <a href={<Progress />}   target="_blank" style={{color: 'black',  textDecoration: 'none'}}  > <li>track progress</li>    </a>
           <a href="mailto:tushartaneja24@gmail.com" target="_blank"  style={{color: 'black',  textDecoration: 'none'}} > <li>Contact Us</li></a>
            <li>News & Blogs</li>
          </ul>
        </div>
        <div ClassName="link_lists">
          <h3>Support</h3>
          <ul>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditons</li>
          </ul>
        </div>
        <div ClassName="news_letter">
          <h3>Support</h3>
          <input type="email" placeholder="Enter your Email..." />
          <h3>Follow Us</h3>
          <div ClassName="icon_container">
            <div ClassName="icon">
             <a href="https://www.facebook.com/"  target="_blank"  > <i ClassName="fa fa-facebook"></i> </a>
            </div>
            <div ClassName="icon">
              <a href="https://www.twitter.com/"  target="_blank"  > <i ClassName="fa fa-twitter" aria-hidden="true"></i> </a>
            </div>
            <div ClassName="icon">
              <a href="https://www.instagram.com/"  target="_blank" >  <i ClassName="fa fa-instagram" aria-hidden="true"></i> </a>
            </div>
            <div ClassName="icon">
              <a href="https://www.youtube.com/"  target="_blank">  <i ClassName="fa fa-youtube" aria-hidden="true"></i> </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
      </div>
    )
}

export default Home;
