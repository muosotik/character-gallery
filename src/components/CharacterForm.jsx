import { useState } from 'react';

function CharacterForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    imageUrl: '',
    story: ''
  });

  const [errors, setErrors] = useState({});

  // Обработчик изменения любого поля формы
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Очищаем ошибку для этого поля, если она была
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Проверка правильности заполнения формы
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Имя обязательно';
    if (!formData.imageUrl.trim()) newErrors.imageUrl = 'URL изображения обязателен';
    if (!formData.imageUrl.startsWith('http')) newErrors.imageUrl = 'URL должен начинаться с http';
    if (!formData.story.trim()) newErrors.story = 'История обязательна';
    return newErrors;
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onSubmit(formData);
    // Очищаем форму после успешной отправки
    setFormData({ name: '', imageUrl: '', story: '' });
  };

  return (
    <form className="character-form" onSubmit={handleSubmit}>
      <div>
        <label>Имя персонажа *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? 'error-input' : ''}
        />
        {errors.name && <span className="error-text">{errors.name}</span>}
      </div>

      <div>
        <label>URL изображения *</label>
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          placeholder="https://example.com/image.jpg"
          className={errors.imageUrl ? 'error-input' : ''}
        />
        {errors.imageUrl && <span className="error-text">{errors.imageUrl}</span>}
      </div>

      <div>
        <label>История персонажа *</label>
        <textarea
          name="story"
          value={formData.story}
          onChange={handleChange}
          rows="5"
          className={errors.story ? 'error-input' : ''}
        />
        {errors.story && <span className="error-text">{errors.story}</span>}
      </div>

      <button type="submit">Опубликовать</button>
    </form>
  );
}

export default CharacterForm;