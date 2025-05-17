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

const ResetPasswordPage = () => {
  return (
    <AuthCard>
      <CardHeader className='text-center'>
        <CardTitle className='text-2xl'>Reset Password</CardTitle>
        <CardDescription>
          Please enter a new password below. Make sure it's strong and secure
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className='grid w-full items-center gap-4'>
            <InputField
              id='password'
              label='New Password'
              type='password'
              placeholder='Your New Password'
              // value={enteredPassword}
              // onChange={(event: FormEvent<HTMLInputElement>) =>
              //   passwordInputChangeHandler(event.currentTarget.value)
              // }
              // onBlur={passwordInputBlurHandler}
              // invalid={passwordInputIsInvalid}
              // className={passwordInputClasses}
            />
            <InputField
              id='password'
              label='Confirm New Password'
              type='password'
              placeholder='Confirm your new Password'
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
            Submit
          </Button>
        </div>
      </CardContent>
    </AuthCard>
  );
};

export default ResetPasswordPage;
