import React from "react";
import ProfileCard from "./Components/Child"; 
function Parent() {
  return (
    <div style={styles.container}>
      <ProfileCard
        name="Alice Johnson"
        age={25}
        bio="Frontend Developer who loves React."
        image="https://randomuser.me/api/portraits/women/68.jpg"
      />
      <ProfileCard
        name="Bob Smith"
        age={30}
        bio="Backend Engineer and Node.js enthusiast."
        image="https://randomuser.me/api/portraits/men/32.jpg"
      />
      <ProfileCard
        name="Charlie Brown"
        age={28}
        bio="Full-stack Developer passionate about UI/UX."
        image="https://randomuser.me/api/portraits/men/41.jpg"
      />
      <ProfileCard
        name="Diana Prince"
        age={27}
        bio="Mobile App Developer and tech blogger."
        image="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <ProfileCard
        name="Ethan Hunt"
        age={35}
        bio="DevOps Engineer with a love for automation."
        image="https://randomuser.me/api/portraits/men/50.jpg"
      />
      <ProfileCard
        name="Fiona Apple"
        age={29}
        bio="Data Scientist and machine learning enthusiast."
        image="https://randomuser.me/api/portraits/women/55.jpg"
      />
      <ProfileCard
        name="George Clooney"
        age={40}
        bio="Cybersecurity expert and ethical hacker."
        image="https://randomuser.me/api/portraits/women/60.jpg"
      />
      <ProfileCard
        name="Hannah Montana"
        age={22}
        bio="Graphic Designer and digital artist."
        image="https://randomuser.me/api/portraits/women/65.jpg"
      />
      <ProfileCard
        name="Ian Somerhalder"
        age={33}
        bio="Cloud Architect and AWS Certified."
        image="https://randomuser.me/api/portraits/women/70.jpg"
      />
      <ProfileCard
        name="Jessica Jones"
        age={31}
        bio="Software Tester and quality assurance advocate."
        image="https://randomuser.me/api/portraits/women/75.jpg"
      />
      <ProfileCard
        name="Kevin Spacey"
        age={38}
        bio="Game Developer and Unity expert."
        image="https://randomuser.me/api/portraits/men/80.jpg"
      />
      <ProfileCard
        name="Laura Croft"
        age={26}
        bio="Blockchain Developer and crypto enthusiast."
        image="https://randomuser.me/api/portraits/women/85.jpg"
      />
      <ProfileCard
        name="Michael Scott"
        age={36}
        bio="Project Manager and Agile Coach."
        image="https://randomuser.me/api/portraits/men/90.jpg"
      />
      <ProfileCard
        name="Nina Simone"
        age={24}
        bio="SEO Specialist and digital marketer."
        image="https://randomuser.me/api/portraits/men/95.jpg"
      />
      <ProfileCard
        name="Oscar Isaac"
        age={32}
        bio="Technical Writer and documentation guru."
        image="https://randomuser.me/api/portraits/women/10.jpg"
      />
      <ProfileCard
        name="Paula Patton"
        age={29}
        bio="IT Support Specialist and tech enthusiast."
        image="https://randomuser.me/api/portraits/women/15.jpg"
      />
   
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "20px",
    justifyContent: "space-around",
    padding: "20px",
    backgroundColor: "#f0f0f0",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    fontSize: "16px",
    lineHeight: "1.5",
    textAlign: "center",
    backgroundImage: "linear-gradient(to right, #e0eafc,rgb(87, 41, 10))",
    borderRadius: "12px",
    margin: "20px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    border: "1px solid #ccc",
    reportError: "0 4px 8px rgba(0, 0, 0, 0.2)",
    boxShadow: "0 4px 8px rgba(216, 28, 28, 0.99)",
  
  }
};

export default Parent;
