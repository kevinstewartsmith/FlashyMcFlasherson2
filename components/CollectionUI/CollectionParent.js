import { useState, useContext, useEffect } from 'react'
import { CollectionContext } from '../Contexts/CollectionContext';
import CreateCollection from './CreateCollection'
import CollectionFeed from './CollectionFeed'




const CollectionParent = () => {
  const [clickCount,setClickCount] = useState(0);
  const [collectionCount,setCollectionCount] = useState(0);
  const [selectedCollection,setSelectedCollection] = useState(false);
  const { scrollPosition, updateScrollPosition } = useContext(CollectionContext);
  
  function collectionChanged(){
    setCollectionCount(collectionCount + 1)
  }

  useEffect(() => {
    // Restore the scroll position on component mount
    window.scrollTo(0, scrollPosition);
  }, []);

  useEffect(() => {
    // Update the scroll position when it changes
    const handleScroll = () => {
      updateScrollPosition(window.pageYOffset);
      console.log("scrollPosition: " + scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [updateScrollPosition]);

  return (
    <div>
        <CreateCollection
          onAdd={collectionChanged}
          inputType={"collection"}
          topPlaceholder={"Add Collection"}
          bottomPlaceholder={"Description (optional)"}
          topName={"title"}
          bottomName={"content"}
          selectedCollection={selectedCollection}
          //selectedCollection={props.selectedCollection} 
          //collectionChanged={collectionChanged}

        />
        <CollectionFeed clickCount={clickCount} />
    </div>
  )
}

export default CollectionParent