import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import Person1 from "../assets/person1.jpg"
import Peronalised from "../assets/personalized.png"
import Untitled from "../assets/Untitled.png"
import Network from "../assets/network.png"
import Confidence from "../assets/confidence.png"
import Person5 from "../assets/person5.png"
import Person4 from "../assets/person4.png"
import Spline from '@splinetool/react-spline';
import "../Styles/Hero.css"

const Hero = () => {
    return (
        <div className="Hero">
            <CustomNavbar />
            <section id="hero">
        <div className="container">
            <div className="hero-text">
                <h1>KonnectME: Where Inspiration Meets Guidance</h1>
                <p className="desc">Explore Mentorship, Fuel Your Ambitions.</p>
                <div className="btn">
                    <a href="#">Learn More</a>
                </div>
            </div>
        </div>
    </section>
    <div className="section2">   
        <h1>Getting Started Is Easy</h1>
        <div className="row">
            <div className="column">
                <div className="icon-wrapper">
                    <svg width="60" height="64" viewBox="0 0 60 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 15C15 23.27 21.73 30 30 30C38.27 30 45 23.27 45 15C45 6.73 38.27 0 30 0C21.73 0 15 6.73 15 15ZM56.6667 63.3333H60V60C60 47.1367 49.53 36.6667 36.6667 36.6667H23.3333C10.4667 36.6667 0 47.1367 0 60V63.3333H56.6667Z" fill="#287094"/>
                    </svg>    
                </div>
                <p>Create your free account and set up your profile in just a few minutes.</p>
            </div>
            <div className="column">
                <div className="icon-wrapper">
                    <svg width="59" height="60" viewBox="0 0 59 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M41.6667 37.5167H39.0333L38.1 36.6166C41.4796 32.6967 43.337 27.6923 43.3333 22.5167C43.3333 18.2314 42.0626 14.0424 39.6819 10.4793C37.3011 6.91623 33.9172 4.13916 29.9581 2.49926C25.9991 0.859363 21.6426 0.430291 17.4397 1.2663C13.2368 2.10232 9.37617 4.16587 6.34603 7.196C3.31589 10.2261 1.25234 14.0868 0.416329 18.2897C-0.419684 22.4926 0.00938783 26.8491 1.64929 30.8081C3.28919 34.7672 6.06626 38.1511 9.62932 40.5318C13.1924 42.9126 17.3814 44.1833 21.6667 44.1833C27.0333 44.1833 31.9667 42.2167 35.7667 38.95L36.6667 39.8833V42.5167L53.3333 59.15L58.3 54.1833L41.6667 37.5167ZM21.6667 37.5167C13.3667 37.5167 6.66668 30.8167 6.66668 22.5167C6.66668 14.2167 13.3667 7.51665 21.6667 7.51665C29.9667 7.51665 36.6667 14.2167 36.6667 22.5167C36.6667 30.8167 29.9667 37.5167 21.6667 37.5167Z" fill="#287094"/>
                    </svg>      
                </div>
                <p>Browse to find the perfect mentor or mentee based on your interest.</p>
            </div>
        </div>
        <div className="row">
            <div className="column">
                <div className="icon-wrapper">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M70 30C70 30 70 32.835 68.8375 36.5625L55.8825 23.61C55.18 22.9065 54.2268 22.5109 53.2325 22.51H41.725C40.8864 22.5106 40.0722 22.7923 39.4125 23.31L34.87 26.865C34.5583 27.1093 34.2014 27.2897 33.8199 27.3959C33.4383 27.5021 33.0396 27.532 32.6465 27.4839C32.2534 27.4358 31.8736 27.3107 31.5289 27.1157C31.1841 26.9207 30.8813 26.6597 30.6375 26.3475C30.1451 25.7162 29.9231 24.9153 30.0201 24.1206C30.1171 23.3258 30.5252 22.6019 31.155 22.1075L46.655 10H50C55.3044 10 60.3915 12.1071 64.1422 15.8579C67.8929 19.6086 70 24.6957 70 30ZM18.46 38.325C18.2099 38.0743 17.9128 37.8753 17.5857 37.7396C17.2586 37.6039 16.9079 37.534 16.5538 37.534C16.1996 37.534 15.849 37.6039 15.5219 37.7396C15.1948 37.8753 14.8977 38.0743 14.6475 38.325L10.7875 42.2C10.2816 42.7079 9.99756 43.3956 9.99756 44.1125C9.99756 44.8294 10.2816 45.5171 10.7875 46.025C11.0377 46.2757 11.3348 46.4747 11.6619 46.6104C11.989 46.7461 12.3396 46.816 12.6938 46.816C13.0479 46.816 13.3986 46.7461 13.7257 46.6104C14.0528 46.4747 14.3499 46.2757 14.6 46.025L18.46 42.15C18.9658 41.6425 19.2498 40.9552 19.2498 40.2388C19.2498 39.5223 18.9658 38.835 18.46 38.3275M22.45 43.55C22.7 43.2986 22.9973 43.0991 23.3246 42.9629C23.652 42.8268 24.003 42.7567 24.3575 42.7567C24.7121 42.7567 25.0631 42.8268 25.3905 42.9629C25.7178 43.0991 26.0151 43.2986 26.265 43.55C26.7702 44.0578 27.0538 44.745 27.0538 45.4613C27.0538 46.1775 26.7702 46.8647 26.265 47.3725L22.4 51.24C22.1501 51.491 21.853 51.6902 21.5259 51.8261C21.1988 51.9621 20.848 52.032 20.4938 52.032C20.1396 52.032 19.7888 51.9621 19.4617 51.8261C19.1345 51.6902 18.8375 51.491 18.5875 51.24C18.0824 50.7322 17.7988 50.045 17.7988 49.3288C17.7988 48.6125 18.0824 47.9253 18.5875 47.4175L22.45 43.55ZM32.7425 50.0425C32.4924 49.7918 32.1953 49.5928 31.8682 49.4571C31.5411 49.3214 31.1904 49.2515 30.8363 49.2515C30.4822 49.2515 30.1315 49.3214 29.8044 49.4571C29.4773 49.5928 29.1802 49.7918 28.93 50.0425L25.07 53.9125C24.5635 54.4201 24.279 55.1079 24.279 55.825C24.279 56.5421 24.5635 57.2299 25.07 57.7375C25.32 57.9885 25.6171 58.1877 25.9442 58.3236C26.2713 58.4596 26.6221 58.5295 26.9763 58.5295C27.3305 58.5295 27.6813 58.4596 28.0084 58.3236C28.3355 58.1877 28.6326 57.9885 28.8825 57.7375L32.7425 53.865C33.2485 53.3571 33.5325 52.6694 33.5325 51.9525C33.5325 51.2356 33.2485 50.5504 32.7425 50.0425ZM39.2175 56.53C38.9676 56.2786 38.6703 56.0791 38.343 55.943C38.0156 55.8068 37.6646 55.7367 37.31 55.7367C36.9555 55.7367 36.6045 55.8068 36.2771 55.943C35.9497 56.0791 35.6525 56.2786 35.4025 56.53L31.5425 60.4025C31.0374 60.9103 30.7538 61.5975 30.7538 62.3138C30.7538 63.03 31.0374 63.7172 31.5425 64.225C31.7925 64.476 32.0896 64.6752 32.4167 64.8111C32.7438 64.9471 33.0946 65.017 33.4488 65.017C33.803 65.017 34.1538 64.9471 34.4809 64.8111C34.808 64.6752 35.1051 64.476 35.355 64.225L39.215 60.3525C39.7208 59.845 40.0048 59.1577 40.0048 58.4413C40.0048 57.7248 39.7208 57.0375 39.215 56.53M37.5975 10.73C36.2807 10.341 34.925 10.0979 33.555 10.005L33.33 10H32.5C27.1957 10 22.1086 12.1071 18.3579 15.8579C14.6072 19.6086 12.5 24.6957 12.5 30V35.2175C13.7359 34.212 15.3012 33.7015 16.8922 33.7851C18.4832 33.8687 19.9864 34.5405 21.11 35.67C22.0925 36.6575 22.6925 37.885 22.9075 39.165C23.856 38.9477 24.8413 38.9479 25.7897 39.1654C26.7381 39.383 27.625 39.8123 28.384 40.4212C29.1429 41.0301 29.7543 41.8028 30.1723 42.6815C30.5902 43.5601 30.804 44.522 30.7975 45.495C31.6505 45.491 32.4957 45.6562 33.2844 45.9811C34.073 46.306 34.7894 46.784 35.392 47.3876C35.9947 47.9912 36.4716 48.7083 36.7953 49.4974C37.1189 50.2866 37.2828 51.1321 37.2775 51.985C38.1285 51.9809 38.9717 52.1458 39.7584 52.4703C40.5451 52.7947 41.2594 53.2722 41.86 53.875C43.0676 55.0884 43.7455 56.7306 43.7455 58.4425C43.7455 60.1544 43.0676 61.7966 41.86 63.01L41.2975 63.575L44.4825 66.735C44.9876 67.232 45.6677 67.5105 46.3763 67.5105C47.0849 67.5105 47.765 67.232 48.2701 66.735C49.305 65.71 49.3075 64.05 48.275 63.0225C47.9203 62.6708 47.7199 62.1925 47.7177 61.693C47.7156 61.1934 47.9121 60.7135 48.2638 60.3588C48.6155 60.004 49.0938 59.8036 49.5933 59.8014C50.0929 59.7993 50.5728 59.9958 50.9275 60.3475C51.4326 60.8445 52.1127 61.123 52.8213 61.123C53.5299 61.123 54.21 60.8445 54.715 60.3475C54.9609 60.1047 55.1561 59.8156 55.2894 59.4968C55.4227 59.1781 55.4915 58.836 55.4917 58.4905C55.492 58.145 55.4236 57.8029 55.2908 57.484C55.1579 57.165 54.963 56.8756 54.7175 56.6325C54.3852 56.2762 54.2037 55.8051 54.2111 55.3179C54.2185 54.8307 54.4143 54.3654 54.7574 54.0194C55.1004 53.6734 55.5641 53.4737 56.0512 53.4622C56.5383 53.4506 57.011 53.6282 57.37 53.9575C57.8756 54.4531 58.5556 54.7302 59.2636 54.7293C59.9715 54.7283 60.6508 54.4494 61.155 53.9525C62.215 52.9025 62.21 51.1975 61.1975 50.19L61.19 50.185L55.5575 44.55C55.2263 44.1946 55.046 43.7244 55.0546 43.2387C55.0632 42.7529 55.26 42.2895 55.6035 41.9459C55.947 41.6024 56.4105 41.4056 56.8962 41.3971C57.382 41.3885 57.8521 41.5688 58.2076 41.9L64.7976 48.4825C66.115 49.79 68.2875 49.8025 69.43 48.67C70.5675 47.5425 70.5575 45.4025 69.2525 44.105L69.2475 44.1L52.6575 27.5125H42.1576L37.9525 30.8025C37.1237 31.4511 36.1751 31.9301 35.1611 32.212C34.1471 32.4939 33.0874 32.5733 32.0427 32.4456C30.998 32.3179 29.9886 31.9857 29.0724 31.4678C28.1561 30.95 27.3508 30.2567 26.7025 29.4275C25.3927 27.7516 24.8018 25.6243 25.0596 23.5129C25.3174 21.4016 26.4029 19.4789 28.0775 18.1675L37.5975 10.73Z" fill="#287094"/>
                    </svg>    
                </div>
                <p>Send a connection request and start communicating with your mentor.</p>
            </div>
            <div className="column">
                <div className="icon-wrapper">
                    <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36 4.5C36 3.43913 35.5786 2.42172 34.8284 1.67157C34.0783 0.921427 33.0609 0.5 32 0.5C30.9391 0.5 29.9217 0.921427 29.1716 1.67157C28.4214 2.42172 28 3.43913 28 4.5V8.5C28 9.56087 28.4214 10.5783 29.1716 11.3284C29.9217 12.0786 30.9391 12.5 32 12.5C33.0609 12.5 34.0783 12.0786 34.8284 11.3284C35.5786 10.5783 36 9.56087 36 8.5V4.5ZM54.628 15.528C55.3566 14.7736 55.7598 13.7632 55.7507 12.7144C55.7416 11.6656 55.3209 10.6624 54.5793 9.92072C53.8376 9.17909 52.8344 8.75842 51.7856 8.7493C50.7368 8.74019 49.7264 9.14337 48.972 9.872L46.144 12.7C45.4154 13.4544 45.0122 14.4648 45.0213 15.5136C45.0304 16.5624 45.4511 17.5656 46.1927 18.3073C46.9344 19.0489 47.9376 19.4696 48.9864 19.4787C50.0352 19.4878 51.0456 19.0846 51.8 18.356L54.628 15.528ZM64 32.5C64 33.5609 63.5786 34.5783 62.8284 35.3284C62.0783 36.0786 61.0609 36.5 60 36.5H56C54.9391 36.5 53.9217 36.0786 53.1716 35.3284C52.4214 34.5783 52 33.5609 52 32.5C52 31.4391 52.4214 30.4217 53.1716 29.6716C53.9217 28.9214 54.9391 28.5 56 28.5H60C61.0609 28.5 62.0783 28.9214 62.8284 29.6716C63.5786 30.4217 64 31.4391 64 32.5ZM12.2 18.356C12.569 18.738 13.0104 19.0428 13.4984 19.2524C13.9864 19.462 14.5113 19.5724 15.0424 19.577C15.5735 19.5816 16.1002 19.4804 16.5918 19.2793C17.0834 19.0782 17.53 18.7812 17.9056 18.4056C18.2812 18.03 18.5782 17.5834 18.7793 17.0918C18.9804 16.6002 19.0816 16.0735 19.077 15.5424C19.0724 15.0113 18.962 14.4864 18.7524 13.9984C18.5428 13.5104 18.238 13.069 17.856 12.7L15.028 9.872C14.2736 9.14337 13.2632 8.74019 12.2144 8.7493C11.1656 8.75842 10.1624 9.17909 9.42072 9.92072C8.67909 10.6624 8.25842 11.6656 8.2493 12.7144C8.24019 13.7632 8.64337 14.7736 9.372 15.528L12.2 18.356ZM12 32.5C12 33.5609 11.5786 34.5783 10.8284 35.3284C10.0783 36.0786 9.06087 36.5 8 36.5H4C2.93913 36.5 1.92172 36.0786 1.17157 35.3284C0.421427 34.5783 0 33.5609 0 32.5C0 31.4391 0.421427 30.4217 1.17157 29.6716C1.92172 28.9214 2.93913 28.5 4 28.5H8C9.06087 28.5 10.0783 28.9214 10.8284 29.6716C11.5786 30.4217 12 31.4391 12 32.5ZM24 56.5V52.5H40V56.5C40 58.6217 39.1571 60.6566 37.6569 62.1569C36.1566 63.6571 34.1217 64.5 32 64.5C29.8783 64.5 27.8434 63.6571 26.3431 62.1569C24.8429 60.6566 24 58.6217 24 56.5ZM40 48.5C40.06 47.14 40.832 45.916 41.908 45.064C44.5187 43.005 46.4232 40.1839 47.3566 36.9926C48.29 33.8014 48.206 30.3986 47.1164 27.2573C46.0267 24.116 43.9855 21.3922 41.2764 19.4645C38.5673 17.5367 35.3249 16.5009 32 16.5009C28.6751 16.5009 25.4327 17.5367 22.7236 19.4645C20.0145 21.3922 17.9733 24.116 16.8836 27.2573C15.794 30.3986 15.71 33.8014 16.6434 36.9926C17.5768 40.1839 19.4813 43.005 22.092 45.064C23.172 45.916 23.94 47.14 23.996 48.5H40Z" fill="#287094"/>
                        </svg>                        
                </div>
                <p>Engage in meaningful conversations, set goals, and track your progress as you learn and grow.</p>
            </div>
        </div>
    </div>
    <div className="section3">
        <h1>Why <br/>Sign-up?</h1>
        <div className="slider">
           
            <div className = "slides">
                <input type="radio" name="radiobtn" id="r1"/>
                <input type="radio" name="radiobtn" id="r2"/>
                <input type="radio" name="radiobtn" id="r3"/>
                <input type="radio" name="radiobtn" id="r4"/>

                <div className="slide first">
                    <img src={Peronalised}/>
                    <div className= "info" >
                        <h2> Personalized<br/> Mentorship</h2>
                        <p>Receive personalized guidance tailored to your specific goals <br/>and aspirations from experienced mentors in your chosen field.</p>
                </div>
                </div>
                <div className="slide">
                    <img src={Untitled}/>
                    <div className= "info" >
                        <h2>Skill <br/>Enhancement</h2>
                        <p>Enhance your skills and knowledge through targeted learning experiences<br/> and practical advice provided by industry experts.</p>
                </div>
                </div>
                <div className="slide">
                    <img src={Network}/>
                    <div className= "info" >
                        <h2> Networking<br/> opportunity</h2>
                        <p>Expand your professional network and connect with like-minded individuals,<br/> opening doors to new opportunities and collaborations.</p>
                </div>
                </div>
                <div className="slide">
                    <img src={Confidence}/>
                    <div className= "info" >
                        <h2> Confidence <br/>Boost</h2>
                        <p>Gain confidence in yourself and your abilities <br/>as you receive encouragement,<br/> feedback, and support from your mentor and peers.</p>
                </div>
                </div>
               
                <div className="nav-auto">
                   <div className="auto-btn1" ></div>
                   <div className="auto-btn2" ></div>
                   <div className="auto-btn3" ></div>
                   <div className="auto-btn4" ></div>
                </div>
    
            </div>
            </div>
            <div className="manualnav">
                <label for="r1" className="manual"></label>
                <label for="r2" className="manual"></label>
                <label for="r3" className="manual"></label>
                <label for="r4" className="manual"></label>
            </div>
        </div>
        <div className="section4">
            <div className="section__container">
                <div className="header">
                  <p>TESTIMONIALS</p>
                  <h1>What Our Users Say</h1>
                </div>
                <div className="testimonials__grid">
                  <div className="card">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill="currentColor">
                      <path d="M4.58341 17.3211C3.55316 16.2274 3 15 3 13.0103C3 9.51086 5.45651 6.37366 9.03059 4.82318L9.92328 6.20079C6.58804 8.00539 5.93618 10.346 5.67564 11.822C6.21263 11.5443 6.91558 11.4466 7.60471 11.5105C9.40908 11.6778 10.8312 13.159 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0095 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2274 13 15 13 13.0103C13 9.51086 15.4565 6.37366 19.0306 4.82318L19.9233 6.20079C16.588 8.00539 15.9362 10.346 15.6756 11.822C16.2126 11.5443 16.9156 11.4466 17.6047 11.5105C19.4091 11.6778 20.8312 13.159 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0095 14.5834 17.3211Z"></path>
                    </svg>
                    <p>This community has been truly transformative. It's been instrumental in helping me secure my first job opportunity, and ever since, my accomplishments have been remarkable.</p>
                    <hr />
                    <img src={Person1} alt="user" />
                    <p className="name">Allan Hawi<br/>Mentee</p>
                  </div>
                  <div className="card">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill="currentColor">
                      <path d="M4.58341 17.3211C3.55316 16.2274 3 15 3 13.0103C3 9.51086 5.45651 6.37366 9.03059 4.82318L9.92328 6.20079C6.58804 8.00539 5.93618 10.346 5.67564 11.822C6.21263 11.5443 6.91558 11.4466 7.60471 11.5105C9.40908 11.6778 10.8312 13.159 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0095 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2274 13 15 13 13.0103C13 9.51086 15.4565 6.37366 19.0306 4.82318L19.9233 6.20079C16.588 8.00539 15.9362 10.346 15.6756 11.822C16.2126 11.5443 16.9156 11.4466 17.6047 11.5105C19.4091 11.6778 20.8312 13.159 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0095 14.5834 17.3211Z"></path>
                    </svg>
                    <p>KonnectMe has truly been a game-changer in my life! It's incredible how having a supportive role model can profoundly impact you.</p>
                    <hr />
                    <img src={Person5} alt="user" />
                    <p className="name">Teresa Marilyn<br/>Mentee</p>
                  </div>
                  <div className="card">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill="currentColor">
                      <path d="M4.58341 17.3211C3.55316 16.2274 3 15 3 13.0103C3 9.51086 5.45651 6.37366 9.03059 4.82318L9.92328 6.20079C6.58804 8.00539 5.93618 10.346 5.67564 11.822C6.21263 11.5443 6.91558 11.4466 7.60471 11.5105C9.40908 11.6778 10.8312 13.159 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0095 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2274 13 15 13 13.0103C13 9.51086 15.4565 6.37366 19.0306 4.82318L19.9233 6.20079C16.588 8.00539 15.9362 10.346 15.6756 11.822C16.2126 11.5443 16.9156 11.4466 17.6047 11.5105C19.4091 11.6778 20.8312 13.159 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0095 14.5834 17.3211Z"></path>
                    </svg>
                    <p>Joining KonnectMe as a mentor has been an incredibly fulfilling journey. It's been immensely rewarding to empower young talents in the field of technology, guiding them towards realizing their boundless potential.</p>
                    <hr />
                    <img src={Person4} alt="user" />
                    <p className="name">Trixie Wangui<br/>Mentor</p>
                  </div>
                </div>
                <div>
                <div className="footer">
        <h4>Join Us Today!</h4>
        <p>A community of mentors and mentees striving for excellence</p>
        <button>JOIN TODAY</button>
      </div>
      <div className="spline-background">
        <Spline scene="https://prod.spline.design/os1oSM-b-HqGVbjp/scene.splinecode" />
      </div>
                </div>
                
            </div>
        </div>
            
        </div>
        
    
    )
}
export default Hero;