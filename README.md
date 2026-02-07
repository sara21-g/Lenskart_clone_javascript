# Lenskart Clone - JavaScript Interactivity Implementation

## Project Overview
This project extends the Lenskart clone webpage with JavaScript-based interactivity while maintaining the original UI layout. All JavaScript features are implemented using **vanilla JavaScript** (no frameworks or libraries).

## File Structure
```
├── index.html      # Main HTML file with semantic structure
├── style.css       # External stylesheet with all CSS including dark theme
└── script.js       # External JavaScript file with all interactive features
```

## Implemented JavaScript Features

### ✅ Feature 1: Button Click Interaction
**Implementation:**
- **Login Modal**: Clicking "Account" button opens a login modal
- **Try-On Alert**: Clicking "Try Now" button shows a success message
- **Add to Cart**: Clicking "Buy Now" changes button text and shows confirmation
- **Cart Counter**: Cart badge number updates dynamically when products are added

**Code Location:** Lines 17-46 in script.js

**User Interaction:**
1. Click "Account" in header → Login modal appears
2. Click "Try Now" button → Success message appears
3. Click "Buy Now" on any product → Button changes to "Added!" with green background
4. Cart count increments → Badge number updates from 2 to 3, 4, 5, etc. with animation

---

### ✅ Feature 2: Form Validation
**Implementation:**
- **Newsletter Form**: Validates email format and empty fields
- **Login Form**: Validates email format, empty fields, and password length
- **Dynamic Error Messages**: Shows error messages below input fields (no alerts)

**Validation Rules:**
- Empty fields not allowed
- Valid email format required (user@domain.com)
- Password must be at least 6 characters
- Error messages displayed dynamically below inputs

**Code Location:** Lines 48-119 in script.js

**User Interaction:**
1. Try submitting newsletter without email → Error: "Email address is required"
2. Enter invalid email → Error: "Please enter a valid email address"
3. Submit valid email → Success message and form reset

---

### ✅ Feature 3: Dynamic Content Change (DOM Manipulation)
**Implementation:**
- **Theme Toggle**: Switch between light and dark themes
- **Visual Changes**: Background colors, text colors, and borders change dynamically
- **Icon Change**: Moon icon changes to sun icon in dark mode

**Code Location:** Lines 121-144 in script.js

**User Interaction:**
1. Click the moon/sun icon in header
2. Entire website switches between light and dark theme
3. Icon changes from moon (light mode) to sun (dark mode)

---

### ✅ Feature 4: Show/Hide Sections
**Implementation:**
- **Login Modal**: Toggle visibility using JavaScript
- **Wishlist Hearts**: Toggle filled/empty heart icons
- **Modal Overlay**: Click outside modal to close

**Code Location:** 
- Modal: Lines 17-37 in script.js
- Wishlist: Lines 146-162 in script.js

**User Interaction:**
1. Click "Account" → Modal appears
2. Click X or outside modal → Modal disappears
3. Click heart icon on products → Toggles between outlined and filled

---

### ✅ Feature 5: Interactive Navigation
**Implementation:**
- **Active Menu Highlighting**: Currently active section is highlighted
- **Smooth Scroll**: Clicking navigation links smoothly scrolls to sections
- **Sticky Header**: Header shadow changes on scroll

**Code Location:** Lines 164-193 in script.js

**User Interaction:**
1. Click any navigation link → Smoothly scrolls to section
2. Active menu item is highlighted with background color
3. Scroll down → Header shadow becomes more prominent

---

### ✅ Feature 6: Image Gallery/Slider
**Implementation:**
- **Manual Navigation**: Previous/Next arrow buttons
- **Dot Navigation**: Click dots to jump to specific slides
- **Auto-play**: Automatically changes slides every 5 seconds
- **Pause on Hover**: Auto-play pauses when mouse hovers over slider

**Code Location:** Lines 195-260 in script.js

**User Interaction:**
1. Click next/previous arrows to navigate slides
2. Click dots to jump to specific slide
3. Wait 5 seconds → Slide automatically changes
4. Hover over slider → Auto-play pauses

---

### ✅ Feature 7: Local Storage (Bonus)
**Implementation:**
- **Theme Persistence**: Saves user's theme preference (light/dark)
- **Visit Counter**: Tracks number of visits to the website
- **Auto-load**: Theme preference is loaded when page is revisited

**Code Location:** Lines 262-283 in script.js

