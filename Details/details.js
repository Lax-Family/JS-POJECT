//הוצאת מערך הילדים מהמחסנית למסך
let newChildren1 = localStorage.getItem('detiles')
//יצירת מערך של ערכים המיוצר מהמחסנית
let newChildren = JSON.parse(newChildren1)


// הוצאת הילד מהמחסנית
let theChild1 = localStorage.getItem('iToDetails')
// יצירת הילד 
let theChild = JSON.parse(theChild1)


// הוצאה מהפונקציות כדי לחסוך כפילויות
//הוצאת מערך של ערכים המיוצר מהמחסנית
let arrChild1 = localStorage.getItem('likes')
let arrChild = JSON.parse(arrChild1)
let j = arrChild.length

// flag = true- אם הוא עדיין לא נמצא בלייקים
let flag = true
for (let index = 0; index < arrChild.length; index++) {
    if (arrChild[index].name == newChildren[theChild].name)
        flag = false
}


// יצירת דיב לילד 
let child = document.createElement('div')
child.className = "child"
child.id = "child" + theChild

// מכניס אותו לדף
let bod = document.getElementsByTagName('body')[0]
bod.appendChild(child)

// יצירת כפתור חזרה
let back = document.createElement('i')
back.className = "fa-solid fa-chevron-circle-right"
child.appendChild(back)
back.id = "back"
back.title = " חזרה לדף הקודם"// הוספת כותרת לכפתור
// הוספת ארוע בזמן ריצה- מחזיר לדף הקודם
back.addEventListener('click', function () {
    history.back()
})

//יצירת דיב מידע
let info=document.createElement('div')
info.className="info"
child.appendChild(info)

// הכנסת שם 
let nameC = document.createElement('p')
nameC.className = "names"
nameC.innerText = newChildren[theChild].name+' · '+ newChildren[theChild].age
info.appendChild(nameC)


// הוספת תאור ארוך
let description = document.createElement('p')
description.className = "description"
description.innerText = newChildren[theChild].description
info.appendChild(description)

// הוספת תקציב שמקבלים
let budget = document.createElement('p')
budget.className = "budget"
budget.innerText ='תקציב אימוץ חודשי: '+ newChildren[theChild].budget+ ' ש"ח'
info.appendChild(budget)


// יצירת הלב שמכניס לסל
let heart = document.createElement('i')
heart.className = "fa-regular fa-heart"
heart.id = "add" + theChild
info.appendChild(heart)
// הוספת ארוע בזמן ריצה- מכניס לסל
heart.addEventListener('click', toAdd.bind(null, theChild))
// יצירת הלב המלא
let fullHeart = document.createElement('i')
fullHeart.className = "full"
fullHeart.className = "fa-solid fa-heart"
fullHeart.id = "remove" + theChild
info.appendChild(fullHeart)
//בודק אם הילד קיים במועדפים
if (flag == true){
    // כדי שיהיה מוסתר
    document.getElementById(fullHeart.id).style.display = 'none'
        document.getElementById(heart.id).style.display = 'block'
}
else {
    document.getElementById(fullHeart.id).style.display = 'block'
    document.getElementById(heart.id).style.display = 'none'

}
// הוספת ארוע בזמן ריצה- מסיר מהסל
fullHeart.addEventListener('click', remove.bind(null, theChild))


//הכנסת תמונה לדיב מוצר
let pic = document.createElement('img')
pic.className = "pic"
pic.src = '.' + newChildren[theChild].pic
child.appendChild(pic)


//פונקציה שמוסיפה את הילד לסל
function toAdd(i) {
    if (localStorage.getItem('user') != '') {

        let flag = true
        for (let index = 0; index < arrChild.length; index++) {
            if (arrChild[index].name == newChildren[i].name) {
                flag = false
                document.getElementById("remove" + i).style.display = 'none'
                document.getElementById("add" + i).style.display = 'block'
                remove(i)
            }
        }

        if (flag == true) {
            document.getElementById("remove" + i).style.display = 'block'
            document.getElementById("add" + i).style.display = 'none'

            arrChild[j++] = newChildren[i]
            let children = JSON.stringify(arrChild)
            localStorage.setItem('likes', children)
        }
    }
    //אם המשתמש לא מחובר אז הוא לא יכול להוסיף לסל
    else {
        alert('הכנס משתמש')
        window.location = '../LogIn/Log.html'
        //מעביר לדף התחברות
    }
}

//פונקציה שמסירה את הילד מהסל
function remove(i) {

    document.getElementById("remove" + i).style.display = 'none'
    document.getElementById("add" + i).style.display = 'block'
    for (let index = 0; index < arrChild.length; index++) {
        if (arrChild[index] != null)
            if (arrChild[index].name == newChildren[i].name) {
                arrChild.splice(index, 1)
                j--

            }
    }
    // מכניס למחסנית
    let childrenJson = JSON.stringify(arrChild)
    localStorage.setItem('likes', childrenJson)

}

