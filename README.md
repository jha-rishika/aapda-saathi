# 🚨 Aapda Saathi (आपदा साथी)

> **A Cloud-Native Geo-Spatial Emergency Dispatch & Decentralized Telemetry Matrix**

Aapda Saathi is an automated crisis-response platform designed to eliminate communication friction between citizens in distress and emergency service dispatchers. By automatically stitching real-time hardware geolocation telemetry with pre-cached user medical baselines into low-latency JSON payloads, it ensures rapid triage and zero-delay rescue team deployment during critical disaster events.

---

## UN Sustainable Development Goals (SDGs) Alignment

1. UN SDG 3 Good Health and Well Being: Accelerates emergency medical intervention by attaching vital medical vault records such as allergies, blood type, and medical history to live SOS alerts.


2. UN SDG 11 Sustainable Cities and Communities: Enhances municipal disaster resilience through real-time geospatial incident tracking and centralized dispatcher command consoles.



---

## Core Features

### Citizen Client Ecosystem

1. One Touch Critical Panic Button: Instantly captures precise GPS coordinates via the browser native navigator geolocation hardware API.


2. Pre Cached Medical Vault: Localized React state layer caching user medical restriction profiles, blood groups, and emergency contacts to eliminate high-latency database queries during panic moments.


3. Live Emergency Bulletins: Real-time stream of verified safety updates and community alerts.



### Incident Command and Admin Triage Console

1. Real Time Incident Matrix: Interactive dashboard categorizing live emergencies such as floods, fires, and outbreaks by priority metrics.


2. State Driven Workflow Management: Triage dispatchers can update incident lifecycles dynamically from Pending Review to Dispatch Active to Secured and Resolved.


3. Live Telemetry Parsing: Instant visual logging of reporter metadata, contact strings, and exact incident descriptions.



---

## Tech Stack and System Architecture

1. Frontend Framework: React 19, Vite, JavaScript ES6


2. Styling and UI: Tailwind CSS v4, Lucide Icons


3. Backend Engine: Node.js, Express.js


4. Database and Cloud Lake: MongoDB Atlas Distributed NoSQL


5. HTTP Client: Axios Asynchronous REST API Gateway


6. Hosting and CI CD: Vercel Global Edge Network



---

## Repository Structure

```text
aapda-saathi/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AdminDashboard.jsx   # Command triage & incident control panel
│   │   │   ├── AuthGateway.jsx      # Session authentication portal
│   │   │   ├── CitizenDashboard.jsx # Panic button & emergency trigger UI
│   │   │   ├── LiveBulletins.jsx    # Real-time community alert feeds
│   │   │   ├── MedicalVault.jsx     # User health profile management
│   │   │   ├── RightSidebar.jsx     # Quick access navigational utilities
│   │   │   └── TopBar.jsx           # Global header navigation
│   │   ├── App.jsx                  # Main viewport route orchestration
│   │   ├── main.jsx                 # Vite application entry point
│   │   └── index.css                # Tailwind CSS v4 styles
│   └── package.json
└── README.md

```

---

## Local Development Setup

### Prerequisites

1. Node.js version 18.0.0 or higher
2. npm or yarn package manager

### 1. Clone the Repository

```bash
git clone https://github.com/jha-rishika/aapda-saathi.git
cd aapda-saathi

```

### 2. Install Dependencies

```bash
cd frontend
npm install

```

### 3. Start Development Server

```bash
npm run dev

```

Open your browser and navigate to `http://localhost:5173` to view the application.

---



## License

Distributed under the MIT License. See LICENSE for more information.
