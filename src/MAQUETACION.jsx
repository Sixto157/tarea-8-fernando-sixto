import React, { useState } from 'react';

export default function MAQUETACION() {
  const [currentPage, setPage] = useState('principal');
  const [selectedMovie, setSelectedMovie] = useState(null);

  const actors = [
    { id: 1, name: 'Mark Hamil', image: 'https://www.nndb.com/people/898/000022832/markhamill1.jpg', famousMovie: 'Star Wars' },
    { id: 2, name: 'Jackie Chan', image: 'https://es.web.img3.acsta.net/c_310_420/pictures/16/01/07/16/44/109721.jpg', famousMovie: 'Karate Kid' },
    { id: 3, name: 'Leonardo DiCaprio', image: 'https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_.jpg', famousMovie: 'Titanic' },
  ];

  const movies = [
    {
      id: 1,
      title: 'Cuestión de FE',
      summary: 'Tres amigos —Domingo, José y Pascual— se embarcan en un viaje desde La Paz hasta Santa Cruz para vender una estatua religiosa que, según ellos, es milagrosa. Durante el trayecto enfrentan desafíos, supersticiones, personajes pintorescos y muchas situaciones cómicas, mientras reflexionan sobre la fe, la amistad y el verdadero valor de lo sagrado.',
      image: 'https://www.almafilms.net/base/stock/Movie/6-image/6-image_web.jpg'
    },
    {
      id: 2,
      title: 'Ladron de Perros',
      summary: 'La película sigue a Ladislao, un hombre solitario y marginado que vive en La Paz. Para sobrevivir, se dedica a robar perros de raza y luego pedir recompensas a sus dueños. Sin embargo, cuando se encariña con uno de los perros robados, su mundo cambia. Esta conexión lo enfrenta a dilemas morales, afectivos y sociales, revelando la fragilidad humana en una ciudad desigual.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsHIk-ajGuQCpiwEPKgfCZsqBbBZgjwSzEtA&s'
    },
    {
      id: 3,
      title: 'American Visa',
      summary: 'Mario Álvarez, un profesor de literatura jubilado, llega a La Paz con el sueño de obtener una visa para reunirse con su hijo en Estados Unidos. Pero al enfrentarse a la corrupción y el rechazo de la embajada, su esperanza se derrumba. En medio de su frustración, conoce a Blanca, una mujer que le ofrece una nueva visión de la vida. Desesperado por cumplir su sueño americano, Mario toma decisiones extremas que lo llevan por un camino peligroso.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwj8AqKItwfQWjyklShwLdPxpBMcT1bhaXA&s'
    },
    {
      id: 4,
      title: '¿Quién mató a la llamita blanca?',
      summary: 'Dos jóvenes disfrazados de campesinos —Jacinto y Domitila— son en realidad narcotraficantes que deben llevar un cargamento de droga desde el altiplano hasta La Paz. A lo largo del viaje, cruzan pueblos, engañan a la policía y se enfrentan a obstáculos mientras intentan parecer una inocente pareja indígena.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtY2ah_ivEP38HZ2vOgNaBb_LdHVZSfX81Pg&s'
    },
    {
      id: 5,
      title: 'El cementerio de los elefantes',
      summary: '"El cementerio de los elefantes" muestra a Juvenal, un alcohólico que pasa sus últimos días en un refugio para bebedores en La Paz, donde revive su vida marcada por la pobreza y la soledad. Una historia cruda sobre la lucha contra la adicción y la marginalidad.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPwKL5hDpdPoYICWY4f9pIdlodWXuspD_j8w&s'
    },
  ];

  return (
    <div className="cinematica-container">
      <header className="header">
        <h1>CINEMATICA BOLIVIANA</h1>
      </header>

      <nav className="navbar">
        <button
          className={currentPage === 'principal' ? 'active' : ''}
          onClick={() => setPage('principal')}
        >
          Principal
        </button>
        <button
          className={currentPage === 'peliculas' ? 'active' : ''}
          onClick={() => setPage('peliculas')}
        >
          Películas
        </button>
      </nav>

      <main className="content">
        {currentPage === 'principal' && (
          <div className="principal-content">
            <h2>Actores Destacados</h2>
            <div className="actors-grid">
              {actors.map((actor) => (
                <div key={actor.id} className="actor-card">
                  <img src={actor.image} alt={actor.name} />
                  <h3>{actor.name}</h3>
                  <p>Conocido por: {actor.famousMovie}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentPage === 'peliculas' && (
          <div className="peliculas-content">
            <h2>Películas Bolivianas</h2>
            <div className="movies-grid">
              {movies.map((movie) => (
                <div
                  key={movie.id}
                  className="movie-card"
                  onClick={() => setSelectedMovie(movie)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => { if (e.key === 'Enter') setSelectedMovie(movie); }}
                >
                  <img src={movie.image} alt={movie.title} className="movie-image" />
                  <p className="movie-title">{movie.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedMovie && (
          <div className="modal">
            <div className="modal-content">
              <button className="close-btn" onClick={() => setSelectedMovie(null)}>X</button>
              <h3>{selectedMovie.title}</h3>
              <p>{selectedMovie.summary}</p>
            </div>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>Desarrollado por: Fernando Sixto Ramirez Condori     -     INF122</p>
      </footer>
    </div>
  );
}
