// async function submitLead(event) {
//     event.preventDefault();

//     const form = event.target;

//     const data = {
//         name: form.name.value,
//         phone: form.phone.value,
//         email: form.email?.value || "",
//         course: form.course?.value || "",
//         university: form.university?.value || "",
//         source: form.source.value,
//         pageurl: window.location.href
//     };

//     const res = await fetch("http://localhost:1337/api/leads", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ data })
//     });

//     if (res.ok) {
//         alert("Form submitted successfully!");
//         form.reset();
//     } else {
//         alert("Something went wrong");
//     }
// }
async function submitLead(event) {
    event.preventDefault();

    const form = event.target;

    // inputs
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email?.value || "";
    const course = form.course?.value || "";
    const university = form.university?.value || "";
    const source = form.source.value;
    const message = form.message?.value || "";
    const pageurl = window.location.href;
    // error elements
    const errName = document.getElementById("error-name");
    const errPhone = document.getElementById("error-phone");
    const errCourse = document.getElementById("error-course");

    // reset errors
    [errName, errPhone, errCourse].forEach(e => {
        e.classList.add("hidden");
        e.innerText = "";
    });

    let isValid = true;

    // NAME validation
    if (name === "") {
        errName.innerText = "Full name is required";
        errName.classList.remove("hidden");
        isValid = false;
    }

    // PHONE validation
    if (!/^[0-9]{10}$/.test(phone)) {
        errPhone.innerText = "Enter valid 10-digit mobile number";
        errPhone.classList.remove("hidden");
        isValid = false;
    }

    // COURSE validation
    if (course === "") {
        errCourse.innerText = "Please select a course";
        errCourse.classList.remove("hidden");
        isValid = false;
    }

    if (!isValid) return; // ❌ stop submit

    // ✅ DATA SEND TO STRAPI
    const data = {
        name,
        phone,
        course,
        email,
        university,
        message,
        source: form.source.value || "Website Lead",
        pageurl: window.location.href
    };

    try {
        const res = await fetch("http://localhost:1337/api/leads", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data })
        });

        if (!res.ok) throw new Error("Failed");

        // SUCCESS
        form.reset();
        document.getElementById("applyModal").classList.add("hidden");
        document.getElementById("successPopup").classList.remove("hidden");

    } catch (err) {
        alert("Server error, please try again");
        console.error(err);
    }
}

// close success popup
function closeSuccessPopup() {
    document.getElementById("successPopup").classList.add("hidden");
}
