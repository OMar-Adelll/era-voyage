# ERA VOYAGE
### *An Interactive Historical Exploration Platform*

---

## Overview

**ERA VOYAGE** is a multi-page interactive web application that immerses users in the world's greatest ancient civilizations through cinematic storytelling, animated interfaces, and dynamically rendered historical content. Built entirely with **HTML5**, **CSS3**, and **Vanilla JavaScript**, the platform delivers a compelling educational experience by combining visual narrative, smooth animations, modal-based detail systems, AI-assisted narration, and thematic navigation between distinct civilizations.

Each civilization module is crafted with its own atmosphere, color palette, media assets, and interactive behaviors — creating a unique journey through history for every exploration.

---

## Table of Contents

1. [Features](#features)
2. [Project Structure](#project-structure)
3. [Civilizations](#civilizations)
4. [Technologies](#technologies)
5. [Design System](#design-system)
6. [Getting Started](#getting-started)
7. [Educational Purpose](#educational-purpose)
8. [Development Team](#development-team)
9. [License](#license)

---

## Features

### Cinematic Scroll Experience
Smooth scrolling effects and layered parallax backgrounds generate an atmospheric, cinematic depth that draws users into each historical period.

### Glass Morphism UI
Modern frosted-glass card components with ambient glow effects and elegant state transitions provide a cohesive and refined visual identity.

### Interactive Modal System
Historical artifact and event cards expand into richly detailed modal popups containing extended information, supporting imagery, and contextual data.

### AI Audio Narration
An integrated text-to-speech narration system allows users to listen to historical content, enhancing accessibility and engagement.

### Intelligent Chatbot Assistant
A built-in conversational assistant offers guided exploration, answers historical questions, and provides supplementary information throughout the experience.

### Scroll-Reveal Animations
Page sections and UI components animate progressively as users scroll, maintaining visual interest and guiding attention naturally through content.

### Civilization Portal Navigation
Interconnected portal cards link civilizations together, enabling seamless transitions and encouraging holistic exploration of the ancient world.

### Contextual Navigation Controls
Built-in directional navigation elements improve flow and orientation across pages, reducing friction in the multi-page journey.

---

## Project Structure

```
ERA-VOYAGE/
│
├── Atlantis-Page/
│   ├── Media/
│   ├── page.html
│   ├── script.js
│   ├── theme.css
│   └── chatbot_atlantis.css
│
├── NativeAmericans-Page/
│   ├── media/
│   ├── american.html
│   ├── american.css
│   ├── american.js
│   └── chatbot_native.css
│
├── Pharaohs-Page/
│   ├── media/
│   ├── pharaohs.html
│   ├── script.js
│   ├── style.css
│   └── chatbot_egypt.css
│
├── Start-Page/
│   ├── media/
│   ├── index.html
│   ├── StartPage.css
│   └── StartPage.js
│
├── Chat-Bot/
│   └── chatbot.js
│
├── .gitignore
└── README.md
```

---

## Civilizations

| Civilization | Theme | Description |
|---|---|---|
| 🌊 Atlantis | Mythological / Oceanic | Exploration of the legendary sunken civilization, its lore, and philosophical legacy |
| 𓂀 Ancient Egypt | Archaeological / Mystical | Pharaohs, pyramid architecture, sacred temples, and the depth of Egyptian mythology |
| 🪶 Native Americans | Cultural / Spiritual | Tribal heritage, spiritual traditions, oral histories, and sacred connections to the land |

---

## Technologies

| Technology | Version | Purpose |
|---|---|---|
| HTML5 | — | Semantic structure and document layout |
| CSS3 | — | Styling, keyframe animations, and visual effects |
| JavaScript (Vanilla) | ES6+ | Dynamic interactions, modal logic, and application state |
| Google Fonts | — | Typographic identity and visual hierarchy |

---

## Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--gold` | `#D4AF37` | Primary accent — headings, borders, highlights |
| `--gold-bright` | `#F7D774` | Hover states, glow effects |
| `--deep-bg` | `#0A0805` | Page background — near-black warm base |
| `--glass-bg` | `rgba(10, 8, 5, 0.85)` | Card and modal frosted overlays |

### Typography

| Font Family | Role |
|---|---|
| **Cinzel Decorative** | Display titles — hero sections, civilization names |
| **Cinzel** | Section headings and navigational labels |
| **Crimson Text** | Body copy, descriptions, and modal content |

---

## Getting Started

### Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/) or any modern code editor
- [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (required for asset loading)

### Installation

**1. Clone the Repository**
```bash
git clone <repository-url>
cd ERA-VOYAGE
```

**2. Open in Visual Studio Code**
```bash
code .
```

**3. Launch with Live Server**

Right-click `Start-Page/index.html` in the Explorer panel, then select **Open with Live Server**.

> **Important:** Do not open HTML files directly in a browser. Local asset loading restrictions will prevent audio narration and certain media resources from functioning correctly. Always use Live Server or an equivalent local development server.

---

## Educational Purpose

ERA VOYAGE was developed to demonstrate the intersection of:

- **Interactive storytelling** — narrative-driven design that conveys historical depth
- **Historical research** — content grounded in documented civilizations and mythology
- **Front-end engineering** — modern HTML/CSS/JS patterns applied at production quality
- **User experience principles** — accessible, intuitive navigation across complex content
- **Multimedia learning** — combining audio, visuals, and interaction to support diverse learners

---
## 👥 Development Team

| Name | Role | GitHub |
|---|---|---|
| Omar Adel | Chat Bot Planning, Logic Architecture & API Integration | [GitHub](https://github.com/OMar-Adelll) |
| Nour Elhoda | Start Page Development & Landing Page Design | [GitHub](https://github.com/Nourelhouda101) |
| Mawada Gaber | Chat Bot UI Design & Integration Across All Pages | [GitHub](https://github.com/Mawadda0) |
| Omar Mohamed Hassan | Pharaohs Page Development & Design | [GitHub](https://github.com/) |
| Ziad Magdy | Pharaohs Page Development & Styling | [GitHub](https://github.com/username) |
| Noura | Atlantis Page Development & Design | [GitHub](https://github.com/Nouraa0) |
| Hana | Atlantis Page Development & Content Integration | [GitHub](https://github.com/hana-abo-eissa) |
| Ziad Amin | Native Americans Page Development & Design | [GitHub](https://github.com/ziadamin06) |

---
## License

This project is developed for **educational and non-commercial purposes only**. All historical content, media assets, and third-party resources are used in accordance with their respective licenses. Redistribution or commercial use without explicit permission is not permitted.

---

<div align="center">

## ERA VOYAGE
*Travel Through History*

</div>