'use client';

import Link from 'next/link';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const router = useRouter();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn('credentials', {
        email,
        password,
        // TODO: Put isAdmin later
        redirect: false,
      });

      if (res.error) {
        setErrorMsg('Invalid Credentials');
        return;
      }

      router.replace('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='grid place-items-center h-screen'>
      <div className='shadow-lg p-5 rounded-lg border-t-4 border-green-800'>
        <h1 className=' text-center text-xl font-bold my-4'>
          Leave Management System
          <br />
          Login
        </h1>

        <form onSubmit={submitHandler} className='flex flex-col gap-3'>
          <input
            onChange={emailHandler}
            className='inputLogin'
            type='text'
            placeholder='Email'
          />
          <input
            onChange={passwordHandler}
            className='inputLogin'
            type='password'
            placeholder='Password'
          />
          <button className='bg-green-600 text-white fon-bold cursor-pointer px=6 py-2 rounded'>
            Login
          </button>

          {errorMsg && (
            <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2'>
              {errorMsg}
            </div>
          )}

          <Link className='text-sm mt-3 text-right' href={'/register'}>
            Don't have an account? <span className='underline'>Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
