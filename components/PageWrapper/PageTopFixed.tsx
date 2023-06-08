type PageTopFixedProps = {
  children: React.ReactNode;
};

function PageTopFixed({ children }: PageTopFixedProps) {
  return (
    <section className="sticky top-0 flex items-center w-full h-[56px] px-4 bg-slate-400">
      {children}
    </section>
  );
}

export default PageTopFixed;
