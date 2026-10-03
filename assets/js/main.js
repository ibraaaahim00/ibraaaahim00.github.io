/**
 * =========================================================================
 * IBRAHIM ALAA — PORTFOLIO MAIN SCRIPT
 * =========================================================================
 * Orchestrates dynamic component rendering, project case study modals,
 * category filters, and interactive developer features.
 * =========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    initHeroPillars();
    initSkills('all');
    initProjects('all');
    initExperience();
    initGithubRepos();
    initNavigation();
    initContactForm();
    initModalEvents();
});

// -------------------------------------------------------------
// 1. Render Hero Engineering Pillars
// -------------------------------------------------------------
function initHeroPillars() {
    const container = document.getElementById('heroPillarsContainer');
    if (!container || !portfolioData.pillars) return;

    container.innerHTML = portfolioData.pillars.map((pillar, index) => {
        const icons = [
            `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
            `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
            `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"/></svg>`,
            `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`
        ];

        return `
            <div class="pillar-card">
                <div class="pillar-header">
                    <span class="pillar-icon">${icons[index % icons.length]}</span>
                    <h3 class="pillar-title">${escapeHTML(pillar.title)}</h3>
                </div>
                <p class="pillar-desc">${escapeHTML(pillar.description)}</p>
            </div>
        `;
    }).join('');
}

// -------------------------------------------------------------
// 2. Render Skills Matrix
// -------------------------------------------------------------
function initSkills(category = 'all') {
    const container = document.getElementById('skillsContainer');
    const tabsContainer = document.getElementById('skillsTabs');
    if (!container || !portfolioData.skills) return;

    if (tabsContainer && tabsContainer.children.length === 0) {
        const categories = [
            { key: 'all', label: 'All Technical Skills' },
            { key: 'backend', label: 'Backend & Core' },
            { key: 'database', label: 'Database & Concurrency' },
            { key: 'apis', label: 'APIs & Security' },
            { key: 'architecture', label: 'Architecture & Patterns' },
            { key: 'frontend', label: 'Frontend Integration' },
            { key: 'tools', label: 'Tools & Workflow' }
        ];

        tabsContainer.innerHTML = categories.map(cat => `
            <button class="skill-tab-btn ${cat.key === category ? 'active' : ''}" data-cat="${cat.key}">
                ${cat.label}
            </button>
        `).join('');

        tabsContainer.querySelectorAll('.skill-tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                tabsContainer.querySelectorAll('.skill-tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                initSkills(btn.dataset.cat);
            });
        });
    }

    let skillsList = [];
    if (category === 'all') {
        Object.values(portfolioData.skills).forEach(arr => {
            skillsList = skillsList.concat(arr);
        });
    } else if (portfolioData.skills[category]) {
        skillsList = portfolioData.skills[category];
    }

    container.innerHTML = skillsList.map(skill => `
        <div class="skill-card">
            <div>
                <div class="skill-name">${escapeHTML(skill.name)}</div>
                <div class="skill-level">${escapeHTML(skill.level)}</div>
            </div>
            <span class="skill-tag">${escapeHTML(skill.tag)}</span>
        </div>
    `).join('');
}

// -------------------------------------------------------------
// 3. Render Projects Grid with Case Studies
// -------------------------------------------------------------
function initProjects(filter = 'all') {
    const container = document.getElementById('projectsGrid');
    const filterContainer = document.getElementById('projectFilters');
    if (!container || !portfolioData.projects) return;

    if (filterContainer && filterContainer.children.length === 0) {
        const filters = [
            { key: 'all', label: 'All Case Studies' },
            { key: 'Clean Architecture', label: 'Clean Architecture' },
            { key: 'Full Stack', label: 'Full Stack' },
            { key: 'Concurrency & APIs', label: 'Concurrency & Locking' },
            { key: 'Enterprise System', label: 'Production Workflows' },
            { key: 'CMS & APIs', label: 'CMS & Content' }
        ];

        filterContainer.innerHTML = filters.map(f => `
            <button class="filter-btn ${f.key === filter ? 'active' : ''}" data-filter="${f.key}">
                ${f.label}
            </button>
        `).join('');

        filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                initProjects(btn.dataset.filter);
            });
        });
    }

    const filtered = filter === 'all'
        ? portfolioData.projects
        : portfolioData.projects.filter(p => p.category === filter);

    container.innerHTML = filtered.map(project => `
        <article class="project-card" data-id="${project.id}">
            <div class="project-card-header">
                <span class="project-card-badge">${escapeHTML(project.badge)}</span>
                <h3 class="project-card-title">${escapeHTML(project.title)}</h3>
                <div class="project-card-subtitle">${escapeHTML(project.subtitle)}</div>
                <p class="project-card-desc">${escapeHTML(project.summary)}</p>
                
                <div class="project-tech-pills">
                    ${project.caseStudy.technologies.slice(0, 5).map(t => `<span class="tech-pill">${escapeHTML(t)}</span>`).join('')}
                    ${project.caseStudy.technologies.length > 5 ? `<span class="tech-pill">+${project.caseStudy.technologies.length - 5} more</span>` : ''}
                </div>
            </div>

            <div class="project-card-actions">
                <button class="btn btn-primary btn-sm view-case-study" data-id="${project.id}">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                    View Case Study
                </button>
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                    GitHub
                </a>
            </div>
        </article>
    `).join('');

    container.querySelectorAll('.view-case-study').forEach(btn => {
        btn.addEventListener('click', () => {
            const projectId = btn.dataset.id;
            openCaseStudyModal(projectId);
        });
    });
}

// -------------------------------------------------------------
// 4. Render Work Experience Timeline
// -------------------------------------------------------------
function initExperience() {
    const container = document.getElementById('experienceTimeline');
    if (!container || !portfolioData.experience) return;

    container.innerHTML = portfolioData.experience.map(item => `
        <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-card">
                <div class="timeline-header">
                    <div>
                        <h3 class="timeline-role">${escapeHTML(item.role)}</h3>
                        <div class="timeline-company">${escapeHTML(item.company)}</div>
                    </div>
                    <span class="timeline-period">${escapeHTML(item.period)}</span>
                </div>
                <ul class="timeline-highlights">
                    ${item.highlights.map(h => `<li>${escapeHTML(h)}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

// -------------------------------------------------------------
// 5. Render Selected GitHub Repositories
// -------------------------------------------------------------
function initGithubRepos() {
    const container = document.getElementById('githubReposGrid');
    if (!container) return;

    const repos = [
        {
            name: "awfar",
            desc: "Scalable e-commerce and delivery REST API architected with Repository Pattern, Service Layer, and strict Order State Machines.",
            lang: "PHP / Laravel",
            color: "#4F5D95",
            url: "https://github.com/ibraaaahim00/awfar"
        },
        {
            name: "civicfix",
            desc: "Municipal citizen issue tracking platform featuring a Laravel REST API, React 18/Vite SPA, and automated audit histories.",
            lang: "PHP / React",
            color: "#61DAFB",
            url: "https://github.com/ibraaaahim00/civicfix"
        },
        {
            name: "clinic_booking",
            desc: "Clinical appointment booking system using MySQL pessimistic concurrency locking (lockForUpdate) and Next.js interface.",
            lang: "PHP / TypeScript",
            color: "#3178C6",
            url: "https://github.com/ibraaaahim00/clinic_booking"
        },
        {
            name: "ALAMAAL",
            desc: "Healthcare & consulting platform for children with special needs, featuring MyFatoorah payment gateway and treatment plan workflows.",
            lang: "PHP / Blade",
            color: "#F05340",
            url: "https://github.com/ibraaaahim00/ALAMAAL"
        },
        {
            name: "ezzhal",
            desc: "Bilingual Laravel website and content dashboard for a water-delivery service, with editable sections, uploads, FAQs, reviews, and contact messages.",
            lang: "PHP / Laravel",
            color: "#d6a768",
            url: "https://github.com/ibraaaahim00/ezzhal"
        }
    ];

    container.innerHTML = repos.map(repo => `
        <a href="${repo.url}" target="_blank" rel="noopener noreferrer" class="github-repo-card">
            <div>
                <div class="repo-header">
                    <span class="repo-title">${escapeHTML(repo.name)}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </div>
                <p class="repo-desc">${escapeHTML(repo.desc)}</p>
            </div>
            <div class="repo-meta">
                <span>
                    <span class="repo-lang-dot" style="background-color: ${repo.color};"></span>
                    ${escapeHTML(repo.lang)}
                </span>
                <span>Public Repository</span>
            </div>
        </a>
    `).join('');
}

// -------------------------------------------------------------
// 6. Interactive Technical Case Study Modal
// -------------------------------------------------------------
function openCaseStudyModal(projectId) {
    const project = portfolioData.projects.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById('caseStudyModal');
    const title = document.getElementById('modalTitle');
    const subtitle = document.getElementById('modalSubtitle');
    const body = document.getElementById('modalBody');
    const githubBtn = document.getElementById('modalGithubBtn');

    title.textContent = project.title;
    subtitle.textContent = project.badge;
    githubBtn.href = project.github;

    body.innerHTML = `
        <section class="modal-section">
            <h4 class="modal-section-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                The Real-World Challenge
            </h4>
            <p class="modal-section-text">${escapeHTML(project.caseStudy.problem)}</p>
        </section>

        <section class="modal-section">
            <h4 class="modal-section-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Architectural Solution
            </h4>
            <p class="modal-section-text">${escapeHTML(project.caseStudy.solution)}</p>
        </section>

        <section class="modal-section">
            <h4 class="modal-section-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
                System Architecture & Data Flow
            </h4>
            <div class="decision-card">
                <div class="decision-card-desc mono" style="color: #38BDF8;">
                    ${escapeHTML(project.caseStudy.architecture)}
                </div>
            </div>
        </section>

        <section class="modal-section">
            <h4 class="modal-section-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                Key Implemented Features
            </h4>
            <ul class="modal-features-list">
                ${project.caseStudy.keyFeatures.map(f => `<li>${escapeHTML(f)}</li>`).join('')}
            </ul>
        </section>

        <section class="modal-section">
            <h4 class="modal-section-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                Notable Engineering Decisions
            </h4>
            ${project.caseStudy.engineeringDecisions.map(d => `
                <div class="decision-card">
                    <div class="decision-card-title">${escapeHTML(d.title)}</div>
                    <div class="decision-card-desc">${escapeHTML(d.description)}</div>
                </div>
            `).join('')}
        </section>

        <section class="modal-section">
            <h4 class="modal-section-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                Real Implementation Code Extract
            </h4>
            <div class="code-block-wrapper">
                <div class="code-block-header">
                    <span>source repository snippet</span>
                    <span>PHP / Laravel</span>
                </div>
                <pre class="code-content"><code>${escapeHTML(project.caseStudy.codeSnippet)}</code></pre>
            </div>
        </section>

        <section class="modal-section" style="margin-bottom: 0;">
            <h4 class="modal-section-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                Verified Technology Stack
            </h4>
            <div class="project-tech-pills" style="margin-bottom: 0;">
                ${project.caseStudy.technologies.map(t => `<span class="tech-pill">${escapeHTML(t)}</span>`).join('')}
            </div>
        </section>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function initModalEvents() {
    const modal = document.getElementById('caseStudyModal');
    const closeBtn = document.getElementById('modalCloseBtn');
    if (!modal) return;

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// -------------------------------------------------------------
// 7. Navigation & Mobile Menu
// -------------------------------------------------------------
function initNavigation() {
    const toggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
            });
        });
    }

    // Scroll Spy for Nav links
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 120;
            const sectionId = section.getAttribute('id');
            const link = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (link) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            }
        });
    });
}

// -------------------------------------------------------------
// 8. Contact Form Handling (Client-side validation & simulated submission)
// -------------------------------------------------------------
function initContactForm() {
    const form = document.getElementById('contactForm');
    const toast = document.getElementById('toast');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.querySelector('[name="name"]').value.trim();
        const email = form.querySelector('[name="email"]').value.trim();
        const subject = form.querySelector('[name="subject"]').value.trim();
        const message = form.querySelector('[name="message"]').value.trim();

        if (!name || !email || !subject || !message) {
            alert('Please fill out all required fields.');
            return;
        }

        const recipient = portfolioData.personal.socials.email;
        if (!recipient) {
            if (toast) {
                toast.textContent = 'Add your email in portfolio-data.js before using the form.';
                toast.style.display = 'flex';
                setTimeout(() => { toast.style.display = 'none'; }, 4500);
            }
            return;
        }

        // Display Success Toast
        if (toast) {
            toast.textContent = `Thank you, ${name}! Your message has been prepared.`;
            toast.style.display = 'flex';
            setTimeout(() => {
                toast.style.display = 'none';
            }, 4500);
        }

        // Construct mailto link as direct action
        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;
        window.location.href = mailtoLink;

        form.reset();
    });
}

// -------------------------------------------------------------
// Utility: Escape HTML for security against injection
// -------------------------------------------------------------
function escapeHTML(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
