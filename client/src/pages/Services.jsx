import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/services')
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch services');
                return res.json();
            })
            .then((data) => {
                setServices(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="loading">Loading our expertise...</div>;
    if (error) return <div className="loading" style={{ color: 'red' }}>Error: {error}</div>;

    return (
        <div className="services-page py-5">
            <div className="container">
                <div className="text-center mb-4" style={{ maxWidth: '700px', margin: '0 auto 4rem' }}>
                    <h1 className="mb-2">Our Services</h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                        We offer a comprehensive suite of consulting services designed to transform your business from the inside out.
                    </p>
                </div>

                <div className="grid grid-2" style={{ gap: '2.5rem'}}>
                    {services.map((service) => (
                        <div key={service._id} className="card" style={{}}>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1e293b' }}>{service.title}</h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>
                                {service.shortDescription}
                            </p>
                            <div style={{ marginTop: 'auto' }}>
                                <Link
                                    to={`/services/${service._id}`}
                                    className="btn btn-outline"
                                    style={{ width: '100%', textAlign: 'center' }}
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
