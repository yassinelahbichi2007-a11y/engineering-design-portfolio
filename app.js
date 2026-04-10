// ==========================================
// PORTFOLIO APP LOGIC
// ==========================================

// Application State
let currentProjectId = null;

// DOM Elements
const mainContent = document.getElementById('main-content');
const projectsNavList = document.getElementById('projects-nav-list');
const navLinks = document.querySelectorAll('.nav-link');

// Identify current page
const currentPage = mainContent ? mainContent.dataset.page : 'home';

// Initialization
function init() {
    // Populate Global Texts
    document.title = portfolioData.siteName;
    document.getElementById('nav-brand').textContent = portfolioData.siteName;
    document.getElementById('author-name-footer').textContent = portfolioData.authorName;
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Populate Projects Dropdown in Navbar
    if (projectsNavList) {
        portfolioData.projects.forEach(project => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `project.html?id=${project.id}`;
            a.textContent = project.title;
            li.appendChild(a);
            projectsNavList.appendChild(li);
        });
    }

    // Set active link visually based on currentPage
    navLinks.forEach(link => {
        if (link) {
            link.classList.remove('active');
            if (link.dataset.route === currentPage && currentPage !== 'project') {
                link.classList.add('active');
            }
        }
    });

    if (currentPage === 'project') {
        const projLink = document.querySelector('#projects-dropdown > a');
        if (projLink) projLink.classList.add('active');
    }

    // Initial Render
    render();
}

// Render System
function render() {
    if (!mainContent) return;
    mainContent.innerHTML = ''; // Clear current content

    if (currentPage === 'home') {
        renderHome();
    } else if (currentPage === 'project') {
        const params = new URLSearchParams(window.location.search);
        currentProjectId = params.get('id') || portfolioData.projects[0].id;
        renderProject(currentProjectId);
    } else if (currentPage === 'position') {
        renderPosition();
    } else if (currentPage === 'references') {
        renderReferences();
    }
}

// View: Home
function renderHome() {
    const section = document.createElement('div');
    const { hero, purpose, contact } = portfolioData.home;
    
    // Generate Horizontal Project Cards
    const projectCardsHtml = portfolioData.projects.map(p => `
        <div class="project-card">
            <h3>${p.title}</h3>
            <p class="proj-desc">${p.description}</p>
            <button class="btn" style="width: 100%; margin-top: auto;" onclick="window.location.href='project.html?id=${p.id}'">View Project</button>
        </div>
    `).join('');

    section.innerHTML = `
        <!-- SECTION 1 - HERO -->
        <div class="hero-banner">
            <h1>${hero.name}</h1>
            <div class="hero-role">${hero.role}</div>
            ${hero.skills ? `<div class="hero-skills">${hero.skills}</div>` : ''}
            <p class="hero-desc" style="margin: 0 auto;">${hero.description}</p>
            <div style="display: flex; gap: var(--spacing-md); margin-top: var(--spacing-lg); justify-content: center; flex-wrap: wrap;">
                <button class="btn" onclick="document.getElementById('projects-section').scrollIntoView({behavior: 'instant'})">View Portfolio Projects</button>
                <button class="btn" onclick="window.location.href='position.html'">View Position Statement</button>
            </div>
        </div>
        
        <!-- SECTION 2 - PURPOSE -->
        <h2>${purpose.title}</h2>
        <div class="tech-section">
            <p>${purpose.content}</p>
            <p>${purpose.subContent}</p>
            <ul>${purpose.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
            <p>${purpose.footer}</p>
        </div>
        
        <!-- SECTION 3 - PROJECTS -->
        <h2 id="projects-section">Portfolio Projects</h2>
        <p class="section-intro">Selected projects demonstrating engineering design process and technical reasoning.</p>
        <div class="projects-grid">
            ${projectCardsHtml}
        </div>
        
        <!-- SECTION 4 - CONTACT -->
        <h2>${contact.title}</h2>
        <div class="tech-section" style="margin-bottom: 0;">
            <p><strong>Email:</strong> ${contact.email}</p>
            <p><strong>LinkedIn:</strong> <a href="${contact.linkedin}" style="color: var(--blue-accent); text-decoration: none;" target="_blank">www.linkedin.com/in/yassine-lahbichi-06a559243</a></p>
        </div>
    `;
    
    mainContent.appendChild(section);
}

