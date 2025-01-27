* {
  font-family: "Inria Sans", sans-serif;
  color: white
}

@import url('https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.cdnfonts.com/css/american-captain');
@import url('https://fonts.cdnfonts.com/css/vermin-vibes-v');


.cardMint {
  width: 120px;
  background: linear-gradient(to bottom, #3a3a3a, #1c1c1c);
  border-radius: 7px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
  padding: 5px;
}

.card-imageMint img {
  width: 100%;
}

.card-title {
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
}

.card-content p {
  margin: 5px 0;
  font-size: 14px;
}

.card-actions {
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
}


.popup-containerIn {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.781);
  /* Changed to solid black */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
}

.mintedNFTSFMain{
  display: flex;
  flex-flow: row nowrap;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
}

.mintedNFTSF{
width: 120px;
margin-left: 5px;
margin-right: 5px;
}

.mintedNFTSF img{
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-evenly;
}

.mintedNFTSF div{
  text-align: center;
}

.popupIn {
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 450px;
  animation: slideIn 0.3s ease-out;
  background: rgba(255, 255, 255, 0.397);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

@keyframes slideIn {
  from {
    transform: translateY(-20%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.popupIn h2 {
  margin-top: 0;
  font-size: 35px;
  letter-spacing: 1px;
  color: #ffffff;
  text-align: center;
  font-family: 'American Captain', sans-serif;
}

.popupIn input[type="number"] {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 3px solid #f3d5ffc4;
  border-radius: 5px;
  box-sizing: border-box;
  color: rgb(127, 1, 177);
  background-color: white;
}

.listBtn {
  padding: 10px;
  background-color: #8f215c;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 100%;
  text-align: center;
  margin-top: 20px;
  transition: 0.2s ease-in-out;
}

.listBtn:hover {
  background: #b81f70;
}

.popup-closeIn {
  background: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
  color: #fffdfd;
  justify-content: flex-end;
  margin-right: auto;
  text-align: right;
  font-weight: bold;
}

.inBtnsMain {
  display: flex;
  justify-content: space-evenly;
}

.inBtns1 {
  background-color: #8f215c;
  width: 70px;
  font-weight: bold;
  padding: 7px;
  transition: 0.2s ease-in-out;
}

a:hover {
  color: white;
}

.inBtns2 {
  background-color: #f57bbc36;
  border: 2px solid #8f215c;
  width: 70px;
  font-weight: bold;
  padding: 7px;
  transition: 0.2s ease-in-out;

}

.inBtns1:hover {
  background: #b81f70;
}

.inBtns2:hover {
  background-color: #f8319b36;
}

.popUpImgBG {
  background-color: #161616a6;
  padding: 15px;
  border-radius: 20px;
  box-shadow: 0 0 50px 15px #b8b8b87e;
  border: 2px solid #d6d6d660;
}

.popUpMain1 {
  background-color: #161618a2;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100vh;
  z-index: 10;
}

#tiles {
  color: white;
  z-index: 10000;
  position: relative;
}

.nftSectionIn {
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  height: 25vh;
}


#showMyNFTs {
  display: flex;
  justify-content: space-evenly;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  flex-flow: row wrap;
}

#showMyNFTs2 {
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  flex-flow: row wrap;
}

.noNFTs {
  text-align: center;
  margin-top: 60px;
  font-size: 25px;
  text-transform: uppercase;
  color: #dfdfdf;
}

.user-nfts {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.user-nfts h1 {
  text-align: center;
  color: #333;
}

.nfts-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 20px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  flex-flow: column nowrap;
}

.nft-card {
  border: 1px solid gray;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.nft-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.nft-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.nft-title {
  margin: 10px 0;
  color: #555;
  font-size: 18px;
}

.nft-description {
  font-size: 14px;
  color: #777;
}

.no-nfts-message {
  text-align: center;
  color: #999;
  font-size: 25px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  justify-content: center;
}

@keyframes carousel-slow {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.animate-carousel-slow {
  animation: carousel-slow 5s linear infinite;
  /* Slower animation */
}

#wrongMsg {
  color: #ff144f;
}

.notifications {
  width: 150px;
  height: 150px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
}

.popupNotificationsLoad {
  background: rgba(255, 255, 255, 0.253);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.534);
  text-align: center;
  margin: auto;
  padding: 25px;
  width: 500px;
}

.popupNotifications {
  background: rgba(255, 255, 255, 0.253);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.534);
  text-align: center;
  margin: auto;
  padding: 25px;
}


/* HTML: <div class="loader"></div> */
.loader {
  width: 45px;
  aspect-ratio: 1;
  --c: no-repeat linear-gradient(#d632ff 0 0);
  background:
    var(--c) 0% 50%,
    var(--c) 50% 50%,
    var(--c) 100% 50%;
  background-size: 20% 100%;
  animation: l1 1s infinite linear;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
}

@keyframes l1 {
  0% {
    background-size: 20% 100%, 20% 100%, 20% 100%
  }

  33% {
    background-size: 20% 10%, 20% 100%, 20% 100%
  }

  50% {
    background-size: 20% 100%, 20% 10%, 20% 100%
  }

  66% {
    background-size: 20% 100%, 20% 100%, 20% 10%
  }

  100% {
    background-size: 20% 100%, 20% 100%, 20% 100%
  }
}

@keyframes carousel {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

/*@keyframes slow-carousel {
  0% {
    transform: translateX(0);
    animation-timing-function: ease-in; 
  }
  50% {
    transform: translateX(-25%); 
    animation-timing-function: ease-out; 
  }
  100% {
    transform: translateX(-50%);
    animation-timing-function: ease-out; 
  }
}

.animate-carousel {
  animation: slow-carousel 10s infinite; 
}*/

@keyframes fast-to-slow-carousel {
  0% {
    transform: translateX(0);
    animation-timing-function: ease-out;
    /* Start fast */
  }

  80% {
    transform: translateX(-45%);
    animation-timing-function: ease-in;
    /* Slow down */
  }

  100% {
    transform: translateX(-50%);
    animation-timing-function: linear;
    /* Stop smoothly */
  }
}

.animate-carousel {
  animation: fast-to-slow-carousel 13s forwards;
  /* Forward ensures the animation ends in the final state */
}

@keyframes spread {
  0% {
    left: 50%;
    /* Start at the center */
    transform: translate(-50%, -50%);
  }

  100% {
    left: var(--target-left);
    /* Move to target positions */
    transform: translate(-50%, -50%);
  }
}

.fade-out {
  opacity: 0;
  transition: opacity 0.5s ease;
}

.hidden {
  display: none;
}

.popUpImgMain {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  width: fit-content;
  height: fit-content;
  animation: fadeIn 0.4s ease-in-out forwards;
  z-index: 10000;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

.popUpImg {
  background: rgba(255, 255, 255, 0.253);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.534);
}

#greenScreen2 {
  opacity: 0.2;
}

.carousel-track {
  display: flex;
  gap: 20px;
  /* Space between images */
  width: max-content;
  transition: animation-duration 0.5s ease;
  /* Smooth transition for animation duration */

}


.flexIMGS {
  flex-flow: row nowrap;
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
}

#rowImgs--2 {
  display: flex;
  gap: 20px;
  /* Space between images */
  width: max-content;
  margin-top: 20px;
}

/*
.animate-carousel {
  animation: carousel 1.8s linear infinite;
}*/

.magic-card {
  opacity: 0;
  /* Start invisible */
  transform: scale(0.5) rotate(10deg);
  /* Start small and rotated */
  animation: magicAppear 0.5s forwards;
  /* Animation to appear */
}

#rowImgs2 {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
}

@keyframes magicAppear {
  0% {
    opacity: 0;
    transform: scale(0.5) rotate(10deg);
  }

  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}


.btn2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #d9d9d94d;
  border: none;
  font-size: 20px;
  cursor: pointer;
  position: relative;
}


.video-container {
  text-align: center;
  margin-top: 20px;
  height: 35vh;
}

.video-player {
  width: 80%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  /* Optional: Adds a shadow for aesthetics */
}

.fight:hover {
  cursor: pointer;
}

::-webkit-scrollbar {
  width: 8px;
  display: none;
}

/* Track */
::-webkit-scrollbar-track {
  background: #3b3b3b;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #686868;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #808080;
}

.page-loader {
  width: 100%;
  height: 100vh;
  background: #000000;
  z-index: 2000000000000;
  position: fixed;
  opacity: 1;
  transition: opacity 0.5s ease;
  /* Fade out transition */
}

.page-loader.hidden {
  opacity: 0;
  /* Fade out */
  pointer-events: none;
  /* Prevent interaction when hidden */
}

.parent-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-flow: column nowrap;
  /* Adjust the height based on your layout */
}

@keyframes l14 {
  100% {
    left: calc(100% + 20px)
  }
}

.selectSectionMainMob {
  display: none;
}

.miniBarMain {
  display: none;
}

.glitch-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.glitch {
  font-size: 20px;
  color: rgb(255, 255, 255);
  text-align: center;
  margin-top: 10px;
  text-align: center;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  text-transform: upercase;
  position: relative;
  display: inline-block;

}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch::before {
  left: 4px;
  text-shadow: -4px 0 #0084ff;
  clip: rect(24px, 550px, 90px, 0);
  -webkit-animation: glitch-anim-2 2.5s infinite linear alternate-reverse;
  animation: glitch-anim-2 2.5s infinite linear alternate-reverse;
}

.glitch::after {
  left: -4px;
  text-shadow: -4px 0 #0084ff;
  clip: rect(85px, 550px, 140px, 0);
  -webkit-animation: glitch-anim 2.5s infinite linear alternate-reverse;
  animation: glitch-anim 2.5s infinite linear alternate-reverse;
}

