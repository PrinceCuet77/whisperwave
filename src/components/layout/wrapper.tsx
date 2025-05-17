import React from 'react';

const Wrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className='mx-auto w-full max-w-3xl min-h-screen px-2.5 md:max-w-screen-xl md:px-5'>
      {children}
    </main>
  );
};

export default Wrapper;
