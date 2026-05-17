import { BeforeAppointment } from "@/components/site/before-appointment";
import { BookingPolicies } from "@/components/site/booking-policies";
import { Footer } from "@/components/site/footer";
import { HeroTriptych } from "@/components/site/hero-triptych";
import { HoursContact } from "@/components/site/hours-contact";
import { ImportantDetails } from "@/components/site/important-details";
import { MeetArtist } from "@/components/site/meet-artist";
import { ThankYouBooking } from "@/components/site/thank-you-booking";
import { TopNav } from "@/components/site/top-nav";

export default function Home() {
  return (
    <>
      <TopNav />
      <main>
        <HeroTriptych />
        {/* Slight separation between hero and Meet Your Artist */}
        <div aria-hidden className="h-10 sm:h-16" />
        <MeetArtist />
        <HoursContact />
        <BookingPolicies />
        <ImportantDetails />
        <BeforeAppointment />
        <ThankYouBooking />
      </main>
      <Footer />
    </>
  );
}
