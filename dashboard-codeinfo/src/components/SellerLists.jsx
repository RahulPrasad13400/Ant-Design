import { Button, Flex, Typography } from "antd";

export default function SellerLists() {
  return (
    <Flex align="center" justify='space-between' gap='large'>
     <Flex vertical gap='small' className="top-seller"> 
      <Flex align="center" justify='space-between'>
       <Typography.Title level={5} strong className="primary--color">Top Seller</Typography.Title>
       <Button type='link' className="gray--color">View All</Button>
      </Flex>
     </Flex>

    <Flex vertical='row' gap='small' className="featured-seller"> 
     <Flex align="center" justify='space-between'>
       <Typography.Title level={5} strong className="primary--color">Featured Seller</Typography.Title>
       <Button type='link' className="gray--color">View All</Button>
      </Flex>
    </Flex>
    </Flex>
  )
}
