import { useNavigate } from "react-router-dom"
import SearchFieldContainer from "./styles"
import { SwitchBtn } from "@components/shared/SwitchBtn"
import { VectorIcon } from "@components/shared/VectorIcon"
import basic_search_black from "@assets/icons/basic-28-search.svg"

const SearchField = ({isHidden}) => {
  const navTo = useNavigate()

  const handleSearch = (formData) => {
    const searchFor = new URLSearchParams(formData)
    navTo(`/search?${searchFor.toString()}`)
  }
  return (
    <SearchFieldContainer $isHidden={isHidden} >
      <form action={handleSearch} className="w-full">
        <label className="flex sub-block align-center w-full">
          <SwitchBtn type="submit">
            <VectorIcon src={basic_search_black} alt="basic_search_black" />
          </SwitchBtn>
          <input
            type="text"
            name="query"
            className="search-text-field fs-16 w-full"
            placeholder="Search for a movie, tv show, person..."
          />
        </label>
      </form>
    </SearchFieldContainer>
  )
}

export default SearchField
