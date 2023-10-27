import Image from "next/image";

type Props = {
  image: string;
};

const GalleryHotel = ({ image }: Props) => {
  return (
    <div className="relative h-[600px]">
      <Image
        src={image}
        fill={true}
        sizes="100%"
        alt="hotel-gallery"
        className="w-full h-[600px] object-cover"
      />
    </div>
  );
};

export default GalleryHotel;
