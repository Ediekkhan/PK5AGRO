export type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  deadline?: string;
  overview: string;
  responsibilities: string[];
  qualifications: string[];
  experience: string;
  performance?: string[];
};

export const jobs: Job[] = [
  {
    id: "head-of-processing",
    title: "Head of Processing Operations",
    department: "Processing",
    location: "Ondo, Nigeria",
    type: "Full-time",
    deadline: "June 30, 2026",
    overview:
      "Lead end-to-end processing operations across PK5's palm kernel and cocoa facilities, driving throughput, quality, and export readiness.",
    responsibilities: [
      "Oversee daily plant operations across multiple processing lines",
      "Drive OEE, yield, and quality KPIs to international export standards",
      "Lead capacity expansion projects and capital deployment",
      "Develop and mentor a cross-functional plant leadership team",
    ],
    qualifications: [
      "B.Eng / M.Sc in Chemical, Mechanical, or Process Engineering",
      "Demonstrated leadership in FMCG or agro-processing environments",
      "Strong command of GMP, HACCP, ISO 22000",
    ],
    experience: "12+ years in industrial processing, with 5+ years in senior leadership.",
    performance: [
      "Sustain >85% OEE across primary lines",
      "Zero major non-conformance in export audits",
    ],
  },
  {
    id: "senior-agronomist",
    title: "Senior Agronomist",
    department: "Agronomy",
    location: "Cross River, Nigeria",
    type: "Full-time",
    deadline: "May 31, 2026",
    overview:
      "Define and execute agronomic best practices across PK5 plantations, optimizing yield per hectare while advancing regenerative practices.",
    responsibilities: [
      "Develop crop protocols for palm, cocoa, and plantain",
      "Lead soil health, nutrition, and IPM programs",
      "Coordinate with outgrower networks and field supervisors",
    ],
    qualifications: [
      "M.Sc in Agronomy, Crop Science, or Soil Science",
      "Field-proven expertise in tropical perennial crops",
    ],
    experience: "8+ years in commercial plantation agronomy.",
  },
  {
    id: "supply-chain-manager",
    title: "Supply Chain Manager",
    department: "Supply Chain",
    location: "Lagos, Nigeria",
    type: "Full-time",
    overview:
      "Architect resilient inbound and outbound logistics flows supporting domestic distribution and international export commitments.",
    responsibilities: [
      "Manage S&OP, inventory, and 3PL partnerships",
      "Optimize freight, customs, and documentation for export lanes",
      "Implement digital traceability across the value chain",
    ],
    qualifications: [
      "B.Sc in Supply Chain, Logistics, or related field; MBA preferred",
      "CIPS / APICS certification an advantage",
    ],
    experience: "10+ years in agro-commodity or FMCG supply chain.",
  },
  {
    id: "mechanical-engineer",
    title: "Mechanical Maintenance Engineer",
    department: "Engineering",
    location: "Ondo, Nigeria",
    type: "Full-time",
    overview:
      "Ensure reliability and uptime of processing equipment through preventive maintenance and root-cause engineering.",
    responsibilities: [
      "Develop and execute PM schedules across mills and dryers",
      "Lead breakdown response and reliability-centered maintenance",
      "Manage spares strategy and vendor performance",
    ],
    qualifications: ["B.Eng Mechanical Engineering", "COREN registration preferred"],
    experience: "5+ years in heavy industrial maintenance.",
  },
  {
    id: "finance-controller",
    title: "Finance Controller",
    department: "Finance",
    location: "Lagos, Nigeria",
    type: "Full-time",
    overview:
      "Lead financial control, reporting, and treasury functions to support PK5's growth and capital structure.",
    responsibilities: [
      "Own monthly close, IFRS reporting, and audit readiness",
      "Drive working capital and FX risk management",
      "Partner with operations on cost and margin analytics",
    ],
    qualifications: ["ACA / ACCA / CPA qualified", "B.Sc Accounting or Finance"],
    experience: "10+ years, with prior controllership in manufacturing or agribusiness.",
  },
];
