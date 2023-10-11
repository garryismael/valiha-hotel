import CategoryCard from "../CategoryCard";

const CategorySection = () => {
  return (
    <section className="container mx-auto">
      <div className="title">Nos Chambres Et Appartements</div>
      <div className="flex items-center justify-between content-between gap-8 flex-wrap">
        {Array.from({ length: 6 }).map((_v, i) => (
          <CategoryCard
            key={i}
            category={{
              adult: 0,
              bigBed: 2,
              id: "2",
              image: "/assets/images/rooms/1deluxeDouble.webp",
              kid: 2,
              smallBed: 2,
              title: "Standard",
              type: "Hotel With Breakfast",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
