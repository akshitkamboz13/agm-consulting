import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for navbar border
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '1.25rem 2rem' }}>

                {/* Logo - Serif and elegant */}
                <Link to="/" className="logo" style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: 'var(--primary)',
                    letterSpacing: '-0.02em',
                    textDecoration: 'none'
                }}>
                    AGM<span style={{ color: 'var(--accent)', fontWeight: '400', fontStyle: 'italic' }}>Consulting</span>
                </Link>

                {/* Mobile trigger */}
                <button
                    className="mobile-menu-btn"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    style={{ fontSize: '1.5rem', border: 'none', background: 'none', cursor: 'pointer' }}
                >
                    {isOpen ? '✕' : '—'}
                </button>

                {/* Links */}
                <ul className={`nav-links ${isOpen ? 'open' : ''}`} style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}>
                    <li>
                        <NavLink to="/" onClick={() => setIsOpen(false)} style={({ isActive }) => ({ color: isActive ? 'var(--primary)' : 'var(--text-secondary)', fontWeight: '500' })}>
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/services" onClick={() => setIsOpen(false)} style={({ isActive }) => ({ color: isActive ? 'var(--primary)' : 'var(--text-secondary)', fontWeight: '500' })}>
                            Expertise
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/about" onClick={() => setIsOpen(false)} style={({ isActive }) => ({ color: isActive ? 'var(--primary)' : 'var(--text-secondary)', fontWeight: '500' })}>
                            Firm
                        </NavLink>
                    </li>

                    {/* CTA Button - Subtle Outline */}
                    <li>
                        <NavLink
                            to="/contact"
                            className="btn-outline"
                            style={{
                                padding: '0.5rem 1.5rem',
                                borderRadius: 'var(--radius-sm)',
                                fontSize: '0.9rem'
                            }}
                            onClick={() => setIsOpen(false)}
                        >
                            Inquire
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
