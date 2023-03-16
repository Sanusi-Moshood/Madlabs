import { useState } from 'react';

const FaqItem = ({ id, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={` faq-item ${isOpen && 'faq_active'}`}
      onClick={handleToggle}
    >
      <div className='faq-question'>
        <h5>{question}</h5>
        <div></div>
      </div>
      <div className={`faq-answer ${isOpen && 'factive'}`}>{answer}</div>
    </div>
  );
};

export default FaqItem;
