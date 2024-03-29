async function getListUserJson() {
  try {
    const response = await fetch("./listUser.json");
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error, "ini error");
    return null;
  }
}

const title = document.getElementById("title");
const rememberPass = document.getElementById("rememberPass");

function onClick() {
  const getEmail = document.getElementById("email");
  const getPass = document.getElementById("password");

  const email = getEmail.value;
  const password = getPass.value;

  checkUser(email, password);
}

function checkUser(email, password) {
  getListUserJson().then((listUser) => {
    console.log(listUser.length);
    let counter = 0;
    for (let i = 0; i < listUser.length; i++) {
      if (listUser[i].email === email) {
        counter = i
      }
    }
    console.log(counter,"ini index of the data")

    if (counter !== 0) {
      // check pass in this area
      const detailUser = listUser[i];
      console.log(detailUser);
    }
  });
}
