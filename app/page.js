"use client"
import CollectionParent from "@components/CollectionUI/CollectionParent";
import { ContextProvider } from "@components/Contexts/CollectionContext";

function CollectionUI (props) {

    return (
        <ContextProvider >
            <CollectionParent />
        </ContextProvider>
    )
}

export default CollectionUI;