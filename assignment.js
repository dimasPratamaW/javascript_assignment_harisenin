async function getListUserJson() { // menarik data dari json
  try {
    const response = await fetch("listUser.json");
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

async function onClick() {
  const getEmail = document.getElementById("email");
  const getPass = document.getElementById("password");

  const email = getEmail.value;
  const password = getPass.value;

  await checkUser(email, password);
}

async function checkUser(email, password) {
  var rememberPassDetail = ""
  showRemember(rememberPassDetail)

  getListUserJson().then((listUser) => {
    console.log(listUser.length);
    let counter = -1;
    for (let i = 0; i < listUser.length; i++) {
      if (listUser[i].email === email) {
        counter = i
      }
    }
    console.log(counter,"ini index of the data")

    if (counter === -1){
      return alert("the email didnt exist, please tell admin for register your email")
    }

    if (counter > -1) {
      // check pass in this area
      console.log("User Password:", listUser[counter].pass);
      console.log("password yang dimasuki",password);

      if(listUser[counter].pass === password){
        rememberPassDetail = `You're Login`
        return showRemember(rememberPassDetail)
      }
      if(listUser[counter].pass !== password){
        rememberPassDetail = `${listUser[counter].rememberPass}`
        return showRemember(rememberPassDetail)
        
      }
    }
  });
}

function showRemember(passDetail){
  rememberPass.innerHTML = passDetail
}
