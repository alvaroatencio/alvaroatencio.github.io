const boots = document.getElementById("boots")

const navbar = document.getElementsByClassName("navbar")
navbar[0].innerHTML = ` <a class="navbar-brand" href="../index/index.html"><i class=" fas fa-adjust fa-2x logo"></i></a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav ml-auto">
    <li class="nav-item">
      <a class="nav-link" href="../index/index.html">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link"href="../Resume/resume.html">Resume</a>
    </li>
  </ul>
</div>`

const footer = document.getElementsByClassName("footer")

footer[0].innerHTML =

  `<div class="footer-top">
<i class="fa fa-linkedin fa-2x"></i></a>
<i class="fa fa-github fa-2x"></i></a>
</div>

<div class="footer-bottom">
<div class="contacto">
  <i class="fa fa-map-marker fa-2x"></i>
  <a href="">Mendoza, Argentina</a>
</div>
<div class="contacto">
  <i class="fa fa-phone fa-2x"></i>
  <a href="">(+54)2615892792</a>
</div>
<div class="contacto">
  <i class="fa fa-envelope fa-2x"></i>
  <p><a href="mailto:aatencio@asjservicios.com">aatencio@asjservicios.com</a></p>
</div>
</div>
`

function linkedinContact() {
  const linkedin = document.getElementsByClassName("fa-linkedin")
  linkedin[0].addEventListener("click", (_event) => { window.location.href = " https://www.linkedin.com/in/alvaro-atencio" })
}
function gitContact() {
  const gitHub = document.getElementsByClassName("fa-github")
  gitHub[0].addEventListener("click", (_event) => { window.location.href = "  https://github.com/alvaroatencio" })
}

gitContact()
linkedinContact()



