const form = document.getElementById("registration-form");
    const displayData = document.getElementById("display-data");
    const displayPhoto = document.getElementById("display-photo");
    const clearBtn = document.getElementById("clear-btn");

    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const firstName = document.getElementById("first-name").value;
      const lastName = document.getElementById("last-name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const gender = document.getElementById("gender").value;
      const skills = Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(checkbox => checkbox.value);
      const photo = document.getElementById("photo").files[0];

      // Displaying the registered details
      displayData.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Skills:</strong> ${skills.join(", ")}</p>
      `;
 // Displaying the uploaded photo
      if (photo) {
        const reader = new FileReader();
        reader.onload = function(e) {
          displayPhoto.innerHTML = `<img src="${e.target.result}" alt="Uploaded Photo">`;
        };
        reader.readAsDataURL(photo);
      } else {
        displayPhoto.innerHTML = "";
      }

      form.reset();
    });

    clearBtn.addEventListener("click", function() {
      form.reset();
      displayData.innerHTML = "";
      displayPhoto.innerHTML = "";
    });