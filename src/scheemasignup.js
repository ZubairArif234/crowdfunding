

import * as Yup from 'yup';

export const signup = Yup.object({
  firstName: Yup.string().min(2).max(10).required('Please Enter First Name'),
  lastName: Yup.string().min(2).max(10).required('Please Enter Last Name'),

  email: Yup.string().email('Invalid Email').required('Please Enter Email'),
  password: Yup.string().min(8).required('Please Enter Password At Least 8 Characters also one capital and special character'),
  confirm_password: Yup.string().required().oneOf([Yup.ref('password'), null], 'Password not matched'),
  role:Yup.string().required('Select the role you want login as.'),
  remeber:Yup.boolean()
 
});




export const newpass = Yup.object({
  token:Yup.number().required('Please Enter Token'),
  new_password: Yup.string().min(8).required('Please Enter Password At Least 8 Characters'),
  confirm_password: Yup.string().required().oneOf([Yup.ref('new_password'), null], 'Password not matched'),
}) 



export const findyouracc = Yup.object({
  email: Yup.string().email().required('Enter you email')
}) 

