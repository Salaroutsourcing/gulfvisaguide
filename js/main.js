// Gulf Jobs Hub – Main JS
const JOBS_DATA = {
  "1": {
    title: "Senior Civil Engineer",
    badge: "Visa Sponsored",
    badgeClass: "visa",
    location: "Dubai, United Arab Emirates",
    city: "Dubai",
    countryCode: "AE",
    countryName: "United Arab Emirates",
    salary: "AED 18,000 – 25,000 / month",
    currency: "AED",
    minSalary: 18000,
    maxSalary: 25000,
    type: "Full-time",
    category: "Construction",
    description: "A leading construction firm in Dubai is seeking an experienced Senior Civil Engineer to join their team on major infrastructure and building projects. The ideal candidate will have strong technical knowledge, site leadership skills and a proven track record in the Gulf region.",
    responsibilities: [
      "Supervise and coordinate site activities for civil works",
      "Review designs, drawings and method statements",
      "Ensure quality, safety and schedule compliance",
      "Manage subcontractors and junior engineers",
      "Prepare progress reports and technical documentation"
    ],
    requirements: [
      "Bachelor’s degree in Civil Engineering",
      "Minimum 7 years relevant experience (Gulf experience preferred)",
      "Strong knowledge of international standards and local regulations",
      "Excellent communication skills in English",
      "Valid UAE driving licence is an advantage"
    ],
    benefits: [
      "Competitive salary + housing allowance",
      "Annual air ticket",
      "Medical insurance",
      "Visa sponsorship for employee"
    ]
  },
  "2": {
    title: "Registered Nurse – ICU",
    badge: "Visa Sponsored",
    badgeClass: "visa",
    location: "Riyadh, Saudi Arabia",
    city: "Riyadh",
    countryCode: "SA",
    countryName: "Saudi Arabia",
    salary: "SAR 12,000 – 16,000 / month",
    currency: "SAR",
    minSalary: 12000,
    maxSalary: 16000,
    type: "Full-time",
    category: "Healthcare",
    description: "A reputed tertiary care hospital in Riyadh is hiring dedicated ICU Registered Nurses to provide high-standard critical care. Candidates with SCFHS/DHA/MOH or equivalent licensing are encouraged to apply.",
    responsibilities: [
      "Monitor and assess critically ill patients in the Intensive Care Unit",
      "Administer medications, IV infusions and life-support interventions",
      "Collaborate with intensivists and multidisciplinary healthcare teams",
      "Maintain accurate electronic patient records and vital charts",
      "Adhere strictly to infection control and hospital safety protocols"
    ],
    requirements: [
      "Bachelor of Science in Nursing (BSN) or equivalent nursing degree",
      "Minimum 3 years clinical experience in an ICU setting",
      "Valid nursing license (SCFHS eligibility or DataFlow completed preferred)",
      "BLS and ACLS certification",
      "Strong proficiency in English; Arabic is a plus"
    ],
    benefits: [
      "Tax-free monthly salary (SAR 12,000 – 16,000)",
      "Free furnished accommodation or generous housing allowance",
      "Annual round-trip air ticket",
      "Comprehensive medical insurance & paid annual leave",
      "Full employer-sponsored work visa (Iqama)"
    ]
  },
  "3": {
    title: "Software Engineer (Full Stack)",
    badge: "Hot",
    badgeClass: "hot",
    location: "Doha, Qatar",
    city: "Doha",
    countryCode: "QA",
    countryName: "Qatar",
    salary: "QAR 15,000 – 22,000 / month",
    currency: "QAR",
    minSalary: 15000,
    maxSalary: 22000,
    type: "Full-time",
    category: "IT & Software",
    description: "A fast-growing technology company in Doha is looking for a Full Stack Software Engineer (React + Node.js) to build scalable web applications and cloud services for enterprise clients across the GCC.",
    responsibilities: [
      "Design, develop and maintain modern web applications using React and Node.js",
      "Build secure RESTful and GraphQL APIs and integrate third-party services",
      "Optimize application performance, database queries and cloud infrastructure",
      "Participate in code reviews, agile sprint planning and technical architecture",
      "Collaborate with product managers and UI/UX designers"
    ],
    requirements: [
      "Bachelor’s degree in Computer Science, Software Engineering or related field",
      "4+ years experience in full-stack JavaScript/TypeScript development",
      "Strong proficiency in React, Node.js, PostgreSQL/MongoDB and Docker",
      "Experience with AWS or Azure cloud deployments",
      "Remote onboarding option available for the first 3 months prior to relocation"
    ],
    benefits: [
      "Tax-free salary QAR 15,000 – 22,000 / month",
      "Relocation assistance & Qatar work visa sponsorship",
      "Flexible hybrid work environment",
      "Private health insurance & annual flight allowance"
    ]
  },
  "4": {
    title: "Hotel Front Office Manager",
    badge: "Visa Sponsored",
    badgeClass: "visa",
    location: "Abu Dhabi, United Arab Emirates",
    city: "Abu Dhabi",
    countryCode: "AE",
    countryName: "United Arab Emirates",
    salary: "AED 12,000 – 15,000 / month",
    currency: "AED",
    minSalary: 12000,
    maxSalary: 15000,
    type: "Full-time",
    category: "Hospitality",
    description: "A luxury 5-star hotel in Abu Dhabi requires an experienced Front Office Manager to lead guest relations, reception, concierge and night audit teams while ensuring world-class hospitality standards.",
    responsibilities: [
      "Oversee daily front desk, concierge and guest relations operations",
      "Train, schedule and mentor front office staff to deliver 5-star service",
      "Handle VIP arrivals, guest escalations and loyalty program standards",
      "Coordinate with housekeeping, reservations and revenue management",
      "Monitor front office budgets, upselling targets and occupancy KPIs"
    ],
    requirements: [
      "Degree or diploma in Hospitality Management or Tourism",
      "Minimum 5 years luxury hotel experience, including 2+ years in a supervisory role",
      "Proficiency in Opera PMS or similar hotel management systems",
      "Fluent in English; Arabic or additional European/Asian languages advantageous",
      "Previous GCC hospitality experience strongly preferred"
    ],
    benefits: [
      "Tax-free salary + service charge & incentive bonuses",
      "Complimentary accommodation, duty meals and transportation",
      "UAE residence visa, medical insurance and annual flight ticket"
    ]
  },
  "5": {
    title: "Mechanical Engineer – Oil & Gas",
    badge: "Visa Sponsored",
    badgeClass: "visa",
    location: "Dammam, Saudi Arabia",
    city: "Dammam",
    countryCode: "SA",
    countryName: "Saudi Arabia",
    salary: "SAR 14,000 – 20,000 / month",
    currency: "SAR",
    minSalary: 14000,
    maxSalary: 20000,
    type: "Full-time",
    category: "Engineering",
    description: "An established Oil & Gas EPC contractor in the Eastern Province of Saudi Arabia is seeking Mechanical Engineers with solid experience in static and rotating equipment, piping systems and plant maintenance.",
    responsibilities: [
      "Prepare and review mechanical engineering specifications, datasheets and drawings",
      "Supervise installation, testing and commissioning of piping and rotating equipment",
      "Ensure compliance with ASME, API and Saudi Aramco engineering standards",
      "Coordinate with procurement, QA/QC and HSE teams on site",
      "Troubleshoot mechanical issues and support turnaround maintenance"
    ],
    requirements: [
      "Bachelor’s degree in Mechanical Engineering",
      "5+ years experience in Oil & Gas, petrochemical or refinery projects",
      "Familiarity with ASME, API codes and Aramco standards",
      "Saudi Council of Engineers (SCE) accreditation or eligibility",
      "Strong technical reporting and site coordination skills"
    ],
    benefits: [
      "Competitive tax-free salary (SAR 14,000 – 20,000)",
      "Family status visa sponsorship available",
      "Housing & transport allowances",
      "Medical insurance for employee and dependents + annual tickets"
    ]
  },
  "6": {
    title: "Accountant",
    badge: "Visa Sponsored",
    badgeClass: "visa",
    location: "Manama, Bahrain",
    city: "Manama",
    countryCode: "BH",
    countryName: "Bahrain",
    salary: "BHD 800 – 1,100 / month",
    currency: "BHD",
    minSalary: 800,
    maxSalary: 1100,
    type: "Full-time",
    category: "Finance",
    description: "A well-established commercial trading company in Manama, Bahrain requires an experienced Accountant to manage general ledger operations, GCC VAT compliance and monthly financial reporting.",
    responsibilities: [
      "Manage day-to-day accounting operations, AP/AR and bank reconciliations",
      "Prepare monthly, quarterly and annual financial statements under IFRS",
      "Handle Bahrain VAT return preparation and filing with NBR",
      "Coordinate with external auditors and manage inventory cost accounting",
      "Support management with cash-flow forecasting and budgeting"
    ],
    requirements: [
      "Bachelor’s degree in Accounting, Finance or Commerce (CPA/ACCA/CMA part-qualified is a plus)",
      "Minimum 3–5 years accounting experience, preferably in trading or distribution",
      "Hands-on experience with ERP software (SAP, Oracle, Tally or Dynamics) and Excel",
      "Thorough knowledge of IFRS and GCC VAT regulations",
      "Available for immediate or short-notice joining"
    ],
    benefits: [
      "Tax-free monthly package BHD 800 – 1,100",
      "Bahrain work visa sponsorship & medical coverage",
      "Paid annual leave and return air ticket"
    ]
  },
  "7": {
    title: "Mathematics Teacher (International School)",
    badge: "Visa Sponsored",
    badgeClass: "visa",
    location: "Kuwait City, Kuwait",
    city: "Kuwait City",
    countryCode: "KW",
    countryName: "Kuwait",
    salary: "KWD 950 – 1,300 / month",
    currency: "KWD",
    minSalary: 950,
    maxSalary: 1300,
    type: "Full-time",
    category: "Education",
    description: "A leading accredited British-curriculum international school in Kuwait City is seeking a qualified Secondary Mathematics Teacher (IGCSE / A-Level) for the upcoming academic term.",
    responsibilities: [
      "Deliver engaging Mathematics lessons aligned with the British National Curriculum (KS3, IGCSE, A-Level)",
      "Assess, track and report on student progress and exam readiness",
      "Foster a positive, inclusive classroom environment",
      "Participate in departmental meetings, parent conferences and extra-curricular clubs"
    ],
    requirements: [
      "Bachelor’s degree in Mathematics along with B.Ed. or PGCE teaching qualification",
      "Minimum 2 years full-time classroom teaching experience",
      "Experience with Cambridge IGCSE or Pearson Edexcel curricula preferred",
      "Fluent English communication skills and clean background check"
    ],
    benefits: [
      "100% tax-free salary (KWD 950 – 1,300 / month)",
      "Fully furnished private apartment or housing allowance",
      "Annual return flights, Kuwait residency visa and private medical insurance",
      "Paid school holidays"
    ]
  },
  "8": {
    title: "Logistics & Supply Chain Supervisor",
    badge: "Visa Sponsored",
    badgeClass: "visa",
    location: "Muscat, Oman",
    city: "Muscat",
    countryCode: "OM",
    countryName: "Oman",
    salary: "OMR 1,100 – 1,500 / month",
    currency: "OMR",
    minSalary: 1100,
    maxSalary: 1500,
    type: "Full-time",
    category: "Logistics",
    description: "A regional distribution and freight group in Muscat, Oman is hiring a Logistics & Supply Chain Supervisor to oversee port shipments, customs documentation, fleet scheduling and warehouse operations.",
    responsibilities: [
      "Coordinate import/export shipments through Sultan Qaboos and Sohar ports",
      "Oversee customs clearance via the Bayan system and freight forwarders",
      "Manage warehouse inventory accuracy, dispatch schedules and fleet routing",
      "Negotiate rates with shipping lines and local transport vendors",
      "Ensure HSE compliance across warehouse and loading operations"
    ],
    requirements: [
      "Bachelor’s degree or diploma in Supply Chain, Logistics or Business Administration",
      "4+ years experience in GCC freight forwarding, port logistics or warehousing",
      "Strong knowledge of customs documentation, Incoterms and WMS systems",
      "Valid GCC driving license preferred"
    ],
    benefits: [
      "Competitive salary OMR 1,100 – 1,500 / month",
      "Oman employment visa, medical insurance and annual air ticket",
      "Company vehicle / transport allowance"
    ]
  }
};

