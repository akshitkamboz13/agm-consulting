import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            // TODO: check if api is actually up before sending
            const response = await fetch('https://agm-consulting.onrender.com/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            console.error('Submission error:', err);
            setStatus('error');
            setErrorMessage(err.message);
        }
    };

    return (
        <div className="contact-page py-5">
            <div className="container">
                <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'start' }}>
                    <div>
                        <h1 style={{ marginBottom: '1.5rem' }}>Get in Touch</h1>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                            Have a project in mind or want to learn more about our services? Fill out the form and our team will get back to you within 24 hours.
                        </p>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ marginBottom: '0.5rem' }}>Office</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>123 Innovation Drive<br />Tech City, TC 90210</p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ marginBottom: '0.5rem' }}>Email</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>hello@AMGconsulting.com</p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ marginBottom: '0.5rem' }}>Phone</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>+1 (555) 123-4567</p>
                        </div>
                    </div>

                    <div className="card" style={{ padding: '2.5rem' }}>
                        {status === 'success' ? (
                            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                                <div style={{ fontSize: '3rem', color: '#22c55e', marginBottom: '1rem' }}>✓</div>
                                <h3>Message Sent!</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>Thanks for reaching out. We'll be in touch shortly.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="btn btn-outline"
                                    style={{ marginTop: '1.5rem' }}
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@company.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>

                                {status === 'error' && (
                                    <div style={{ color: '#ef4444', marginBottom: '1rem', fontSize: '0.9rem' }}>
                                        Error: {errorMessage}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="btn"
                                    disabled={status === 'submitting'}
                                    style={{ width: '100%', opacity: status === 'submitting' ? 0.7 : 1 }}
                                >
                                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
