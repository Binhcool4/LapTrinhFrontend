function date(input) {
    if (!Array.isArray(input)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    
    if (input.length === 0) {
        console.log("Mảng không có phần tử nào");
        return;
    }
    let result = input.map(function(date) {
        let d = new Date(date);
        let dd = d.getDate();
        let mm = d.getMonth() + 1;
        let yyyy = d.getFullYear();
        return `${dd}/${mm}/${yyyy}`;
    });
    console.log(result);
}
date(["2025-03-10", "2024-12-25", "2023-07-01"]);