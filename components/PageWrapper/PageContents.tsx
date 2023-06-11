type PageContentsProps = {
  children: React.ReactNode;
};

function PageContents({ children }: PageContentsProps) {
  return <section className="flex-1 w-full">{children}</section>;
}

export default PageContents;
