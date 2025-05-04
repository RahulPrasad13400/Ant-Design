import 'antd/dist/reset.css';
import { Button, Spin, Upload } from 'antd';

function App() {
  return <div>

    <Upload>
      <Button>upload</Button>
    </Upload>

    {/* DRAG AND DROP */}
    <Upload.Dragger>
      <Button>DRAG AND DROP</Button>
    </Upload.Dragger>

    {/* TO ACCEPT MULTIPLE FILE */}
    <Upload.Dragger multiple>
      upload multiple file
    </Upload.Dragger>

    <Upload.Dragger multiple listType='picture'>
      upload multiple file
    </Upload.Dragger>

    <Upload.Dragger multiple listType='picture' showUploadList={{showRemoveIcon : false}}>
      upload multiple file
    </Upload.Dragger>

    {/* TO ACCEPT ONLY PARTICULAR FILES */}
    <Upload.Dragger accept='.png'>
      upload multiple file
    </Upload.Dragger>

    <Upload.Dragger accept='.png,.doc,.jpeg'>
      upload multiple file
    </Upload.Dragger>

    <Upload.Dragger beforeUpload={(file)=>{
      console.log(file) // THIS FN IS USED TO CHECK THE SPECIFIC REQUIRMENTS THAT THE FILE NEED TO PASS BEFORE IT GETS UPLOADED
      return false  // THIS FILE WONT GET UPLOADED BECAUSE WE RETURN FALSE 
    }}>
      upload multiple file
    </Upload.Dragger>

    <Upload.Dragger defaultFileList={[
      {
        uid : "abc",
        name : "existing_file.png",
        url : "https://www.google.com",
        status : 'uploading',
        percent : 25
      }
    ]}>
      upload multiple file
    </Upload.Dragger>

    <Upload.Dragger defaultFileList={[
            {
              uid : "abc",
              name : "existing_file.png",
              url : "https://www.google.com",
              status : 'uploading',
              percent : 25
            }
    ]} progress={{strokeWidth : 3, strokeColor : {
      "0%":"#f0f",
      "100%":"#ff0"
    }}}>
      progress bar
    </Upload.Dragger>

    <Upload.Dragger defaultFileList={[
      {
        uid : "abc",
        name : "existing_file.png",
        url : "https://www.google.com",
        status : 'uploading',
        percent : 25
      }
      ]} iconRender={()=>{
        return <Spin></Spin>
      }}>
        upload multiple file
    </Upload.Dragger>

    <Upload.Dragger defaultFileList={[
      {
        uid : "abc",
        name : "existing_file.png",
        url : "https://www.google.com",
        status : 'uploading',
        percent : 25
      }
      ]} iconRender={()=>{
        return <Spin></Spin>
      }} itemRender={(existingComponent, file)=>{
        return <>
          <p>image</p>
          <p>{file.name}</p>
        </>
      }}>
        upload multiple file
    </Upload.Dragger>

  </div>
}
export default App;