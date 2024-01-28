import Image from "next/legacy/image";

const Sponsors = () => {
  // All sponsor images from assets folder
  const sponsorLogo = [
    "/assets/images/hooli-logo.png",
    "/assets/images/lyft-logo.png",
    "/assets/images/dont-know-logo.png",
    "/assets/images/stripe-logo.png",
    "/assets/images/aws-logo.png",
    "/assets/images/discord-logo.png",
  ];

  return (
    <div className="sponsor_bg">
      {sponsorLogo.map?.((eachSponsorImage, index) => (
        <div key={index} className="sponsor_image">
          <Image
            src={eachSponsorImage}
            alt="sponsor images"
            objectFit="contain"
            layout="fill"
          />
        </div>
      ))}
    </div>
  );
};

export default Sponsors;
