import 'antd/dist/reset.css';
import './App.css';
import { Button } from 'antd';
import { useState } from 'react';
import { PoweroffOutlined } from '@ant-design/icons'

function App() {
  const [loading, setLoading] = useState(false)

  function onButtonClick(){
    console.log("button clicked")
    setLoading(true)
  }

  return <div>

    <Button type='primary'>type-primary</Button>

    <Button type='primary' block>type-primary block</Button>

    <Button type='primary' block icon={<PoweroffOutlined />}>type-primary block icon</Button>
    
    <Button type='primary' href="/create">href</Button>
    
    <Button type='primary' block 
      onClick={onButtonClick} loading={loading}
      icon={<PoweroffOutlined />} 
      style={{backgroundColor : "orange"}} >
      My first button
    </Button>

    <Button type='primary' loading={true}>
      loading
    </Button>
    <Button className='my-button'>
      my-button
    </Button>

  </div>
}

export default App;
