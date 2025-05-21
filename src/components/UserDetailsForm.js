import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// ✅ Validation Schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  age: Yup.number()
    .required('Age is required')
    .min(1, 'Age must be positive')
    .max(120, 'Unrealistic age'),
  gender: Yup.string().required('Gender is required'),
  address: Yup.string().required('Address is required'),
  state: Yup.string().required('State is required'),
  aadhar: Yup.mixed().required('Aadhar is required'),
  terms: Yup.bool().oneOf([true], 'You must accept the terms'),
});

const UserDetailsForm = () => {
  return (
    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      <h2>User Details Form</h2>

      <Formik
        initialValues={{
          name: '',
          age: '',
          gender: '',
          address: '',
          state: '',
          aadhar: null,
          terms: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Form Submitted:', values);
          alert('Form Submitted Successfully!');
        }}
      >
        {({ setFieldValue, isSubmitting }) => (
          <Form>
            {/* Name */}
            <div>
              <label>Name</label><br />
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
            </div>

            {/* Age */}
            <div>
              <label>Age</label><br />
              <Field type="number" name="age" />
              <ErrorMessage name="age" component="div" style={{ color: 'red' }} />
            </div>

            {/* Gender (Radio) */}
            <div>
              <label>Gender</label><br />
              <Field type="radio" name="gender" value="Male" /> Male
              <Field type="radio" name="gender" value="Female" /> Female
              <Field type="radio" name="gender" value="Other" /> Other
              <ErrorMessage name="gender" component="div" style={{ color: 'red' }} />
            </div>

            {/* Address (Textarea) */}
            <div>
              <label>Address</label><br />
              <Field as="textarea" name="address" />
              <ErrorMessage name="address" component="div" style={{ color: 'red' }} />
            </div>

            {/* State (Select Dropdown) */}
            <div>
              <label>State</label><br />
              <Field as="select" name="state">
                <option value="">Select your state</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
              </Field>
              <ErrorMessage name="state" component="div" style={{ color: 'red' }} />
            </div>

            {/* AADHAR (File Upload) */}
            <div>
              <label>Aadhar Card (Upload File)</label><br />
              <input
                type="file"
                name="aadhar"
                onChange={(event) => {
                  setFieldValue('aadhar', event.currentTarget.files[0]);
                }}
              />
              <ErrorMessage name="aadhar" component="div" style={{ color: 'red' }} />
            </div>

            {/* Terms & Conditions (Checkbox) */}
            <div>
              <label>
                <Field type="checkbox" name="terms" />
                I agree to the terms and conditions
              </label>
              <ErrorMessage name="terms" component="div" style={{ color: 'red' }} />
            </div>

            <br />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserDetailsForm;
