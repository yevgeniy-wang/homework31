export function BestImage({sortedArray, setSortedArray}){

  function closeBestImage(){
    setSortedArray(null)
  }

  return (
    <div className={'best-image'}>
      {sortedArray[0].component}
      <p>Won with {sortedArray[0].count} likes</p>
      <button onClick={closeBestImage}>Закрыть</button>
    </div>
  )
}