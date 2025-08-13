"use client";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faXTwitter,
    faFacebookF,
    faLinkedinIn,
    faTelegramPlane
} from "@fortawesome/free-brands-svg-icons";
import Footer from "../components/Footer";
import { Button } from "../components/Button";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Page() {
    const partners = [
        { name: "accenture", src: "/images/partner/accenture.png" },
        { name: "adobe", src: "/images/partner/adobe.png" },
        { name: "airtel", src: "/images/partner/airtel.png" },
        { name: "allcoinbot", src: "/images/partner/allcoinbot.png" },
        { name: "antier", src: "/images/partner/antier.png" },
        { name: "apiary", src: "/images/partner/apiary.png" },
        { name: "avalanche", src: "/images/partner/avlanche.png" },
        { name: "aws", src: "/images/partner/aws.png" },
        { name: "bigwater", src: "/images/partner/bigwater.png" },
        { name: "binance", src: "/images/partner/binance.png" },
        { name: "blackrock", src: "/images/partner/blackrock.png" },
        { name: "blockchaincouncil", src: "/images/partner/blockchaincouncil.png" },
        { name: "blockpass", src: "/images/partner/blockpass.png" },
        { name: "blocktrack", src: "/images/partner/blocktrack.png" },
        { name: "brinc", src: "/images/partner/brinc.png" },
        { name: "capgemini", src: "/images/partner/capgemini.png" },
        { name: "chainana", src: "/images/partner/chainana.png" },
        { name: "circle", src: "/images/partner/circle.png" },
        { name: "citibank", src: "/images/partner/citibank.png" },
        { name: "coinbase", src: "/images/partner/coinbase.png" },
        { name: "coinc", src: "/images/partner/coinc.png" },
        { name: "coincruncher", src: "/images/partner/coincruncher.jpg" },
        { name: "coinidx", src: "/images/partner/coindcx.png" },
        { name: "coingabber", src: "/images/partner/coingabber.png" },
        { name: "coingape", src: "/images/partner/coingape.png" },
        { name: "coinstore", src: "/images/partner/coinstore.png" },
        { name: "cointelegram", src: "/images/partner/cointelegram.png" },
        { name: "cointelegraph", src: "/images/partner/cointelegraph.png" },
        { name: "comp", src: "/images/partner/comp.png" },
        { name: "cw", src: "/images/partner/cw.png" },
        { name: "cypher", src: "/images/partner/cypher.png" },
        { name: "dao", src: "/images/partner/dao.png" },
        { name: "delotte", src: "/images/partner/delotte.png" },
        { name: "denske", src: "/images/partner/denske.png" },
        { name: "deustc", src: "/images/partner/deustc.png" },
        { name: "diamante", src: "/images/partner/diamante.png" },
        { name: "diamondst", src: "/images/partner/diamondst.png" },
        { name: "difc", src: "/images/partner/difc.png" },
        { name: "droomdroom", src: "/images/partner/droomdroom.png" },
        { name: "eth", src: "/images/partner/eth.png" },
        { name: "ey", src: "/images/partner/ey.png" },
        { name: "fm", src: "/images/partner/fm.png" },
        { name: "gateio", src: "/images/partner/gateio.png" },
        { name: "genesis", src: "/images/partner/genesis.png" },
        { name: "hib", src: "/images/partner/hib.jpg" },
        { name: "hive", src: "/images/partner/hive.png" },
        { name: "hundai", src: "/images/partner/hundai.png" },
        { name: "hyperledger", src: "/images/partner/hyperledger.png" },
        { name: "ico", src: "/images/partner/ico.png" },
        { name: "ihub", src: "/images/partner/ihub.png" },
        { name: "incubate", src: "/images/partner/incubate.png" },
        { name: "infosys", src: "/images/partner/infosys.png" },
        { name: "jumbo", src: "/images/partner/jumbo.png" },
        { name: "kalp", src: "/images/partner/kalp.png" },
        { name: "kanzz", src: "/images/partner/kanzz.png" },
        { name: "koinpark", src: "/images/partner/koinpark.png" },
        { name: "kommunitas", src: "/images/partner/kommunitas.png" },
        { name: "kpmg", src: "/images/partner/kpmg.png" },
        { name: "kucoin", src: "/images/partner/kucoin.png" },
        { name: "lbank", src: "/images/partner/lbank.png" },
        { name: "maruti", src: "/images/partner/maruti.png" },
        { name: "mc2", src: "/images/partner/mc2.webp" },
        { name: "meity", src: "/images/partner/meity.png" },
        { name: "metamask", src: "/images/partner/metamask.png" },
        { name: "mexc", src: "/images/partner/mexc.png" },
        { name: "microsoft", src: "/images/partner/microsoft.png" },
        { name: "mint", src: "/images/partner/mint.png" },
        { name: "moongapte", src: "/images/partner/moongapte.svg" },
        { name: "multivers", src: "/images/partner/multivers.png" },
        { name: "natwast", src: "/images/partner/natwast.png" },
        { name: "near", src: "/images/partner/near.png" },
        { name: "newtribe", src: "/images/partner/newtribe.png" },
        { name: "okx", src: "/images/partner/okx.png" },
        { name: "oracle", src: "/images/partner/oracle.png" },
        { name: "outlook", src: "/images/partner/outlook.png" },
        { name: "partisb", src: "/images/partner/partisb.png" },
        { name: "paycio", src: "/images/partner/paycio.png" },
        { name: "pentagon", src: "/images/partner/pentagon.png" },
        { name: "polygon", src: "/images/partner/polygon.png" },
        { name: "polygonn", src: "/images/partner/polygonn.png" },
        { name: "pwc", src: "/images/partner/pwc.png" },
        { name: "quilaudits", src: "/images/partner/quilaudits.png" },
        { name: "relience", src: "/images/partner/relience.png" },
        { name: "router", src: "/images/partner/router.png" },
        { name: "razorpay", src: "/images/partner/razorpay.png" },
        { name: "samsung", src: "/images/partner/samsung.png" },
        { name: "sandboxbharatbox", src: "/images/partner/sandboxbharatbox.png" },
        { name: "securr", src: "/images/partner/securr.png" },
        { name: "siliconindia", src: "/images/partner/siliconindia.png" },
        { name: "standard", src: "/images/partner/standard.png" },
        { name: "startupindia", src: "/images/partner/startupindia.png" },
        { name: "stpi", src: "/images/partner/stpi.png" },
        { name: "swit", src: "/images/partner/swit.webp" },
        { name: "tcs", src: "/images/partner/tcs.png" },
        { name: "technoloader", src: "/images/partner/technoloader.png" },
        { name: "tetime", src: "/images/partner/tetime.png" },
        { name: "thecoinrepublic", src: "/images/partner/thecoinrepublic.png" },
        { name: "timesofindia", src: "/images/partner/timesofindia.png" },
        { name: "tmp", src: "/images/partner/tmp.png" },
        { name: "ton", src: "/images/partner/ton.png" },
        { name: "vi", src: "/images/partner/vi.png" },
        { name: "visa", src: "/images/partner/visa.png" },
        { name: "wipro", src: "/images/partner/wipro.png" },
        { name: "xdc", src: "/images/partner/xdc.png" },
        { name: "xr", src: "/images/partner/xr.png" },
        { name: "xrco", src: "/images/partner/xrco.png" },
        { name: "xvc", src: "/images/partner/xvc.png" },
        { name: "zebpay", src: "/images/partner/zebpay.png" },
        { name: "zeebu", src: "/images/partner/zeebu.png" }
    ];


    const icons = [
        { icon: faXTwitter, bg: "bg-gray-700" },
        { icon: faFacebookF, bg: "bg-blue-600" },
        { icon: faLinkedinIn, bg: "bg-blue-700" },
        { icon: faTelegramPlane, bg: "bg-sky-500" }
    ];

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: false,
        });
    }, []);

    return (
        <>
        
    <div className="absolute top-0 left-0 w-full z-[9999]">
        <Navbar bgColor="bg-transparent" color="text-white" />
    </div>

    <div className="relative bg-[url('/images/partners.jpg')] bg-cover bg-center h-[30rem]" data-aos="fade-up">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-purple-600/50 to-[#796DFF]"></div>
        <div className="relative z-10 flex justify-center items-center h-full">
            <h2 className="text-[40px] sm:text-[60px] lg:text-[90px] font-bold text-white mt-[5%]">
                PARTNER
            </h2>
        </div>
    </div>

            <section className=" py-14 -mt-[80px] " data-aos="fade-up">
                <div className=" mx-auto">
                    <div className=" flex flex-col  sm:flex-row gap-20   items-center lg:px-[7rem] py-[4rem]">
                        <div className="flex flex-wrap justify-center md:justify-between gap-4 w-full max-w-[564px] mx-auto md:mx-0">
                            <img src="./images/exhibit1.jpg" alt="Exhibit 1"
                                className="w-[80%] sm:w-[48%] md:w-[300px] h-[180px] md:h-[220px] object-cover rounded" />
                            <img src="./images/exhibit2.jpg" alt="Exhibit 2"
                                className="w-[80%] sm:w-[48%] md:w-[240px] h-[180px] md:h-[220px] object-cover rounded" />
                            <img src="./images/exhibit3.jpg" alt="Exhibit 3"
                                className="w-[80%] sm:w-[48%] md:w-[240px] h-[180px] md:h-[220px] object-cover rounded" />
                            <img src="./images/exhibit4.jpg" alt="Exhibit 4"
                                className="w-[80%] sm:w-[48%] md:w-[300px] h-[180px] md:h-[220px] object-cover rounded" />
                        </div>

                        <div className="space-y-4 sm:w-[700px]" data-aos="fade-up">
                            <p className="text-[20px] mt-8 px-8 sm:px-4">
                                Partner with the Invest Payments and Banking Forum and put your brand front and center in the world of finance and fintech innovation. Connect with industry leaders, regulators, and game-changers, and be part of the conversation that’s shaping the future of payments and banking. Let’s work together to create something impactful!
                            </p>
                            <div className="flex gap-4 sm:gap-8 flex-col sm:flex-row px-4">
                                <Button color="bg-[#E4032A]" text="Become Partner" />
                                <Button color="bg-[#20A04B]" text="Schedule a Call" />
                            </div>
                            <p className="font-bold text-[20px]  italic mt-10 mb-8 px-4">Want to get your brand noticed in the payments and banking world? Partner with the Invest Payments and Banking Forum!</p>
                            <form className="flex items-center gap-4 w-full md:w-auto px-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-transparent border-b focus:outline-none flex-1 md:w-64"
                                />
                                <Button color="bg-[#109FEB]" text="Download Brochure" />
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-event-red py-20">
                <div className="mx-auto">
                    <div className="text-center mb-12 bg-[#E4032A]">
                        <h2 className="text-4xl font-bold text-white mb-4 lg:text-7xl py-4">
                            PAST SPEAKERS
                        </h2>
                    </div>

                    <div className="w-full mx-auto py-20">
                        <div className="flex flex-wrap gap-6 px-4 justify-center">
                            {partners.map((partner, index) => (
                                <div
                                    key={index}
                                    className="h-[250px] w-[250px] flex items-center justify-center border border-gray rounded-lg bg-gray-300"
                                >
                                    <img
                                        src={partner.src}
                                        alt={partner.name}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>



                </div>
            </section>


            {/* footer */}
            <Footer />
        </>
    );
}
