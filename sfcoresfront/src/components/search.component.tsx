import React from 'react'
import { Container } from '../style/components.style'
import { SearchComponentProps } from '../types/prop.type'


const SearchComponent = ({setSearcher}: SearchComponentProps) => {
    const [query, setQuery] = React.useState<string>("")
     
    React.useEffect(() => {
        let timerId: number;
      
        if (query.length >= 1) {
          timerId = setTimeout(async () => {
            await setSearcher(query);
          }, 1500);
        }
      
        return () => {
          clearTimeout(timerId);
        };
      }, [query]);
      
    return <Container>
        <input type='text' onChange={(e)=>setQuery(e.target.value)} placeholder='Search'/>
    </Container>
}

export default SearchComponent