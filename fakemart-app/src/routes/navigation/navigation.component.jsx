import "./navigation.styles.scss";
import {
  Navbar,
  NavbarBrand,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";


import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as MamasShoppingLogo } from "../../assets/MamasShopping.svg";
import logo from "../../assets/Fakemart.png";

const Footer = () => (
  <Fragment>
    <footer>
      <p>Copyright © 2022 Fakemart. All Rights Reserved.</p>
    </footer>
  </Fragment>
);

const Navigation = () => {
  return (
    <Fragment>
      <Navbar className="color-nav" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} width="50%" height="40%" alt="Fakemart" />
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/sign-in">Sign-In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Navigation;
