import 'antd/dist/reset.css';
import { Steps } from 'antd';
import { useState } from 'react';

const { Step } = Steps

const App = () => {

   const [current, setCurrent] = useState(0)

   return <div>
      <Steps current={1}>
         <Step title="Finished"></Step>
         <Step title="In Progress"></Step>
         <Step title="Waiting"></Step>
      </Steps>

      <Steps current={1} labelPlacement='vertical'> 
         <Step title="Finished"></Step>
         <Step title="In Progress"></Step>
         <Step title="Waiting"></Step>
      </Steps>

      {/* CHANGING THE STEP ACCORDING TO CLICKING IT */}
      <Steps current={current} labelPlacement='vertical' onChange={(c)=>setCurrent(c)}> 
         <Step title="Finished"></Step>
         <Step title="In Progress"></Step>
         <Step title="Waiting"></Step>
      </Steps>

      <Steps progressDot={true}> 
         <Step title="Finished"></Step>
         <Step title="In Progress" subTitle="2 MIN"></Step> 
         <Step title="Waiting" description="It will initiate after step 2"></Step>
      </Steps>

      <Steps current={1} labelPlacement='vertical' percent={50}> 
         <Step title="Finished"></Step>
         <Step title="In Progress"></Step>
         <Step title="Waiting"></Step>  
      </Steps>

      <Steps current={1} direction='vertical' percent={50} status='error'> 
         <Step title="Finished"></Step>
         <Step title="In Progress"></Step>
         <Step title="Waiting"></Step>  
      </Steps>
   </div>
};

export default App;