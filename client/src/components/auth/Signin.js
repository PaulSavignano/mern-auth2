import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import { Card, CardHeader } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


const validate = values => {
  const errors = {}
  const requiredFields = [ 'email', 'password' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

const Signin = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <Card
      style={{
        margin: 'auto',
        width: '75%',
        marginTop: '80px',
        padding: 15
      }}
    >
      <CardHeader
        title="Sign In"
        titleStyle={{
          color: '#00bcd4',
          fontSize: '24px'
        }}
      />
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="email"
            component={renderTextField}
            label="Email"
            style={{
              width: '100%'
            }}
          />
        </div>
        <div>
          <Field
            name="password"
            component={renderTextField}
            label="Password"
            style={{
              width: '100%'
            }}
          />
        </div>
        <div>
          <RaisedButton
            type="submit"
            primary={true}
            disabled={pristine || submitting}
            style={{
              width: '100%',
              padding: '15px 0 15px 0'
            }}
          >
            Submit
          </RaisedButton>
        </div>
      </form>
    </Card>
  )
}

export default reduxForm({
  form: 'signin',
  validate,
})(Signin)
