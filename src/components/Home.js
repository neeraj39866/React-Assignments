import React, { useState } from 'react';
import Stepper from 'react-stepper-horizontal';
import ProfileInformation from './ProfileInformation';
import Membership from './Membership';
import Procedure from './Procedure';
import Wallet from './Wallet';
import { FormProvider, FormContext } from './Form_context';
import MedicalHistory from './MedicalHistory';


const Home = () => {
  const [value] = React.useContext(FormContext);

  const [currentPage, setCurrentPage] = useState(0);
  const sections = [
    { title: 'Profile Information', onClick: () => setCurrentPage(0) },
    { title: 'Procedure', onClick: () => setCurrentPage(1) },
    { title: 'Wallet', onClick: () => setCurrentPage(2) },
    { title: 'Membership and Treatment Plans', onClick: () => setCurrentPage(3) },
    { title: 'Medical History', onClick: () => setCurrentPage(4) },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello");
    console.log(value);
  };

  const next = () => setCurrentPage((prev) => prev + 1);
  const prev = () => setCurrentPage((prev) => prev - 1);

  return (
    <>
      <div className='header'>
        <span style={{ fontSize: '18px' }}>Clients 	&gt; Merge 	&gt; <span style={{ color: 'grey' }}>Clients Sky Blue</span></span>
        <span className='buttons'>
          <button className='cancel-button' onClick={prev}>Cancel</button>
          {currentPage !== 4 && (<button className='next-button' onClick={next}>Next Step</button>)}
          {currentPage === 4 && (<button className='next-button' onClick={handleSubmit}>Save</button>)}
        </span>
      </div>
      <form onSubmit={handleSubmit}>
        <Stepper
          steps={sections}
          activeStep={currentPage}
          activeColor="#0d73b7"
          defaultColor="darkgrey"
          defaultBarColor="darkgrey"
          completeColor="#0d73b7"
          completeBarColor="#0d73b7"
          size={10}
          circleFontColor="#0d73b7"
          circleFontSize={0}
          titleTop={-35}
          activeTitleColor="#0d73b7"
          completeTitleColor="#0d73b7"
        />

        {currentPage === 0 && (
          <>
            <ProfileInformation />
          </>
        )}

        {currentPage === 1 && (
          <>
            <Procedure />
          </>
        )}

        {currentPage === 2 && (
          <>
            <Wallet />
          </>
        )}

        {currentPage === 3 && (
          <><Membership /></>
        )}

        {currentPage === 4 && (
          <><MedicalHistory /></>
        )}
      </form>
    </>
  );
};

export default function Sample() {
  return (
    <FormProvider>
      <Home />
    </FormProvider>
  );
}
