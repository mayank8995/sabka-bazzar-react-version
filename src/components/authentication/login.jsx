import React from 'react';
import { useForm } from 'react-hook-form';
import TextInput from '../input/textInput';
import { useSelector } from 'react-redux';
import './style.css'
import { emailValidation, password } from '../util/common';
import { useHistory } from 'react-router-dom';
const Login = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const signUpDetails = useSelector((state) => state.getAuthenticationDetails.signUp)
    const history = useHistory()
    let authentication = false;
    const onSubmit = data => {
        if(data['Email'] === signUpDetails[0]['Email'] && data['Password'] === signUpDetails[0]['Password']){
            history.push('/home')
            authentication = true
        }
        if(!authentication){
           alert('Please Sign up before login')
        }
    }
    return <React.Fragment>
        <div className='login'>
            <div className='login-left'>
                <h2>Login</h2>
                <p>Get access to your orders,Wishlist and Recommendations</p>
            </div>
            <div className='login-right'>
                <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
                    <TextInput register={register} type='email' name='Email' placeholder='Email' mandatory={true} errors={errors} rules={emailValidation} />
                    <TextInput register={register} type='password' name='Password' placeholder='Password' mandatory={true} errors={errors} rules={password} />
                    <button className="btn" type="submit">Login</button>
                </form>
            </div>
        </div>

    </React.Fragment>
}
export default Login;