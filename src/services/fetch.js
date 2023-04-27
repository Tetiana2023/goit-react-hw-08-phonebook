import axios from "axios";

// axios.defaults.baseURL = `https://64411770792fe886a89e1645.mockapi.io/contacts`;

// 643668c28205915d34f2c10a
// 6422294686992901b2c30e7a

   axios.defaults.baseURL = `https://643668c28205915d34f2c10a.mockapi.io/contacts`

export const fetchContacts = async () =>  {
    const {data} = await axios.get('/contacts')
    return data
   
}

export const addContact = async({ name, number })=> {
    const {data} = await axios.post('/contacts', { name, number })
    return data
}

export const deleteContact = async contactId=>{
    const {data} = await axios.delete(`/contacts/${contactId}`)
    return data
}