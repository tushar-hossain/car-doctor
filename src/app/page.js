import Banner from "./components/Banner";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <div className="my-10">
      {/* banner section */}
      <Banner />
      {/* service */}
      <ServicesSection />
    </div>
  );
}
