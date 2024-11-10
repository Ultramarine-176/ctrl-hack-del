import React from 'react'
import homeImage from './HomeLargePicture.jpg';

const Home = () => {
  const urls = [
    { url: 'findClinic', label: 'Headache' },
    { url: 'https://www.example.com/page2', label: 'Fever' },
    { url: 'https://www.example.com/page3', label: 'Fatigue' },
    { url: 'https://www.example.com/page4', label: 'Rash' },
    { url: 'https://www.example.com/page5', label: 'Diarrhea' },
  ];
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${homeImage})`,
          height: '94vh', // Full viewport height
          width: '100vw', // Full viewport width
          backgroundSize: 'cover', // Image covers the screen
          backgroundPosition: 'center', // Centers the image
          backgroundRepeat: 'no-repeat', // Prevents tiling
        }}
      />
      <div >
        <h1
           style={{
            fontFamily: "'Roboto', sans-serif",
            position: 'absolute',
          top: '65%',
          left: '30%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '7rem',
          textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)',
          margin: 0,
          }}
        >What We Do!</h1>
      </div>
      <div style={{ textAlign: 'center' }}>
        <p
        style={{
          fontFamily: "'Roboto', sans-serif",
          fontSize: '2rem',
          lineHeight: '1.6',
          color: '#333',
          background: 'rgba(100, 200, 250, 0.2)', // Light blue background
          padding: '100px 100px',
          borderRadius: '8px',
          borderLeft: '4px solid #00aaff',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
        >Let AI be your doctor
        <br></br>
        <br></br>
        Our AI Diagnosis Web Tool is an advanced online platform designed to assist 
        users in identifying potential health conditions by analyzing their symptoms,
        and other relevant data inputs using artificial intelligence.
        This tool is intended to complement healthcare services by offering reliable 
        recommendations, highlighting possible diagnoses, and suggesting next steps, 
        such as seeking a healthcare professional for further evaluation. 
        With a user-friendly interface, it empowers individuals with fast, secure, 
        and confidential access to health-related guidance, enhancing accessibility 
        to medical insights while reducing unnecessary anxiety or visits. 
        This web-based tool serves as an essential resource for both patients and 
        clinicians by streamlining health assessments and supporting informed decision-making.
        </p>
      </div>
      <div >
        <h1
           style={{
            fontFamily: "'Roboto', sans-serif",
            display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
          color: 'Black',
          fontSize: '4rem',
          textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)',
          margin: 0,
          }}
        >Common Symptoms</h1>
      </div>
      <div
      style={{
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: '20px',
      }}
    >
      {urls.map((url, index) => (
        <div
          key={index}
          onClick={() => (window.location.href = urls[0].url)} // Navigate to the URL when clicked
          style={{
            width: '100px',
            height: '100px',
            background: 'rgba(150, 200, 220, 0.2)', // Slightly darker blue background
            border: '2px solid #00aaff', // Accent border
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <span style={{ fontFamily: "'Roboto', sans-serif", fontSize: '1rem' }}>
            {url.label}
          </span>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Home