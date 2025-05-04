import 'antd/dist/reset.css';
import { Space, Tabs } from 'antd'
import { HomeOutlined } from '@ant-design/icons';
import { useRef, useState } from 'react';

export default function App() {
  const nextTabIndex = useRef(3)

  const [tabsList, setTabsList] = useState([
    { tab : "Tab 1", key : "tab1" },
    { tab : "Tab 2", key : "tab2" },
    { tab : "Tab 3", key : "tab3" },
    { tab : "Tab 4", key : "tab4" }
  ])

  const onEdit = (tabKey, action) => {
    console.log(action)
    if(action === 'add'){
      setTabsList(prev=>[...prev, {tab : `Tab ${nextTabIndex.current}`, key : `tab${nextTabIndex.current}`}])
      nextTabIndex.current++
    }else if(action === 'remove'){
      setTabsList((prev)=>[...prev.filter((tab)=>tab.key !== tabKey)])
    }

  }

  return (
    <Space size={10} direction='vertical'> 

      {/* TABS ON TOP */}
      <Tabs>
        <Tabs.TabPane tab={"Tab 1"} key={"tab1"}>
          <div>This is a content of Tab1</div>
        </Tabs.TabPane>
        <Tabs.TabPane tab={ <span><HomeOutlined /> Tab 2</span>} key={"tab2"}>
          <div>This is a content of Tab2</div>
        </Tabs.TabPane>
        <Tabs.TabPane tab={"Tab 3"} key={"tab3"}>
          <div>This is a content of Tab3</div>
        </Tabs.TabPane>
      </Tabs>

      {/* 2nd TAB AS A DEFAULT SELECTION */}
      <Tabs defaultActiveKey='tab2'>
        <Tabs.TabPane tab={"Tab 1"} key={"tab1"}>
          <div>This is a content of Tab1</div>
        </Tabs.TabPane>
        <Tabs.TabPane tab={"Tab 2"} key={"tab2"}>
          <div>This is a content of Tab2</div>
        </Tabs.TabPane>
        <Tabs.TabPane tab={"Tab 3"} key={"tab3"}>
          <div>This is a content of Tab3</div>
        </Tabs.TabPane>
      </Tabs>

      {/* TAB POSITION ON THE LEFT SIDE */}
      <Tabs defaultActiveKey='tab2' tabPosition='left'>
        <Tabs.TabPane tab={"Tab 1"} key={"tab1"}>
          <div>This is a content of Tab1</div>
        </Tabs.TabPane>
        <Tabs.TabPane tab={"Tab 2"} key={"tab2"}>
          <div>This is a content of Tab2</div>
        </Tabs.TabPane>
        <Tabs.TabPane tab={"Tab 3"} key={"tab3"}>
          <div>This is a content of Tab3</div>
        </Tabs.TabPane>
      </Tabs>

      <Tabs>
        {tabsList.map((tabInfo, index)=>{
          return  <Tabs.TabPane tab={tabInfo.tab} key={tabInfo.key}>
          <div>This is a content of {tabInfo.tab}</div>
        </Tabs.TabPane>
        })}
      </Tabs>

      {/* EDITABLE CARD */}
      <Tabs type='editable-card' onEdit={onEdit}>
        {tabsList.map((tabInfo, index)=>{
          return  <Tabs.TabPane tab={tabInfo.tab} key={tabInfo.key} closable={index > 1}>
          <div>This is a content of {tabInfo.tab}</div>
        </Tabs.TabPane>
        })}
      </Tabs>

    </Space>
  )
}

