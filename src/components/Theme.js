// vdo - 16 Theme customization (watch that video)

import { Button, Slider, Space } from 'antd';
import 'antd/dist/reset.css';

export default function App() {
  return <div>
    {/* VERTICAL */}
    <Space direction='vertical'>
      <Button> VERTICAL </Button>
      <Button> VERTICAL </Button>
    </Space>

    {/* HORIZONTAL */}
    <Space direction='horizontal'>
      <Button type='primary'> HORIZONTAL </Button>
      <Button type='primary'> HORIZONTAL </Button>
    </Space>

    <Slider trackStyle={{ backgroundColor: "red" }} 
     handleStyle={{ borderColor: "green", backgroundColor: "brown" }} />

  </div>
}
