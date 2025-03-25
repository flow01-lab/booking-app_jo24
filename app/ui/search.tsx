import Image from "next/image";

export default function SearchBar(){
    return (
        <div className="flex items-center">
            <Image
            src="/img/search-glass.svg"
            width={25}
            height={25}
            className=""
            alt="Search"
            />
            <div className="input-search">
                <input type="text" placeholder="What are you searching..."/>
            </div>
        </div>
    )
};

/*function OnClickSearch(){
    const searchGlass = document.getElementById('input-search');
    return (
        searchGlass?.removeAttribute('hidden')
    )
}*/