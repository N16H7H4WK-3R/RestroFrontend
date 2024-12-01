import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleReserve = () => {
    navigate("/booking");
  };

  return (
    <div style={styles.heroSection}>
      <div style={styles.imageSlider}>
        <img
          src="https://lvivity.com/wp-content/uploads/2018/11/mobile-app-for-restaurant.jpg"
          alt="Restaurant Image 1"
          style={styles.sliderImage}
        />

      </div>

      <div style={styles.textOverlay}>
        <div style={styles.textContainer}>
          <h1 style={styles.heading}>
            Experience Authentic Mediterranean Cuisine
          </h1>
          <p style={styles.paragraph}>
            Indulge in fresh, flavorful dishes made with traditional recipes, served with a modern twist.
          </p>
          <div style={styles.buttonContainer}>
            <button
              type="button"
              onClick={handleReserve}
              style={styles.button}
            >
              Reserve a Table
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  heroSection: {
    position: "relative",
    overflow: "hidden",
    height: "100vh", // Full-screen hero section
  },

  textOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
    color: "#fff",
  },
  textContainer: {
    padding: "20px",
  },
  heading: {
    fontSize: "3rem",
    fontWeight: "700",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "1.25rem",
    fontWeight: "400",
    marginBottom: "30px",
  },
  buttonContainer: {
    marginTop: "20px",
  },
  button: {
    fontWeight: "600",
    letterSpacing: "1px",
    padding: "12px 30px",
    borderRadius: "25px",
    textTransform: "uppercase",
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Light background for the button
    color: "#333",
    transition: "all 0.3s ease",
    border: "none",
    cursor: "pointer",
  },
};


export default Hero;