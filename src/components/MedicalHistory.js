import React from 'react';
import { FormContext } from './Form_context';
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';

const MedicalHistory = () => {
  // const numbers = ['Major Events', 'Smoking Status', 3, 4, 5];
  // const listItems = numbers.map((number) =>
  // <div>{number}</div>
  // );
  const [value, setValue] = React.useContext(FormContext);
  const { medicalHistory } = value;
  const { majorEvent, smokingStatus, medicalProblem, socialHistory, familyHistory, nutritionHistory, preventiveCare, developmentHistory, drugAllergies, environmetalAllergies, foodAllergies } = medicalHistory;


  const handleInputChange = (event) => {
    // console.log(event)
    const { name, value } = event.target;
    setValue((prev) => {
      const medicalHistory = { ...prev.medicalHistory, [name]: value };
      return { ...prev, medicalHistory };
    });
  };
  return (
    <div className='wallet-wrapper'>
      <div className='wallet-amount'>
        <span className='heading wallet' style={{ padding: '20px 0px 0px 20px' }}>Preview Medical History</span>
        <div className='medical-history'>
          {/* <div className='events'>{listItems}<span style={{ float: 'right' }}> $0.00</span></div> */}

          <div className='events'>Major Events<span style={{ float: 'right' }}> {majorEvent}</span></div>
          <div className='events'>Smoking Status<span style={{ float: 'right' }}> {smokingStatus}</span></div>
          <div className='events'>Ongoing Medical Problem<span style={{ float: 'right' }}> {medicalProblem}</span></div>
          <div className='events'>Social History<span style={{ float: 'right' }}> {socialHistory}</span></div>
          <div className='events'>Family Health History<span style={{ float: 'right' }}> {familyHistory}</span></div>
          <div className='events'>Butrition History<span style={{ float: 'right' }}> {nutritionHistory}</span></div>
          <div className='events'>Preventive Care<span style={{ float: 'right' }}> {preventiveCare}</span></div>
          <div className='events'>Drug Allergies<span style={{ float: 'right' }}> {drugAllergies}</span></div>
          <div className='events'>Environmental Allergies<span style={{ float: 'right' }}> {environmetalAllergies}</span></div>
          <div className='events'>Food Allergies<span style={{ float: 'right' }}> {foodAllergies}</span></div>
        </div>
      </div>
      <div className='membership'>
        <div className='history'>
          <span className='heading'>Medical History</span>
          <span>Please select the right information you want to keep in the new merged profile.</span>
        </div>
        <div className='history-input-fields'>
          <div className='input-fields'>
            <input type="text" className="form-control" id="majorEvent" name="majorEvent" placeholder='Major Events' value={majorEvent}
              onChange={(event) => handleInputChange(event)}
            />
            <input type="text" className="form-control" id="smokingStatus" name="smokingStatus" placeholder='Smoking Status' value={smokingStatus}
              onChange={(event) => handleInputChange(event)}
            />
            <input type="text" className="form-control" id="medicalProblem" name="medicalProblem" placeholder='Medical Problem' value={medicalProblem}
              onChange={(event) => handleInputChange(event)}
            />
          </div>
          <div className='input-fields'>
            <input
              type="text"
              className="form-control"
              id="socialHistory"
              name="socialHistory"
              placeholder='Social History'
              value={socialHistory}
              onChange={(event) => handleInputChange(event)}
            />
            <input
              type="text"
              className="form-control"
              id="familyHistory"
              name="familyHistory"
              placeholder='Family History'
              value={familyHistory}
              onChange={(event) => handleInputChange(event)}
            />
            <input
              type="text"
              className="form-control"
              id="nutritionHistory"
              name="nutritionHistory"
              placeholder='Nutrition History'
              value={nutritionHistory}
              onChange={(event) => handleInputChange(event)}
            />
          </div>
          <div className='input-fields'>
            <input
              type="text"
              className="form-control"
              id="preventiveCare"
              name="preventiveCare"
              placeholder='Preventive Care'
              value={preventiveCare}
              onChange={(event) => handleInputChange(event)}
            />
            <input
              type="text"
              className="form-control"
              id="developmentHistory"
              name="developmentHistory"
              placeholder='Development History'
              value={developmentHistory}
              onChange={(event) => handleInputChange(event)}
            />
            <input
              type="text"
              className="form-control"
              id="drugAllergies"
              name="drugAllergies"
              placeholder='Drug Allergies'
              value={drugAllergies}
              onChange={(event) => handleInputChange(event)}
            />
          </div>
          <div className='input-fields'>
            <input
              type="text"
              className="form-control"
              id="environmetalAllergies"
              name="environmetalAllergies"
              placeholder='Environmetal Allergies'
              value={environmetalAllergies}
              onChange={(event) => handleInputChange(event)}
            />
            <input
              type="text"
              className="form-control"
              id="foodAllergies"
              name="foodAllergies"
              placeholder='Food Allergies'
              value={foodAllergies}
              onChange={(event) => handleInputChange(event)}
            />

          </div>
        </div>
      </div>

    </div>
  )
}

export default MedicalHistory
