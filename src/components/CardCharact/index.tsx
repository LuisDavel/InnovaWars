import { useState } from 'react';
import * as S from './styles';

type dataProps = {
  name: String,
  eye_color: String,
  birth_year: String,
  gender: String,
  films: [],
  onClick: () => void;
}

type FilmProps ={
  title: String,
  release_date: String;
}

const CardCharact = ({name, eye_color, birth_year, gender, films ,onClick }:dataProps) => {
  const [isClick, setIsClick] = useState(false)
  console.log(films)
  return (
    <>
      <S.WrapperText onClick={() => {onClick(); setIsClick(!isClick)}}>
        <p>{name}</p>
      </S.WrapperText>

      {isClick == true && (
        <S.WrapperPopUp >
          <div>
          <h4>Nome: {name}</h4>
          <S.LineText>Cor dos olhos: {eye_color}</S.LineText>
          <S.LineText>Aniversário: {birth_year}</S.LineText>
          <S.LineText>Genero: {gender}</S.LineText>
          <br />
          <h4>Filmes em que aparece: </h4>
            <ol>
              {films.map((film: FilmProps, index) => ( 
                <li key={index}>
                  <S.LineTitle>{film.title}</S.LineTitle> 
                  <S.LineText>Lançado em: {film.release_date}</S.LineText>
                </li>
              ))}
          </ol>
          <br />
          <h4 onClick={() => {onClick(); setIsClick(!isClick)}}>Fechar</h4>
          </div>
        </S.WrapperPopUp>
      )}
      
    </> 
  )
}
  
export default CardCharact;
  