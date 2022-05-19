import { useState } from "react";
import axios from "axios";

const Form = () => {

     const [form, setForm] = useState({
       name: '',
       email: '',
       phone: '',
       id: 0,
     })
     const [selectedFile, setSelectedFile] = useState(null);

     const onSubmitForm = async (e) => {
       e.preventDefault()
       const url = 'http://localhost:3000/profile';
       await axios(url, {
         method: "POST",
         headers: {
           'content-type': 'application/json'
         },
         body: form
       })

       const formData = new FormData();
       formData.append('file', selectedFile);
       formData.append('fileName', selectedFile.name);
       const config = {
         headers: {
           'content-type': 'multipart/form-data',
         },
       };
       const data = await axios.post(url, formData, config)
       console.log(data)
     }

     const { name, email, phone, id } = form

     const handleTextChange = (e) => {
       if (e.target.name === 'phone') {
         e.target.value.toString()
       }
       setForm({ ...form, [e.target.name]: e.target.value })
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
                 onChange={handleTextChange}
              />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                 type='email'
                 id='email'
                 name='email'
                 required
                 placeholder='Enter your email'
                 value={email}
                 onChange={handleTextChange}
              />
            </div>

            <div>
              <label htmlFor='phone'>Phone</label>
              <input
                 type='number'
                 id='phone'
                 name='phone'
                 required
                 placeholder='Enter your phone'
                 value={phone}
                 onChange={handleTextChange}
              />
            </div>
            <div>
              <label htmlFor='id'>ID</label>
              <input
                 type='number'
                 id='id'
                 name='id'
                 required
                 placeholder='Enter your ID'
                 value={id}
                 onChange={handleTextChange}
              />
            </div>
            <div>
              <label htmlFor='photo'>photo</label>
              <input
                 type='file'
                 id='photo'
                 name='photo'
                 required
                 onChange={(e) => setSelectedFile(e.target.files[0])}
              />
            </div>
            <div>
              <button type='submit'>Submit</button>
            </div>

          </form>
        </div>
     );
   }
;

export default Form;