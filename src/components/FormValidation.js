import { Button, Checkbox, DatePicker, Form, Input, Select } from 'antd';
import 'antd/dist/reset.css';


export default function App() {
  return <div>
    <Form labelCol={{span : 10}} wrapperCol={{span : 4}} autoComplete='off' 
      onFinish={(values)=>console.log(values)}  // it gives the value after finish
      onFinishFailed={(error)=> console.log(error) }  // if finish fails it gets executed
    >

      <Form.Item name='fullName' label='Full Name' rules={[
        {
          required : true,
          message : "please enter your name"
        },
        {
          whitespace : true // to make sure that it dosen't accept white space
        },
        {
          min : 3,
          message : "Full Name must be atleast 3 characters long"
        }
      ]}> 
        <Input placeholder='Enter your name' />
      </Form.Item>


      <Form.Item name='email' label='Email' rules={[
        {
          required : true,
          message : "Email is required"
        },
        {
          type : "email",
          message : "Enter a valid email"
        }
      ]}> 
        <Input placeholder='Enter your email' />
      </Form.Item>


      <Form.Item name='password' label='Password' rules={[
        {
          required : true,
          message : "A password is required"
        },
        {
          validator : (_, value) =>{
            return value && value.includes('A') ? Promise.resolve() : Promise.reject('password do not match the criteria')
          }
        }
      ]}> 
        <Input.Password placeholder='Enter your password' />
      </Form.Item>


      <Form.Item name='confirmPassword' label='Confirm Password' rules={[
        {
          required : true,
          message : "Must confirm the password"
        },
        ({getFieldValue}) => ({
          validator(_, value){
            if(!value || getFieldValue('password') === value){
              return Promise.resolve()
            }
            return Promise.reject("Passwords dosent match")
          }
        })
      ]}   dependencies={["password"]} // rule vech password incorrect anenn kanikkan pattum, but on changing the password again confirm password dosen't show any messages aa situation handle chayyan vendi
      > 
        <Input.Password placeholder='Confirm your password' />
      </Form.Item>


      <Form.Item name='gender' label='Gender' requiredMark="optional"> 
        <Select placeholder='Select your gender'>
          <Select.Option value={'male'}>Male</Select.Option>
          <Select.Option value={'female'}>Female</Select.Option>
        </Select>
      </Form.Item> 
      
      <Form.Item
      name="dob"
      label="Date of Birth"
      hasFeedback // green tick varan vendi, input enter cheyuth kazhiyumbo 
      rules={[
        {
          required: true,
          message: 'Please select your date of birth',
        },
      ]}
      >
       <DatePicker style={{ width: '100%' }} />
      </Form.Item>
      
      <Form.Item name='website' label='Website' rules={[
        {
          required : true,
          message : 'please enter the website url'
        },
        {
          type : "url",
          message : "please enter valid url"
        }
      ]}> 
        <Input picker='date' placeholder='Add your website url' />
      </Form.Item>

      <Form.Item wrapperCol={{span : 12}} name='agreement' rules={[
        {
          validator : (_, value)=>{
            return value ? Promise.resolve() : Promise.reject("you need to agree to proceed")
          }
        }
      ]} 
        valuePropName='checked'
      > 
        <Checkbox>
          Agree to our <a href='#'>Terms and Conditions</a>
        </Checkbox>
      </Form.Item>

      <Form.Item> 
        <Button block type='primary' htmlType="submit">Register</Button>
      </Form.Item>

    </Form>
  </div> 
}
