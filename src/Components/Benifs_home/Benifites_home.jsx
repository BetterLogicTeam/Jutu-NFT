import React from "react";
import "./Benifites_style.css";

export default function Benifites_home() {
  return (
    <div>
      <section class="tf-section section-speciality" id="Benefits_here">
        <div class="container">
          <div class="row">
            <div class="col-xl-5 col-md-12">
              <div class="block-text pt-128 pd-0">
                <h5
                  class="sub-title mb-10"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Our Speciality
                </h5>
                <h3
                  class="title mb-28"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  BENEFITS OF Jutto CLUB NFTs
                </h3>
                <p class="fs-21" data-aos="fade-up" data-aos-duration="1000">
                  Holders of Jutto NFTs will get exclusive membership to Jutto
                  club: a private members only club in the metaverse{" "}
                </p>
              </div>
            </div>
            <div class="col-xl-7 col-lg-12 col-md-12">
              <div class="section-speciality__box">
                <div class="box-item bg-2 mr-28" data-aos="flip-left">
                  <h3>01</h3>
                  <a href="/Collections" class="h5">
                    Own the full commercial rights
                  </a>
                  <p>
                    When you purchase a Jutto Club NFT, the art is yours,
                    whether you want to sell it or use it in advertising
                  </p>
                </div>
                <div
                  class="box-item bg-2 mt-45"
                  data-aos="flip-right"
                  data-aos-duration="1000"
                >
                  <h3>02</h3>
                  <a href="/collections" class="h5">
                    Explore the Metaverse with us
                  </a>
                  <p>
                    By joining the Jutto Club, you will have access to every
                    metaverse we enter. Plus there will be additional perks
                    within our metaverse Private members club for Jutto Club NFT
                    holders
                  </p>
                </div>
                <div class="box-item bg-2 mr-28 mt--16" data-aos="flip-left">
                  <h3>03</h3>
                  <a href="/collections" class="h5">
                    Display art in high resolution
                  </a>
                  <p>
                    All Jutto Club NFTs are available as high-resolution jpegs,
                    which allows you to print a high-quality physical copy or
                    display it on screen{" "}
                  </p>
                </div>
                <div
                  class="box-item bg-2 mt-29"
                  data-aos="flip-right"
                  data-aos-duration="1000"
                >
                  <h3>04</h3>
                  <a href="/collections" class="h5">
                    Be part of a global community
                  </a>
                  <p>
                    Make authentic connections and become a part of a global
                    community that empowers and supports each other on this
                    exciting journey to the metaverse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
