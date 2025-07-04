const Welcome = ({name, isMember}) => {
  
  return (
    <div>
          <p> {name}님 {isMember ? '반가워요!':'가입할래요?'} </p>
    </div>
  )
}

export { Welcome };