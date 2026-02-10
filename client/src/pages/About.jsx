export default function About() {
    return (
        <div className="about-page">
            <div className="container" style={{ padding: '4rem 2rem' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 className="text-center" style={{ marginBottom: '3rem' }}>About Nexus Consulting</h1>

                    <div style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Our Mission</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                            At Nexus, we believe that technology should be an enabler, not a bottleneck. Our mission is to bridge the gap between complex business challenges and cutting-edge technological solutions. We exist to help organizations navigate uncertainty, optimize their operations, and build a resilient foundation for the future.
                        </p>
                    </div>

                    <div style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Who We Are</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                            Founded in 2015, Nexus Consulting started as a boutique strategy firm in Tech City. Over the last decade, we have evolved into a full-service digital transformation partner, serving clients across finance, healthcare, retail, and manufacturing.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                            Our team consists of former CTOs, data scientists, product managers, and enterprise architects who bring real-world experience to every engagement. We don't just advise; we build, deploy, and scale.
                        </p>
                    </div>

                    <div className="card" style={{ background: '#f8fafc', border: 'none' }}>
                        <h3 style={{ marginBottom: '1.5rem' }}>Nexus by the Numbers</h3>
                        <div className="grid grid-3" style={{ gap: '2rem' }}>
                            <div>
                                <strong style={{ display: 'block', fontSize: '2rem', color: 'var(--primary)' }}>200+</strong>
                                <span style={{ color: 'var(--text-secondary)' }}>Projects Delivered</span>
                            </div>
                            <div>
                                <strong style={{ display: 'block', fontSize: '2rem', color: 'var(--primary)' }}>50+</strong>
                                <span style={{ color: 'var(--text-secondary)' }}>Expert Consultants</span>
                            </div>
                            <div>
                                <strong style={{ display: 'block', fontSize: '2rem', color: 'var(--primary)' }}>4</strong>
                                <span style={{ color: 'var(--text-secondary)' }}>Global Offices</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
