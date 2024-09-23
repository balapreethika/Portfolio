const marketingProject = document.getElementById('marketing');
    
    marketingProject.addEventListener('mouseenter', function() {
        const h4 = marketingProject.querySelector('h4');
       h4.innerHTML = 'Role Played: As part of a two-member team, I focused on developing and implementing the marketing automation workflows. <br> Skill: Email Studio, Journey Builder, Marketing Cloud';
    });

    marketingProject.addEventListener('mouseleave', function() {
        const h4 = marketingProject.querySelector('h4');
        h4.textContent = 'The solution helps to streamline customer engagement, enhance lead nurturing and improve campaign effectiveness through personalized email campaign, automated customer journeys.';
    });

    const caseObj = document.getElementById('case');
    
    caseObj.addEventListener('mouseenter', function() {
        const h4 = caseObj.querySelector('h4');
       h4.innerHTML = 'Role Played: As part of a two-member team, I worked on the development and on-site deployment of the project. <br> Skill: Service Cloud, Apex, LWC, Email-to-Case';
    });

    caseObj.addEventListener('mouseleave', function() {
        const h4 = caseObj.querySelector('h4');
        h4.textContent = 'The system provided tools for case creation, tracking, and escalation, ensuring faster resolution times and improved customer satisfaction.';
    });

    const lms = document.getElementById('lms');
    
    lms.addEventListener('mouseenter', function() {
       const h4 = lms.querySelector('h4');
       h4.innerHTML = 'Role Played: As part of a two-member team, I worked on development part <br> Skill: Sales Cloud,Reports,LWC';
    });

    lms.addEventListener('mouseleave', function() {
        const h4 = lms.querySelector('h4');
        h4.textContent = 'Developed a custom solution using Sales Cloud to improve the lead capture, tracking, and conversion process, enhancing sales team efficiency.';
    });
