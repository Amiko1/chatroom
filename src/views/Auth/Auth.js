import { useState } from 'react';
import ChatAltIcon from '../../components/icons/ChatAltIcon'
import LoginForm from '../../components/Login/LoginForm';
import SignUpForm from '../../components/SignUp/SignUpForm';
import Modal from '../../components/Modal/Modal';
import './style.css'


function Auth() {

    const [IsLoginOpen, setIsLoginOpen] = useState(false)
    const [IsSignUpOpen, setIsSignUpOpen] = useState(false)

    function SignUp() {
        setIsSignUpOpen(true)
        setIsLoginOpen(false)
    }

    function LogIn() {
        setIsLoginOpen(true)
        setIsSignUpOpen(false)
    }

    return (
        <section className='auth flex justify-center min-h-screen flex-col '>
            <main className=' mt-auto flex items-center  justify-center flex-col '>
                <div className="relattive p-4 inline-block  bg-red-400  rounded-full drop-shadow-xl border-1	auth__icon">
                    <ChatAltIcon />
                </div>
                <h1 className='mt-12 text-xs uppercase font-semibold'>Welcome To</h1>
                <h2 className='tracking-widest	 text-lg uppercase font-bold'>ChatRoom</h2>
                <div className='mt-2'>
                    <div className='h-0.5 bg-red-400 w-12'> </div>
                    <div className='h-0.5 bg-red-400 w-12 mt-1'> </div>
                    <div className='h-0.5 bg-red-200 w-12 mt-1'> </div>
                </div>
                <p className='tracking-wide text-xs font-semibold mt-4 text-gray-400'>გაერთეთ და შეიძინეთ ახალი მეგობრები</p>
            </main>
            <footer className='mt-auto w-full z-10'>
                <button className='w-full p-4 text-center border-t border-b text-red-400 font-semibold'>How it woks?</button>
                <div className='flex'>
                    <button onClick={LogIn} className='basis-1/2 border-r  text-center font-bold p-4'>
                        LOGIN
                    </button>
                    <Modal open={IsLoginOpen} onClose={() => setIsLoginOpen(false)}>
                        <LoginForm />
                    </Modal>
                    <button onClick={SignUp} className='basis-1/2 text-center font-bold'>
                        SIGN UP
                    </button>
                    <Modal open={IsSignUpOpen} onClose={() => setIsSignUpOpen(false)}>
                        <SignUpForm />
                    </Modal>
                </div>
            </footer>


        </section>
    );
}

export default Auth;
