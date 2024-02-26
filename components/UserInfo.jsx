const UserInfo = () => {
  return (
    <div className='grid place-items-center h-screen'>
      <div className='shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6 rounded'>
        <div>
          First Name: <span className='font-bold'>Mark Benson</span>
        </div>
        <div>
          Last Name: <span className='font-bold'>Hernando</span>
        </div>
        <div>
          Email: <span className='font-bold'>mbhernando27@gmail.com</span>
        </div>

        <button className='bg-red-500 text-white font-bold px-6 py-2 mt-3 rounded'>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
