'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const router = useRouter();

  const fNameHandler = (e) => {
    setFName(e.target.value);
  };

  const lNameHandler = (e) => {
    setLName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!fName || !lName || !email || !password) {
      setErrorMsg('All fields are necessary.');
      return;
    }

    try {
      const resUserExists = await fetch('api/userExists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setErrorMsg('User already exists.');
        return;
      }

      const res = await fetch('api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fName,
          lName,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push('/');
      } else {
        console.log('User registration failed: ', error);
      }
    } catch (error) {
      console.log('Error during registration: ', error);
    }
  };

  return (
    <div className='grid place-items-center h-screen'>
      <div className='shadow-lg p-5 rounded-lg border-t-4 border-green-800'>
        <h1 className=' text-center text-xl font-bold my-4'>
          Leave Management System
          <br />
          Register
        </h1>

        <form onSubmit={submitHandler} className='flex flex-col gap-3'>
          <input
            onChange={fNameHandler}
            className='inputLogin'
            type='text'
            placeholder='First Name'
          />
          <input
            onChange={lNameHandler}
            className='inputLogin'
            type='text'
            placeholder='Last Name'
          />
          <input
            onChange={emailHandler}
            className='inputLogin'
            type='email'
            placeholder='Email'
          />
          <input
            onChange={passwordHandler}
            className='inputLogin'
            type='password'
            placeholder='Password'
          />
          <button className='bg-green-600 text-white fon-bold cursor-pointer px=6 py-2 rounded'>
            Register
          </button>

          {errorMsg && (
            <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2'>
              {errorMsg}
            </div>
          )}

          <Link className='text-sm mt-3 text-right' href={'/'}>
            Already have an account? <span className='underline'>Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
