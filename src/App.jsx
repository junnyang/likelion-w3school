import React, { useState } from "react";
import "./App.css";
import "https://kit.fontawesome.com/5455b35165.js";

import styled from "styled-components";
// import "https://www.w3schools.com/w3css/4/w3.css";
// import "https://fonts.googleapis.com/css?family=Raleway";

import avrtar1 from "./assets/avatar1.png";
import avrtar2 from "./assets/avatar2.png";
import avrtar3 from "./assets/avatar3.png";
import avrtar5 from "./assets/avatar5.png";
import avrtar6 from "./assets/avatar6.png";
import region from "./assets/region.jpg";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  var mySidebar = document.getElementById("mySidebar");

  // Get the DIV with overlay effect
  var overlayBg = document.getElementById("myOverlay");

  // Toggle between showing and hiding the sidebar, and add overlay effect
  function w3_open() {
    setIsOpen(!isOpen);
  }

  // Close the sidebar with the close button
  function w3_close() {
    setIsOpen(false);
  }
  const Header_st = styled.div`
    width: 100%;
    position: fixed;
    overflow: hidden;
    color: #fff !important;
    background-color: #000 !important;
    font-size: 18px !important;
    top: 0;
    box-sizing: inherit;
    display: block;
    unicode-bidi: isolate;
    border: none;
    padding: 0;
    font-family: "Raleway", sans-serif;
    z-index: 4;
  `;

  const Header_left = styled.button`
    padding: 8px 16px;
    float: left;
    width: auto;
    border: none;
    display: block;
    outline: 0;
    vertical-align: middle;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    background-color: inherit;
    text-align: center;
    cursor: pointer;
    margin: 0;
    @media (max-width: 992px) {
      display: block;
    }
    @media (min-width: 993px) {
      display: none;
    }
  `;

  const Header_ri = styled.div`
    padding: 8px 16px;
    float: left;
    width: auto;
    border: none;
    display: block;
    outline: 0;
    border: none;
    white-space: normal;
    background-color: black;
    float: right;
    text-align: center;
    color: #f1f1f1 !important;
  `;

  const SideBar_st = styled.div`
    display: ${(props) => (props.clicked ? "block" : "none")};
    z-index: 3;
    width: 300px;
    color: #000 !important;
    background-color: #fff !important;
    animation: animateleft 0.4s;
    position: fixed !important;
    overflow: auto;
    box-sizing: inherit;
    unicode-bidi: isolate;
    font-family: "Raleway", sans-serif;
    font-size: 15px;
    line-height: 1.5;
    border: none;
    height: 100%;
    overflow: auto;
    position: fixed !important;
    padding: 0;

    @media (max-width: 992px) {
      display: none;
    }
    @media (min-width: 993px) {
      display: block;
    }
  `;

  const Low_1 = styled.div`
    content: "";
    width: 100%;
    box-sizing: inherit;
    display: block;
    unicode-bidi: isolate;
    clear: both;
    padding: 0.01em 16px;
    border: none;
    background-color: #fff;
    height: 61.3px;
  `;

  const Low_s4 = styled.div`
    float: left;
    box-sizing: inherit;
    display: block;
    unicode-bidi: isolate;
    color: #000 !important;
    font-family: "Raleway", sans-serif;
    width: 33.33333%;
    border: none;
    background-color: #fff;
    font-size: 15px;
    line-height: 1.5;
  `;

  const Low_s8 = styled.div`
    width: 66.66666%;
    float: left;
    overflow: hidden;
    display: inline-block;
    border: none;
    display: block;
    outline: 0;
    position: static;
    white-space: normal;
    font-family: "Raleway", sans-serif;
  `;

  const Barbutton = styled.a`
    white-space: normal;
    padding: 8px 16px;
    float: left;
    width: auto;
    border: none;
    display: block;
    outline: 0;
    vertical-align: middle;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    background-color: inherit;
    text-align: center;
    cursor: pointer;

    &:hover {
      color: #000 !important;
      background-color: #ccc !important;
    }
  `;

  const Low_con = styled.div`
    padding: 0.01em 16px;
    box-sizing: inherit;
    display: block;
    unicode-bidi: isolate;
    color: #000 !important;
    font-size: 15px;
    line-height: 1.5;
    content: "";
    display: table;
    clear: both;
  `;

  const Low_block = styled.div`
    width: 100%;
    min-width: 100%;
    text-align: left;
    padding: 0;
    display: block;
    border: none;
    white-space: normal;
    float: none;
    outline: 0;
  `;

  const Low_bu = styled.a`
    width: 100%;
    display: block;
    text-align: left;
    border: none;
    white-space: normal;
    float: none;
    outline: 0;
    padding: 8px 16px !important;
    vertical-align: middle;
    overflow: hidden;
    text-decoration: none;
    font-family: "Raleway", sans-serif;
    font-size: 15px;
    line-height: 1.5;
  `;

  const Low_bu_blue = styled.a`
    width: 100%;
    display: block;
    text-align: left;
    border: none;
    white-space: normal;
    float: none;
    outline: 0;
    padding: 8px 16px !important;
    vertical-align: middle;
    overflow: hidden;
    text-decoration: none;
    color: #fff !important;
    background-color: #2196f3 !important;
    font-size: 15px;
    line-height: 1.5;
  `;
  return (
    <div className="App">
      <Header_st>
        <Header_left onClick={w3_open}>
          <i class="fa fa-bars"></i>
          &nbsp;Menu
        </Header_left>
        <Header_ri>Logo</Header_ri>
      </Header_st>

      <SideBar_st>
        <br />
        <Low_1>
          <Low_s4>
            <img
              src={avrtar2}
              class="w3-circle w3-margin-right"
              style={{ width: "46px" }}
              alt="avrtar2"
            ></img>
          </Low_s4>
          <Low_s8>
            <span>
              Welcome, <strong>Mike</strong>
            </span>
            <br />
            <Barbutton>
              <i class="fa fa-envelope"></i>
            </Barbutton>
            <Barbutton>
              <i class="fa fa-user"></i>
            </Barbutton>
            <Barbutton>
              <i class="fa fa-cog"></i>
            </Barbutton>
          </Low_s8>
        </Low_1>
        <hr />

        <Low_con>
          <h5>Dashboard</h5>
        </Low_con>

        <Low_block>
          <a
            href="#"
            class="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black"
            onclick={w3_close}
            style={{ cursor: "pointer", display: "none" }}
            title="close side menu"
            id="myOverlay"
          >
            <i class="fa fa-remove fa-fw"></i>
            &nbsp; Close Menu
          </a>
          <Low_bu_blue>
            <i class="fa fa-users fa-fw"></i>
            &nbsp; Overview
          </Low_bu_blue>
          <Low_bu>
            <i class="fa fa-eye fa-fw"></i>
            &nbsp; Views
          </Low_bu>
          <Low_bu>
            <i class="fa fa-users fa-fw"></i>
            &nbsp; Traffic
          </Low_bu>
          <Low_bu>
            <i class="fa fa-bullseye fa-fw"></i>
            &nbsp; Geo
          </Low_bu>
          <Low_bu>
            <i class="fa fa-diamond fa-fw"></i>
            &nbsp; Orders
          </Low_bu>
          <Low_bu>
            <i class="fa fa-bell fa-fw"></i>
            &nbsp; News
          </Low_bu>
          <Low_bu>
            <i class="fa fa-bank fa-fw"></i>
            &nbsp; General
          </Low_bu>
          <Low_bu>
            <i class="fa fa-history fa-fw"></i>
            &nbsp; History
          </Low_bu>
          <Low_bu>
            <i class="fa fa-cog fa-fw"></i>
            &nbsp; Settings
          </Low_bu>
          <br />
          <br />
        </Low_block>
      </SideBar_st>

      <div class="w3-main" style={{ marginLeft: "300px", marginTop: "43px" }}>
        <header class="w3-container" style={{ paddingTop: "22px" }}>
          <h5>
            <b>
              <i class="fa fa-dashboard"></i>
              &nbsp; My Dashboard
            </b>
          </h5>
        </header>

        <div class="w3-row-padding w3-margin-bottom">
          <div class="w3-quarter">
            <div class="w3-container w3-red w3-padding-16">
              <div class="w3-left">
                <i class="fa fa-comment w3-xxxlarge"></i>
              </div>
              <div class="w3-right">
                <h3>52</h3>
              </div>
              <div class="w3-clear"></div>
              <h4>Messages</h4>
            </div>
          </div>
          <div class="w3-quarter">
            <div class="w3-container w3-blue w3-padding-16">
              <div class="w3-left">
                <i class="fa fa-eye w3-xxxlarge"></i>
              </div>
              <div class="w3-right">
                <h3>99</h3>
              </div>
              <div class="w3-clear"></div>
              <h4>Views</h4>
            </div>
          </div>
          <div class="w3-quarter">
            <div class="w3-container w3-teal w3-padding-16">
              <div class="w3-left">
                <i class="fa fa-share-alt w3-xxxlarge"></i>
              </div>
              <div class="w3-right">
                <h3>23</h3>
              </div>
              <div class="w3-clear"></div>
              <h4>Shares</h4>
            </div>
          </div>
          <div class="w3-quarter">
            <div class="w3-container w3-orange w3-text-white w3-padding-16">
              <div class="w3-left">
                <i class="fa fa-users w3-xxxlarge"></i>
              </div>
              <div class="w3-right">
                <h3>50</h3>
              </div>
              <div class="w3-clear"></div>
              <h4>Users</h4>
            </div>
          </div>
        </div>

        <div class="w3-panel">
          <div class="w3-row-padding" style={{ margin: "0 -16px" }}>
            <div class="w3-third">
              <h5>Regions</h5>
              <img
                src={region}
                style={{ width: "100%" }}
                alt="Google Regional Map"
              ></img>
            </div>
            <div class="w3-twothird">
              <h5>Feeds</h5>
              <table class="w3-table w3-striped w3-white">
                <tbody>
                  <tr>
                    <td>
                      <i class="fa fa-user w3-text-blue w3-large"></i>
                    </td>
                    <td>New record, over 90 views.</td>
                    <td>
                      <i>10 mins</i>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <i class="fa fa-bell w3-text-red w3-large"></i>
                    </td>
                    <td>Database error.</td>
                    <td>
                      <i>15 mins</i>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <i class="fa fa-users w3-text-yellow w3-large"></i>
                    </td>
                    <td>New record, over 40 users.</td>
                    <td>
                      <i>17 mins</i>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <i class="fa fa-comment w3-text-red w3-large"></i>
                    </td>
                    <td>New comments.</td>
                    <td>
                      <i>25 mins</i>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <i class="fa fa-bookmark w3-text-blue w3-large"></i>
                    </td>
                    <td>Check transactions.</td>
                    <td>
                      <i>28 mins</i>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <i class="fa fa-laptop w3-text-red w3-large"></i>
                    </td>
                    <td>CPU overload.</td>
                    <td>
                      <i>35 mins</i>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <i class="fa fa-share-alt w3-text-green w3-large"></i>
                    </td>
                    <td>New shares.</td>
                    <td>
                      <i>39 mins</i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <hr />
        <div class="w3-container">
          <h5>General Stats</h5>
          <p>New Visitors</p>
          <div class="w3-grey">
            <div
              class="w3-container w3-center w3-padding w3-green"
              style={{ width: "25%" }}
            >
              +25%
            </div>
          </div>

          <p>New Users</p>
          <div class="w3-grey">
            <div
              class="w3-container w3-center w3-padding w3-orange"
              style={{ width: "50%" }}
            >
              50%
            </div>
          </div>

          <p>Bounce Rate</p>
          <div class="w3-grey">
            <div
              class="w3-container w3-center w3-padding w3-red "
              style={{ width: "75%" }}
            >
              75%
            </div>
          </div>
        </div>
        <hr />

        <div class="w3-container">
          <h5>Countries</h5>
          <table class="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white">
            <tr>
              <td>United States</td>
              <td>65%</td>
            </tr>
            <tr>
              <td>UK</td>
              <td>15.7%</td>
            </tr>
            <tr>
              <td>Russia</td>
              <td>5.6%</td>
            </tr>
            <tr>
              <td>Spain</td>
              <td>2.1%</td>
            </tr>
            <tr>
              <td>India</td>
              <td>1.9%</td>
            </tr>
            <tr>
              <td>France</td>
              <td>1.5%</td>
            </tr>
          </table>
          <br />
          <button class="w3-button w3-dark-grey">
            More Countries &nbsp;<i class="fa fa-arrow-right"></i>
          </button>
        </div>
        <hr />

        <div class="w3-container">
          <h5>Recent Users</h5>
          <ul class="w3-ul w3-card-4 w3-white">
            <li class="w3-padding-16">
              <img
                src={avrtar2}
                class="w3-left w3-circle w3-margin-right"
                style={{ width: "35px" }}
                alt="avrtar2"
              ></img>
              <span class="w3-xlarge">Mike</span>
              <br />
            </li>
            <li class="w3-padding-16">
              <img
                src={avrtar5}
                class="w3-left w3-circle w3-margin-right"
                style={{ width: "35px" }}
                alt="avrtar5"
              />
              <span class="w3-xlarge">Jill</span>
              <br />
            </li>
            <li class="w3-padding-16">
              <img
                src={avrtar6}
                class="w3-left w3-circle w3-margin-right"
                style={{ width: "35px" }}
                alt="avrtar6"
              />
              <span class="w3-xlarge">Jane</span>
              <br />
            </li>
          </ul>
        </div>
        <hr />

        <div class="w3-container">
          <h5>Recent Comments</h5>
          <div class="w3-row">
            <div class="w3-col m2 text-center">
              <img
                class="w3-circle"
                src={avrtar3}
                style={{ width: "96px", height: "96px" }}
                alt="avrtar3"
              />
            </div>
            <div class="w3-col m10 w3-container">
              <h4>
                John{" "}
                <span class="w3-opacity w3-medium">Sep 29, 2014, 9:12 PM</span>
              </h4>
              <p>
                Keep up the GREAT work! I am cheering for you!! Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <br />
            </div>
          </div>

          <div class="w3-row">
            <div class="w3-col m2 text-center">
              <img
                class="w3-circle"
                src={avrtar1}
                style={{ width: "96px", height: "96px" }}
                alt="avrtar1"
              />
            </div>
            <div class="w3-col m10 w3-container">
              <h4>
                Bo{" "}
                <span class="w3-opacity w3-medium">Sep 28, 2014, 10:15 PM</span>
              </h4>
              <p>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
              <br />
            </div>
          </div>
        </div>
        <br />

        <div class="w3-container w3-dark-grey w3-padding-32">
          <div class="w3-row">
            <div class="w3-container w3-third">
              <h5 class="w3-bottombar w3-border-green">Demographic</h5>
              <p>Language</p>
              <p>Country</p>
              <p>City</p>
            </div>
            <div class="w3-container w3-third">
              <h5 class="w3-bottombar w3-border-red">System</h5>
              <p>Browser</p>
              <p>OS</p>
              <p>More</p>
            </div>
            <div class="w3-container w3-third">
              <h5 class="w3-bottombar w3-border-orange">Target</h5>
              <p>Users</p>
              <p>Active</p>
              <p>Geo</p>
              <p>Interests</p>
            </div>
          </div>
        </div>
      </div>
      <footer class="w3-container w3-padding-16 w3-light-grey">
        <h4>FOOTER</h4>
        <p>
          Powered by{" "}
          <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">
            w3.css
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
