import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Dashboard.css'
const Dashboard = () => {

   const [ticket, setTicket] = useState([])
   const [frmvisible,setFrmvisible] = useState(false)
   const [editdata ,setEditdata] = useState({})

   function vinput(c){
    const{name,value} = c.target;
    setEditdata({...editdata,
        [name]:value
    })
   }

   function delfun(id){
    axios.delete(`http://localhost:3000/Metro/${id}`)
    .then(res=>alert("Ticket is Cancelled!"))
   }

   function subhandle(){
    axios.put(`http://localhost:3000/Metro/${editdata.id}`, editdata)
    .then(r=>{alert("Details Updated!")})
   }

    useEffect(()=>{
        axios.get("http://localhost:3000/Metro").then((r)=>{
            setTicket(r.data)
        })})
  return (
    <>
    <table className='tablle'>
        <thead className='theadd'>
            <th>ID</th>
            <th>Train No.</th>
            <th>From</th>
            <th>To</th>
            <th>Passengers</th>
            <th>Cancel</th>
            <th>Update Details</th>
        </thead>
        <tbody>
            {
                ticket.map((c,index)=> (
                    <tr key={index}>
                        <td>{c.id}</td>
                        <td>{c.train}</td>
                        <td>{c.from}</td>
                        <td>{c.to}</td>
                        <td>{c.passengers}</td>
                        <td><button onClick={()=>delfun(c.id)}>Cancel Ticket</button></td>
                        <td><button onClick={()=>{setFrmvisible(true),setEditdata(c)}}>Update Ticket</button></td>
                    </tr>
                ))
            }
        </tbody>
    </table>
            {frmvisible && (
                <form className='formm' onSubmit={subhandle}>
                    <label htmlFor="">ID</label>
                    <input type="text" name="id" value={editdata.id} readOnly onChange={vinput} /> <br /><br />
                    
                    <label htmlFor="">Train No.</label>
                    <input type="text" name="train" value={editdata.train} onChange={vinput} /> <br /><br />
                    
                    <label htmlFor="">From</label>
                    <input type="text" name="from" value={editdata.from} onChange={vinput} /> <br /><br />
                    
                    <label htmlFor="">To</label>
                    <input type="text" name="to" value={editdata.to} onChange={vinput} /> <br /><br />

                    <label htmlFor="">Passengers</label>
                    <input type="text" name="passengers" value={editdata.passengers} onChange={vinput} /><br /><br />

                    <input type="submit" />
                </form>
            )}
    </>
  )
}

export default Dashboard