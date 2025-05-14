import { Avatar, Button, Card, Divider, Flex, Tooltip, Typography } from "antd";

export default function SellerLists() {
  return (
    <Flex align="center" justify='space-between' gap='large'>
     <Flex vertical gap='small' className="top-seller"> 
      <Flex align="center" justify='space-between'>
       <Typography.Title level={5} strong className="primary--color">Top Seller</Typography.Title>
       <Button type='link' className="gray--color">View All</Button>
      </Flex>
      <Card>
        <Flex align='center' justify='space-evenly'>
          <Avatar.Group maxCount={5} maxPopoverTrigger="click" size='large' maxStyle={{color : '#f56a00', backgroundColor : '#fde3cf', cursor : 'progress'}}>
            <Tooltip title='User 1' placement='top'>
              <Avatar src='https://www.shutterstock.com/image-vector/cool-monkey-glasses-headphones-vector-600nw-1977789203.jpg' />
            </Tooltip>
            <Tooltip title='User 2' placement='top'>
              <Avatar src='https://i.pinimg.com/736x/1e/92/e3/1e92e3e15043dbc3b53b50760cf7ece7.jpg' />
            </Tooltip>
            <Tooltip title='User 3' placement='top'>
              <Avatar src='https://m.media-amazon.com/images/S/pv-target-images/85f996deb6e03425868a24a26eacccc0aa96e9c6dfe835a2e54d35776e046949._SX1080_FMjpg_.jpg' />
            </Tooltip>
            <Tooltip title='User 4' placement='top'>
              <Avatar src='https://cdn.mos.cms.futurecdn.net/ZBkG9SvZsWnzPjMkwxduKF.png' />
            </Tooltip>
            <Tooltip title='User 5' placement='top'>
              <Avatar src='https://ew.com/thmb/VBlAu_EJo_PAl12pcNoOO9HypyI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/helen-sloan-hbo-6-1-2000-166a336cf37e46f09f9227cc75bedd5d.jpg' />
            </Tooltip>
            <Tooltip title='User 6' placement='top'>
              <Avatar src='https://hips.hearstapps.com/vidthumb/images/cillian-murphy-oppenheimer-trailer-1671438198.jpg?crop=0.799xw:1.00xh;0.101xw,0&resize=1200:*' />
            </Tooltip>
            <Tooltip title='User 7' placement='top'>
              <Avatar src='https://i.pinimg.com/736x/1e/92/e3/1e92e3e15043dbc3b53b50760cf7ece7.jpg' />
            </Tooltip>
          </Avatar.Group>  

          <Divider type='vertical' className='divider' />

          <Flex vertical='row'>
           <Typography.Text type='secondary' strong>
            2,000 plants sold
           </Typography.Text>
           <Typography.Text type='secondary' strong>
            7 seller
           </Typography.Text>
          </Flex>
        </Flex>
      </Card>
     </Flex>

     <Flex vertical gap='small' className="top-seller"> 
      <Flex align="center" justify='space-between'>
       <Typography.Title level={5} strong className="primary--color">Featured Seller</Typography.Title>
       <Button type='link' className="gray--color">View All</Button>
      </Flex>
      <Card>
        <Flex align='center' justify='space-evenly'>
          <Avatar.Group maxCount={5} maxPopoverTrigger="click" size='large' maxStyle={{color : '#f56a00', backgroundColor : '#fde3cf', cursor : 'progress'}}>
            <Tooltip title='User 1' placement='top'>
              <Avatar src='https://www.shutterstock.com/image-vector/cool-monkey-glasses-headphones-vector-600nw-1977789203.jpg' />
            </Tooltip>
            <Tooltip title='User 2' placement='top'>
              <Avatar src='https://i.pinimg.com/736x/1e/92/e3/1e92e3e15043dbc3b53b50760cf7ece7.jpg' />
            </Tooltip>
            <Tooltip title='User 3' placement='top'>
              <Avatar src='https://m.media-amazon.com/images/S/pv-target-images/85f996deb6e03425868a24a26eacccc0aa96e9c6dfe835a2e54d35776e046949._SX1080_FMjpg_.jpg' />
            </Tooltip>
            <Tooltip title='User 4' placement='top'>
              <Avatar src='https://cdn.mos.cms.futurecdn.net/ZBkG9SvZsWnzPjMkwxduKF.png' />
            </Tooltip>
            <Tooltip title='User 5' placement='top'>
              <Avatar src='https://ew.com/thmb/VBlAu_EJo_PAl12pcNoOO9HypyI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/helen-sloan-hbo-6-1-2000-166a336cf37e46f09f9227cc75bedd5d.jpg' />
            </Tooltip>
            <Tooltip title='User 6' placement='top'>
              <Avatar src='https://hips.hearstapps.com/vidthumb/images/cillian-murphy-oppenheimer-trailer-1671438198.jpg?crop=0.799xw:1.00xh;0.101xw,0&resize=1200:*' />
            </Tooltip>
            <Tooltip title='User 7' placement='top'>
              <Avatar src='https://i.pinimg.com/736x/1e/92/e3/1e92e3e15043dbc3b53b50760cf7ece7.jpg' />
            </Tooltip>
          </Avatar.Group>  

          <Divider type='vertical' className='divider' />

          <Flex vertical='row'>
           <Typography.Text type='secondary' strong>
            2,000 plants sold
           </Typography.Text>
           <Typography.Text type='secondary' strong>
            7 seller
           </Typography.Text>
          </Flex>
        </Flex>
      </Card>
     </Flex>
    </Flex>
  )
}
