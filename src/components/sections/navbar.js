function Navbar({ currentPage, handlePageChange }) {
    return <header>
    <h1>Brendan Shelton</h1>
    <nav>
    <a href="#about"
    onClick={() => handlePageChange('About')}
    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
    >About me</a>

    <a href="#work"
    onClick={() => handlePageChange('Projects')}
    className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
    >Portfolio</a>

    <a href="#contact"
    onClick={() => handlePageChange('Contact')}
    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
    >Contact</a>

    <a href="#resume"
    onClick={() => handlePageChange('Resume')}
    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
    >Resume</a>
    </nav>
  </header>
}

export default Navbar;