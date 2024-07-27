document.addEventListener('DOMContentLoaded', () => {
    // Employment data and timeline population
    const employmentData = [
        {
            title: "Analytics Engineer",
            company: "Tripleseat",
            duration: "June 2023 - Present",
            details: "Lead the deployment and development of the analytics infrastructure",
            responsibilities: [
                "Serviced all departments' data needs and modeled data using dbt + Snowflake",
                "Built data models off Salesforce data for finance to report on ARR",
                "Modeled data for the sales department measuring the sales pipeline, sales funnel, and win rates",
                "Modeled data for the marketing department to track first-touch/last-touch attribution & performance by channel",
                "Created a company-wide KPI dashboard that tracked 60 KPIs over 10 departments"
            ]
        },
        {
            title: "Analytics Engineer",
            company: "Mammoth Growth",
            duration: "July 2021 - June 2023",
            details: "Worked on 8 different SaaS/E-commerce client projects focusing on analytics engineering, BI, and data migrations",
            responsibilities: [
                "Implemented dbt project with a 3 layer modeling architecture that facilitated data driven analytics",
                "Leveraged dbt Cloud to schedule jobs, CI/CD, and alerting",
                "Designed a scalable, self-serving layer of LookML data models leveraged by 10 end-users",
                "Built dashboards that provided descriptive and diagnostic analytics"
            ]
        },
        {
            title: "Data Specialist",
            company: "BBVA",
            duration: "July 2019 - July 2021",
            details: "Worked in data operations, specializing in KPI development",
            responsibilities: [
                "Developed a machine learning pipeline for optimizing CD renewal strategy",
                "Modeled KPI metrics and developed a reporting process in Google Sheets & Google Slides",
                "Performed Ad Hoc SQL reporting and data auditing"
            ]
        }
    ];

    const timelineContainer = document.getElementById('timeline');

    if (timelineContainer) {
        employmentData.forEach((entry) => {
            const div = document.createElement('div');
            div.className = 'timeline-entry';
            div.innerHTML = `
                <h3>${entry.title} at ${entry.company}</h3>
                <p><strong>Duration:</strong> ${entry.duration}</p>
                <p>${entry.details}</p>
                <ul>
                    ${entry.responsibilities.map(responsibility => `<li>${responsibility}</li>`).join('')}
                </ul>
            `;
            timelineContainer.appendChild(div);
        });
    }

    // Intersection Observer for fade-in effect
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Add active class to current page's nav link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});
