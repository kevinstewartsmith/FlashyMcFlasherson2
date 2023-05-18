import Header from "@/app/header";

export default function collection({ params }) {
    return (
        <div>
        <Header />  
            <h1>{params.collectionID}</h1>
        </div>
    )
}