// switch문
/*
// 기본 문법
switch(검증 대상) {
	case 일치 검증 값:
		// 실행할 처리
		break;
	case 일치 검증 값:
		// 실행할 처리
		break;
	// 상위 case문에서 일치 검증 값이 없을 경우 실행
	default:
		// 실행할 처리
		break;
}
*/

let food = "김밥";

switch (food) {
  case "김밥":
    console.log("한식");
    break;

  case "돈까스":
    console.log("양식");
    break;

  default:
    console.log("이상한 음식");
    break;
}
