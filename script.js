// Edit this array to add, remove, or reorder publications.
const publications = [
  {
    year: "2025",
    title:
      "Probing the Effect of Electrode Thermodynamics on Reaction Heterogeneity in Thick Battery Electrodes",
    venue: "Advanced Materials",
    doi: "10.1002/adma.202502299",
    link: "https://doi.org/10.1002/adma.202502299"
  },
  {
    year: "2024",
    title:
      "Highly sensitive 2D X-ray absorption spectroscopy via physics informed machine learning",
    venue: "npj Computational Materials",
    doi: "10.1038/s41524-024-01313-7",
    link: "https://doi.org/10.1038/s41524-024-01313-7"
  },
  {
    year: "2024",
    title:
      "In Situ and Operando Observation of Zinc Moss Growth and Dissolution in Alkaline Electrolyte for Zinc-Air Batteries",
    venue: "ACS Energy Letters",
    doi: "10.1021/acsenergylett.4c01011",
    link: "https://doi.org/10.1021/acsenergylett.4c01011"
  },
  {
    year: "2023",
    title: "Roll-to-roll solvent-free manufactured electrodes for fast-charging batteries",
    venue: "Joule",
    doi: "10.1016/j.joule.2023.04.006",
    link: "https://doi.org/10.1016/j.joule.2023.04.006"
  },
  {
    year: "2022",
    title:
      "Nanotomographic observation and statistical analysis of overcharging induced cracks in LiCoO2 single crystalline particles",
    venue: "Energy Storage Materials",
    doi: "10.1016/j.ensm.2022.08.011",
    link: "https://doi.org/10.1016/j.ensm.2022.08.011"
  },
  {
    year: "2020",
    title:
      "Enabling High-Performance Tandem Organic Photovoltaic Cells by Balancing the Front and Rear Subcells",
    venue: "Advanced Materials",
    doi: "10.1002/adma.202002315",
    link: "https://doi.org/10.1002/adma.202002315"
  },
  {
    year: "2020",
    title: "FeOF/TiO2 Hetero-Nanostructures for High-Areal-Capacity Fluoride Cathodes",
    venue: "ACS Applied Materials and Interfaces",
    doi: "10.1021/acsami.0c09185",
    link: "https://doi.org/10.1021/acsami.0c09185"
  },
  {
    year: "2020",
    title:
      "Interfacial engineering for stabilizing polymer electrolytes with 4V cathodes in lithium metal batteries at elevated temperature",
    venue: "Nano Energy",
    doi: "10.1016/j.nanoen.2020.104655",
    link: "https://doi.org/10.1016/j.nanoen.2020.104655"
  },
  {
    year: "2020",
    title:
      "Mitigating Interfacial Instability in Polymer Electrolyte-Based Solid-State Lithium Metal Batteries with 4V Cathodes",
    venue: "ACS Energy Letters",
    doi: "10.1021/acsenergylett.0c01465",
    link: "https://doi.org/10.1021/acsenergylett.0c01465"
  },
  {
    year: "2020",
    title:
      "Multi-scale stabilization of high-voltage LiCoO2 enabled by nanoscale solid electrolyte coating",
    venue: "Energy Storage Materials",
    doi: "10.1016/j.ensm.2020.03.031",
    link: "https://doi.org/10.1016/j.ensm.2020.03.031"
  },
  {
    year: "2020",
    title:
      "Nacre-Inspired Composite Electrolytes for Load-Bearing Solid-State Lithium-Metal Batteries",
    venue: "Advanced Materials",
    doi: "10.1002/adma.201905517",
    link: "https://doi.org/10.1002/adma.201905517"
  },
  {
    year: "2020",
    title: "Nanomaterials for implantable batteries to power cardiac devices",
    venue: "Materials Today Nano",
    doi: "10.1016/j.mtnano.2019.100070",
    link: "https://doi.org/10.1016/j.mtnano.2019.100070"
  }
];

