const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Mobile navigation
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Sample project information
const projectDetails = {
  sales: {
    title: "Sales Performance Analysis",
    html: `
      <p>This is an illustrative Excel project idea, not a verified business report.</p>
      <ul>
        <li>Sample revenue: ₹84,500</li>
        <li>Sample orders: 250</li>
        <li>Practise cleaning data, PivotTables, formulas and charts.</li>
      </ul>
      <p>Practice question: Which category contributes the most revenue?
      Calculate the answer from your own sample dataset.</p>`
  },

  sql: {
    title: "Customer Orders Analysis",
    html: `
      <p>Example SQL query to calculate customer spending:</p>
      <pre><code>SELECT customer,
       SUM(amount) AS total_spend
FROM orders
GROUP BY customer
ORDER BY total_spend DESC;</code></pre>
      <p>This query expects an orders table with customer and amount columns.
      Create matching practice data before running it.</p>`
  },

  python: {
    title: "E-commerce Data Analysis",
    html: `
      <p>Example Python workflow using Pandas:</p>
      <pre><code>import pandas as pd

df = pd.read_csv("products.csv")
print(df.head())
print(df.isna().sum())
print(df.groupby("category")["revenue"].sum())</code></pre>
      <p>Your CSV needs category and revenue columns for the last line to work.
      Test with your own dataset and document actual results.</p>`
  }
};

// Open the selected project details
const detailBox = document.getElementById("projectDetail");
const detailTitle = document.getElementById("detailTitle");
const detailContent = document.getElementById("detailContent");
const closeDetail = document.getElementById("closeDetail");

document.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", () => {
    const item = projectDetails[button.dataset.project];

    if (!item || !detailBox || !detailTitle || !detailContent) {
      return;
    }

    detailTitle.textContent = item.title;
    detailContent.innerHTML = item.html;
    detailBox.hidden = false;

    detailBox.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  });
});

// Close project details
if (closeDetail && detailBox) {
  closeDetail.addEventListener("click", () => {
    detailBox.hidden = true;
    detailContent.replaceChildren();
  });
}

// Automatically update the footer year
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Placeholder links reminder
document.querySelectorAll(".placeholder-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Replace this placeholder in index.html with your real profile URL before publishing.");
  });
});