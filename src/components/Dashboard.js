import React, { useState, Container } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Property from "./Property"


export default function Dashboard() {


  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();



   async function handleLogout() {
    setError("")
    console.log('slaw')
    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <Card style={{maxWidth: "1500px", alignItems:"center"}}>
        <Card.Body style={{ alignContent:"center"}}>
          <h1 className="text-center mb-4">Kurd Estate</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <br />
          
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
          <Link to="/AddProperty" className="btn btn-primary w-100 mt-3">
            Add a Property
          </Link>
          
          
        </Card.Body>
      </Card>
      <br />
      <h2>Latest Properties:</h2>
      <br />
      
      <Property className="" />

      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
      
    </>
  )
}
