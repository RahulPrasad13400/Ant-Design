import 'antd/dist/reset.css';
import './App.css';
import { DatePicker, TimePicker } from 'antd';

function App() {

  return <div>
    <DatePicker />
    <DatePicker picker='month' />
    <DatePicker picker='year' />
    <DatePicker.RangePicker />
    <TimePicker />
  </div>
}

export default App;
