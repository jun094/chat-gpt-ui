type PageTitleProps = {
  children: React.ReactNode;
};

function PageTitle({ children }: PageTitleProps) {
  return <h1 className="text-2xl my-8">{children}</h1>;
}

export default PageTitle;
