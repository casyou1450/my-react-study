import emotion1 from './../assets/emotion/emotion1.png'
import emotion2 from './../assets/emotion/emotion2.png'
import emotion3 from './../assets/emotion/emotion3.png'
import emotion4 from './../assets/emotion/emotion4.png'
import emotion5 from './../assets/emotion/emotion5.png'

const getEmo = (emotionId) => {
  switch (emotionId) {
    case 1:
      return emotion1;
    case 2:
      return emotion2;
    case 3:
      return emotion3;
    case 4:
      return emotion4;
    case 5:
      return emotion5;
    default:
      return emotion1; // 기본값으로 emotion1 반환
  }
}

export default getEmo