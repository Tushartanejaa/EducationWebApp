import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/home.css";
import Login from "./Login";
import logo from "../images/imagesss/logo.jpg";
import mains from "../images/imagesss/mains.jpeg";
import footer from "../images/imagesss/footer.jpg";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.webp";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import guidance from "../images/icons/guidance.jpg";
import notes from "../images/icons/notes.jpg";
import teacher from "../images/icons/teacher.jpg";

function Home() {
  const location = useLocation();
  const logout = () => {
    return <Login />;
  };
  const history = useNavigate();

  return (
    <div>
      <div>
        <h4>Hello {location.state.id} and welcome to the home</h4>
        <div style={{ backgroundColor: "#75C9b8" }}>
          <nav>
            <div className="navigation">
              <div className="logo_container">
                <img src={logo} style={{ height: "45px" }} alt={logo} />
              </div>
              <div id="logout" style={{ color: "black" }}>
                <i style={{ color: "black" }} onClick={logout}></i>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div style={{ backgroundColor: "#75C9b8" }}>
        <div className="main" style={{ display: "flex" }}>
          <div
            className="main_image"
            style={{ flexDirection: "column", margin: "5px 10px 20px" }}
          >
            <img src={mains} style={{ height: "400px" }} alt={mains} />
          </div>
          <div className="main_content" style={{ flexDirection: "column" }}>
            <div className="tag">50% Off on all courses for first users !</div>
            <h1>learn with experts</h1>
            <p>achieve success with us ! show the world your real potental.</p>
            <button
              className="explore_btn"
              onClick={() => history("/forumPage")}
            >
              checkout our Forums!
            </button>
          </div>
        </div>
        <section className="features" style={{ display: "flex" }}>
          <div
            className="feature"
            style={{ flexDirection: "column", width: "45%" }}
          >
            <img src={teacher} alt="teacher" />
            <div className="feature_content">
              <h3>Best Teachers</h3>
              Learn from best teachers of world!.
            </div>
          </div>
          <div
            className="feature"
            style={{ flexDirection: "column", width: "45%" }}
          >
            <img src={notes} alt="notes" />
            <div className="feature_content">
              <h3>Best content</h3>
              study material prepared by the best researchers of industry.
            </div>
          </div>
          <div
            className="feature"
            style={{ flexDirection: "column", width: "45%" }}
          >
            <img src={guidance} alt="guidance" />
            <div className="feature_content">
              <h3>Interact with your mentors and peers !</h3>
              <button
                style={{ width: "250px" }}
                onClick={() => history("/progress")}
              >
                Track your progress with your personal mentor.
              </button>
            </div>
          </div>
        </section>
        <div style={{ border: "1px solid #ccc", margin: "20px 0" }}></div>
        <div className="menu">
          <h2>Explore Our courses</h2>

          <div className="grid">
            <div className="item1">
              <a href="https://youtu.be/yRpLlJmRo2w" target="_blank">
                {" "}
                <img className="grid-image" src={image1} alt={image1} />{" "}
              </a>
            </div>
            <div className="item2">
              <a href="https://youtu.be/rGx1QNdYzvs" target="_blank">
                {" "}
                <img className="grid-image" src={image2} alt={image2} />{" "}
              </a>
            </div>
            <div className="item3">
              <a
                href="https://www.youtube.com/live/Ewx1bo3Vyzg?feature=share"
                target="_blank"
              >
                {" "}
                <img className="grid-image" src={image3} alt={image3} />
              </a>
            </div>
            <div className="item4">
              <a href="https://youtu.be/JL_grPUnXzY" target="_blank">
                {" "}
                <img className="grid-image" src={image4} alt={image4} />
              </a>
            </div>
            <div className="item5">
              <a href="https://youtu.be/BrJbJIw6KhE" target="_blank">
                {" "}
                <img className="grid-image" src={image5} alt={image5} />
              </a>
            </div>
            <div className="item6">
              <a href="https://youtu.be/6cCkrYuqOdE" target="_blank">
                {" "}
                <img className="grid-image" src={image6} alt={image6} />
              </a>
            </div>
            <div className="item7">
              <a href="https://youtu.be/5ZeW8EWGcCs" target="_blank">
                {" "}
                <img className="grid-image" src={image7} alt={image7} />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <footer>
        <div className="footer_container" style={{ display: "flex" }}>
          <div className="footer_logo" style={{ flexDirection: "column" }}>
            <img src={footer} alt={footer} style={{ height: "120px" }} />
          </div>
          <div
            className="link_lists"
            style={{
              flexDirection: "column",
              marginRight: "100px",
              marginLeft: "100px",
            }}
          >
            <h3>Main Links</h3>
            <ul>
              <a
                href={"/assignment"}
                target="_blank"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                <li>submit assignment</li>
              </a>
              <a
                href={"/progress"}
                target="_blank"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                <li>track progress</li>{" "}
              </a>
              <a
                href={"/resources"}
                target="_blank"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                <li>Courses</li>
              </a>
              <a
                href="mailto:tushartaneja24@gmail.com"
                target="_blank"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                <li>Contact Us</li>
              </a>
            </ul>
          </div>
          <div
            className="link_lists"
            style={{
              flexDirection: "column",
              marginRight: "100px",
              marginLeft: "100px",
            }}
          >
            <h3>Support</h3>
            <ul>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditons</li>
            </ul>
          </div>
          <div
            className="news_letter"
            style={{
              flexDirection: "column",
              marginRight: "100px",
              marginLeft: "100px",
            }}
          >
            <h3>Support</h3>
            <input type="email" placeholder="Enter your Email..." />
            <h3>Follow Us</h3>
            <div className="icon_container" style={{ display: "flex" }}>
              <div style={{ flexDirection: "column" }}>
                <a href="https://www.facebook.com/" target="_blank">
                  <i className="fa fa-facebook"></i>
                </a>
              </div>
              <div style={{ flexDirection: "column" }}>
                <a href="https://www.twitter.com/" target="_blank">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </div>
              <div style={{ flexDirection: "column" }}>
                <a href="https://www.instagram.com/" target="_blank">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
              <div style={{ flexDirection: "column" }}>
                <a href="https://www.youtube.com/" target="_blank">
                  {" "}
                  <i className="fa fa-youtube" aria-hidden="true"></i>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
