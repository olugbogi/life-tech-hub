import BecomeBtn from "../Buttons/BecomeBtn";
import JoinBtn from "../Buttons/JoinBtn";

function Buttons() {
  return (
    <div>
      <div className="flex justify-center items-center gap-3">
        <BecomeBtn />
        <JoinBtn />
      </div>
    </div>
  );
}

export default Buttons;
