import { DeleteOutlined } from '@ant-design/icons';
import { Button, Space, Tag } from 'antd';
import 'antd/dist/reset.css';

function App() {
  return <div>
    <Space direction='vertical' size={20}>

      <Tag>Tag 1</Tag>
      <Tag>Tag 2</Tag>

      <Tag closable>Tag 3</Tag>

      <Tag closable onClose={()=>{
        console.log("Tag closed..")
      }}>Tag 3</Tag>

      <Tag color='green'>HELLO</Tag> {/* GREEN POLE ERROR, DANGER ANGANEM VEREM COLOR IND */}
      
      <Tag color='error' style={{borderRadius : 10, padding : 5, marginLeft : 20}}>Error</Tag> 

      <Tag color='green' closable closeIcon={<Button>X</Button>}>HELLO</Tag>

      {/* PLACING THE ICON ON THE LEFT SIDE */}
      <Tag icon={ <DeleteOutlined /> }>left icon</Tag>

    </Space>
  </div>
}
export default App;