type HeaderProps = {
  title: string;
};
const Header = ({ title }: HeaderProps) => {
  return (
    <>
      <h1 className="text-4xl font-bold mt-4 mb-2">{title}</h1>
    </>
  );
};
export default Header;
