<template lang="html">
  <div class="about">
    <v-row justify="center">
      <v-col cols="11" sm="10" md="8">
        <h1 class="text-center">About me</h1>
        <section>
          <h2>Personal background</h2>
          <p>
            My name is Ildiko Zsigmond, I am a self-taught web developer.
          </p>
          <p>
            I have a degree in pharmacology, but coding always interested me, so I decided it was time to give it a chance.
            At the moment I code in my free time (besides my part-time job as a pharmacist), working on my portfolio.
          </p>
        </section>
        <section>
          <h2>Coding History</h2>
          <p>
            After a really short encounter with C++, I found Python - Django was next.  I took courses online (Udemy, Coursera, edX), followed tutorials on YouTube, and I really liked it.
          </p>
          <p>
            In Hungary, to be a freelancer programmer officially ( basically for tax reasons ), you need a degree in this field. There are some official courses available for this (No need for bachelor/master degree, but still). So I took this 10-month course and found that it gave me basically no knowledge, no experience but only a paper. And of course, they took my money :D
          </p>
          <p>
            A family member (a PHP developer) suggested learning Vue, and I absolutely loved it! It felt good to make a page alive.
            Some weeks ago I started experimenting with a headless cms, Directus.
          </p>
        </section>
        <section>
          <h2>Portfolio</h2>
          <p>
            I have already created some pages for my portfolio - including my portfolio page (<a href="https://www.zsigmondildiko.hu/" target="_blank">zsigmondildiko.hu</a>).
          </p>
          <h3>My first websites</h3>
          <ul>
            <li>My first real-life project was a very basic information website for a pediatrician friend (Vue, Vuetify) . That page also has a Django Rest Framework backend for handling the News.
              <br/><a href="https://pecel1gyerek.hu/">pecel1gyerek.hu</a>
            </li>

            <li>My nephew started learning the soroban and I was wondering if I could animate one with Javascript. I ended up with this page :
              <br/><a href="https://soroban-practice.firebaseapp.com/">soroban-practice.firebaseapp.com</a>
            </li>

            <li>I also have a demo shelter page providing a user-friendly administration page (not the Django admin), with pre-installed users, different permissions to try out.
              <br/><a href="https://shelter-basic.firebaseapp.com/">shelter-basic.firebaseapp.com/</a>
            </li>

            <li>
              Last but not least, I added this Chingu solo project to my portfolio.
            </li>
          </ul>
          <h3>Git repositories</h3>
          <ul>
            <li>
              <a href="https://github.com/zsigil">GitHub</a>
            </li>
            <li>
              <a href="https://bitbucket.org/zsigil/">BitBucket</a>
            </li>
          </ul>
        </section>
        <section>
          <h2>Coding Goals</h2>
          <p>
            I would like to have deeper knowledge in <span class="emph">Python</span>, and I am really interested in frontend development with <span class="emph">Vue</span>.
            I would like to gain teamwork/real project experience, and become a freelance developer (working remotely would be fantastic).
          </p>
        </section>
        <section>
          <h2>Chingu</h2>
          <p>
            This is my first time ever with Chingu, this is my pre-work solo project. I hope to meet others with the same interests, and get into a voyage, working with Vue and/or Python.
          </p>
        </section>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
a{
  text-decoration: none;

  &:hover{
    color: midnightblue;
  }
}

section{
  margin: 30px 0;

  @media(max-width: 600px){
    p{
      text-align: justify;
    }
  }
}

h1{
  text-transform: uppercase;
  letter-spacing: 2px;
}

h2{
  letter-spacing: 2px;
}

h3{
  letter-spacing: 1px;

  &:not(:first-child){
    margin-top: 25px;
  }
}

p{
  line-height: 1.7;
}

li{
  margin: 5px 0;
}


.emph{
  font-weight: bold;
}
</style>
