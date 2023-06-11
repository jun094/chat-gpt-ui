import cn from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'lg' | 'md' | 'sm';
  color?: 'primary' | 'dark';
  disabled?: boolean;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const {
    children,
    size = 'md',
    color = 'primary',
    disabled,
    className,
    ...rest
  } = props;

  return (
    <button
      className={cn(
        className,
        'box-border flex flex-row items-center justify-center rounded-[40px]',
        // size style
        {
          'px-[16px] h-[52px] text-[16px]': size === 'lg',
          'px-[12px] h-[40px] text-[14px]': size === 'md',
          'px-[8px] h-[28px] text-[12px]': size === 'sm',
        },

        // color style
        {
          'bg-red-400 text-white': color === 'primary',
          'bg-stone-800 text-white': color === 'dark',
        },
        disabled && 'opacity-40'
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
