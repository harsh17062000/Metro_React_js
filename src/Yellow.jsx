import Card from "react-bootstrap/Card";
import Table3 from "./Table3";

const Yellow = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://plus.unsplash.com/premium_photo-1664300709254-affc6bcf89c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "20px",
      }}
    >
      <Card
        className="shadow-lg text-center text-light"
        style={{
          width: "80%",
          maxWidth: "850px",
          backgroundColor: "rgba(0, 0, 0, 0.59)",
          borderRadius: "25px",
          padding: "35px",
        }}
      >
        <Card.Title
          className="text-warning fw-bold"
          style={{ fontSize: "42px", letterSpacing: "1px" }}
        >
          🚆 Line 3 - Yellow Line
        </Card.Title>
        <Card.Subtitle
          className="text-success mb-3"
          style={{ fontSize: "26px", textTransform: "uppercase" }}
        >
          ✅ Smooth Operations
        </Card.Subtitle>
        <hr className="border-warning" />
        <Card.Title className="text-info" style={{ fontSize: "36px" }}>
          📍 Current Station Status
        </Card.Title>
        <br />
        <Table3 />
      </Card>
    </div>
  );
};

export default Yellow;
