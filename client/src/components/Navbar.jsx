import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

// TODO: refactor this mess later, maybe move to its own file?
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // quick toggle
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        // console.log('menu toggled', !isOpen);
    };

    return (
        <nav className="navbar">
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '1rem 2rem' }}>

                {/* Logo area */}
                <Link to="/" className="logo" style={{ fontSize: '1.6rem', letterSpacing: '-0.5px' }}>
                    nexus<span style={{ color: '#64748b', fontWeight: '400' }}>inc.</span>
                </Link>

                {/* Mobile trigger */}
                <button
                    className="mobile-menu-btn"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    style={{ fontSize: '1.8rem', paddingTop: '5px' }} // pixel pushing alignment
                >
                    {isOpen ? '✕' : '☰'}
                </button>

                {/* Links */}
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li>
                        <NavLink to="/" onClick={() => setIsOpen(false)} style={({ isActive }) => ({ color: isActive ? 'var(--primary)' : 'inherit' })}>
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/services" onClick={() => setIsOpen(false)} style={({ isActive }) => ({ color: isActive ? 'var(--primary)' : 'inherit' })}>
                            Expertise
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/about" onClick={() => setIsOpen(false)} style={({ isActive }) => ({ color: isActive ? 'var(--primary)' : 'inherit' })}>
                            Agency
                        </NavLink>
                    </li>

                    {/* CTA Button */}
                    <li>
                        <NavLink
                            to="/contact"
                            className="btn"
                            style={{
                                color: 'white',
                                padding: '0.6rem 1.25rem',
                                borderRadius: '50px', // rounded look feels more modern
                                boxShadow: '0 4px 14px 0 rgba(0,118,255,0.39)'
                            }}
                            onClick={() => setIsOpen(false)}
                        >
                            Let's Talk
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
