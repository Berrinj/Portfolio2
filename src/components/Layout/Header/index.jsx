export const Header = () => {
  return (
    <div className="header h-46 md:h-64 sm:bg-[url(assets/images/headerimg.png)] bg-contain bg-no-repeat bg-right sm:border-e-2 border-t-2 border-selago ">
      <div className="header--text-container w-full sm:w-9/11 lg:w-6/7 bg-selago uppercase clip-right-angle h-full relative">
        <p className="bg-firefly text-selago w-fit font-thin absolute top-0 right-0 sm:left-0">
          Front-end Utvikler
        </p>
        <div className="name w-fit h-full m-auto sm:m-0 px-10 flex flex-col justify-center">
          <p className="text-firefly text-sm">Hallo, mitt navn er</p>
          <h1 className="text-firefly w-fit text-6xl/10 md:text-8xl/16 tracking-widest">
            Marte
          </h1>
          <h1 className="bg-firefly text-selago w-fit text-6xl sm:text-7xl lg:text-8xl ">
            Lilleberre
          </h1>
        </div>
      </div>
      {/* <div className="header--img-container border-t-2 border-e-2 border-selago w-1/4 clip-left-angle">
        <img src={headerbackground} />
      </div> */}
    </div>
  );
};
