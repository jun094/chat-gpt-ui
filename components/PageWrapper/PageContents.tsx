type PageContentsProps = {
  children: React.ReactNode;
};

function PageContents({ children }: PageContentsProps) {
  return <section className="flex-1">{children}</section>;
}

export default PageContents;
