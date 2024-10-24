import Header from "./component/header";
import Section1 from "./sec1-phone/page"
import Section2 from "./sec2/page";
import Section3 from "./sec3/page";
import Section4 from  "./sec4/page";
import Section5 from "./sec5/page";
import Section6 from "./sec6/page";
import Section7 from  "./sec7/page";
import Footer from "./component/footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Footer/>

    </div>
  );
}
