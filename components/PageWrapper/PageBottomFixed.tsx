type PageBottomFixedProps = {
  children: React.ReactNode;
};

function PageBottomFixed({ children }: PageBottomFixedProps) {
  return (
    <section className="sticky bottom-0 flex items-center w-full px-4 h-[70px] bg-slate-300">
      {children}
    </section>
  );
}

export default PageBottomFixed;
