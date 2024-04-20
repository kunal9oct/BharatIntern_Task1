import { Link, useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
    navigate("/sign-in");
  };

  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="/assets/images/Register Here.png"
            alt="logo"
            width={210}
            height={350}
          />
        </Link>

        <div className="flex gap-4">
          <button
            className="shad-button_ghost"
            onClick={(e) => handleLogout(e)}
          >
            <img src="/assets/icons/logout.svg" alt="logout" />
          </button>
          <Link to={`/`} className="flex-center gap-3">
            <img
              src={"/assets/icons/profile-placeholder.svg"}
              alt="profile"
              className="h-8 w-8 rounded-full"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
