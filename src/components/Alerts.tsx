import Button from "./Button";

interface AlertProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: AlertProps) => (
  <>
    <div
      className="alert alert-primary alert-dismissible fade show"
      role="alert"
    >
      {children}
      <Button color="secondary" onClick={onClose}>
        Close
      </Button>
    </div>
  </>
);

export default Alert;
