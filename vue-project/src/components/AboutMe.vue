<template>
    <section>
      <h1 class="heading">About Me</h1>
      <div class="profile-container">
        <div class="text-container">
          <p class="profile-text">
            I am a Software Engineer with a passion for solving real-life problems and developing innovative solutions. I have a strong foundation in Python, C++ and web development technologies, with deep interest in Natural Language and Data Science. I have worked on various projects that involve building scalable applications, data analysis and machine learning. Lately, I have been exploring the field of LLMs and their applications using Natural Language and AI. I am always eager to learn new technologies and improve my skills. I have completed my Bachelor's in Artificial Intelligence and Data Science with 9.33 CGPA. I have 1 year of work experience as Software Engineer at Infineon Technologies apart from an 11-month Internship. Always eager to learn and grow, I enjoy exploring new technologies and expanding my skill set. In my free time, I like to read books, explore new places and go on adventures.
          </p>
          <div class="profile-icons">
            <img src="../assets/github.png" class="profile-icon" alt="GitHub" onclick="window.open(`https://github.com/AadeshKabra`, '_blank')">
            <img src="../assets/linkedin.png" class="profile-icon" alt="LinkedIn" onclick="window.open(`https://www.linkedin.com/in/aadesh-kabra-06a050207/`, '_blank')">
          </div>
        </div>
        <div class="image-container">
          <img src="../assets/linkedin2.png" alt="Profile Picture" class="profile-image" />
        </div>
      </div>
    </section>

    <section class="tech-skills-section">
        <h1 class="heading">Tech Skills</h1>
        <div class="tech-row">
            <div class="tech-skill">
                <img src="../assets/python.png" alt="Python" class="tech-icon">
                <p class="tech-text">Python</p>
            </div>
            <div class="tech-skill">
                <img src="../assets/c++.png" alt="C++" class="tech-icon">
                <p class="tech-text">C++</p>
            </div>
            <div class="tech-skill">
                <img src="../assets/mysql.png" alt="MySQL" class="tech-icon">
                <p class="tech-text">MySQL</p>
            </div>
            <div class="tech-skill">
                <img src="../assets/impala.png" alt="Impala" class="tech-icon">
                <p class="tech-text">Impala</p>
            </div>
            <div class="tech-skill">
                <img src="../assets/vuejs.png" alt="VueJS" class="tech-icon">
                <p class="tech-text">VueJS</p>
            </div>
        </div>

        <div class="tech-row">
            <div class="tech-skill">
                <img src="../assets/fastapi.png" alt="FastAPI" class="tech-icon">
                <p class="tech-text">FastAPI</p>
            </div>
            <div class="tech-skill">
                <img src="../assets/tableau.png" alt="Tableau" class="tech-icon">
                <p class="tech-text">Tableau</p>
            </div>
            <div class="tech-skill">
                <img src="../assets/mongodb.png" alt="MongoDB" class="tech-icon">
                <p class="tech-text">MongoDB</p>
            </div>
            <div class="tech-skill">
                <img src="../assets/spacy_new.png" alt="Spacy" class="tech-icon">
                <p class="tech-text">Spacy</p>
            </div>
            <div class="tech-skill">
                <img src="../assets/flask.png" alt="Flask" class="tech-icon">
                <p class="tech-text">Flask</p>
            </div>
        </div>

        <div class="tech-row">
            <div class="tech-skill">
                <img src="../assets/javascript.png" alt="Javascript" class="tech-icon">
                <p class="tech-text">Javascript</p>
            </div>
            <div class="tech-skill">
                <img src="../assets/html.png" alt="HTML" class="tech-icon">
                <p class="tech-text">HTML</p>
            </div>
            <div class="tech-skill">
                <img src="../assets/css.png" alt="CSS" class="tech-icon">
                <p class="tech-text">CSS</p>
            </div>
        </div>
    </section>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .heading {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #1B3C53;
  }

  section{
    margin-top: 3em;
    margin-bottom: 3em;
  }

  .tech-skills-section{
    margin-top: 75px;
  }
  
  .profile-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    padding: 1rem;
  }

  .profile-text{
    text-align: justify;
  }
  
  .text-container {
    flex: 1 1 400px;
    max-width: 600px;
  }
  
  .text-container p {
    line-height: 1.6;
    font-size: 1rem;
    color: #1B3C53;
  }
  
  .profile-icons {
    margin-top: 1rem;
    display: flex;
    gap: 2rem;
  }
  
  .profile-icon {
    height: 40px;
    width: 40px;
    transition: transform 0.3s;
    cursor: pointer;
  }
  
  .profile-icon:hover {
    transform: scale(1.1);
  }
  
  .image-container {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid #1B3C53; /* Tailwind's blue-500 */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }

  .tech-row{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    margin-top: 2em;
  }

  .tech-skill{
    padding: 10px;
    border-radius: 10px;
    min-width: 150px;
  }
  .tech-skill:hover{
    /* transform: translateY(-4px); */
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
    transform: scale(1.1);
    background-color: #fbfaf9;
  }

  .tech-icon{
    height: 75px;
    width: 75px;
    display: block;
    margin: 0 auto;
  }

  .tech-text{
    text-align: center;
  }
  </style>
  