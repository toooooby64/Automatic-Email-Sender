
document.querySelector('.btn').addEventListener("click", submitForm)


function encodeEmail(){
    const encEmail = "amFzb24uYWx2YXJlejU2NjdAZ21haWwuY29t";

    const email = document.getElementById("contact");
    email.setAttribute("href", "mailto:".concat(atob(encEmail)));

}

function test(){
    let fname = document.querySelector(".fname").value
    let lname = document.querySelector(".lname").value
    let email = document.querySelector(".email").value
    console.log(fname)
    console.log(lname)
    console.log(email)
}

 function submitForm(){
    let fname = document.querySelector(".fname").value
    let lname = document.querySelector(".lname").value
    let email = document.querySelector(".email").value
    sendEmail(fname,lname,email) 
}


function sendEmail(firstName, lastName, email){
    Email.send({
        SecureToken : "e55fe49a-5dc5-420d-b174-8d02b575410d",
        To : `${email}`,
        From : "jason.alvarez5667@gmail.com",
        Subject : "Hi! I'm Jason Alvarez.",
        Body : 
            `<div class="email-text">
                <p>Hello ${firstName} ${lastName}!</p>
                <p>My name is Jason Alvarez. If you received this we met during the Cisco Meraki Los Angeles Event, and I have to say it was a pleasure to meet you.</p>
                <p>I am currently a JR. enrolled at Cal State LA pursuing a degree in Computer Science. My expected graduation is May of 2024. This automatic email sender is one of the many projects I have built in order to advance my knowledge and skills with software development. With my past work experience and my passion to learn and grow I hope to hear from you soon.</p>
                <p>Below are my Email, Resume, LinkedIn and Github profiles.</p>
                <p>My Email: jason.alvarez5667@gmail.com</p>
                <p>Resume: https://docs.google.com/document/d/1_z7AQHHCRXMW6GSKuyfCVNCd0pHH8uyV/edit?usp=sharing&ouid=101988256412340763156&rtpof=true&sd=true</p>
                <p>LinkedIn Profile: https://www.linkedin.com/in/jason-alvarez-966a0a241/</p>
                <p>Github Profile: https://github.com/toooooby64</p>
                <p>Thank you, </p>
                <p>Jason Alvarez</p>
            </div>`
    })

    setTimeout(function(){
        window.location.href = `https://toooooby64.github.io/Automatic-Email-Sender/thankyou.html?fname=${firstName}&email=${email}`;
      }, 50); 
}


