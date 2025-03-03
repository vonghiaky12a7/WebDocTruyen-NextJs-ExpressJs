"use client"
import TruyenList from "@/app/components/StoryList";
import Banner from "@/app/components/Banner";
import Slider from "@/app/components/Slider";
export default function Home() {
  return (
    <section>
      <Banner />
      <Slider />
      <TruyenList />
    </section>
  );
}
