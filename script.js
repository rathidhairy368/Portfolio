/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");


if (menuIcon && navLinks) {

    menuIcon.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });


    /* Close menu after clicking a link */

    const links = navLinks.querySelectorAll("a");

    links.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

}


/* =========================================================
   CONTACT FORM VALIDATION
   ========================================================= */

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            let isValid = true;


            /* INPUTS */

            const name =
                document.getElementById("name");

            const email =
                document.getElementById("email");

            const message =
                document.getElementById("message");


            /* ERRORS */

            const nameError =
                document.getElementById("nameError");

            const emailError =
                document.getElementById("emailError");

            const messageError =
                document.getElementById("messageError");


            /* CLEAR ERRORS */

            nameError.textContent = "";
            emailError.textContent = "";
            messageError.textContent = "";


            /* NAME VALIDATION */

            if (name.value.trim() === "") {

                nameError.textContent =
                    "Please enter your name.";

                isValid = false;
            }


            /* EMAIL VALIDATION */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (email.value.trim() === "") {

                emailError.textContent =
                    "Please enter your email.";

                isValid = false;

            } else if (!emailPattern.test(email.value.trim())) {

                emailError.textContent =
                    "Please enter a valid email.";

                isValid = false;
            }


            /* MESSAGE VALIDATION */

            if (message.value.trim() === "") {

                messageError.textContent =
                    "Please enter your message.";

                isValid = false;
            }


            /* STOP FORM */

            if (!isValid) {

                event.preventDefault();

            }

        }
    );

}


/* =========================================================
   ACTIVE NAVIGATION ON SCROLL
   ========================================================= */

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
                sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navItems.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});