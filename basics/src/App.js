import 'antd/dist/reset.css';
import './App.css';
import { Table } from 'antd';
import { useEffect, useState } from 'react';

const columns = [
  {
    title : 'Student ID',
    dataIndex : "id"
  },
  {
    title : 'Student Name',
    dataIndex : "name"
  },
  {
    title : 'Student Grade',
    dataIndex : "grade"
  }
]

const dataSource = [
  {
    key : '1',
    id : 1,
    name : "Student Name 1",
    grader : 'A+'
  },
  {
    key : '2',
    id : 2,
    name : "Student Name 2",
    grader : 'B+'
  },
  {
    key : '3',
    id : 3,
    name : "Student Name 3",
    grader : 'C+'
  },
  {
    key : '4',
    id : 4,
    name : "Student Name 4",
    grader : 'D+'
  },
]

function App() {

  return <div>

    
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
