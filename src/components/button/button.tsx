import './button.css';

const CustomButton = (props:any) => {
  return <button className={"btn-" + props.theme}>{props.children}</button>;
};

export default CustomButton;