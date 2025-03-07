import './Button.scss';

type ButtonProps = {
  title: string;
  id?: string;
  className?: string;
  onButtonClick: () => void;
};

function Button({ title, id, className, onButtonClick }: ButtonProps) {
  return (
    <button id={id} className={`Button ${className}`} onClick={onButtonClick}>
      {title}
    </button>
  );
}

export default Button;
