import {useState} from "react";
import './imageList.css'
import {BestImage} from "../bestImage/BestImage";

function Url({linkUrl}){
  function a(){
    if(linkUrl){
      window.location = linkUrl
    }
  }
  return (
    <div onClick={a}>

      <img src="fastq" alt="fsfsddf"/>
      <p>abc</p>
    </div>
  )
}

export function ImageList({imageArray}) {
  const [imageInfo, setImageInfo] = useState(imageArray)
  const [sortedArray, setSortedArray] = useState(null)

  function getMostPopularImage() {
    setSortedArray(imageInfo.sort((a, b) => b.count - a.count))
  }

  function imageCountIncrement(icon) {
    const indexOfIcon = imageInfo.findIndex(image => image.id === icon.id)
    imageInfo[indexOfIcon].count += 1
    setImageInfo([...imageInfo])
    if (sortedArray) getMostPopularImage()
  }

  const listItems = imageArray.map(icon => (
    <li key={icon.id} className={'image-list__list-item'}>
      {icon.component}
      <button onClick={() => imageCountIncrement(icon)}>Вы нажали {icon.count} раз</button>
    </li>
  ))


  return (
    <>
      <ul className={'image-list'}>{listItems}</ul>
      <button onClick={getMostPopularImage}>Определить победителя</button>
      {sortedArray && <BestImage sortedArray={sortedArray} setSortedArray={setSortedArray}/>}
      <Url linkUrl={'https://google.com'}/>
    </>
  )
}


