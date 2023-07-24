import Footer from "./Footer";
import Navbar from "./Navbar";
interface Props {
  children?: React.ReactNode;
}
const PublicLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default PublicLayout;
