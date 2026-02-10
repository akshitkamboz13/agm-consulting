import { Link } from 'react-router-dom';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer style={{ borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-primary)' }}>
            <div className="container" style={{ padding: '5rem 1rem 2rem' }}>

                <div className="grid grid-3" style={{ marginBottom: '4rem', alignItems: 'start' }}>
                    {/* Brand Column */}
                    <div>
                        <Link to="/" style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1.5rem',
                            fontWeight: '700',
                            color: 'var(--primary)',
                            display: 'block',
                            marginBottom: '1rem'
                        }}>
                            AGM<span style={{ color: 'var(--accent)', fontWeight: '400', fontStyle: 'italic' }}>Consulting</span>
                        </Link>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', maxWidth: '300px' }}>
                            Strategic advisory for the world's most ambitious organizations. We turn complexity into clarity.
                        </p>
                    </div>

                    {/* Links */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div>
                            <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>Firm</h4>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li className="mb-2"><Link to="/about" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>About Us</Link></li>
                                <li className="mb-2"><Link to="/services" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Capabilities</Link></li>
                                <li className="mb-2"><Link to="/contact" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Careers</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>Insights</h4>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li className="mb-2"><Link to="#" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Reports</Link></li>
                                <li className="mb-2"><Link to="#" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Journal</Link></li>
                                <li className="mb-2"><Link to="#" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Press</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter / Contact */}
                    <div>
                        <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>Global Headquarters</h4>
                        <address style={{ fontStyle: 'normal', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            Agn Hub<br />
                            Jaipur<br />
                            Rajasthan, IN 302018
                        </address>
                        <a href="mailto:info.agnhub@gmail.com" style={{ fontSize: '0.9rem', color: 'var(--primary)', textDecoration: 'underline' }}>info.agnhub@gmail.com</a>
                    </div>
                </div>

                
            </div>
        </footer>
    );
}

export default Footer;
