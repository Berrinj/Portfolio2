export const Header = () => {
  return (
    <div className="header h-64 bg-[url(assets/images/headerimg.png)] bg-contain bg-no-repeat bg-right border-e-2 border-t-2 border-selago ">
      <div className="header--text-container w-6/7 bg-selago uppercase clip-right-angle h-full relative">
        <p className="bg-firefly text-selago w-fit font-thin absolute top-0 left-0">
          Front-end Developer
        </p>
        <div className="name w-fit h-full ps-10 flex flex-col justify-center">
          <h1 className="text-firefly w-fit text-7xl/12 tracking-widest">
            Marte
          </h1>
          <h1 className="bg-firefly text-selago w-fit text-7xl ">Lilleberre</h1>
        </div>
      </div>
      {/* <div className="header--img-container border-t-2 border-e-2 border-selago w-1/4 clip-left-angle">
        <img src={headerbackground} />
      </div> */}
    </div>
  );
};
