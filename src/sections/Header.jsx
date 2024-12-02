import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonComp from "../components/ButtonComp";
import { faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className="ml-[5.5rem] fixed  right-6 top-4 max-lg:hidden">
      <ButtonComp
        img={<FontAwesomeIcon icon={faVolumeXmark} />}
        width={"w-5"}
        height={"h-5"}
        padding={"p-5"}
        color="text-[rgb(135_124_108)]"
        background={"bg-[rgb(245_234_220)]"}
      />
    </div>
  );
};

export default Header;
