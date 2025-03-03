import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const StyledLiItem = styled.li`
  background-color: var(--color-selago);
  color: var(--color-firefly);
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
`;

export const Nav = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const handleMoreClick = () => {
    setIsMoreOpen(!isMoreOpen);
  };
  return (
    <div className="nav w-full flex justify-center relative p-4">
      <p className="uppercase text-white text-center grow">BerreMarte.no</p>
      {/* <nav className="absolute top-4 right-4"> */}
      <nav className="">
        <ul className="flex gap-4 flex-wrap">
          <Link to="/">
            <StyledLiItem className="">Home</StyledLiItem>
          </Link>
          <StyledLiItem onClick={handleMoreClick}>More</StyledLiItem>
          {isMoreOpen && (
            <div className="dropdown absolute top-14 right-0 z-30 sm:z-0 w-full sm:w-92 h-46 md:h-64 bg-firefly p-10 text-firefly flex flex-col justify-center items-center  border-2 border-selago ">
              <IoMdClose
                className="close-btn win-btn absolute top-4 right-4 cursor-pointer text-selago"
                onClick={handleMoreClick}
              />
              <ul className="text-center w-full flex flex-col items-center sm:items-end">
                <li className="win-btn mb-5 w-[50%] bg-selago cursor-pointer">
                  Projects
                </li>
                <li className="win-btn mb-5 w-[50%] bg-selago cursor-pointer">
                  Contact
                </li>
                <li className="win-btn w-[50%] bg-selago cursor-pointer">
                  Education
                </li>
              </ul>
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
};
