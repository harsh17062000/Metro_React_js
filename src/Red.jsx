import Card from "react-bootstrap/Card";
import Table1 from "./Table";

function ImgOverlayExample() {
  return (
    <div 
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1612899329603-a3ce066fca6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
      }}
    >
      <Card 
        className="shadow-lg text-center text-light"
        style={{
          width: "80%",
          maxWidth: "800px",
          backgroundColor: "rgba(0,0,0,0.7)",
          borderRadius: "20px",
          padding: "30px",
        }}
      >
        <Card.Title className="text-danger fw-bold" style={{ fontSize: "40px" }}>
          🚆 Line 1 - Red Line
        </Card.Title>
        <Card.Subtitle className="text-success mb-3" style={{ fontSize: "25px" }}>
          ✅ Normal Service
        </Card.Subtitle>
        <hr className="border-light"/>
        <Card.Title className="text-warning" style={{ fontSize: "35px" }}>
          📍 Station Status
        </Card.Title>
        <br />
        <Table1 />
      </Card>
    </div>
  );
}

export default ImgOverlayExample;
