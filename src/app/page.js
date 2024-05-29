import Banner from "@/components/Banner";
import Bestsell from "@/components/Bestsellingproduct/Bestsell";
import Information from "@/components/Information/Information";
import Layout from "@/components/Layout/Layout";
import NewArrivals from "@/components/NewArrivals";
import Offers from "@/components/Offers";
import PhoneOfTheYear from "@/components/Phoneoftheyear/PhoneOfTheYear";
import SpecialOffers from "@/components/Specialoffers/SpecialOffers";


export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <Information />
        <Offers />
        <NewArrivals/>
        <Bestsell/>
        <PhoneOfTheYear/>
        <SpecialOffers/>
      </Layout>
    </>
  );
}
