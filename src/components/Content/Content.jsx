import { FaUserAlt } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import CheckIconMobile from "../../assets/mobile/checkpoint.svg";
import { useSpring, animated } from "react-spring";

const itemContent = [
  {
    id: 1,
    icon: CheckIconMobile,
    text: "Card report sent to your phone every week",
  },
  {
    id: 2,
    icon: CheckIconMobile,
    text: "No external fees",
  },
  {
    id: 3,
    icon: CheckIconMobile,
    text: "Set speding limits and restrictions",
  },
];

const Content = () => {
  const animationCustomer = useSpring({
    customers: 10245,
    from: { customers: 0 },
  });

  const animationCard = useSpring({
    card: 12045,
    from: { card: 0 },
  });
  return (
    <section className="flex-col md:flex md:flex-row ">
      <div className="mx-[70px] text-bold p-8 rounded-[20px] bg-gradient-to-b from-white/40 to-transparent shadow-md md:w-[30%] md:ml-[30%]">
        <div className="flex gap-x-[24px] items-center justify-center">
          <FaUserAlt size={"24px"} />
          <div className="text-26 md:text-32 md:text-center md:flex-1">
            <animated.p className={"p-0 leading-none"}>
              {animationCustomer.customers.to((val) => Math.floor(val))}
            </animated.p>
            <span className="text-13 font-semibold md:text-20">Customer</span>
          </div>
        </div>
        <div className="flex gap-x-[24px] items-center mt-[24px] justify-center">
          <BsFillCreditCardFill size={"24px"} />
          <div className="text-26 md:text-32 md:text-center md:flex-1">
            <animated.p className={"p-0 leading-none"}>
              {animationCard.card.to((val) => Math.floor(val))}
            </animated.p>
            <span className="text-13 font-semibold md:text-20">
              Cards Issued
            </span>
          </div>
        </div>
      </div>

      <div className="text-13 flex flex-col w-[100%] mt-[90px] font-semibold gap-y-[51px]  md:mt-[0]">
        {itemContent.map((item) => (
          <p
            key={item.id}
            className="flex gap-8 ml-[70px] mr-[29px] items-center"
          >
            <img src={item.icon} alt="" />
            <span>{item.text}</span>
          </p>
        ))}
      </div>
    </section>
  );
};

export default Content;
