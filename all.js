// מכניס אותו לדף
bodd = document.getElementsByTagName('header')[0]
// מוציא את שם המשתמש רק אם הוא קיים
if (localStorage.getItem('user') != '') {
    let name1 = localStorage.getItem('user')
    let nameA = JSON.parse(name1)
    let hiName = document.createElement('p')
    hiName.innerText = 'שלום ' + nameA[0]
    bodd.appendChild(hiName)
}

//משתנים עיצוביים
Tahoma1 = 'Tahoma,Geneva,Verdana,sans-serif';
Arial1 = 'Arial,Helvetica,sans-serif';
serif1 = 'serif';
cursive1 = 'cursive';

pink = `rgba(${235},${133},${133},${0.43})`
whiteblue = `rgba(${133},${220},${235},${0.43})`
black = `rgb(${0},${0},${0})`
darkBlue = `rgb(${30},${2},${72})`
green = `rgb(${25},${59},${13})`


style1 = localStorage.getItem('style')
if (style1 == "false") {
    localStorage.setItem('background', ' ')
    localStorage.setItem('fontColor', ' ')
    localStorage.setItem('fontFamily', ' ')
}
function OK() {
    localStorage.setItem('style', true)

    let allC = document.querySelectorAll('select')
    

    if (allC[0].value == 'תכלת')
        localStorage.setItem('background', whiteblue)
    if (allC[0].value == 'ורוד')
        localStorage.setItem('background', pink)
    if (allC[0].value == 'רגיל')
        localStorage.setItem('background', '')
    if (allC[1].value == 'שחור')
        localStorage.setItem('fontColor', black)
    if (allC[1].value == 'כחול')
        localStorage.setItem('fontColor', darkBlue)
    if (allC[1].value == 'ירוק')
        localStorage.setItem('fontColor', green)
    if (allC[1].value == 'רגיל')
        localStorage.setItem('fontColor', '')
    if (allC[2].value == 'Tahoma')
        localStorage.setItem('fontFamily', Tahoma1)
    if (allC[2].value == 'Arial')
        localStorage.setItem('fontFamily', Arial1)
    if (allC[2].value == 'serif')
        localStorage.setItem('fontFamily', serif1)
    if (allC[2].value == 'cursive')
        localStorage.setItem('fontFamily', cursive1)
    if (allC[2].value == 'רגיל')
        localStorage.setItem('fontFamily', '')
    background = localStorage.getItem('background')
    document.body.style.backgroundColor = background
    fontColor = localStorage.getItem('fontColor')

    document.body.style.webkitTextFillColor = fontColor
    fontFamily = localStorage.getItem('fontFamily')

    document.body.style.fontFamily = fontFamily

}
background = localStorage.getItem('background')
// let background=JSON.parse(background1)
document.body.style.backgroundColor = background
fontColor = localStorage.getItem('fontColor')

document.body.style.webkitTextFillColor = fontColor
fontFamily = localStorage.getItem('fontFamily')

document.body.style.fontFamily = fontFamily
