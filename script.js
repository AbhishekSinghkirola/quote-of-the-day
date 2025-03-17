const fetchQuote = async () => {
  const response = await fetch(
    "https://api.freeapi.app/api/v1/public/quotes/quote/random"
  );
  const data = await response.json();

  return data.success ? data : false;
};

const displayQuote = async () => {
  const quoteEl = document.getElementById("quote");
  const authorEl = document.getElementById("author");

  const quoteDetails = await fetchQuote();

  if (quoteDetails) {
    quoteEl.textContent = quoteDetails.data.content;
    authorEl.textContent = quoteDetails.data.author;

    setBanner();
  } else {
    Toastify({
      text: "Failed to fetch quote",
      duration: 1000,

      style: {
        background: "red",
      },
    }).showToast();
  }
};

const setBanner = async () => {
  const response = await fetch("https://picsum.photos/1920/1080");

  if (response?.url) {
    document.body.style.background = `url("${response.url}")`;
  }
};

const copyQuote = () => {
  const quoteEl = document.getElementById("quote");

  const quote = quoteEl.textContent;

  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(quote)
      .then(() => {
        Toastify({
          text: "Quote copied to clipboard",
          duration: 1000,
        }).showToast();
      })
      .catch((err) => {
        Toastify({
          text: "Failed to copy",
          duration: 1000,
        }).showToast();

        fallbackCopyText(quote);
      });
  } else {
    fallbackCopyText(quote);
  }
};

const fallbackCopyText = (text) => {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);

  Toastify({
    text: "Copy to clipboard",
    duration: 1000,
  }).showToast();
};

const shareTweet = () => {
  const quoteEl = document.getElementById("quote");
  const authorEl = document.getElementById("author");

  const quote = quoteEl.textContent;
  const author = authorEl.textContent;

  window.open(
    `https://twitter.com/intent/tweet?text=${quote} - ${author}`,
    "_blank"
  );
};

const exportQuote = () => {
  const captureElement = document.getElementById("capture");

  const originalBoxShadow = captureElement.style.boxShadow;
  captureElement.style.boxShadow = "none";

  const options = {
    logging: true,
    backgroundColor: "#ffffff",
    ignoreElements: (el) =>
      el.tagName === "BUTTON" || el.classList.contains("buttons"),
  };
  html2canvas(captureElement, options).then((canvas) => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "screenshot.png";
    link.click();

    captureElement.style.boxShadow = originalBoxShadow;
  });
};

const newQuoteBtn = document.getElementById("new-quote");
const copyQuoteBtn = document.getElementById("copy-quote");
const tweetBtn = document.getElementById("tweet");
const exportQuoteBtn = document.getElementById("export-quote");

newQuoteBtn.addEventListener("click", displayQuote);

displayQuote();

copyQuoteBtn.addEventListener("click", copyQuote);

tweetBtn.addEventListener("click", shareTweet);

exportQuoteBtn.addEventListener("click", exportQuote);
