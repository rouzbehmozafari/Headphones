let mail = document.getElementById('email')
let subs = document.getElementById('subs')
function sendMail() {
    console.log(mail.value)
}
function subsFunc() {
    console.log('hi')
    subs.style.transform = "translateY(120%)"
    subs.style.display = 'block'
}
function closeN() {
    subs.style.display = 'none'
    console.log('yt')

}