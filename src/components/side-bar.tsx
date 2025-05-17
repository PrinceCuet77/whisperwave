import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Replace, CalendarHeart, Edit } from 'lucide-react';
import { sideBarItems } from '@/lib/constants';

type SideBarProps = {
  active: string;
};

const SideBar = ({ active }: SideBarProps) => {
  const commonCSS =
    'w-full py-6 rounded-none hover:bg-red-200 hover:text-red-800 flex justify-start gap-3 cursor-pointer hover:shadow-sm transition-all duration-200 ease-in-out';

  return (
    <article className='w-full sm:w-2/6 md:w-[230px] h-full border rounded-md flex flex-col'>
      {sideBarItems.map((Item) => (
        <Button
          key={Item.id}
          variant='ghost'
          className={cn(commonCSS, {
            'bg-red-200 text-red-800': active === Item.name.toLowerCase(),
          })}
          // onClick={() => handleTabs('orders')}
        >
          <Item.icon /> <span>{Item.name}</span>
        </Button>
      ))}
    </article>
  );
};

export default SideBar;
