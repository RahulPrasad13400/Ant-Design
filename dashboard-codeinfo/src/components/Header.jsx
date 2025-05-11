import { Avatar, Flex, Typography } from "antd";
import Search from "antd/es/input/Search";
import { MessageOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons'

export default function CustomHeader() {
  return (  
    <Flex align="center" justify="space-between">
        <Typography.Title level={3} type='secondary'>
            Welcome back, Tyler Durden
        </Typography.Title>

        <Flex align="center" gap="3rem">
            <Search placeholder="search dashboard" allowClear />
            <Flex gap="1rem">
                <MessageOutlined className="header-icon" />
                <NotificationOutlined  className="header-icon" />
                <Avatar icon={<UserOutlined />} />
            </Flex>
        </Flex>
    </Flex>
  )
}
