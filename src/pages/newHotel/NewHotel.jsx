import Sidebar from '../../components/sidebar/Sidebar'
import './newHotel.scss'
import Navbar from '../../components/navbar/Navbar'
import {Form,FloatingLabel,Row,Col,Button} from 'react-bootstrap'
import { useFormik } from 'formik';
import { useState } from 'react';
import { DropzoneArea } from "material-ui-dropzone";
import HotelIcon from '@mui/icons-material/Hotel';
const NewHotel = () => {
    const [validated, setValidated] = useState(false);

    const [adhaarImg,setAdhaarImg]=useState({})
    
        const handleAdhaarUpload=(event)=>{
    
    setAdhaarImg(event.target.files[0])
        }
        const formik = useFormik({
          initialValues: {
            hotelname: '',
            price:"",
            available_rooms:"",
            category:"",
            address:"",
            description:""
          }
          ,
          onSubmit: async(values,{resetForm}) => {
            // const adh =new FormData();
            // adh.append('adhaarImg',adhaarImg,adhaarImg.name)
            // adh.append('email',values.email);
            // adh.append('name',values.name);
            // adh.append('phone',values.phone);
            // adh.append('adhaar',values.adhaar);
            // adh.append('pan',values.pan);
            // adh.append('adress',values.address);
            // adh.append('challan',values.challan);
    
    // const a=axios.post('http://localhost:4000/profile',adh, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // })
    if(values.category=="" || values.hotelname=="" || values.address=="" || values.available_rooms=="" || values.price=="" || values.description=="" ){
        alert('all fields required !! check "choose type of hotel"!!')
        setValidated(true)
        return
    }
    alert(JSON.stringify(values))
    
    resetForm({values:""})
    setValidated(false)
          },
        });
  return (
    <div className='newHotel'>
 <Sidebar/>
 <div className="newHotelContainer">
 <Navbar />
<div className='form'>
<span className='title'> <HotelIcon className='icon'/> Add Hotel Details</span>
 
<Form className='px-4 pt-2 pb-5 bg-white' noValidate validated={validated} encType="multipart/form-data" onSubmit={formik.handleSubmit}>
        <Row className="mb-1 mt-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
          <FloatingLabel
    controlId="floatingInput"
    label="Hotel name"
    className="mb-3">
    <Form.Control onChange={formik.handleChange}  value={formik.values.hotelname}   name='hotelname'   required type="text" placeholder="name@example.com" />
    <Form.Control.Feedback type="invalid">
                Please enter Hotel name.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
  </FloatingLabel>
      
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
          <FloatingLabel
    controlId="floatingInput"
    label="Available Rooms"
    className="mb-3">
    <Form.Control  required      type="number"    onChange={formik.handleChange}  value={formik.values.available_rooms}   name='available_rooms'  
 placeholder="name@example.com" />
    <Form.Control.Feedback type="invalid">
                Please enter the available_rooms.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
  </FloatingLabel>
          </Form.Group>
        </Row>

        <Row>
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <FloatingLabel
    controlId="floatingInput"
    label="Price"
    className="mb-3">
    <Form.Control onChange={formik.handleChange}  value={formik.values.price}   name='price'   required type="number" placeholder="name@example.com" />
    <Form.Control.Feedback type="invalid">
                Please enter price.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
  </FloatingLabel>
      
          </Form.Group>
          <Form.Group as={Col} md="6" className='mb-1'  controlId="validationCustom01">
          <Form.Select required onChange={formik.handleChange}  value={formik.values.category}    name='category' aria-label="Default select example">
  <option >choose type of hotel</option>
  <option value="budget">budget stay</option>
  <option value="premium">premium stay</option>
  <option value="resort">resort</option>
  
</Form.Select>
          </Form.Group>
       
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <FloatingLabel
    controlId="floatingInput"
    label="Address"
    className="mb-3">
    <Form.Control as="textarea"
          placeholder="enter a description here"
          style={{ height: '100px' }} onChange={formik.handleChange}  value={formik.values.address}   name='address'   required type="text"  />
    <Form.Control.Feedback type="invalid">
                Please enter address.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
  </FloatingLabel>
          </Form.Group> 
          <Form.Group as={Col} md="6" controlId="validationCustom01">
          <FloatingLabel
    controlId="floatingInput"
    label="hotel description"
    className="mb-3">
    <Form.Control  as="textarea"
          placeholder="enter a description here"
          style={{ height: '100px' }} onChange={formik.handleChange}  value={formik.values.description}   name='description'   required type="text"/>
    <Form.Control.Feedback type="invalid">
                Please enter description.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
  </FloatingLabel>
  
      
          </Form.Group> 
      
 
        </Row>
        <Form.Group as={Col} md="4" controlId="formFile" className="mb-3">
    <Form.Label>Uplaod thumbnail photo</Form.Label>
    <Form.Control onChange={handleAdhaarUpload} required accept="image/*" type="file" /> 
    <Form.Control.Feedback type="invalid">
                Please uplaod thumbnail.
              </Form.Control.Feedback>
  </Form.Group>
      <DropzoneArea  acceptedFiles={['image/jpeg', 'image/png', 'image/*']} filesLimit={100} className="dropzone" onChange={(e)=>console.log(e)}/>
        <Button className='mt-2' type="submit">Submit hotel details</Button>
      </Form>

</div>
 </div>
    </div>
  )
}

export default NewHotel
