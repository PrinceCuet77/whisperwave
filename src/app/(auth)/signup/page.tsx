// import { type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
// import { customToast, isEmail, ToastTypes, validPassword } from '@/lib/utils';
import AuthCard from '@/components/layout/auth-card';
import InputField from '@/components/layout/input-field';
import Link from 'next/link';
// import { Loader2 } from 'lucide-react';

import Image from 'next/image';

const SignUpPage = () => {
  return (
    <AuthCard>
      <CardHeader className='text-center'>
        <CardTitle className='text-2xl'>Please Sign in</CardTitle>
        <CardDescription>Sign up to start your anonymous adventure</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <div className='flex'>
            <Link
              href='#'
              className='flex items-center justify-center px-4 py-2 border rounded-md shadow-sm bg-gray-50 hover:bg-gray-100 w-full text-gray-700 font-medium transition duration-200 ease-in-out'
            >
              <Image
                src='/google.svg'
                alt='Google Logo'
                width={20}
                height={20}
                className='w-5 h-5 mr-2'
              />
              <span className='text-gray-600 font-medium'>
                Sign In With Google
              </span>
            </Link>
          </div>
          <div className='flex items-center justify-center mt-4 mb-2'>
            <hr className='w-1/4 border-t border-gray-200' />
            <span className='px-2 text-sm text-gray-500'>Or Sign In with</span>
            <hr className='w-1/4 border-t border-gray-200' />
          </div>
        </div>
        <form>
          <div className='grid w-full items-center gap-4'>
            <InputField
              id='username'
              label='Username'
              type='text'
              placeholder='example77'
              // value={enteredEmail}
              // onChange={(event: FormEvent<HTMLInputElement>) =>
              //   emailInputChangeHandler(event.currentTarget.value)
              // }
              // onBlur={emailInputBlurHandler}
              // invalid={emailInputIsInvalid}
              // className={emailInputClasses}
            />
            <InputField
              id='email'
              label='Email'
              type='email'
              placeholder='example@gmail.com'
              // value={enteredEmail}
              // onChange={(event: FormEvent<HTMLInputElement>) =>
              //   emailInputChangeHandler(event.currentTarget.value)
              // }
              // onBlur={emailInputBlurHandler}
              // invalid={emailInputIsInvalid}
              // className={emailInputClasses}
            />
            <InputField
              id='password'
              label='Password'
              type='password'
              placeholder='Your Password'
              // value={enteredPassword}
              // onChange={(event: FormEvent<HTMLInputElement>) =>
              //   passwordInputChangeHandler(event.currentTarget.value)
              // }
              // onBlur={passwordInputBlurHandler}
              // invalid={passwordInputIsInvalid}
              // className={passwordInputClasses}
            />
          </div>
        </form>
        <div className='flex flex-col justify-between my-4'>
          <Button
            // onClick={clickHandler}
            type='button'
            className='w-full cursor-pointer flex hover:bg-red-700 transition-all duration-200 ease-in-out'
            // disabled={!formIsValid}
          >
            {/* {isLoading === 'pending' ? (
              <Loader2 className='text-center h-6 w-6 animate-spin' />
            ) : (
              'Sign In'
            )} */}
            Sign Up
          </Button>
          <p className='text-sm mt-2 text-center'>
            Already have an account?{' '}
            <Link className='text-blue-700' href='../login'>
              Sign In
            </Link>
          </p>
        </div>
      </CardContent>
    </AuthCard>
  );
};

export default SignUpPage;
