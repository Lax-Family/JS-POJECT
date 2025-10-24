//פונקציה המופעלת כאשר המשתמש לוחץ על כפתור "שלח הפניה"
function message1() {
   localStorage.setItem('likes', '[]')
   let d = document.createElement('div')
   document.body.appendChild(d);
   d.innerText = "הפניה נשלחה בהצלחה, נציג מטעמנו יפנה אלייך בהקדם להמשך התהליך."
   //ההודעה שתוצג למשתמש
   d.className = "message hidden"
   d.id = "message"
   document.getElementById("message").classList.remove("hidden");
   setTimeout(() => closMessage(), 2000);
   //סוגר את ההודעה לאחר שתי שניות- שולח לפונקציה מתאימה
}
//סוגר את ההודעה לאחר שתי שניות
function closMessage() {
   document.getElementById("message").classList.add("hidden");
   window.location = "../Home/home.html"
}