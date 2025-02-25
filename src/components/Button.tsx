
type ButtonProps = {
    children: string;
    clicked: boolean;
    onClick: () => void;
}

function Button({ children, clicked, onClick }: ButtonProps) {

  
  return (
    <button
      type="button"
      className={`btn btn-${clicked ? "secondary" : "primary"}`}
      disabled={clicked}
      onClick={onClick}
    >
      {clicked ? "Cargando...":children}
    </button>   
  );
}

export default Button