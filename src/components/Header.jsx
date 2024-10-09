import JoinBtnSm from "./Buttons/JoinBtnSm";

function Header() {
  return (
    <div>
      <div className="bg-secondary flex justify-center gap-4 items-center py-4">
        <h1 className="text-sm text-white font-unbounded">
          Join the Life Tribe to get started in your Tech Journey!!!
        </h1>
        <JoinBtnSm />
      </div>
    </div>
  );
}

export default Header;
