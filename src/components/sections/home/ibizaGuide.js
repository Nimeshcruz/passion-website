import GuideCat from "./blocks/GuideCat";
import GuideSearch from "./blocks/GuideSearch";
import GuideTable from "./blocks/GuideTable";

const cat = [
  { title: "Club Nights", url: "#" },
  { title: "Restaurants", url: "#" },
  { title: "Beaches", url: "#" },
  { title: "Staff Picks", url: "#" },
];

export default function HomeGuide() {
  return (
    <section className="py-20 relative bg-cover bg-[url('/images/ibiza-guide-cover.webp')]">
      <div className="row w-[90%] md:w-[80%] mx-auto">
        <div className="title flex justify-between mb-8">
          <h2 className="text-4xl lg:text-4xl font-semibold lg:font-light mb-1">
            Ibiza Guide
          </h2>
          <GuideCat cat={cat} />
        </div>
        <div className="guide-search mb-8 relative z-10">
          <GuideSearch cat={cat} />
        </div>
        <div className="guide-details hidden lg:block">
          <GuideTable />
        </div>
      </div>
    </section>
  );
}

