/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';
// import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar style={{ background: 'white' }} variant="light">
      <Container>
        <Navbar.Brand href="/">theTechAcademy</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/tutors/viewTutors">View Tutors</Nav.Link>
          <Nav.Link href="/tutors/new">Create a Tutor</Nav.Link>
          <Nav.Link href="/tutors/manageTutors">Manage Tutors</Nav.Link>
          <Nav.Link href="/bookings/mybookings">My Bookings</Nav.Link>
        </Nav>
        <Button variant="primary" type="button" size="md" className="copy-btn" onClick={signOut}>
          Sign Out
        </Button>

      </Container>
    </Navbar>
  );
}