document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      const isOpen = mainNav.classList.toggle('open');
      this.classList.toggle('active', isOpen);
      this.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // URL param handling for filters on jobs.html
  const params = new URLSearchParams(window.location.search);
  const q = (params.get('q') || '').trim();
  const country = (params.get('country') || '').trim().toLowerCase();
  const cat = (params.get('cat') || '').trim().toLowerCase();

  const keywordInput = document.getElementById('jobKeyword');
  const countrySelect = document.getElementById('jobCountry');
  const catSelect = document.getElementById('jobCat');

  if (keywordInput && q) keywordInput.value = q;
  if (countrySelect && country) countrySelect.value = country;
  if (catSelect && cat) catSelect.value = cat;

  const jobsListContainer = document.getElementById('jobsListContainer');
  if (jobsListContainer) {
    const cards = Array.from(jobsListContainer.querySelectorAll('.job-card'));
    const filterStatus = document.getElementById('filterStatus');
    const noJobsFound = document.getElementById('noJobsFound');
    const resetBtn = document.getElementById('resetFiltersBtn');

    if (q || country || cat) {
      let visibleCount = 0;
      const qLower = q.toLowerCase();

      cards.forEach(card => {
        const cardCountry = (card.getAttribute('data-country') || '').toLowerCase();
        const cardCats = (card.getAttribute('data-cat') || '').toLowerCase();
        const cardText = card.textContent.toLowerCase();

        const matchesKeyword = !qLower || cardText.includes(qLower);
        const matchesCountry = !country || cardCountry === country;
        const matchesCat = !cat || cardCats.split(/\s+/).includes(cat);

        if (matchesKeyword && matchesCountry && matchesCat) {
          card.style.display = '';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (resetBtn) resetBtn.style.display = 'inline-flex';
      if (filterStatus) {
        filterStatus.style.display = 'block';
        filterStatus.textContent = `Showing ${visibleCount} of ${cards.length} verified openings matching your filter.`;
      }
      if (noJobsFound) {
        noJobsFound.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    }
  }

  // Dynamic job detail rendering on job-detail.html
  const jobId = params.get('id');
  const jobDetailCard = document.getElementById('jobDetailCard');
  if (jobDetailCard && jobId && JOBS_DATA[jobId]) {
    const job = JOBS_DATA[jobId];
    const titleEl = document.getElementById('jobTitle');
    const badgeEl = document.getElementById('jobBadge');
    const metaEl = document.getElementById('jobMeta');
    const descEl = document.getElementById('jobDesc');
    const respEl = document.getElementById('jobResponsibilities');
    const reqEl = document.getElementById('jobRequirements');
    const benEl = document.getElementById('jobBenefits');
    const applyBtn = document.getElementById('applyBtn');

    document.title = `${job.title} – ${job.location} | Gulf Jobs Hub`;
    const metaDesc = document.getElementById('pageDesc');
    if (metaDesc) {
      metaDesc.setAttribute('content', `${job.title} job in ${job.location}. ${job.badge}. Salary ${job.salary}. Apply now on Gulf Jobs Hub.`);
    }
    const canonicalLink = document.getElementById('canonicalLink');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', `https://gulfjobs.salaroutsourcing.com/job-detail.html?id=${encodeURIComponent(jobId)}`);
    }

    if (titleEl) titleEl.textContent = job.title;
    if (badgeEl) {
      badgeEl.textContent = job.badge;
      badgeEl.className = `badge ${job.badgeClass}`;
    }
    if (metaEl) {
      metaEl.innerHTML = '';
      [`📍 ${job.location}`, `💰 ${job.salary}`, `📅 ${job.type}`, `🏢 ${job.category}`].forEach(item => {
        const span = document.createElement('span');
        span.textContent = item;
        metaEl.appendChild(span);
      });
    }
    if (descEl) descEl.textContent = job.description;

    const renderList = (el, items) => {
      if (!el) return;
      el.innerHTML = '';
      items.forEach(text => {
        const li = document.createElement('li');
        li.textContent = text;
        el.appendChild(li);
      });
    };
    renderList(respEl, job.responsibilities);
    renderList(reqEl, job.requirements);
    renderList(benEl, job.benefits);

    if (applyBtn) {
      applyBtn.setAttribute('href', `contact.html?job=${encodeURIComponent(job.title + ' (' + job.location + ')')}`);
    }

    const schemaEl = document.getElementById('jobSchema');
    if (schemaEl) {
      const schemaObj = {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": job.title,
        "description": job.description,
        "datePosted": "2026-10-20",
        "validThrough": "2026-12-31",
        "employmentType": "FULL_TIME",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "Verified Gulf Employer",
          "sameAs": "https://gulfjobs.salaroutsourcing.com"
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": job.city,
            "addressRegion": job.city,
            "addressCountry": job.countryCode
          }
        },
        "baseSalary": {
          "@type": "MonetaryAmount",
          "currency": job.currency,
          "value": {
            "@type": "QuantitativeValue",
            "minValue": job.minSalary,
            "maxValue": job.maxSalary,
            "unitText": "MONTH"
          }
        },
        "applicantLocationRequirements": {
          "@type": "Country",
          "name": job.countryName
        },
        "directApply": true
      };
      schemaEl.textContent = JSON.stringify(schemaObj, null, 2);
    }
  }

  // Contact form handling
  const contactForm = document.getElementById('contactForm');
  const jobParam = params.get('job');
  const subjectInput = document.getElementById('subject');
  if (subjectInput && jobParam) {
    subjectInput.value = `Application / Inquiry: ${jobParam}`;
  }
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const statusEl = document.getElementById('contactFormStatus');
      if (statusEl) {
        statusEl.style.display = 'block';
        statusEl.textContent = 'Thank you! Your message has been received. For faster job updates and direct messaging, please also reach out on our official Facebook page.';
      }
      contactForm.reset();
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
