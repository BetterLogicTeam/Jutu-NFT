import React, { useState, useEffect } from 'react'
import './Mint.css'
import { loadWeb3, } from '../../apis/api';
import { wireNftContractAbi, wireNftContractAddress } from '../../utilies/constant';
import { busdNftTokenAddress, busdNftTokenAbi } from '../../utilies/constant'
import { wireTokenAddress, wireTokenAbi } from '../../utilies/constant'
import { toast } from 'react-toastify';
import Web3 from 'web3';


export default function Mint() {
    let [value, setValue] = useState(1)
    let [point, setPoint] = useState(0);
    let [mintPriceBnb, setMintPriceBnb] = useState(0);
    let [mintPriceBUSD, setMintPriceBUSD] = useState(0);
    let [mintPriceWire, setmintPriceWire] = useState(0);
    let [btnOne, setButtonOne] = useState("Mint With BNB");
    let [btnTwo, setButtonTwo] = useState("Mint With JTO");
    let [btnThree, setButtonThree] = useState("Mint With Busd")
    const increaseValue = () => {
        if (value < 5) {
            setValue(++value)
            console.log("setValue", value)
        }

    }
    const decreaseValue = () => {
        if (value > 1) {
            setValue(--value)
            console.log("setValue", value)
        }

    }
    const myMintBNB = async () => {
        let acc = await loadWeb3();
        // console.log("ACC=",acc)
        if (acc == "No Wallet") {
            toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to test net")
        } else {
            try {
                setButtonOne("Please Wait While Processing")
                console.log("mintFor BNB");
                const web3 = window.web3;
                let nftContractOf = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);
                let maxSupply = await nftContractOf.methods.maxsupply().call();
                let ttlSupply = await nftContractOf.methods.totalSupply().call();
                let paused = await nftContractOf.methods.paused().call();
                let maxLimitprTransaction = await nftContractOf.methods.MaxLimitPerTransaction().call();
                let mintingbnbPrice = await nftContractOf.methods.MinitngPricein_MATIC().call()
                console.log("jjjjj", mintingbnbPrice);
                mintingbnbPrice = web3.utils.fromWei(mintingbnbPrice);
                mintingbnbPrice = parseFloat(mintingbnbPrice)
                setMintPriceBnb(mintingbnbPrice)
                let totalMintingPriceBNB = value * mintingbnbPrice
                console.log("maxSupply", maxSupply);
                console.log("ttlSupply", maxLimitprTransaction);

                console.log("mintingbnbPrice", mintingbnbPrice);

                let llisted_check = await nftContractOf.methods.iswhitelist(acc).call()
                console.log("iswhitelist", llisted_check);



                if (llisted_check == 'true') {
                    if (parseInt(ttlSupply) < parseInt(maxSupply)) {
                        if (paused == false) {
                            if (value < parseInt(maxLimitprTransaction)) {
                                console.log("Minting Value= ", value);
                                console.log("Minting totalMintingPriceBNB= ", totalMintingPriceBNB);

                                totalMintingPriceBNB = web3.utils.toWei(totalMintingPriceBNB.toString())
                                await nftContractOf.methods.mint_with_MATIC(value).send({
                                    from: acc,
                                    value: totalMintingPriceBNB.toString()

                                })
                                toast.success("Transaction Confirmed")
                                setButtonOne("Mint With BNB")

                            } else {
                                toast.error("No of Minting is Greater than maximum limit Per Transaction")
                                setButtonOne("Mint With BNB")

                            }
                        } else {
                            toast.error("Paused is False")
                            setButtonOne("Mint With BNB")

                        }

                    } else {
                        toast.error("Max Supply is Greater than total Supply")
                        setButtonOne("Mint With BNB")

                    }
                }
                else {
                    let BusdPrice = await nftContractOf.methods.WhitelistMintingPricein_MATIC().call();

                    await nftContractOf.methods.mint_with_MATIC(value).send({
                        from: acc,
                        value: value * BusdPrice.toString()
                    })


                    toast.success("Transaction Confirmed")
                    setButtonOne("Mint With BNB")


                }




            } catch (e) {
                console.log("Error while minting ", e)
                toast.error("Transaction failed")
                setButtonOne("Mint With BNB")

            }

        }
    }
    const myMintWire = async () => {
        let acc = await loadWeb3();
        // console.log("ACC=",acc)
        if (acc == "No Wallet") {
            toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to test net")
        } else {
            try {
                setButtonTwo("Please Wait While Processing")
                console.log("mintFor Wire");
                const web3 = window.web3;
                let nftContractOf = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);
                let wireContractOf = new web3.eth.Contract(wireTokenAbi, wireTokenAddress);
                let userBusdBalance = await wireContractOf.methods.balanceOf(acc).call();
                userBusdBalance = web3.utils.fromWei(userBusdBalance)
                let maxSupply = await nftContractOf.methods.maxsupply().call();
                let ttlSupply = await nftContractOf.methods.totalSupply().call();
                let paused = await nftContractOf.methods.paused().call();
                let maxLimitprTransaction = await nftContractOf.methods.MaxLimitPerTransaction().call();
                let mintingWirePrice = await nftContractOf.methods.MinitngPricein_MMX().call()
                mintingWirePrice = web3.utils.fromWei(mintingWirePrice);
                mintingWirePrice = parseFloat(mintingWirePrice)
                setmintPriceWire(mintingWirePrice);
                let totalMintingPriceWire = value * mintingWirePrice
                console.log("maxSupply", maxSupply);
                console.log("ttlSupply", maxLimitprTransaction);

                console.log("mintingWirePrice", mintingWirePrice);
                let llisted_check = await nftContractOf.methods.iswhitelist(acc).call()
                console.log("iswhitelist", llisted_check);


                if (llisted_check == 'true') {

                    if (parseInt(ttlSupply) < parseInt(maxSupply)) {
                        if (paused == false) {
                            if (value < parseInt(maxLimitprTransaction)) {
                                if (parseFloat(userBusdBalance) >= totalMintingPriceWire) {
                                    console.log("Minting Value= ", value);
                                    console.log("Minting totalMintingPriceWire= ", totalMintingPriceWire);

                                    totalMintingPriceWire = web3.utils.toWei(totalMintingPriceWire.toString())
                                    await wireContractOf.methods.approve(wireNftContractAddress, totalMintingPriceWire).send({
                                        from: acc
                                    })
                                    toast.success("Transaction Confirmed")
                                    setButtonTwo("Please Wait for Second Confirmation")
                                    await nftContractOf.methods.mint_with_MMX(value, totalMintingPriceWire.toString()).send({
                                        from: acc,
                                    })
                                    toast.success("Transaction Succefful")
                                    setButtonTwo("Mint With JTO")

                                } else {
                                    toast.error("Out Of Balance")
                                    setButtonTwo("Mint With JTO")

                                }

                            } else {
                                toast.error("No of Minting is Greater than maximum limit Per Transaction")
                                setButtonTwo("Mint With JTO")

                            }
                        } else {
                            toast.error("Paused is False")
                            setButtonTwo("Mint With JTO")

                        }

                    } else {
                        toast.error("Max Supply is Greater than total Supply")
                        setButtonTwo("Mint With JTO")

                    }

                }
                else {

                    let BusdPrice = await nftContractOf.methods.WhitelistMinitngPricein_MMX().call();
                    totalMintingPriceWire = web3.utils.toWei(totalMintingPriceWire.toString())
                    await wireContractOf.methods.approve(wireNftContractAddress, totalMintingPriceWire).send({
                        from: acc
                    })

                    let a = web3.utils.fromWei(BusdPrice);
                    a = parseFloat(a)
                    let b = a * value;
                    let c = web3.utils.toWei(b.toString());

                    await nftContractOf.methods.mint_with_MMX(value, c).send({
                        from: acc,
                    })


                    setButtonTwo("Mint With JTO")


                }


            } catch (e) {
                console.log("Error while minting ", e)
                toast.error("Transaction failed")
                setButtonTwo("Mint With JTO")

            }

        }
    }
    const myMintBUSD = async () => {
        let acc = await loadWeb3();
        // console.log("ACC=",acc)
        if (acc == "No Wallet") {
            toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to test net")
        } else {
            try {
                setButtonThree("Please Wait While Processing")
                console.log("mintFor BUSD");
                const web3 = window.web3;
                let nftContractOf = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);
                let busdContractOf = new web3.eth.Contract(busdNftTokenAbi, busdNftTokenAddress);
                // let userBusdBalance = await busdContractOf.methods.balanceOf(acc).call();
                // console.log("maxSupply",busdContractOf);

                // userBusdBalance = web3.utils.fromWei(userBusdBalance)
                let maxSupply = await nftContractOf.methods.maxsupply().call();
                let ttlSupply = await nftContractOf.methods.totalSupply().call();
                let paused = await nftContractOf.methods.paused().call();
                let maxLimitprTransaction = await nftContractOf.methods.MaxLimitPerTransaction().call();
                let mintingBusdPrice = await nftContractOf.methods.MinitngPricein_BUSD().call()
                mintingBusdPrice = web3.utils.fromWei(mintingBusdPrice);
                mintingBusdPrice = parseFloat(mintingBusdPrice)
                setMintPriceBUSD(mintingBusdPrice)
                let totalMintingPriceBusd = value * mintingBusdPrice
                console.log("maxSupply", maxSupply);
                console.log("ttlSupply", maxLimitprTransaction);

                console.log("mintingBusdPrice", mintingBusdPrice);

                let llisted_check = await nftContractOf.methods.iswhitelist(acc).call()
                console.log("iswhitelist", llisted_check);


                if (llisted_check == 'true') {


                    if (parseInt(ttlSupply) < parseInt(maxSupply)) {
                        if (paused == false) {
                            if (value < parseInt(maxLimitprTransaction)) {
                                // if (parseFloat(userBusdBalance) >= totalMintingPriceBusd) {
                                console.log("Minting Value= ", value);
                                console.log("Minting totalMintingPriceWire= ", totalMintingPriceBusd);

                                totalMintingPriceBusd = web3.utils.toWei(totalMintingPriceBusd.toString())
                                await busdContractOf.methods.approve(wireNftContractAddress, totalMintingPriceBusd).send({
                                    from: acc
                                })
                                setButtonThree("Please Wait For Second Confirmation")
                                toast.success("Transaction Confirmed")
                                await nftContractOf.methods.mint_with_BUSD(value, totalMintingPriceBusd.toString()).send({
                                    from: acc,
                                })
                                setButtonThree("Mint With Busd")
                                toast.success("Transaction Succefful")

                                // } else {
                                //     toast.error("Out Of Balance")
                                //     setButtonThree("Mint With Busd")

                                // }

                            } else {
                                toast.error("No of Minting is Greater than maximum limit Per Transaction")
                                setButtonThree("Mint With Busd")

                            }
                        } else {
                            toast.error("Paused is False")
                            setButtonThree("Mint With Busd")

                        }

                    } else {
                        toast.error("Max Supply is Greater than total Supply")
                        setButtonThree("Mint With Busd")

                    }
                }
                else {
                    let BusdPrice = await nftContractOf.methods.WhitelistMinitngPricein_BUSD().call();
                    totalMintingPriceBusd = web3.utils.toWei(totalMintingPriceBusd.toString())
                    await busdContractOf.methods.approve(wireNftContractAddress, totalMintingPriceBusd).send({
                        from: acc
                    })
                    let a = web3.utils.fromWei(BusdPrice);
                    a = parseFloat(a)
                    let b = a * value;
                    let c = web3.utils.toWei(b.toString());
                    await nftContractOf.methods.mint_with_BUSD(value, c).send({
                        from: acc,
                    })

                    setButtonThree("Mint With Busd")


                }


            } catch (e) {
                console.log("Error while minting ", e)
                toast.error("Transaction failed BUSD")
                setButtonThree("Mint With Busd")

            }

        }
    }

    const getMydata = async () => {
        let acc = await loadWeb3();
        // console.log("ACC=",acc)
        if (acc == "No Wallet") {
            toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to test net")
        } else {

            try {
                console.log("mintFor BUSD");
                const web3 = window.web3;
                let nftContractOf = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);
                let mintingBusdPrice = await nftContractOf.methods.MinitngPricein_BUSD().call()
                mintingBusdPrice = web3.utils.fromWei(mintingBusdPrice);
                mintingBusdPrice = parseFloat(mintingBusdPrice)
                setMintPriceBUSD(mintingBusdPrice)

                let mintingWirePrice = await nftContractOf.methods.MinitngPricein_MMX().call()
                mintingWirePrice = web3.utils.fromWei(mintingWirePrice);
                mintingWirePrice = parseFloat(mintingWirePrice)
                setmintPriceWire(mintingWirePrice);

                let mintingbnbPrice = await nftContractOf.methods.MinitngPricein_MATIC().call()
                mintingbnbPrice = web3.utils.fromWei(mintingbnbPrice);
                mintingbnbPrice = parseFloat(mintingbnbPrice)
                setMintPriceBnb(mintingbnbPrice)
            } catch (e) {
                console.log("Error while getting minting Price");
            }
        }
    }


    useEffect(() => {
        setInterval(() => {
            getMydata();

        }, 10000);
        getMydata();
    }, [])

    return (
        <div>
            <section class="tf-section page-title">
                <div class="container">
                    <div class="col-md-12">
                        <div class="page-title__body rm">
                            <div class="block-text pt-12">
                                <h2 class="sub-title mb-20">Mint</h2>
                                <p class="fs-24 mb-33" >Mint NFTs here </p>
                            </div>
                            <img src="images/group-ntf-05.png" alt="Wire Nft" />
                        </div>
                    </div>
                </div>
            </section>


            <div class="">
                <div class="overlay"></div>

                <div class="container bghere">
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-12 col-11 Stakeboxs pt-4 pb-4">

                            <div class="row pt-4 pb-4 d-flex justify-content-center ">

                                <div class="col-md-6 d-flex justify-content-center align-items-center mt-5 ">

                                    <div class="item2 bg-112 mt-5"><img src="images/item-11.png" alt="Wire NFT" width="100%" /></div>

                                </div>
                                <div class=" col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-center">

                                    {/*<div class="d-flex flex-row pt-lg-5 pt-3">
                                <button id="sub" onclick={()=>decreaseValue()} >-</button>
                                <input type="text " readonly="" value={value} id="qtyBox"/>
                                <button id="add" onclick={()=>increaseValue()} >+</button>
  </div>*/}

                                    <div className='d-flex flex-row pt-lg-5 pt-3'>
                                        <a style={{ cursor: "pointer" }}><img onClick={() => decreaseValue()} src="https://i.ibb.co/FswxxGJ/Group-187.png" width="60px" /></a>
                                        <div className='mintboxsss mt-1 ms-4'>{value}</div>
                                        <a className='ms-4' style={{ cursor: "pointer" }}><img onClick={() => increaseValue()} src="https://i.ibb.co/ZGpn9P7/Group-188.png" width="60px" /></a>
                                    </div>
                                    <div class="btnallhere">

                                        <div className='d-flex justify-content-center align-items-center mt-lg-5 mt-3'>
                                            <button onClick={() => myMintBNB()} className='btn mintbtn firstbtn ms-4 '>{btnOne}</button>
                                            <p className='stakepageP text-white ms-4 mt-2 fs-5 fw-3'>Price : {mintPriceBnb} BNB</p>
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center mt-lg-5 mt-3'>
                                            <button onClick={() => myMintWire()} className='btn mintbtn '>{btnTwo}</button>
                                            <p className='stakepageP text-white ms-4 mt-2 fs-5 fw-3'>Price :{mintPriceWire} JTO</p>

                                        </div>
                                        <div className='d-flex justify-content-center align-items-center mt-lg-5 mt-3'>
                                            <button onClick={() => myMintBUSD()} className='btn mintbtn firstbtn ms-4'>{btnThree}</button>
                                            <p className='stakepageP text-white ms-4 mt-2 fs-5 fw-3'>Price : {mintPriceBUSD} BUSD</p>

                                        </div>

                                    </div>



                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}
