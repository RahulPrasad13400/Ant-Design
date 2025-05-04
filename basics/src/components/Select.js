import 'antd/dist/reset.css';
import './App.css';
import { Select } from 'antd';

function App() {

  const fruits = ['apple', 'banana', 'orange', 'cherry']

  return <div>
    <p>Which is your favourite fruit</p>
    <Select mode='multiple' placeholder='select a fruit' allowClear maxTagCount={2} style={{width : '50%'}}>
      {fruits.map((fruit, index)=>{
        return <Select.Option key={index} value={fruit} >
          {fruit}
        </Select.Option>
      })}
    </Select>
  </div>
}

export default App;
