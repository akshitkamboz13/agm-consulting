import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ServiceDetail() {
    const { id } = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/services/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error('Service not found');
                return res.json();
            })
            .then((data) => {
                setService(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="loading">Loading details...</div>;
    if (error) return <div className="container py-5 text-center"><h2>Service not found</h2><Link to="/services" className="btn">Back to Services</Link></div>;

    return (
        <div className="service-detail-page py-5">
            <div className="container">
                <Link to="/services" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                    ← Back to Services
                </Link>

                <div style={{ maxWidth: '900px' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>{service.title}</h1>
                    <p style={{ fontSize: '1.25rem', color: '#475569', marginBottom: '3rem', lineHeight: '1.8' }}>
                        {service.detailedDescription}
                    </p>

                    <div style={{ background: '#f8fafc', padding: '2.5rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
                        <h3 style={{ marginBottom: '1.5rem' }}>Common Use Cases</h3>
                        <div className="grid grid-2">
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {service.useCases.slice(0, Math.ceil(service.useCases.length / 2)).map((useCase, idx) => (
                                    <li key={idx} style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                                        <span style={{ color: 'var(--primary)' }}>•</span> {useCase}
                                    </li>
                                ))}
                            </ul>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {service.useCases.slice(Math.ceil(service.useCases.length / 2)).map((useCase, idx) => (
                                    <li key={idx} style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                                        <span style={{ color: 'var(--primary)' }}>•</span> {useCase}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div style={{ marginTop: '4rem', textAlign: 'center', background: '#eff6ff', padding: '3rem', borderRadius: '12px' }}>
                        <h2 style={{ marginBottom: '1rem' }}>Interested in this service?</h2>
                        <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                            Let's discuss how we can tailor this solution to your specific business needs.
                        </p>
                        <Link to="/contact" className="btn" style={{ padding: '1rem 2.5rem' }}>
                            Request a Consultation
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
