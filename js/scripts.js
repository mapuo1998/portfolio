import portfolioData from './data.js';

document.addEventListener('DOMContentLoaded', function () {
    // Populate the About Me section
    const aboutSection = document.querySelector('.about-text');
    aboutSection.innerText = portfolioData.about;

    // Variables for project navigation
    const projectsPerPage = 3;
    let currentPage = 0;

    // Populate the Projects section
    const projectsSection = document.querySelector('#projects');
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');
    projectsSection.appendChild(projectContainer);

    const renderProjects = (page) => {
        projectContainer.innerHTML = '';
        const start = page * projectsPerPage;
        const end = start + projectsPerPage;
        const projectsToShow = portfolioData.projects.slice(start, end);

        projectsToShow.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('project');
            projectDiv.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            `;
            projectContainer.appendChild(projectDiv);
        });
    };

    renderProjects(currentPage);

    // Project navigation
    const prevProjectButton = document.querySelector('#prevProject');
    const nextProjectButton = document.querySelector('#nextProject');

    prevProjectButton.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            renderProjects(currentPage);
        }
    });

    nextProjectButton.addEventListener('click', () => {
        if ((currentPage + 1) * projectsPerPage < portfolioData.projects.length) {
            currentPage++;
            renderProjects(currentPage);
        }
    });

    // Populate the Experience section
    const experienceSection = document.querySelector('#experience');
    portfolioData.experience.forEach(exp => {
        const expDiv = document.createElement('div');
        expDiv.classList.add('experience');
        expDiv.innerHTML = `
            <h3>${exp.title}</h3>
            <p>${exp.company}</p>
            <p>${exp.date}</p>
            <ul>
                ${exp.details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
        `;
        experienceSection.appendChild(expDiv);
    });

    // Populate the Skills section
    const skillsSection = document.querySelector('#skills ul');
    portfolioData.skills.forEach(skill => {
        const skillItem = document.createElement('li');
        skillItem.innerText = skill;
        skillsSection.appendChild(skillItem);
    });

    // Populate the Education section
    const educationSection = document.querySelector('#education');
    const eduDiv = document.createElement('div');
    eduDiv.classList.add('education');
    eduDiv.innerHTML = `
        <h3>${portfolioData.education.degree}</h3>
        <p>${portfolioData.education.institution}</p>
        <p>${portfolioData.education.date}</p>
        <p>${portfolioData.education.grade}</p>
    `;
    educationSection.appendChild(eduDiv);

    // Populate the Certifications section
    const certificationsSection = document.querySelector('#certifications ul');
    portfolioData.certifications.forEach(certification => {
        const certItem = document.createElement('li');
        certItem.innerText = certification;
        certificationsSection.appendChild(certItem);
    });

    // Populate the Contact section
    const contactSection = document.querySelector('#contact');
    contactSection.innerHTML = `
        <p>Email: <a href="mailto:${portfolioData.contact.email}">${portfolioData.contact.email}</a></p>
        <p>Phone: ${portfolioData.contact.phone}</p>
        <p>Location: ${portfolioData.contact.location}</p>
        <p>LinkedIn: <a href="${portfolioData.contact.linkedin}" target="_blank">${portfolioData.contact.linkedin}</a></p>
        <p>GitHub: <a href="${portfolioData.contact.github}" target="_blank">${portfolioData.contact.github}</a></p>
    `;
});
