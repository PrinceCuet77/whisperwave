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

const ForgotPassword = () => {
  return (
    <AuthCard>
      <CardHeader className='text-center'>
        <CardTitle className='text-2xl'>Forgot Password</CardTitle>
        <CardDescription>
          Enter the email associated with your account, and we'll send you a
          link to reset your password
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className='grid w-full items-center gap-4'>
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
            Send Mail
          </Button>
          <p className='text-sm mt-2 text-center'>
            Remembered your password?{' '}
            <Link className='text-blue-700' href='../signup'>
              Sign In
            </Link>
          </p>
        </div>
      </CardContent>
    </AuthCard>
  );
};

export default ForgotPassword;
