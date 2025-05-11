import { Button, Card, Flex, Image, Typography } from "antd";
import plantData from "../plantData";

const { Meta } = Card
export default function ProductsLists() {
  return (
    <div>
     <Flex align="center" justify="space-between">
      <Typography.Title level={3} strong className="primary--color">
       My Listing 
      </Typography.Title>
     <Button type="link" className="gray--color">View All</Button>
     </Flex> 


     <Flex align='start' gap='large'>
      {plantData.map((plant)=> {
        return <Card key={plant.id} hoverable className="plant-card">
            <Image src={plant.picture} style={{width : '130px', height : '150px'}} />
            <Meta title={plant.name} style={{marginTop : '1rem'}} />
        </Card>
      })}
     </Flex>
    </div> 
  )
}
