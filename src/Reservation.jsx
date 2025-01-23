import React, { useEffect, useState } from "react";
import "./Reservation.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MetroReservation() {
  const [reservationDetails, setReservationDetails] = useState({
    train: "",
    date: "",
    passengers:"",
    from:"",
    to:""

  });

  let nav = useNavigate();
  function navv(){
    nav('/dashboard')
  }

  const hinput = (e) => {
    const { name, value } = e.target;
    setReservationDetails({ ...reservationDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/Metro",reservationDetails).then(res=>alert("Ticket Booked"))
  };

  useEffect(()=>{
    axios.get("http://localhost:3000/Metro")
  },[])


  return (
    <>
    <div className="reservation-section">
      <h1>Metro Train Reservation</h1>

    <form onSubmit={handleSubmit}>

      <label htmlFor="">Train No.</label><br />
      <input type="text" name="train" value={reservationDetails.train} onChange={hinput} /> <br /><br />

      <label htmlFor="">date</label><br />
      <input type="date" name="date" value={reservationDetails.date} onChange={hinput}  /> <br /><br />

      <label htmlFor="">From</label><br />
      <input type="text" name="from" value={reservationDetails.from} onChange={hinput}  /> <br /><br />

      <label htmlFor="">To</label><br />
      <input type="text" name="to" value={reservationDetails.to} onChange={hinput}  /> <br /><br />

      <label htmlFor="">Passengers</label><br />
      <input type="text" name="passengers" value={reservationDetails.passengers} onChange={hinput}  /> <br /><br />

      <input  onClick={navv} type="submit" />
    </form>
    </div>
    </>
  )
}

export default MetroReservation;
