import "./styles.css";

function Button() {
    const isGetButton = true;
    const butttonType = 'button';

    return (
        <button 
            className="main-btn" type={butttonType}>
            {isGetButton ? "Click me!" : "false"}
        </button>
    );
}

export default Button;
