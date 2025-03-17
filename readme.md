# Quote of the Day

A simple web application that fetches and displays a random quote from an API. Users can generate new quotes, copy them to the clipboard, share on Twitter, and export quotes as images.

## Features

- Fetch a random quote from an API
- Display the quote and author on the page
- "Next Quote" button to fetch another quote
- Copy to clipboard functionality
- Share quote on Twitter
- **Bonus Features:**
  - Set a random background image behind the quote
  - Export the quote as an image to save on the user's computer

## Screenshots

![Quote of the Day Screenshot](https://github.com/user-attachments/assets/4f2a5a31-15f1-4d9d-b32e-44999aa60368)


## Deployment Link

[Live Demo](https://abhishek-quote-of-the-day.netlify.app/)

## Installation & Usage

1. Clone the repository:
   ```sh
   git clone https://github.com/AbhishekSinghkirola/quote-of-the-day.git
   ```
2. Navigate to the project folder:
   ```sh
   cd quote-of-the-day
   ```
3. Open `index.html` in your browser.

## API Used

The application fetches quotes from a public API like:

```
https://api.freeapi.app/api/v1/public/quotes/quote/random
```

## How It Works

1. The application makes an API request to fetch a random quote.
2. The quote and author are displayed dynamically on the page.
3. The user can:
   - Click **New Quote** to fetch another quote.
   - Click **Copy** to copy the quote text.
   - Click **Tweet** to share on Twitter.
   - Click **Export** to save the quote as an image.

## Technologies Used

- HTML
- CSS
- JavaScript
- FREE API
