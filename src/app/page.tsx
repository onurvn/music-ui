import FeaturedCourses from "@/app/components/featuredCourses";
import Footer from "@/app/components/footer";
import HeroSection from "@/app/components/heroSection";
import Instructors from "@/app/components/instructors";
import MusicSchoolTestimonials from "@/app/components/testimonialCards";
import UpcomingWebinars from "@/app/components/upcomingWebinars";
import WhyChooseUs from "@/app/components/whyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </div>
  );
}