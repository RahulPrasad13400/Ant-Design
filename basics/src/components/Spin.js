import 'antd/dist/reset.css';
import './App.css';
import { Spin } from 'antd';

function App() {
  return <div>
    <Spin></Spin>
    <Spin spinning={true} /> 

    <Spin spinning={true}>
      <p>p tag 1</p>
      <p>p tag 2</p>  
      <p>p tag 3</p>
    </Spin>

  </div>
}

export default App;
