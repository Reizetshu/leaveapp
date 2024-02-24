const LoginForm = () => {
  return (
    <div className='grid place-items-center h-screen'>
      <div className='shadow-lg p-5 rounded-lg border-t-4 border-green-800'>
        <h1 className=' text-center text-xl font-bold my-4'>
          Leave Management System
        </h1>

        <form className='flex flex-col gap-3'>
          <input className='inputLogin' type='text' placeholder='Email' />
          <input
            className='inputLogin'
            type='password'
            placeholder='Password'
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
