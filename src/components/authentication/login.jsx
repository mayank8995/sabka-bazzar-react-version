import React from 'react';
import { useForm } from 'react-hook-form';
import TextInput from '../input/textInput';
import { useSelector } from 'react-redux';
const Login = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const authentication = useSelector((state) => state.getAuthenticationDetails.signUp)
    const onSubmit = data => console.log(data)
    return <React.Fragment>
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput register={register} type='text' name='firstName' placeholder='Enter first name' mandatory={true} errors={errors} />
            <TextInput register={register} type='text' name='lastName' placeholder='Enter last name' mandatory={true} errors={errors} />
            <TextInput register={register} type='password' name='password' placeholder='Enter password' mandatory={true} errors={errors} />
            <button type="submit">Submit</button>
        </form>
    </React.Fragment>
}
export default Login;