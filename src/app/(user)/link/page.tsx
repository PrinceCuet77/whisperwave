import SideBar from "@/components/side-bar";

const MessageLinkPage = () => {
  return (
    <section className='flex flex-col sm:flex-row gap-4 my-3'>
      <SideBar active='link' />
      <article className='w-full sm:w-4/6 md:w-5/6 h-full flex flex-col'></article>
    </section>
  );
};

export default MessageLinkPage;
