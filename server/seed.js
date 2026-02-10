const mongoose = require('mongoose');
require('dotenv').config();
const Service = require('./models/Service');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/nexus_consulting';

const seedData = [
    {
        title: 'Digital Transformation Strategy',
        shortDescription: 'End-to-end digital transformation roadmaps for enterprises looking to modernize operations and customer experience.',
        detailedDescription:
            'We help organizations navigate the complexities of digital transformation by assessing current capabilities, identifying gaps, and building a phased roadmap. Our approach covers technology stack modernization, process automation, and change management to ensure your team adopts new tools effectively. We work closely with stakeholders across departments to align digital initiatives with business objectives, reducing risk and maximizing ROI.',
        useCases: [
            'Legacy system modernization for mid-size manufacturing firms',
            'Cloud migration strategy for financial services',
            'Customer experience overhaul for retail chains',
            'Workflow automation for HR and operations teams',
        ],
    },
    {
        title: 'Data Analytics & Business Intelligence',
        shortDescription: 'Turn raw data into actionable insights with custom dashboards, reporting pipelines, and predictive models.',
        detailedDescription:
            'Our data analytics practice helps businesses unlock the value hidden in their data. We design and implement data warehouses, build interactive dashboards, and develop predictive models tailored to your industry. Whether you need real-time monitoring of KPIs or deep-dive analysis for strategic planning, our team brings the technical expertise and domain knowledge to deliver results. We work with tools like Power BI, Tableau, and custom Python/R solutions.',
        useCases: [
            'Sales forecasting for e-commerce platforms',
            'Customer churn prediction for SaaS companies',
            'Operational efficiency dashboards for logistics',
            'Market trend analysis for investment firms',
        ],
    },
    {
        title: 'Cloud Infrastructure & DevOps',
        shortDescription: 'Design, deploy, and manage scalable cloud infrastructure with CI/CD pipelines and monitoring.',
        detailedDescription:
            'We architect cloud-native solutions on AWS, Azure, and GCP that are built for scale, security, and cost efficiency. Our DevOps engineers set up automated deployment pipelines, infrastructure-as-code templates, and comprehensive monitoring stacks. From containerization with Docker and Kubernetes to serverless architectures, we tailor the approach to your workload requirements and team capabilities.',
        useCases: [
            'Multi-region deployment for global SaaS platforms',
            'Cost optimization audits for cloud spending',
            'CI/CD pipeline setup for development teams',
            'Disaster recovery and high availability planning',
        ],
    },
    {
        title: 'Cybersecurity & Risk Assessment',
        shortDescription: 'Comprehensive security audits, penetration testing, and compliance frameworks for enterprise protection.',
        detailedDescription:
            'Security threats evolve constantly, and so should your defense. Our cybersecurity team conducts thorough risk assessments, vulnerability scans, and penetration tests to identify weaknesses before attackers do. We also help implement compliance frameworks like SOC 2, ISO 27001, and GDPR, ensuring your organization meets regulatory requirements while maintaining strong security posture. Our ongoing monitoring solutions provide real-time threat detection.',
        useCases: [
            'SOC 2 compliance preparation for startups',
            'Penetration testing for fintech applications',
            'Security awareness training programs',
            'Incident response planning and tabletop exercises',
        ],
    },
    {
        title: 'Product Design & UX Consulting',
        shortDescription: 'User-centered design that drives engagement, from research and wireframes to high-fidelity prototypes.',
        detailedDescription:
            'Great products start with deep user understanding. Our UX consulting practice combines qualitative research methods, competitive analysis, and iterative design to create interfaces that users actually enjoy. We handle everything from initial discovery workshops and persona development to wireframing, prototyping, and usability testing. Our designers work hand-in-hand with your engineering team to ensure pixel-perfect implementation.',
        useCases: [
            'Mobile app redesign for improved retention',
            'Enterprise dashboard UX overhaul',
            'Design system creation for product teams',
            'Accessibility audit and remediation (WCAG 2.1)',
        ],
    },
    {
        title: 'IT Staff Augmentation',
        shortDescription: 'Scale your engineering team with vetted developers, architects, and project managers on flexible contracts.',
        detailedDescription:
            'Finding the right talent takes time you often don\'t have. Our staff augmentation service provides pre-vetted engineers, architects, and technical leads who can integrate with your existing team within days. We specialize in full-stack JavaScript, Python, cloud engineering, and data science roles. Whether you need a single senior developer for three months or a full squad for a year-long initiative, we match the right people with your specific technical and cultural requirements.',
        useCases: [
            'Rapid scaling for funded startups',
            'Backfilling key roles during parental leave',
            'Specialized expertise for short-term projects',
            'Building offshore development centers',
        ],
    },
];

async function seed() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Connected to MongoDB for seeding');

        // clear existing data
        await Service.deleteMany({});
        console.log('Cleared existing services');

        const created = await Service.insertMany(seedData);
        console.log(`Seeded ${created.length} services`);

        await mongoose.connection.close();
        console.log('Done. Connection closed.');
    } catch (err) {
        console.error('Seeding failed:', err.message);
        process.exit(1);
    }
}

seed();
