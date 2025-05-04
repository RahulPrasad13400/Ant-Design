import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import 'antd/dist/reset.css';

export default function App() {
  return <Space direction='vertical' style={{marginLeft : "20px", marginTop : "20px"}}>
     <Avatar />
     <Avatar shape='square' style={{backgroundColor : "black"}} />
     <Avatar>Hello</Avatar>
     <Avatar src={'https://images.unsplash.com/photo-1745953707460-959b97dfa42d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
     <Avatar icon={<UserOutlined />} />

     <Avatar.Group>
        <Avatar />
        <Avatar shape='square' style={{backgroundColor : "black"}} />
        <Avatar>Hello</Avatar>
        <Avatar src={'https://images.unsplash.com/photo-1745953707460-959b97dfa42d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
        <Avatar icon={<UserOutlined />} />
     </Avatar.Group>

     <Avatar.Group maxCount={2}>
        <Avatar />
        <Avatar shape='square' style={{backgroundColor : "black"}} />
        <Avatar>Hello</Avatar>
        <Avatar src={'https://images.unsplash.com/photo-1745953707460-959b97dfa42d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
        <Avatar icon={<UserOutlined />} />
     </Avatar.Group>
  </Space>
}

