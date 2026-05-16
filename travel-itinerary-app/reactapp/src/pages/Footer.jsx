// Footer.js
import React from "react";

function Footer() {
  const styles = {
    footer: {
      backgroundColor: "#77c2ceff", // Dark blue
      color: "white",
      textAlign: "center",
      padding: "20px 0",
      position: "relative",
      bottom: 0,
      width: "100%",
      marginTop: "50px",
    },
    link: {
      color: "#ffffff",
      textDecoration: "underline",
      margin: "0 10px",
    },
  };

  return (
    <footer style={styles.footer}>
      <p>© 2025 Travel Itinerary Planner. All rights reserved.</p>
      {/* <p>
        <a href="/privacy" style={styles.link}>Privacy Policy</a> | 
        <a href="/terms" style={styles.link}>Terms of Service</a>
      </p> */}
    </footer>
  );
}

export default Footer;
