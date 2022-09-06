import React, {useState} from 'react';
import { FormContext } from './Form_context';
import { IconButton } from '@mui/material';
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';

const ProfileInformation = () => {
  // const numbers = ['Major Events', 'Smoking Status', 3, 4, 5];
  // const listItems = numbers.map((number) =>
  // <div>{number}</div>
  // );
  const [value, setValue] = React.useContext(FormContext);
  const { basicDetails } = value;
  const { firstName, lastName, gender, dateOfBirth, email, phone, address, city, state, country, zipCode, photo } = basicDetails;

  const [image, setImage] = useState('');
  const imageHandler=(e)=>{
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        setImage(reader.result);
      }
    }
    reader.readAsDataURL(e.target.files[0]);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValue((prev) => {
      const basicDetails = { ...prev.basicDetails, [name]: value };
      return { ...prev, basicDetails };
    });
  };
  return (
    <div className='wallet-wrapper'>
      <div className='wallet-amount'>
        <span className='heading wallet' style={{ padding: '20px 0px 0px 20px' }}>Preview Profile Information</span>

        <div className='medical-history'>
          <div style={{columnCount:'2'}}>
          <div className='preview-image'>
            {image &&
          <img src={image} height={120} width={100} alt="Please upload the image"/>
            }
        </div>
        <div>
        <div className='events'>First Name<span style={{ float: 'right' }}> {firstName}</span></div>
          <div className='events'>Last Name<span style={{ float: 'right' }}> {lastName}</span></div>
          <div className='events'>Gender<span style={{ float: 'right' }}> {gender}</span></div>
          <div className='events'>Date of Birth<span style={{ float: 'right' }}> {dateOfBirth}</span></div>
          </div>
          </div>
          <div className='events'>Email<span style={{ float: 'right' }}> {email}</span></div>
          <div className='events'>Phone<span style={{ float: 'right' }}> {phone}</span></div>
          <div className='events'>Address<span style={{ float: 'right' }}> {address}</span></div>
          <div className='events'>City<span style={{ float: 'right' }}> {city}</span></div>
          <div className='events'>State<span style={{ float: 'right' }}> {state}</span></div>
          <div className='events'>Country<span style={{ float: 'right' }}> {country}</span></div>
          <div className='events'>ZipCode<span style={{ float: 'right' }}> {zipCode}</span></div>
        </div>
      </div>
      <div className='membership'>
        <div className='history'>
          <span className='heading'>Profile Information</span>
          <span>Please select the right information you want to keep in the new merged profile.</span>
        </div>
        <div className='photo'>
          Photo
          <div>
          <IconButton color="primary" aria-label="upload picture" component="label">
          <input hidden accept="image/*" className="form-control" id="photo" name="photo" type="file" onChange={imageHandler}/>
          <img src="./bgImage.png" />
          {/* {image &&
          <img src={image} height={80} width={70} alt="Please upload the image"/>
            } */}
          </IconButton>  
          </div>

        </div>
        <div className='history-input-fields'>
          <div className='input-fields'>
            <div className="input-wrapper">
              <label for="firstName">First Name</label>
              <input type="text" className="form-control" id="firstName" name="firstName" placeholder='First Name' value={firstName}
              onChange={(event) => handleInputChange(event)}
            />
            </div>
            <div className="input-wrapper">
              <label for="lastName">Last Name</label>
              <input type="text" className="form-control" id="lastName" name="lastName" placeholder='Last Name' value={lastName}
              onChange={(event) => handleInputChange(event)}
            />
            </div>
            <div className="input-wrapper">
              <label for="gender">Gender</label>
              <input type="text" className="form-control" id="gender" name="gender" placeholder='Gender' value={gender}
              onChange={(event) => handleInputChange(event)}
            />
            </div>
            <div className="input-wrapper">
              <label for="dateOfBirth">Date of Birth</label>
              <input
              type="date"
              className="form-control"
              id="dateOfBirth"
              name="dateOfBirth"
              placeholder='Date Of Birth'
              value={dateOfBirth}
              onChange={(event) => handleInputChange(event)}
            />
            </div>
            {/* <input type="text" className="form-control" id="firstName" name="firstName" placeholder='First Name' value={firstName}
              onChange={(event) => handleInputChange(event)}
            />
            <input type="text" className="form-control" id="lastName" name="lastName" placeholder='Last Name' value={lastName}
              onChange={(event) => handleInputChange(event)}
            />
            <input type="text" className="form-control" id="gender" name="gender" placeholder='Gender' value={gender}
              onChange={(event) => handleInputChange(event)}
            />
            <input
              type="date"
              className="form-control"
              id="dateOfBirth"
              name="dateOfBirth"
              placeholder='Date Of Birth'
              value={dateOfBirth}
              onChange={(event) => handleInputChange(event)}
            /> */}
          </div>
          <div className='input-fields'>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder='Email'
              value={email}
              onChange={(event) => handleInputChange(event)}
              style={{width:'46%'}}
            />
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              placeholder='Phone'
              value={phone}
              onChange={(event) => handleInputChange(event)}
              style={{width:'46%'}}
            />
          </div>
          <div className='input-fields'>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              placeholder='Default Email'
              style={{width:'46%'}}
            />
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              placeholder='Default Phone'
              style={{width:'46%'}}
            />
          </div>
          <div className='input-fields'>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              placeholder='Address Line 1'
              value={address}
              onChange={(event) => handleInputChange(event)}
            />
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              placeholder='Address Line 2'
            />
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              placeholder='City'
              value={city}
              onChange={(event) => handleInputChange(event)}
            />
            <input
              type="text"
              className="form-control"
              id="state"
              name="state"
              placeholder='State'
              value={state}
              onChange={(event) => handleInputChange(event)}
            />
          </div>
          <div className='input-fields'>
            <input
              type="text"
              className="form-control"
              id="country"
              name="country"
              placeholder='Country'
              value={country}
              onChange={(event) => handleInputChange(event)}
              style={{width:'46%'}}
            />
            <input
              type="text"
              className="form-control"
              id="zipCode"
              name="zipCode"
              placeholder='Zip Code'
              value={zipCode}
              onChange={(event) => handleInputChange(event)}
              style={{width:'46%'}}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInformation
