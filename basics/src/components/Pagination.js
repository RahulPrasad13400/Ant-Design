import { Pagination } from 'antd';
import 'antd/dist/reset.css';
import { useState } from 'react';

export default function App() {

  const [currentPage, setCurrentPage] = useState(0)

  return <div>
    <Pagination total={20} pageSize={5} />
    <Pagination total={200} defaultCurrent={2} />
    <Pagination total={200} pageSize={5} showSizeChanger={false} />
    <Pagination total={200} showSizeChanger pageSizeOptions={[1,2,10,30]}/>
    <Pagination total={200} showSizeChanger showQuickJumper/>

    <Pagination total={200} showSizeChanger showQuickJumper onShowSizeChange={(current, size)=>{
      console.log(current, size) 
    }}/>

    <Pagination total={20} pageSize={5} simple />

    <Pagination total={200} current={currentPage} onChange={(page, pageSize)=>{
      setCurrentPage(page)
    }} />

    <Pagination total={200} itemRender={(page, type)=>{
      if(type === 'next'){
        return <a>Next</a>
      }
      if(type === 'prev'){
        return <a>Prev</a>
      }
      if(type === 'page'){
        return <a>page#{page}</a>
      }
    }} onChange={(page, pageSize)=>{
      console.log("page : ", page)
      console.log("pageSize : ", pageSize)
    }} />
  </div>
}
