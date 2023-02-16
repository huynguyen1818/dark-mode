import Cards from "../../assets/desktop/isocard.svg";
const Slogan = () => {
  return (
    <section className="text-36 my-14 font-extrabold md:my-28 md:text-48 md:flex md:items-center md:justify-center md:gap-20">
      <div className="text-center">
        <p className="">
          Earn <span className="text-purple-300">More</span>
        </p>
        <p className="">Pay Less</p>
        <button className="text-20 px-6 py-[6px] font-bold mt-[27px] bg-purple-500 rounded-[14px] hover:bg-pink-500 transition-all duration-300 md:text-25 md:px-8 md:py-[10px] text-white">
          Start
        </button>
      </div>

      <div className="mt-[69px] md:mt-0">
        <img src={Cards} alt="" />
      </div>
    </section>
  );
};

export default Slogan;
