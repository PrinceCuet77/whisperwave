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

const LoginPage = () => {
  return (
    <AuthCard>
      <CardHeader className='text-center'>
        <CardTitle className='text-2xl'>Welcome Back</CardTitle>
        <CardDescription>
          Welcome to WhisperWave! Sign In to continue your secret conversations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className='grid w-full items-center gap-4'>
            <InputField
              id='email'
              label='Email/Username'
              type='email'
              placeholder='example@gmail.com or example77'
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
        <div className='my-2 text-right underline text-blue-900 text-sm'>
          <Link href='../forgot-password'>Forgot Password?</Link>
        </div>
        <div className='flex flex-col justify-between'>
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
            Sign In
          </Button>
          <p className='text-sm mt-2 text-center'>
            Don't have an accound?{' '}
            <Link className='text-blue-700' href='../signup'>
              Sign Up
            </Link>
          </p>
        </div>
      </CardContent>
    </AuthCard>
  );
};

export default LoginPage;
