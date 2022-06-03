import React from "react";
import "./Join_style.css";

export default function Join_Home() {
  return (
    <div>
      <section class="tf-section porfolio">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="block-text center text-center">
                <h1
                  class="heading-bg Join_Bg_text"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                >
                  <span>Join</span>
                </h1>
                <h5
                  class="sub-title sub_title_here mb-10"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Join Jutto Club
                </h5>
                <h3
                  class="title join_text mb-28"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Become a member of the exclusive
                  <br />
                  Jutto Club
                </h3>
              </div>
            </div>
          </div>
          <div class="row mt-61">
            <div class="col-md-6 responsive_top ">
              <div class="icon-box bg-2" data-aos="fade-up">
                <div class="icon">
                  <img src="images/wallet.png" alt="Wire" />
                </div>
                <div class="content">
                  <p class="fs-16 color-main">Step 01</p>
                  <a class="h5">Connect Your Wallet</a>
                  <p class="fs-18">
                    Metamask to the Jutto Club site to mint a Jutto Club NFT{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 responsive_top ">
              <div
                class="icon-box bg-2"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div class="icon">
                  <img src="images/shopping-cart.png" alt="Wire" />
                </div>
                <div class="content">
                  <p class="fs-16 color-main">Step 02</p>
                  <a class="h5">Mint your NFT</a>
                  <p class="fs-18">
                    Mint a Jutto Club NFT to become a member of the exclusive
                    Jutto Club{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 responsive_top ">
              <div class="icon-box bg-2" data-aos="fade-up">
                <div class="icon">
                  <img src="images/folder.png" alt="Wire" />
                </div>
                <div class="content">
                  <p class="fs-16 color-main">Step 03</p>
                  <a class="h5">Receive your membership</a>
                  <p class="fs-18">
                    Receive your membership in the form of Jutto Club NFT in
                    your Metamask wallet{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 responsive_top ">
              <div
                class="icon-box bg-2"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div class="icon">
                  <img src="images/money-bag.png" alt="Wire" />
                </div>
                <div class="content">
                  <p class="fs-16 color-main">Step 04</p>
                  <a class="h5">Flaunt your membership</a>
                  <p class="fs-18">
                    Use the Jutto Club NFT as your display picture on social
                    media platforms to flaunt your membership to this exclusive
                    members-only club
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
