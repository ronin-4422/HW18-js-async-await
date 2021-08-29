console.log("----------------Task 3")
async function delay() {
  let promise1 =  new Promise(function(resolve, reject) {
    setTimeout(() => resolve('Hello!'), 1000);
   });
   let result1 = await promise1;
   console.log(result1)
};


console.log("----------------Task 4")
async function getUserInfo() {
  let promise2 =  new Promise(function(resolve, reject) {
  setTimeout(() => resolve({ name: 'Vic', age: 21, id: 1 } ), 1000);
 });
 let result2 = await promise2;
 console.log(result2)
}

async function getUserAvatar() {
  let promise3 = new Promise(function(resolve, reject) {
    let avatar = 'https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg'
    setTimeout(() => resolve(avatar), 1000);
  });
  let result3 = await promise3;
  console.log(result3);
}


async function getUserAdditionalInfo() {
  let promise4 = new Promise(function(resolve, reject) {
    let interests = ['sport', 'books'];
    setTimeout(() => resolve(interests), 1000);
  });
  let result4 = await promise4;
  console.log(result4)
}
async function getResult() { 
  await delay();
  await getUserInfo();
  await getUserAvatar();
  await getUserAdditionalInfo();
  }
  getResult();


console.log("----------------Task 5")
async function getUser() {
  return { name: 'Vic', age: 21, id: 1 };
}

async function getInfo() {
  try {
    let user = await getUser();
    console.log(user);
    throw new Error('error');
  } catch {
    console.log('Wrong information');
  }
}
getInfo();