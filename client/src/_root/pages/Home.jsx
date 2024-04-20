import { useContext } from "react";
import { UserContext } from "../../store/user-context";

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <div className="flex flex-1">
        <div className="flex flex-1 py-10 px-5 md:px-8 min-[810px]:px-2 min-[900px]:px-8 lg:p-10 overflow-scroll custom-scrollbar">
          <div className="flex flex-col gap-2 md:gap-3">
            <h2 className="h3-bold md:h2-bold text-left w-full">Welcome {user?.accountType} {user?.name || 'User'}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
