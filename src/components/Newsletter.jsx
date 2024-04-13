import mobileImg from '../assets/illustration-sign-up-mobile.svg';
import desktopImg from '../assets/illustration-sign-up-desktop.svg';
import iconList from '../assets/icon-list.svg';
import iconSuccess from '../assets/icon-success.svg';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Newsletter() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
    },
  });
  const [email, setEmail] = useState('');
  const [showTPage, setShowTPage] = useState(false);

  const onSubmit = (data) => {
    console.log(data.email);
    setEmail(data.email);
    console.log(email);
    setShowTPage(!showTPage);
  };

  return (
    <>
      {!showTPage && (
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
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
              <label htmlFor='email' className='text-xs font-bold mb-2'>
                Email Address
              </label>
              <input
                id='email'
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}
                placeholder='email@company.com'
                className='border-[1px] border-slate-400 placeholder-slate-400 p-4 rounded-lg mb-5 '
              />
              {errors.email && (
                <span className='-mt-5 mb-5 text-red-500 text-sm font-semibold'>
                  Invalid email format
                </span>
              )}

              <input
                type='submit'
                className='bg-slate-800 text-white w-full py-4 rounded-lg font-semibold hover:bg-red-400'
                value='Subscribe to monthly newsletter'
              />
            </form>
          </div>
        </div>
      )}
      {showTPage && (
        <div className='px-8 py-10 flex flex-col w-full'>
          <img
            src={iconSuccess}
            alt=''
            className='h-14 self-start mb-8 mt-12'
          />
          <h2 className='text-4xl font-semibold mb-5'>
            Thanks for subscribing!
          </h2>
          <p>
            A confirmation email has been sent to
            <span className='font-semibold'> {email}</span>. Please open it and
            click the button inside to confirm your subscription.
          </p>
          <button
            onClick={() => setShowTPage(!showTPage)}
            className='bg-slate-800 text-white  py-4 rounded-lg font-semibold hover:bg-red-400 fixed bottom-10 right-5 left-5'
          >
            Dismiss message
          </button>
        </div>
      )}
    </>
  );
}
