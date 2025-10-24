//הוצאת מערך הילדים מהמחסנית למסך
let newChildren1 = localStorage.getItem('detiles')
//יצירת מערך של ערכים המיוצר מהמחסנית
let newChildren = JSON.parse(newChildren1)

// שיכיל את כל המוצרים div  יצירת  
let d = document.createElement('div')
// הקטן div שלו, כדי שנוכל לתת לו עיצוב שונה מה id  ה
d.id = 'bigDiv'
// מכניס אותו לדף
let bod = document.getElementsByTagName('body')[0]
bod.appendChild(d)


//יצירת ילדים מתחלפים
for (let index = 0; index < 1000; index++) {
    //פונקציית חץ שולחת מידע כל 3 שניות
    setTimeout(() => exam(), index * 3000)
}

function exam() {
    //ניקוי ופינוי הדיב
    d.innerHTML = ''
    //הגרלת מספר ראשון ליצירת תצוגה רנדומלית
    let num = Math.floor(Math.random() * newChildren.length)

    // d-יצירת 3 מוצרים והכנסה לתוך ה
    for (let i = 0; i <3; i++) {
        //מניעה מחזרה על אותו מספר רנדומלי
        num = (num + 2) % (newChildren.length)
        //יצירת דיב לכל מוצר
        let child = document.createElement('div')
        d.appendChild(child)
        child.id = "child" + num
        child.className="child"


        //הכנסת תמונה לדיב מוצר
        let pic = document.createElement('img')
        pic.className = "pic"
        pic.src = '.' + newChildren[num].pic
        child.appendChild(pic)
        //הוספת ארוע בזמן ריצה- מציג עוד פרטים
        pic.addEventListener('click', show.bind(null, num))

        //הכנסת שם לדיב מוצר
        let nameC = document.createElement('p')
        nameC.className = "names"
        nameC.innerText = newChildren[num].name+' · '+ newChildren[num].age
        child.appendChild(nameC)

        //הוספת תאור
        let shortDes = document.createElement('p')
        shortDes.className = "shortDes"
        shortDes.innerText = newChildren[num].shortDescrip
        child.appendChild(shortDes)
    }
}

//מעבר לפרטי הילד שהפעיל את האירוע
function show(i) {
    //I-הכנסה למחסנית את ה
    let det = JSON.stringify(i)
    localStorage.setItem('iToDetails', det)
    window.location = '../Details/details.html'
}
