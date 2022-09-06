import React, { useState } from 'react';

export const FormContext = React.createContext();

export function FormProvider({ children }) {
  const [formValue, setFormValue] = useState({
    basicDetails: {
      firstName: '',
      lastName: '',
      gender: '',
      dateOfBirth: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      country: '',
      zipCode: '',
      photo: '',
    },
    medicalHistory: 
      {
        majorEvent: '',
        smokingStatus: '',
        medicalProblem: '',
        socialHistory: '',
        familyHistory: '',
        nutritionHistory: '',
        preventiveCare: '',
        developmentHistory: '',
        drugAllergies: '',
        environmentalAllergies: '',
        foodAlergies: ''
      },
  });

  return (
    <FormContext.Provider value={[formValue, setFormValue]}>
      {children}
    </FormContext.Provider>
  );
}
