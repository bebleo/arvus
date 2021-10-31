import { useLocation } from "react-router-dom"
import Page from "./Page"



const Search = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search)
  
  return (
    <Page title="Search - Bebleo">
      <h1>Search</h1>
      <p><strong>Search term(s):</strong> { params.get("terms") }</p>
      <p>[Page deliberately left blank]</p>
    </Page>
  )
};

export default Search;
