import { useState } from 'react';
import './Post.css';

export default function Post() {
  const [postType, setPostType] = useState('question');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [abstract, setAbstract] = useState('');
  const [articleText, setArticleText] = useState('');
  const [tags, setTags] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert('Error: Please enter a title.');
      return;
    }

    if (postType === 'question') {
      const lowerTitle = title.trim().toLowerCase();
      const questionWords = ['how', 'what', 'why', 'can', 'is', 'does', 'where', 'when', 'who'];
      const startsValid = questionWords.some((word) => lowerTitle.startsWith(word));

      if (!startsValid) {
        alert('Error: Questions should start with how, what, why, etc.');
        return;
      }

      if (!description.trim()) {
        alert('Error: Please describe your problem.');
        return;
      }
    } else {
      if (!abstract.trim()) {
        alert('Error: Please enter a 1-paragraph abstract.');
        return;
      }
      if (!articleText.trim()) {
        alert('Error: Please enter the article text.');
        return;
      }
    }

    if (!tags.trim()) {
      alert('Error: Please add up to 3 tags.');
      return;
    }

    // Success alert popup as specified in task requirements
    alert('Success! Your post has been sent.');

    // Reset inputs
    setTitle('');
    setDescription('');
    setAbstract('');
    setArticleText('');
    setTags('');
  };

  return (
    <div className="post-page-container">
      {/* Top Banner */}
      <div className="banner-title">New Post</div>

      {/* Select Post Type Radio Controls */}
      <div className="type-selector-row">
        <span className="bold-label">Select Post Type:</span>
        <label className="radio-item">
          <input
            type="radio"
            name="postType"
            value="question"
            checked={postType === 'question'}
            onChange={() => setPostType('question')}
          />
          Question
        </label>
        <label className="radio-item">
          <input
            type="radio"
            name="postType"
            value="article"
            checked={postType === 'article'}
            onChange={() => setPostType('article')}
          />
          Article
        </label>
      </div>

      {/* Section Header Banner */}
      <div className="banner-title">What do you want to ask or share</div>

      {/* Helper text with red highlighted conditional statement */}
      <p className="instruction-text">
        This section is designed based on the type of the post. It could be developed by conditional rendering.{' '}
        <span className="red-text">
          For post {postType === 'question' ? 'a question' : 'an article'}, the following section would be appeared.
        </span>
      </p>

      {/* Post Form */}
      <form onSubmit={handlePostSubmit} className="post-form-body">
        <div className="form-field-horizontal">
          <label className="field-label">Title</label>
          <input
            type="text"
            className="input-box"
            placeholder={
              postType === 'question'
                ? 'Start your question with how, what, why, etc.'
                : 'Enter a descriptive title'
            }
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Conditional Fields */}
        {postType === 'question' ? (
          <div className="form-field-vertical">
            <label className="field-label">Describe your problem</label>
            <textarea
              rows="12"
              className="textarea-box"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        ) : (
          <>
            <div className="form-field-vertical">
              <label className="field-label">Abstract</label>
              <textarea
                rows="3"
                className="textarea-box"
                placeholder="Enter a 1-paragraph abstract"
                value={abstract}
                onChange={(e) => setAbstract(e.target.value)}
              />
            </div>
            <div className="form-field-vertical">
              <label className="field-label">Article Text</label>
              <textarea
                rows="8"
                className="textarea-box"
                placeholder="Enter a 1-paragraph abstract"
                value={articleText}
                onChange={(e) => setArticleText(e.target.value)}
              />
            </div>
          </>
        )}

        <div className="form-field-horizontal">
          <label className="field-label">Tags</label>
          <input
            type="text"
            className="input-box"
            placeholder={
              postType === 'question'
                ? 'Please add up to 3 tags to describe what your question is about e.g., Java'
                : 'Please add up to 3 tags to describe what your article is about e.g., Java'
            }
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>

        <div className="submit-button-row">
          <button type="submit" className="grey-post-btn">Post</button>
        </div>
      </form>
    </div>
  );
}