// View: Position
function renderPosition() {
    const section = document.createElement('div');
    const { positionStatement } = portfolioData.home;
    
    // Generate sections HTML
    const sectionsHtml = positionStatement.sections.map(sec => {
        let contentHtml = `<p>${sec.content}</p>`;
        
        // Handle principles if they exist
        if (sec.principles) {
            const principlesHtml = sec.principles.map(p => {
                let pVisualsHtml = '';
                if (p.visuals) {
                    pVisualsHtml = p.visuals.map(v => {
                        if (v.contentHtml) {
                            return `<div class="evidence-custom-html" style="margin-top: var(--spacing-sm); margin-bottom: var(--spacing-sm); width: 100%;">${v.contentHtml}</div>`;
                        } else {
                            return `
                            <div class="evidence-img-container" style="margin-top: var(--spacing-sm); margin-bottom: var(--spacing-sm);">
                                <img src="${v.src}" alt="${v.caption}" style="width: 100%; height: auto; border: 1px dashed var(--blue-accent);">
                                <div class="evidence-caption" style="text-align: center;">${v.caption}</div>
                            </div>
                            `;
                        }
                    }).join('');
                }
                return `
                <div style="margin-bottom: var(--spacing-lg); padding-left: var(--spacing-md); border-left: 2px solid var(--blue-accent);">
                    <strong style="color: var(--text-primary); font-family: var(--font-head); margin-bottom: 4px; display: inline-block;">${p.name}</strong>
                    <p style="margin-top: 0; margin-bottom: var(--spacing-sm);">${p.desc}</p>
                    ${pVisualsHtml ? `<div class="evidence-gallery" style="grid-template-columns: 1fr;">${pVisualsHtml}</div>` : ''}
                </div>
                `;
            }).join('');
            contentHtml += `<div style="margin-top: var(--spacing-md);">${principlesHtml}</div>`;
        }

        // Handle generic section-level visuals if they exist
        if (sec.visuals) {
            const visualsHtml = sec.visuals.map(v => {
                if (v.contentHtml) {
                    return `<div class="evidence-custom-html" style="margin-top: var(--spacing-md); margin-bottom: var(--spacing-md); width: 100%;">${v.contentHtml}</div>`;
                } else {
                    return `
                    <div class="evidence-img-container" style="margin-top: var(--spacing-md); margin-bottom: var(--spacing-md);">
                        <img src="${v.src}" alt="${v.caption}" style="width: 100%; height: auto; border: 1px dashed var(--blue-accent);">
                        <div class="evidence-caption" style="text-align: center;">${v.caption}</div>
                    </div>
                    `;
                }
            }).join('');
            contentHtml += `<div class="evidence-gallery" style="grid-template-columns: 1fr;">${visualsHtml}</div>`;
        }

        return `
            <h2>${sec.title}</h2>
            <div class="tech-section">
                ${contentHtml}
            </div>
        `;
    }).join('');

    section.innerHTML = `
        <div class="page-hero page-hero-compact">
            <h1>${positionStatement.title}</h1>
            <p class="page-intro"><em>${positionStatement.intro}</em></p>
        </div>
        ${sectionsHtml}
    `;
    
    mainContent.appendChild(section);
}