**User Interaction:**
1. Switch to dark theme
2. Refresh page → Dark theme is still active
3. Check console → Visit count increases with each page load

---

## Additional Features Implemented

### Success Messages
- Animated success notifications appear after actions
- Auto-dismiss after 3 seconds
- Smooth slide-in animation

### Wishlist Toggle
- Click heart icons on products to add/remove from wishlist
- Visual feedback with color change

### Add to Cart Animation
- Button text changes to "Added!"
- Background color changes to green
- Cart counter increments automatically
- Badge animates with scale effect
- Resets after 1.5 seconds

### Smooth Scrolling
- All anchor links have smooth scroll behavior
- Better user experience when navigating

---

## Testing Instructions

### 1. Test Button Click Interaction
- [ ] Click "Account" button → Modal opens
- [ ] Click "Try Now" button → Success message appears
- [ ] Click "Buy Now" on product → Button changes

### 2. Test Form Validation
- [ ] Submit newsletter without email → See error
- [ ] Submit invalid email (test@test) → See error
- [ ] Submit valid email → See success message
- [ ] Try login without fields → See errors
- [ ] Login with valid data → Modal closes with success

### 3. Test Theme Toggle
- [ ] Click moon icon → Theme changes to dark
- [ ] Icon changes to sun
- [ ] All colors update appropriately
- [ ] Refresh page → Theme persists

### 4. Test Show/Hide
- [ ] Click "Account" → Modal shows
- [ ] Click X → Modal hides
- [ ] Click outside modal → Modal hides
- [ ] Click heart on product → Icon toggles

### 5. Test Navigation
- [ ] Click "EYEGLASSES" → Scrolls to categories
- [ ] Active link gets highlighted background
- [ ] Smooth scrolling behavior works
- [ ] Scroll down → Header shadow changes

### 6. Test Slider
- [ ] Click next arrow → Slide changes
- [ ] Click previous arrow → Slide changes
- [ ] Click dots → Jumps to specific slide
- [ ] Wait 5 seconds → Auto-advances
- [ ] Hover over slider → Auto-play pauses

### 7. Test Local Storage
- [ ] Change theme to dark
- [ ] Refresh page → Theme remains dark
- [ ] Open console → See visit count
- [ ] Visit again → Count increases

---

## Technical Details

### Code Quality
- ✓ Properly commented and organized
- ✓ Readable variable and function names
- ✓ Separation of concerns (HTML, CSS, JS in separate files)
- ✓ No inline JavaScript in HTML
- ✓ Event listeners properly attached

### Browser Compatibility
- ✓ Works in modern browsers (Chrome, Firefox, Safari, Edge)
- ✓ Uses vanilla JavaScript (no external dependencies)
- ✓ CSS transitions for smooth animations
- ✓ Responsive design maintained

### Best Practices
- ✓ DOMContentLoaded event ensures elements exist
- ✓ Console logs for debugging
- ✓ Error prevention with null checks
- ✓ Accessibility considerations (aria-labels)
- ✓ Clean code structure

---

## Console Logging

The script logs all major actions to the browser console for debugging:
- Modal open/close events
- Form validation results
- Theme changes
- Slide navigation
- Cart additions
- Visit count

**To view logs:**
1. Open browser DevTools (F12)
2. Go to Console tab
3. Interact with the page
4. See detailed logs of all actions

---

## Summary

This implementation successfully adds **7 JavaScript features** to the Lenskart clone:

1. ✅ **Button Click Interaction** - Modal, alerts, and button effects
2. ✅ **Form Validation** - Newsletter and login forms with error messages
3. ✅ **Dynamic Content Change** - Light/dark theme toggle
4. ✅ **Show/Hide Sections** - Modal and wishlist toggles
5. ✅ **Interactive Navigation** - Active highlighting and smooth scroll
6. ✅ **Image Slider** - Full-featured carousel with auto-play
7. ✅ **Local Storage** - Theme persistence and visit tracking

All features use **vanilla JavaScript** only, with code properly organized in an external `script.js` file. The UI layout remains unchanged from Activity 1, with only behavioral enhancements added through JavaScript.

---

## Student Information
**Activity:** JavaScript Interactivity Implementation  
**Features Implemented:** 7 out of 7 (including bonus)  
**External Files:** 3 (index.html, style.css, script.js)  
**Framework Used:** None (Vanilla JavaScript)  
**Date:** February 2026
