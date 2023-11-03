import { useEffect, useState} from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom';
import "./style.css";

function Home(){
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState([]);

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get('movie/now_playing', {
                
                params:{
                    api_key: '1de3781a727c9e8e8018943320f2ddea',
                    language: "pt-BR",
                    page: 1,
                }
            })

            console.log(response.data.results.slice(0, 10));
            setFilmes(response.data.results.slice(0, 10))

        }
        loadFilmes();
        setLoading(false);
    }, [])

    if(loading){
        return(
            <div className='loading'>
                <h2>Carregando Filmes ...</h2>
            </div>
        )
    }

    return(
        <div className='container'>
            <div className='lista-filmes'>
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <p>{filme.overview}</p> 
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}></img> 
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                        
                    )
                })}
            </div>
            
        </div>
    )
}

export default Home;