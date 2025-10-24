//הוצאת מערך הילדים מהמחסנית למסך
let newChildren1 = localStorage.getItem('likes')
//יצירת מערך של ערכים המיוצר מהמחסנית
let newChildren = JSON.parse(newChildren1)


// שיכיל את כל המוצרים div  יצירת  
let d = document.createElement('div')
// הקטן div שלו, כדי שנוכל לתת לו עיצוב שונה מה id  ה
d.id = 'bigDiv'
// מכניס אותו לדף
let bod = document.getElementsByTagName('body')[0]
bod.appendChild(d)
// d-אני צריכה ליצור מוצרים ואותם להכניס לתוך ה
for (let i = 0; i < newChildren.length; i++) {

    //יצירת דיב לכל מוצר
    let child = document.createElement('div')
    child.className = "child"
    child.id = "child" + i
    d.appendChild(child)

    //הכנסת תמונה לדיב מוצר
    let pic = document.createElement('img')
    pic.className = "pic"
    pic.id = "pic" + i
    pic.src = '.' + newChildren[i].pic
    child.appendChild(pic)
    // pic.addEventListener('click', show.bind(null, i))
    // הוספת ארוע בזמן ריצה- הצגת פרטים (לא נגיש)


    //הכנסת שם לדיב מוצר
    let nameC = document.createElement('p')
    nameC.className = "names"
    nameC.id = "names" + i
    nameC.innerText = newChildren[i].name+' · '+newChildren[i].age
    child.appendChild(nameC)


    // יצירת הלב שמכניס לסל
    let fullHeart = document.createElement('i')
    fullHeart.className = "full"
    fullHeart.className = "fa-solid fa-heart"
    fullHeart.id = "remove" + i
    child.appendChild(fullHeart)

    //הוספת ארוע בזמן ריצה- הסרה מהסל
    fullHeart.addEventListener('click', toRemove.bind(null, i))
}


// הוספת כפתור לשליחת פניה
let a1=document.createElement('a')
a1.href='../End/end.html'
a1.id='submit'
bod.appendChild(a1)
let button1=document.createElement('button')
button1.type='submit'
button1.innerText='הגשת פניה'
a1.appendChild(button1)


//(detiles)יצירת מערך של הילדים הנבחרים מהמערך הקיים במחסנית 
let arrChild1 = localStorage.getItem('likes')
let arrChild = JSON.parse(arrChild1)

//אם מערך המועדפים ריק, אז להציג הודעה מתאימה
if (arrChild.length == 0){
    let empty = document.createElement('h1')
    empty.innerText="עדיין לא בחרת כלום..."
    bod.appendChild(empty)
    //הסתרת כפתור הגשת פניה
     let sub=document.getElementById('submit')
    sub.style.display='none'

}

function toRemove(i) {
    //מעבר על מערך המועדפים
    for (let index = 0; index < arrChild.length; index++) {
        //אם המערך לא ריק וכן שם מפעיל הפונקציה שווה לשם שממוקם באינדקס
        if (arrChild[index].name == newChildren[i].name) {
            arrChild.splice(index, 1) //הסרה ממערך מועדפים
            location.reload()
            //הפעלת רענון הדף כדי להציג את המערך המעודכן
        }
    }

    //הכנסת מערך ילדים מועדפים מעודכן למחסנית
    let childrenJson = JSON.stringify(arrChild)
    localStorage.setItem('likes', childrenJson)
}

// מעבר לפרטי הילד שהפעיל את הפונקציה
function show(i) {
    // I-הכנסה למחסנית את ה
    let det = JSON.stringify(i)
    localStorage.setItem('iToDetails', det)
    window.location = '../Details/details.html'

}