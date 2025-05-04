import 'antd/dist/reset.css';
import { Input, Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

export default function App() {
  return (
    <div style={{width : "100%"}}>

      <Menu style={{width : "50%"}} items={[
        { label : <Input.Search placeholder='Search here...' />, key : "search"}, 
        { label : "Home", key : "home", icon : <HomeOutlined /> }, 
        { label : "Dashboard", key : "dashboard", children : [  // dashboard inte sub division ayitt varan vendi
          { label : "Revenue" , key : "rev"},
          { label : "Expenses", key : "exp" }
        ]},
        { label : "User Managment", key : "um", type : "group", children : [
          { label : <span style={{color : "red"}}>Edit profile</span>, key : "edit"},
          { label : "Switch Account", key : "swithAccount"}
        ]},
        { label : "Signout", key : "signout"}
      ]}>
      </Menu>

      <Menu mode='inline' onClick={(info)=>{
        console.log(info.key) // we get the key 
      }} style={{width : "50%", marginTop : "50px"}} items={[
        { label : "Home", key : "home" },
        { label : "Dashboard", key : "dashboard", children : [  // dashboard inte sub division ayitt varan vendi
          { label : "Revenue" , key : "rev"},
          { label : "Expenses", key : "exp" }
        ]},
        { label : "User Managment", key : "um"},
        { label : "Signout", key : "signout", danger : true} // danger gives a red color to the text and a light red background on clicking it
      ]}>
      </Menu>
    </div>
  )
}

