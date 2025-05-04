import 'antd/dist/reset.css';
import './App.css';
import { Progress } from 'antd';

function App() {
  return <div>
    <Progress percent={33} />
    <Progress percent={66} type='circle' />
    <Progress percent={66} type='circle' strokeColor={'red'} />
    <Progress percent={66} strokeColor={'red'} strokeWidth={45} />
    <Progress percent={66} type='circle' status='success' />
    <Progress percent={66} steps={3} />
  </div>
}

export default App;
