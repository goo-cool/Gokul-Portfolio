<<<<<<< HEAD
# 🌐 Static Portfolio Website on AWS

## 📖 Description
This project showcases my personal portfolio website built using HTML and deployed on **Amazon Web Services (AWS)** following cloud best practices for **security, scalability, and performance**.

---

## 🎯 Objective
- Build and host my own portfolio website
- Learn core AWS services used for static website hosting
- Implement HTTPS, CDN, DNS, and basic web security
- Understand how real-world static websites are deployed on AWS

---

## ☁️ AWS Services Used
- **Amazon S3** – Static website storage
- **Amazon CloudFront** – Content Delivery Network (CDN) & HTTPS
- **Amazon Route 53** – Domain and DNS management
- **AWS Certificate Manager (ACM)** – SSL/TLS certificate
- **AWS WAF** – Protection against common web attacks

---

## 🚀 Deployment Summary
- Website files uploaded to S3
- CloudFront configured for global content delivery
- HTTP to HTTPS redirection enabled
- Custom domain connected using Route 53
- Web Application Firewall added for security


## 👤 Author
**Gokul D**  

=======
# Gokul D — Portfolio

> Personal portfolio website built with vanilla HTML, CSS, and JavaScript. Themed after the AWS Management Console with a dark navy + orange accent design.

## 📋 Sections

- **whoami** — Summary, profile photo, contact links
- **education** — B.E. CSE (Cyber Security) @ Sri Sairam Institute of Technology
- **technical skills** — Programming, Security Tools, Cloud & DevOps, OS
- **experience** — 3 internships (HebeSec, Vectra Technosoft, C3SAR)
- **projects** — SOAR Platform, Hand Cricket Game (OpenCV)
- **certifications** — Google, RHCSA, AWS AI Practitioner, NPTEL
- **achievements** — AWS Cloud Club Captain, Hackathon wins, IEEE Xtreme

## 🛠️ Tech Stack

- Pure HTML5, CSS3, Vanilla JavaScript — no frameworks, no build tools
- Hosted on **AWS S3** (static website hosting) + **AWS Amplify**
- AWS Console-inspired dark theme (`#0f1923` bg, `#ff9900` accent)
- Responsive — mobile, tablet, desktop
- Typewriter effect, scroll spy, smooth scroll

## 📁 Project Structure

```
├── index.html          # Single-page site
├── css/
│   └── style.css       # All styles + responsive media queries
├── js/
│   └── main.js         # Typewriter, scroll spy, hamburger, smooth scroll
├── assets/
│   └── profile.jpg     # Profile photo
└── deploy/
    ├── bucket-policy.json   # S3 public read policy
    └── README.md            # Deployment instructions
```

## 🚀 Deploy Your Own

### AWS S3
```bash
# 1. Create bucket and enable static website hosting
aws s3 mb s3://YOUR-BUCKET-NAME --region us-east-1
aws s3 website s3://YOUR-BUCKET-NAME --index-document index.html

# 2. Apply public read policy
aws s3api put-bucket-policy --bucket YOUR-BUCKET-NAME --policy file://deploy/bucket-policy.json

# 3. Upload site files
aws s3 sync . s3://YOUR-BUCKET-NAME \
  --exclude "node_modules/*" --exclude "tests/*" \
  --exclude "deploy/*" --exclude "*.json" --exclude "*.md" \
  --exclude ".gitkeep" --exclude "desc.txt"
```

### AWS Amplify
1. Push this repo to GitHub
2. AWS Amplify Console → New App → Host Web App → Connect GitHub repo
3. Build settings: No build required (static site)
4. Deploy — get a free HTTPS URL automatically

## 📬 Contact

- Email: [gokulcybercraft06@gmail.com](mailto:gokulcybercraft06@gmail.com)
- GitHub: [github.com/goo-cool](https://github.com/goo-cool)
- LinkedIn: [linkedin.com/in/goocoolofficial](https://www.linkedin.com/in/goocoolofficial/)
>>>>>>> 9291896 (initial commit: Gokul D portfolio sit)
