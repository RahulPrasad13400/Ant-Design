import 'antd/dist/reset.css';
import './App.css';
import { Form, Input, Button, message , Alert} from 'antd';
import { useState } from 'react';

function App() {

  const [showAlert, setShowAlert] = useState(false)

  const onFinish = (e) => {
    console.log(e)
    setTimeout(()=>{
      setShowAlert(true)
      message.success("Login successfull") 
      message.error("Login failed")
      message.warning("login failed")
    }, 200)
    
  }

  return <div style={{marginTop : "100px"}}>
    <Alert type='error' message="error" description="There was an error on login" />
    <Form onFinish={onFinish}>
      <Form.Item label="user name" name="username">
        <Input placeholder='Enter the username' />
      </Form.Item>

      <Form.Item label="password" name="password">
        <Input.Password placeholder='Enter the password' />
      </Form.Item>

      <Form.Item>
        <Button block type='primary' htmlType='submit'>Log In</Button>
      </Form.Item>
    </Form>
  </div>
}

export default App;
