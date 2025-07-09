import '../css/layout.css'

const Display = ({count}) => {
  return (
    <div>
      <ul className="display">
        <li><p>카운트</p></li>
        <li><span>{count}</span></li>
      </ul>
    </div>
  )
}

export default Display