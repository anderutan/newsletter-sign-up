import mobileImg from '../assets/illustration-sign-up-mobile.svg';
import desktopImg from '../assets/illustration-sign-up-desktop.svg';
import iconList from '../assets/icon-list.svg';
import iconSuccess from '../assets/icon-success.svg';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  return (
    <div className='w-full'>
      <div>
        <img src={mobileImg} alt='' className='w-full' />
      </div>
      <div className='px-5 py-10 flex flex-col gap-6 text-slate-800'>
        <h2 className='text-4xl font-semibold'>Stay updated!</h2>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li className='flex gap-3 items-start mb-2'>
            <img src={iconList} />
            Product discovery and building what matters
          </li>
          <li className='flex gap-3 items-start mb-2'>
            <img src={iconList} />
            Measuring to ensure updates are a success
          </li>
          <li className='flex gap-3 items-start'>
            <img src={iconList} />
            And much more!
          </li>
        </ul>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor='email' className='flex flex-col gap-2'>
            <span className='text-xs font-bold'>Email address</span>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='email@company.com'
              className='border-[1px] border-slate-400 placeholder-slate-400 p-4 rounded-lg mb-5 '
            />
          </label>
          <button className='bg-slate-800 text-white w-full py-4 rounded-lg font-semibold'>
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
    </div>
  );
}
