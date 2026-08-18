function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("show");
}
function showSkill(skill) {

    const description = document.getElementById("skill-description");

    if (skill === "html") {
        description.innerHTML =
            "<h3>HTML5</h3><p>HTML5 is used to structure the content of websites, such as headings, paragraphs, images, links and forms.</p>";
    }

    else if (skill === "css") {
        description.innerHTML =
            "<h3>CSS3</h3><p>CSS3 is used to style and design websites. It controls colours, fonts, spacing, layouts, animations and responsive designs.</p>";
    }

    else if (skill === "javascript") {
        description.innerHTML =
            "<h3>JavaScript</h3><p>JavaScript adds functionality and interactivity to websites, allowing elements to respond to user actions.</p>";
    }

    else if (skill === "react") {
        description.innerHTML =
            "<h3>React</h3><p>React is a JavaScript library used to create interactive and reusable user-interface components.</p>";
    }

    else if (skill === "node") {
        description.innerHTML =
            "<h3>Node.js</h3><p>Node.js allows JavaScript to run outside the browser and can be used to create server-side applications.</p>";
    }

    else if (skill === "github") {
        description.innerHTML =
            "<h3>Git & GitHub</h3><p>Git is used to track changes in code, while GitHub provides a platform for storing, sharing and collaborating on projects.</p>";
    }

    else if (skill === "responsive") {
        description.innerHTML =
            "<h3>Responsive Design</h3><p>Responsive design makes websites adapt to different screen sizes, including computers, tablets and mobile phones.</p>";
    }

    else if (skill === "uiux") {
        description.innerHTML =
            "<h3>UI / UX</h3><p>UI focuses on how a website looks, while UX focuses on how easy and enjoyable it is for users to interact with.</p>";
    }

    else if (skill === "sql") {
        description.innerHTML =
            "<h3>SQL</h3><p>SQL is used to create, manage and retrieve information from relational databases.</p>";
    }
}

const form = document.getElementById("contact-form");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        const nameError = document.getElementById("name-error");
        const emailError = document.getElementById("email-error");
        const messageError = document.getElementById("message-error");

        let isValid = true;


        // Clear previous error messages
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";


        // Remove previous error styles
        name.classList.remove("input-error");
        email.classList.remove("input-error");
        message.classList.remove("input-error");


        // NAME VALIDATION
        if (name.value.trim().length < 2) {

            nameError.textContent =
                "Please enter a valid name.";

            name.classList.add("input-error");

            isValid = false;
        }


        // EMAIL VALIDATION
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value.trim())) {

            emailError.textContent =
                "Please enter a valid email address.";

            email.classList.add("input-error");

            isValid = false;
        }


        // MESSAGE VALIDATION
        if (message.value.trim().length < 10) {

            messageError.textContent =
                "Your message must contain at least 10 characters.";

            message.classList.add("input-error");

            isValid = false;
        }


        // SUCCESS
        if (isValid) {

            alert("Message sent successfully!");

            form.reset();
        }

    });

}