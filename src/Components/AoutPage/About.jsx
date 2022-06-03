import React from "react";
import "./About.css";
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <section class="tf-section section-about">
        <div class="container">
          <div class="row reverse flex-column-reverse flex-lg-row">
            <div class="col-xl-7 col-md-12 mt-4">
              <div class="group-image">
                <div class="left">
                  <div class="item bg-1">
                    <img src="images/item-11.png" alt="Monteno" />
                  </div>
                </div>
                <div class="right mt-4">
                  <div class="item bg-2">
                    <img src="images/item-12.png" alt="Monteno" />
                  </div>
                  <div class="item bg-3">
                    <img src="images/item-13.png" alt="Monteno" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-5 col-md-12">
              <div class="block-text pt-12">
                <h5
                  class="sub-title mb-10"
                  data-aos="fade-up"
                  data-aos-duration="1000">
                  About Us
                </h5>
                <h3
                  class="title mb-58"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Jutto CLUB– YOUR KEY TO EXPLORING METAVERSE{" "}
                </h3>
                <p
                  class="fs-21 mb-33"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Metaverse is a wide new world with endless possibilities and
                  new experiences, and our Jutto Club is the key to unlocking
                  this world.{" "}
                </p>
                <p
                  class="fs-18 line-h17 mb-41"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Jutto Club NFTs is a limited collection of unique,
                  programmatically generated NFTs hosted on the BSC blockchain.
                  Each Jutto is unique – just like you and programmatically
                  generated from over 200 possible traits, including clothing,
                  city background, expression and more.
                </p>

          
                <a
                  href="#"
                  class="btn-action style-2"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  More About Us
                </a>
       
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
