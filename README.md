# Ibrahim Alaa — Standalone Personal Developer Portfolio

Independent Professional Developer Portfolio for **Ibrahim Alaa (Backend Developer — PHP / Laravel)**.

---

## 🚀 How to Run the Website

### Option 1: Direct Browser Access (Instant & Zero Setup)
Simply open the file directly in any web browser:
```
c:\xampp\htdocs\laravel\ibrahim-portfolio\index.html
```
Double-click `index.html` or drag it into Google Chrome, Microsoft Edge, or Firefox.

### Option 2: Via XAMPP Localhost
If Apache is running in XAMPP:
```
http://localhost/laravel/ibrahim-portfolio/
```

---

## 📁 Standalone Project Structure

```
c:\xampp\htdocs\laravel\ibrahim-portfolio\
├── index.html                   # Standalone, semantic HTML5 single-page application
├── README.md                    # Setup and maintenance documentation
└── assets/
    ├── css/
    │   └── style.css            # Dark developer aesthetic, responsive grid, glow effects & modal styles
    ├── js/
    │   ├── portfolio-data.js    # CENTRALIZED DATA FILE (Edit this to update anything!)
    │   └── main.js              # Dynamic rendering, filtering, and interactive case study modal
    └── cv/
        ├── README.md            # CV replacement guidelines
        └── Ibrahim_Alaa_CV.pdf  # Starter PDF CV (Replace with your updated resume)
```

---

## 🛠️ How to Update Your Information (Takes 30 Seconds)

All content is cleanly separated from the HTML and centralized in:
`assets/js/portfolio-data.js`

### 1. Update Contact Information:
Open `assets/js/portfolio-data.js` and edit:
```javascript
personal: {
    socials: {
        email: "your-real-email@gmail.com",
        phone: "+20 1X XXXX XXXX",
        linkedin: "https://linkedin.com/in/your-profile"
    }
}
```

### 2. Update or Add a Project:
To modify a project or add a new case study, just edit or append to the `projects` array in `portfolio-data.js`.
Every project card and interactive case study modal will update automatically!

### 3. Replace Your CV:
Simply drop your updated CV PDF into:
`assets/cv/Ibrahim_Alaa_CV.pdf`

---

## 🛡️ Core Highlights of This Portfolio
- **Completely Independent:** No dependency on Laravel, ALAMAAL, Composer, or npm. Pure standard web technologies.
- **Grounded in real work:** The portfolio currently highlights `Awfar`, `CivicFix`, `Clinic Booking`, `ALAMAAL`, and `Ezhal`.
- **Technical Case Studies:** Each project showcases Problem → Solution → Architecture → Key Features → Engineering Decisions (`lockForUpdate`, Repository Pattern, State Transitions).
- **Fast & Zero Bloat:** Built with pure semantic HTML5, modern CSS, and vanilla ES modules.
