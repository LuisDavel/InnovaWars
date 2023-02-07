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
  const [loading, setLoading] = useState(true);
  const [loadingFilms, setLoadingFilms] = useState(true);

  useEffect(() => {
    async function fetchCharacter () {
      try {
        const res = await fetch(`https://swapi.dev/api/people/?search=${search}`);
        const data = await res.json();
        setLoading(false);
        setCharacter(data.results);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCharacter();
  }, [search])

  async function handleClick(character: CharacterProps) {
    const filmUrls = character.films;
    const films = await fetchFilms(filmUrls);
    setFilmCharacter(films);
    setLoadingFilms(true)
  }
  
  async function fetchFilms(filmUrls: string[]) { //Fetch das Urls
    const filmPromises = Array.from(filmUrls, async url => {
      const res = await fetch(url);
      return res.json();
    });
   
    return Promise.all(filmPromises);
  }
  if (loading) {
    return <div>Loading...</div>;
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
          loading = {loadingFilms}
          // @ts-ignore
          films={filmCharacter}
          onClick={() => handleClick(v)}
        />
      ))}
      
    </TMenu>
  )
}