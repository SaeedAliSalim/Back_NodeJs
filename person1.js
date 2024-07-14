
const fs = require("fs")
const addperson = (id, fname, lname, city) => {// أعرف الدالة اللي تسوي العملية كهلها

    const allData = loadfile()// تعريف الدالة اللي اللي يكون فيها البيانات وتكون على صيغة الجيسون

    const duplicatedData = allData.filter((obj) => {//معرفة البيانات المتكررة
        return obj.id === id
    })
    if (duplicatedData.length == 0) {
        allData.push({// بعد التحميل وتحويل البيانات القادمة من الملف اللي فيه البياات إلى أبجكت يتم عمل ادخال البيانات الجديدة
            id: id,
            fname: fname,
            lname: lname,
            city: city
        })

        savealldata(allData)// تعريف الدالة اللي تقوم بحفظ البيانات الجديدة بعد تحويلها من ابجكت إلى جيسون
    } else {
        console.log("ERROR DUPLICATED DATA")
    }
}

// ******************************************

const loadfile = () => {// دالة جلب البيانات بصيغة الجيسون وتحويلها إلى ابجكت
    try {
        const personJOSN = fs.readFileSync("person1.json").toString()
        return JSON.parse(personJOSN)
    }
    catch {
        return []
    }
}

const savealldata = (allData) => {//دالة حفظة البيانات
    const personOBJECT = JSON.stringify(allData)

    fs.writeFileSync("person1.json", personOBJECT)
}


// Delete


const deletePerson = (id) => {
    const allData = loadfile()
    const dataTokeep = allData.filter((obj) => {// احضار جميع البيانات ماعدا الآي دي اللي تم اختياره
        return obj.id !== id
    })
    if (dataTokeep.length < allData.length) {
        console.log("DELETED SUCCESSFULLY")
        savealldata(dataTokeep)
    }
    else {
        console.log("ID NEEDED NOT FOUND")
    }
   
}

// Read Data

const readData = (id) => {
    const allData = loadfile()

    const personNeeded = allData.find((obj) => {//احضار البيانات المطلوبة
        return obj.id == id
    })
    if (personNeeded) {
        console.log(personNeeded)
    }
    else {
        console.log("ID NEEDED NOT FOUND")
    }

}


const listData = () => {
    const allData = loadfile()
    allData.forEach((obj) => {// عمل لوب على قاعدة البيانات
        console.log(obj.fname + " " + obj.lname)
    })
}

module.exports = {// تصدير الدالة الكبيرة اللي تسوي العملية هذي كلها لقراءتها من أي مكان في البروجكت
    addperson,
    deletePerson,
    readData,
    listData
}
