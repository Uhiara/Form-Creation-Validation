async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");

  try {
    const response = await fetch(apiUrl);
    const users = await response.json();
    dataContainer.innerHTML = "";
    const userList = document.createElement("ul");

    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = user.name; // Put the name inside the <li>
      userList.appendChild(li); // Add this <li> to the list
    });

    dataContainer.appendChild(userList);
  } catch (error) {
    dataContainer.innerHTML = "";
    dataContainer.textContent = "Failed to load user data.";
  }
}

document.addEventListener("DOMContentLoaded", fetchUserData);
