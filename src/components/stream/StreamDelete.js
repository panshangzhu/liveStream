import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Field, reduxForm, SubmissionError} from "redux-form";

const deplayPost = ms => new Promise(resolve => setTimeout(resolve, ms))

class StreamDelete extends Component{
    renderInput = ({input, label, type, meta: {touched, error}}) =>
         (<div>
             <label>{label}</label>
             <div>
                 <input type={type} {...input} placeholder={label} />
                 {touched && error && <span>{error}</span>}
             </div>
        </div>)

    FORM_FAIELD = 'Login faield'
    submitForm = (formValues) => {
        return deplayPost(2000).then(() => {
            if(!['jerry', 'curry', 'pan', 'jessie'].includes(formValues.username))
            {
                throw new SubmissionError({
                    username: 'User does not exist in system',
                    _error: this.FORM_FAIELD
                })
            } else if(formValues.password !== 'mark2win') {
                throw new SubmissionError({
                    password: 'Wrong password',
                    _error: this.FORM_FAIELD
                })
            } else {
                console.log(`Login successfully, ${formValues}`)
            }
        })
    }

    render() {
        const {error, handleSubmit, pristine, reset, submitting} = this.props
        return (<div>
            <div>Stream Delete</div>
            <form onSubmit={handleSubmit(this.submitForm)}>
                {error && <strong>{error}</strong>}
                <Field name='username'
                       type='text'
                       label='Username'
                       component={this.renderInput}
                >
                </Field>
                <Field name='password'
                       type='password'
                       label='Password'
                       component={this.renderInput}
                >

                </Field>
                <div>
                    <button type='submit' disabled={submitting}>Log in</button>
                    <button  disabled={pristine || submitting}>Clear Value</button>
                </div>
            </form>
        </div>)
    }

}


const validate = values => {
   const errors = {}
   if(!values.username) {
       errors.username = 'Required'
   } else if(values.username.length > 15) {
       errors.username = 'Must be 15 characters of less'
   }

   return errors
}
const formWrapped = reduxForm({
    form: 'streamCreater',
    validate
})(StreamDelete)

export default connect(null, {})(formWrapped)

