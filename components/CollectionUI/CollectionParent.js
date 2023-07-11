"use client";
import { useContext, useEffect, useState } from 'react'
import { CollectionContext } from '../Contexts/CollectionContext';
import CreateCollection from './CreateCollection'
import CollectionFeed from './CollectionFeed'

const CollectionParent = () => {
  const { scrollPosition, updateScrollPosition } = useContext(CollectionContext);
  const [collectionCount, setCollectionCount] = useState(0);
  
  function collectionChanged() {
    setCollectionCount(collectionCount + 1);
  }
  useEffect(() => {
    // Restore the scroll position on component mount
    window.scrollTo(0, scrollPosition);
  }, []);

  useEffect(() => {
    // Update the scroll position when it changes
    const handleScroll = () => {
      updateScrollPosition(window.scrollY);
      console.log("scrollPosition: " + scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [updateScrollPosition, collectionCount]);

  return (
    <div >
      <CreateCollection
          //onAdd={collectionChanged}
          inputType={"collection"}
          topPlaceholder={"Add Collection"}
          bottomPlaceholder={"Description (optional)"}
          topName={"title"}
          bottomName={"content"}
          collectionChanged={collectionChanged}
          //selectedCollection={selectedCollection}
      />
      
      <CollectionFeed collectionChanged={collectionChanged} />
    </div>
  )
}

export default CollectionParent