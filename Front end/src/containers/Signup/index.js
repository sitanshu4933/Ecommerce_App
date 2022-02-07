import React,{useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import { useSelector ,useDispatch} from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { signup } from '../../actions';
import Layout from '../../components/Layout/index'
import Input from '../../components/UI/input';



const Signup = (props) => {
  const auth=useSelector(state=>state.auth)
  const user=useSelector(state=>state.user)
  const dispatch=useDispatch()
  const [firstName, SetFirstName] = useState('')
  const [lastName, SetLastName] = useState('')
  const [email, SetEmail] = useState('')
  const [password, SetPassword] = useState('')
  const userdetails={
    firstName,lastName,email,password
  }
  const userSignup=(e)=>{
    // e.preventDefault()
    dispatch(signup(userdetails))
  }
  if(auth.authenticated){
    return <Redirect to={'/'}/>
  }
  if(user.loading){
    return <p>Loading...!</p>
  }
  return (
    <>
      <Layout>
        <div className="container">
          {user.message}
          <div className="row">
            <div className="col-md-6 ">
              <Form onSubmit={userSignup}>
                <div className="row">
                  <div className="col-md-6 ">
                    <Input label="First Name" type="text" placeholder="Enter First Name" value={firstName} onChange={(e) => { SetFirstName(e.target.value)}} />
                  </div>
                  <div className="col-md-6 ">
                    <Input label="Last Name" type="text" placeholder="Enter Last Name" value={lastName} onChange={(e) => {SetLastName(e.target.value) }} />
                  </div>
                </div>
                <Input label="Email Address" type="email" placeholder="Enter Email" value={email} onChange={(e) => { SetEmail(e.target.value)}} />
                <Input label="Password" type="password" placeholder="Enter Password" value={password} onChange={(e) => { SetPassword(e.target.value)}} />
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

export default Signup