<template>
  <h2 class="heading">Publications</h2>

  <div class="publications-container">
    <div
      class="publication"
      onclick="window.open(`https://ieeexplore.ieee.org/document/10126463`, '_blank')"
    >
      <h2>
        A Semantic Approach for Automated Hiring using Artificial Intelligence & Computer Vision
      </h2>

      <p class="abstract">
        <b>Abstract: </b>
        This research paper presents an automated interview system that utilizes natural language
        processing and deep learning techniques to conduct job interviews. The system comprises 4
        modules, the first one being resume classification system, which is built on
        state-of-the-art NLP architecture and transformer-based BERT model. The model uses Named
        Entity Recognition and Text Classification to extract relevant information from the resume.
        The resume classification algorithm is based on the principle of context relevance, and
        skill mentions in the resumes are validated through an analysis of the candidate's
        experience and completed projects before being classified. The subsequent module utilizes
        the output from the resume model to generate a set of relevant interview questions for the
        candidate through utilizing natural language processing techniques and semantic analysis.
        The difficulty of the following questions is adjusted owing to the interviewee’s answer,
        very much like what human HRs do. Such questions are extracted with the help of web scraping
        by selenium driver. One of the most innovative parts of this system is its ability to reduce
        bias in the hiring process by using machine learning models to evaluate candidate responses.
        The following module assesses the candidate's personality during the interview using the CNN
        and LSTM models. In addition to generating relevant interview questions, the system also
        detects potential instances of misconduct or malpractice during the interview process using
        Open CV’S DNN module and a quantized model. Overall, this system has the potential to
        revolutionize the way companies conduct job interviews and improve the hiring process.
      </p>

      <div>
        <p class="pub-info-line">
          <span><b class="publisher">Publisher:</b> IEEE</span>
          <span><b class="published">Published in:</b>2023 IEEE 8th International Conference for Convergence in Technology (I2CT)</span>
        </p>
        <p><b>Date of Conference: </b>07-09 April 2023</p>
        <p><b>DOI: </b>10.1109/I2CT57861.2023.10126463</p>
      </div>
    </div>

    <div
      class="publication"
      onclick="window.open(`https://ieeexplore.ieee.org/document/10530790`, '_blank')"
    >
      <h2>
        Improving Person-Re Identification with Dual-Generator and Dual-Discriminator Architecture
        in Conditional GANs
      </h2>

      <p class="abstract">
        <b>Abstract: </b>
        A significant challenge in computer vision, which aims to recognise a person across numerous
        camera views, is the re-identification of persons over several non-interconnected camera
        views. Generative Adversarial Networks (GANs) have been employed successfully in person
        re-identification tasks, where they can generate realistic images of a person based on a
        query image. In this paper, a new novel Dual-Generator and Dual-Discriminator architecture
        for Conditional GANs is used for re-identification. The proposed architecture consists of
        two image generators and two discriminators that generate high-quality images and capture a
        person's identity information efficiently. The discriminators use the Wasserstein distance
        method for classification between real and fake images. Additionally, the system utilizes
        low-light image optimization for pre-processing the images, which improves the quality and
        visibility of the images captured in low-light conditions, making them more suitable for
        re-identification. Study results show that the Dual-Generator and Dual-Discriminator
        architecture for Conditional GAN re-identification achieves improved accuracy and
        resilience. This research paper presents a new cutting-edge method for person-re
        identification.
      </p>
      <div>
        <p class="pub-info-line">
          <span><b class="publisher">Publisher:</b> IEEE</span>
          <span><b class="published">Published in:</b> 2024 1st International Conference on Cognitive, Green and
            Ubiquitous Computing (IC-CGU)</span>
        </p>
        <p><b>Date of Conference: </b>01-02 March 2024</p>
        <p><b>DOI: </b>10.1109/IC-CGU58078.2024.10530790</p>
      </div>
    </div>

    <div
      class="publication"
      onclick="window.open(`https://www.researchgate.net/publication/366311882_Cryptography_using_Automata_Theory`, '_blank')"
    >
      <h2>Cryptography using Automata Theory</h2>

      <p class="abstract">
        <b>Abstract: </b>
        Encryption and decryption are the two most crucial components of cryptography. Data
        protection is the main objective of both systems. We utilised encryption to transform plain
        text into ciphertext. Decryption, which works the other way around from encryption, is the
        process of converting encrypted text back into plain text. By using a finite state machine
        and the LU decomposition method, the created encryption solution ensures data secrecy for
        safe communication. In our suggested approach, we additionally employ lower and upper
        triangular matrices, which are obtained by decomposing a square matrix. During encryption,
        the key will be a lower triangular matrix modulated by a prime number, and during
        decryption, an upper triangular matrix modulated by a prime number. The tactic is
        beneficial. This tactic is helpful in sectors such as finance and military services where
        confidential material must be delivered.
      </p>
      <div>
        <p class="pub-info-line">
          <span><b class="publisher">Publisher:</b> ITM Web of Conferences</span>
          <span><b class="published">Published in:</b>ICAECT 2022</span>
        </p>
        <p><b>Date of Conference: </b>December 2022</p>
        <p><b>DOI: </b>10.1051/itmconf/20225001007</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>

.heading {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #1B3C53;
  font-weight: bold;
}

.publications-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 0 1rem 2rem;
}

.publication {
  width: 100%;
  max-width: 800px;
  background-color: #fbfaf9;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.publication:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
  cursor: pointer;
}

.publication h2 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #34495e;
}

.abstract {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
  color: #555;
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.abstract b {
  color: #1B3C53;
}

.publication div p {
  font-size: 0.9rem;
  margin: 0.3rem 0;
  color: black;
}


.publication b {
  color: #1B3C53;
}

.pub-info-line {
  display: flex;
  gap: 2rem; /* Adjust spacing between the two spans */
  flex-wrap: wrap; /* Allow wrapping on small screens */
  font-size: 0.9rem;
  color: black;
  margin-bottom: 0.8rem;
}

@media (max-width: 768px) {
  .publication {
    padding: 1.5rem;
  }

  .publication h2 {
    font-size: 1.1rem;
  }

  .abstract {
    font-size: 0.9rem;
  }
}
</style>
