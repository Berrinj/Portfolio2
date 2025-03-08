import { useState } from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const StyledLiItem = styled.li`
  background-color: var(--color-selago);
  color: var(--color-firefly);
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: var(--color-firefly);
    color: var(--color-selago);
  }
`;

export const Nav = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleMoreClick = () => {
    setIsMoreOpen(!isMoreOpen);
  };

  const handleScrollTo = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }
    setIsMoreOpen(false);
  };

  return (
    <div className="nav w-full flex justify-between p-2 sm:p-4 fixed top-0 left-0 bg-firefly z-10 sm:z-0 sm:relative md:bg-transparent">
      <p className="uppercase text-white text-left sm:text-center grow opacity-50">
        <Link to="/">BerreMarte.no</Link>
      </p>
      <nav className="">
        <ul className="flex gap-4 flex-wrap">
          <Link to="/">
            <StyledLiItem className="">Hjem</StyledLiItem>
          </Link>
          <StyledLiItem onClick={handleMoreClick}>Meny</StyledLiItem>
          {isMoreOpen && (
            <div className="dropdown absolute top-10 sm:top-14 right-0 z-30 sm:z-0 w-full sm:w-92 h-46 md:h-64 bg-firefly p-10 text-firefly flex flex-col justify-center items-center  border-2 border-selago ">
              <IoMdClose
                className="close-btn win-btn absolute top-4 right-4 cursor-pointer text-selago"
                onClick={handleMoreClick}
              />
              <ul className="text-center w-full flex flex-col items-center sm:items-end">
                <li
                  className="win-btn mb-5 w-[50%] bg-selago cursor-pointer"
                  onClick={() => handleScrollTo("projects")}
                >
                  Prosjekter
                </li>
                <li
                  className="win-btn mb-5 w-[50%] bg-selago cursor-pointer"
                  onClick={() => handleScrollTo("contact")}
                >
                  Kontakt
                </li>
                <li
                  className="win-btn w-[50%] bg-selago cursor-pointer"
                  onClick={() => handleScrollTo("education")}
                >
                  Utdanning
                </li>
              </ul>
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
};
