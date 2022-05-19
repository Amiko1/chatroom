import { useForm } from 'react-hook-form';
import axios from '../../api/axios'
import { useState,  useContext } from "react";
import AuthContext from '../../context/AuthProvide';

function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        formState
    } = useForm({ mode: 'onChange', });

    const [errorMsg, setErrorMsg] = useState()
    const { setAuth } = useContext(AuthContext)

    const onSubmit = async (data) => {

        try {
            const response = await axios.post('user/login', data)
            const token = response?.data?.token;
            setAuth({...data, token})
            setErrorMsg('')
        } catch (error) {
            if (error.response.status === 500) {
                setErrorMsg('Password or email is not true')
            } else {
                setErrorMsg('Registration Failed')
            }
        }

    }

    return (
        <section className="open:shadow-lg p-8 rounded-lg">
            <h2 className="pl-2 text-xl font-bold">Welcome Back,</h2>
            <p className="pl-2 text-lg font-bold">Friend</p>
            {errorMsg && <p className="pl-2 text-red-600 relative top-6">{errorMsg}</p>}
            <form onSubmit={handleSubmit(onSubmit)} className="mt-12 flex flex-col gap-4" method="dialog">
                <input className="p-2 border-b" type='email' placeholder="Email"  {...register('email', { required: 'This is required' })} />
                {errors.email && <p className="pl-2 text-red-600">   * {errors.email.message}</p>}

                <input className="p-2 border-b" type="password" placeholder="password" {...register('password', { required: 'This is required', minLength: { value: 7, message: "Min Length 7" } })} />
                {errors.password && <p className="pl-2 text-red-600"> * {errors.password.message}</p>}

                <button disabled={!formState.isValid} className={`mt-5 inline p-2  rounded ${!formState.isValid ? "bg-red-200" : "bg-red-400"}`}  type="submit">SIGN UP</button>
            </form>
        </section>
    );
}

export default LoginForm;