// View: Project
function renderProject(projectId) {
    const project = portfolioData.projects.find(p => p.id === projectId);
    
    if (!project) {
        mainContent.innerHTML = '<h1>Project Not Found</h1>';
        return;
    }

    const section = document.createElement('div');
    const hasProblemContent = typeof project.problem === 'string'
        ? project.problem.trim() !== '' && project.problem.trim() !== '...'
        : Boolean(project.problem);
    
    // Generate HTML for Design Decisions
    const decisionsHtml = project.designDecisions.map(d => `<li>${d}</li>`).join('');
    
    // Generate HTML for Evidence Images
    const evidenceHtml = project.evidenceImages.map((src, index) => `
        <div class="evidence-img-container">
            <img src="${src}" alt="Evidence Image">
            <div class="evidence-caption">FIG. ${String(index + 1).padStart(2, '0')}</div>
        </div>
    `).join('');

    // Generate Tabs HTML
    const tabHeadersHtml = project.ctmfUsed.map((ctmf, i) => `
        <button class="tab-btn ${i === 0 ? 'active' : ''}" data-tabindex="${i}">
            ${ctmf.tabName}
        </button>
    `).join('');

    const tabContentsHtml = project.ctmfUsed.map((ctmf, i) => `
        <div class="tab-content ${i === 0 ? 'active' : ''}" data-tabindex="${i}">
            ${ctmf.title ? `<h2 class="tab-panel-title">${ctmf.title}</h2>` : ''}
            <p style="margin-bottom: 0;">${ctmf.content}</p>
        </div>
    `).join('');

    section.innerHTML = `
        <div class="page-hero page-hero-compact">
            <h1>${project.title}</h1>
            ${project.detailedTitle ? `<h2 class="page-subtitle">${project.detailedTitle}</h2>` : ''}
            ${project.subtitle ? `<p class="page-intro">${project.subtitle}</p>` : ''}
        </div>
        ${project.heroImage ? `
            <div class="feature-media">
                <img src="${project.heroImage}" alt="Project hero" style="max-width: 100%; height: auto; border-radius: 4px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
                <p class="feature-caption">${project.heroImageCaption || ''}</p>
            </div>
        ` : ''}
        
        ${hasProblemContent ? `
            ${project.problemTitle ? `<h2>${project.problemTitle}</h2>` : ''}
            <div class="tech-section">
                ${project.problem}
            </div>
        ` : ''}
        
        ${project.projectOverview ? `
            <h2>${project.projectOverview.title || 'Project Overview'}</h2>
            <div class="tech-section">
                <h3 style="color: var(--blue-accent); font-family: var(--font-head); margin-bottom: var(--spacing-sm);">${project.projectOverview.objectiveTitle || 'Objective'}</h3>
                <p>${project.projectOverview.objective}</p>
                
                <h3 style="color: var(--blue-accent); font-family: var(--font-head); margin-bottom: var(--spacing-sm); margin-top: var(--spacing-lg);">${project.projectOverview.constraintsTitle || 'Constraints'}</h3>
                <ul style="margin-bottom: var(--spacing-lg);">
                    ${project.projectOverview.constraints.map(c => `<li>${c}</li>`).join('')}
                </ul>
                
                <h3 style="color: var(--blue-accent); font-family: var(--font-head); margin-bottom: var(--spacing-sm);">${project.projectOverview.contributionTitle || 'My Contribution'}</h3>
                <p>${project.projectOverview.contribution}</p>
            </div>
        ` : ''}
        
        ${project.finalDesignSolution ? `
            <h2>${project.finalDesignSolution.title || 'Final Design Solution'}</h2>
            <div class="tech-section">
                <p>${project.finalDesignSolution.description}</p>
                <h3 style="color: var(--blue-accent); font-family: var(--font-head); margin-bottom: var(--spacing-sm); margin-top: var(--spacing-lg);">${project.finalDesignSolution.keyDecisionsTitle || 'Key Engineering Decisions'}</h3>
                <ul style="margin-bottom: var(--spacing-lg);">
                    ${project.finalDesignSolution.keyDecisions.map(d => `<li>${d}</li>`).join('')}
                </ul>
                <p style="margin-top: var(--spacing-lg); font-style: italic;">${project.finalDesignSolution.reflection}</p>
                ${project.finalDesignSolution.images ? `<div class="evidence-gallery" style="margin-top: var(--spacing-xl);">
                    ${project.finalDesignSolution.images.map(image => `
                        <div class="evidence-img-container">
                            <img src="${image.src}" alt="${image.caption}">
                            <div class="evidence-caption">${image.caption}</div>
                        </div>
                    `).join('')}
                </div>` : ''}
                ${project.finalDesignSolution.image ? `<div class="feature-media" style="margin-top: var(--spacing-xl);">
                    <img src="${project.finalDesignSolution.image}" alt="Final design solution" style="max-width: 50%; height: auto; border-radius: 4px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
                    <p class="feature-caption">${project.finalDesignSolution.imageCaption}</p>
                </div>` : ''}
            </div>
        ` : ''}
        
        ${project.engineeringAnalysis ? `
            <h2>${project.engineeringAnalysis.title || 'Engineering Analysis'}</h2>
            <div class="tech-section">
                <p>${project.engineeringAnalysis.intro || 'Structural performance was evaluated through:'}</p>
                <ul style="margin-bottom: var(--spacing-lg);">
                    ${project.engineeringAnalysis.evaluationMethods.map(m => `<li>${m}</li>`).join('')}
                </ul>
                <p>${project.engineeringAnalysis.prediction}</p>
                <p>${project.engineeringAnalysis.safetyFactor}</p>
                <p style="margin-top: var(--spacing-lg); font-style: italic;">${project.engineeringAnalysis.reflection}</p>
                ${project.engineeringAnalysis.image ? `<div class="feature-media" style="margin-top: var(--spacing-xl);">
                    <img src="${project.engineeringAnalysis.image}" alt="Engineering analysis" style="max-width: 70%; height: auto; border-radius: 4px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
                    <p class="feature-caption">${project.engineeringAnalysis.imageCaption}</p>
                </div>` : ''}
            </div>
        ` : ''}
        
        ${project.designProcess ? `
            <h2>${project.designProcess.title || 'Design Process'}</h2>
            <div class="tech-section">
                <p>${project.designProcess.description}</p>
                <ul style="margin-bottom: var(--spacing-lg);">
                    ${project.designProcess.iterations.map(i => `<li>${i}</li>`).join('')}
                </ul>
                <p style="font-style: italic;">${project.designProcess.reflection}</p>
                ${project.designProcess.image ? `<div class="feature-media" style="margin-top: var(--spacing-xl);">
                    <img src="${project.designProcess.image}" alt="Design process" style="max-width: 70%; height: auto; border-radius: 4px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
                    <p class="feature-caption">${project.designProcess.imageCaption}</p>
                </div>` : ''}
            </div>
        ` : ''}
        
        ${project.verificationTesting ? `
            <h2>${project.verificationTesting.title || 'Verification and Testing'}</h2>
            <div class="tech-section">
                <p>${project.verificationTesting.theoreticalCapacity}</p>
                <p>${project.verificationTesting.adjustedPrediction}</p>
                <p>${project.verificationTesting.experimentalFailure}</p>
                <p>${project.verificationTesting.failureDescription}</p>
                <p style="font-style: italic;">${project.verificationTesting.reflection}</p>
                ${project.verificationTesting.image ? `<div class="feature-media" style="margin-top: var(--spacing-xl);">
                    <img src="${project.verificationTesting.image}" alt="Verification testing" style="max-width: 70%; height: auto; border-radius: 4px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
                    <p class="feature-caption">${project.verificationTesting.imageCaption}</p>
                </div>` : ''}
            </div>
        ` : ''}
        
        ${project.engineeringLearning ? `
            <h2>${project.engineeringLearning.title || 'Engineering Learning'}</h2>
            <div class="tech-section">
                <p>${project.engineeringLearning.intro || 'This project demonstrates my engineering approach centered on:'}</p>
                <ul style="margin-bottom: var(--spacing-lg);">
                    ${project.engineeringLearning.principles.map(p => `<li>${p}</li>`).join('')}
                </ul>
                <p style="font-style: italic;">${project.engineeringLearning.reflection}</p>
            </div>
        ` : ''}
        
        ${project.testingEvidence ? `
            <h2>Testing Evidence</h2>
            <div class="tech-section">
                <div class="feature-media" style="margin-bottom: var(--spacing-xl);">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/eNNMuYWvVXE" title="Testing Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p class="feature-caption">${project.testingEvidence.imageCaption}</p>
                </div>
            </div>
        ` : ''}
        
        ${project.overallReflection ? `
            <h2>Overall Reflection</h2>
            <div class="tech-section">
                <p style="line-height: 1.6;">${project.overallReflection.content.replace(/\n\n/g, '</p><p style="line-height: 1.6; margin-top: var(--spacing-lg);">')}</p>
            </div>
        ` : ''}
        
        <h2>CTMF Implementation</h2>
        <div class="tabs-container">
            <div class="tab-headers">
                ${tabHeadersHtml}
            </div>
            <div class="tab-panels">
                ${tabContentsHtml}
            </div>
        </div>
    `;
    
    mainContent.appendChild(section);

    // Attach Tab Event Listeners
    const tabBtns = section.querySelectorAll('.tab-btn');
    const tabContents = section.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const index = btn.dataset.tabindex;
            
            // Remove active from all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active to selected
            btn.classList.add('active');
            section.querySelector('.tab-content[data-tabindex="' + index + '"]').classList.add('active');
        });
    });
}

// View: References
function renderReferences() {
    const section = document.createElement('div');
    
    // Generate HTML for References list in a continuous IEEE-style numbered sequence
    const allReferences = portfolioData.references.flatMap(group => group.items);
    const referencesHtml = allReferences.map((ref, index) => {
        const citation = ref.ieeeCitation || `"${ref.citation}."`;
        const citationHtml = ref.link
            ? `<a href="${ref.link}" target="_blank" style="color: inherit; text-decoration: none; border-bottom: 1px solid var(--blue-accent);">${citation}</a>`
            : citation;

        return `
            <p style="margin-bottom: var(--spacing-md); padding-left: calc(var(--spacing-xl) + 6px); text-indent: calc(-1 * var(--spacing-xl)); color: var(--text-secondary);">
                <strong style="color: var(--text-primary);">[${index + 1}]</strong> ${citationHtml}
            </p>
        `;
    }).join('');

    section.innerHTML = `
        <div class="page-hero page-hero-compact">
            <h1>References & Bibliography</h1>
        </div>
        <div class="tech-section" style="border: none; background: transparent; padding: 0;">
            ${referencesHtml}
        </div>
    `;
    
    mainContent.appendChild(section);
}

// Start application
document.addEventListener('DOMContentLoaded', init);
