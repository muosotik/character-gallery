import CharacterForm from '../components/CharacterForm';

function AddPage({ onAdd }) {
  const handleSubmit = (formData) => {
    onAdd(formData);
    alert('Персонаж успешно добавлен!');
  };

  return (
    <div className="add-page">
      <h1>Добавить нового персонажа</h1>
      <CharacterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default AddPage;