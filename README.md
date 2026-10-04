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

## License

No explicit license is currently declared in this repository.
