<template>
  <h2 class="heading">Projects</h2>

  <div class="projects">
    <ul class="projects-list">
      <li>
        <div class="project">
          <div class="image-container">
            <img src="../assets/ahs.png" class="project-image" alt="Project-Image" />
            <button
              class="github-button"
              onclick="window.open(`https://github.com/kirtii119/EDI-Main`, '_blank')"
            >
              <img src="../assets/github-sign.png" class="github-image" />
              Github
            </button>
          </div>

          <div class="project-description-container">
            <h2>Automated Hiring System using Semantic Similarity & Computer Vision</h2>
            <div class="project-stack">
              <p class="stack-component">Python</p>
              <p class="stack-component">Natural Language Processing</p>
              <p class="stack-component">NLTK</p>
              <p class="stack-component">Semantic Similarity</p>
              <p class="stack-component">Web Scraping</p>
              <p class="stack-component">CNN</p>
              <p class="stack-component">Spacy</p>
              <p class="stack-component">Deep Learning</p>
            </div>
            <ul class="project-description">
              <li>
                Leveraged semantic similarity using BERT model to shortlist resume and generated a
                resume report out of it.
              </li>
              <li>
                Applied NLTK algorithms and spacy’s pre-trained model for data processing and
                tagging for natural language.
              </li>
              <li>
                Conducted interview based on the resume report, job description and gathered
                tailored real-time questions from online resources from web, reducing the interview
                time and its preparation for interviewers by at least 6 hours each hiring cycle.
              </li>
              <li>
                Designed an innovative real-time interface to identify variations in facial
                expressions and voice to determine confidence level and malpractices during the
                interview using Sequential CNN model and LSTM along with Python OpenCV library.
              </li>
            </ul>
          </div>
        </div>

        <div class="project">
          <div class="image-container">
            <img
              src="../assets/person_reidentification.png"
              class="project-image"
              alt="Project-Image"
            />
            <button class="github-button">
              <img src="../assets/github-sign.png" class="github-image" />
              Github
            </button>
          </div>

          <div class="project-description-container">
            <h2>
              Improving Person re-identification with Dual Generator and Dual Discriminator in
              Conditional GANs
            </h2>
            <div class="project-stack">
              <p class="stack-component">Python</p>
              <p class="stack-component">Generative Adversarial Network</p>
              <p class="stack-component">OpenCV</p>
              <p class="stack-component">CNN</p>
            </div>
            <ul class="project-description">
              <li>
                Developed a dual-generator and dual-discriminator based conditional GAN system,
                reducing error rate for person reidentification by 13%.
              </li>
              <li>
                Applied Python’s OpenCV library to capture and identify objects from the images.
              </li>
              <li>
                Enhanced the image quality using combination of low-light image optimization
                technique and attention mechanism.
              </li>
              <li>
                Wasserstein Distance algorithm and Attention mechanism helped in distinguishing real
                and fake images.
              </li>
            </ul>
          </div>
        </div>

        <div class="project">
          <div class="image-container">
            <img src="../assets/portfolioAnalytics.png" class="project-image" alt="Project-Image" />
            <div class="github-buttons-container">
              <div class="github-buttons">
                <p>Backend:</p>
                <button
                  class="github-button"
                  onclick="window.open(`https://github.com/AadeshKabra/Portfolio-Analytics---Backend`, '_blank')"
                >
                  <img src="../assets/github-sign.png" class="github-image" />
                  Github
                </button>
              </div>
              <div class="github-buttons">
                <p>Frontend:</p>
                <button
                  class="github-button"
                  onclick="window.open(`https://github.com/AadeshKabra/Portfolio-Analytics---Frontend`, '_blank')"
                >
                  <img src="../assets/github-sign.png" class="github-image" />
                  Github
                </button>
              </div>
            </div>
          </div>

          <div class="project-description-container">
            <h2>Portfolio Analytics</h2>
            <div class="project-stack">
              <p class="stack-component">Python</p>
              <p class="stack-component">FastAPI</p>
              <p class="stack-component">VueJS</p>
              <p class="stack-component">RAG chatbot</p>
            </div>
            <ul class="project-description">
              <li>
                Portfolio Analytics is an interactive web application designed to help
                monitor, analyze, and make data-driven decisions about my stock investments in Zerodha.
              </li>
              <li>
                Contains interactive charts (line, bar, pie, candlestick) for portfolio trends,
                stock price history, and sector allocation.
              </li>
              <li>Contains a RAG based chatbot to answer questions related to my portfolio</li>
              <li>Aggregates the latest stock market news relevant to my portfolio.</li>
              <li>Used Zerodha based authentication system in the application for secure-login process.</li>
            </ul>
          </div>
        </div>

        <div class="project">
          <div class="image-container">
            <img src="../assets/meAccounts.png" class="project-image" alt="Project-Image" />
            <button
              class="github-button"
              onclick="window.open(`https://github.com/AadeshKabra/MEAccounts`, '_blank')"
            >
              <img src="../assets/github-sign.png" class="github-image" />
              Github
            </button>
          </div>

          <div class="project-description-container">
            <h2>MEAccounts - An accounting application for Mangala Enterprises</h2>
            <div class="project-stack">
              <p class="stack-component">Python</p>
              <p class="stack-component">Flask</p>
              <p class="stack-component">MongoDB</p>
              <p class="stack-component">Javascript</p>
              <p class="stack-component">HTML</p>
              <p class="stack-component">CSS</p>
            </div>
            <ul class="project-description">
              <li>It is an accounting application developed for Mangala Enterprises, according to the specifications requested by the company.
              </li>
              <li>
                User could analyze the data in the form of dashboards, charts and graphs.
              </li>
              <li>
                Google-based authentication system was used in the application for a secure-login process.
              </li>
              <li>
                Enables users to filter transactions by date range for generating reports and summaries.
              </li>
              <li>
                Offers administrative control for managing users and data integrity.
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style scoped>
.heading {
  text-align: center;
  font-size: 2rem;
  /* margin-bottom: 2rem; */
  color: #2c3e50;
  font-weight: bold;
}

.projects {
  display: flex;
  justify-content: center;
}

.project {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 2em;
  padding: 2em;
  border-radius: 10px;
  width: 100%;
  background-color: #f9f9f9;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  max-width: 1000px;
}

.project:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  /* transform: translateY(-8px);   */
}

.image-container {
  margin-right: 2em;
}

.project-image {
  height: 250px;
  width: 250px;
}

.projects-list {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.project-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  /* margin-top: 1em; */
}

.stack-component {
  background-color: #4a90e2;
  color: white;
  padding: 6px 8px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
}

.project-description p {
  text-align: justify;
}

.project-description li{
  text-align: justify;
  margin-top: 5px;
}

.github-buttons-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.github-buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100%;
}

.github-button {
  font-size: 16px;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 5px;
  font-family: 'Times New Roman', Times, serif;
  margin-top: 10px;
  width: 100%;
}
.github-button:hover {
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
}

.github-image {
  height: 20px;
  width: 20px;
}
</style>
