import 'antd/dist/reset.css';
import { Typography } from 'antd'; 
import { useState } from 'react';
import { CheckOutlined, SmileOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph, Link } = Typography

export default function App() {

  const [text, setText] = useState("hii friends")

  return <div>
    <Title>Title</Title>
    <Title level={2}>Title</Title>
    <Title level={3}>Title</Title>

    <Text>Text</Text>
    <Text strong>Text</Text>
    <Text underline>Text</Text>
    <Text mark>Text</Text>
    <Text disabled>Text</Text>
    <Text type='success'>Text</Text>

    <Link>link</Link>
    <Link underline>link</Link>
    <Link underline href='https://www.google.com'>google</Link>

    <Paragraph>Paragraph</Paragraph>
    <Paragraph strong>Paragraph</Paragraph>
    <Paragraph editable={{onChange : (value) => setText(value)}} >{text}</Paragraph>
    <Paragraph editable={{onChange : (value) => setText(value), triggerType : "icon|text", tooltip : 'click to edit', icon : <SmileOutlined />, enterIcon : <CheckOutlined />}} >{text}</Paragraph>
  
    <Paragraph copyable>Hello</Paragraph>
    <Paragraph copyable={{tooltips : ["click to copy", "Done"]}}>Hello</Paragraph>
    <Paragraph copyable={{text : "hello ne pakaram, ee text copy avum", tooltips : ["click to copy", "Done"]}}>Hello</Paragraph>

    <Paragraph
      style={{ width: '20%' }}
      ellipsis={{ rows: 4, expandable: true }}
    >
      The wind whispered through the trees, carrying the scent of rain and old memories. 
      Beneath the canopy, a fox darted silently across the mossy ground, its eyes glinting like amber in the fading light. 
      Somewhere in the distance, a bell chimed—soft, hollow, and out of place. 
      It was the kind of sound that made you stop and wonder if you'd imagined it.
    </Paragraph>
    <Paragraph
      style={{ width: '20%' }}
      ellipsis={{ rows: 4, expandable: true, symbol : "show more" }}
    >
      The wind whispered through the trees, carrying the scent of rain and old memories. 
      Beneath the canopy, a fox darted silently across the mossy ground, its eyes glinting like amber in the fading light. 
      Somewhere in the distance, a bell chimed—soft, hollow, and out of place. 
      It was the kind of sound that made you stop and wonder if you'd imagined it.
    </Paragraph>
  </div>
}
