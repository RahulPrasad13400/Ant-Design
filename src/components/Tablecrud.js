import 'antd/dist/reset.css';
import { Button, Table, Modal, Input } from 'antd';
import { useState } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const dataSource = [
  {
    id : 1,
    name : "John",
    email : "john@gmail.com",
    address : "john Address"
  },
  {
    id : 2,
    name : "David",
    email : "david@gmail.com",
    address : "david Address"
  },
  {
    id : 3,
    name : "James",
    email : "james@gmail.com",
    address : "james Address"
  },
  {
    id : 4,
    name : "Sam",
    email : "sam@gmail.com",
    address : "sam Address"
  }
]


function App() {

  const [isEditing, setIsEditing] = useState(false)
  const [editingStudent, setEditingStudent] = useState(null)

  const columns = [
    {
      key : '1',
      title : "ID",
      dataIndex : "id"
    },
    {
      key : '2',
      title : "Name",
      dataIndex : "name"
    },
    {
      key : '3',
      title : "Email",
      dataIndex : "email"
    },
    {
      key : '4',
      title : "Address",
      dataIndex : "address"
    },
    {
      key : '5',
      title : "Actions",
      render : (record) => {
        return <>
        <EditOutlined style={{cursor : "pointer"}} onClick={()=>editStudent(record)} />
        <DeleteOutlined style={{color : "red", marginLeft : "10px", cursor : "pointer"}}
          onClick={()=>onDeleteStudent(record)} />
        </>
      }
    }
  ]

  const [data, setData] = useState(dataSource)

  const onAddStudent = () => {
    const randomNumber = parseInt(Math.random()*1000)

    const newStudent = {
      id: randomNumber,
      key: randomNumber,
      name: "Name " + randomNumber,
      email: randomNumber + "@gmail.com",
      address: randomNumber + " Address"
    }
    

    setData((pre)=>{
      return [...pre, newStudent]
    })
  }


  const onDeleteStudent = (record) => {
    Modal.confirm({ // Modal is not working 
      title: "Are you sure you want to delete this student record?",
      okText : "Yes",
      okType : "danger",
      onOk() {
        setData(prev => prev.filter(data => data.id !== record.id));
      }
    })
  }

  const editStudent = (record) => {
    setIsEditing(true)
    setEditingStudent({...record})
  }

  const resetEditing = () => {
    setIsEditing(false)
    setEditingStudent(null)
  }

  return (
    <div style={{margin : "50px"}}>
      <Button type='primary' onClick={onAddStudent}>Add a new Student</Button>
      <Table columns={columns} dataSource={data}>
      </Table>
      <Modal title="Edit Student" okText="save" open={isEditing} onCancel={()=>{
          resetEditing()
        }} onOk={()=>{
          setData((prev)=>{
            return prev.map((student)=>{
              if(editingStudent.id === student.id){
                return editingStudent
              }
              return student
            })
          })
          resetEditing()
        }} >

        <Input value={editingStudent?.name} onChange={(e)=>setEditingStudent(prev=>{
          return {...prev, name : e.target.value }
        })}  />
        <Input value={editingStudent?.email} onChange={(e)=>setEditingStudent(prev=>{
          return {...prev, email : e.target.value }
        })}  />
        <Input value={editingStudent?.address} onChange={(e)=>setEditingStudent(prev=>{
          return {...prev, address : e.target.value }
        })}  />

      </Modal>
    </div>
  );
}

export default App;
