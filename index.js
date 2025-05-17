<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>S.E.P.T.O.R.C.H.</title>
  <style>
    /* Reset */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body, html {
      height: 100%;
      font-family: 'Roboto', sans-serif;
      background-color: #0a0a0a;
      color: #e0e0e0;
      overflow-x: hidden;
      scroll-behavior: smooth;
    }

    h1, h2, h3 {
      font-family: 'Orbitron', sans-serif;
      color: #00ffe7;
      text-shadow: 0 0 10px #00ffe7, 0 0 20px #00ffe7;
    }

    p {
      line-height: 1.6;
      color: #ccc;
    }

    a {
      color: #00ffe7;
      text-decoration: none;
    }

    /* Image Background */
    .bg-image {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      object-fit: cover;
      z-index: -3;
      filter: brightness(0.5) contrast(1.2);
    }

    /* Overlay */
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.5);
      z-index: -2;
    }

    /* Hero Section */
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      padding: 40px 20px;
      position: relative;
    }

    .hero h1 {
      font-size: 4rem;
      margin-bottom: 20px;
    }

    .hero p {
      font-size: 1.4rem;
      max-width: 700px;
      margin: 0 auto 30px;
    }

    .btn {
      display: inline-block;
      padding: 14px 30px;
      background: transparent;
      border: 2px solid #00ffe7;
      color: #00ffe7;
      font-weight: bold;
      font-size: 1.1rem;
      border-radius: 5px;
      transition: all 0.3s ease;
    }

    .btn:hover {
      background: #00ffe7;
      color: #000;
      box-shadow: 0 0 10px #00ffe7, 0 0 20px #00ffe7;
    }

    /* About Section */
    .about {
      padding: 100px 20px;
      background: #111;
      position: relative;
    }

    .about h2 {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 40px;
    }

    .breakdown {
      max-width: 900px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }

    .letter {
      background: rgba(255, 255, 255, 0.05);
      padding: 20px;
      border-left: 4px solid #00ffe7;
      border-radius: 8px;
      transition: transform 0.3s ease;
    }

    .letter:hover {
      transform: scale(1.03);
    }

    .letter h3 {
      font-size: 1.3rem;
      margin-bottom: 10px;
    }

    /* Footer */
    footer {
      text-align: center;
      padding: 30px 20px;
      background: #0d0d0d;
      color: #777;
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      .hero h1 {
        font-size: 2.5rem;
      }

      .hero p {
        font-size: 1.1rem;
      }
    }
  </style>

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Orbitron :wght@700&family=Roboto&display=swap" rel="stylesheet">
</head>
<body>

  <!-- Image Background -->
  <img src="https://collection.cloudinary.com/dt4u42fax/788508bd84dda1085d7af85a7104d6f3 " alt="Background Image" class="bg-image">

  <!-- Overlay -->
  <div class="overlay"></div>

  <!-- Hero Section -->
  <section class="hero">
    <h1>S.E.P.T.O.R.C.H.</h1>
    <p>Smart Electro-Physical Technology for Optimized Robotic Control and Handling</p>
    <a href="#about" class="btn">Learn More</a>
  </section>

  <!-- About Section -->
  <section id="about" class="about">
    <h2>About S.E.P.T.O.R.C.H.</h2>
    <div class="breakdown">
      <div class="letter">
        <h3>S – Smart</h3>
        <p>Intelligent systems using sensors and automation for real-time decision making.</p>
      </div>
      <div class="letter">
        <h3>E – Electro-Physical</h3>
        <p>Integration of electronics with mechanical systems for advanced mechatronics applications.</p>
      </div>
      <div class="letter">
        <h3>P – Technology</h3>
        <p>Cutting-edge tools and platforms applied across robotics, smart systems, and automation.</p>
      </div>
      <div class="letter">
        <h3>T – for</h3>
        <p>A bridge connecting innovation and practical implementation in robotic control systems.</p>
      </div>
      <div class="letter">
        <h3>O – Optimized</h3>
        <p>Designed for peak performance, energy efficiency, and minimal resource waste in automation.</p>
      </div>
      <div class="letter">
        <h3>R – Robotic</h3>
        <p>Focused on automating physical tasks, from sorting systems to industrial handling.</p>
      </div>
      <div class="letter">
        <h3>C – Control</h3>
        <p>Real-time feedback and programming-based system management for precision and reliability.</p>
      </div>
      <div class="letter">
        <h3>H – Handling</h3>
        <p>Efficient interaction with materials, especially relevant to smart garbage sorting and more.</p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    &copy; 2025 SEPTORCH. All rights reserved.
  </footer>

</body>
</html>
