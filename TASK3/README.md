# Responsive Navigation Bar Task

## Approach Explanation

### Problem
Create a responsive navigation bar using only HTML and CSS. The navbar should:
- Include links for “Home,” “About,” and “Contact.”
- Collapse into a dropdown menu on screens smaller than 768px. 

### Implementation Strategy
1. I implemented a `#sidebar-active` checkbox to toggle mobile menu
2. I used media query with `@media (max-width: 768px)` to detect mobile screens and make the navigation bar responsive
3. I added buttons - open sidebar (☰) for opening and close-sidebar (✘) for closing the mobile menu
4. I used CSS `display: none` and `display: block`** to show/hide elements depending on checkbox. Condition used is `#sidebar-active`. If it is checked, open-sidebar button disappears and close button appears with sidebar menu and vice-versa depending on the current state of sidebar-active
5. I used Flexbox for horizontal layout and fixed positioning for mobile sidebar design
6. I used HTML with `<nav>` and `<a>` tags for structurizing
7. CSS was used for responsive behavior, hover effects, and visual styling. Small detail that I payed attention to, includes using Kin Technology's brand colors

## How to Run
1. Open `responsive_nav.html` directly in your web browser
2. Test responsiveness by resizing your browser window below 768px width
3. Click the open-sidebar button menu (☰) to open mobile navigation

