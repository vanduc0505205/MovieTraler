import rating from "../assets/rating.png";
import ratingHalf from "../assets/rating-half.png";
import banner from "../assets/banner.jpg";
import iconPlay from "../assets/play-button.png";
const Banner = () => {
  return (
    <div className="w-full h-[700px] bg-center bg-no-repeat bg-cover relative bg-banner">
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-30" />

      <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20">
        <div className="flex flex-col space-y-5 items-baseline w-[50%]">
          <p className=" text-white bg-gradient-to-r from-red-700 to-red-300 py-1 px-3 text-md">
            Tv Show
          </p>
          <div className="flex flex-col space-y-4">
            <h2 className="text-white text-[40px] font-bold">
              Hài Nữa Rồi Đấy
            </h2>
          </div>
          <div className="flex items-center space-x-3">
            <img className="w-8 h-8" src={rating} alt="" />
            <img className="w-8 h-8" src={rating} alt="" />
            <img className="w-8 h-8" src={rating} alt="" />
            <img className="w-8 h-8" src={rating} alt="" />
            <img className="w-8 h-8" src={ratingHalf} alt="" />
          </div>
          <p className="text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            quibusdam ullam dolores, animi quod repellendus laudantium veritatis
            accusamus blanditiis iusto, nihil voluptate aliquam ratione et est
            inventore error. Quia, exercitationem. Debitis quo provident quod et
            esse nemo tenetur, dolore consequatur eum, quidem error quam natus
            aperiam earum rem ipsum? Asperiores doloribus pariatur officiis
            reiciendis delectus repellat laudantium deserunt in ex.
          </p>
          <div className="flex items-center space-x-4">
            <button className="p-3 text-white bg-black font-bold text-sm">
              Chi Tiet
            </button>
            <button className="p-3 text-white bg-red-500 font-bold text-sm">
              Xem phim
            </button>
          </div>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <div className="w-[300px] h-[500px] relative group cursor-pointer">
            <img src={banner} alt="" className="w-full h-full object-cover" />
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <img src={iconPlay} alt="" className="w-16 h-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
