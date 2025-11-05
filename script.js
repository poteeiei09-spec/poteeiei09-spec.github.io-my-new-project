

const heightei = document.getElementById("height-input")
const weightei = document.getElementById("weight-input")
const bmiResultEl = document.getElementById('bmi-result');
const calculate = document.getElementById("bta")

const pommak18 = document.getElementById("pommak18")
const pokkati = document.getElementById("pokkati")
const dovv1 = document.getElementById("dovv1")
const dovv2 = document.getElementById("dovv2")
const dovv3 = document.getElementById("dovv3")


calculate.addEventListener('click', function () {
    heigh = parseFloat(heightei.value)
    weight = parseFloat(weightei.value)

    if (isNaN(heigh) || (isNaN(weight) || heigh <= 0 || weight <= 0)) {
        alert('กรุณากรอกตัวเลขใหม่ด้วยนะคะ');
        return;
    }


    const matheigh = heigh / 100;

    const bmi = weight / (matheigh * matheigh)
    bmiResultEl.value = bmi.toFixed(2);

    pommak18.classList.remove('active')
    pokkati.classList.remove('active')
    dovv1.classList.remove('active')
    dovv2.classList.remove('active')
    dovv3.classList.remove('active')


    if (bmi < 18.5) {
        pommak18.classList.add('active');
    }
    else if (bmi >= 18.5 && bmi <= 22.9) {
        pokkati.classList.add('active');
    }
    else if (bmi >= 23 && bmi <= 24.90) {
        dovv1.classList.add('active');
    }
    else if (bmi >= 25 && bmi <= 29.90) {
        dovv2.classList.add('active');
    }
    else if (bmi >= 30) {
        dovv3.classList.add('active');
    }

})


const button1 = document.getElementById('bta')

button1.addEventListener('click', function () {
    button1.classList.toggle('act');


})

// 1. หา "ปุ่มคำนวณ" แล้วสั่งให้มันรอ "คลิก"
const calculateButton = document.getElementById('bmr');

calculateButton.addEventListener('click', function () {

    // 2. เมื่อคลิก ให้ไป "ดึงค่า" จากช่องต่างๆ

    // ดึงค่าเพศ (เช็คว่าอันไหนถูกติ๊ก)
    let gender;
    if (document.getElementById('gender-female').checked) {
        gender = 'female';
    } else if (document.getElementById('gender-male').checked) {
        gender = 'male';
    }

    // ดึงค่าตัวเลข (แปลงข้อความเป็นตัวเลขด้วย parseFloat)
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseInt(document.getElementById('age').value);

    // 3. ตรวจสอบว่ากรอกครบหรือยัง
    if (!gender || isNaN(height) || isNaN(weight) || isNaN(age)) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วนและถูกต้องครับ');
        return; // หยุดทำงาน
    }

    // 4. คำนวณ BMR (สูตร Harris-Benedict)
    let bmrResult;
    if (gender === 'male') {
        // สูตรผู้ชาย
        bmrResult = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === 'female') {
        // สูตรผู้หญิง
        bmrResult = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // 5. แสดงผลลัพธ์
    // .toFixed(2) คือการปัดเศษให้เหลือ 2 ทศนิยม
    document.getElementById('bmrResult').value = bmrResult.toFixed(2);
});


// 1. หา "ปุ่มคำนวณ TDEE" (id="bta") แล้วรอคลิก
    const tdeeButton = document.getElementById('bta');

    tdeeButton.addEventListener('click', function() {
        
        // 2. ดึงค่า BMR ที่คำนวณไว้แล้ว (จากช่องแรก)
        const bmr = parseFloat(document.getElementById('bmrResult').value);

        // 3. ตรวจสอบว่า BMR มีค่าหรือยัง
        if (isNaN(bmr) || bmr === 0) {
            alert('กรุณาคำนวณ BMR ก่อนครับ');
            return; // หยุดทำงาน
        }

        // 4. หาว่า "กิจกรรม" อันไหนถูกติ๊ก
        // (querySelector จะหา input ที่มี name="kidkam" และ :checked)
        const activityRadio = document.querySelector('input[name="kidkam"]:checked');

        // 5. ตรวจสอบว่าเลือกกิจกรรมหรือยัง
        if (!activityRadio) {
            alert('กรุณาเลือกกิจกรรมที่ทำครับ');
            return; // หยุดทำงาน
        }

        // 6. ดึง "ตัวคูณ" (Activity Factor) ออกมาจาก value
        const activityFactor = parseFloat(activityRadio.value);

        // 7. คำนวณ TDEE
        const tdee = bmr * activityFactor;

        // 8. แสดงผลลัพธ์ TDEE (ปัดเศษ 2 ทศนิยม)
        document.getElementById('tdeeResult').value = tdee.toFixed(2);
    });
