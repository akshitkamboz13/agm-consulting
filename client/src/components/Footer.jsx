import { Link } from 'react-router-dom';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer style={{ borderTop: '1px solid #eaeaea', backgroundColor: '#fafafa' }}>
            <div className="footer-content" style={{ padding: '4rem 2rem' }}>

                {/* Brand Column */}
                <div className="footer-section">
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '800', letterSpacing: '-0.5px' }}>nexus inc.</h3>
                    <p style={{ color: '#666', fontSize: '0.95rem', maxWidth: '300px', marginTop: '1rem' }}>
                        Helping ambitious companies scale faster through clearer strategy and better tech.
                    </p>
                    <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                        {/* social placeholders */}
                        <span style={{ opacity: 0.5, cursor: 'not-allowed' }}>Twitter</span>
                        <span style={{ opacity: 0.5, cursor: 'not-allowed' }}>LinkedIn</span>
                    </div>
                </div>

                {/* Navigation */}
                <div className="footer-section">
                    <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#888', letterSpacing: '1px', marginBottom: '1.25rem' }}>Explore</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <li><Link to="/services" style={{ color: '#333' }}>Our Expertise</Link></li>
                        <li><Link to="/about" style={{ color: '#333' }}>The Firm</Link></li>
                        <li><Link to="/contact" style={{ color: '#333' }}>Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="footer-section">
                    <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#888', letterSpacing: '1px', marginBottom: '1.25rem' }}>Visit Us</h4>
                    <address style={{ fontStyle: 'normal', color: '#333', lineHeight: '1.6' }}>
                        123 Innovation Drive<br />
                        Floor 4, Suite 402<br />
                        Tech City, TC 90210
                    </address>
                    <p style={{ marginTop: '1rem' }}>
                        <a href="mailto:hello@nexus.inc" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>hello@nexus.inc</a>
                    </p>
                </div>

            </div>

            
        </footer>
    );
}

export default Footer;
