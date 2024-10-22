import { useNavigate } from "react-router-dom";

function LoginButton() {
  const navigate = useNavigate();

  const handleClickLoginButton = function() {
    navigate('calendar/year:month:day');
  };

  return (
    <>
      <button
        className="border-2 border-gray-300"
        onClick={handleClickLoginButton}
      >
        Login
      </button>
    </>
  );
}

export default LoginButton;
