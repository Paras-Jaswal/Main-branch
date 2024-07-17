import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Header() {
  return (
    <section className='search-menu'>
    <Navbar>
      <Container fluid>
        <Navbar.Brand >Market Portfolio</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#11304B" height="24" viewBox="0 0 24 24" width="24"><script xmlns=""/>
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>
        <input type='text' className='search-input' placeholder='Search Portfolio and Families'/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </section>
  );
}

export default Header;