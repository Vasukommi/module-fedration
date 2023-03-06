<template>
  <footer class="footer">
    <div class="container">
      <p class="footer-text">This is a footer component from Vue</p>
      <nav class="footer-nav">
        <ul>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Returns</a></li>
          <li><a href="#">Order Tracking</a></li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<style>
.footer {
  background-color: #232f3e;
  padding: 40px 20px;
  text-align: center;
  width: 100%;
  color: #fff;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 20px;
  position: absolute;
}

.footer .container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footer-text {
  margin-bottom: 10px;
}

.footer-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}

.footer-nav ul li {
  margin: 0 20px;
}

.footer-nav ul li a {
  color: #fff;
  text-decoration: none;
}

.footer-nav ul li a:hover {
  text-decoration: underline;
}
</style>
