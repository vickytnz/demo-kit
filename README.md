# Template for accessibility testing 

Example service for building and testing an accessible service.

## Testing these pages

This was made using GOV.UK Frontend, the GOV.UK Design System macros where possible and the GOV.UK Prototype kit for interactive elements. 

This means that it should only have issues as in the [GOV.UK Design System accessibility statement](https://design-system.service.gov.uk/accessibility-statement/) (which note two issues with Dragon speech recognition software and some components).

When testing using accessibility tester [Adam Liptrot's Pattern Checker Chrome extension](https://liptrot.org/pattern-checker/), there are only 3 errors and thse are through known exceptions:

1. Timeout warning not found - this has not been included for the purposes of a prototype
2. ARIA link to input missing on character input field - this is from the GOV.UK Design System pattern
3. Page title does not match service name on GOV.UK start page - this is normally on the GOV.UK website and not a transaction


##  Known bugs
If someone goes from check your answers to a page and deletes information, the error message should show but does not.

