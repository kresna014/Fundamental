// merge dan remove


// function mergedArray(array1, array2) {
//     // menggabungkan array
//     const mergedArray = array1.concat(array2);
    
//     // menyiapkan email dengan key
//     const uniqueEmails = new Map();
    
//     // memfilter data duplikat berdasarkan email
//     const filteredArray = mergedArray.filter(student => {
//         // Jika email belum ada dalam objek, tambahkan email ke objek dan kembalikan true untuk menyimpan data
//         if (!uniqueEmails.has(student.email)) {
//             // Jika email sudah ada dalam objek, kembalikan false untuk memfilter data duplikat
//             uniqueEmails.set(student.email, true);
//             return true;
//         }
//         // Jika email sudah ada dalam objek, kembalikan false untuk memfilter data duplikat
//         return false;
//     });
    
//     return filteredArray;
// }


// const array1 = [
//     { name: 'Student 1', email: 'student1@mail.com' },
//     { name: 'Student 2', email: 'student2@mail.com' }
// ];

// const array2 = [
//     { name: 'Student 1', email: 'student1@mail.com' },
//     { name: 'Student 3', email: 'student3@mail.com' }
// ];

// // Merge and remove duplicates
// const arrayResult = mergedArray(array1, array2);
// console.log(arrayResult);


// ke 2

// class StudentMerger {
//     static mergeAndRemoveDuplicates(array1, array2) {
//         // Gabungkan kedua array
//         const combinedArray = array1.concat(array2);

//         // Objek untuk menyimpan email unik
//         const uniqueEmails = {};
//         const resultArray = [];

//         // Iterasi melalui array gabungan menggunakan forEach
//         combinedArray.forEach(student => {
//             // Jika email belum ada dalam objek, tambahkan email ke objek dan array hasil
//             if (!uniqueEmails[student.email]) {
//                 uniqueEmails[student.email] = true;
//                 resultArray.push(student);
//             }
//         });

//         return resultArray;
//     }
// }

// const array1 = [
//     { name: 'Student 1', email: 'student1@mail.com' },
//     { name: 'Student 2', email: 'student2@mail.com' }
// ];

// const array2 = [
//     { name: 'Student 1', email: 'student1@mail.com' },
//     { name: 'Student 3', email: 'student3@mail.com' }
// ];

// // Gabungkan dan hapus duplikat
// const arrayResult = StudentMerger.mergeAndRemoveDuplicates(array1, array2);
// console.log(arrayResult);



function mergeArray(arr1, arr2) {
    let res = [...arr1]
    arr2.forEach((item) => {
        let idx = res.findIndex((value) => value.name == item.name && value.email == item.email)
        if (idx == -1) res.push(item)
    });
    return res
}


const array1 = [{ name: "Student 1", email : "student1@mail.com" },
    { name:"Student 2", email : "student2@mail.com" }
    ]
    
    const array2 = [{ name: "Student 1", email : "student1@mail.com" },
        { name:"Student 3", email : "student3@mail.com" }
        ]
  
  
        console.log(mergeArray(array1, array2));