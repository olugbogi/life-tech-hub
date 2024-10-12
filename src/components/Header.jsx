import JoinBtnSm from "./Buttons/JoinBtnSm";

function Header() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4 py-3 bg-header md:flex-row">
        <h1 className="text-xs text-center text-white md:text-sm font-unbounded">
          Join the Life Tribe to get started in your Tech Journey!!!
        </h1>
        <JoinBtnSm />
      </div>
    </div>
  );
}

export default Header;
