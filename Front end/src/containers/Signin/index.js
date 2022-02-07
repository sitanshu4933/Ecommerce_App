import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import Layout from '../../components/Layout/index'
import Input from '../../components/UI/input';
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions';
import { Redirect } from 'react-router';
/**
* @author
* @function Signin
**/


const Signin = (props) => {
  const [email, SetEmail] = useState('')
  const [password, SetPassword] = useState('')
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const userLogin = (e) => {
    e.preventDefault()
    const user = {
      email,
      password
    }
    dispatch(login(user))
  }
  if (auth.authenticated) {
    return <Redirect to={'/'} />
  }
  return (
    <>
      <Layout>
        <div className="container ">
          <div className="row ">
            <div className="col-md-6 ">
              <Form onSubmit={userLogin}>
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => SetEmail(e.target.value)} />
                <Input
                  label="Password"
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => SetPassword(e.target.value)} />
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )

}

export default Signin