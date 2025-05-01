import 'antd/dist/reset.css';
import './App.css';
import { Table } from 'antd';
import { useEffect, useState } from 'react';

// {
//   "userId": 8,
//   "id": 146, 
//   "title": "molestiae suscipit ratione nihil odio libero impedit vero totam",
//   "completed": true
// }

const columns = [
  {
    key : "1",
    title : "ID", // for giving heading of that column
    dataIndex : "id"  // field name as per the data given 
  },
  {
    key : "2",
    title : "User ID",
    dataIndex : "userId",
    sorter : (record1, record2) => {
      return record1.userId - record2.userId
    }
  },
  {
    key : "3",
    title : 'Status',
    dataIndex : 'completed',
    render : (completed) => {
      return <p>{completed ? 'completed' : 'In progress'}</p>
    }, 
    filters : [
      { text : "completed",value : true },
      { text : "In progress", value : false}
    ], 
    onFilter : (value, record) => {
      return record.completed === value
    }
  }
]

function App() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)

  useEffect(function(){
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json())
    .then((data)=>setData(data)).catch((error)=>console.log(error))
    .finally(()=>{
      setLoading(false)
    })
  },[])

  return <div>

    {/* TRY THIS OUT */}
    {/* <Table 
      columns={columns} dataSource={data} loading={loading} 
      pagination={true} > 

    </Table> */}


    {/* <Table 
      columns={columns} dataSource={data} loading={loading} 
      pagination={{current : 3, pageSize : 5}} > 

    </Table> */}

    
    <Table 
      columns={columns} dataSource={data} loading={loading} 
      pagination={{current : page, pageSize : pageSize, onChange : (page, pageSize)=>{
        setPage(page)
        setPageSize(pageSize)
      }}} > 

    </Table>

  </div>
}
 
export default App;
