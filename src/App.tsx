import { useEffect, useState } from "react"
import CardCharact from "./components/CardCharact";
import InputField from "./components/InputField"
import TMenu from "./template/TMenu";

type CharacterProps = {
  name: String,
  eye_color: String,
  birth_year: String,
  gender: String,
  films:[]
}

export default function App() {
  const [search, setSearch] = useState('');
  const [filmCharacter, setFilmCharacter] = useState([{}])
  const [character, setCharacter] = useState<CharacterProps[]>([]);

  useEffect(() => {
    async function fetchCharacter () {
      const res = await fetch(`https://swapi.dev/api/people/?search=${search}`);
      const data = await res.json();
      setCharacter(data.results);
    }

    fetchCharacter();
  }, [search])

  async function handleClick(character: CharacterProps) {
    const filmUrls = character.films;
    const films = await fetchFilms(filmUrls);
    setFilmCharacter(films);
  }
  
  async function fetchFilms(filmUrls: string[]) { //Fetch das Urls
    const filmPromises = Array.from(filmUrls, async url => {
      const res = await fetch(url);
      return res.json();
    });
   
    return Promise.all(filmPromises);
  }

  
  return (
    <TMenu>
      <InputField placeholder="Buscar personagem" onInputChange={(v) => setSearch(v)} />
      {character.map((v) => (
        <CardCharact 
          name={String(v.name)}
          eye_color={String(v.eye_color)}
          birth_year={v.birth_year}
          gender={v.gender}
          // @ts-ignore
          films={filmCharacter}
          onClick={() => handleClick(v)}
        />
      ))}
      
    </TMenu>
  )
}