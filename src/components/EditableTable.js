import { Button, Form, Input, Table } from 'antd';
import 'antd/dist/reset.css';
import { useEffect, useState } from 'react';

export default function App() {

  const [dataSource, setDataSource] = useState([]);
  const [editingRow, setEditingRow] = useState(null)
  const [form] = Form.useForm();

  useEffect(function(){
    const data = [];
    for (let index = 0; index < 7; index++) {
      data.push({
        key: `${index}`,
        name: `Name ${index}`,
        address: `Address ${index}`,
      });
    }
    setDataSource(data);
  },[])

  const columns = [
    {
      title : "Name",
      dataIndex : "name",
      render : (text, record) => {
        if(editingRow === record.key){
          return <Form.Item name="name" rules={[
            {
              required : true, 
              message : "please enter the name"
            }
          ]}>
            <Input />
          </Form.Item>
        }else{
          return <p>{text}</p>
        }
      }
    },
    {
      title : "Address",
      dataIndex : "address",
      render : (text, record) => {
        if(editingRow === record.key){
          return <Form.Item name="address" rules={[
            {
              required : true,
              message : "please enter the address"
            }
          ]}>
            <Input />
          </Form.Item>
        }else{
          return <p>{text}</p>
        }
      }
    },
    {
      title : "Actions",
      render : (_, record) => {
        return <>
          <Button type='link' onClick={()=>{
            setEditingRow(record.key)
            form.setFieldsValue({
              name : record.name,
              address : record.address
            })
            }}>Edit</Button>
          <Button type='link' htmlType='submit' >Save</Button>
        </>
      }
    }
  ]

  const onFinish = (values) =>{
    const updatedDataSource = [...dataSource]
    updatedDataSource.splice(editingRow, 1, {...values, key : editingRow})
    setDataSource(updatedDataSource)
    setEditingRow(null)
  }

  return (
    <div>
      <Form form={form} onFinish={onFinish}>
        <Table columns={columns} dataSource={dataSource}>

        </Table>
      </Form>
    </div>
  )
}
