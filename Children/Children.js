//הוצאת מערך הילדים מהמחסנית למסך
let newChildren1 = localStorage.getItem('detiles')
//יצירת מערך של ערכים המיוצר מהמחסנית
let newChildren = JSON.parse(newChildren1)


// הוצאה מהפונקציות כדי לחסוך כפילויות
//הוצאת מערך של ערכים המיוצר מהמחסנית
let arrChild1 = localStorage.getItem('likes')
let arrChild = JSON.parse(arrChild1)
let j = arrChild.length


// שיכיל את כל המוצרים div  יצירת  
let d = document.createElement('div')
// הקטן div שלו, כדי שנוכל לתת לו עיצוב שונה מה id  ה
d.id = 'bigDiv'
// מכניס אותו לדף
let bod = document.getElementsByTagName('body')[0]
bod.appendChild(d)
// d-יצירת מוצרים והכנסה לתוך ה
for (let i = 0; i < newChildren.length; i++) {

    //יצירת דיב לכל מוצר
    let child = document.createElement('div')
    child.className = "child"
    child.id = "child" + i
    //הכנסת דיב מוצר לדיב הכולל
    d.appendChild(child)
    child.className="allChild"

    //הכנסת תמונה לדיב מוצר
    let pic = document.createElement('img')
    pic.className = "pic"
    pic.id = "pic" + i
    pic.src = '.' + newChildren[i].pic
    child.appendChild(pic)
    //הכנסת תמונה לדיב מוצר
    // הוספת ארוע בזמן ריצה- מציג עוד פרטים
    pic.addEventListener('click', show.bind(null, i))

    //הכנסת שם לדיב מוצר
    let nameC = document.createElement('p')
    nameC.className = "names"
    nameC.id = "names" + i
    nameC.innerText = newChildren[i].name
    child.appendChild(nameC)

    // הוספת תאור
    let shortDes = document.createElement('p')
    shortDes.className = "shortDes"
    shortDes.innerText = newChildren[i].shortDescrip
    child.appendChild(shortDes)

    // הוספת תקציב חודשי
    let budget=document.createElement('p')
    budget.className="budget"
    budget.innerText='תקציב אימוץ חודשי: '+newChildren[i].budget+' ש"ח'
    child.appendChild(budget)

    // יצירת הלב- מכניס לסל
    let heart = document.createElement('i')
    heart.className = "fa-regular fa-heart"
    heart.id = "add" + i
    heart.style.display='none'//מוסתר- ברירת מחדל
    child.appendChild(heart)
    heart.addEventListener('click', toAdd.bind(null, i))
    //הוספת אירוע בזמן ריצה- מכניס לסל והלב מושחר

    let fullHeart = document.createElement('i')
    fullHeart.className = "full"
    fullHeart.className = "fa-solid fa-heart"
    fullHeart.id = "remove" + i
    fullHeart.style.display='none'//מוסתר- ברירת מחדל
    child.appendChild(fullHeart)

    // מעבר על הלייקים ובודק אם המוצר כבר קיים
    let flag=true
    for (let index = 0; index < arrChild.length; index++) {
        if (arrChild[index].name == newChildren[i].name)
            flag = false
    }
    // אם הוא קיים בלייקים הלב יהיה מושחר והלב הריק מוסתר
    if (flag == true){
        document.getElementById(fullHeart.id).style.display = 'none'
        document.getElementById(heart.id).style.display = 'block'
    }
    //אם לא- הלב יהיה ריק והלב המושחר מוסתר
    else {
        document.getElementById(fullHeart.id).style.display = 'block'
        document.getElementById(heart.id).style.display = 'none'

    }
    fullHeart.addEventListener('click', remove.bind(null, i))
    // הוספת אירוע בזמן ריצה- מסיר מהסל והלב הופך לריק


    // יצירת כפתור להצגת פרטים- מעבר לדף מוצר
    let more = document.createElement('button')
    more.innerText = 'לפרטים נוספים'
    more.className="moreDetails"
    child.appendChild(more)
    more.addEventListener('click', show.bind(null, i))
}

//פונקצית הוספה לסל
function toAdd(i) {
    if (localStorage.getItem('user') != '') {

        let flag = true
        for (let index = 0; index < arrChild.length; index++) {
            if (arrChild[index].name == newChildren[i].name) {
                flag = false
                document.getElementById("remove" + i).style.display = 'none'
                document.getElementById("add" + i).style.display = 'block'
                // אם הוא כבר קיים בלייקים, אז הוא לא יכנס שוב
            }
        }
        if (flag == true) {
            document.getElementById("remove" + i).style.display = 'block'
            document.getElementById("add" + i).style.display = 'none'
            // אם הוא לא קיים בלייקים, אז הוא יכנס

            arrChild[j++] = newChildren[i]
            let children = JSON.stringify(arrChild)
            // מכניס את המוצר למערך הלייקים
            localStorage.setItem('likes', children)
        }
    }
    // אם המשתמש לא מחובר, אז הוא לא יוכל להוסיף לסל
    else {
        alert('הכנס משתמש')
        window.location = '../LogIn/Log.html'
        //מעבר לדף התחברות
    }
}

// פונקציה להסרת הילד מהסל
function remove(i) {

        document.getElementById("remove" + i).style.display = 'none'
        document.getElementById("add" + i).style.display = 'block'

        for (let index = 0; index < arrChild.length; index++) {
            if (arrChild[index].name == newChildren[i].name) {
                arrChild.splice(index, 1)
                j--
            }
            // מכניס למחסנית
            let childrenJson = JSON.stringify(arrChild)
            localStorage.setItem('likes', childrenJson)
        }
}


// מעבר לפרטי הילד שהפעיל את הפונקציה
function show(i) {
    // I-הכנסה למחסנית את ה
    let det = JSON.stringify(i)
    localStorage.setItem('iToDetails', det)
    window.location = '../Details/details.html'

}

