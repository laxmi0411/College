# Software Requirements Specification (SRS)

Project: Admission Website (existing static pages)
Date: 2026-01-06
Author: (Generated)

## 1. Purpose
This SRS describes the requirements and recommended approach to convert the current set of static course pages into a coherent, maintainable admission web application that supports browsing courses, online applications, administrative review, and reporting.

## 2. Scope
- Convert/extend the existing HTML pages into a unified website with: searchable course catalog, course detail pages, student application form, admin dashboard, and notifications.
- Support both public users (prospective students) and admins (admissions staff).
- Deployable to a typical web host or serverless platform.

## 3. Stakeholders
- Prospective students: browse courses, submit applications, track status.
- Admissions staff: review applications, update status, manage course listings.
- Content editors: update static content for courses and pages.
- System administrators: deploy, monitor, and secure the system.

## 4. Assumptions and Constraints
- Current repo contains static HTML per-course files (e.g., `B.Tech.html`, `MBA.html`, `index.html`).
- Budget and hosting environments are unspecified — recommendations include both low-cost serverless and standard VPS options.
- Data privacy for applicants must be respected (store minimal PII, encrypt in transit and at rest).

## 5. Definitions
- Applicant: user who applies to a course.
- Course: an available program with details stored in CMS or DB.
- Admin: user with dashboard privileges.

## 6. Functional Requirements
1. Public Site
  - FR1.1: Homepage with featured programs and global search.
  - FR1.2: Course catalog listing (filter by faculty, level, location).
  - FR1.3: Course detail pages (reuse existing content where possible).
  - FR1.4: Responsive design for mobile/desktop.

2. Application Flow
  - FR2.1: Applicant registration (email + password or OTP) — optional guest apply.
  - FR2.2: Application form: personal info, education, course choice, documents upload (PDF/JPG), declarations.
  - FR2.3: Save-in-progress and resume later.
  - FR2.4: Confirmation email + application ID after submission.
  - FR2.5: Applicant portal to view application status.

3. Admin / Staff
  - FR3.1: Admin authentication and role-based access.
  - FR3.2: Dashboard showing pending, accepted, rejected, and in-review counts.
  - FR3.3: View full application, download attachments, add review notes, change status, send messages to applicant.
  - FR3.4: Manage courses (create/edit/remove) or sync with CMS.
  - FR3.5: Export applications (CSV) and simple reports.

4. Integrations
  - FR4.1: Email service (SMTP, SendGrid, etc.) for notifications.
  - FR4.2: Optional payment gateway integration for application fees.

## 7. Non-Functional Requirements
- NFR1: Security — HTTPS enforced, proper auth/session handling, input validation, file upload virus scanning (or size/type limits).
- NFR2: Performance — page load <= 3s on 3G for primary pages; API responses < 500ms for simple queries.
- NFR3: Scalability — design supports growth (serverless or containerized backend recommended).
- NFR4: Availability — 99.5% SLA desirable for public pages.
- NFR5: Accessibility — WCAG AA for public pages.
- NFR6: Privacy & Compliance — store only required PII, implement data retention policy, support data deletion requests.

## 8. Data Model (high level)
- Course: id, title, faculty, level, description, eligibility, seats, documentsRequired, slug
- Applicant: id, name, email, phone, dob, address, education[], selectedCourseId, applicationStatus, attachments[], createdAt
- AdminUser: id, name, email, role, hashedPassword
- ApplicationAudit: applicationId, adminId, action, timestamp, notes

## 9. API / Endpoints (example)
- GET /api/courses — list/filter courses
- GET /api/courses/:slug — course details
- POST /api/applications — submit application
- GET /api/applications/:id — applicant or admin view (authorized)
- POST /api/auth/login — admin/applicant login
- POST /api/uploads — upload document (authenticated)
- GET /api/admin/reports — exports (admin only)

Authorization: JWT or session cookies with CSRF protection for web forms.

## 10. System Architecture / Best Approach
Recommended architecture options with rationale:

Option A — Minimal effort / Low cost (Static + Serverless Forms)
- Frontend: Convert existing HTML to responsive templates (static site generator like Eleventy or use the current HTML with a small amount of JS).
- Forms & backend: Use serverless form providers (Formspree, Netlify Forms) or serverless functions to accept applications and save to a managed DB (Airtable, Google Sheets, or a simple DynamoDB/Firestore).
- Admin: Lightweight admin UI that reads from the managed backend.
- When to choose: limited budget, low expected traffic, faster time-to-market.

Option B — Full-featured (Recommended for scale and control)
- Frontend: Single-page app (React/Vue) or server-rendered site (Next.js) reusing existing course content as MD/HTML.
- Backend: Node.js + Express or serverless functions for APIs.
- Database: PostgreSQL or MongoDB (depending on relational needs). Use ORM (Prisma/TypeORM) for maintainability.
- Auth: JWT or session-based with role management.
- Storage: Cloud object storage (S3) for uploaded documents.
- Deployment: Docker + Kubernetes or managed services (Vercel/Netlify + Heroku/Azure App Service).
- When to choose: control over data, more customization, higher traffic, payment integration.

Security and privacy are easier to enforce with Option B.

## 11. UI / UX Guidelines
- Reuse and standardize existing course pages into a template.
- Clear application CTA on each course page.
- Progress indicator on multi-step forms.
- Provide printable application summary.
- Validate fields inline and provide helpful error messages.

## 12. Testing Plan
- Unit tests for backend logic and validation.
- Integration tests for API endpoints.
- End-to-end tests for core flows (search, apply, admin review) using Playwright or Cypress.
- Accessibility audits (axe-core) and performance checks (Lighthouse).

## 13. Deployment & Maintenance
- CI pipeline: lint, unit tests, build, deploy to staging, run smoke tests, deploy to production.
- Backups: nightly DB backups, backups of uploaded files.
- Monitoring: uptime checks, error reporting (Sentry), logs aggregated (ELK or cloud provider).

## 14. Roadmap & Milestones
- M1 (Week 1–2): Inventory existing pages, migrate to templates, design data model.
- M2 (Week 3–4): Implement application API and form; basic admin review UI.
- M3 (Week 5–6): Authentication, file uploads, email notifications, export feature.
- M4 (Week 7–8): Testing, accessibility fixes, deployment, launch.

## 15. Risks & Mitigations
- Risk: PII leakage — Mitigation: encryption, limited data retention, secure storage.
- Risk: High volumes of uploads — Mitigation: limit file sizes, use CDN/object storage.
- Risk: Content drift from many static files — Mitigation: centralize content in CMS or data source.

## 16. Appendix: Quick Tech Stack Recommendation (Full-featured)
- Frontend: React + Next.js (SSR) or plain responsive HTML if you want minimal JS.
- Backend: Node.js + Express or serverless functions.
- Database: PostgreSQL (recommended) or MongoDB.
- Storage: AWS S3 / Azure Blob Storage.
- Auth: OAuth2 + JWT or built-in session auth.
- CI/CD: GitHub Actions.

---

If you want, I can now:
- convert the existing HTML pages into a Next.js scaffold,
- create the initial backend API skeleton (Express + SQLite/Postgres), or
- produce a shorter one-page SRS tailored for submission.
