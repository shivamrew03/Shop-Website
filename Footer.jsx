// import React from "react"

// export default function Footer(){
//     return(
//         <div>
//             <img src="..assets/LOGO.png" alt="" />
//         </div>
//     )
// }
import React from 'react';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
          <p>Address: Ashok Bhawan, near PachPaoli police station, Nagpur 440017</p>
          <p>Phone: +91-9545539709</p>
          <p>Email: nootanpress@gmail.com</p>
        </div>
        <div className="footer-right">
          <a href="https://www.justdial.com/jdmart/Nagpur/Nootan-Printing-Press-Opposite-Police-Station-Panchpaoli-Kamal-Chowk/0712PX712-X712-110212172833-Y8G2_BZDET/catalogue" target='_blank'>Justdial</a>
          <a href="https://www.instagram.com/samitankar/" target='_blank'>Instagram</a>
          <a href="https://wa.me/919545539709" target='_blank'>Whatsapp</a>
        </div>
    </footer>
  );
}

export default Footer;
