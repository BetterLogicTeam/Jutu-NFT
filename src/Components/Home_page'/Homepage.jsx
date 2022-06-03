import React from "react";
import "./Homestyle.css";

export default function Homepage() {
  return (
    <div>
      <section class="tf-section hero-slider mt-5">
        <div class="container">
          <div class="row">
            <div class="col-xl-5 col-md-12 col-12">
              <div class="block-text pt-24">
                <h2 class="title title_home_page mb-26" data-aos="fade-up">
                  Welcome to Jutto Club{" "}
                </h2>
                <p class="desc mb-43" data-aos="fade-up">
                  An exclusive private-members club by Jutto. A private and
                  unique collection of 10000 NFT, which act as a membership for
                  the Jutto Club. We are on a mission to build a premier Web 3.0
                  brand together with our community, driven by our shared
                  passion for NFTs, gaming and the metaverse.{" "}
                </p>
              </div>
            </div>
            <div class="col-xl-7 col-md-12 col-12">
              <div class="row padding-bottom">
                <div class="col-md-4 top_bg_here col-sm-6 col-12">
                  <div class="swiper-slide">
                    <div class="item bg-2">
                      <img src="images/item-02.png" alt="Wire NFT" />
                    </div>
                  </div>
                  
                </div>
                <div class="col-md-4 top_bg_here col-sm-12 col-12">
                  <div class="swiper-slide">
                    <div class="item bg-2">
                      <img src="images/item-01.png" alt="Wire NFT" />
                    </div>
                  </div>
                </div>

                <div class="col-md-4 top_bg_here">
                  <div class="swiper-slide">
                    <div class="item bg-2">
                      <img src="images/item-04.png" alt="Wire NFT" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="row padding-bottom">
                <div class="col-md-4 top_bg_here">
                  <div class="swiper-slide">
                    <div class="item bg-2">
                      <img src="images/item-05.png" alt="Wire NFT" />
                    </div>
                  </div>
                </div>
                <div class="col-md-4 top_bg_here">
                  <div class="swiper-slide">
                    <div class="item bg-2">
                      <img src="images/item-06.png" alt="Wire NFT" />
                    </div>
                  </div>
                </div>

                <div class="col-md-4 top_bg_here">
                  <div class="swiper-slide">
                    <div class="item bg-2">
                      <img src="images/item-03.png" alt="Wire NFT" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-4 top_bg_here">
                  <div class="swiper-slide">
                    <div class="item bg-2">
                      <img src="images/item-07.png" alt="Wire NFT" />
                    </div>
                  </div>
                </div>
                <div class="col-md-4 top_bg_here">
                  <div class="swiper-slide">
                    <div class="item bg-2">
                      <img src="images/item-01.png" alt="Wire NFT" />
                    </div>
                  </div>
                </div>

                <div class="col-md-4 top_bg_here">
                  <div class="swiper-slide">
                    <div class="item bg-2">
                      <img src="images/item-04.png" alt="Wire NFT" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
