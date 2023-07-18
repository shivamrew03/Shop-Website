// import React from "react"

// export default function MainContent(){
//     return(
//         <div className="MainCont">
//             <h1>NOOTAN PRINTING PRESS</h1>
            
//         </div>
//     )
// }
import React from 'react';
import './MainContent.css'
import VisitingCardImage from '../src/assets/visiting-card.jpg';
import InvitationCardImage from '../src/assets/invitation-card.jpg';
import LeafletBrochureImage from '../src/assets/leaflet-brochure.jpg';
import StickersImage from '../src/assets/stickers.jpg';
import LetterheadsImage from '../src/assets/letterheads.jpg';
import CertificatesImage from '../src/assets/certificates.jpg';
import DoctorFilesImage from '../src/assets/doctor-files.jpg';
import BrochureImage from '../src/assets/brochure.jpg';
import BookWorkImage from '../src/assets/book-work.jpg';
import BookCoverImage from '../src/assets/book-cover.jpg';
import CalendarImage from '../src/assets/calender.jpg';
import BackgroundImage from '../src/assets/background.jpg';
import ShopImage from '../src/assets/press7.jpg';

function MainContent() {
    
    return (  
        

      <div className="main-content" style={{ backgroundImage: `url(${BackgroundImage})`}}>
        <div className="service-title">
          <h1>WE ARE NOOTAN PRINTING PRESS</h1><br />
          <h2>"Where Creativity Meets Print Excellence"</h2>
          <img src={ShopImage}/>
          <h2>Our Services:</h2>
      </div>
        <div id="services" className="service-container">
          <a href="#visiting-cards">
            <img src={VisitingCardImage} alt="Visiting Card" />
            <h3>Visiting Cards</h3>
            <p>High-quality customized visiting cards for your business.</p>
          </a>
        </div>
  
        <div className="service-container">
          <a href="#invitation-cards">
            <img src={InvitationCardImage} alt="Invitation Card" />
            <h3>Invitation Cards</h3>
            <p>Beautifully designed invitation cards for all your events.</p>
          </a>
        </div>
  
        <div className="service-container">
          <a href="#leaflet-brochures">
            <img src={LeafletBrochureImage} alt="Leaflet Brochure" />
            <h3>Leaflets & Brochures</h3>
            <p>Eye-catching leaflets and brochures to promote your business.</p>
          </a>
        </div>
  
        <div className="service-container">
          <a href="#stickers">
            <img src={StickersImage} alt="Stickers" />
            <h3>Stickers</h3>
            <p>Custom stickers for branding and marketing purposes.</p>
          </a>
        </div>
  
        <div className="service-container">
          <a href="#letterheads">
            <img src={LetterheadsImage} alt="Letterheads" />
            <h3>Letterheads</h3>
            <p>Professional letterheads for official correspondence.</p>
          </a>
        </div>
  
        <div className="service-container">
          <a href="#certificates">
            <img src={CertificatesImage} alt="Certificates" />
            <h3>Certificates</h3>
            <p>Elegant certificates for recognition and achievement.</p>
          </a>
        </div>
  
        <div className="service-container">
          <a href="#doctor-files">
            <img src={DoctorFilesImage} alt="Doctor Files" />
            <h3>Doctor Files</h3>
            <p>Specialized printing for medical records and files.</p>
          </a>
        </div>
  
        <div className="service-container">
          <a href="#brochures">
            <img src={BrochureImage} alt="Brochure" />
            <h3>Brochures</h3>
            <p>Detailed brochures to showcase your products and services.</p>
          </a>
        </div>
  
        <div className="service-container">
          <a href="#book-work">
            <img src={BookWorkImage} alt="Book Work" />
            <h3>Book Work</h3>
            <p>Printing services for books and publications.</p>
          </a>
        </div>
  
        <div className="service-container">
          <a href="#book-covers">
            <img src={BookCoverImage} alt="Book Cover" />
            <h3>Book Covers</h3>
            <p>Eye-catching book covers to attract readers.</p>
          </a>
        </div>
  
        <div className="service-container">
          <a href="#calendars">
            <img src={CalendarImage} alt="Calendar" />
            <h3>Calendars</h3>
            <p>Custom calendars for personal or promotional use.</p>
          </a>
        </div>
      </div>
    );
  }
  
  export default MainContent;