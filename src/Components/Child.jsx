import React from "react";

const Child = ({ name, age, bio, image }) => {
  const handleSayHi = () => {
    console.log(`Hi from ${name}!`);
  };

  return (
    <div className="card" style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.age}>Age: {age}</p>
      <p style={styles.bio}>{bio}</p>
      <button style={styles.button} onClick={handleSayHi}>Say Hi</button>
    </div>
  );
};
const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "12px",
    padding: "20px",
    width: "250px",
    textAlign: "center",
    margin: "15px",
    boxShadow: "0 4px 8px rgb(34, 24, 33)",
    backgroundColor: "",
    

  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px"
    
  },
  
  name: {
    fontSize: "1.5rem",
    margin: "10px 0"
  },
  age: {
    color: "#242015",
    marginBottom: "5px"
  },
  bio: {
    fontSize: "0.9rem",
    marginBottom: "15px",
    
  },

};

export default Child;
