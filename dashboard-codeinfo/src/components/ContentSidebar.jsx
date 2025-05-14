import { Card, Flex, Image, Typography } from "antd";
import plant01 from '../assets/—Pngtree—hand drawn noise illustration green_4058539.png'

export default function ContentSidebar() {
  return (
    <div>
     <Card className="card">
      <Flex vertical gap='large'>
       <Typography.Title level={4} strong>
        Today <br /> 5 orders
       </Typography.Title>

       <Typography.Title level={4} strong>
        This Month <br /> 240 orders
       </Typography.Title>
      </Flex>
      <Image src={plant01} alt="plant" style={{position : 'absolute', bottom : -50, left : 12, height : "300px", width : 'auto'}} />
     </Card>
    </div>
  )
}
