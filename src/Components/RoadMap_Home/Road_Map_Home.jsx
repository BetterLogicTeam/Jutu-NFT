import React from "react";
import "./RoadMap_home.css";

export default function Road_Map_Home() {
  return (
    <div>
      <section class="tf-section road-map">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="block-text center">
                <h1
                  class="heading-bg road_map_bg_text"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                >
                  <span>Road Map</span>
                </h1>
                <h5
                  class="sub-title roadmap_subtitle mb-10"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Road Map
                </h5>
                <h3
                  class="title mb-28"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  The Journey of the <br /> Jutto Club{" "}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="road-map__content s1">
                <div
                  class="box-time left"
                  data-aos="fade-right"
                  data-aos-offset="300"
                >
                  <span data-aos="zoom-in" data-aos-offset="300">
                    <i class="fa fa-check"></i>
                  </span>

                  <h5 class="title mb-20">Launch Jutto Club NFTs</h5>
                  <p class="fs-18">
                    Launching a collection of 10000 unique NFTs which act as a
                    membership for the Jutto Club
                  </p>
                </div>
                <div
                  class="box-time right mt-223"
                  data-aos="fade-up"
                  data-aos-offset="300"
                >
                  <span data-aos="zoom-in" data-aos-offset="300">
                    <i class="fa fa-check"></i>
                  </span>

                  <h5 class="title mb-20">Jutto Club Game</h5>
                  <p class="fs-18">
                    Jutto club will launch a Jutto Club game, so that the
                    holders can play anywhere they go{" "}
                  </p>
                </div>
                <div
                  class="box-time left mt--23"
                  data-aos="fade-right"
                  data-aos-offset="300"
                >
                  <span data-aos="zoom-in" data-aos-offset="300">
                    <i class="fa fa-circle"></i>
                  </span>

                  <h5 class="title mb-20">Buy Land in Metaverse </h5>
                  <p class="fs-18">
                    Jutto Club will go to the metaverse as the Jutto Club buys
                    land in the metaverse to build its private members only club{" "}
                  </p>
                </div>
                <div
                  class="box-time right mt-200"
                  data-aos="fade-up"
                  data-aos-offset="300"
                >
                  <span data-aos="zoom-in" data-aos-offset="300">
                    <i class="fa fa-angle-down color2"></i>
                  </span>

                  <h5 class="title mb-20">Mini-Jutto collection</h5>
                  <p class="fs-18">
                    The new exclusive NFT collection will be created benefiting
                    the Jutto Club members{" "}
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
