import React from "react";

export default function About(props) {
    // const[myStyle,setMyStyle] =useState({
    //     color:'black',
    //     backgroundColor:'white'
    
    // })

    let myStyle ={
      color: props.mode === 'dark'?'white':'#042743',
      backgroundColor: props.mode === 'dark'?'#042743':'white',
    }

  return (
    <div className="container" style={myStyle}>
        <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
             About TextUtils
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
           TextUtils is a single-page web application developed using React, designed to provide efficient and reliable text manipulation utilities. The application offers a clean and responsive interface, enabling users to transform and format text with ease and accuracy.

With TextUtils, users can perform various text operations, including:
<ul>
  <li>Converting text to uppercase or lowercase</li>
  <li>Removing extra spaces for cleaner formatting</li>
  <li>Copying text directly to the clipboard</li>
  <li>Clearing text instantly to start a new task</li>
  </ul>

The primary objective of TextUtils is to enhance productivity by simplifying common text-processing tasks. Built with modern web technologies, it ensures high performance, quick rendering, and a seamless user experience across devices.

TextUtils is an excellent utility for professionals, students, developers, and content creators who frequently work with text and require a fast, intuitive, and dependable tool. </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Features
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
           
           <ol>
            <li><strong>Convert Text Case :</strong></li>
             
Instantly convert your text to uppercase or lowercase with a single click, saving time and ensuring consistent formatting.

          <li><strong>Remove Extra Spaces :</strong></li>
Clean up messy text by removing unnecessary spaces, making your content look polished and professional.

          <li><strong>Copy to Clipboard :</strong></li>
Copy your processed text directly to the clipboard without manual selection, allowing for smooth and quick use in other applications.

          <li> <strong>Clear Text Area :</strong></li>
Easily clear the text area to start fresh with a new input, enhancing workflow efficiency.

            <li><strong>Responsive Design :</strong></li>
The application is built with a fully responsive UI, ensuring a seamless experience across desktops, tablets, and mobile devices.

            <li><strong>Single Page Application (SPA) :</strong></li>
Developed using React, TextUtils runs smoothly without page reloads, providing fast and uninterrupted performance.
</ol>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Benefits
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample" 
          >
            <div className="accordion-body" style={myStyle}>
             <ul>
              <li><b>Enhanced Productivity :</b> Perform multiple text formatting actions quickly and accurately.</li>
              <li><b>Lightweight and Fast :</b> Optimized React code ensures speed and smooth performance.</li>
              <li><b>User-Friendly Interface :</b> Simple design suitable for both beginners and professionals.</li>
              <li><b>Privacy-Focused :</b> All text operations are performed locally in your browser — no data is stored or shared.</li>
              <li><b>Versatile Use Cases :</b> Perfect for writers, students, developers, and anyone handling text regularly.</li>
             </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary my-3">{btntext}</button>
      </div> */}
    </div>
  );
}
