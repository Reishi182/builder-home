import HeroSection from "../components/HeroSection";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
export default function Home() {
  console.log(process.env.BASE_URL, process.env.PUBLIC_APIKEY);
  return (
    <>
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </>
  );
}
