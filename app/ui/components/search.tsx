import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/outline";


interface Props {
    searchBarOpen: boolean;
    handleSearchBar: ()=> void;
}

const SearchBar:React.FC<Props> = ({searchBarOpen, handleSearchBar}) => {

    return (
        <>
        {searchBarOpen && (
            <div className="w-full h-full bg-gray-700 opacity-[80%] relative">
                <div className="flex flex-row justify-start items-center w-full h-[85px] relative top-[0px] left-0 bg-white border border-gray-700">
                    <MagnifyingGlassIcon className="size-8 absolute left-10"/>
                    <input type="text" placeholder="What are you searching..." className="absolute left-25 text-[24px] px-5 w-full h-full"/>
                    <button onClick={handleSearchBar} className="cursor-pointer absolute right-10">
                        <XCircleIcon className="size-8"/>
                    </button>
                </div>
            </div>
        )}
        </>
    )
};

export default SearchBar;