import React, { useRef } from 'react';
import { Button, Carousel } from 'antd';

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const App = () => {

   const ref = useRef()

  return (
   <>
    <Carousel>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
      <h3 style={{ ...contentStyle, background: 'red' }}>2</h3>      
      </div>
      <div style={{background : "red"}}>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>

    <Carousel autoplay dots={true} dotPosition='left' pauseOnHover={true} draggable ref={ref} effect='fade'>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
      <h3 style={{ ...contentStyle, background: 'red' }}>2</h3>      
      </div>
      <div style={{background : "red"}}>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
    <div>
      <Button onClick={()=>ref.current.prev()}>Prev</Button>
      <Button onClick={()=>ref.current.goTo(0)}>Reset</Button>
      <Button onClick={()=>ref.current.next()}>Next</Button>
    </div>
   </>
  );
};

export default App;