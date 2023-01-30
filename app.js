
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
                <p>I hope this email finds you well. My name is Jason Alvarez and it was a pleasure to meet you at the recent Cisco Meraki Los Angeles Event. I am currently a Junior at California State University, Los Angeles, where I am pursuing a Bachelor's degree in Computer Science. My anticipated graduation date is May 2024.</p>
                <p>As a driven and enthusiastic student, I have taken initiative in developing this automatic email sender and various other projects to further enhance my knowledge and skills in software development. I am confident that my previous work experience and my passion for continuous learning and growth make me a strong candidate for future opportunities.</p>
                <p>Please find attached my resume, as well as links to my LinkedIn and Github profiles.</p>
                <p>My Email: jason.alvarez5667@gmail.com</p>
                <a href="https://docs.google.com/document/d/1_z7AQHHCRXMW6GSKuyfCVNCd0pHH8uyV/edit?usp=sharing&ouid=101988256412340763156&rtpof=true&sd=true">My Resume</a>
                <span> | </span>
                <a href="https://www.linkedin.com/in/jason-alvarez-966a0a241/">LinkedIn</a>
                <span> | </span>
                <a href="https://github.com/toooooby64">Github</a>
                <p>Thank you for taking the time to consider my introduction. I look forward to potentially working with you in the future. </p>
                <p>Best regards,</p>
                <p>Jason Alvarez</p>
            </div>`
    })

    setTimeout(function(){
        window.location.href = `https://toooooby64.github.io/Automatic-Email-Sender/thankyou.html?fname=${firstName}&email=${email}`;
      }, 650); 
}


