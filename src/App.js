import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  const teams = [
    {
      name: "Programação",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      name: "Front-End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Data Sciense",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "UX e Design",
      primaryColor: "#D86EBF",
      secondaryColor: "#FAE5F5",
    },
    {
      name: "Mobile",
      primaryColor: "#FEBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];

  const [collabs, setCollabs] = useState([]);

  const onNewCollab = (i) => {
    setCollabs([...collabs, i]);
  };

  return (
    <div>
      <Banner />
      <Form onPost={(i) => onNewCollab(i)} teams={teams} />

      {teams.map((i) => (
        <Team
          key={i.name}
          title={i.name}
          primaryColor={i.primaryColor}
          secondaryColor={i.secondaryColor}
          collabs={collabs.filter((j) => j.team === i.name)}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