@media screen and (max-width: 499px) {

  .popUpImgMain img {
    width: 145px;
  }

  .close-button-2 {
    z-index: 100;
    font-size: 35px;
    justify-content: flex-end;
    display: flex;
    margin-right: -25px;
    cursor: pointer;
  }


  .video-container {
    margin-left: -15px;
  }

  #btn1PC {
    display: none;
  }

  #rowImgs {
    overflow: hidden;
    /* Ensure only visible area shows */
    position: relative;
    margin-top: -82px;
  }

  .carouselImgs-2 {
    position: relative;
    width: 100vw;
    height: 300px;
    /* Adjust as needed */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    display: none;

  }

  #sizeFonts {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: fit-content;
    margin: 0 auto;
    transform: translateY(100%);
    font-family: 'Vermin Vibes V', sans-serif;
    z-index: 1;
    font-size: 8px;
  }

  .carouselImgs-2 img {
    position: absolute;
    /* Ensure all images overlap */
    top: 50%;
    /* Center vertically */
    left: 50%;
    /* Start at the center */
    transform: translate(-50%, -50%);
    width: 10vw;
    /* Adjust size as needed */
    height: auto;
    opacity: 1;
    /* Ensure images are fully visible */
    animation: spread 2s ease-in-out forwards;
    /* Trigger the animation */
  }

  #treasureIMG2 {
    width: 150%;
    margin-top: -150px;
    z-index: 10;
    /* -webkit-mask-image: linear-gradient(to top, transparent, black 10%, black 50%, transparent);
    mask-image: linear-gradient(to top, transparent, black 10%, black 50%, transparent);
    -webkit-mask-composite: destination-in;
    mask-composite: intersect;*/
  }

  .treasureIMG2Div {
    width: 1200px;
    position: relative;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;
    margin-left: -400px;
    padding-top: 80px;
  }

  .headers {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #161618;
    flex-flow: row nowrap;
    width: 100%;
    display: flex;
    position: relative;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    border: 2px solid #AC13A7;

    background: url('../assets/nav.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .h1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    z-index: 100;

  }

  .headers div {
    font-size: 20.5px;
    color: white;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }


  .headers button {
    font-size: 20px;
    color: white;
  }

  .headers span:hover {
    color: #2da8fa;
  }

  .logo {
    width: 70px;
    height: 70px;
    margin-right: 20px;
    border-radius: 100px;
  }

  #logoH {
    font-size: 38px;
    font-weight: bold;
  }

  .headerS1 {
    text-align: left;
  }

  .headerS2 {
    display: flex;
    justify-content: space-evenly;
  }

  .headerS2-2 {
    margin-top: auto;
    margin-bottom: auto;
    display: flex;
  }

  .headerS2-2 div {
    padding-left: 18px;
    padding-right: 18px;
  }

  .headerS2-2 span {
    padding-left: 18px;
    padding-right: 18px;
  }

  .headerS3 {
    flex: 1;
    text-align: right;
  }

  .connectBTN {
    margin-left: 40px;
    width: 280px;
  }


  @keyframes glow {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(100%);
    }
  }

  .more-span {
    position: relative;
  }



  .allWrap {
    width: 100%;
    background-color: black;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }

  .contMain {
    background: radial-gradient(circle, rgba(0, 0, 0, 0.2877457865168539) 0%, rgba(0, 0, 0, 0.4450491573033708) 50%, rgba(0, 0, 0, 0.5911165730337078) 100%), url('../assets/bg3.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    overflow: hidden;
  }

  .cont-2 {
    background: url('../assets/snow.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .cont2 {
    background: url('../assets/bg2.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
  }

  .cont3 {
    background: url('../assets/bg4.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
    height: max-content;
    width: 100%;
  }

  .titleMain {
    font-family: 'American Captain', sans-serif;
    color: white;
    font-size: 37px;
    text-align: center;

    margin-top: 3vh;
  }

  .titleMain span {
    color: #F241E5;
    font-family: 'American Captain', sans-serif;
  }

  .title2Main {
    text-align: center;
    font-size: 18.5px;
    color: white;

    font-family: "Montserrat Alternates", serif;
    width: fit-content;
    display: flex;
    margin: auto
  }

  .title2Main img {
    width: 100px;
    margin-left: 15px;
  }

  .treasureIMG {
    width: 100%;
    margin-top: 6vh;
    margin-left: auto;
    margin-right: auto;
    display: flex;
  }

  .btns3 {
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 7vh;
    flex-flow: column nowrap;
  }

  .btns3 button {
    margin: 15px;
    padding: 10px;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }

  .btn1 {
    font-family: 'American Captain', sans-serif;
    color: white;
    background: linear-gradient(90deg, rgba(178, 21, 167, 1) 0%, rgba(104, 20, 224, 1) 100%);
    border: #0084ff 1px solid;
    letter-spacing: 2px;
    font-weight: 400;
    font-size: 23px;
    width: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 0;
    transition: 0.5s ease-in-out;
    /* Smooth transition for background */
  }

  .btn1:hover {
    background: linear-gradient(90deg, rgba(104, 20, 224, 1) 0%, rgba(178, 21, 167, 1) 100%);
  }


  .btn1 span {
    margin-left: 25px;
    margin-right: 25px;
    font-family: 'American Captain', sans-serif;
    border-left: 1px solid white;
    border-right: 1px solid white;
    font-size: 26px;
    padding: 10px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .txt {
    margin-top: auto;
    margin-bottom: auto;
    font-family: 'American Captain', sans-serif;

  }

  .btn2 {
    font-family: "Montserrat Alternates", serif;
    color: white;
    background-color: transparent;
    border: 1px solid white;
    font-size: 21px;
    width: 280px;
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
    transition: 0.3s ease-in-out;
    height: 60px;
  }

  .dropdown-container {
    position: relative;
    width: fit-content;
    margin: auto;
  }

  #dropdown {
    position: absolute;
    top: 110px;
    left: 0;
    right: 0;
    width: 280px;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(217, 217, 217, 0.336);
    backdrop-filter: blur(5px);
    border: 1px solid white;
    overflow: hidden;
    transition: all 0.5s ease;
    z-index: 50;
  }

  .dropdown-item {
    width: 280px;
    background: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    border: none;
    font-size: 14px;
    cursor: pointer;
    transition: color 0.1s ease;
    font-family: 'Vermin Vibes V', sans-serif;
    color: white;
    border-bottom: 1px solid rgba(255, 255, 255, 0.61);
  }

  #lastNum {
    border: none;
  }

  .dropdown-item:hover {
    color: rgba(255, 255, 255, 0.8);
    background-color: transparent;
  }

  .dropdown-item:lanst-child {
    border-bottom: none;
  }

  .dropdown-menu.open {
    max-height: 350px;
    background-color: #2da8fa;
  }

  /* Arrow rotation */
  #arrow-icon {
    margin-left: 10px;
    font-size: 16px;
    transition: transform 0.3s ease;
  }

  #arrow-icon.rotate {
    transform: rotate(180deg);
  }

  .btn2:hover {
    background-color: rgba(255, 255, 255, 0.11);
    -webkit-backdrop-filter: blur(2);
  }

  .btn2 div {
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
    display: flex;
  }

  .btn1 img {
    width: 30px;
    margin-top: -2px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .btn2 img {
    margin-left: 30px;

  }

  .nftSection {
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    height: 52vh;

  }

  .nftSection2 {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-evenly;
    display: flex;
    margin-bottom: 5vh;
    width: 100%;
  }

  .nftSection2 img {
    width: 95px;
    transition: transform .2s;
  }

  .nftSection2 img:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  /*.nftSection3 {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;
    margin-top: 9vh;
    margin-bottom: 5vh;
    scroll-behavior: smooth;
  }*/

  .nftSection3 {
    display: flex;
    overflow: hidden;
    width: fit-content;
  }

  .nftSection3 img {
    max-width: 100%;
    /* Ensure the image fits within the container */
    height: auto;
    /* Maintain aspect ratio */
    transition: transform .3s;
  }

  .nftSection3 img:hover {
    cursor: pointer;
  }

  .nftSection3Main {
    display: none;
  }

  .nftSection3Main-mob {
    /*: flex;
    flex-flow: row nowrap;
    width: fit-content;
    margin: auto;*/

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 30vh;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
    margin-top: auto;
    width: 90%;
  }

  /*.nftImage {
    width: calc(100% / 5);
     flex-shrink: 0;
    transition: transform 0.5s ease;
    padding: 10px;
  
    cursor: pointer;
  }*/

  .imageContainer {
    position: relative;
    display: inline-block;
    display:flex;
    justify-content: space-evenly;
    width: 100%;
  }

  .nftImage {
    display: block;
    width: 100%;
    height: auto;
    padding: 10px;
  }

  .sec {
    color: #ff1493;
    font-family: 'Vermin Vibes V', sans-serif;
  }

  .timer div:nth-child(1) {
    color: white;
    font-family: 'Vermin Vibes V', sans-serif;
  }

  .timer div:nth-child(2) {
    color: white;
    /* White for text */
    margin-top: 5px;
    font-family: 'Vermin Vibes V', sans-serif;
  }

  .arrowsDiv {
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
  }

  .arrows {
    width: 30px;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
    cursor: pointer;
  }

  .selected {
    transform: scale(1.2);
  }

  .title3 {
    font-family: 'Vermin Vibes V', sans-serif;
    text-align: center;
    color: white;
    font-size: 28px;
    padding-top: 50px;
  }

  .title3 span {
    font-family: 'Vermin Vibes V', sans-serif;
    color: #F241E5;
  }

  .line {
    height: 1.5px;
    width: 70%;
    background-color: #FFFFFF80;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 60px;
  }

  .fight {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    margin-top: 20px;
    width: 250px;
  }



  .battleSectionMain {
    width: 96%;
    margin-left: auto;
    margin-right: auto;
  }

  .battleSection {
    display: flex;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
    margin-top: 5vh;
    width: 100%;
  }

  .battleSection2 {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  .vs {
    width: 20%;
    height: 20%;
    margin: auto;
  }

  .combat {
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;
    margin-bottom: 5vh;
    margin-top: 2vh;
    z-index: 1;
    position: relative;
  }


  #battleImgs {
    animation: float 20s ease-in-out infinite;
    width: 280px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    margin-top: 15px;
  }

  @keyframes float {

    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-20px);
    }
  }


  #bar1 {
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    margin-bottom: 10px;
    width: 250px;
  }

  .bar2 {
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    margin-bottom: 10px;
    width: 250px;

  }

  #vsMain {
    margin-top: 60px;
    margin-bottom: 60px;
  }

  .popup-containerMain {
    position: fixed;
    /* Ensures it stays in the viewport */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    width: 100%;
    height: fit-content;
    animation: fadeIn 0.4s ease-in-out forwards;
    z-index: 10000;
  }


  .character {
    width: 215px;
    /* Adjust to fit your design */
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: -40px;
  }

  .character--2 {
    width: 245px;
    /* Adjust to fit your design */
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: -80px;
  }


  .popup {
    background: rgba(255, 255, 255, 0.253);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.534);
    text-align: center;
    height: 280px;
    width: 95%;
    margin: auto;

  }

  .popup-text {
    font-size: 1.1rem;
    font-family: 'Vermin Vibes V', sans-serif;
    color: white;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
    display: flex;
    text-align: center;
    margin-top: 5px;
  }


  .close-button {
    position: absolute;
    top: 1px;
    right: 10px;
    font-size: 2rem;
    font-weight: bold;
    color: #ffffff;
    cursor: pointer;
  }


  .popup-containerMain3 {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .footer {
    width: 100%;
    background: linear-gradient(0deg, rgba(9, 14, 17, 0.186622191011236) 0%, rgba(23, 26, 27, 0.1192064606741573) 49%, rgba(38, 38, 38, 0.2652738764044944) 100%), url('../assets/footer.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
    justify-content: center;
    margin-bottom: auto;
    padding-top: 70px;
    padding-bottom: 70px;
    z-index: 10;
    position: relative;
    margin-top: 5%;
  }

  .footer img {
    border-radius: 100%;
    width: 70px;
    margin-right: 20px;
  }

  .footer--2 {
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
  }

  .footer2 {
    font-size: 30px;
    color: white;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    width: fit-content;
    display: flex;
    font-weight: 500;
    width: 100%;
  }

  .footer2 span {
    margin-top: auto;
    margin-bottom: auto;
  }

  .lineF {
    width: 90%;
    height: 1px;
    background-color: #FFFFFF80;
    margin-top: auto;
    margin-bottom: auto;
  }

  .crystels2 {
    position: absolute;
    right: 0;
    /* Aligns the image to the right edge */
    transform: translateY(-50%);
    /* Adjusts for centering */
    margin-top: -12%;
  }


  .crystels3 {
    position: absolute;
    right: 0;
    /* Aligns the image to the right edge */
    transform: translateY(-50%);
    /* Adjusts for centering */
  }

  .crystel {
    width: 230px;
  }
}

@media screen and (min-width: 500px) and (max-width: 767px) {
  #rowImgs {
    overflow: hidden;
    /* Ensure only visible area shows */
    position: relative;
    margin-top: -82px;
  }

  .popUpImgMain img {
    width: 190px;
  }

  .close-button-2 {
    z-index: 100;
    font-size: 35px;
    justify-content: flex-end;
    display: flex;
    margin-right: -25px;
    cursor: pointer;
  }

  #btn1PC {
    display: none;
  }

  .carouselImgs-2 {
    position: relative;
    width: 100vw;
    height: 300px;
    /* Adjust as needed */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    display: none;

  }

  #sizeFonts {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: fit-content;
    margin: 0 auto;
    transform: translateY(100%);
    font-family: 'Vermin Vibes V', sans-serif;
    z-index: 1;
    font-size: 8px;
  }

  #sizeFonts {
    font-family: 12px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: fit-content;
    font-family: 'Vermin Vibes V', sans-serif;
    color: white;
  }

  .carouselImgs-2 img {
    position: absolute;
    /* Ensure all images overlap */
    top: 50%;
    /* Center vertically */
    left: 50%;
    /* Start at the center */
    transform: translate(-50%, -50%);
    width: 10vw;
    /* Adjust size as needed */
    height: auto;
    opacity: 1;
    /* Ensure images are fully visible */
    animation: spread 2s ease-in-out forwards;
    /* Trigger the animation */
  }

  #treasureIMG2 {
    width: 150%;
    margin-top: -150px;
    z-index: 10;

    -webkit-mask-image: linear-gradient(to top, transparent, black 10%, black 50%, transparent);
    mask-image: linear-gradient(to top, transparent, black 10%, black 50%, transparent);
    -webkit-mask-composite: destination-in;
    mask-composite: intersect;
  }

  .treasureIMG2Div {
    width: 1200px;
    position: relative;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;
    margin-left: -350px;
  }

  .headers {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #161618;
    flex-flow: row nowrap;
    width: 100%;
    display: flex;
    position: relative;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    border: 2px solid #AC13A7;

    background: url('../assets/nav.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .h1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    z-index: 100;

  }

  .headers div {
    font-size: 20.5px;
    color: white;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }


  .headers button {
    font-size: 20px;
    color: white;
  }

  .headers span:hover {
    color: #2da8fa;
  }

  .logo {
    width: 70px;
    height: 70px;
    margin-right: 20px;
    border-radius: 100px;
  }

  #logoH {
    font-size: 38px;
    font-weight: bold;
  }

  .headerS1 {
    text-align: left;
  }

  .headerS2 {
    display: flex;
    justify-content: space-evenly;
  }

  .headerS2-2 {
    margin-top: auto;
    margin-bottom: auto;
    display: flex;
  }

  .headerS2-2 div {
    padding-left: 18px;
    padding-right: 18px;
  }

  .headerS2-2 span {
    padding-left: 18px;
    padding-right: 18px;
  }

  .headerS3 {
    flex: 1;
    text-align: right;
  }

  .connectBTN {
    margin-left: 40px;
    width: 280px;
  }


  @keyframes glow {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(100%);
    }
  }

  .more-span {
    position: relative;
  }



  .allWrap {
    width: 100%;
    background-color: black;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }

  .contMain {
    background: radial-gradient(circle, rgba(0, 0, 0, 0.2877457865168539) 0%, rgba(0, 0, 0, 0.4450491573033708) 50%, rgba(0, 0, 0, 0.5911165730337078) 100%), url('../assets/bg3.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    overflow: hidden;
  }

  .cont-2 {
    background: url('../assets/snow.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .cont2 {
    background: url('../assets/bg2.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
  }

  .cont3 {
    background: url('../assets/bg4.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
    height: max-content;
    width: 100%;
  }

  .titleMain {
    font-family: 'American Captain', sans-serif;
    color: white;
    font-size: 40px;
    text-align: center;

    margin-top: 3vh;
  }

  .titleMain span {
    color: #F241E5;
    font-family: 'American Captain', sans-serif;
  }


  .title2Main {
    text-align: center;
    font-size: 19px;
    color: white;

    font-family: "Montserrat Alternates", serif;
    width: fit-content;
    display: flex;
    margin: auto
  }

  .title2Main img {
    width: 108px;
    margin-left: 15px;
  }



  .treasureIMG {
    width: 450px;
    margin-top: 6vh;
    margin-left: auto;
    margin-right: auto;
    display: flex;
  }

  .btns3 {
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 7vh;
    flex-flow: column nowrap;
  }

  .btns3 button {
    margin: 15px;
    padding: 10px;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }

  .btn1 {
    font-family: 'American Captain', sans-serif;
    color: white;
    background: linear-gradient(90deg, rgba(178, 21, 167, 1) 0%, rgba(104, 20, 224, 1) 100%);
    border: #0084ff 1px solid;
    letter-spacing: 2px;
    font-weight: 400;
    font-size: 23px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 0;
    transition: 0.5s ease-in-out;
    /* Smooth transition for background */
  }

  .btn1:hover {
    background: linear-gradient(90deg, rgba(104, 20, 224, 1) 0%, rgba(178, 21, 167, 1) 100%);
  }


  .btn1 span {
    margin-left: 25px;
    margin-right: 25px;
    font-family: 'American Captain', sans-serif;
    border-left: 1px solid white;
    border-right: 1px solid white;
    font-size: 26px;
    padding: 10px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .txt {
    margin-top: auto;
    margin-bottom: auto;
    font-family: 'American Captain', sans-serif;

  }

  .btn2 {
    font-family: "Montserrat Alternates", serif;
    color: white;
    background-color: transparent;
    border: 1px solid white;
    font-size: 21px;
    width: 300px;
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
    transition: 0.3s ease-in-out;
    height: 63px;
  }

  .dropdown-container {
    position: relative;
    width: fit-content;
    margin: auto;
  }

  #dropdown {
    position: absolute;
    top: 110px;
    left: 0;
    right: 0;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(217, 217, 217, 0.336);
    backdrop-filter: blur(5px);
    border: 1px solid white;
    overflow: hidden;
    transition: all 0.5s ease;
    z-index: 50;
  }

  .dropdown-item {
    width: 90%;
    background: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    border: none;
    font-size: 15px;
    cursor: pointer;
    transition: color 0.1s ease;
    font-family: 'Vermin Vibes V', sans-serif;
    color: white;
    border-bottom: 1px solid rgba(255, 255, 255, 0.61);
  }

  #lastNum {
    border: none;
  }

  .dropdown-item:hover {
    color: rgba(255, 255, 255, 0.8);
    background-color: transparent;
  }

  .dropdown-item:lanst-child {
    border-bottom: none;
  }

  .dropdown-menu.open {
    max-height: 350px;
    background-color: #2da8fa;
  }

  /* Arrow rotation */
  #arrow-icon {
    margin-left: 10px;
    font-size: 16px;
    transition: transform 0.3s ease;
  }

  #arrow-icon.rotate {
    transform: rotate(180deg);
  }


  .btn2:hover {
    background-color: rgba(255, 255, 255, 0.11);
    -webkit-backdrop-filter: blur(2);
  }

  .btn2 div {
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
    display: flex;
  }

  .btn1 img {
    width: 30px;
    margin-top: -2px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .btn2 img {
    margin-left: 30px;

  }

  .nftSection {
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    height: 52vh;

  }

  .nftSection2 {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-evenly;
    display: flex;
    margin-bottom: 5vh;
    width: 100%;
  }

  .nftSection2 img {
    width: 115px;
    transition: transform .2s;
  }

  .nftSection2 img:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  /*.nftSection3 {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;
    margin-top: 9vh;
    margin-bottom: 5vh;
    scroll-behavior: smooth;
  }*/

  .nftSection3 {
    display: flex;
    overflow: hidden;
    width: fit-content;
  }

  .nftSection3 img {
    max-width: 100%;
    /* Ensure the image fits within the container */
    height: auto;
    /* Maintain aspect ratio */
    transition: transform .3s;
  }

  .nftSection3 img:hover {
    cursor: pointer;
  }

  .nftSection3Main {
    display: none;
  }

  .nftSection3Main-mob {
    /*: flex;
    flex-flow: row nowrap;
    width: fit-content;
    margin: auto;*/

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 30vh;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
    margin-top: auto;
    width: 90%;
  }

  /*.nftImage {
    width: calc(100% / 5);
     flex-shrink: 0;
    transition: transform 0.5s ease;
    padding: 10px;
  
    cursor: pointer;
  }*/

  .imageContainer {
    position: relative;
    display: inline-block;
    display:flex;
    justify-content: space-evenly;
    width: 100%;
  }

  .nftImage {
    display: block;
    width: 100%;
    height: auto;
    padding: 10px;
  }

  .sec {
    color: #ff1493;
    font-family: 'Vermin Vibes V', sans-serif;
  }

  .timer div:nth-child(1) {
    color: white;
    font-family: 'Vermin Vibes V', sans-serif;
  }

  .timer div:nth-child(2) {
    color: white;
    /* White for text */
    margin-top: 5px;
    font-family: 'Vermin Vibes V', sans-serif;
  }

  .arrowsDiv {
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
  }

  .arrows {
    width: 30px;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
    cursor: pointer;
  }

  .selected {
    transform: scale(1.2);
  }

  .title3 {
    font-family: 'Vermin Vibes V', sans-serif;
    text-align: center;
    color: white;
    font-size: 30px;
    padding-top: 50px;
  }

  .title3 span {
    font-family: 'Vermin Vibes V', sans-serif;
    color: #F241E5;
  }

  .line {
    height: 1.5px;
    width: 70%;
    background-color: #FFFFFF80;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 60px;
  }

  .fight {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    margin-top: 20px;
    width: 300px;
  }


  .battleSectionMain {
    width: 96%;
    margin-left: auto;
    margin-right: auto;
  }

  .battleSection {
    display: flex;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
    margin-top: 5vh;
    width: 100%;
  }

  .battleSection2 {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  .vs {
    width: 20%;
    height: 20%;
    margin: auto;
  }

  .combat {
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;
    margin-bottom: 5vh;
    margin-top: 2vh;
    z-index: 1;
    position: relative;
  }


  #battleImgs {
    animation: float 20s ease-in-out infinite;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
  }

  @keyframes float {

    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-20px);
    }
  }


  #bar1 {
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    margin-bottom: 20px;
  }

  .bar2 {
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    margin-bottom: 20px;

  }

  #vsMain {
    margin-top: 60px;
    margin-bottom: 60px;
  }

  .popup-containerMain {
    position: fixed;
    /* Ensures it stays in the viewport */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.5);
    height: fit-content;
    animation: fadeIn 0.4s ease-in-out forwards;
    z-index: 10000;
    width: 100%;
  }


  .character {
    width: 245px;
    /* Adjust to fit your design */
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: -90px;
  }

  .character--2 {
    width: 245px;
    /* Adjust to fit your design */
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: -90px;
  }

  .popup {
    background: rgba(255, 255, 255, 0.253);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.534);
    text-align: center;
    height: 280px;
    width: 90%;
    margin: auto;

  }


  .popup-text {
    font-size: 1.5rem;
    font-family: 'Vermin Vibes V', sans-serif;
    color: white;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
    display: flex;
    text-align: center;
    margin-top: 5px;
  }

  .close-button {
    position: absolute;
    top: 1px;
    right: 10px;
    font-size: 2rem;
    font-weight: bold;
    color: #ffffff;
    cursor: pointer;
  }


  .popup-containerMain3 {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .footer {
    width: 100%;
    background: linear-gradient(0deg, rgba(9, 14, 17, 0.186622191011236) 0%, rgba(23, 26, 27, 0.1192064606741573) 49%, rgba(38, 38, 38, 0.2652738764044944) 100%), url('../assets/footer.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
    justify-content: center;
    margin-bottom: auto;
    padding-top: 70px;
    padding-bottom: 70px;
    z-index: 10;
    position: relative;
    margin-top: 5%;
  }

  .footer img {
    border-radius: 100%;
    width: 70px;
    margin-right: 20px;
  }

  .footer--2 {
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
  }

  .footer2 {
    font-size: 30px;
    color: white;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    width: fit-content;
    display: flex;
    font-weight: 500;
    width: 100%;
  }

  .footer2 span {
    margin-top: auto;
    margin-bottom: auto;
  }

  .lineF {
    width: 90%;
    height: 1px;
    background-color: #FFFFFF80;
    margin-top: auto;
    margin-bottom: auto;
  }

  .crystels2 {
    position: absolute;
    right: 0;
    /* Aligns the image to the right edge */
    transform: translateY(-50%);
    /* Adjusts for centering */
    margin-top: -12%;
  }


  .crystels3 {
    position: absolute;
    right: 0;
    /* Aligns the image to the right edge */
    transform: translateY(-50%);
    /* Adjusts for centering */
  }

  .crystel {
    width: 230px;
  }
}


@media screen and (min-width: 768px) and (max-width: 991px) {
  #btn1Mobile {
    display: none;
  }

  .popUpImgMain img {
    width: 100px;
  }

  .close-button-2 {
    z-index: 100;
    font-size: 35px;
    justify-content: flex-end;
    display: flex;
    margin-right: -25px;
    cursor: pointer;
  }

  #rowImgs {
    overflow: hidden;
    /* Ensure only visible area shows */
    position: relative;
    margin-top: 52px;
  }

  .carouselImgs-2 {
    position: relative;
    width: 100vw;
    height: 300px;
    /* Adjust as needed */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
  }


  #sizeFonts {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: fit-content;
    margin: 0 auto;
    transform: translateY(100%);
    font-family: 'Vermin Vibes V', sans-serif;
    z-index: 1;
    font-size: 14px;
  }

  .carouselImgs-2 img {
    position: absolute;
    /* Ensure all images overlap */
    top: 50%;
    /* Center vertically */
    left: 50%;
    /* Start at the center */
    transform: translate(-50%, -50%);
    width: 10vw;
    /* Adjust size as needed */
    height: auto;
    opacity: 1;
    /* Ensure images are fully visible */
    animation: spread 2s ease-in-out forwards;
    /* Trigger the animation */
  }

  #treasureIMG2 {
    z-index: 10;

    -webkit-mask-image: linear-gradient(to top, transparent, black 10%, black 50%, transparent);
    mask-image: linear-gradient(to top, transparent, black 10%, black 50%, transparent);
    -webkit-mask-composite: destination-in;
    mask-composite: intersect;
    margin-top: -150px;
  }

  .treasureIMG2Div {
    width: 1500px;
    position: relative;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;
    margin-left: -370px;
  }

  .nftSection3Main-mob {
    display: none;
  }

  .headers {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #161618;
    flex-flow: row nowrap;
    width: 100%;
    display: flex;
    position: relative;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    border: 2px solid #AC13A7;

    background: url('../assets/nav.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .h1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    z-index: 100;

  }

  .headers div {
    font-size: 20.5px;
    color: white;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }


  .headers button {
    font-size: 20px;
    color: white;
  }

  .headers span:hover {
    color: #2da8fa;
  }

  .logo {
    width: 70px;
    height: 70px;
    margin-right: 20px;
    border-radius: 100px;
  }

  #logoH {
    font-size: 38px;
    font-weight: bold;
  }

  .headerS1 {
    text-align: left;
  }

  .headerS2 {
    display: flex;
    justify-content: space-evenly;
  }

  .headerS2-2 {
    margin-top: auto;
    margin-bottom: auto;
    display: flex;
  }

  .headerS2-2 div {
    padding-left: 18px;
    padding-right: 18px;
  }

  .headerS2-2 span {
    padding-left: 18px;
    padding-right: 18px;
  }

  .headerS3 {
    flex: 1;
    text-align: right;
  }

  .connectBTN {
    margin-left: 40px;
    width: 280px;
  }


  @keyframes glow {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(100%);
    }
  }

  .more-span {
    position: relative;
  }



  .allWrap {
    width: 100%;
    background-color: black;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }

  .contMain {
    background: radial-gradient(circle, rgba(0, 0, 0, 0.2877457865168539) 0%, rgba(0, 0, 0, 0.4450491573033708) 50%, rgba(0, 0, 0, 0.5911165730337078) 100%), url('../assets/bg3.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    overflow: hidden;
  }

  .cont-2 {
    background: url('../assets/snow.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .cont2 {
    background: url('../assets/bg2.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
  }

  .cont3 {
    background: url('../assets/bg4.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
    height: max-content;
    width: 100%;
  }

  .titleMain {
    font-family: 'American Captain', sans-serif;
    color: white;
    font-size: 42px;
    text-align: center;
    margin-top: 3vh;
  }

  .titleMain span {
    color: #F241E5;
    font-family: 'American Captain', sans-serif;
  }


  .title2Main {
    text-align: center;
    font-size: 19px;
    color: white;

    font-family: "Montserrat Alternates", serif;
    width: fit-content;
    display: flex;
    margin: auto
  }

  .title2Main img {
    width: 108px;
    margin-left: 15px;
  }


  .treasureIMG {
    width: 450px;
    margin-top: 6vh;
    margin-left: auto;
    margin-right: auto;
    display: flex;
  }

  .btns3 {
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10vh;
    flex-flow: column nowrap;
  }

  .btns3 button {
    margin: 15px;
    padding: 10px;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }

  .btn1 {
    font-family: 'American Captain', sans-serif;
    color: white;
    background: linear-gradient(90deg, rgba(178, 21, 167, 1) 0%, rgba(104, 20, 224, 1) 100%);
    border: #0084ff 1px solid;
    letter-spacing: 2px;
    font-weight: 400;
    font-size: 25px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 0;
    transition: 0.5s ease-in-out;
    /* Smooth transition for background */
  }

  .btn1:hover {
    background: linear-gradient(90deg, rgba(104, 20, 224, 1) 0%, rgba(178, 21, 167, 1) 100%);
  }


  .btn1 span {
    margin-left: 25px;
    margin-right: 25px;
    font-family: 'American Captain', sans-serif;
    border-left: 1px solid white;
    border-right: 1px solid white;
    font-size: 28px;
    padding: 10px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .txt {
    margin-top: auto;
    margin-bottom: auto;
    font-family: 'American Captain', sans-serif;

  }

  .btn2 {
    font-family: "Montserrat Alternates", serif;
    color: white;
    background-color: transparent;
    border: 1px solid white;
    font-size: 23px;
    width: 300px;
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
    transition: 0.3s ease-in-out;
    height: 68px;
  }

  .dropdown-container {
    position: relative;
    width: fit-content;
    margin: auto;
  }

  #dropdown {
    position: absolute;
    top: 110px;
    left: 0;
    right: 0;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(217, 217, 217, 0.336);
    backdrop-filter: blur(5px);
    border: 1px solid white;
    overflow: hidden;
    transition: all 0.5s ease;
    z-index: 50;
  }

  .dropdown-item {
    width: 90%;
    background: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    border: none;
    font-size: 15px;
    cursor: pointer;
    transition: color 0.1s ease;
    font-family: 'Vermin Vibes V', sans-serif;
    color: white;
    border-bottom: 1px solid rgba(255, 255, 255, 0.61);
  }

  #lastNum {
    border: none;
  }

  .dropdown-item:hover {
    color: rgba(255, 255, 255, 0.8);
    background-color: transparent;
  }

  .dropdown-item:lanst-child {
    border-bottom: none;
  }

  .dropdown-menu.open {
    max-height: 350px;
    background-color: #2da8fa;
  }

  /* Arrow rotation */
  #arrow-icon {
    margin-left: 10px;
    font-size: 16px;
    transition: transform 0.3s ease;
  }

  #arrow-icon.rotate {
    transform: rotate(180deg);
  }

  .btn2:hover {
    background-color: rgba(255, 255, 255, 0.11);
    -webkit-backdrop-filter: blur(2);
  }

  .btn2 div {
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
    display: flex;
  }

  .btn1 img {
    width: 30px;
    margin-top: -2px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .btn2 img {
    margin-left: 30px;

  }

  .nftSection {
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    height: 55vh;
  }

  .nftSection2 {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-evenly;
    display: flex;
    margin-bottom: 5vh;
    width: 90%;
  }

  .nftSection2 img {
    width: 145px;
    transition: transform .2s;
  }

  .nftSection2 img:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  /*.nftSection3 {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;
    margin-top: 9vh;
    margin-bottom: 5vh;
    scroll-behavior: smooth;
  }*/

  .nftSection3 {
    display: flex;
    overflow: hidden;
    width: 100%;
  }

  .nftSection3 img {
    max-width: 100%;
    /* Ensure the image fits within the container */
    height: auto;
    /* Maintain aspect ratio */
    transition: transform .3s;
  }

  .nftSection3 img:hover {
    cursor: pointer;
  }

  .nftSection3Main {
    /*: flex;
    flex-flow: row nowrap;
    width: fit-content;
    margin: auto;*/

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 35vh;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
    margin-top: auto;
    width: 90%;
  }

  /*.nftImage {
    width: calc(100% / 5);
     flex-shrink: 0;
    transition: transform 0.5s ease;
    padding: 10px;
  
    cursor: pointer;
  }*/

  .imageContainer {
    position: relative;
    display: inline-block;
    display:flex;
    justify-content: space-evenly;
    width: 100%;
  }

  .nftImage {
    display: block;
    width: 100%;
    height: auto;
    padding: 10px;
  }

  .sec {
    color: #ff1493;
    font-family: 'Vermin Vibes V', sans-serif;
  }

  .timer div:nth-child(1) {
    color: white;
    font-family: 'Vermin Vibes V', sans-serif;
  }

  .timer div:nth-child(2) {
    color: white;
    /* White for text */
    margin-top: 5px;
    font-family: 'Vermin Vibes V', sans-serif;
  }

  .arrowsDiv {
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
  }

  .arrows {
    width: 30px;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
    cursor: pointer;
  }

  .selected {
    transform: scale(1.2);
  }

  .title3 {
    font-family: 'Vermin Vibes V', sans-serif;
    text-align: center;
    color: white;
    font-size: 35px;
    padding-top: 50px;
  }

  .title3 span {
    font-family: 'Vermin Vibes V', sans-serif;
    color: #F241E5;
  }

  .line {
    height: 1.5px;
    width: 70%;
    background-color: #FFFFFF80;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 60px;
  }

  .fight {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    margin-top: 20px;
    width: 300px;
  }

  .battleSectionMain {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  .battleSection {
    display: flex;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
    margin-top: 5vh;
    width: 100%;
  }

  .battleSection2 {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  .vs {
    width: 20%;
    height: 20%;
    margin: auto;
  }

  .combat {
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;
    margin-bottom: 10vh;
    z-index: 1;
    position: relative;
  }


  #battleImgs {
    animation: float 20s ease-in-out infinite;
    width: 220px;
  }

  @keyframes float {

    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-20px);
    }
  }

  .bar2 {
    margin-left: auto;
  }


  .popup-containerMain {
    position: fixed;
    /* Ensures it stays in the viewport */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.5);
    height: fit-content;
    animation: fadeIn 0.4s ease-in-out forwards;
    z-index: 10000;
  }


  .character {
    width: 245px;
    /* Adjust to fit your design */
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: -90px;
  }

  .character--2 {
    width: 245px;
    /* Adjust to fit your design */
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: -90px;
  }

  .popup {
    background: rgba(255, 255, 255, 0.253);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.534);
    text-align: center;
    height: 280px;
    width: 600px;
  }


  .popup-text {
    font-size: 1.5rem;
    font-family: 'Vermin Vibes V', sans-serif;
    color: white;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
    display: flex;
    text-align: center;
    margin-top: 5px;
  }

  .close-button {
    position: absolute;
    top: 1px;
    right: 10px;
    font-size: 2rem;
    font-weight: bold;
    color: #ffffff;
    cursor: pointer;
  }


  .popup-containerMain3 {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .footer {
    width: 100%;
    background: linear-gradient(0deg, rgba(9, 14, 17, 0.186622191011236) 0%, rgba(23, 26, 27, 0.1192064606741573) 49%, rgba(38, 38, 38, 0.2652738764044944) 100%), url('../assets/footer.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
    justify-content: center;
    margin-bottom: auto;
    padding-top: 70px;
    padding-bottom: 70px;
    z-index: 10;
    position: relative;
    margin-top: 5%;
  }

  .footer img {
    border-radius: 100%;
    width: 70px;
    margin-right: 20px;
  }

  .footer--2 {
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
  }

  .footer2 {
    font-size: 30px;
    color: white;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    width: fit-content;
    display: flex;
    font-weight: 500;
    width: 100%;
  }

  .footer2 span {
    margin-top: auto;
    margin-bottom: auto;
  }

  .lineF {
    width: 90%;
    height: 1px;
    background-color: #FFFFFF80;
    margin-top: auto;
    margin-bottom: auto;
  }

  .crystels2 {
    position: absolute;
    right: 0;
    /* Aligns the image to the right edge */
    transform: translateY(-50%);
    /* Adjusts for centering */
    margin-top: -12%;
  }


  .crystels3 {
    position: absolute;
    right: 0;
    /* Aligns the image to the right edge */
    transform: translateY(-50%);
    /* Adjusts for centering */
  }

  .crystel {
    width: 230px;
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  #btn1Mobile {
    display: none;
  }

  .popUpImgMain img {
    width: 190px;
  }

  .close-button-2 {
    z-index: 100;
    font-size: 35px;
    justify-content: flex-end;
    display: flex;
    margin-right: -25px;
    cursor: pointer;
  }

  .treasureIMG2Div {
    position: relative;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;
  }

  #rowImgs {
    overflow: hidden;
    /* Ensure only visible area shows */
    position: relative;
    margin-top: -35px;
  }

  .carouselImgs-2 {
    position: relative;
    width: 88vw;
    height: 300px;
    /* Adjust as needed */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    margin-top: -75px;
  }


  #sizeFonts {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: fit-content;
    margin: 0 auto;
    transform: translateY(100%);
    font-family: 'Vermin Vibes V', sans-serif;
    z-index: 1;
    font-size: 14px;
  }

  .carouselImgs-2 img {
    position: absolute;
    /* Ensure all images overlap */
    top: 50%;
    /* Center vertically */
    left: 50%;
    /* Start at the center */
    transform: translate(-50%, -50%);
    width: 10vw;
    /* Adjust size as needed */
    height: auto;
    opacity: 1;
    /* Ensure images are fully visible */
    animation: spread 2s ease-in-out forwards;
    /* Trigger the animation */
  }

  #treasureIMG2 {
    width: 100%;
    margin-top: -100px;
    margin-left: auto;
    margin-right: auto;

    -webkit-mask-image: linear-gradient(to top, transparent, black 10%, black 50%, transparent);
    mask-image: linear-gradient(to top, transparent, black 10%, black 50%, transparent);
    -webkit-mask-composite: destination-in;
    mask-composite: intersect;

  }

  .nftSection3Main-mob {
    display: none;
  }

  .headers {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #161618;
    flex-flow: row nowrap;
    width: 100%;
    display: flex;
    position: relative;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    border: 2px solid #AC13A7;

    background: url('../assets/nav.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .h1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    z-index: 100;

  }

  .headers div {
    font-size: 20.5px;
    color: white;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }


  .headers button {
    font-size: 20px;
    color: white;
  }

  .headers span:hover {
    color: #2da8fa;
  }

  .logo {
    width: 70px;
    height: 70px;
    margin-right: 20px;
    border-radius: 100px;
  }

  #logoH {
    font-size: 38px;
    font-weight: bold;
  }

  .headerS1 {
    text-align: left;
  }

  .headerS2 {
    display: flex;
    justify-content: space-evenly;
  }

  .headerS2-2 {
    margin-top: auto;
    margin-bottom: auto;
    display: flex;
  }

  .headerS2-2 div {
    padding-left: 18px;
    padding-right: 18px;
  }

  .headerS2-2 span {
    padding-left: 18px;
    padding-right: 18px;
  }

  .headerS3 {
    flex: 1;
    text-align: right;
  }

  .connectBTN {
    margin-left: 40px;
    width: 280px;
  }


  @keyframes glow {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(100%);
    }
  }

  .more-span {
    position: relative;
  }



  .allWrap {
    width: 100%;
    background-color: black;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }

  .contMain {
    background: radial-gradient(circle, rgba(0, 0, 0, 0.2877457865168539) 0%, rgba(0, 0, 0, 0.4450491573033708) 50%, rgba(0, 0, 0, 0.5911165730337078) 100%), url('../assets/bg3.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    overflow: hidden;
  }

  .cont-2 {
    background: url('../assets/snow.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .cont2 {
    background: url('../assets/bg2.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
  }

  .cont3 {
    background: url('../assets/bg4.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
    height: max-content;
    width: 100%;
  }

  .titleMain {
    font-family: 'American Captain', sans-serif;
    color: white;
    font-size: 42px;
    text-align: center;

    margin-top: 3vh;
  }

  .titleMain span {
    color: #F241E5;
    font-family: 'American Captain', sans-serif;
  }

  .title2Main {
    text-align: center;
    font-size: 20px;
    color: white;

    font-family: "Montserrat Alternates", serif;
    width: fit-content;
    display: flex;
    margin: auto
  }

  .title2Main img {
    width: 110px;
    margin-left: 15px;
  }


  .treasureIMG {
    width: 450px;
    margin-top: 12vh;
    margin-left: auto;
    margin-right: auto;
    display: flex;
  }

  .btns3 {
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10vh;
  }

  .btns3 button {
    margin: 15px;
    padding: 10px;
  }

  .btn1 {
    font-family: 'American Captain', sans-serif;
    color: white;
    background: linear-gradient(90deg, rgba(178, 21, 167, 1) 0%, rgba(104, 20, 224, 1) 100%);
    border: #0084ff 1px solid;
    letter-spacing: 2px;
    font-weight: 400;
    font-size: 25px;
    width: 310px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 0;
    transition: 0.5s ease-in-out;
    /* Smooth transition for background */
  }

  .btn1:hover {
    background: linear-gradient(90deg, rgba(104, 20, 224, 1) 0%, rgba(178, 21, 167, 1) 100%);
  }


  .btn1 span {
    margin-left: 25px;
    margin-right: 25px;
    font-family: 'American Captain', sans-serif;
    border-left: 1px solid white;
    border-right: 1px solid white;
    font-size: 33px;
    padding: 10px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .txt {
    margin-top: auto;
    margin-bottom: auto;
    font-family: 'American Captain', sans-serif;

  }

  .btn2 {
    font-family: "Montserrat Alternates", serif;
    color: white;
    background-color: transparent;
    border: 1px solid white;
    font-size: 23px;
    width: 250px;
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
    transition: 0.3s ease-in-out;
    height: 70px;
  }

  .dropdown-container {
    position: relative;
    width: fit-content;
  }

  #dropdown {
    position: absolute;
    top: 110px;
    left: 0;
    right: 0;
    width: 250px;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(217, 217, 217, 0.336);
    backdrop-filter: blur(5px);
    border: 1px solid white;
    overflow: hidden;
    transition: all 0.5s ease;
    z-index: 50;
  }

  .dropdown-item {
    width: 90%;
    background: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    border: none;
    font-size: 16px;
    cursor: pointer;
    transition: color 0.1s ease;
    font-family: 'Vermin Vibes V', sans-serif;
    color: white;
    border-bottom: 1px solid rgba(255, 255, 255, 0.61);
  }

  #lastNum {
    border: none;
  }

  .dropdown-item:hover {
    color: rgba(255, 255, 255, 0.8);
    background-color: transparent;
  }

  .dropdown-item:lanst-child {
    border-bottom: none;
  }

  .dropdown-menu.open {
    max-height: 350px;
    background-color: #2da8fa;
  }

  /* Arrow rotation */
  #arrow-icon {
    margin-left: 10px;
    font-size: 16px;
    transition: transform 0.3s ease;
  }

  #arrow-icon.rotate {
    transform: rotate(180deg);
  }

  .btn2:hover {
    background-color: rgba(255, 255, 255, 0.11);
    -webkit-backdrop-filter: blur(2);
  }

  .btn2 div {
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
    display: flex;
  }

  .btn1 img {
    width: 30px;
    margin-top: -2px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .btn2 img {
    margin-left: 30px;

  }

  .nftSection {
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    height: 50vh;
  }

  .nftSection2 {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-evenly;
    display: flex;
    margin-bottom: 5vh;
    width: 90%;
  }

  .nftSection2 img {
    width: 175px;
    transition: transform .2s;
  }

  .nftSection2 img:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  /*.nftSection3 {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;
    margin-top: 9vh;
    margin-bottom: 5vh;
    scroll-behavior: smooth;
  }*/

  .nftSection3 {
    display: flex;
    overflow: hidden;
    width: 100%;
  }

  .nftSection3 img {
    max-width: 100%;
    /* Ensure the image fits within the container */
    height: auto;
    /* Maintain aspect ratio */
    transition: transform .3s;
  }

  .nftSection3 img:hover {
    cursor: pointer;
  }

  .nftSection3Main {
    /*: flex;
    flex-flow: row nowrap;
    width: fit-content;
    margin: auto;*/

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    height: 35vh;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
    margin-top: auto;
    width: 80%;
  }

  /*.nftImage {
    width: calc(100% / 5);
     flex-shrink: 0;
    transition: transform 0.5s ease;
    padding: 10px;
  
    cursor: pointer;
  }*/

  .imageContainer {
    position: relative;
    display: inline-block;
    display:flex;
    justify-content: space-evenly;
    width: 100%;
  }

  .nftImage {
    display: block;
    width: 100%;
    height: auto;
    padding: 10px;
  }

  .sec {
    color: #ff1493;
    font-family: 'Vermin Vibes V', sans-serif;
  }

  .timer div:nth-child(1) {
    color: white;
    font-family: 'Vermin Vibes V', sans-serif;
  }

  .timer div:nth-child(2) {
    color: white;
    /* White for text */
    margin-top: 5px;
    font-family: 'Vermin Vibes V', sans-serif;
  }

  .arrowsDiv {
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
  }

  .arrows {
    width: 30px;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
    cursor: pointer;
  }

  .selected {
    transform: scale(1.2);
  }

  .title3 {
    font-family: 'Vermin Vibes V', sans-serif;
    text-align: center;
    color: white;
    font-size: 35px;
    padding-top: 50px;
  }

  .title3 span {
    font-family: 'Vermin Vibes V', sans-serif;
    color: #F241E5;
  }

  .line {
    height: 1.5px;
    width: 60%;
    background-color: #FFFFFF80;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 80px;
  }

  .fight {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    margin-top: 20px;
    width: 300px;
  }

  .battleSectionMain {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  .battleSection {
    display: flex;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
    margin-top: 5vh;
    width: 100%;
  }

  .battleSection2 {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  .vs {
    width: 20%;
    height: 20%;
    margin: auto;
  }

  .combat {
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;
    margin-bottom: 10vh;
    margin-top: -5vh;
    z-index: 1000;
    position: relative;
  }


  #battleImgs {
    animation: float 20s ease-in-out infinite;
    width: 240px;
  }

  @keyframes float {

    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-20px);
    }
  }

  .bar2 {
    margin-left: auto;
  }

  .popup-containerMain {
    position: fixed;
    /* Ensures it stays in the viewport */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.5);
    height: fit-content;
    animation: fadeIn 0.4s ease-in-out forwards;
    z-index: 10000;
  }


  .character {
    width: 245px;
    /* Adjust to fit your design */
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: -90px;
  }

  .character--2 {
    width: 245px;
    /* Adjust to fit your design */
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: -90px;
  }

  .popup {
    background: rgba(255, 255, 255, 0.253);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.534);
    text-align: center;
    height: 280px;
    width: 700px;
  }


  .popup-text {
    font-size: 1.5rem;
    font-family: 'Vermin Vibes V', sans-serif;
    color: white;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
    display: flex;
    text-align: center;
    margin-top: 5px;
  }

  .close-button {
    position: absolute;
    top: 1px;
    right: 10px;
    font-size: 2rem;
    font-weight: bold;
    color: #ffffff;
    cursor: pointer;
  }


  .popup-containerMain3 {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .footer {
    width: 100%;
    background: linear-gradient(0deg, rgba(9, 14, 17, 0.186622191011236) 0%, rgba(23, 26, 27, 0.1192064606741573) 49%, rgba(38, 38, 38, 0.2652738764044944) 100%), url('../assets/footer.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
    justify-content: center;
    margin-bottom: auto;
    padding-top: 70px;
    padding-bottom: 70px;
    z-index: 10;
    position: relative;
    margin-top: 5%;
  }

  .footer img {
    border-radius: 100%;
    width: 70px;
    margin-right: 20px;
  }

  .footer--2 {
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
  }

  .footer2 {
    font-size: 30px;
    color: white;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    width: fit-content;
    display: flex;
    font-weight: 500;
    width: 100%;
  }

  .footer2 span {
    margin-top: auto;
    margin-bottom: auto;
  }

  .lineF {
    width: 90%;
    height: 1px;
    background-color: #FFFFFF80;
    margin-top: auto;
    margin-bottom: auto;
  }

  .crystels2 {
    position: absolute;
    right: 0;
    /* Aligns the image to the right edge */
    transform: translateY(-50%);
    /* Adjusts for centering */
    margin-top: -12%;
  }


  .crystels3 {
    position: absolute;
    right: 0;
    /* Aligns the image to the right edge */
    transform: translateY(-50%);
    /* Adjusts for centering */
  }

  .crystel {
    width: 230px;
  }
}

@media screen and (min-width: 1200px) and (max-width: 1919px) {
  #btn1Mobile {
    display: none;
  }

  .popUpImgMain img {
    width: 190px;
  }

  .close-button-2 {
    z-index: 100;
    font-size: 35px;
    justify-content: flex-end;
    display: flex;
    margin-right: -25px;
    cursor: pointer;
  }

  .treasureIMG2Div {
    position: relative;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;
  }

  #rowImgs {
    overflow: hidden;
    /* Ensure only visible area shows */
    position: relative;
    margin-top: -35px;
  }

  #sizeFonts {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: fit-content;
    margin: 0 auto;
    transform: translateY(100%);
    font-family: 'Vermin Vibes V', sans-serif;
    z-index: 1;
    font-size: 14px;
  }

  .carouselImgs-2 {
    position: relative;
    width: 88vw;
    height: 300px;
    /* Adjust as needed */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    margin-top: -50px;
  }

  .carouselImgs-2 img {
    position: absolute;
    /* Ensure all images overlap */
    top: 50%;
    /* Center vertically */
    left: 50%;
    /* Start at the center */
    transform: translate(-50%, -50%);
    width: 10.5vw;
    /* Adjust size as needed */
    height: auto;
    opacity: 1;
    /* Ensure images are fully visible */
    animation: spread 2s ease-in-out forwards;
    /* Trigger the animation */
  }

  #treasureIMG2 {
    width: 100%;
    margin-top: -100px;
    margin-left: auto;
    margin-right: auto;

    -webkit-mask-image: linear-gradient(to top, transparent, black 10%, black 50%, transparent);
    mask-image: linear-gradient(to top, transparent, black 10%, black 50%, transparent);
    -webkit-mask-composite: destination-in;
    mask-composite: intersect;
  }

  .dropdown-container {
    position: relative;
    width: fit-content;
  }

  .nftSection3Main-mob {
    display: none;
  }

  .headers {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #161618;
    flex-flow: row nowrap;
    width: 100%;
    display: flex;
    position: relative;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    border: 2px solid #AC13A7;

    background: url('../assets/nav.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .h1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    z-index: 100;

  }

  .headers div {
    font-size: 20.5px;
    color: white;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }


  .headers button {
    font-size: 20px;
    color: white;
  }

  .headers span:hover {
    color: #2da8fa;
  }

  .logo {
    width: 70px;
    height: 70px;
    margin-right: 20px;
    border-radius: 100px;
  }

  #logoH {
    font-size: 38px;
    font-weight: bold;
  }

  .headerS1 {
    text-align: left;
  }

  .headerS2 {
    display: flex;
    justify-content: space-evenly;
  }

  .headerS2-2 {
    margin-top: auto;
    margin-bottom: auto;
    display: flex;
  }

  .headerS2-2 div {
    padding-left: 18px;
    padding-right: 18px;
  }

  .headerS2-2 span {
    padding-left: 18px;
    padding-right: 18px;
  }

  .headerS3 {
    flex: 1;
    text-align: right;
  }

  .connectBTN {
    margin-left: 40px;
    width: 280px;
  }


  @keyframes glow {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(100%);
    }
  }

  .more-span {
    position: relative;
  }



  .allWrap {
    width: 100%;
    background-color: black;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }

  .contMain {
    background: radial-gradient(circle, rgba(0, 0, 0, 0.2877457865168539) 0%, rgba(0, 0, 0, 0.4450491573033708) 50%, rgba(0, 0, 0, 0.5911165730337078) 100%), url('../assets/bg3.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    overflow: hidden;
  }

  .cont-2 {
    background: url('../assets/snow.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .cont2 {
    background: url('../assets/bg2.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
  }

  .cont3 {
    background: url('../assets/bg4.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
    height: max-content;
    width: 100%;
  }

  .titleMain {
    font-family: 'American Captain', sans-serif;
    color: white;
    font-size: 45px;
    text-align: center;

    margin-top: 3vh;
  }

  .titleMain span {
    color: #F241E5;
    font-family: 'American Captain', sans-serif;
  }


  .title2Main {
    text-align: center;
    font-size: 20px;
    color: white;

    font-family: "Montserrat Alternates", serif;
    width: fit-content;
    display: flex;
    margin: auto
  }

  .title2Main img {
    width: 110px;
    margin-left: 15px;
  }

  .treasureIMG {
    width: 450px;
    margin-top: 14vh;
    margin-left: auto;
    margin-right: auto;
    display: flex;
  }

  .btns3 {
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15vh;
  }

  .btns3 button {
    margin: 15px;
    padding: 10px;
  }

  .btn1 {
    font-family: 'American Captain', sans-serif;
    color: white;
    background: linear-gradient(90deg, rgba(178, 21, 167, 1) 0%, rgba(104, 20, 224, 1) 100%);
    border: #0084ff 1px solid;
    letter-spacing: 2px;
    font-weight: 400;
    font-size: 25px;
    width: 310px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 0;
    transition: 0.5s ease-in-out;
    /* Smooth transition for background */
  }

  .btn1:hover {
    background: linear-gradient(90deg, rgba(104, 20, 224, 1) 0%, rgba(178, 21, 167, 1) 100%);
  }


  .btn1 span {
    margin-left: 25px;
    margin-right: 25px;
    font-family: 'American Captain', sans-serif;
    border-left: 1px solid white;
    border-right: 1px solid white;
    font-size: 33px;
    padding: 10px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .txt {
    margin-top: auto;
    margin-bottom: auto;
    font-family: 'American Captain', sans-serif;

  }

  .btn2 {
    font-family: "Montserrat Alternates", serif;
    color: white;
    background-color: transparent;
    border: 1px solid white;
    font-size: 23px;
    width: 250px;
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
    transition: 0.3s ease-in-out;
    height: 70px;
  }

  #dropdown {
    position: absolute;
    top: 110px;
    left: 0;
    right: 0;
    width: 250px;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(217, 217, 217, 0.336);
    backdrop-filter: blur(5px);
    border: 1px solid white;
    overflow: hidden;
    transition: all 0.5s ease;
    z-index: 50;
  }

  .dropdown-item {
    width: 90%;
    background: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    border: none;
    font-size: 16px;
    cursor: pointer;
    transition: color 0.1s ease;
    font-family: 'Vermin Vibes V', sans-serif;
    color: white;
    border-bottom: 1px solid rgba(255, 255, 255, 0.61);
  }

  #lastNum {
    border: none;
  }

  .dropdown-item:hover {
    color: rgba(255, 255, 255, 0.8);
    background-color: transparent;
  }

  .dropdown-item:lanst-child {
    border-bottom: none;
  }

  .dropdown-menu.open {
    max-height: 350px;
    background-color: #2da8fa;
  }

  /* Arrow rotation */
  #arrow-icon {
    margin-left: 10px;
    font-size: 16px;
    transition: transform 0.3s ease;
  }

  #arrow-icon.rotate {
    transform: rotate(180deg);
  }

  .btn2:hover {
    background-color: rgba(255, 255, 255, 0.11);
    -webkit-backdrop-filter: blur(2);
  }

  .btn2 div {
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
    display: flex;
  }

  .btn1 img {
    width: 30px;
    margin-top: -2px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .btn2 img {
    margin-left: 30px;

  }

  .nftSection {
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    height: 53vh;
  }

  .nftSection2 {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-evenly;
    display: flex;
    margin-bottom: 5vh;
    width: 60%;
  }

  .nftSection2 img {
    width: 165px;
    transition: transform .2s;
  }

  .nftSection2 img:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  /*.nftSection3 {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;
    margin-top: 9vh;
    margin-bottom: 5vh;
    scroll-behavior: smooth;
  }*/

  .nftSection3 {
    display: flex;
    overflow: hidden;
    width: fit-content;
  }

  .nftSection3 img {
    max-width: 100%;
    /* Ensure the image fits within the container */
    height: auto;
    /* Maintain aspect ratio */
    transition: transform .3s;
  }

  .nftSection3 img:hover {
    cursor: pointer;
  }

  .nftSection3Main {
    /*: flex;
  flex-flow: row nowrap;
  width: fit-content;
  margin: auto;*/

    display: flex;
    align-items: center;
    justify-content: center;
    height: 35vh;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
    margin-top: auto;
    width: 80%;
  }

  /*.nftImage {
    width: calc(100% / 5);
     flex-shrink: 0;
    transition: transform 0.5s ease;
    padding: 10px;
  
    cursor: pointer;
  }*/

  .imageContainer {
    position: relative;
    display: inline-block;
    display:flex;
    justify-content: space-evenly;
    width: 100%;
  }

  .nftImage {
    display: block;
    width: 100%;
    height: auto;
    padding: 10px;
  }

  .sec {
    color: #ff1493;
    font-family: 'Vermin Vibes V', sans-serif;
  }

  .timer div:nth-child(1) {
    color: white;
    font-family: 'Vermin Vibes V', sans-serif;
  }

  .timer div:nth-child(2) {
    color: white;
    /* White for text */
    margin-top: 5px;
    font-family: 'Vermin Vibes V', sans-serif;
  }

  .arrowsDiv {
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
  }

  .arrows {
    width: 30px;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
    cursor: pointer;
    margin-left: 50px;
    margin-right: 50px;
  }

  .selected {
    transform: scale(1.2);
  }

  .title3 {
    font-family: 'Vermin Vibes V', sans-serif;
    text-align: center;
    color: white;
    font-size: 35px;
    padding-top: 50px;
  }

  .title3 span {
    font-family: 'Vermin Vibes V', sans-serif;
    color: #F241E5;
  }

  .line {
    height: 1.5px;
    width: 30%;
    background-color: #FFFFFF80;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 4%;
  }

  .fight {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    margin-top: 20px;
    width: 300px;

  }

  .battleSectionMain {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  .battleSection {
    display: flex;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
    margin-top: 5vh;
    width: 100%;
  }

  .battleSection2 {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  .vs {
    width: 20%;
    height: 20%;
    margin: auto;
  }

  .combat {
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;
    margin-bottom: 10vh;
    margin-top: -5vh;
    z-index: 1000;
    position: relative;
  }


  #battleImgs {
    animation: float 20s ease-in-out infinite;
    width: 250px;
  }

  @keyframes float {

    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-20px);
    }
  }

  .bar2 {
    margin-left: auto;
  }

  .popup-containerMain {
    position: fixed;
    /* Ensures it stays in the viewport */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.5);
    height: fit-content;
    animation: fadeIn 0.4s ease-in-out forwards;
    z-index: 10000;
  }


  .character {
    width: 245px;
    /* Adjust to fit your design */
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: -90px;
  }

  .character--2 {
    width: 245px;
    /* Adjust to fit your design */
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: -90px;
  }

  .popup {
    background: rgba(255, 255, 255, 0.253);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.534);
    text-align: center;
    height: 280px;
    width: 700px;
  }

  .popup-text {
    font-size: 1.5rem;
    font-family: 'Vermin Vibes V', sans-serif;
    color: white;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
    display: flex;
    text-align: center;
    margin-top: 5px;
  }

  .close-button {
    position: absolute;
    top: 1px;
    right: 10px;
    font-size: 2rem;
    font-weight: bold;
    color: #ffffff;
    cursor: pointer;
  }


  .popup-containerMain3 {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .footer {
    width: 100%;
    background: linear-gradient(0deg, rgba(9, 14, 17, 0.186622191011236) 0%, rgba(23, 26, 27, 0.1192064606741573) 49%, rgba(38, 38, 38, 0.2652738764044944) 100%), url('../assets/footer.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
    justify-content: center;
    margin-bottom: auto;
    padding-top: 70px;
    padding-bottom: 70px;
    z-index: 10;
    position: relative;
    margin-top: 5%;
  }

  .footer img {
    border-radius: 100%;
    width: 70px;
    margin-right: 20px;
  }

  .footer--2 {
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
  }

  .footer2 {
    font-size: 30px;
    color: white;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    width: fit-content;
    display: flex;
    font-weight: 500;
    width: 100%;
  }

  .footer2 span {
    margin-top: auto;
    margin-bottom: auto;
  }

  .lineF {
    width: 90%;
    height: 1px;
    background-color: #FFFFFF80;
    margin-top: auto;
    margin-bottom: auto;
  }

  .crystels2 {
    position: absolute;
    right: 0;
    /* Aligns the image to the right edge */
    transform: translateY(-50%);
    /* Adjusts for centering */
    margin-top: -12%;
  }


  .crystels3 {
    position: absolute;
    right: 0;
    /* Aligns the image to the right edge */
    transform: translateY(-50%);
    /* Adjusts for centering */
  }

  .crystel {
    width: 230px;
  }
}

@media screen and (min-width: 1920px) {
  #btn1Mobile {
    display: none;
  }

  .popUpImgMain img {
    width: 190px;
    animation: highlightIMG 0.4s infinite;
  }

  @keyframes highlightIMG {
    0% {

      filter: brightness(1);
    }

    50% {

      filter: brightness(1.5);
    }

    100% {

      filter: brightness(1);
    }
  }

  .close-button-2 {
    z-index: 100;
    font-size: 35px;
    justify-content: flex-end;
    display: flex;
    margin-right: -25px;
    cursor: pointer;
  }

  .close-button-2 {
    z-index: 100;
    font-size: 50px;
    justify-content: flex-end;
    display: flex;
    margin-right: -45px;
    cursor: pointer;
  }

  #rowImgs {
    overflow: hidden;
    /* Ensure only visible area shows */
    position: relative;
    margin-top: -35px;
  }

  #sizeFonts {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: fit-content;
    margin: 0 auto;
    transform: translateY(100%);
    font-family: 'Vermin Vibes V', sans-serif;
    z-index: 1;
    font-size: 19px;
  }

  .carouselImgs-2 {
    position: relative;
    width: 88vw;
    height: 300px;
    /* Adjust as needed */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;

  }

  .carouselImgs-2 img {
    position: absolute;
    /* Ensure all images overlap */
    top: 50%;
    /* Center vertically */
    left: 50%;
    /* Start at the center */
    transform: translate(-50%, -50%);
    width: 10vw;
    /* Adjust size as needed */
    height: auto;
    opacity: 1;
    /* Ensure images are fully visible */
    animation: spread 2s ease-in-out forwards;
    /* Trigger the animation */
  }

  .treasureIMG2Div {
    position: relative;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;
    padding-top: 230px;
  }

  #treasureIMG2 {
    width: 80%;
    margin-top: -280px;

    -webkit-mask-image: linear-gradient(to top, transparent, black 10%, black 50%, transparent);
    mask-image: linear-gradient(to top, transparent, black 10%, black 50%, transparent);
    -webkit-mask-composite: destination-in;
    mask-composite: intersect;
  }

  .dropdown-container {
    position: relative;
    width: fit-content;
  }

  .nftSection3Main-mob {
    display: none;
  }

  .headers {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #161618;
    flex-flow: row nowrap;
    width: 100%;
    display: flex;
    position: relative;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    border: 2px solid #AC13A7;

    background: url('../assets/nav.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .h1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    z-index: 100;

  }

  .headers div {
    font-size: 20.5px;
    color: white;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }


  .headers button {
    font-size: 20px;
    color: white;
  }

  .headers span:hover {
    color: #2da8fa;
  }

  .logo {
    width: 70px;
    height: 70px;
    margin-right: 20px;
    border-radius: 100px;
  }

  #logoH {
    font-size: 38px;
    font-weight: bold;
  }

  .headerS1 {
    text-align: left;
  }

  .headerS2 {
    display: flex;
    justify-content: space-evenly;
  }

  .headerS2-2 {
    margin-top: auto;
    margin-bottom: auto;
    display: flex;
  }

  .headerS2-2 div {
    padding-left: 18px;
    padding-right: 18px;
  }

  .headerS2-2 span {
    padding-left: 18px;
    padding-right: 18px;
  }

  .headerS3 {
    flex: 1;
    text-align: right;
  }

  .connectBTN {
    margin-left: 40px;
    width: 280px;
  }


  @keyframes glow {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(100%);
    }
  }

  .more-span {
    position: relative;
  }



  .allWrap {
    width: 100%;
    background-color: black;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }

  .contMain {
    background: radial-gradient(circle, rgba(0, 0, 0, 0.2877457865168539) 0%, rgba(0, 0, 0, 0.4450491573033708) 50%, rgba(0, 0, 0, 0.5911165730337078) 100%), url('../assets/bg3.png') center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    overflow: hidden;
  }

  .cont-2 {
    background: url('../assets/snow.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .cont2 {
    background: url('../assets/bg2.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
  }

  .cont3 {
    background: url('../assets/bg4.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
    height: max-content;
    width: 100%;
  }

  .titleMain {
    font-family: 'American Captain', sans-serif;
    color: white;
    font-size: 50px;
    text-align: center;
    margin-top: 7vh;
  }

  .titleMain span {
    color: #F241E5;
    font-family: 'American Captain', sans-serif;
  }

  .title2Main {
    text-align: center;
    font-size: 20px;
    color: white;

    font-family: "Montserrat Alternates", serif;
    width: fit-content;
    display: flex;
    margin: auto
  }

  .title2Main img {
    width: 110px;
    margin-left: 15px;
  }

  .treasureIMG {
    width: 500px;
    margin-top: 5vh;
    margin-left: auto;
    margin-right: auto;
    display: flex;
  }

  .btns3 {
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 12vh;
  }

  .btns3 button {
    margin: 15px;
    padding: 10px;
  }

  .btn1 {
    font-family: 'American Captain', sans-serif;
    color: white;
    background: linear-gradient(90deg, rgba(178, 21, 167, 1) 0%, rgba(104, 20, 224, 1) 100%);
    border: #0084ff 1px solid;
    letter-spacing: 2px;
    font-weight: 400;
    font-size: 25px;
    width: 310px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 0;
    transition: 0.5s ease-in-out;
    /* Smooth transition for background */
  }

  .btn1:hover {
    background: linear-gradient(90deg, rgba(104, 20, 224, 1) 0%, rgba(178, 21, 167, 1) 100%);
  }


  .btn1 span {
    margin-left: 25px;
    margin-right: 25px;
    font-family: 'American Captain', sans-serif;
    border-left: 1px solid white;
    border-right: 1px solid white;
    font-size: 33px;
    padding: 10px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .txt {
    margin-top: auto;
    margin-bottom: auto;
    font-family: 'American Captain', sans-serif;

  }

  .btn2 {
    font-family: "Montserrat Alternates", serif;
    color: white;
    background-color: transparent;
    border: 1px solid white;
    font-size: 23px;
    width: 250px;
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
    transition: 0.3s ease-in-out;
    height: 80px;
  }


  #dropdown {
    position: absolute;
    top: 110px;
    left: 0;
    right: 0;
    width: 250px;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(217, 217, 217, 0.336);
    backdrop-filter: blur(5px);
    border: 1px solid white;
    overflow: hidden;
    transition: all 0.5s ease;
    z-index: 50;
  }

  .dropdown-item {
    width: 90%;
    background: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    border: none;
    font-size: 17px;
    cursor: pointer;
    transition: color 0.1s ease;
    font-family: 'Vermin Vibes V', sans-serif;
    color: white;
    border-bottom: 1px solid rgba(255, 255, 255, 0.61);
  }

  #lastNum {
    border: none;
  }

  .dropdown-item:hover {
    color: rgba(255, 255, 255, 0.8);
    background-color: transparent;
  }

  .dropdown-item:lanst-child {
    border-bottom: none;
  }

  .dropdown-menu.open {
    max-height: 350px;
    background-color: #2da8fa;
  }

  /* Arrow rotation */
  #arrow-icon {
    margin-left: 10px;
    font-size: 16px;
    transition: transform 0.3s ease;
  }

  #arrow-icon.rotate {
    transform: rotate(180deg);
  }

  .btn2:hover {
    background-color: rgba(255, 255, 255, 0.11);
    -webkit-backdrop-filter: blur(2);
  }

  .btn2 div {
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
    display: flex;
  }

  .btn1 img {
    width: 30px;
    margin-top: -2px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .btn2 img {
    margin-left: 30px;

  }

  .nftSection {
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    height: 63vh;
  }

  .nftSection2 {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-evenly;
    display: flex;
    margin-bottom: 5vh;
    width: 52%;
  }

  .nftSection2 img {
    width: 175px;
    transition: transform .2s;
  }

  .nftSection2 img:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  /*.nftSection3 {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  display: flex;
  margin-top: 9vh;
  margin-bottom: 5vh;
  scroll-behavior: smooth;
}*/

  .nftSection3 {
    display: flex;
    overflow: hidden;
    width: 70%;
  }

  .nftSection3 img {
    max-width: 100%;
    /* Ensure the image fits within the container */
    height: auto;
    /* Maintain aspect ratio */
    transition: transform .3s;
  }

  .nftSection3 img:hover {
    cursor: pointer;
  }

  .nftSection3Main {
    /*: flex;
  flex-flow: row nowrap;
  width: fit-content;
  margin: auto;*/

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    height: 35vh;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
    margin-top: auto;
    width: 50%;
  }

  /*.nftImage {
  width: calc(100% / 5);
   flex-shrink: 0;
  transition: transform 0.5s ease;
  padding: 10px;

  cursor: pointer;
}*/

  .imageContainer {
    position: relative;
    display: inline-block;
    display:flex;
    justify-content: space-between;
    width: max-content;
    background-color: #2da8fa;
  }

  .nftImage {
    display: block;
    width: 100%;
    height: auto;
    padding: 10px;
  }

  .sec {
    color: #ff1493;
    font-family: 'Vermin Vibes V', sans-serif;
  }

  .timer div:nth-child(1) {
    color: white;
    font-family: 'Vermin Vibes V', sans-serif;
  }

  .timer div:nth-child(2) {
    color: white;
    /* White for text */
    margin-top: 5px;
    font-family: 'Vermin Vibes V', sans-serif;
  }

  .arrowsDiv {
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
  }

  .arrows {
    width: 30px;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
    cursor: pointer;
  }

  .selected {
    transform: scale(1.2);
  }

  .title3 {
    font-family: 'Vermin Vibes V', sans-serif;
    text-align: center;
    color: white;
    font-size: 47px;
    padding-top: 50px;
  }

  .title3 span {
    font-family: 'Vermin Vibes V', sans-serif;
    color: #F241E5;
  }

  .line {
    height: 1.5px;
    width: 30%;
    background-color: #FFFFFF80;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 4%;
  }

  .fight {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    margin-top: 20px;
    width: 350px;
  }

  .battleSectionMain {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  .battleSection {
    display: flex;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
    margin-top: 5vh;
    width: 100%;
  }

  .battleSection2 {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  .vs {
    width: 20%;
    height: 20%;
    margin: auto;
  }

  .combat {
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;
    margin-bottom: 10vh;
    margin-top: -5vh;
    z-index: 1000;
    position: relative;
  }


  #battleImgs {
    animation: float 20s ease-in-out infinite;
    width: 300px;
  }

  @keyframes float {

    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-20px);
    }
  }

  .bar2 {
    margin-left: auto;
  }

  .popup-containerMain {
    position: fixed;
    /* Ensures it stays in the viewport */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.5);
    height: fit-content;
    animation: fadeIn 0.4s ease-in-out forwards;
    z-index: 10000;
  }

  .character {
    width: 245px;
    /* Adjust to fit your design */
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: -90px;
  }

  .character--2 {
    width: 255px;
    /* Adjust to fit your design */
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: -105px;
  }

  .popup {
    background: rgba(255, 255, 255, 0.253);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.534);
    text-align: center;
    height: 280px;
    width: 700px;
  }

  .popup-text {
    font-size: 1.5rem;
    font-family: 'Vermin Vibes V', sans-serif;
    color: white;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
    display: flex;
    text-align: center;
    margin-top: 5px;
  }

  .close-button {
    position: absolute;
    top: 1px;
    right: 10px;
    font-size: 2rem;
    font-weight: bold;
    color: #ffffff;
    cursor: pointer;
  }


  .popup-containerMain3 {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .footer {
    width: 100%;
    background: linear-gradient(0deg, rgba(9, 14, 17, 0.186622191011236) 0%, rgba(23, 26, 27, 0.1192064606741573) 49%, rgba(38, 38, 38, 0.2652738764044944) 100%), url('../assets/footer.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
    justify-content: center;
    margin-bottom: auto;
    padding-top: 70px;
    padding-bottom: 70px;
    z-index: 10;
    position: relative;
    margin-top: 5%;
  }

  .footer img {
    border-radius: 100%;
    width: 70px;
    margin-right: 20px;
  }

  .footer--2 {
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
  }

  .footer2 {
    font-size: 30px;
    color: white;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    width: fit-content;
    display: flex;
    font-weight: 500;
    width: 100%;
  }

  .footer2 span {
    margin-top: auto;
    margin-bottom: auto;
  }

  .lineF {
    width: 90%;
    height: 1px;
    background-color: #FFFFFF80;
    margin-top: auto;
    margin-bottom: auto;
  }

  .crystels2 {
    position: absolute;
    right: 0;
    /* Aligns the image to the right edge */
    transform: translateY(-50%);
    /* Adjusts for centering */
    margin-top: -12%;
  }


  .crystels3 {
    position: absolute;
    right: 0;
    /* Aligns the image to the right edge */
    transform: translateY(-50%);
    /* Adjusts for centering */
  }

  .crystel {
    width: 230px;
  }
}

@media screen and (min-width: 1921px) and (max-width: 3839px) {

  .noNFTs {
    text-align: center;
    margin-top: 60px;
    font-size: 30px;
    text-transform: uppercase;
    color: #dfdfdf;
  }

  .popUpImgMain img {
    width: 270px;

  }

  .close-button-2 {
    z-index: 100;
    font-size: 50px;
    justify-content: flex-end;
    display: flex;
    margin-right: -45px;
    cursor: pointer;
  }

  #rowImgs {
    overflow: hidden;
    /* Ensure only visible area shows */
    position: relative;
    margin-top: -60px;
  }

  #btn1Mobile {
    display: none;
  }

  #sizeFonts {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: fit-content;
    margin: 0 auto;
    transform: translateY(100%);
    font-family: 'Vermin Vibes V', sans-serif;
    z-index: 1;
    font-size: 19px;
  }

  .carouselImgs-2 {
    position: relative;
    width: 88vw;
    height: 400px;
    /* Adjust as needed */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    margin-top: -50px;
  }

  .carouselImgs-2 img {
    position: absolute;
    /* Ensure all images overlap */
    top: 50%;
    /* Center vertically */
    left: 50%;
    /* Start at the center */
    transform: translate(-50%, -50%);
    width: 10vw;
    /* Adjust size as needed */
    height: auto;
    opacity: 1;
    /* Ensure images are fully visible */
    animation: spread 2s ease-in-out forwards;
    /* Trigger the animation */
  }

  #treasureIMG2 {
    width: 90%;

    -webkit-mask-image: linear-gradient(to top, transparent, black 10%, black 50%, transparent);
    mask-image: linear-gradient(to top, transparent, black 10%, black 50%, transparent);
    -webkit-mask-composite: destination-in;
    mask-composite: intersect;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;
  }

  .treasureIMG2Div {
    position: relative;
    overflow: hidden;
    margin-top: -100px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;
  }


  .nftSection3Main-mob {
    display: none;
  }

  .headers {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #161618;
    flex-flow: row nowrap;
    width: 100%;
    display: flex;
    position: relative;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    border: 2px solid #AC13A7;

    background: url('../assets/nav.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .h1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    z-index: 100;

  }

  .headers div {
    font-size: 20.5px;
    color: white;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }


  .headers button {
    font-size: 20px;
    color: white;
  }

  .headers span:hover {
    color: #2da8fa;
  }

  .logo {
    width: 70px;
    height: 70px;
    margin-right: 20px;
    border-radius: 100px;
  }

  #logoH {
    font-size: 38px;
    font-weight: bold;
  }

  .headerS1 {
    text-align: left;
  }

  .headerS2 {
    display: flex;
    justify-content: space-evenly;
  }

  .headerS2-2 {
    margin-top: auto;
    margin-bottom: auto;
    display: flex;
  }

  .headerS2-2 div {
    padding-left: 18px;
    padding-right: 18px;
  }

  .headerS2-2 span {
    padding-left: 18px;
    padding-right: 18px;
  }

  .headerS3 {
    flex: 1;
    text-align: right;
  }

  .connectBTN {
    margin-left: 40px;
    width: 280px;
  }


  @keyframes glow {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(100%);
    }
  }

  .more-span {
    position: relative;
  }



  .allWrap {
    width: 100%;
    background-color: black;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }

  .contMain {
    background: radial-gradient(circle, rgba(0, 0, 0, 0.2877457865168539) 0%, rgba(0, 0, 0, 0.4450491573033708) 50%, rgba(0, 0, 0, 0.5911165730337078) 100%), url('../assets/bg3.png')center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    overflow: hidden;
  }

  .cont-2 {
    background: url('../assets/snow.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .cont2 {
    background: url('../assets/bg2.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
  }

  .cont3 {
    background: url('../assets/bg4.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
    height: max-content;
    width: 100%;
  }

  .titleMain {
    font-family: 'American Captain', sans-serif;
    color: white;
    font-size: 70px;
    text-align: center;

    margin-top: 7vh;
  }

  .titleMain span {
    color: #F241E5;
    font-family: 'American Captain', sans-serif;
  }

  .title2Main {
    text-align: center;
    font-size: 30px;
    color: white;

    font-family: "Montserrat Alternates", serif;
    width: fit-content;
    display: flex;
    margin: auto
  }

  .title2Main img {
    width: 158px;
    margin-left: 35px;
  }

  .treasureIMG {
    width: 700px;
    margin-top: 6vh;
    margin-left: auto;
    margin-right: auto;
    display: flex;
  }

  .btns3 {
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 14vh;
  }

  .btns3 button {
    margin: 25px;
    padding: 20px;
  }

  .btn1 {
    font-family: 'American Captain', sans-serif;
    color: white;
    background: linear-gradient(90deg, rgba(178, 21, 167, 1) 0%, rgba(104, 20, 224, 1) 100%);
    border: #0084ff 1px solid;
    letter-spacing: 3px;
    font-weight: 400;
    font-size: 35px;
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 0;
    transition: 0.5s ease-in-out;
    /* Smooth transition for background */
  }

  .btn1:hover {
    background: linear-gradient(90deg, rgba(104, 20, 224, 1) 0%, rgba(178, 21, 167, 1) 100%);
  }


  .btn1 span {
    margin-left: 35px;
    margin-right: 35px;
    font-family: 'American Captain', sans-serif;
    border-left: 1px solid white;
    border-right: 1px solid white;
    font-size: 40px;
    padding: 15px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .txt {
    margin-top: auto;
    margin-bottom: auto;
    font-family: 'American Captain', sans-serif;

  }

  .btn2 {
    font-family: "Montserrat Alternates", serif;
    color: white;
    background-color: transparent;
    border: 1px solid white;
    font-size: 35px;
    width: 370px;
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
    transition: 0.3s ease-in-out;
    height: 105px;
  }


  #dropdown {
    position: absolute;
    top: 180px;
    left: 0;
    right: 0;
    width: 370px;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(217, 217, 217, 0.336);
    backdrop-filter: blur(5px);
    border: 1px solid white;
    overflow: hidden;
    transition: all 0.5s ease;
    z-index: 50;
  }

  .dropdown-item {
    width: 90%;
    background: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    border: none;
    font-size: 22px;
    cursor: pointer;
    transition: color 0.1s ease;
    font-family: 'Vermin Vibes V', sans-serif;
    color: white;
    border-bottom: 1px solid rgba(255, 255, 255, 0.61);
  }

  #lastNum {
    border: none;
  }

  .dropdown-item:hover {
    color: rgba(255, 255, 255, 0.8);
    background-color: transparent;
  }

  .dropdown-item:lanst-child {
    border-bottom: none;
  }

  .dropdown-menu.open {
    max-height: 350px;
    background-color: #2da8fa;
  }

  /* Arrow rotation */
  #arrow-icon {
    margin-left: 20px;
    font-size: 25px;
    transition: transform 0.3s ease;
  }

  #arrow-icon.rotate {
    transform: rotate(180deg);
  }

  .btn2:hover {
    background-color: rgba(255, 255, 255, 0.11);
    -webkit-backdrop-filter: blur(2);
  }

  .btn2 div {
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
    display: flex;
  }

  .btn1 img {
    width: 40px;
    margin-top: -2px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .btn2 img {
    margin-left: 30px;

  }

  .nftSection {
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    height: 55vh;
  }

  .nftSection2 {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-evenly;
    display: flex;
    margin-bottom: 5vh;
    width: 52%;
  }

  .nftSection2 img {
    width: 240px;
    transition: transform .2s;
  }

  .nftSection2 img:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  /*.nftSection3 {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  display: flex;
  margin-top: 9vh;
  margin-bottom: 5vh;
  scroll-behavior: smooth;
}*/

  .nftSection3 {
    display: flex;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    width: 80%;
    padding: 10px;
  }

  .nftSection3 img {
    max-width: 100%;
    /* Ensure the image fits within the container */
    height: auto;
    /* Maintain aspect ratio */
    transition: transform .3s;
  }

  .nftSection3 img:hover {
    cursor: pointer;
  }

  .nftSection3Main {
    /*: flex;
  flex-flow: row nowrap;
  width: fit-content;
  margin: auto;*/

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    height: 35vh;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
    margin-top: auto;
    width: fit-content;
    width: 50%;
  }

  /*.nftImage {
  width: calc(100% / 5);
   flex-shrink: 0;
  transition: transform 0.5s ease;
  padding: 10px;

  cursor: pointer;
}*/

  .imageContainer {
    position: relative;
    display: inline-block;
    display:flex;
    justify-content: space-evenly;
    width: 100%;
  }

  .nftImage {
    display: block;
    width: 100%;
    height: auto;
    padding: 10px;
  }

  .sec {
    color: #ff1493;
    font-family: 'Vermin Vibes V', sans-serif;
  }

  .timer div:nth-child(1) {
    color: white;
    font-family: 'Vermin Vibes V', sans-serif;
  }

  .timer div:nth-child(2) {
    color: white;
    /* White for text */
    margin-top: 5px;
    font-family: 'Vermin Vibes V', sans-serif;
  }

  .arrowsDiv {
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
  }

  .arrows {
    width: 50px;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
    cursor: pointer;
  }

  .selected {
    transform: scale(1.2);
  }

  .title3 {
    font-family: 'Vermin Vibes V', sans-serif;
    text-align: center;
    color: white;
    font-size: 50px;
    padding-top: 50px;
  }

  .title3 span {
    font-family: 'Vermin Vibes V', sans-serif;
    color: #F241E5;
  }

  .line {
    height: 1.5px;
    width: 30%;
    background-color: #FFFFFF80;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 4%;
  }

  .fight {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    margin-top: 20px;
    width: 385px;
  }

  .battleSectionMain {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  .battleSection {
    display: flex;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
    margin-top: 5vh;
    width: 100%;
  }

  .battleSection2 {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  .vs {
    width: 20%;
    height: 20%;
    margin: auto;
  }

  .combat {
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;
    margin-bottom: 10vh;
    margin-top: -5vh;
    z-index: 1000;
    position: relative;
  }


  #battleImgs {
    animation: float 20s ease-in-out infinite;
    width: 360px;
  }

  @keyframes float {

    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-20px);
    }
  }

  #bar1 {
    width: 80%;
  }

  .bar2 {
    margin-left: auto;
    width: 80%;
  }

  .popup-containerMain {
    position: fixed;
    /* Ensures it stays in the viewport */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.5);
    height: fit-content;
    animation: fadeIn 0.4s ease-in-out forwards;
    z-index: 10000;
  }


  .character {
    width: 355px;
    /* Adjust to fit your design */
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: -100px;
  }


  .character--2 {
    width: 365px;
    /* Adjust to fit your design */
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: -105px;
  }

  .popup {
    background: rgba(255, 255, 255, 0.253);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.534);
    text-align: center;
    height: 440px;
    width: 900px;
  }

  .popup-text {
    font-size: 2.3rem;
    font-family: 'Vermin Vibes V', sans-serif;
    color: white;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
    display: flex;
    text-align: center;
    margin-top: 5px;
  }

  .close-button {
    position: absolute;
    top: 1px;
    right: 20px;
    font-size: 3rem;
    font-weight: bold;
    color: #ffffff;
    cursor: pointer;
  }


  .popup-containerMain3 {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .footer {
    width: 100%;
    background: linear-gradient(0deg, rgba(9, 14, 17, 0.186622191011236) 0%, rgba(23, 26, 27, 0.1192064606741573) 49%, rgba(38, 38, 38, 0.2652738764044944) 100%), url('../assets/footer.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
    justify-content: center;
    margin-bottom: auto;
    padding-top: 70px;
    padding-bottom: 70px;
    z-index: 10;
    position: relative;
    margin-top: 5%;
  }

  .footer img {
    border-radius: 100%;
    width: 70px;
    margin-right: 20px;
  }

  .footer--2 {
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
  }

  .footer2 {
    font-size: 30px;
    color: white;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    width: fit-content;
    display: flex;
    font-weight: 500;
    width: 100%;
  }

  .footer2 span {
    margin-top: auto;
    margin-bottom: auto;
  }

  .lineF {
    width: 90%;
    height: 1px;
    background-color: #FFFFFF80;
    margin-top: auto;
    margin-bottom: auto;
  }

  .crystels2 {
    position: absolute;
    right: 0;
    /* Aligns the image to the right edge */
    transform: translateY(-50%);
    /* Adjusts for centering */
    margin-top: -12%;
  }


  .crystels3 {
    position: absolute;
    right: 0;
    /* Aligns the image to the right edge */
    transform: translateY(-50%);
    /* Adjusts for centering */
  }

  .crystel {
    width: 230px;
  }
}

@media screen and (min-width: 3840px) {
  #btn1Mobile {
    display: none;
  }

  .popUpImgMain img {
    width: 400px;
  }

  .close-button-2 {
    z-index: 100;
    font-size: 45px;
    justify-content: flex-end;
    display: flex;
    margin-right: -35px;
    cursor: pointer;
  }

  #rowImgs {
    overflow: hidden;
    /* Ensure only visible area shows */
    position: relative;
    margin-top: 250px;
  }

  .carouselImgs-2 {
    position: relative;
    width: 86vw;
    height: 600px;
    /* Adjust as needed */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    margin-top: 250px;
  }

  #sizeFonts {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: fit-content;
    margin: 0 auto;
    transform: translateY(100%);
    font-family: 'Vermin Vibes V', sans-serif;
    z-index: 1;
    font-size: 19px;
  }

  .carouselImgs-2 img {
    position: absolute;
    /* Ensure all images overlap */
    top: 50%;
    /* Center vertically */
    left: 50%;
    /* Start at the center */
    transform: translate(-50%, -50%);
    width: 9vw;
    /* Adjust size as needed */
    height: auto;
    opacity: 1;
    /* Ensure images are fully visible */
    animation: spread 2s ease-in-out forwards;
    /* Trigger the animation */
  }

  #treasureIMG2 {
    width: 100%;
    margin-top: -300px;
    margin-left: auto;
    margin-right: auto;

    -webkit-mask-image: linear-gradient(to top, transparent, black 10%, black 50%, transparent);
    mask-image: linear-gradient(to top, transparent, black 10%, black 50%, transparent);
    -webkit-mask-composite: destination-in;
    mask-composite: intersect;
  }

  .treasureIMG2Div {
    width: 3900px;
    position: relative;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;
  }


  .nftSection3Main-mob {
    display: none;
  }

  .headers {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #161618;
    flex-flow: row nowrap;
    width: 100%;
    display: flex;
    position: relative;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    border: 2px solid #AC13A7;

    background: url('../assets/nav.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .h1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    z-index: 100;

  }

  .headers div {
    font-size: 20.5px;
    color: white;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }


  .headers button {
    font-size: 20px;
    color: white;
  }

  .headers span:hover {
    color: #2da8fa;
  }

  .logo {
    width: 70px;
    height: 70px;
    margin-right: 20px;
    border-radius: 100px;
  }

  #logoH {
    font-size: 38px;
    font-weight: bold;
  }

  .headerS1 {
    text-align: left;
  }

  .headerS2 {
    display: flex;
    justify-content: space-evenly;
  }

  .headerS2-2 {
    margin-top: auto;
    margin-bottom: auto;
    display: flex;
  }

  .headerS2-2 div {
    padding-left: 18px;
    padding-right: 18px;
  }

  .headerS2-2 span {
    padding-left: 18px;
    padding-right: 18px;
  }

  .headerS3 {
    flex: 1;
    text-align: right;
  }

  .connectBTN {
    margin-left: 40px;
    width: 280px;
  }


  @keyframes glow {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(100%);
    }
  }

  .more-span {
    position: relative;
  }



  .allWrap {
    width: 100%;
    background-color: black;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }

  .contMain {
    background: radial-gradient(circle, rgba(0, 0, 0, 0.2877457865168539) 0%, rgba(0, 0, 0, 0.4450491573033708) 50%, rgba(0, 0, 0, 0.5911165730337078) 100%), url('../assets/bg3.png') center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    overflow: hidden;
  }

  .cont-2 {
    background: url('../assets/snow.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .cont2 {
    background: url('../assets/bg2.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
  }

  .cont3 {
    background: url('../assets/bg4.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
    height: max-content;
    width: 100%;
  }

  .titleMain {
    font-family: 'American Captain', sans-serif;
    color: white;
    font-size: 100px;
    text-align: center;

    margin-top: 8vh;
  }

  .titleMain span {
    color: #F241E5;
    font-family: 'American Captain', sans-serif;
  }

  .title2Main {
    text-align: center;
    font-size: 40px;
    color: white;

    font-family: "Montserrat Alternates", serif;
    width: fit-content;
    display: flex;
    margin: auto
  }

  .title2Main img {
    width: 220px;
    margin-left: 35px;
  }

  .treasureIMG {
    width: 1150px;
    margin-top: 6vh;
    margin-left: auto;
    margin-right: auto;
    display: flex;
  }

  .btns3 {
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15vh;
  }

  .btns3 button {
    margin: 35px;
    padding: 30px;
  }

  .btn1 {
    font-family: 'American Captain', sans-serif;
    color: white;
    background: linear-gradient(90deg, rgba(178, 21, 167, 1) 0%, rgba(104, 20, 224, 1) 100%);
    border: #0084ff 1px solid;
    letter-spacing: 3px;
    font-weight: 400;
    font-size: 50px;
    width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 0;
    transition: 0.5s ease-in-out;
    /* Smooth transition for background */
  }

  .btn1:hover {
    background: linear-gradient(90deg, rgba(104, 20, 224, 1) 0%, rgba(178, 21, 167, 1) 100%);
  }


  .btn1 span {
    margin-left: 35px;
    margin-right: 35px;
    font-family: 'American Captain', sans-serif;
    border-left: 1px solid white;
    border-right: 1px solid white;
    font-size: 60px;
    padding: 15px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .txt {
    margin-top: auto;
    margin-bottom: auto;
    font-family: 'American Captain', sans-serif;

  }

  .btn2 {
    font-family: "Montserrat Alternates", serif;
    color: white;
    background-color: transparent;
    border: 1px solid white;
    font-size: 49px;
    width: 530px;
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
    transition: 0.3s ease-in-out;
    height: 160px;
  }


  #dropdown {
    position: absolute;
    top: 250px;
    left: 0;
    right: 0;
    width: 90%;
    background-color: rgba(217, 217, 217, 0.336);
    backdrop-filter: blur(5px);
    border: 1px solid white;
    overflow: hidden;
    transition: all 0.5s ease;
    z-index: 50;
    margin-left: auto;
    margin-right: auto;
  }

  .dropdown-item {
    width: 90%;
    background: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    border: none;
    font-size: 32px;
    cursor: pointer;
    transition: color 0.1s ease;
    font-family: 'Vermin Vibes V', sans-serif;
    color: white;
    border-bottom: 1px solid rgba(255, 255, 255, 0.61);
  }

  #lastNum {
    border: none;
  }

  .dropdown-item:hover {
    color: rgba(255, 255, 255, 0.8);
    background-color: transparent;
  }

  .dropdown-item:lanst-child {
    border-bottom: none;
  }

  .dropdown-menu.open {
    max-height: 350px;
    background-color: #2da8fa;
  }

  /* Arrow rotation */
  #arrow-icon {
    margin-left: 30px;
    font-size: 45px;
    transition: transform 0.3s ease;
  }

  #arrow-icon.rotate {
    transform: rotate(180deg);
  }


  .btn2:hover {
    background-color: rgba(255, 255, 255, 0.11);
    -webkit-backdrop-filter: blur(2);
  }

  .btn2 div {
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
    display: flex;
  }

  .btn1 img {
    width: 70px;
    margin-top: -2px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .btn2 img {
    margin-left: 30px;

  }

  .nftSection {
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    height: 70vh;

  }

  .nftSection2 {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-evenly;
    display: flex;
    margin-bottom: 5vh;
    width: 52%;
  }

  .nftSection2 img {
    width: 345px;
    transition: transform .2s;
  }

  .nftSection2 img:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  /*.nftSection3 {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  display: flex;
  margin-top: 9vh;
  margin-bottom: 5vh;
  scroll-behavior: smooth;
}*/

  .nftSection3 {
    display: flex;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    width: 80%;
    padding: 20px;
  }

  .nftSection3 img {
    max-width: 100%;
    /* Ensure the image fits within the container */
    height: auto;
    /* Maintain aspect ratio */
    transition: transform .3s;
  }

  .nftSection3 img:hover {
    cursor: pointer;
  }

  .nftSection3Main {
    /*: flex;
  flex-flow: row nowrap;
  width: fit-content;
  margin: auto;*/

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    height: 35vh;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
    margin-top: auto;
    width: fit-content;
    width: 50%;
  }

  /*.nftImage {
  width: calc(100% / 5);
   flex-shrink: 0;
  transition: transform 0.5s ease;
  padding: 10px;

  cursor: pointer;
}*/

  .imageContainer {
    position: relative;
    display: inline-block;
    display:flex;
    justify-content: space-evenly;
    width: 100%;
  }

  .nftImage {
    display: block;
    width: 100%;
    height: auto;
    padding: 10px;
  }

  .sec {
    color: #ff1493;
    font-family: 'Vermin Vibes V', sans-serif;
  }

  .timer div:nth-child(1) {
    color: white;
    font-family: 'Vermin Vibes V', sans-serif;
  }

  .timer div:nth-child(2) {
    color: white;
    /* White for text */
    margin-top: 5px;
    font-family: 'Vermin Vibes V', sans-serif;
  }

  .arrowsDiv {
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
  }

  .arrows {
    width: 50px;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
    cursor: pointer;
  }

  .selected {
    transform: scale(1.2);
  }

  .title3 {
    font-family: 'Vermin Vibes V', sans-serif;
    text-align: center;
    color: white;
    font-size: 73px;
    padding-top: 50px;
  }

  .title3 span {
    font-family: 'Vermin Vibes V', sans-serif;
    color: #F241E5;
  }

  .line {
    height: 1.5px;
    width: 30%;
    background-color: #FFFFFF80;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 4%;
  }

  .fight {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    margin-top: 20px;
    width: 500px;
  }

  .battleSectionMain {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  .battleSection {
    display: flex;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
    margin-top: 5vh;
    width: 100%;
  }

  .battleSection2 {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  .vs {
    width: 20%;
    height: 20%;
    margin: auto;
  }

  .combat {
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;
    margin-bottom: 10vh;
    margin-top: -5vh;
    z-index: 1000;
    position: relative;
  }


  #battleImgs {
    animation: float 20s ease-in-out infinite;
    width: 450px;
  }

  @keyframes float {

    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-20px);
    }
  }

  #bar1 {
    width: 80%;
  }

  .bar2 {
    margin-left: auto;
    width: 80%;
  }

  .popup-containerMain {
    position: fixed;
    /* Ensures it stays in the viewport */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.5);
    height: fit-content;
    animation: fadeIn 0.4s ease-in-out forwards;
    z-index: 10000;
  }

  .character {
    width: 505px;
    /* Adjust to fit your design */
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: -110px;
  }

  .character--2 {
    width: 495px;
    /* Adjust to fit your design */
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: -111px;
  }

  .popup {
    background: rgba(255, 255, 255, 0.253);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.534);
    text-align: center;
    height: 640px;
    width: 1100px;
  }

  .popup-text {
    font-size: 2.5rem;
    font-family: 'Vermin Vibes V', sans-serif;
    color: white;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
    display: flex;
    text-align: center;
    margin-top: 5px;
  }

  .close-button {
    position: absolute;
    top: 1px;
    right: 30px;
    font-size: 4rem;
    font-weight: bold;
    color: #ffffff;
    cursor: pointer;
  }


  .popup-containerMain3 {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .footer {
    width: 100%;
    background: linear-gradient(0deg, rgba(9, 14, 17, 0.186622191011236) 0%, rgba(23, 26, 27, 0.1192064606741573) 49%, rgba(38, 38, 38, 0.2652738764044944) 100%), url('../assets/footer.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
    justify-content: center;
    margin-bottom: auto;
    padding-top: 70px;
    padding-bottom: 70px;
    z-index: 10;
    position: relative;
    margin-top: 5%;
  }

  .footer img {
    border-radius: 100%;
    width: 70px;
    margin-right: 20px;
  }

  .footer--2 {
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-top: auto;
    margin-bottom: auto;
    justify-content: center;
  }

  .footer2 {
    font-size: 30px;
    color: white;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    width: fit-content;
    display: flex;
    font-weight: 500;
    width: 100%;
  }

  .footer2 span {
    margin-top: auto;
    margin-bottom: auto;
  }

  .lineF {
    width: 90%;
    height: 1px;
    background-color: #FFFFFF80;
    margin-top: auto;
    margin-bottom: auto;
  }

  .crystels2 {
    position: absolute;
    right: 0;
    /* Aligns the image to the right edge */
    transform: translateY(-50%);
    /* Adjusts for centering */
    margin-top: -12%;
  }


  .crystels3 {
    position: absolute;
    right: 0;
    /* Aligns the image to the right edge */
    transform: translateY(-50%);
    /* Adjusts for centering */
  }

  .crystel {
    width: 230px;
  }
}
.card-imageMint {
  position: relative; /* To ensure the overlay is positioned relative to this container */
  width: 100%; /* Ensure the image and overlay match dimensions */
  height: auto; /* Adjust to fit the image aspect ratio */
}

.card-imageMint img {
  display: block; /* Remove extra space below images */
  width: 100%; /* Ensure image takes full width of container */
  height: auto;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.007); /* Semi-transparent dark background */
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 1; /* Ensure it appears above the image */
  pointer-events: none; /* Prevent the overlay from blocking image interactions */
}

.timer {
  font-size: 12px;
  background-color: #0000009d;
  padding: 5px;
}
