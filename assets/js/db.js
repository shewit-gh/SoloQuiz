var db = new Dexie("SoloQuiz");
db.version(10).stores({
    profile:'++id, &uname, email, password'
})