var nav=document.getElementsByTagName("nav")
nav[0].className="container d-flex flex-column flex-md-row justify-content-between nav"

let navItems=["webpack","navLink1","navLink2","navLink3"]
for (const navItem of navItems) {
    var aTag=document.createElement("a")
    aTag.innerHTML=navItem
    aTag.className="align-items-middle d-none d-md-inline-block nav-link text-white display-6"
    nav[0].appendChild(aTag)
}
var fristLink= document.getElementsByTagName("a")[0]
import photo from '../public/logo.png'
const img = document.createElement("img");
img.src=photo;
img.style.cssText="width:50px;height:50px;margin-left:20px;"
fristLink.appendChild(img);