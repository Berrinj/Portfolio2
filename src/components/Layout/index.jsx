import { Outlet } from "react-router-dom";
import { Nav } from "./Nav";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";

function Layout() {
  return (
    <>
      <div className="content max-w-[1100px] flex flex-col grow mx-auto h-auto box-border font-zilla bg-firefly">
        <Nav />
        <Header />

        <main className="flex h-auto box-border border-x-2 border-b-2 border-selago grow">
          <Sidebar />
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
