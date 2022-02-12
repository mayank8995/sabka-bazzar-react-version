import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signUp } from '../../redux/authentication/actionCreator';
import TextInput from '../input/textInput';
import { emailValidation, firstName, lastName, password } from '../util/common';
import './style.css'
const Signup = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch()
    const history = useHistory()
    const onSubmit = data => {
        if(data['Confirm Password'] !== data['Password']){
            alert("Sorry, Password and Confirm password didn't match");
            return;
        }else{
            dispatch(signUp(data))
            history.push('/')
        }
    }
    return <React.Fragment>
        <div className='signup'>
            <div className='signup-left'>
                <h2>Signup</h2>
                <p>Get access to your orders,Wishlist and Recommendations</p>
            </div>
            <div className='signup-right'>
                <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
                    <TextInput register={register} type="text" name="First Name" placeholder="First Name" mandatory={true} errors={errors} rules={firstName}/>
                    <TextInput register={register} type="text" name="Last Name" placeholder="Last Name" mandatory={true} errors={errors} rules={lastName}/>
                    <TextInput register={register} type="email" name="Email" placeholder="Email" mandatory={true} errors={errors} rules={emailValidation}/>
                    <TextInput register={register} type="password" name="Password" placeholder="Password" mandatory={true} errors={errors} rules={password} />
                    <TextInput register={register} type="password" name="Confirm Password" placeholder="Confirm Password" mandatory={true} errors={errors} rules={password}/>
                    <button className="btn" type="submit">Sign up</button>
                </form>
            </div>
        </div>
    </React.Fragment>

}
export default Signup;