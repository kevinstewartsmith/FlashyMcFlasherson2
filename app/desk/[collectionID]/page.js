"use client";
import DeskParent from "@components/DeskUI/DeskParent";

const Desk = ({params}) => {
    
  return (
    <>
      <DeskParent collectionID={params.collectionID} />
    </>
  )
}

export default Desk
