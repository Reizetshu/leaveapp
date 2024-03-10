import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

const SideBar = () => {
  const { data: session } = useSession();

  const logOutHandler = () => {
    signOut();
  };

  return (
    <div className='grid place-items-start h-screen'>
      <div className=' h-screen px-4 bg-zinc-300/10 flex flex-col gap-2 my-6 rounded'>
        <div>
          Email: <span className='font-bold'>{session?.user?.email}</span>
        </div>
        <div>
          Type: <span className='font-bold'>User</span>
        </div>
        <Link href={'/dashboard'}>Dashboard</Link>
        <Link href={'/dashboard/leaverequest'}>Leave Request</Link>

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

export default SideBar;
