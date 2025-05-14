import { Avatar, Button, Flex, List, Typography } from "antd"

// RIGHT SIDE ILE RECENT ACTIVITY 

const data = [
  { name: "Old Monk", orderTime: 4, image : 'https://www.shutterstock.com/image-vector/cool-monkey-glasses-headphones-vector-600nw-1977789203.jpg' },
  { name: "Tyler Durden", orderTime: 12, image : 'https://i.pinimg.com/736x/1e/92/e3/1e92e3e15043dbc3b53b50760cf7ece7.jpg' },
  { name: "Jordan Belfort", orderTime: 25, image : 'https://m.media-amazon.com/images/S/pv-target-images/85f996deb6e03425868a24a26eacccc0aa96e9c6dfe835a2e54d35776e046949._SX1080_FMjpg_.jpg' },
  { name: "Tyrion Lannister", orderTime: 8, image : 'https://cdn.mos.cms.futurecdn.net/ZBkG9SvZsWnzPjMkwxduKF.png' },
  { name: "Daenerys Targaryen", orderTime: 19, image : 'https://ew.com/thmb/VBlAu_EJo_PAl12pcNoOO9HypyI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/helen-sloan-hbo-6-1-2000-166a336cf37e46f09f9227cc75bedd5d.jpg' }
];

const  Activity = ()  => {
  return (
    <Flex vertical gap='small'>
      <Flex align='center' justify='space-between' gap='large'>
        <Typography.Title level={3} strong className="primary--color">
          Recent Activity 
        </Typography.Title>
        <Button type='link' className='gray--color'>
          View All
        </Button>
      </Flex>  
      <List pagination dataSource={data} renderItem={(user, index)=>{
        return <List.Item key={index}>
          <List.Item.Meta
            avatar={<Avatar src={user.image} />}
            title={<a href="#">{user.name}</a>}
            description='Ordered a new plant'
          >   
          </List.Item.Meta>
          <span className="gray--color"> 
            {user.orderTime} {user.orderTime == 1 ? 'day ago' : 'days ago'}
          </span>
        </List.Item>
      }} />
    </Flex>
  )
}

export default Activity
