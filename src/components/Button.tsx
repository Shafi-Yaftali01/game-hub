interface ButtonProps {
  color?:
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ color = "primary", children, onClick }: ButtonProps) => (
  <button className={`btn btn-${color}`} onClick={onClick}>
    {children}
  </button>
);

export default Button;
