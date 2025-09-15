// compat 데이터가 로드되었는지 확인 후 바로 사용
if (window.CSSCounterStylesCompat?.D) {
  console.log("CSS Counter Styles 지원됨");
}

if (window.CSSContainerStyleQueriesCompat?.D) {
  console.log("CSS Container Style Queries 지원됨");
}

// 여기서부터 피아노 앱 로직 실행
const keyboard = document.getElementById('keyboard');
keyboard.innerHTML = '<p>피아노 앱이 compat 데이터와 함께 실행되었습니다 🎹</p>';
