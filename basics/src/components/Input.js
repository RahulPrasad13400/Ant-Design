import 'antd/dist/reset.css';
import './App.css';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function App() {

  return <div>
    <Input placeholder='Enter the Name' maxLength={4} />
    <Input placeholder='Enter the Name' type='password' />
    <Input placeholder='Enter the Name' prefix={<UserOutlined />} />
    <Input placeholder='Enter the Name' suffix={<UserOutlined />} />
    <Input placeholder='Enter the name' allowClear />
    <Input.Search placeholder='Enter the name' allowClear />
  </div>
}

export default App;
