async function submitLead(event) {
    event.preventDefault();

    const form = event.target;

    const data = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email?.value || "",
        course: form.course?.value || "",
        university: form.university?.value || "",
        source: form.source.value,
        pageurl: window.location.href
    };

    const res = await fetch("http://localhost:1337/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data })
    });

    if (res.ok) {
        alert("Form submitted successfully!");
        form.reset();
    } else {
        alert("Something went wrong");
    }
}
