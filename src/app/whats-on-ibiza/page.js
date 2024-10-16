import IbizaHero from "@src/components/sections/WhatsOnIbiza/hero";
import IbizaClubNights from "@src/components/sections/WhatsOnIbiza/clubNights";
import IbizaRestaurants from "@src/components/sections/WhatsOnIbiza/restaurants";
import IbizaBeaches from "@src/components/sections/WhatsOnIbiza/beaches";

export default function WhatsOnIbiza() {
  return (
    <>
      <IbizaHero />
      <IbizaClubNights />
      <IbizaRestaurants />
      <IbizaBeaches />
    </>
  );
}
