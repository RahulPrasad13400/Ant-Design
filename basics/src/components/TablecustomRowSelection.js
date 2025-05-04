import 'antd/dist/reset.css';
import './App.css';
import { Table, Tag } from 'antd';
import { useState } from 'react';

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
    dataIndex : "grade",
    render : (tag) => {
      const color = tag.includes('A') ? 'Green' : tag.includes('B') ? 'blue' : 'red'
      return <Tag color={color}>
        {tag}
      </Tag>
    }
  }
]

const dataSource = [
  {
    key : '1',
    id : 1,
    name : "Student Name 1",
    grade : 'A+'
  },
  {
    key : '2',
    id : 2,
    name : "Student Name 2",
    grade : 'B+'
  },
  {
    key : '3',
    id : 3,
    name : "Student Name 3",
    grade : 'C+'
  },
  {
    key : '4',
    id : 4,
    name : "Student Name 4",
    grade : 'A+'
  },
]

function App() {

  const [autoSelected, setAutoSelected] = useState(['3'])

  return <div>

    {/* BASIC ROW SELECTION */}
    {/* <Table dataSource={dataSource} columns={columns}
      rowSelection={true}> 

    </Table> */}


    {/* DIFFERENT METHODS IN ROW SELECTION */}
    <Table dataSource={dataSource} columns={columns}
      rowSelection={{
        type : 'checkbox', // to change the style of it (checkbox, radio)
        selectedRowKeys : autoSelected, // inital state ile orennam select cheyuth vekan (check the useState hook)
        onChange : (key) => { // on clicking a check box ath select avan
          setAutoSelected(key) 
        },
        onSelect : (record) =>{
          console.log(record)
        },
        getCheckboxProps : (record) => ({ // check box disable cheyuth vekan 
          // disabled : record.grade === 'C+'
        }),
        // hideSelectAll : true,  // to hide the select all check box  
        selections : [
          Table.SELECTION_NONE,
          Table.SELECTION_ALL,
          Table.SELECTION_INVERT,
          { // TO SELECT EVEN ROWS
            key : 'even',
            text : 'Select Even Rows',
            onSelect : (allKeys) => {
              const selectedKeys = allKeys.filter((key)=>{
                return key % 2 === 0
              })
              setAutoSelected(selectedKeys)
            }
          },
          { // TO SELECT STUDENTS WITH A+
            key : 'excellent',
            text : 'Select students with Excellent Grade',
            onSelect : (allKeys) =>{
              const selectedKeys = allKeys.filter(key=>{
                const isExcellent = dataSource.find((student)=>{
                  return student.key === key && student.grade.includes('A+') // it take each student and chek whether there grade is A+ or not 
                })
                return isExcellent
              })
              setAutoSelected(selectedKeys)
            }
          }
        ]
      }}> 

    </Table>

  </div>
}
 
export default App;
