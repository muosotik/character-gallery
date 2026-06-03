function CharacterCard({ name, imageUrl, story }) {
  // Обрезаем историю до 100 символов, если она длиннее
  const shortStory = story.length > 100 ? story.slice(0, 100) + '...' : story;

  return (
    <div className="character-card">
      <img src={imageUrl} alt={name} loading="lazy" />
      <h3>{name}</h3>
      <p>{shortStory}</p>
    </div>
  );
}

export default CharacterCard;