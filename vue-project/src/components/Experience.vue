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
              <ul>
                <li>Worked as Consulting Software Engineer at Infineon Technologies, with Parent company Brisa Technologies being the parent company.</li>
                <li>Developed a Retrieval Augmented Generation (RAG) based chatbot ‘Genie’ to solve EDA license related queries for the GLM team to reduce the overall <b>resolution time by 30%</b> and deployed it on Red Hat Openshift using Docker.</li>
                <li>Created complete retrieval pipeline using NLTK, Spacy’s custom NER model and Langchain integrated with FastAPI, VueJS and a Data Lake to make the system scalable and efficient, with a <b>query response time of 20 seconds</b>.</li>
              </ul>
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
              <ul>
                <li>Queried Hadoop databases using SQL, Impala and Python to extract insights on ideal parameters for EDA jobs, resulting in approximately <b>20% improvement in Xcelium EDA job efficiency</b> on the compute farm.</li>
                <li><b>Helped in redesigning the Hadoop database</b> and DataLake of EDA jobs by identifying bottlenecks through analysis.</li>
                <li>Streamlined <b>ETL pipeline for data analysis</b> and built Tableau dashboards for job run analysis. Performed multiple types of analysis like Parallel Job analysis, Minute-level Analysis and various Tool/Feature level analysis</li>
              </ul>
                 
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