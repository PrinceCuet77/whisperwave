import { Card } from '@/components/ui/card';

const AuthCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='flex justify-center p-5 mt-10'>
      <Card className='max-w-sm w-full sm:max-w-sm px-2.5'>{children}</Card>
    </section>
  );
};

export default AuthCard;
