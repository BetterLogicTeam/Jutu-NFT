import React, { useEffect, useState } from 'react'
import './Collection.css'

import { loadWeb3 } from '../../apis/api';
import { wireNftContractAddress, wireNftContractAbi } from "../../utilies/constant"

import axios from 'axios';
export default function Collection() {
    let [btnTxt, setBtTxt] = useState("Connect");
    let [imageArray, setImageArray] = useState([]);
    let [initialLimit, setInitialLimit] = useState(0);
    let [finalLimit, setFinalLimit] = useState(12)
    let [mywalletLength, setMyWalletLength] = useState();
    let [pageNumber, setPageNumber] = useState(1)
    let [totalPages, setTotalPages] = useState(1)

    const getAccount = async () => {
        let acc = await loadWeb3();
        console.log("ACC=", acc)
        if (acc == "No Wallet") {
            setBtTxt("No Wallet")
        }
        else if (acc == "Wrong Network") {
            setBtTxt("Wrong Network")
        } else {
            let myAcc = acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);
            setBtTxt(myAcc);

        }
    }

    const loadMore = () => {

        let a = finalLimit + 6
        if (a >= mywalletLength) {
            setInitialLimit(initialLimit + 6)
            if (pageNumber < totalPages) {

                setPageNumber(pageNumber + 1)
            }
            console.log("Loading More Up");
            setFinalLimit(mywalletLength)
        } else {
            console.log("Loading More");
            if (pageNumber < totalPages) {

                setPageNumber(pageNumber + 1)
            }
            setInitialLimit(initialLimit + 6);
            setFinalLimit(finalLimit + 6)
        }
    }

    const loadLess = () => {
        let b = finalLimit - 6

        if (b <= 6) {

            setFinalLimit(6);
            setInitialLimit(0);
            if (pageNumber > 1) {
                setPageNumber(pageNumber - 1)
            }
        } else {
            setInitialLimit(initialLimit - 6);
            setPageNumber(pageNumber - 1)
            setFinalLimit(finalLimit - 6)

        }
    }
    const allImagesNfts = async () => {
        let acc = await loadWeb3();
        if (acc == "No Wallet") {
            console.log("wallet");
            setBtTxt("Connect Wallet")
        }
        else if (acc == "Wrong Network") {
            setBtTxt("Wrong Network")
        } else if (acc == "Connect Wallet") {
            console.log("Connect Wallet");
        }
        else {
            const web3 = window.web3;
            let nftContractOf = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);
            let simplleArray = [];
            let walletOfOwner = await nftContractOf.methods.walletOfOwner(acc).call()
            let walletLength = walletOfOwner.length
            setMyWalletLength(walletLength)
            console.log("walletOfOwner", walletOfOwner);
            let ttlPage = parseInt(walletLength) / 6;
            ttlPage = Math.ceil(ttlPage);
            setTotalPages(ttlPage)
            console.log("Total Pages", ttlPage);
            if (parseInt(walletLength) > 0) {
                {
                    let myImgArry = []
                    let myNameDate = []
                    for (let i = 0; i < walletLength; i++) {
                        try {
                            let res = await axios.get(`https://gateway.pinata.cloud/ipfs/QmVfeNmNzjMyWcwnVMfdLLkNGswZnsqQ8ut7zDd1aD8rCY/${walletOfOwner[i]}.png`)
                            // let res = await axios.get(`/config/${walletOfOwner[i]}.json`)
                            let imageUrl = res.data.image;
                            let dna = res.data.dna
                            simplleArray = [...simplleArray, { imageUrl: imageUrl, num: dna }]
                            setImageArray(simplleArray);
                            console.log("Getting Response", res.data.image);
                        } catch (e) {
                            console.log("Error while Fetching Api", e)
                        }
                    }
                }
            }
        }
    }


    useEffect(() => {
        allImagesNfts()
        getAccount();
       
    }, []);
    return (
        <div>

            <section class="tf-section page-title">
                <div class="container">
                    <div class="col-md-12">
                        <div class="page-title__body rm">
                            <div class="block-text pt-12">
                                <h2 class="sub-title mb-20">NFT</h2>
                                <p class="fs-24 mb-33" >An exclusive private-members club by Jutto. </p>
                            </div>
                            <img class="s2" src="images/group-ntf-01.png " alt="Wire Nft" />
                        </div>
                    </div>
                </div>
            </section>

            <section class="tf-section montono">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="block-text center">

                                <h5 class="sub-title collection_subtitle_subline mb-10" data-aos="fade-up" data-aos-duration="1000">NFT Portfolio Collections</h5>
                                <h3 class="title mb-28" data-aos="fade-up" data-aos-duration="1000"> NFT Collections<br />  in your Wallet</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row mt-52">
                        
                    {
                        imageArray.map((items,idex)=>{
                            return(
                                <div class="col-xl-4 col-md-6 fl-item">
                            <div class="image-box" data-aos="fade-up" data-aos-duration="1000">
                                <img src={items.imageUrl} alt="Wire Nft" />
                                <div class="image-box__title">
                                    <a href="collections.html" class="h6">Jutto Nft item 1</a>
                                </div>
                            </div>
                        </div>
                            )
                        })
                    }
                    
                    

                    </div>
                </div>


            </section>
        </div>
    )
}
