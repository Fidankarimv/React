import "./index.scss";
const PirimaryButton = (props) => {
const handleClick = () => {

    console.log("clicked");
  };
  return (
    <>
      <button
        className={props.bg === "violet" ? "bg-violet" : ""}
        onClick={() => handleClick()}
      >
        {props.btnText}
      </button>
    </>
  );
  };

export default PirimaryButton;