import './Body.css';
import video from './file.mp4'
import first_png from './5.png'
import sec_jpg from './6.jpg'
import thi_jpg from './9.jpg'
import fou_png from './4.png'
import fif_png from './3.png'
import Svg_logo from './svgcomponent'
import Svg_logo2 from "./svgcomponent2";
import React, { useEffect, useRef } from 'react';
function Body(){
    return(
        
      <div className='image-container'>
      <img src={first_png} id='first_png'></img>
      
      <div class="container">
    <p className="animated-text" >
    <span id='span'>Startup for<br/> Businesses</span><br/>
<p id='intro'>At Ekke, we partner with businesses at all stages. Our business offers a comprehensive range of creative services, including website design and development, animation and film production, car photography, video editing, and storytelling. With a team of skilled professionals, we deliver high-quality results that captivate audiences and help clients achieve their creative and business goals. Our services cater to various industries, including events, promotions, films, sports, and more. We pride ourselves on our creativity, attention to detail, and exceptional customer service, ensuring that our clients' visions come to life in the most innovative and visually appealing ways.
</p>
<p>
    <button id='button'>Learn More</button>
    </p>
    </p>
   
    </div>
    <div>
           
            <video  controls>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
      </div>
      
      <div className='numbers'>
      <p id='grid4'>We’re Good with Numbers</p>
      <div class="grid-container">
        <div class="grid-item">
            <p className='qualities'>4</p>
            <p className='qualities2'>Cities World-Wide</p>
        </div>
        <div class="grid-item">
            <p className='qualities'><ul><li>+80</li></ul></p>
            <p className='qualities2'>Qualified Experts</p>
        </div>
        <div class="grid-item">
            <p className='qualities'><ul><li>180</li></ul></p>
            <p className='qualities2'>Clients Every Year</p>
        </div>
        <div class="grid-item">
            <p className='qualities'><ul><li>+46</li></ul></p>
            <p className='qualities2'>Intl. Partners</p>
        </div>
        </div>
      </div>
      <div id='gridheader'>
        <p id='services'>SERVICES</p>
      <p id='services1'>Taking Your Business To The Next Level</p>


      </div>
      <div class="grid-container1">
        <div class="grid-item">
        <div className='svg'><Svg_logo/></div>
            <b>Creative Development</b>
            <p className='grid1'>As a versatile and creative service provider, we offer an extensive range of solutions to meet your unique needs. From web application and software development to animation and film production, video editing, and storytelling, our team of skilled professionals excels in delivering captivating and high-quality results.

 

Whether you need promotional videos for your business, stunning visuals for events or conferences, engaging e-learning content, or creative storytelling for your brand, we have the expertise and resources to bring your vision to life.

 

With our unwavering commitment to creativity, attention to detail, and customer satisfaction, you can trust us to exceed your expectations and help you achieve your creative and business goals.</p>
        </div>
        <div class="grid-item">
        <div className='svg'><Svg_logo2/></div>
            <b>M&A Advisory and Private Acquisitions</b>
            <p className='grid1'>Our team provides comprehensive sell-side M&A advisory services to small private companies globally. With regional offices in London, New York, Accra, and Singapore, we offer transaction advisory services and financial sponsor coverage across different geographies.

 

Our expertise spans various industries including manufacturing, real estate, food, and finance. We also have the capability to purchase divisions or segments of businesses in century-old industries.

 

Our client-centric approach, seasoned professionals, and industry knowledge enable us to deliver strategic insights, expert guidance, and innovative solutions to help businesses achieve their financial and strategic objectives.

 

Trust us as your partner in driving successful M&A transactions and creating value for your business.</p>
        </div>
        </div>
        <div className='about'>
            <p id='aboutus'> ABOUT US</p>
            <p id='aboutheader'>Ekke: Your Comprehensive Partner for Software Development, Animation, M&A, and More!</p>
            <p id='about'>
            At Ekke Ltd, an OTITL Company based in London, we are the go-to choice for businesses looking to maintain a competitive edge in their markets. In today's landscape where skilled software programmers are in high demand, we understand the challenges of recruiting and managing technical talent. That's why we offer comprehensive outsourcing solutions for all aspects of technical and software product development, freeing up businesses to focus on marketing, sales, and growth.<br/><br/>

​

Our team of seasoned experts is dedicated to building intelligent systems that are five years ahead of the competition. Leveraging cutting-edge technologies and innovative approaches, we deliver superior results that keep our clients ahead of the curve in the fast-paced technology industry. We stay at the forefront of the latest advancements, ensuring our clients always have access to the latest tools and techniques.<br/><br/>

​

In addition to our technical expertise, we also provide strategic advice on M&A sell-side transactions during peak growth periods. With deep industry knowledge and an extensive network, we offer valuable insights and guidance to help our clients navigate complex M&A processes and maximize their value.<br/><br/>

​

Furthermore, we strategically acquire businesses that are worth digitizing, drawing on our diverse team of technical and business experts to identify and capitalize on unique market opportunities. Our resourceful community of professionals brings together a wealth of experience, skills, and knowledge to provide unparalleled support to modern businesses seeking to thrive in today's competitive landscape.<br/><br/>

​

Choose us as your trusted partner for driving technological innovation, strategic growth, and M&A success. With our unrivaled expertise, forward-thinking approach, and unwavering commitment to excellence, we are the ideal choice for businesses looking to unlock their full potential in the dynamic world of technology and software development.<br/><br/>

 

Whether you need software development, M&A guidance, animation, photography, or other tech solutions, Tech Solutions Pro has you covered.
            </p>
        </div>
        <h1>Tech, Tools, Skills & More!</h1>
        <div className='image-container2'>
        <img src={sec_jpg} id='sec_jpg'></img>
        </div>
        <div>
        <img src={thi_jpg} id='thi_jpg'></img>
        </div>
        <div id='first_footer'>
        <p id='dedication'>Dedication. Expertise. Passion.</p>

​
<ul id='note'>
    <li>
ASP.Net, ADO.Net, C Sharp, ASP.NET MVC, Entity Framework, .Net Core
</li><li>
JDBC, XML/XPATH, Servlets, JSP, Hibernate, Spring Boot, REST APIs
</li><li>
MySQL, Postgres, MS SQL server and Oracle relational DB Redis and MongoDB
</li><li>
Ethereum, Bitcoin, Hyperledger, Fabric, Tron, Litecoin, Zcash
</li><li>
EOS, Stellar, NEM and Hyperledger, ERC 20/223, ERC 721, ERC 1155 
</li><li>
PHP5/7, PHPunit, UnrealScript, C#, lua
</li><li>
Laravel 5.2, Laravel Nova/Spark, Laravel Livewire/Lumen RESTful APIs
</li><li>
Vue/Vuex, Vuetify
</li><li>
Scss, CSS3 , TailwindCSS
</li><li>
GCP, MS Azure, AWS Amplify
</li>
</ul>
        </div>
        <div className='footer'>
            <p><h1 id='contact'>CONTACT US</h1></p>
            <div className='sub-footer'>
            <div id='last-sentence1'>
            © 2023 by Ekke Ltd.
            </div>
            <div className='handles' id='last-sentence2'>
            <img src={fou_png} id='fou_png'></img>
            <img src={fif_png} id='fif_png'></img>
            </div >
            <div id='last-sentence3'>56 Shoreditch High Street<br/>
London<br/>
E1 6JJ<br/>
United Kingdom</div>
</div>
        </div>
  </div>
       
    )
}
export default Body;