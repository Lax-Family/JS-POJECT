
// פונקציה המופעלת בלחיצה על רישום משתמש חדש
//  הפונקציה מוסיפה את המשתמש הנרשם למערך המשתמשים
function newUser() {

    // שמירת הנתונים המוכנסים באינפוטים
    let email = document.querySelector('input[type=email]').value//=email
    let userName = document.querySelector('input[type=text]').value
    let pass = document.querySelector('input[type=password]').value

    // בדיקת תקינות למילוי כל הפרטים
    if (email != "" && userName != "" && pass != "") {
        if (!isEmail(email))
            alert("מייל לא תקין")
        else {
            let detileJson = JSON.stringify([userName, pass])
            // האם המשתמש קיים
            let flag = true
            // מעבר על כל הנרשמים לבדיקה האם המשתמש כבר קיים
            for (let i = 0; i < localStorage.length; i++) {
                let mail = localStorage.key(i)
                if (mail == email) {
                    let Jdetiels = localStorage.getItem(mail)
                    let detailsArr = JSON.parse(Jdetiels)
                    flag = false // המשתמש קיים
                    if (detailsArr[1] == pass) {
                        alert('משתמש קיים')
                        window.location = '../Home/home.html'
                    }
                    else {
                        alert('סיסמה שגויה')
                        window.location = '../LogIn/Log.html'
                    }

                }
            }
            // אם המשתמש לא קיים
            if (flag == true) {
                //מוסיף מערך לייקים ריק
                if (localStorage.getItem('likes') != "[]") {
                    let arrChild1 = localStorage.getItem('likes')
                    let arrChild = JSON.parse(arrChild1)
                    userLikes = arrChild
                    detileJson = JSON.stringify([userName, pass, userLikes])
                    localStorage.setItem('likes', "[]")
                }

                // localהכנסת ושמירת הנתונים ב
                // key=email 
                // value=[userName,pass]
                let userJson = JSON.stringify([userName, email])
                localStorage.setItem('user', userJson)
                localStorage.setItem(email, detileJson)
                window.location = '../Children/Children.html'
            }
        }
    }
    //אם לא הכניס את כל הפרטים
    else
        alert('הכנס פרטים')

}

// פונקציית בדיקת תקינות מייל

function isEmail(email) {
    {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

}
