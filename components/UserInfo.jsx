'use client';

import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

const UserInfo = () => {
  const { data: session } = useSession();

  const logOutHandler = () => {
    signOut();
  };
  return (
    <div className='grid place-items-center h-screen'>
      <div className='shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6 rounded'>
        <div>
          Email: <span className='font-bold'>{session?.user?.email}</span>
        </div>
        <div>
          Type: <span className='font-bold'>User</span>
        </div>

        <button
          onClick={logOutHandler}
          className='bg-red-500 text-white font-bold px-6 py-2 mt-3 rounded'
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
