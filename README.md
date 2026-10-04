# Ankole Website

A static restaurant website for Ankole Grill, built with plain HTML, CSS, and JavaScript. The project contains multiple pages for the homepage, menu, reviews, events, live entertainment, contacts, reservation form, and a clock page.

## Project overview

This site is designed as a multi-page restaurant landing experience with a dark luxury aesthetic, floating bottom navigation, and responsive layouts for mobile and desktop.

## Tech stack

- HTML5
- CSS3
- Vanilla JavaScript

## Project structure

```text
.
├── main.html            # Home page
├── main.css             # Home page styling
├── main.js              # Shared client-side behavior
├── shared.css           # Shared design tokens and layout rules
├── menu.html            # Menu page
├── menu.css             # Menu page styling
├── reviews.html         # Reviews page
├── reviews.css          # Reviews page styling
├── events.html          # Events page
├── events.css           # Events page styling
├── live.html            # Live music page
├── live.css             # Live music page styling
├── contacts.html        # Contact page
├── contacts.css         # Contact page styling
├── reservation.html     # Reservation form page
├── reservation.css      # Reservation form styling
├── clock.html           # Clock page
├── clock.css            # Clock page styling
├── logo.svg             # Brand logo
├── *.jpg, *.jpeg, *.svg # Branding and photography assets
├── README.md            # Project documentation
```

## Local preview

Because this is a static HTML site, you can open the pages directly in a browser, or run a tiny local web server:

```bash
cd Ankole_website
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000/main.html
```

## Known issues to fix

1. Missing project documentation and setup instructions.
2. Reservation form does not submit to a backend or email service; it only validates client-side input.
3. `clock.html` duplicates the clock logic already implemented in `main.js`, which creates inconsistent maintenance and duplicated behavior.
4. The mobile menu interaction is partially implemented and may not behave consistently across pages; the nav menu should be initialized more predictably.
5. The navigation system is repeated across many pages instead of being generated from a shared template or component, which makes styling and updates harder to maintain.
6. Accessibility should be improved with better focus states, ARIA labels, and semantic form labeling for screen readers.
7. Image assets are stored locally and not optimized for web delivery; resizing/compression would improve performance.
8. There is no build tool, tests, or deployment workflow, so the project is difficult to maintain at scale.

## Suggested next improvements

- Add a proper backend or form handler for booking submissions.
- Centralize JavaScript behavior to avoid duplication.
- Improve responsiveness and mobile navigation tests.
- Add semantic accessibility improvements.
- Add automated checks or linting if the site grows further.

## License

No explicit license is currently declared in this repository.
