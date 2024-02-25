import Link from 'next/link';

const LoginForm = () => {
  return (
    <div className='grid place-items-center h-screen'>
      <div className='shadow-lg p-5 rounded-lg border-t-4 border-green-800'>
        <h1 className=' text-center text-xl font-bold my-4'>
          Leave Management System
          <br />
          Login
        </h1>

        <form className='flex flex-col gap-3'>
          <input className='inputLogin' type='text' placeholder='Email' />
          <input
            className='inputLogin'
            type='password'
            placeholder='Password'
          />
          <button className='bg-green-600 text-white fon-bold cursor-pointer px=6 py-2 rounded'>
            Login
          </button>

          <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2'>
            Error message
          </div>

          <Link className='text-sm mt-3 text-right' href={'/register'}>
            Don't have an account? <span className='underline'>Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
