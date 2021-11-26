function getEmailFromRoll(roll, callback) {
    setTimeout(() => {
        return ({ email: "subu.k@jj.com" })
    }, 100)
}

function getEmail(roll) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (roll == 1) {
                resolve({ email: "subu.k@jj.com" })
            } else {
                reject(new Error("bad roll number"))
            }
        }, 100)
    })
}


function getQuizMarks(email, callback, failure) {
    setTimeout(() => {
        //assume email is sent to server
        callback({ quiz: 20 })
    }, 100)
}

function getQuiz(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === "subu.k@jj.com") {
                resolve({ quiz: 20 })
            } else {
                reject(new Error("bad email"))
            }
        }, 100)
    })
}

// getEmailFromRoll(1, (data) => {
//     getQuizMarks(data.email, (quizdata) => {
//         console.log("email: " + data.email + " quiz: " + quizdata.quiz)
//     },
//         (err) => console.log(err))
// })

// getEmail(2)
// .then(data => console.log(data.email))
// .catch(err => console.log(err))

// setTimeout(() => {
//     console.log('hi timeout')
// }, 0);

// console.log('hi')

async function processThings(){
    try{
    const emailData = await getEmail(2)
    const quizData = await getQuiz(emailData.email)
    console.log('email: '+ emailData.email+' quiz: '+quizData.quiz)
    }catch(err){
        console.log(err)
    }
}

//processThings()

async function hi(){
    console.log('hi')
}
console.log(hi())
