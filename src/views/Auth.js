import ChatAltIcon from '../components/icons/ChatAltIcon'

function Auth() {
    return (
        <section className='flex   justify-center min-h-screen flex-col '>
            <main className='mb-32 animate-pulse flex items-center  justify-center flex-col '>
                <div className="p-4 inline-block  bg-red-400  rounded-full">
                    <ChatAltIcon />
                </div>
                <h1 className='mt-5 text-xs uppercase font-semibold'>Welcome To</h1>
                <h2 className='tracking-widest	 text-lg uppercase font-bold'>ChatRoom</h2>
                <div className='mt-2'>
                    <div className='h-0.5 bg-red-400 w-12'> </div>
                    <div className='h-0.5 bg-red-400 w-12 mt-1'> </div>
                    <div className='h-0.5 bg-red-200 w-12 mt-1'> </div>
                </div>
                <p className='tracking-wide text-xs font-semibold mt-4 text-gray-400'>გაერთეთ და შეიძინეთ ახალი მეგობრები</p>
            </main> 
            <footer className='absolute bottom-0 w-full'>
                <p className='p-4 text-center border-t border-b text-red-400 font-semibold'>How it woks?</p>
                <div className='flex p-4'>
                    <p className='basis-1/2  text-center font-bold'>
                        LOGIN
                    </p>
                    <div className="absolute bottom-0 left-1/2 transform-translate-x-1/2 w-0.5 h-14 bg-gray-100">

                    </div>
                    <p className='basis-1/2 text-center font-bold'>
                        SIGN UP
                    </p>
                </div>
            </footer>
        </section>
    );
}

export default Auth;
