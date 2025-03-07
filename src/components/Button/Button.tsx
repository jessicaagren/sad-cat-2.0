import { forwardRef } from 'react';
import './Button.scss';

type ButtonProps = {
  title: string;
  id?: string;
  className?: string;
  onButtonClick: () => void;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ title, id, className, onButtonClick }, ref) => {
    return (
      <button
        id={id}
        className={`Button ${className}`}
        onClick={onButtonClick}
        ref={ref}>
        {title}
      </button>
    );
  }
);

export default Button;