// Replace these album entries with your own photos, captions, and image paths.
const albums = [
  {
    title: "Working at the Synchrotron Beamline",
    caption: "Beamtime for operando X-ray experiments and battery materials characterization.",
    image: "assets/site/beamline-work.jpg",
    kind: "photo",
    source: "Beamline photo"
  },
  {
    title: "Synchrotron XRD Sample Stage",
    caption: "Designed sample stage and synchrotron XRD setup for battery materials experiments.",
    image: "assets/site/synchrotron-xrd-stage.jpg",
    kind: "photo",
    source: "Experimental setup"
  },
  {
    title: "Full-Field X-ray Imaging View",
    caption: "Field of view from full-field X-ray imaging during battery materials characterization.",
    image: "assets/site/full-field-xray-view.jpg",
    kind: "photo",
    source: "Beamline imaging view"
  },
  {
    title: "3D Electrode Reconstruction",
    caption: "X-ray tomography reconstruction of battery electrodes from roll-to-roll manufactured electrodes.",
    image: "assets/site/joule-2023-electrode-tomography.jpg",
    kind: "figure",
    source: "Joule 2023, 7, 952-970"
  },
  {
    title: "Machine Learning for Synchrotron X-ray",
    caption: "Physics-informed machine learning workflow for sensitive 2D X-ray absorption spectroscopy.",
    image: "assets/site/npj-2024-machine-learning-xray.jpg",
    kind: "figure",
    source: "npj Computational Materials 2024, 10, 128"
  },
  {
    title: "3D XANES Analysis of LFP Particles",
    caption: "Three-dimensional XANES analysis used to resolve chemical information in LFP particles.",
    image: "assets/site/npj-2024-3d-xanes-lfp.jpg",
    kind: "figure",
    source: "npj Computational Materials 2024, 10, 128"
  },
  {
    title: "High-Voltage Cathode Surface Coating",
    caption: "Surface coating strategy for stabilizing high-voltage cathodes in solid-state lithium metal batteries.",
    image: "assets/site/acs-energy-lett-2020-surface-coating.jpg",
    kind: "figure",
    source: "ACS Energy Letters 2020, 5, 3244-3253"
  },
  {
    title: "Particle Damage by X-ray Tomography",
    caption: "Synchrotron X-ray tomography analysis of particle damage in thick battery electrodes.",
    image: "assets/site/adv-mater-2025-particle-damage.jpg",
    kind: "figure",
    source: "Advanced Materials 2025, 37, 2502299"
  },
  {
    title: "Spatially Resolved Electrode SOC",
    caption: "Fluorescence X-ray mapping of spatially resolved state of charge across electrode cross-sections.",
    image: "assets/site/adv-mater-2025-spatial-soc.jpg",
    kind: "figure",
    source: "Advanced Materials 2025, 37, 2502299"
  }
];

// Edit this array to update news stories, awards, and honors.
const highlights = [
  {
    year: "2025",
    type: "News",
    title: "Rice News featured thick-electrode battery research",
    description:
      "Rice University reported the Advanced Materials study on thick battery electrodes and identified Zeyuan Li as first author and a Rice doctoral alumnus.",
    link:
      "https://news.rice.edu/news/2025/thick-electrodes-chemistry-matters-more-structure-battery-performance",
    action: "Read Rice News"
  },
  {
    year: "2025",
    type: "Award",
    title: "Best Thesis Award, Rice University",
    description:
      "Recognized by Rice University for doctoral thesis research in energy storage materials and battery characterization.",
    link: "",
    action: ""
  },
  {
    year: "Tsinghua",
    type: "Award",
    title: "MIIT New Energy Storage Lifetime Simulation Prediction Technology Special Competition",
    description:
      "First place in 工信部新型储能寿命模拟预测技术专题赛.",
    link: "https://www.tsinghua.edu.cn/info/1180/123418.htm",
    action: "View Tsinghua News"
  },
  {
    year: "Tsinghua",
    type: "Award",
    title: "MIIT Energy Electronics Industry Innovation Competition",
    description:
      "Innovation and creativity category recognition in 工信部能源电子产业创新大赛 for work since joining Tsinghua University.",
    link: "https://www.tsinghua.edu.cn/info/1180/123418.htm",
    action: "View Tsinghua News"
  }
];

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

const publicationList = document.querySelector("#publication-list");
publicationList.innerHTML = publications
  .map(
    (paper) => `
      <article class="publication-card">
        <div class="publication-year">${paper.year}</div>
        <div>
          <h3><a href="${paper.link}">${paper.title}</a></h3>
          <div class="publication-meta">
            <span>${paper.venue}</span>
            <span>${paper.year}</span>
            <span>DOI: ${paper.doi}</span>
          </div>
        </div>
      </article>
    `
  )
  .join("");

const albumGrid = document.querySelector("#album-grid");
albumGrid.innerHTML = albums
  .map(
    (album) => `
      <article class="album-card ${album.kind === "figure" ? "is-figure" : "is-photo"}">
        <div class="album-visual">
          <img src="${album.image}" alt="${album.title}" loading="lazy" />
        </div>
        <div class="album-body">
          <h3>${album.title}</h3>
          <p>${album.caption}</p>
          <span class="album-source">${album.source}</span>
        </div>
      </article>
    `
  )
  .join("");

const highlightList = document.querySelector("#highlight-list");
highlightList.innerHTML = highlights
  .map(
    (item) => `
      <article class="highlight-card">
        <div class="highlight-topline">
          <span>${item.type}</span>
          <span>${item.year}</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        ${
          item.link
            ? `<a class="highlight-link" href="${item.link}">${item.action || "Learn more"}</a>`
            : ""
        }
      </article>
    `
  )
  .join("");

document.querySelector("#year").textContent = new Date().getFullYear();
