import React from "react"

export default function HeroImage(props) {
  console.log(props);
  console.log(props.parent.images[0]);
  return (
    <div>
      <h1>Hero Image</h1>
      <img src={props.parent.images[0].asset._ref} />
    </div>
  )
}