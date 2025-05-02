import { Button, Input, Table } from 'antd';
import 'antd/dist/reset.css';
import { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';

export default function App() {

  const [dataSource, setDataSource] = useState([
    {
      name : "john",
      age : 32,
      address : 'New York'
    },
    {
      name : "abc",
      age : 30,
      address : 'london'
    },
    {
      name : "jamier",
      age : 22,
      address : 'denmark'
    },
    {
      name : "brittas",
      age : 35,
      address : 'england'
    },
  ])

  const columns = [
    {
      title : 'Name',
      dataIndex : 'name',
      filterDropdown : ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => { // filter drop down tharunna 3 props ane ith 
        return <>
          <Input autoFocus placeholder='Type text here' value={selectedKeys[0]}
            onChange={(e)=> {
              setSelectedKeys(e.target.value ? [e.target.value] : [])
              confirm({closeDropDown : false})
            }}
            onPressEnter={()=> confirm()}
            onBlur={() => confirm() } />
          <Button onClick={()=>confirm()} type='primary'>Search</Button>
          <Button onClick={()=>clearFilters()} type='default'>Reset</Button>
        </> 
      },
      filterIcon : () => {  // filter dropdown inte icon customize cheyyan vendi 
        return <SearchOutlined />
      }, 
      onFilter : (value, record) => { // onConfirm call this function 
        return record.name.toLowerCase().includes(value.toLowerCase())
      }
    },
    {
      title : 'Age',
      dataIndex : 'age',
      filterDropdown : ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => {
        return <>
          <Input placeholder='Enter the age' value={selectedKeys[0]}
            onChange={(e)=>{
              setSelectedKeys(e.target.value ? [e.target.value] : [])
              confirm({closeDropDown : false})  
            } } />
          <Button onClick={()=>confirm()} type='primary'>Search</Button>
          <Button onClick={()=>clearFilters()} type='dashed'>Reset</Button>
        </>
      },
      filterIcon : () => {
        return <SearchOutlined />
      },
      onFilter : (value, record) => {
        return String(record.age).includes(String(value))
      }
    },
    {
      title : 'Address',
      dataIndex : 'address',
    },
  ]

  return (
    <div>
      <Table dataSource={dataSource} columns={columns}> 

      </Table>
    </div>

  )
}
