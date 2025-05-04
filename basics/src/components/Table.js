import 'antd/dist/reset.css';
import './App.css';
import { Table } from 'antd';

function App() {

  const data = [
    { 
      name : 'Name 1',
      age : 10,
      address : 'Address 1',
      key : '1'
    },
    { 
      name : 'Name 2',
      age : 15,
      address : 'Address 2',
      key : '2'
    },
    { 
      name : 'Name 3',
      age : 30,
      address : 'Address 3',
      key : '3'
    }
  ]

  const columns = [
    {
      title : "Name",
      dataIndex : 'name',
      key : 'key',
      render : name => {
        return <a>{name}</a>
      }
    },
    {
      title : "Age",
      dataIndex : 'age',
      key : 'key',
      sorter : (a,b) => a.age - b.age
    },
    {
      title : "Address",
      dataIndex : 'address',
      key : 'key'
    },
    {
      title : "Graduated",
      key : 'key',
      render : payload => {
        return <p>{payload.age > 20 ? 'True' : 'False'}</p>
      }
    }
  ]

  return <div>
    <Table dataSource={data} columns={columns}>

    </Table>
  </div>
}

export default App;
