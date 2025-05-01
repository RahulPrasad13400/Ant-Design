import 'antd/dist/reset.css';
import './App.css';
import { Form, Input, Button } from 'antd';

function App() {

  const onFinish = (e) => {
    console.log(e)
  }

  return <div>
    <Form onFinish={onFinish}>
      <Form.Item label="user name" name="username">
        <Input placeholder='Enter the username' />
      </Form.Item>

      <Form.Item label="password" name="password">
        <Input.Password placeholder='Enter the password' />
      </Form.Item>

      <Form.Item label="user name" name="username">
        <Button block type='primary' htmlType='submit'>Log In</Button>
      </Form.Item>
    </Form>
  </div>
}

export default App;
