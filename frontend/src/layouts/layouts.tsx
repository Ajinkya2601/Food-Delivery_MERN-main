// children: React.ReactNode: This is defining a property of the Props object. The children property is a special property in React that allows components to be passed as data to other components, essentially allowing for component composition. The type of children is React.ReactNode, which is a type provided by React that can accept any kind of React node (element, string, number, fragment, etc.) as children.

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

type Props = {
  children: React.ReactNode; 
  showHero?: boolean; 
};

const Layout = ({ children,showHero = false }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
     {showHero && <Hero/>}
      <div className="container mx-auto flex-1 py-10">{children}</div>
      <Footer/>
    </div>
  );
};

export default Layout;
