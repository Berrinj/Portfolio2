import { Outlet } from "react-router-dom";
import { Nav } from "./Nav";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";

function Layout() {
  return (
    <>
      <Nav />
      <div className="content bg-firefly max-w-[1100px] mx-auto h-auto box-border font-zilla">
        <Header />

        <main className="flex h-auto box-border border-x-2 border-b-2 border-selago">
          <Sidebar />
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
