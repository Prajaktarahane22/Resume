import {useFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



function UpdateVehicle(){
    const {id} = useParams();
    const navigate = useNavigate();
    const [vehicle , setVehicle] = useState(null);

    useEffect(()=>{
     axios.get(`http://localhost:5000/vehicles/${id}`)
       .then( response => {
       setVehicle(response.data);
       console.log(response.data)
       })
       .catch(error => {
    console.log('There was an error fetching the vehicle data !' , error);
       }
       )
      },[id])
     

      const formik = useFormik(
            {
                enableReinitialize:true,

               initialValues: {
                image: vehicle?.image || '',
                 name: vehicle?.name || '',
                descriptiom: vehicle?.descriptiom || ''
              },

          validationSchema : Yup.object({
             image: Yup.string().required('Image URL is required'),
             name: Yup.string().min(5,'Name must be at least 5 characters').required('Name is required')
             }),

          onSubmit:(values)=>{
             axios.put(`http://localhost:5000/vehicles/${id}`,values)
             .then(response=>{
                 navigate('/vehicle-list')
                 })
                 .catch(error=>{
                  console.log(error);
                  })
                },
              }
           );

           return (
              <div className='container mt-4'>
               <h2>Update Vehicle</h2>

        <form onSubmit={formik.handleSubmit}>
                <div className='mb-3'>
                <label htmlFor='image' className='form-label'>Image URL</label>
                <input id='image' name='image' type='text' className='form-control' value={formik.values.image} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                </div>
               {
                formik.touched.image && formik.errors.image ? <div className='text-danger'>{formik.errors.image}</div>:null
               }
              <div className='mb-3'>
              <label htmlFor='name' className='form-label'>Name</label>
              <input id='name' name='name' type='text' className='form-control' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
             </div>
            {

     formik.touched.name && formik.errors.name ? <div className='text-danger'>{formik.errors.name}</div>:null
     }
   <div className='mb-3'>
    <label htmlFor='description' className='form-label'>Description</label>
    <input id='description' name='description' type='text' className='form-control' value={formik.values.description} onChange={formik.handleChange} onBlur={formik.handleBlur}/>

   </div>
   {
    formik.touched.description && formik.errors.description ? <div className='text-danger'>{formik.errors.description}</div>:null
   }
<button type='submit' className='btn btn-primary'>submit </button>
</form>
</div>

)

}
export default UpdateVehicle;
