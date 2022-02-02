export default function createCard(txtColor,bgColor,parentNode,h1Content,pContent,subDivBg) {
    var card=document.createElement("div")
    card.className="my-3 py-3 col-6 text-center overflow-hidden mt-4 "+txtColor+" "+bgColor
    var h1=document.createElement("h1")
    h1.className="display-5"
    h1.innerHTML=h1Content
    card.appendChild(h1)
    var p=document.createElement("p")
    p.className="lead"
    p.innerHTML=pContent
    card.appendChild(p)
    var div=document.createElement("div")
    div.className="shadow-sm mx-auto "+subDivBg
    div.style.cssText="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"
    card.appendChild(div)
    parentNode.appendChild(card)
    
}
