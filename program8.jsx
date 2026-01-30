import React, { useState } from "react";

function Tab() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div style={styles.container}>
      <h2>Tab Navigation Example</h2>

      {/* Tab Buttons */}
      <div style={styles.tabContainer}>
        <button
          style={activeTab === "home" ? styles.activeBtn : styles.btn}
          onClick={() => setActiveTab("home")}
        >
          Home
        </button>

        <button
          style={activeTab === "about" ? styles.activeBtn : styles.btn}
          onClick={() => setActiveTab("about")}
        >
          About
        </button>

        <button
          style={activeTab === "contact" ? styles.activeBtn : styles.btn}
          onClick={() => setActiveTab("contact")}
        >
          Contact
        </button>
      </div>

      {/* Conditional Content */}
      <div style={styles.contentBox}>
        {activeTab === "home" && (
          <p>Welcome to the home page. This is the homepage.</p>
        )}

        {activeTab === "about" && (
          <p>This is the about page.</p>
        )}

        {activeTab === "contact" && (
          <p>Contact us at: contact@example.com</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial",
  },
  tabContainer: {
    marginBottom: "20px",
  },
  btn: {
    padding: "10px 20px",
    margin: "5px",
    cursor: "pointer",
    background: "#ddd",
    border: "1px solid #aaa",
    borderRadius: "5px",
  },
  activeBtn: {
    padding: "10px 20px",
    margin: "5px",
    cursor: "pointer",
    background: "#4caf50",
    color: "white",
    border: "1px solid #3e8e41",
    borderRadius: "5px",
  },
  contentBox: {
    padding: "10px",
    border: "1px solid #ccc",
    width: "300px",
    margin: "0 auto",
    borderRadius: "5px",
    background: "#f9f9f9",
  },
};

export default Tab;
