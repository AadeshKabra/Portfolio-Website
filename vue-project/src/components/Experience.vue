<template>
<h2 class="heading">Experience</h2>

<div class="experience-section">
    <div class="experience">
        <div class="image-container">
            <img src="../assets/infineon.png" alt="infineon-technologies">
        </div>
        <div>
            <h2>Consulting Software Engineer</h2>
            <h3>Infineon Technologies</h3>
            <div class="location">
                <p>Bengaluru, India</p>
                <p>06/2024 - 06/2025</p>
            </div>
            <div>
                Worked as Consulting Software Engineer at Infineon Technologies, with Parent company Brisa Technologies being the parent company. Developing a Retrieval Augmented Generation (RAG) based chatbot ‘Genie’ to solve EDA license related queries for the Global License management team to decrease the overall resolution time by 15%. Used frameworks like FastAPI, VueJS and Langchain and RDDL for storage to make the system scalable. Developed complete retrieval pipeline using NLTK, spacy’s custom NER model. Integrating ‘GPT-4’ and ‘Mistral-8x-7b’ LLMs to provide answers to user queries.
            </div>
        </div>
    </div>

    <div class="experience">
        <div class="image-container">
            <img src="../assets/infineon.png" alt="infineon-technologies">
        </div>
        <div>
            <h2>Industry Automation Specialist Intern</h2>
            <h3>Infineon Technologies</h3>
            <div class="location">
                <p>Bengaluru, India</p>
                <p>07/2023 - 05/2024</p>
            </div>
            <div>
                Analyzed Big Data about Electronic Design and Automation (EDA) job runs project to improve the efficiency of the jobs.
                Queried Hadoop database using Hive and Impala query engines to extract useful insights about the ideal parameters for the EDA jobs; Improved efficiency of Xcelium EDA jobs by 25% approximately on compute farm.
                Performed analysis based on duration of job, features executed by job, parallel jobs on host machines and minute-level and seconds-level breakdown of job runs.Built useful Tableau dashboards on the insights for data visualization. 
            </div>
        </div>
    </div>
</div>
</template>


<script setup>

</script>


<style scoped>
.heading {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #1B3C53;
  font-weight: bold;
}

.experience{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.experience:hover{
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
  cursor: pointer;
}

.heading {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #1B3C53;
  font-weight: bold;
}

.experience-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.experience {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #fbfaf9;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 1000px;
  gap: 2rem;
}

.image-container img {
  width: 100px;
  height: auto;
  object-fit: contain;
}

.experience h2 {
  margin: 0;
  font-size: 1.25rem;
  color: #1B3C53;
}

.experience h3 {
  margin: 0.25rem 0 0 0;
  font-size: 1rem;
  font-weight: normal;
  color: #555;
}

.location {
  display: flex;
  gap: 2rem;
  font-size: 0.9rem;
  color: #777;
  /* margin-bottom: 1rem; */
}

.experience div:last-child {
  font-size: 0.95rem;
  text-align: justify;
  color: #333;
  line-height: 1.5;
}

</style>