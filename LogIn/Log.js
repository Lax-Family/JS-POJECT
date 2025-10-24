//פונקציית התחברות
function login() {
    // שמירת הנתונים המוכנסים באינפוטים
    let email = document.querySelector('input[type=email]').value
    let pass = document.querySelector('input[type=password]').value

    // בדיקת תקינות למילוי כל הפרטים
    if (email != "" && pass != "") {
        if (!isEmail(email))
            alert("מייל לא תקין")
        else {
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
                        let userJson = JSON.stringify([detailsArr[0], email])
                        localStorage.setItem('user', userJson)
                        window.history.back()
                    }
                    else {
                        alert('סיסמה שגויה')
                    }
                }
            }
            // אם המשתמש לא קיים
            if (flag == true) {
                alert('משתמש לא קיים')
                window.location = '../Registration/Reg.html'
                // מעביר לדף רישום משתמש חדש
            }
        }
    }
    // אם לא הוכנסו כל פרטים
    else {
        alert('הכנס פרטים')
        // היה צריך את זה??
        // window.history.back()

    }

}

// פונקציית בדיקת תקינות מייל
function isEmail(email) {
    {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

}