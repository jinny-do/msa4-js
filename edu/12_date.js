// Date 객체
// 시간과 날짜를 처리하기 위한 속성과 메서드를 가진 내장 객체
// 내부적으로 Local Timezone (로컬 타임존)에 따른 Unix Timestamp (유닉스 타임스탬프) 기반의 동작

const now = new Date(); // 현재 시간으로 Date 객체를 생성
console.log(now);

// `YYYY-MM-DD hh-mi-ss`
const date1 = new Date(`1995-12-17 13:59:36`);
console.log(date1);

const date2 = new Date(545652135);
console.log(date2);

const date3 = new Date(1995, 11, 17, 3, 24, 0);
console.log(date3);

// Date.getFullYear(): number
// 연도를 정수로 반환
console.log(now.getFullYear());

// Date.getMonth(): number
// 월을 정수로 반환, 월은 0 ~ 11의 값을 반환/ 그래서 +1을 해야 현재 달
console.log(now.getMonth() + 1);

// Date.getDate(): number
// 일을 정수로 반환
console.log(now.getDate());

// Date.getHours(): number
// 시간을 정수로 반환
console.log(now.getHours());

// Date.getMinutes(): number
// 분을 정수로 반환
console.log(now.getMinutes());

// Date.getSeconds(): number
// 초를 정수로 반환
console.log(now.getSeconds());

// Date.getMilliseconds(): number
// 밀리초를 정수로 반환
console.log(now.getMilliseconds());

// Date.getDay(): number
// 오늘 요일을 정수로 반환
// 0(일요일) ~ 6(토요일) 반환
console.log(now.getDay());

// Date.getTime(): number
// `1970-01-01 00:00:00` 기준으로 얼마나 흘렀는지 Unix 타임스탬프를 반환
console.log(now.getTime());
const day = now.getDay();
const nowDay = (dt) => {
  switch (dt) {
    case 0:
      return "일요일";

    case 1:
      return "월요일";

    case 2:
      return "화요일";

    case 3:
      return "수요일";

    case 4:
      return "목요일";

    case 5:
      return "금요일";

    default:
      return "토요일";
  }
};
let nowFormat = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} ${nowDay(day)}`;
console.log(nowFormat);
