function getName() {
    let name = document.getElementById("username").value;
    alert("Hello " + name + "\nYour application has been submitted!");
}

function resetForm() {
    let name = document.getElementById("username").value;
    // alert(name + ", your form has been reset!");
    alert(`${name} Your form has been reset!`)
}