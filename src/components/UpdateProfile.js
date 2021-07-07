import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Header from "./Header"

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/Homepage")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <Card>
        
      <Header
        style={{
          width: 1920,
          height: 262
        }}
      ></Header>

        <Card.Body>
          <h2 className="text-center mb-4" style={{padding: "60px"}}>Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <br/>
              <Form.Label style={{
             
               marginLeft: 820,
               
               width: 300,
               borderRadius: 100,

             }}>Email</Form.Label>
              <Form.Control style={{
             
               marginLeft: 820,
               
               width: 300,
               borderRadius: 100,

             }}
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
            </Form.Group>
            <Form.Group id="password">
              <br/>
              <Form.Label style={{
               
               marginLeft: 820,
              
               width: 300,
               borderRadius: 100,

             }}>Password</Form.Label>
              <Form.Control style={{
               height: 50,
               marginLeft: 820,
               
               width: 300,
               borderRadius: 100,

             }}
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <br/>
              <Form.Label style={{
              
               marginLeft: 820,
               
               width: 300,
               borderRadius: 100,

             }}>Password Confirmation</Form.Label>
              <Form.Control style={{
               height: 50,
               marginLeft: 820,
               
               width: 300,
               borderRadius: 100,

             }}
                type="password"
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <br/>
            <br/>
            <Button disabled={loading} style={{paddingLeft: "70px", paddingRight: "70px", marginLeft: "870px"}} className="w-30" type="submit" >
              Update
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/Homepage">Cancel</Link>
      </div>
    </>
  )
}
