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
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Page() {

// const speakers = [
//   { name: "adam", title: "", image: "/images/pastspeaker/adam.png" },
//   { name: "aishwrya", title: "", image: "/images/pastspeaker/aishwrya.png" },
//   { name: "ajeet", title: "", image: "/images/pastspeaker/ajeet.png" },
//   { name: "alex", title: "", image: "/images/pastspeaker/alex.png" },
//   { name: "allen", title: "", image: "/images/pastspeaker/allen.png" },
//   { name: "amar", title: "", image: "/images/pastspeaker/amar.png" },
//   { name: "amit", title: "", image: "/images/pastspeaker/amit.png" },
//   { name: "amitp", title: "", image: "/images/pastspeaker/amitp.png" },
//   { name: "amitraj", title: "", image: "/images/pastspeaker/amitraj.png" },
//   { name: "amitsaluja", title: "", image: "/images/pastspeaker/amitsaluja.png" },
//   { name: "amitthaker", title: "", image: "/images/pastspeaker/amitthaker.png" },
//   { name: "anchit", title: "", image: "/images/pastspeaker/anchit.png" },
//   { name: "anuj", title: "", image: "/images/pastspeaker/anuj.png" },
//   { name: "anupam", title: "", image: "/images/pastspeaker/anupam.png" },
//   { name: "anurag", title: "", image: "/images/pastspeaker/anurag.png" },
//   { name: "arvind", title: "", image: "/images/pastspeaker/arvind.png" },
//   { name: "ashima", title: "", image: "/images/pastspeaker/ashima.png" },
//   { name: "ashish", title: "", image: "/images/pastspeaker/ashish.png" },
//   { name: "ashishsin", title: "", image: "/images/pastspeaker/ashishsin.png" },
//   { name: "ashok", title: "", image: "/images/pastspeaker/ashok.png" },
//   { name: "auther", title: "", image: "/images/pastspeaker/aurther.png" },
//   { name: "bibin", title: "", image: "/images/pastspeaker/bibin.png" },
//   { name: "bilai", title: "", image: "/images/pastspeaker/bilai.png" },
//   { name: "biplap", title: "", image: "/images/pastspeaker/biplap.png" },
//   { name: "brenton", title: "", image: "/images/pastspeaker/brenton.png" },
//   { name: "brian", title: "", image: "/images/pastspeaker/brian.png" },
//   { name: "chandrasheker", title: "", image: "/images/pastspeaker/chandrasheker.png" },
//   { name: "charles", title: "", image: "/images/pastspeaker/charles.png" },
//   { name: "chirag", title: "", image: "/images/pastspeaker/chirag.png" },
//   { name: "chiragmeh", title: "", image: "/images/pastspeaker/chiragmeh.png" },
//   { name: "dariia", title: "", image: "/images/pastspeaker/dariia.png" },
//   { name: "dennis", title: "", image: "/images/pastspeaker/dennis.png" },
//   { name: "devid", title: "", image: "/images/pastspeaker/devid.png" },
//   { name: "devika", title: "", image: "/images/pastspeaker/devika.png" },
//   { name: "dhanraj", title: "", image: "/images/pastspeaker/dhanraj.png" },
//   { name: "diksha", title: "", image: "/images/pastspeaker/diksha.png" },
//   { name: "dileep", title: "", image: "/images/pastspeaker/dileep.png" },
//   { name: "dilip", title: "", image: "/images/pastspeaker/dilip.png" },
//   { name: "dinesh", title: "", image: "/images/pastspeaker/dinesh.png" },
//   { name: "dirik", title: "", image: "/images/pastspeaker/dirik.png" },
//   { name: "drsatya", title: "", image: "/images/pastspeaker/drsatya.png" },
//   { name: "ernesto", title: "", image: "/images/pastspeaker/ernesto.png" },
//   { name: "evan", title: "", image: "/images/pastspeaker/evan.png" },
//   { name: "garimasingh", title: "", image: "/images/pastspeaker/garimasingh.png" },
//   { name: "golok", title: "", image: "/images/pastspeaker/golok.png" },
//   { name: "habeeb", title: "", image: "/images/pastspeaker/habeeb.png" },
//   { name: "indrajeet", title: "", image: "/images/pastspeaker/indrajeet.png" },
//   { name: "irene", title: "", image: "/images/pastspeaker/irene.png" },
//   { name: "ishan", title: "", image: "/images/pastspeaker/ishan.png" },
//   { name: "ivan", title: "", image: "/images/pastspeaker/ivan.png" },
//   { name: "ivani", title: "", image: "/images/pastspeaker/ivani.png" },
//   { name: "jake", title: "", image: "/images/pastspeaker/jake.png" },
//   { name: "jimi", title: "", image: "/images/pastspeaker/jimi.png" },
//   { name: "joseph", title: "", image: "/images/pastspeaker/joseph.png" },
//   { name: "josh", title: "", image: "/images/pastspeaker/josh.png" },
//   { name: "kalyanjit", title: "", image: "/images/pastspeaker/kalyanjit.png" },
//   { name: "kamlesh", title: "", image: "/images/pastspeaker/kamlesh.png" },
//   { name: "karan", title: "", image: "/images/pastspeaker/karan.png" },
//   { name: "karthik", title: "", image: "/images/pastspeaker/karthik.png" },
//   { name: "karthiki", title: "", image: "/images/pastspeaker/karthiki.png" },
//   { name: "kiran", title: "", image: "/images/pastspeaker/kiran.png" },
//   { name: "kseniia", title: "", image: "/images/pastspeaker/kseniia.png" },
//   { name: "laura", title: "", image: "/images/pastspeaker/laura.png" },
//   { name: "maya", title: "", image: "/images/pastspeaker/maya.png" },
//   { name: "mayai", title: "", image: "/images/pastspeaker/mayai.png" },
//   { name: "mehul", title: "", image: "/images/pastspeaker/mehul.png" },
//   { name: "miko", title: "", image: "/images/pastspeaker/miko.png" },
//   { name: "milapsingh", title: "", image: "/images/pastspeaker/milapsingh.png" },
//   { name: "mohammad", title: "", image: "/images/pastspeaker/mohammad.png" },
//   { name: "mrkp", title: "", image: "/images/pastspeaker/mrkp.png" },
//   { name: "nagranjan", title: "", image: "/images/pastspeaker/nagranjan.png" },
//   { name: "naina", title: "", image: "/images/pastspeaker/naina.png" },
//   { name: "nawal", title: "", image: "/images/pastspeaker/nawal.png" },
//   { name: "neha", title: "", image: "/images/pastspeaker/neha.png" },
//   { name: "nitin", title: "", image: "/images/pastspeaker/nitin.png" },
//   { name: "paula", title: "", image: "/images/pastspeaker/paula.png" },
//   { name: "pramod", title: "", image: "/images/pastspeaker/pramod.png" },
//   { name: "pranav", title: "", image: "/images/pastspeaker/pranav.png" },
//   { name: "prasanna", title: "", image: "/images/pastspeaker/prasanna.png" },
//   { name: "praveen", title: "", image: "/images/pastspeaker/praveen.png" },
//   { name: "rachel", title: "", image: "/images/pastspeaker/rachel.png" },
//   { name: "rahul", title: "", image: "/images/pastspeaker/rahul.png" },
//   { name: "rajat", title: "", image: "/images/pastspeaker/rajat.png" },
//   { name: "rajatojha", title: "", image: "/images/pastspeaker/rajatojha.png" },
//   { name: "rajesh", title: "", image: "/images/pastspeaker/rajesh.png" },
//   { name: "rajkap", title: "", image: "/images/pastspeaker/rajkap.png" },
//   { name: "ramarao", title: "", image: "/images/pastspeaker/ramarao.png" },
//   { name: "reni", title: "", image: "/images/pastspeaker/reni.png" },
//   { name: "robert", title: "", image: "/images/pastspeaker/robert.png" },
//   { name: "rohit", title: "", image: "/images/pastspeaker/rohit.png" },
//   { name: "ross", title: "", image: "/images/pastspeaker/ross.png" },
//   { name: "sabest", title: "", image: "/images/pastspeaker/sabest.png" },
//   { name: "sachin", title: "", image: "/images/pastspeaker/sachin.png" },
//   { name: "sagar", title: "", image: "/images/pastspeaker/sagar.png" },
//   { name: "sandeep", title: "", image: "/images/pastspeaker/sandeep.png" },
//   { name: "sandeepsuk", title: "", image: "/images/pastspeaker/sandeepsuk.png" },
//   { name: "sashi", title: "", image: "/images/pastspeaker/sashi.png" },
//   { name: "satish", title: "", image: "/images/pastspeaker/satish.png" },
//   { name: "saurabh", title: "", image: "/images/pastspeaker/saurabh.png" },
//   { name: "senthil", title: "", image: "/images/pastspeaker/senthil.png" },
//   { name: "shanker", title: "", image: "/images/pastspeaker/shanker.png" },
//   { name: "sid", title: "", image: "/images/pastspeaker/sid.png" },
//   { name: "sohanlal", title: "", image: "/images/pastspeaker/sohanlal.png" },
//   { name: "sonny", title: "", image: "/images/pastspeaker/sonny.png" },
//   { name: "srini", title: "", image: "/images/pastspeaker/srini.png" },
//   { name: "srinivas", title: "", image: "/images/pastspeaker/srinivas.png" },
//   { name: "sukriti", title: "", image: "/images/pastspeaker/sukriti.png" },
//   { name: "sunil", title: "", image: "/images/pastspeaker/sunil.png" },
//   { name: "sunilr", title: "", image: "/images/pastspeaker/sunilr.png" },
//   { name: "sunilsharma", title: "", image: "/images/pastspeaker/sunilsharma.png" },
//   { name: "suresh", title: "", image: "/images/pastspeaker/suresh.png" },
//   { name: "suryakant", title: "", image: "/images/pastspeaker/suryakant.png" },
//   { name: "tashish", title: "", image: "/images/pastspeaker/tashish.png" },
//   { name: "tomasz", title: "", image: "/images/pastspeaker/tomasz.png" },
//   { name: "vikashvaivab", title: "", image: "/images/pastspeaker/vikashvaivab.png" },
//   { name: "vikram", title: "", image: "/images/pastspeaker/vikram.png" },
//   { name: "vinod", title: "", image: "/images/pastspeaker/vinod.png" },
//   { name: "yil", title: "", image: "/images/pastspeaker/yil.png" }
// ];
const speakers = [
  {
    name: "Evan Luthra",
    title: "General Partner, KOL Capital",
    image: "/images/pastspeaker/evan.png",
  },
  {
    name: "Cláudia Pinto",
    title:
      "Head of Sustainability Advisor, Office Sheikh Marwan Bin Mohammed Bin Rashid Al Maktoum",
    image: "/images/speaker/claudia.png",
  },
  {
    name: "Ahmad Al-Mahmood",
    title: "Strategic Planning  & Excellence Advisor",
    image: "/images/speaker/ahmad.png",
  },

  {
    name: "Ayman Alawadhi",
    title: "Group Managing Director, The Corporate Group",
    image: "/images/speaker/ayman.png",
  },
  {
    name: "Seyed Mohammed Siam Hosseini",
    title: "Founder & CEO, Maincore AI",
    image: "/images/speaker/seyed.png",
  },
  {
    name: "Dmitrii Dubkov",
    title: "Head of Growth, Neoma Ventures",
    image: "/images/speaker/dmitrii.png",
  },
  {
    name: "Sofia Kostiunina",
    title: "Managing Director, 100VP",
    image: "/images/speaker/sofia.png",
  },
  {
    name: "Nabil Arnous",
    title: "Executive Director – Commercial, RAK Digital Assets Oasis Freezone Government Authority",
    image: "/images/speaker/nabil.png",
  },
  {
    name: "Ksenia Babochkina",
    title: "Chief Business Development Officer (CBDO), AlphaBerry Capital",
    image: "/images/speaker/ksenia.png",
  },
  {
    name: "Aya",
    title: "Founder, Azintafy",
    image: "/images/speaker/aya.png",
  },
  {
    name: "Maryna Barysheva",
    title: "CEO, LKI Consulting",
    image: "/images/speaker/maryna.png",
  },
  {
    name: "Kamila Michalkiewicz",
    title: "Co-Founder and CEO, Most Capital Connections",
    image: "/images/speaker/kamila.png",
  },
  {
    name: "Amira Soliman",
    title: "CEO & Co-founder, Time Guardian",
    image: "/images/speaker/amira.png",
  },
  {
    name: "Malak Albaw",
    title: "CEO, Alba Ventures",
    image: "/images/speaker/malak.png",
  },
  {
    name: "Andra Nicolau",
    title: "Co-Founder, LYS Labs",
    image: "/images/speaker/andra.png",
  },
  {
    name: "Laura K. Inamedinova",
    title: "Chief Global Ecosystem Officer, Gate.io",
    image: "/images/pastspeaker/laura.png",
  },
  {
    name: "Evgeny Filichkin",
    title: "Managing Director, AlphaBerry Capital",
    image: "/images/speaker/evgeny.png",
  },
  {
    name: "Michael Clare",
    title: "Head of Digital Assets and Fintech Operations, Liongate Bahamas Limited",
    image: "/images/speaker/michaelc.png",
  },
  {
    name: "Dr. Wale j Daramola,",
    title: "Founder, DiFiMeta.",
    image: "/images/speaker/wale.png",
  },
  {
    name: "Armands Murnieks",
    title: "Founder & CEO | Investor | RWA Innovator",
    image: "/images/speaker/armands.png",
  },
  {
    name: "Shailesh Kunnath",
    title: "Founder, Masary Capital",
    image: "/images/speaker/shailesh.png",
  },
  {
    name: "Beka Tchulukhadze",
    title: "CEO, FU Capital",
    image: "/images/speaker/beka.png",
  },
  {
    name: "Artak Seyranyan",
    title: "Deal Flow Manager, ChainGPT Pad",
    image: "/images/speaker/artak.png",
  },
  {
    name: "Fefe Demeny",
    title: "Crypto Investor & Trader, Crypto Banter",
    image: "/images/speaker/fife.PNG",
  },
  {
    name: "Matt Cepulis",
    title: "CEO, Luvkaizen",
    image: "/images/speaker/matas.jpg",
  },
  {
    name: "Michael Nicklas",
    title: "Managing Partner, Valor Capital Group",
    image: "/images/speaker/michael.jpg",
  },
  {
    name: "Tzvi Lev",
    title: "CEO, AYA Strategic",
    image: "/images/speaker/tzvi.jpeg",
  },
  {
    name: "Mr.Sudeep Saxena",
    title: "Co Founder, Coin Gabbar",
    image: "/images/speaker/sudeep.png",
  },
  {
    name: "Ruan Botha",
    title: "Co-Founder, Provenance Compliance",
    image: "/images/speaker/ruan.jpg",
  },
  {
    name: "Ling Qing Meng",
    title: "CEO, Lucia Protocol",
    image: "/images/speaker/ling.png",
  },
  {
    name: "Cris D. Tran",
    title: "Co-founder, MoneyFi",
    image: "/images/speaker/crisd.jpg",
  },
  {
    name: "Tomas Martunas",
    title: "Unicorn Builder / AI & Web3 Investor, WhiteBridge AI / ZenCapital",
    image: "/images/speaker/tomas.jpeg",
  },
  {
    name: "Martin Wichmann",
    title: "CEO, Kvarn Capital",
    image: "/images/speaker/martin.png",
  },
  {
    name: "Silvia Mogas",
    title: "CEO & Founder, BMBWeb3 Ventures | Blockchain Marketing Boutique",
    image: "/images/speaker/silvia.jpg",
  },
  {
    name: "Gerald Chenyi",
    title: "Founder, Mobile Wallet Incorporated",
    image: "/images/speaker/gen.jpg",
  },
  {
    name: "Alisa Serebrianyk",
    title: "General Partner, Infodriver Capital",
    image: "/images/speaker/alisa.jpeg",
  },
  {
    name: "Milentina Marcus",
    title: "Romanian Community Ambassador for Sustainable Investment and Innovation",
    image: "/images/speaker/Milentina.jpg",
  },
  {
    name: "Dr. Adel ElMessiry",
    title: "Co-Founder, Lussa/AIVP/AlphaFin",
    image: "/images/speaker/adel.jpeg",
  },
  {
    name: "Wesley Russon",
    title: "COO, Outline Investment",
    image: "/images/speaker/wasley.jpeg",
  },
  {
    name: "Jeff Cafolla",
    title: "Founder, Earned Network",
    image: "/images/speaker/jeff.jpg",
  },
  {
    name: "Mariano Rubinstein",
    title: "Co-Founder & CEO, Sura Gaming | Sura Ventures",
    image: "/images/speaker/mariano.jpg",
  },
  {
    name: "Igor Bershadsky",
    title: "Co-Founder, Phron AI",
    image: "/images/speaker/igor.jpg",
  },
  {
    name: "Nadim Alain Souss",
    title: "Co-Founder, Why Protocol",
    image: "/images/speaker/nadim.jpg",
  },
  {
    name: "Animositas (Ani)",
    title: "CEO, Lizard Labs",
    image: "/images/speaker/ani.jpg",
  },
  {
    name: "Chris James Murphy",
    title: "Co-Founder, Klink Finance",
    image: "/images/speaker/chris.jpeg",
  },
  {
    name: "Jan Švach",
    title: "Portfolio Manager, Black Alpha Capital",
    image: "/images/speaker/svach.jpeg",
  },
  {
    name: "Robbie Jeo",
    title: "CEO, Kommunitas",
    image: "/images/speaker/robbbie.png",
  },
  {
    name: "Chirag Mehta",
    title: "Head Institutional Partnerships and Strategic Deals, Hedgit",
    image: "/images/pastspeaker/chiragmeh.png",
  },
  {
    name: "Mona Tiesler",
    title: "Head of Investments, tokentus VC | Venture Partner, Edge Capital",
    image: "/images/speaker/mona.jpg",
  },
  {
    name: "Benedek Orban",
    title: "Head of Ecosystem, CV VC",
    image: "/images/speaker/benedek.jpg",
  },
  {
    name: "Petro Yanytskyi",
    title: "Senior Investment Analyst, Monolith",
    image: "/images/speaker/petro.jpg",
  },
  {
    name: "Patrick Martin",
    title: "Managing Partner + Head of Strategy, EMF Family Office + Uphold.com",
    image: "/images/speaker/patrick.jpg",
  },
  {
    name: "Sasha Mai",
    title: "Co-Founder, RISE",
    image: "/images/speaker/sasha.jpg",
  },
  {
    name: "Ana Y",
    title: "COO, AlphaStack Ventures",
    image: "/images/speaker/ana.jpg",
  },
  {
    name: "Hardeep Singh Mehta",
    title: "Partner, Rosato Ventures",
    image: "/images/speaker/hardeep.jpg",
  },
  {
    name: "Joydeep Mondal",
    title: "Founder, Terra Forum | Alumni - Global Entrepreneur Programme, United Kingdom Government",
    image: "/images/speaker/joydeep.jpg",
  },
  {
    name: "Megan Nilsson",
    title: "Founder, Crypto Megan",
    image: "/images/speaker/megan.jpg",
  },
  {
    name: "Jake Lee",
    title: "Founder and CEO, Magnet",
    image: "/images/speaker/jake.png",
  },
  {
    name: "Daniel Malinovski",
    title: "Co-Founder & CEO, Simplicity Group",
    image: "/images/speaker/daniel.jpg",
  },
  {
    name: "Mariangel Garcia",
    title: "Chief Marketing Officer, Mintlayer",
    image: "/images/speaker/Mariangle.jpg",
  },
  {
    name: "Yeo Gan Peng",
    title: "CEO / Co-Founder, PeerHive",
    image: "/images/speaker/yeo.jpg",
  },
  {
    name: "Bob Vosalik",
    title: "Founder and CIO, 319 Capital",
    image: "/images/speaker/bob.jpg",
  },
  {
    name: "Vlad Svitanko",
    title: "Founder, Cryptorsy",
    image: "/images/speaker/vald.png",
  },
  {
    name: "Katherine Dowling",
    title: "General Counsel & Chief Compliance Officer, Bitwise Asset Management",
    image: "/images/speaker/kath.jpg",
  },
  {
    name: "Abhay Mishra",
    title: "Founder & CEO, Monet Work",
    image: "/images/speaker/abhay.jpg",
  },
  {
    name: "Nadine Wilke",
    title: "Co-Founder & CGO, Particula",
    image: "/images/speaker/nadine.jpg",
  },
  {
    name: "Ms. Laura Estefanía",
    title: "CEO & Founder, Conquista PR",
    image: "/images/speaker/lauraes.jpg",
  },
  {
    name: "Parker Tagtmeier",
    title: "Co-Founder and CMO, 3VO",
    image: "/images/speaker/parker.jpg",
  },
  {
    name: "Adrià Roig Bravo",
    title: "CEO & Founder, FOHLE Finance",
    image: "/images/speaker/adria.jpg",
  },
  {
    name: "Iris Meng",
    title: "Co-Founder, Investment Officer, Jadeite Family Office",
    image: "/images/speaker/iris.jpg",
  },
  {
    name: "Rupesh Pednekar",
    title: "Partner, ALTINAD Capital",
    image: "/images/speaker/rupesh.jpg",
  },
  {
    name: "Benjamin James",
    title: "Founder, 404 (Bittensor Subnet 17)",
    image: "/images/speaker/benj.jpeg",
  },
  {
    name: "Martin de Rijke",
    title: "Head of Growth, Maple Finance",
    image: "/images/speaker/martin.jpg",
  },
  {
    name: "Renee Francis",
    title: "Founder & Director, Take3",
    image: "/images/speaker/renee.jpg",
  },
  {
    name: "Gary Yang",
    title: "Founding Partner, Eureka Capital and Skysaga Capital",
    image: "/images/speaker/gary.jpg",
  },
  {
    name: "Ismael Hishon-Rezaizadeh",
    title: "Co-Founder & CEO at Lagrange",
    image: "/images/speaker/hison.webp",
  },
  {
    name: "Dr. Bassel Assaad",
    title: "Founder & CEO, Tracee",
    image: "/images/speaker/bassel.jpg",
  },
  {
    name: "John Bui",
    title: "Venture Partner, Trive Digital",
    image: "/images/speaker/john.jpg",
  },
  {
    name: "Dr. Claus Skaaning",
    title: "CEO and Co-Founder, DigiShares",
    image: "/images/speaker/digi.jpg",
  },
  {
    name: "Radoslav Poljasevic",
    title: "Director Sales",
    image: "/images/speaker/kaiko.jpg",
  },
  {
    name: "Andrew Vranjes",
    title: "Chief Revenue Officer, Blockdaemon",
    image: "/images/speaker/andrew.jpg",
  },
  {
    name: "Tiffany Chang",
    title: "Investment VP, Gate Ventures",
    image: "/images/speaker/tiffany.jpg",
  },
  {
    name: "Vignesh Keserala Raja",
    title: "Founding Partner, Amigoo Ventures",
    image: "/images/speaker/vignesh.jpg",
  },
  {
    name: "Marc Taverner",
    title: "Chief Executive Officer | Co-Founder, XEROF",
    image: "/images/speaker/marc.webp",
  },
  {
    name: "Zsófia Szathmáry",
    title: "Chief Innovation Officer, Head of Business Development, InsightX",
    image: "/images/speaker/zsof.jpg",
  },
  {
    name: "Milan Jandik",
    title: "Founder & CEO, Frictionless Network",
    image: "/images/speaker/milan.jpg",
  },
  {
    name: "Evgen Verzun",
    title: "Founder, Kaizen.Finance",
    image: "/images/speaker/evgen.jpg",
  },
  {
    name: "Faraj Abutalibov",
    title: "Co-founder & CBDO of CrossCurve by Eywa, Founder of Ace Capital & Crypto Executives",
    image: "/images/speaker/faraz.jpg",
  },
  {
    name: "Mark Magliocco",
    title: "Founder, Lexie Crypto",
    image: "/images/speaker/mark.jpg",
  },
  {
    name: "Robert Hirsch",
    title: "CEO, Continuum Protocol Co. | Founder, ZKalyx",
    image: "/images/speaker/robert.jpg",
  },
  {
    name: "Henry James",
    title: "General Partner, Rolle Capital",
    image: "/images/speaker/henry.png",
  },

  {
    name: "Josh Roizen",
    title: "Founder & CEO, The GG Company",
    image: "/images/speaker/josh.jpg",
  },
  {
    name: "Le Zhuo",
    title: "Vice President, Amber Group",
    image: "/images/speaker/le.jpg",
  },
  {
    name: "Aly Madhavji",
    title: "Managing Partner, Blockchain Founders Fund",
    image: "/images/speaker/aly.webp",
  },
  {
    name: "Gaspard Bonnot",
    title: "Founder & CEO, DIV Protocol",
    image: "/images/speaker/gaspard.jpg",
  },
  {
    name: "Alexis Sirkia",
    title: "Chairman, Yellow",
    image: "/images/speaker/alex.jpg",
  },
  {
    name: "Max Kuersteiner",
    title: "Head of BD and product, Decubate / Decubate Technologies",
    image: "/images/speaker/maxk.jpg",
  },
  {
    name: "Ashish Baphana",
    title: "Co Founder, Law Blocks",
    image: "/images/speaker/ashishbhpana.png",
  },
  {
    name: "Sadri Sali LL.M., CCAS",
    title: "Managing Partner, Sali Law Group",
    image: "/images/speaker/sadri.jpg",
  },
  {
    name: "Mantas (Matt) Jalincas",
    title: "Co-founder / CEO, Spirex.io",
    image: "/images/speaker/mantas.jpg",
  },
  {
    name: "Cole Kennelly",
    title: "Founder & CEO, Volmex Labs",
    image: "/images/speaker/cole.jpg",
  },
  {
    name: "Anastasia Lukach",
    title: "CEO, Marsbase",
    image: "/images/speaker/anast.jpg",
  },
  {
    name: "Samuel Macintyre",
    title: "CEO & Co-Founder, Zenith Labs",
    image: "/images/speaker/samuel.jpg",
  },
  {
    name: "Steve Wood",
    title: "Founder/CEO, Earnscape",
    image: "/images/speaker/steve.jpg",
  },
  {
    name: "Adrien Stern",
    title: "Founder & CEO, Reveel",
    image: "/images/speaker/adrien.jpg",
  },
  {
    name: "Andrés Felipe Fonseca Duque",
    title: "Cofounder - COO, VIIO",
    image: "/images/speaker/andres.jpg",
  },
  {
    name: "Jasvir Dhillon",
    title: "CEO & Co-founder, Penomo",
    image: "/images/speaker/jasvir.jpg",
  },
  {
    name: "Mihai Mosneanu",
    title: "Capital Markets Chief, Penomo | ex-Executive Director, JPMorgan",
    image: "/images/speaker/mahi.jpg",
  },
  {
    name: "Duncan Murray",
    title: "Co-Founder, OnTac",
    image: "/images/speaker/duncan.jpg",
  },
  {
    name: "Heston Harper",
    title: "CEO & Founder, GIGATONS",
    image: "/images/speaker/heston.jpg",
  },
  {
    name: "Illia Pashkov",
    title: "CEO, SINT",
    image: "/images/speaker/sint.jpg",
  },
  {
    name: "Akshay Aggarwal",
    title: "Founder & CEO, Blockchained India",
    image: "/images/speaker/akshay.jpg",
  },
  {
    name: "Ruchir Punjabi",
    title: "Co-founder & CEO, ReNRG",
    image: "/images/speaker/ruchir.png",
  },
  {
    name: "Krishnendu Chatterjee",
    title: "Co-founder, CEO, XTrading",
    image: "/images/speaker/ksn.jpg",
  },
  {
    name: "Michael Gord",
    title: "Co-Founder & CEO, GDA Capital",
    image: "/images/speaker/michaelgord.jpg",
  },
  {
    name: "Mikael boshian",
    title: "CEO, SFTY.AI",
    image: "/images/speaker/mich.png",
  },
  {
    name: "Nawal Kishor",
    title: "Founder, Bepay",
    image: "/images/pastspeaker/nawal.png",
  },
  {
    name: "Nathaniel",
    title: "Co-founder & CEO, Manifest",
    image: "/images/speaker/natha.jpg",
  },
  {
    name: "Sandeep Nailwal",
    title: "Co-Founder, Polygon Labs | Founder, Blockchain for Impact (BFI)",
    image: "/images/pastspeaker/sandeep.png",
  },
  {
    name: "Leena Khalil",
    title: "Partner, Key Capital",
    image: "/images/speaker/leena.png",
  },
  {
    name: "Aneri Merchant",
    title: "Investment Manager, XVC Tech",
    image: "/images/speaker/aneri.png",
  },
  {
    name: "Ulviyya Ahmadova",
    title: "Head of Business Development and Investment, Al Maktoum Aleh Tech",
    image: "/images/speaker/ulviyya.png",
  },
  {
    name: "Amira Soliman",
    title: "CEO & Co-founder, Time Guardian",
    image: "/images/speaker/amira.png",
  },
  {
    name: "Dariia Vasylieva",
    title: "Founder & GP GETVISION | FD CAPITAL CSO, Dubai Blockchain Centre",
    image: "/images/speaker/dariia.png",
  },
  {
    name: "Juliet Su",
    title: "Partner, NewTribe Capital",
    image: "/images/speaker/juliet.png",
  },

  {
    name: "Alexandra Khasirdzheva",
    title:
      "Web3 & Blockchain Investment Strategist, ex-Cointelegraph Accelerator",
    image: "/images/speaker/alexandra.png",
  },
  {
    name: "Mariya Spartalis",
    title: "Founder, Spartalis Capital",
    image: "/images/speaker/mariya.png",
  },
  {
    name: "Countessina Anna De bacci",
    title: "CEO, De Bacci capital",
    image: "/images/speaker/anna.png",
  },
  {
    name: "Amna Usman Chaudhry",
    title: "Financial Economist and Frontier Tech Strategist",
    image: "/images/speaker/amna.png",
  },
  {
    name: "Eva Oloumi",
    title: "Founder and CEO, Paradeigma",
    image: "/images/speaker/eva.png",
  },
  {
    name: "Cinderella AMAR",
    title: "Managing Partner, Glass Venture",
    image: "/images/speaker/cinderella.png",
  },
  {
    name: "Erin Grover",
    title: "Advisor, T8 Capital",
    image: "/images/speaker/erin.png",
  },
  {
    name: "Laura K. Inamedinova",
    title: "Chief Global Ecosystem Officer, Gate.io",
    image: "/images/pastspeaker/laura.png",
  },
  {
    name: "Erica Badocco",
    title: "Founder and Legal Consultant, BLegal.ae",
    image: "/images/speaker/erica.png",
  },
  {
    name: "Kiana Saleh",
    title: "Head of Investment & Partnerships, 4Plus Ventures",
    image: "/images/speaker/kiana.png",
  },
  {
    name: "Genia Xasis",
    title: "Founder, Multiplyers",
    image: "/images/speaker/genia.png",
  },
  {
    name: "Sergey Sevantsyan",
    title: "Head of Information, Kanzz AI",
    image: "/images/speaker/sergey.png",
  },
  {
    name: "Dr. Bhaskar Dasgupta",
    title: "Chairman, Apex ME and India Boards",
    image: "/images/speaker/bhasker.png",
  },
  {
    name: "Armands Murnieks",
    title: "Founder & CEO | Investor | RWA Innovator",
    image: "/images/speaker/armands.png",
  },
  {
    name: "Max Lighter",
    title: "General Manager, XT.COM",
    image: "/images/speaker/max.png",
  },
  {
    name: "Brendan James McKittrick",
    title: "Chief Executive Officer, Internet of Aviation",
    image: "/images/speaker/brendan.png",
  },
  {
    name: "Prof. Dr. Demir Bektic",
    title: "Head, Multi Asset Solutions, Commerzbank AG",
    image: "/images/speaker/demir.png",
  },
  {
    name: "Ralph Gebran",
    title: "Managing Partner, Onramp MENA",
    image: "/images/speaker/ralph.png",
  },
  {
    name: "Anton Golub",
    title: "CIO, FreedX",
    image: "/images/speaker/anton.png",
  },
  {
    name: "Barrister Rizwan Rasheed Siddiqui",
    title: "Managing Partner, Pin Legal Global",
    image: "/images/speaker/rizwan.png",
  },
  {
    name: "Count Andre Popov",
    title: "Managing Director & Partner, Princeton & Company",
    image: "/images/speaker/count.png",
  },
  {
    name: "Pranav Pradeep Agarwal",
    title: "Head of Investments, Foundership Ventures",
    image: "/images/speaker/pranav.png",
  },
  {
    name: "Vlad Svitanko",
    title: "Founder, Cryptorsy",
    image: "/images/speaker/vald.png",
  },
  {
    name: "Abdhullah Meer",
    title: "Head of Strategy & Growth,  GELO",
    image: "/images/speaker/abdhullah.png",
  },
  {
    name: "Dr. Samiullah Khan",
    title: "CSO, Fakhruddin Holding",
    image: "/images/speaker/samiullah.png",
  },
  {
    name: "Michael Graham",
    title: "Head of Growth, Cryptorsy",
    image: "/images/speaker/mikee.png",
  },
  {
    name: "David Ajanjan",
    title: "CEO, Ridddec Technologys",
    image: "/images/speaker/david.png",
  },
  {
    name: "Jorge Carrasco",
    title: "Managing Director, Blockchain and Digital Assets, FTI Consulting",
    image: "/images/speaker/jorge.png",
  },
  {
    name: "Hussein ElSokkary",
    title: "Head of Wealth Management, Azimut UAE",
    image: "/images/speaker/hussein.png",
  },
  {
    name: "Mike Kirillov",
    title: "Financial advisor, COOP DAO",
    image: "/images/speaker/mike.png",
  },
  {
    name: "Gordon Einstein",
    title: "Founding Partner, CryptoLaw Partners",
    image: "/images/speaker/jordon.png",
  },
  {
    name: "Adrian Niculescu",
    title:
      "Chief Marketing Officer, TOMORROWerse Capital & TMRW Venture Network",
    image: "/images/speaker/adrian.png",
  },
  {
    name: "Icaro Avelar",
    title: "Head of Web3 Practice Division, Banks Legal Limited",
    image: "/images/speaker/icaro.png",
  },
  {
    name: "Eran Elhanani",
    title: "Founder & CEO, BullPerks",
    image: "/images/speaker/eran.png",
  },
  {
    name: "Sam Beni",
    title: "CEO, Platin VC",
    image: "/images/speaker/sam.png",
  },
  {
    name: "Amit Grover",
    title: "Managing Partner, Grover & Company",
    image: "/images/speaker/amit.png",
  },
  {
    name: "Oliver Von Wolff",
    title: "Founder & CEO, Helion Capital",
    image: "/images/speaker/oliver.png",
  },
  {
    name: "Amit Arora",
    title: "Head of Partnerships,  RAK Digital Asset Oasis",
    image: "/images/speaker/amita.png",
  },
  {
    name: "Shakeeb Nazeer",
    title: "Web3 Manager, Brands For Less Group",
    image: "/images/speaker/shakeeb.png",
  },
  {
    name: "Sheikh Muhammad Noman",
    title:
      "Founder & CEO, Pegasus Capital Investments | Halliday Forfaiting | Vrijednosnice Osijek Holding",
    image: "/images/speaker/sheikh.png",
  },
  {
    name: "Jakub Żurawiński",
    title: "Head of BD, MatterFi",
    image: "/images/speaker/jakub.png",
  },
  {
    name: "Michael Coyle",
    title: "Founder & CEO, Portl.xyz",
    image: "/images/speaker/micheal.png",
  },
  {
    name: "Jase Zhang",
    title: "Web3 Product Manager, Bybit",
    image: "/images/speaker/jase.png",
  },
  {
    name: "Badrinath Mutkule",
    title: "Founder & CEO, Soileum Network",
    image: "/images/speaker/badrinath.png",
  },
  {
    name: "Hany Ahmed Samir",
    title: "Entrepreneur, Mobitech Integrated Solutions & MobileMasr",
    image: "/images/speaker/hany.png",
  },
  {
    name: "Sergey Maslov",
    title: "Chief Technology Officer, Fintopio",
    image: "/images/speaker/sergeyy.png",
  },
  {
    name: "Kris Wadia",
    title: "CEO (MEA), Sullivan & Stanley (S&S)",
    image: "/images/speaker/kris.png",
  },
  {
    name: "Himanshu Maradiya",
    title: "Founder and Chairman, CIFDAQ",
    image: "/images/speaker/himanshu.png",
  },
  {
    name: "Mikael boshian",
    title: "CEO, SFTY.AI",
    image: "/images/speaker/mich.png",
  },
  {
    name: "Ivan Zhila",
    title: "CMO, TinyTrader",
    image: "/images/speaker/ivan.png",
  },
  {
    name: "Umair Mehmood",
    title: "President, WePelicans Prospective",
    image: "/images/speaker/umiar.png",
  },
  {
    name: "Aleksandr Belov",
    title: "Founder, Coinstelegram Media & Fund",
    image: "/images/speaker/Aleksandr.png",
  },
  {
    name: "Oliver Meyer",
    title: "CEO, trendhub | ACYC",
    image: "/images/speaker/oliverr.png",
  },
  {
    name: "Juan D Orozco",
    title: "CEO, CRPTM",
    image: "/images/speaker/juan.png",
  },
  {
    name: "Nike Zames",
    title: "Founder & CEO, Holder House",
    image: "/images/speaker/nike.png",
  },
  {
    name: "Aly Z. Ramji",
    title: "Director, Mediapix Limited",
    image: "/images/speaker/aly.png",
  },
  {
    name: "Dr. Shambhu Pokharel",
    title: "GLOBAL CEO, CEO CLUB GLOBAL",
    image: "/images/speaker/sambhu.png",
  },
  {
    name: "Trey Jennings",
    title: "Gamified Music Platform, COMP Music",
    image: "/images/speaker/trey.png",
  },
  {
    name: "Timur Kudratov",
    title: "co-founder of Enlightened Minds Investments",
    image: "/images/speaker/timur.png",
  },
  {
    name: "Ivan Pierson",
    title: "Head of IR CrossFi",
    image: "/images/speaker/ivanp.png",
  },
  {
    name: "Girik Rajwani",
    title: "Founder/CEO, Quantum Edge IT",
    image: "/images/speaker/girik.png",
  },
  {
    name: "Robert MacDonald",
    title: "Chief Legal & Compliance Officer, Bybit",
    image: "/images/pastspeaker/robert.png",
  },
  {
    name: "Miko Matsumura",
    title: "Managing Partner gumi Cryptos Capital",
    image: "/images/pastspeaker/miko.png",
  },
  {
    name: "Rachel Pether",
    title: "Managing Director, 3iQ",
    image: "/images/pastspeaker/rachel.png",
  },
  {
    name: "Paula Tavangar",
    title: "Chief Investment Officer, Injaz Capital",
    image: "/images/pastspeaker/paula.png",
  },
  {
    name: "Maya Sherman",
    title:
      "Tech Literacy Co-Lead, GPAI | Senior Innovation Officer, Israel Embassy in India",
    image: "/images/pastspeaker/maya.png",
  },
  {
    name: "Devika Mittal",
    title: "Regional Head, Ava Labs",
    image: "/images/pastspeaker/devika.png",
  },
  {
    name: "Diksha Dutta",
    title: "Chief Growth Officer, soonami.io",
    image: "/images/pastspeaker/diksha.png",
  },

  {
    name: "Irene Umar",
    title: "Deputy Minister of Creative Economy, CEO & Co Founder of W3GG.IO",
    image: "/images/pastspeaker/irene.png",
  },
  {
    name: "Alex Nascimento",
    title: "Co-founder at 7MM Global and Faculty Member at UCLA",
    image: "/images/pastspeaker/alex.png",
  },
  {
    name: "Adam Vaziri",
    title: "CEO, Blockpass",
    image: "/images/pastspeaker/adam.png",
  },
  {
    name: "Brenton Naicker",
    title: "PRINCIPAL AND HEAD, GROWTH, AFRICA",
    image: "/images/pastspeaker/brenton.png",
  },
  {
    name: "Ashish Kumar Jain",
    title:
      "Chief Investment Officer, Kommunitas | General Partner, Giakaa Capital",
    image: "/images/pastspeaker/ashish.png",
  },
  {
    name: "Arvind Kumar",
    title: "Director General, Software Technology Parks of India (STPI)",
    image: "/images/pastspeaker/arvind.png",
  },
  {
    name: "Golok Kumar Simli",
    title:
      "Principal Advisor & CTO Passport Seva Programme, Ministry of External Affairs, Government of India",
    image: "/images/pastspeaker/golok.png",
  },
  {
    name: "Suresh Khadakbhavi",
    title: "CEO, Digi Yatra Foundation",
    image: "/images/pastspeaker/suresh.png",
  },
  {
    name: "Surya Kant",
    title: "Program Director, MeitY Startup Hub",
    image: "/images/pastspeaker/suryakant.png",
  },
  {
    name: "Dilip Chenoy",
    title:
      "Former Secretary General at Federation of Indian Chambers of Commerce and Industry FICCI Chairman - Bharat Web3 Association",
    image: "/images/pastspeaker/dilip.png",
  },
  {
    name: "Nitin Mishra",
    title: "Chief Technology Officer, Open Network for Digital Commerce (ONDC)",
    image: "/images/pastspeaker/nitin.png",
  },
  {
    name: "Anuj Kumar Garg",
    title: "Vice President Blockchain Team, ZebPay",
    image: "/images/pastspeaker/anuj.png",
  },
  {
    name: "Brian Kuttikkat",
    title: "Country Director (India) at M2",
    image: "/images/pastspeaker/brian.png",
  },
  {
    name: "Kiran Mysore ",
    title: "Chief Public Policy Officer at CoinDCX",
    image: "/images/pastspeaker/kiran.png",
  },
  {
    name: "Sohan Lal Nautiyal",
    title: "Principal Consultant, Digital India Corporation",
    image: "/images/pastspeaker/sohanlal.png",
  },
  {
    name: "Bibin Babu",
    title: "Co Founder - Paycio",
    image: "/images/pastspeaker/bibin.png",
  },
  {
    name: "Amit Mehra",
    title: "Partner, Borderless Capital",
    image: "/images/pastspeaker/amit.png",
  },
  {
    name: "Praveen Thakur",
    title: "CTO, NORDEK and Chief Mentor, Genesis",
    image: "/images/pastspeaker/praveen.png",
  },
  {
    name: "Vikram Singh",
    title: "CEO, Antier Solutions",
    image: "/images/pastspeaker/vikram.png",
  },
  {
    name: "Pramod Mishra",
    title: "Blockchain Lab India Lead at PwC",
    image: "/images/pastspeaker/pramod.png",
  },
  {
    name: "Kalyanjit Hatibaruah",
    title: "Chairman, Flugelsoft Group of Companies",
    image: "/images/pastspeaker/kalyanjit.png",
  },
  {
    name: "Dr Anupam Tiwari",
    title: "Advisor(Cyber) ,o/o Principal Advisor, Ministry of Defence",
    image: "/images/pastspeaker/anupam.png",
  },
  {
    name: "Chandrasekhar Buddha",
    title:
      "Chief Coordinating Officer, All India Council for Technical Education (AICTE)",
    image: "/images/pastspeaker/chandrasheker.png",
  },
  {
    name: "B. Shanker Jaiswal",
    title:
      "Joint CP, Technology & Project Implementation and Licensing in Delhi Police",
    image: "/images/pastspeaker/shanker.png",
  },
  {
    name: "Vikas Vaibhav",
    title: "Inspector General, Bihar at Indian Police Service",
    image: "/images/pastspeaker/vikashvaivab.png",
  },
  {
    name: "Saurabh Gupta",
    title: "Founder & CEO, VeriSmart.ai",
    image: "/images/pastspeaker/saurabh.png",
  },
  {
    name: "CA Aishwary Gupta",
    title: "Global Head of Payments and India Business Head at Polygon Labs",
    image: "/images/pastspeaker/aishwrya.png",
  },
  {
    name: "Karan Keswani",
    title: "CEO, BharatBox (The Sandbox)",
    image: "/images/pastspeaker/karan.png",
  },
  {
    name: "Rama Rao",
    title: "CEO & Co-Founder at Bloqcube Inc",
    image: "/images/pastspeaker/ramarao.png",
  },
  {
    name: "Ashima Batra",
    title: "Additional Director, Financial Intelligence Unit India",
    image: "/images/pastspeaker/ashima.png",
  },
  {
    name: "Dr. Satya N Gupta",
    title: "NGNguru, Chairman- Blockchain For Productivity Forum (BFPF)",
    image: "/images/pastspeaker/drsatya.png",
  },
  {
    name: "Naina Bhardwaj",
    title: "Manager, International Business Advisory",
    image: "/images/pastspeaker/naina.png",
  },
  {
    name: "Ashok Gupta",
    title: "Director STPI-Gurugram & CEO",
    image: "/images/pastspeaker/ashok.png",
  },
  {
    name: "Raj Kapoor",
    title:
      "Founder, IBA | Chairman, Global Alliance for Artificial Intelligence",
    image: "/images/pastspeaker/rajkap.png",
  },
  {
    name: "Prasanna Lohar",
    title:
      "CIO, Diamante Blockchain | CEO, BlockStack | Founder, India Blockchain Forum",
    image: "/images/pastspeaker/prasanna.png",
  },
  {
    name: "Rahul Kumar",
    title: "Founder, MuTerra | HIVE Representative, India",
    image: "/images/pastspeaker/rahul.png",
  },
  {
    name: "Habeeb Rahman",
    title: "Head of Business Operations, Koinpark Pvt Ltd",
    image: "/images/pastspeaker/habeeb.png",
  },
  {
    name: "Sukriti Govil",
    title: "Consultant, Emerging Technologies, ITE&C, Government of Telangana",
    image: "/images/pastspeaker/sukriti.png",
  },
  {
    name: "Amar Anand",
    title: "President, Auro Digital Inc.",
    image: "/images/pastspeaker/amar.png",
  },
  {
    name: "Sunil Kapadia",
    title: "Practice Head Blockchain, GrowthAXL",
    image: "/images/pastspeaker/sunil.png",
  },
  {
    name: "Sachin Kumar",
    title: "Founder, Jumbo Blockchain",
    image: "/images/pastspeaker/sachin.png",
  },
  {
    name: "Biplab Lenin",
    title: "Partner, Cyril Amarchand Mangaldas",
    image: "/images/pastspeaker/biplap.png",
  },
  {
    name: "Sunil Sharma",
    title: "Founder, Coingape",
    image: "/images/pastspeaker/sunilsharma.png",
  },
  {
    name: "Ivan Ivanov",
    title: "Founding Partner, Uvecon VC",
    image: "/images/pastspeaker/ivan.png",
  },
  {
    name: "Shri Amit Thaker",
    title: "MLA, Vejalpur Assembly",
    image: "/images/pastspeaker/amitthaker.png",
  },
  {
    name: "Dr. Sunil R Parekh",
    title: "Founding Curator AGS, World Economic Forum Advisor, Zydus Group",
    image: "/images/pastspeaker/sunilr.png",
  },
  {
    name: "Shri Dileep Sanghani",
    title: "Indian farmers fertiliser cooperative (IFFCO)",
    image: "/images/pastspeaker/dileep.png",
  },
  {
    name: "Pranav Pandya",
    title: "Chairman, GESIA IT Association",
    image: "/images/pastspeaker/pranav.png",
  },
  {
    name: "Shri Dinesh Sithar",
    title: "CEO, GUJCOMASOL",
    image: "/images/pastspeaker/dinesh.png",
  },
  {
    name: "Rajesh Kumar Gupta",
    title: "Director, UIDAI, Gujarat State Office",
    image: "/images/pastspeaker/rajesh.png",
  },
  {
    name: "Karthik Anantharaman",
    title: "Vice President - Apollo Hospital",
    image: "/images/pastspeaker/karthik.png",
  },
  {
    name: "Shri M. Nagarajan, IAS",
    title: "Collector and District Magistrate, Mehsana",
    image: "/images/pastspeaker/nagranjan.png",
  },
  {
    name: "Dr. Amit Raj",
    title: "Managing Director, Plexus Medcare",
    image: "/images/pastspeaker/amitraj.png",
  },
  {
    name: "Kamlesh Nagware",
    title: "Co Founder, FSV Capital",
    image: "/images/pastspeaker/kamlesh.png",
  },
  {
    name: "Indrajeet Mitra",
    title: "Managing Director, Gateway Group",
    image: "/images/pastspeaker/indrajeet.png",
  },
  {
    name: "Rohit Verma",
    title: "Director, CEO, Metaverse 911",
    image: "/images/pastspeaker/rohit.png",
  },
  {
    name: "Dhanraj Dadhich",
    title: "Founder, Astrolgorim Technologies LLP, USA",
    image: "/images/pastspeaker/dhanraj.png",
  },
  {
    name: "Srini Ravi",
    title: "Chief Strategy Officer, Rubix Network",
    image: "/images/pastspeaker/srini.png",
  },
  {
    name: "Vinod Kumar",
    title: "Founder and CTO, Cypher Blockchain",
    image: "/images/pastspeaker/vinod.png",
  },
  {
    name: "Joseph Joshy",
    title: "CTO, IFSCA",
    image: "/images/pastspeaker/joseph.png",
  },
  {
    name: "Milapsinh Jadeja",
    title: "Founder, Iroller Capital",
    image: "/images/pastspeaker/milapsingh.png",
  },
  {
    name: "Srinivas Rao Sureddi",
    title: "CEO, GUSEC",
    image: "/images/pastspeaker/srinivas.png",
  },
  {
    name: "Mehul Shah",
    title: "Co-Founder, IVY Growth Associates",
    image: "/images/pastspeaker/mehul.png",
  },
  {
    name: "Amit Parikh",
    title: "National President, MSME & Startups Forum - Bharat",
    image: "/images/pastspeaker/amitp.png",
  },
  {
    name: "Dr. Rajat Moona",
    title: "Director, IIT Gandhinagar",
    image: "/images/pastspeaker/rajat.png",
  },
  {
    name: "Sandeep Shukla",
    title:
      "Rajiv and Ritu Batra Endowed Chair for Cyber Security, Department of CSE, IIT Kanpur",
    image: "/images/pastspeaker/sandeepsuk.png",
  },
  {
    name: "Senthil Velu",
    title: "Professor, IIM Trichy",
    image: "/images/pastspeaker/senthil.png",
  },
  {
    name: "Garima Singh",
    title: "CTO, Doras Lab",
    image: "/images/pastspeaker/garimasingh.png",
  },
  {
    name: "Maha Iyer",
    title: "Founder, Pricetime Markets Inc",
    image: "/images/pastspeaker/mayai.png",
  },
  {
    name: "Rajat Ojha",
    title: "CEO, Gamitronics",
    image: "/images/pastspeaker/rajatojha.png",
  },
  {
    name: "Shashi Jha",
    title: "Founder, Jigsaw Law and Blockniti",
    image: "/images/pastspeaker/sashi.png",
  },
  {
    name: "Amit Saluja",
    title: "Managing Partner, digiXLT",
    image: "/images/pastspeaker/amitsaluja.png",
  },
  {
    name: "Tashish Rai Singhani",
    title: "Co-Founder & CEO, UnicueOne",
    image: "/images/pastspeaker/tashish.png",
  },
  {
    name: "Sonny Mohanty",
    title: "Partner, Leo Ventures",
    image: "/images/pastspeaker/sonny.png",
  },
  {
    name: "Anchit Goel",
    title: "Founder - Eknavya Lab Head - Partnerships, Onramp.Money",
    image: "/images/pastspeaker/anchit.png",
  },
  {
    name: "Satish Kumar",
    title: "Founder & CEO of Simsy Ventures",
    image: "/images/pastspeaker/satish.png",
  },
  {
    name: "Chirag Kapadia",
    title: "Director, TACTPRO Consulting Private Limited",
    image: "/images/pastspeaker/chirag.png",
  },
  {
    name: "Neha Sharma",
    title: "Founder and Director,Accelerate India",
    image: "/images/pastspeaker/neha.png",
  },
  {
    name: "Nawal Kishor",
    title: "Managing Partner, Leo Ventures, MD & Co-Founder, NORDEK",
    image: "/images/pastspeaker/nawal.png",
  },
  {
    name: "Chirag Mehta",
    title: "Partner Clip Financial",
    image: "/images/pastspeaker/chiragmeh.png",
  },
  {
    name: "Karthik Iyer",
    title: "CEO, BlockchainMonk",
    image: "/images/pastspeaker/karthiki.png",
  },
  {
    name: "Ish Anand",
    title: "Venture Partner, Simsy Ventures",
    image: "/images/pastspeaker/ishan.png",
  },
  {
    name: "Mr KP",
    title: "COO, Agnus AI",
    image: "/images/pastspeaker/mrkp.png",
  },
  {
    name: "Sagar Barvaliya",
    title: "Partner, BFC & Founder, ETHMunich",
    image: "/images/pastspeaker/sagar.png",
  },
  {
    name: "Sid Pillai",
    title: "CEO, Dexponent",
    image: "/images/pastspeaker/sid.png",
  },
  {
    name: "Muhammad Umar",
    title: "CEO, Relymer",
    image: "/images/pastspeaker/mohammad.png",
  },
  {
    name: "David Palmer",
    title: "CPO, PairPoint by Vodafone",
    image: "/images/pastspeaker/devid.png",
  },
  {
    name: "Ivan Vakhmyanin",
    title: "Managing Director, Datamint",
    image: "/images/pastspeaker/ivani.png",
  },
  {
    name: "Dirk Lueth",
    title:
      "Co-Founder & Co-CEO of Uplandme, Inc. Chairman Open Metaverse Alliance for Web3",
    image: "/images/pastspeaker/dirik.png",
  },
  {
    name: "Charles Bergeron",
    title: "Founder, EZO",
    image: "/images/pastspeaker/charles.png",
  },
  {
    name: "Ross Gates",
    title: "FCOO at PrimeLab",
    image: "/images/pastspeaker/ross.png",
  },
  {
    name: "Arthur Meng",
    title: "CEO & Cofounder of Hemera & SocialScan",
    image: "/images/pastspeaker/aurther.png",
  },
  {
    name: "Allen Chow",
    title: "Founder and CEO of AI on Web3, Inc.",
    image: "/images/pastspeaker/allen.png",
  },
  {
    name: "Dennis O’Connell",
    title: "Co-Founder & CTO, Peregrine Ltd, President, ERC-3643 Association",
    image: "/images/pastspeaker/dennis.png",
  },

  {
    name: "Jimi Ibrahim",
    title: "Co-founder and CBDO, Oasis X",
    image: "/images/pastspeaker/jimi.png",
  },
  {
    name: "Jake Stolarski",
    title: "CEO and Co-founder of NeroChain",
    image: "/images/pastspeaker/jake.png",
  },
  {
    name: "Kseniia Baziian",
    title: "Co-Founder, Narrative",
    image: "/images/pastspeaker/kseniia.png",
  },
  {
    name: "Reni Achkar",
    title: "CEO, The Social Laboratory",
    image: "/images/pastspeaker/reni.png",
  },
  {
    name: "Ajeet Khurana",
    title: "Founder, Reflexical Pte Ltd",
    image: "/images/pastspeaker/ajeet.png",
  },
  {
    name: "Sebastian Heine",
    title: "Chief Risk and Compliance Officer, Northstake",
    image: "/images/pastspeaker/sabest.png",
  },
  {
    name: "Bilal EL ALAMY",
    title: "CEO, PyratzLabs",
    image: "/images/pastspeaker/bilai.png",
  },
  {
    name: "Ernesto Contreras ",
    title: "CEO, Unalivio",
    image: "/images/pastspeaker/ernesto.png",
  },
  {
    name: "Yi Luo",
    title: "CEO and Co-founder of Eunice",
    image: "/images/pastspeaker/yil.png",
  },
  {
    name: "Anurag Vasisth",
    title: "Co-Chair & Group CEO, Loyalty Now",
    image: "/images/pastspeaker/anurag.png",
  },
  {
    name: "Tomasz Wojewoda",
    title: "Founder and CEO, TomekGroup",
    image: "/images/pastspeaker/tomasz.png",
  },
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

    <div className="relative bg-[url('/images/speaker.jpg')] bg-cover bg-center h-[30rem]" data-aos="fade-up">
<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-red-600/60 to-[#8d0d24]/70"></div>
        <div className="relative z-10 flex justify-center items-center h-full">
           <h2 className="text-[40px] sm:text-[60px] lg:text-[90px] font-bold text-white mt-[5%]">
      SPEAKERS
    </h2>
        </div>
    </div>


      {/* Intro Section */}
      <div className="px-6 sm:px-10 lg:px-28 py-10 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-20 my-15" data-aos="fade-up">
        <p className="text-base sm:text-lg lg:text-[20px] text-center lg:text-left">
          Join the region’s foremost financial innovators on center stage. Whether you represent a leading bank, a pioneering fintech startup, or a regulatory authority, this platform offers a unique opportunity to share your expertise, inspire change, and engage with key decision-makers from around the world.
        </p>
        <button className="text-base sm:text-lg lg:text-[20px] bg-[#109FEB] text-white w-full sm:w-auto lg:w-[35%] font-bold rounded-full px-8 py-3 transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-[#d4145a] hover:to-[#004e92]">
          Apply to Speak
        </button>
      </div>

      {/* Past Speakers */}
      <section className="bg-event-red pb-16">
        <div className="mx-auto">
          <div className="text-center mb-12 bg-[#E4032A]">
            <h2 className="text-4xl font-bold text-white mb-4 lg:text-7xl py-4">
              PAST SPEAKERS
            </h2>
          </div>

          {/* Sliding Wrapper */}
          <div className=" w-full mx-auto">
            <div className="flex  flex-wrap  w-full gap-6 px-4 justify-center">
              {[...speakers].map((speaker, index) => (
                <div
                  key={index}
                  className="w-[300px] h-[340px] flex-shrink-0 relative overflow-hidden rounded-lg"
                >
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover hover:scale-120 transition duration-300 ease-in-out"
                  />
                  <div className="absolute bottom-2 right-2 left-2  w-[95%] bg-black/70 py-8 px-4 rounded-lg hover:border-2">
                    <h3 className="text-white font-semibold text-[18px]">{speaker.name}</h3>
                    <p className="text-white text-sm">{speaker.title}</p>
                  </div>
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
