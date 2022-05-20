import { useState } from "react";
import { NumberInput, TextInput, Button, Box, Group } from '@mantine/core';
import axios from "axios";

function Registration() {
  const [name, setName] = useState('')
  const [token, setToken] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState(0)
  const [positionID, setPositionID] = useState(0)
  const [selectedFile, setSelectedFile] = useState(null)


  const onSubmitHandler = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('file', selectedFile)
    formData.append('name', name)
    formData.append('email', email)
    formData.append('phone', phone.toString())
    formData.append('positionId', positionID.toString())

    try {
      await axios.post('http://localhost:4000/post', formData, {
        headers: { "Authorization": `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
      })
      setToken('')
      setName('')
      setEmail('')
      setPhone(0)
      setPositionID(0)
      setSelectedFile(null)
    } catch
       (err) {
      console.log(err);
    }

  }


  return (
     <Box sx={{ maxWidth: 340 }} mx="auto">
       <form onSubmit={onSubmitHandler}>
         <TextInput
            required
            label="Token"
            placeholder="Token"
            mt="sm"
            value={token}
            onChange={(e) => setToken(e.target.value)}
         />

         <TextInput
            required
            label="Name"
            placeholder="John Doe"
            mt="sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
         />

         <TextInput
            required
            label="Email"
            placeholder="example@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         />

         <NumberInput
            required
            label="phone"
            placeholder="Your phone"
            mt="sm"
            value={phone}
            onChange={(e) => setPhone(e)}
         />

         <NumberInput
            required
            label="positionID"
            placeholder="Your position ID"
            mt="sm"
            value={positionID}
            onChange={(e) => setPositionID(e)}
         />
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


         <Group position="right" mt="xl">
           <Button type="submit">Submit</Button>
         </Group>
       </form>
     </Box>
  );
}

export default Registration