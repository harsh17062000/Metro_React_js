import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function KitchenSinkExample() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Running Status</h1>
      <div
        style={{
          display: "flex",
          gap: "90px",
          justifyContent: "center",
          backgroundColor: "#ebebeb",
          marginTop: "80px",
          marginBottom: "100px",
          padding: "20px"
        }}
      >
        <Card style={{ width: "18rem", boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.42)" }}>
          <Card.Img
            style={{ height: "300px" }}
            variant="top"
            src="/train-3714601_1280.jpg"
          />
          <Card.Body>
            <Card.Text style={{ fontSize: "25px", textAlign: "center" }}>
              Station Status
            </Card.Text>
            <Card.Title style={{ textAlign: "center" }}>
              <Link to="/imgOverlayExample" style={{ color: "red", textDecoration: "none" }}>
                Red Line
              </Link>
            </Card.Title>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" , boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.42)"}}>
          <Card.Img
            style={{ height: "300px" }}
            variant="top"
            src="/transport-7618294_1280.webp"
          />
          <Card.Body>
            <Card.Text style={{ fontSize: "25px", textAlign: "center" }}>
              Station Status
            </Card.Text>
            <Card.Title style={{ textAlign: "center" }}>
              <Link to="/blue" style={{ color: "blue", textDecoration: "none" }}>
                Blue Line
              </Link>
            </Card.Title>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" , boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.42)" }}>
          <Card.Img
            style={{ height: "300px" }}
            variant="top"
            src="/sao-bento-82700_1280.jpg"
          />
          <Card.Body>
            <Card.Text style={{ fontSize: "25px", textAlign: "center" }}>
              Station Status
            </Card.Text>
            <Card.Title style={{ textAlign: "center" }}>
              <Link to="/yellow" style={{ color: "#d4a600", textDecoration: "none" }}>
                Yellow Line
              </Link>
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
      <br />
      <br />
    </>
  );
}

export default KitchenSinkExample;
