import { Navbar, DarkThemeToggle } from "flowbite-react";

function Nav() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link className="mt-2.5" href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link className="mt-2.5" href="#">
          About
        </Navbar.Link>
        <Navbar.Link className="mt-2.5" href="#">
          Services
        </Navbar.Link>
        <Navbar.Link className="mt-2.5" href="#">
          Pricing
        </Navbar.Link>
        <Navbar.Link className="mt-2.5" href="#">
          Contact
        </Navbar.Link>
        <Navbar.Link>
          <Navbar.Brand>
            <DarkThemeToggle />
          </Navbar.Brand>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;
