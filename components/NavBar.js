/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import Link from 'next/link';
import {
  Navbar, Container, Nav,
} from 'react-bootstrap';
// import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">theTechAcademy</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/viewTutors">View Tutors</Nav.Link>
          <Nav.Link href="/mytutors">My Tutors</Nav.Link>
          <Nav.Link href="/mybookings">My Bookings</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
