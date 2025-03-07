import { forwardRef } from 'react';
import './Button.scss';

type ButtonProps = {
  title: string;
  id?: string;
  className?: string;
  onButtonClick: () => void;
  onMouseEnter?: () => void;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ title, id, className, onButtonClick, onMouseEnter }, ref) => {
    return (
      <button
        id={id}
        className={`Button ${className}`}
        onClick={onButtonClick}
        onMouseEnter={onMouseEnter}
        ref={ref}>
        {title}
      </button>
    );
  }
);

export default Button;
