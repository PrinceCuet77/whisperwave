import InputField from '@/components/layout/input-field';
import SideBar from '@/components/side-bar';
import { Button } from '@/components/ui/button';

const ChangePassword = () => {
  return (
    <section className='flex flex-col sm:flex-row gap-4 my-3'>
      <SideBar active='change password' />
      <article className='w-full sm:w-4/6 md:w-5/6 h-full flex flex-col'>
        <div className='w-full h-16 flex items-center justify-center'>
          <h1 className='text-2xl font-semibold'>Change Password</h1>
        </div>
        <div className='w-full h-full'>
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
          {/* <div className='flex flex-col justify-between my-4'> */}
          <div className='my-4'>
            <Button
              // onClick={clickHandler}
              type='button'
              className='w-52 cursor-pointer flex hover:bg-red-700 transition-all duration-200 ease-in-out'
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
        </div>
      </article>
    </section>
  );
};

export default ChangePassword;
