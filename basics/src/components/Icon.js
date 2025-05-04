import 'antd/dist/reset.css';
import './App.css';
import Icon, { BulbTwoTone, LoadingOutlined, PieChartFilled, PlayCircleOutlined } from '@ant-design/icons';

function App() {

  // CREATING OUT OWN ICON 
  const HeartIcon = (props) => {
    return <Icon component={()=>{
      return <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="red"
      width="48px"
      height="48px"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 
      5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 
      3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 
      8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
    }} 
      {...props} />
  }


  return (
    <div style={{ display: "flex", width: "100%", height: "100vh", textAlign: "center", justifyContent: "center", alignItems: "center", gap: "20px" }}>
      <PlayCircleOutlined />
      <PieChartFilled style={{ color: 'purple', fontSize: 100 }} />
      <PieChartFilled rotate={45} style={{ color: 'orange', fontSize: 100 }} />
      <LoadingOutlined style={{ fontSize: "50px" }} spin />
      <BulbTwoTone twoToneColor={'green'} style={{ fontSize: "50px" }} />

      <HeartIcon />
      
    </div>
  );
}

export default App;
