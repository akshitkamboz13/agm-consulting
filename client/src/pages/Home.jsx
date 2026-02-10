import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch services for the overview section
        fetch('http://localhost:5000/api/services')
            .then((res) => {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.json();
            })
            .then((data) => {
                setServices(data.slice(0, 3)); // Just show top 3
                setLoading(false);
            })
            .catch((err) => {
                console.error('Failed to fetch services:', err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero" style={{
                background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                padding: '6rem 2rem',
                textAlign: 'center'
            }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', letterSpacing: '-1px' }}>
                        Strategic Growth for <span style={{ color: 'var(--primary)' }}>Modern Business</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: '1.7' }}>
                        We help forward-thinking companies navigate digital transformation, optimize operations, and unlock new revenue streams.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link to="/contact" className="btn" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                            Start Your Transformation
                        </Link>
                        <Link to="/services" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                            Explore Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="services-section" style={{ padding: '5rem 2rem' }}>
                <div className="container">
                    <div className="text-center mb-4">
                        <h2 style={{ marginBottom: '1rem' }}>Our Expertise</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>Comprehensive solutions tailored to your industry needs.</p>
                    </div>

                    {loading ? (
                        <div className="loading">Loading insights...</div>
                    ) : (
                        <div className="grid grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            {services.map((service) => (
                                <div key={service._id} className="card">
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{service.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                                        {service.shortDescription}
                                    </p>
                                    <Link to={`/services/${service._id}`} style={{ fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                        Learn more <span>→</span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="text-center" style={{ marginTop: '3rem' }}>
                        <Link to="/services" className="btn btn-outline">View All Services</Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section style={{ background: '#1e293b', color: 'white', padding: '5rem 2rem' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center'}}>
                        <div>
                            <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Why Industry Leaders Trust Nexus</h2>
                            <p style={{ color: '#94a3b8', marginBottom: '2rem', fontSize: '1.1rem' }}>
                                We don't just deliver reports; we deliver results. Our team of veteran consultants and engineers work as an extension of your team.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    'Proven track record with Fortune 500s',
                                    'End-to-end implementation capabilities',
                                    'Data-driven decision making framework',
                                    'Agile methodology adapted for enterprise',
                                ].map((item, i) => (
                                    <li key={i} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <span style={{ color: '#22c55e', fontSize: '1.2rem' }}>✓</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                            <div>
                                <div style={{ fontSize: '4rem', fontWeight: '700', color: '#3b82f6', marginBottom: '0.5rem' }}>98%</div>
                                <p style={{ color: '#cbd5e1', marginBottom: '2rem' }}>Client Retention Rate</p>
                            </div>

                            <div>
                                <div style={{ fontSize: '4rem', fontWeight: '700', color: '#f97316', marginBottom: '0.5rem' }}>10+</div>
                                <p style={{ color: '#cbd5e1' }}>Years of Excellence</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '6rem 2rem', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '700px' }}>
                    <h2 style={{ marginBottom: '1.5rem' }}>Ready to Accelerate Growth?</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
                        Schedule a free 30-minute discovery call with our principal consultants.
                    </p>
                    <Link to="/contact" className="btn" style={{ padding: '1rem 2.5rem', fontSize: '1.2rem' }}>
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    );
}
