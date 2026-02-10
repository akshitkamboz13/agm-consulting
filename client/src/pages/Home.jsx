import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="home-page">
            {/* Hero Section - Typography Led */}
            <section className="hero" style={{
                padding: '8rem 1rem 6rem',
                minHeight: '85vh',
                display: 'flex',
                alignItems: 'center',
                background: 'var(--bg-primary)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <span className="section-label" style={{ opacity: 0, animation: 'fadeIn 0.8s ease forwards' }}>
                        Strategic Advisory
                    </span>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 5.5rem)',
                        marginBottom: '2rem',
                        maxWidth: '900px',
                        lineHeight: '1.1',
                        opacity: 0,
                        animation: 'fadeInUp 0.8s ease 0.2s forwards'
                    }}>
                        Navigating uncertainty with <span style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', color: 'var(--text-secondary)' }}>clarity</span> and <span style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', color: 'var(--accent)' }}>precision</span>.
                    </h1>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '600px',
                        lineHeight: '1.8',
                        marginBottom: '3rem',
                        opacity: 0,
                        animation: 'fadeInUp 0.8s ease 0.4s forwards'
                    }}>
                        AGM Consulting partners with leaders to tackle their most critical challenges and capture their greatest opportunities.
                    </p>
                    <div style={{ opacity: 0, animation: 'fadeInUp 0.8s ease 0.6s forwards', display: 'flex', alignItems: 'center' }}>
                        <Link to="/contact" className="btn" style={{ marginRight: '1rem' }}>
                            Start a Conversation
                        </Link>
                        <Link to="/about" className="btn-outline" style={{ border: 'none', paddingLeft: 0, textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                            Read our Manifesto
                        </Link>
                    </div>
                </div>

                {/* Subtle Geometric Background Element */}
                <div style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-5%',
                    width: '40vw',
                    height: '40vw',
                    background: 'radial-gradient(circle, rgba(212, 163, 115, 0.05) 0%, rgba(255,255,255,0) 70%)',
                    zIndex: 1,
                    pointerEvents: 'none'
                }} />
            </section>

            {/* The Firm / Philosophy - Text Heavy & Serious */}
            <section style={{ padding: '6rem 2rem', background: 'white' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'start', gap: '4rem' }}>
                        <div>
                            <span className="section-label">The Firm</span>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Not just consultants. <br />Partners in craft.</h2>
                        </div>
                        <div>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                                We believe that true transformation doesn't come from templates or playbooks. It comes from deep inquiry, rigorous analysis, and a human-centric approach to problem-solving.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                                Founded on the principles of integrity and intellectual honesty, AGM separates signal from noise to deliver actionable insights that drive measurable value.
                            </p>
                            <Link to="/about" style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                fontSize: '0.95rem',
                                fontWeight: '600',
                                borderBottom: '1px solid var(--primary)',
                                paddingBottom: '2px'
                            }}>
                                Meet our leadership
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services / Capabilities - Grid Layout */}
            <section style={{ padding: '6rem 2rem', background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
                        <div>
                            <span className="section-label">Capabilities</span>
                            <h2 style={{ maxWidth: '600px' }}>Core areas of expertise</h2>
                        </div>
                        <Link to="/services" className="btn-outline" style={{ border: 'none', paddingLeft: 0, whiteSpace: 'nowrap' }}>View All</Link>
                    </div>

                    <div className="grid grid-3">
                        {[
                            { title: "Digital Transformation", desc: "Reimagining business models for the digital age." },
                            { title: "Operational Strategy", desc: "Optimizing currents for efficiency and resilience." },
                            { title: "Capital Allocation", desc: "Directing resources to high-yield opportunities." }
                        ].map((item, i) => (
                            <div key={i} className="card" style={{ background: 'var(--bg-primary)', border: 'none' }}>
                                <div style={{
                                    width: '40px',
                                    height: '1px',
                                    background: 'var(--accent)',
                                    marginBottom: '1.5rem'
                                }}></div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social Proof / Metrics - Subtle & Elegant */}
            <section style={{ padding: '6rem 2rem', background: 'var(--primary)', color: 'white' }}>
                <div className="container">
                    <span className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>Impact</span>
                    <div className="grid grid-3" style={{ textAlign: 'center', marginTop: '2rem' }}>
                        {[
                            { label: "Client Retention", value: "98%" },
                            { label: "Assets Advised", value: "$500M+" },
                            { label: "Global Offices", value: "4" }
                        ].map((stat, i) => (
                            <div key={i} style={{ padding: '2rem' }}>
                                <div style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '4rem',
                                    color: 'var(--accent)',
                                    lineHeight: 1
                                }}>{stat.value}</div>
                                <div style={{
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    fontSize: '0.85rem',
                                    marginTop: '1rem',
                                    color: 'rgba(255,255,255,0.8)'
                                }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '8rem 2rem', textAlign: 'center', background: 'white' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Let's build the future.</h2>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                        Whether you're looking to pivot, scale, or stabilize, we're ready to stand beside you.
                    </p>
                    <Link to="/contact" className="btn" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                        Inquire About Partnership
                    </Link>
                </div>
            </section>

            <style>{`
                @keyframes fadeIn {
                    to { opacity: 1; }
                }
                @keyframes fadeInUp {
                    to { opacity: 1; transform: translateY(0); }
                }
                h1, p, .btn, .btn-outline {
                    transform: translateY(20px);
                }
            `}</style>
        </div>
    );
}
