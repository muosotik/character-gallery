import CharacterCard from '../components/CharacterCard';

function HomePage({ characters }) {
  return (
    <div className="home-page">
      <h1>Галерея персонажей</h1>
      {characters.length === 0 ? (
        <p>Пока нет персонажей. Добавьте первого!</p>
      ) : (
        <div className="cards-grid">
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              name={character.name}
              imageUrl={character.imageUrl}
              story={character.story}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;