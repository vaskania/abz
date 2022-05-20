import { useState } from "react";
import axios from "axios";

const Form = () => {
     const [name, setName] = useState('')
     const [email, setEmail] = useState('')
     const [phone, setPhone] = useState(0)
     const [positionId, setPositionId] = useState(0)
     const [selectedFile, setSelectedFile] = useState(null);

     const onSubmitForm = async (e) => {
       e.preventDefault()

       const formData = new FormData();
       formData.append('file', selectedFile)
       formData.append('name', name)
       formData.append('email', email)
       formData.append('phone', phone.toString())
       formData.append('positionId', positionId.toString())

       try {
         await axios.post('http://localhost:4000/post', formData, {
           headers: { 'Content-Type': 'multipart/form-data' }
         })

         setName('')
         setEmail('')
         setPhone(0)
         setPositionId(0)
         setSelectedFile(null)
       } catch
          (err) {
         console.log(err);
       }

     }

     return (
        <div>
          <form onSubmit={onSubmitForm}>
            <div>
              <label htmlFor='name'>Name</label>
              <input
                 type='text'
                 id='name'
                 name='name'
                 required
                 placeholder='Enter your name'
                 value={name}
                 onChange={(e) => setName(e.target.value)}
              />
            </div>
            <br/>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                 type='email'
                 id='email'
                 name='email'
                 required
                 placeholder='Enter your email'
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br/>
            <div>
              <label htmlFor='phone'>Phone</label>
              <input
                 type='number'
                 id='phone'
                 name='phone'
                 required
                 placeholder='Enter your phone'
                 value={phone}
                 onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <br/>
            <div>
              <label htmlFor='positionId'>Position ID</label>
              <input
                 type='number'
                 id='positionId'
                 name='positionId'
                 required
                 placeholder='Enter your ID'
                 value={positionId}
                 onChange={(e) => {
                   setPositionId(e.target.value)
                 }}
              />
            </div>
            <br/>
            <div>
              <label htmlFor='file'>photo</label>
              <input
                 type='file'
                 id='file'
                 name='file'
                 required
                 onChange={(e) => setSelectedFile(e.target.files[0])}
              />
            </div>
            <br/>
            <div>
              <button type='submit'>Submit</button>
            </div>

          </form>
        </div>
     );
   }
;

export default Form;