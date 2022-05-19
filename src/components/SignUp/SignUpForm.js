
import { useState } from "react";
import { useForm } from 'react-hook-form';
import axios from '../../api/axios'

function SignUpForm() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        formState
    } = useForm({ mode: 'onChange', });

    const password = watch('password')
    const [errorMsg, setErrorMsg] = useState()

    const onSubmit = async (data) => {
        delete data.matchPassword
        try {
            const response = await axios.post('user/register', data)
            console.log(response)
            setErrorMsg('')
        } catch (error) {
            if (error.response.status === 409) {
                setErrorMsg('Email is already register')
            } else {
                setErrorMsg('Registration Failed')
            }
        }

    }

    return (
        <section className="open:shadow-lg p-8 rounded-lg">
            <h2 className="pl-2 text-xl font-bold">Let's Register,</h2>
            <p className="pl-2 text-lg font-bold">Friend</p>
            {errorMsg && <p className="pl-2 text-red-600 relative top-6">{errorMsg}</p>}
            <form onSubmit={handleSubmit(onSubmit)} className="mt-12 flex flex-col gap-4" method="dialog">
                <input className="p-2 border-b" type='text' placeholder="Username" {...register('username', { required: 'This is required' })} />
                {errors.username && <p className="pl-2 text-red-600">  * {errors.username.message}</p>}

                <input className="p-2 border-b" type='email' placeholder="Email"  {...register('email', { required: 'This is required' })} />
                {errors.email && <p className="pl-2 text-red-600">   * {errors.email.message}</p>}

                <input className="p-2 border-b" type="password" placeholder="password" {...register('password', { required: 'This is required', minLength: { value: 7, message: "Min Length 7" } })} />
                {errors.password && <p className="pl-2 text-red-600"> * {errors.password.message}</p>}

                <input className="p-2 border-b" type="password" placeholder="Match Password" {...register('matchPassword', { required: 'This is required', validate: (value) => value === password || "The password dont match" })} />
                {errors.matchPassword && <p className="pl-2 text-red-600">  * {errors.matchPassword.message}</p>}

                <button disabled={!formState.isValid} className={`mt-5 inline p-2  rounded ${!formState.isValid ? "bg-red-200" : "bg-red-400"}`}  type="submit">SIGN UP</button>

            </form>
        </section>
    );
}

export default SignUpForm;
