import BeachSearch from "./blocks/BeachSearch";
import BeachList from "./blocks/BeachList";

export default function IbizaBeaches() {
  return (
    <section className="py-20 relative bg-cover" id="beaches">
      <div className="row w-[80%] mx-auto">
        <h2 className="text-4xl font-light mb-14">Beaches</h2>
        <div className="resturant-wrap">
          <BeachSearch />
          <BeachList />
        </div>
      </div>
    </section>
  );
}
