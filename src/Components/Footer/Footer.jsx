import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div>

    <footer class="footer">
    <div class="container">
        <div class="row">
            <div class="footer__body">
                <img src="logo.png" alt="Wire" data-aos="fade-down" width="20%"/>
                <br/>
                <br/>
                
                <ul class="social">
                    <li data-aos="fade-up"  data-aos-duration="1000"><a target="_blank" href="https://www.facebook.com/Wireswap-102238962331272"><i class="fab fa-facebook-f"></i></a></li>
                    <li data-aos="fade-up"  data-aos-duration="1200"><a target="_blank" href="https://twitter.com/wireswap"><i class="fab fa-twitter"></i></a></li>
                    <li data-aos="fade-up"  data-aos-duration="1400"><a target="_blank" href="https://t.me/Wireswap"><i class="fab fa-telegram"></i></a></li>
                    <li data-aos="fade-up"  data-aos-duration="1600"><a target="_blank" href="https://www.reddit.com/user/Wireswap"><i class="fab fa-reddit"></i></a></li>
                </ul>
            </div>
            <div class="footer_bottom">
                <p class="fs-16">Copyright © 2022, Jutto NFT</p>
                <ul>
                    <li><a href="#">Terms & Condition</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
    
    
    </div>
  )
}
