# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is a Hugo static site generator project. Hugo is available at `/opt/homebrew/bin/hugo`.

### Build and Development
- `hugo server` - Start development server with live reload
- `hugo server -D` - Start development server including draft content
- `hugo` - Build the static site (outputs to `public/`)
- `hugo --minify` - Build optimized production version

### Content Management
- `hugo new content/blog/posts/[filename].md` - Create new blog post
- `hugo new content/[section]/[filename].md` - Create new content page

## Site Architecture

### Content Structure
- **Marketing Website**: Professional services and tech-enabled business marketing consultancy
- **Content Types**:
  - Consulting services (`/consulting/`)
  - Workshops (`/workshops/` with subpages for specific programs)
  - AI Solutions (`/ai-solutions/` with specialized service pages)
  - Blog (`/blog/posts/`)
  - Legal pages (`/legal/`)

### Hugo Configuration
- **Config File**: `hugo.toml` - main site configuration
- **No Theme**: Uses custom layouts (theme = "")
- **Navigation**: Defined in `hugo.toml` with nested menus
- **Custom Layouts**: Located in `layouts/` directory with section-specific templates

### Key Directories
- `content/` - All markdown content organized by section
- `layouts/` - Hugo templates (baseof.html, partials, section-specific)
- `static/` - Static assets (CSS, JS, images)
- `public/` - Generated site output (build artifact)
- `data/navigation.yaml` - Additional navigation data

### Template System
- Base template: `layouts/_default/baseof.html`
- Partials: `layouts/partials/` (head, header, footer, analytics)
- Section-specific layouts for specialized content rendering
- Custom CSS: `static/css/amksite-css2.css`
- Custom JS: `static/js/main.js`

### Content Organization
The site uses Hugo's section-based content organization with the following structure:

#### Root Level Pages
- `_index.md` - Homepage/landing page
- `about.md` - About page
- `approach.md` - Business approach and methodology
- `consulting.md` - Consulting services overview
- `contact.md` - Contact information and forms
- `ebooks.md` - Digital resources and downloads
- `podcast.md` - Podcast content and episodes
- `ai-workflows.md` - AI workflow solutions

#### Sections with Subsections
- **AI Solutions** (`/ai-solutions/`)
  - `ai-solutions.md` - Main AI solutions landing page
  - `blog-articles.md` - AI-powered blog article services
  - `instagram-content.md` - Instagram content creation services
  - `linkedin-content.md` - LinkedIn content strategy services

- **Workshops** (`/workshops/`)
  - `workshops.md` - Main workshops landing page
  - `100-days-sprint.md` - 100-day business sprint program
  - `ai-lead-machine.md` - AI lead generation workshop

- **Blog** (`/blog/`)
  - `_index.md` - Blog section index
  - `posts/` - Individual blog post files

- **Legal** (`/legal/`)
  - `privacy-policy.md` - Privacy policy
  - `terms-conditions.md` - Terms and conditions

#### Content Structure Notes
- Each section can have both a main landing page and subsection pages
- Use `_index.md` for section landing pages that list other content
- Individual content pages use descriptive filenames
- Specialized landing pages for business services with detailed workshop descriptions and categorized AI solution offerings