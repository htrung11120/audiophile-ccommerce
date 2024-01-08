export default function ImageCard({ galleries }) {
  const gallery1 = galleries.first;
  const gallery2 = galleries.second;
  const gallery3 = galleries.third;

  return (
    <div className=" flex flex-col gap-8 sm:flex-row">
      <div className="flex flex-wrap gap-8 sm:flex-row">
        <img
          src={gallery1.mobile}
          className="h-44 w-full rounded-lg sm:w-auto"
          alt="Gallery 1 Mobile"
        />
        <img
          src={gallery2.mobile}
          className="h-44 w-full rounded-lg sm:w-auto"
          alt="Gallery 2 Mobile"
        />
      </div>

      <img
        src={gallery3.mobile}
        className="h-96 rounded-lg"
        alt="Gallery 3 Mobile"
      />
    </div>
  );
}
