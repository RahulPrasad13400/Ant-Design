import { Button, Flex, Layout } from "antd";
import { useState} from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

import './App.css'
import SideBar from "./components/SideBar";
import CustomHeader from "./components/Header";
import MainContent from "./components/MainContent";
import SideContent from "./components/SideContent";

const { Sider, Header, Content } = Layout

export default function App() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout>

      <Sider theme="light" trigger={null} collapsible collapsed={collapsed} className="sider">  
        <SideBar />
      </Sider>
    
      <Button type="text" 
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} 
        onClick={()=>setCollapsed(collapsed => !collapsed)} className="trigger-btn" />

      <Layout>
        <Header className="header">
          <CustomHeader />
        </Header>
        <Content className="content">
          <Flex gap='large'>
            <MainContent />
            <SideContent />
          </Flex>
        </Content>
      </Layout>
      
    </Layout>
  )
}
