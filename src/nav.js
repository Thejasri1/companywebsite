/** @format */
import "./App.css";
import { useState } from "react";
import Home from "./Home";
import Solutions from "./Solutions";
import About from "./About";
import Contact from "./Contact";

const Navbar = () => {
  let [displayPage, setDisplayPage] = useState("home");
  const displayHomepage = (selectedPage) => {
    if (selectedPage === "home") {
      setDisplayPage("home");
    }
    if (selectedPage === "solutions") {
      setDisplayPage("solutions");
    }
    if (selectedPage === "about") {
      setDisplayPage("about");
    }
    if (selectedPage === "contact") {
      setDisplayPage("contact");
    }
  };
  const logoImg = "/images/ccg.jpg";
  return (
    <div>
      <div class="navContainer">
        <div style={{ display: "flex" }}>
          <img src={logoImg} height="100" width="100" class="logo" />
          <div>
            <h1>CCG</h1>
            <b>
              <q>Cyberchain Guard </q>
            </b>
          </div>
        </div>
        <hr />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
            <small class="px-2" onClick={() => displayHomepage("home")}>
              Home
            </small>
            <small class="px-2" onClick={() => displayHomepage("solutions")}>
              Solutions
            </small>
            <small class="px-2" onClick={() => displayHomepage("about")}>
              About
            </small>
            <small class="px-2" onClick={() => displayHomepage("contact")}>
              Contact
            </small>
          </div>
          <div>
            <small>Cyberchain guard@gmail.com</small>
          </div>
        </div>
      </div>
      <div>
        {displayPage === "solutions" ? (
          <Solutions />
        ) : displayPage === "about" ? (
          <About />
        ) : displayPage === "contact" ? (
          <Contact />
        ) : (
          <Home />
        )}
      </div>
      <hr />
      <div class="px-5">
        <p>Follow</p>
        <img src="https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_30,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Twitter.png" />
      </div>
      <div class="footer">
        <small class="px-5"> ©2019 by Cyberchain Guard.</small>
      </div>
      <div style={{ display: "flex" }}>
        <div class="letsChartContainer">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{ width: "200px", padding: "10px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              style={{
                borderRadius: "0px",
                fill: "rgb(251, 251, 251)",
                width: "26px",
                height: "26px",
                flexShrink: 0,
              }}
            >
              <path
                d="M16 2C8.28 2 2 7.8 2 14.93a12.144 12.144 0 001.696 6.15l-1.668 7.51A1.16 1.16 0 003.63 29.9l6.914-3.072A14.835 14.835 0 0016 27.861c7.72 0 14-5.8 14-12.93S23.72 2 16 2zm4.508 16.32h-9.016a1.16 1.16 0 010-2.32h9.016a1.16 1.16 0 010 2.32zm0-4.638h-9.016a1.16 1.16 0 010-2.318h9.016a1.16 1.16 0 110 2.318z"
                fill="currentColor"
                fill-rule="nonzero"
              ></path>
            </svg>
            Let's Chart
          </button>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" style={{ width: "400px" }}>
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                CCG
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              class="modal-body"
              style={{ backgroundColor: "grey", height: "400px" }}
            ></div>
            <div class="modal-footer">
              <input type="text" placeholder="type your message here" />
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                width="16px"
                height="16px"
              >
                <path d="M10,0a10,10,0,1,0,9.85,8.26A10,10,0,0,0,10,0Zm0,19A9,9,0,1,1,18.87,8.44,9.11,9.11,0,0,1,19,10,9,9,0,0,1,10,19Zm4.23-6.88a4.5,4.5,0,0,1-8.72,0l1-.25a3.5,3.5,0,0,0,6.78,0ZM8,8A1,1,0,1,1,7,7,1,1,0,0,1,8,8Zm6,0a1,1,0,1,1-1-1A1,1,0,0,1,14,8Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
