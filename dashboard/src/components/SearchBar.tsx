import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { SyntheticEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
  const history = useHistory();
  const [searchTerms, setSearchTerms] = useState("");

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    history.push("/search?terms=" + searchTerms)
    setSearchTerms("")
  }


  return (
    <Form inline onSubmit={(e) => onSubmit(e)}>
      <InputGroup size="sm" className="mr-sm-3" >
        <FormControl 
          type="text" 
          id="query" 
          placeholder="Enter search..." 
          value={searchTerms} 
          onChange={(e) => setSearchTerms(e.target.value)}
        />
        <InputGroup.Append>
          <Button className="navbar-toggle" data-toggle="collapse" variant="outline-primary" type="submit">Search</Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  )
}

export default SearchBar;
