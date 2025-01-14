// Import React
import React from "react";
import ReactDOM from "react-dom/client";

// Importa tus estilos
import "../styles/index.css";

// Importa los componentes
import { Home, Jubottron, Card, Footer } from "./component/home.jsx";

// Define el componente principal
const App = () => {
  return (
    <>
      <Home />
      <Jubottron />
      <Card />
      <Footer/>
    </>
  );
};

// Renderiza la aplicación principal
ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

