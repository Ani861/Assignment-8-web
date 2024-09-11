import React, { useState } from 'react';

const cardsData = [
  {
    id: 1,
    title: 'Patient Records Management',
    features: 'Add, modify, delete, and search patient records.',
    image: '/images/medical-records.jpg', // Path from public folder
  },
  {
    id: 2,
    title: 'Appointment Scheduling',
    features: 'Schedule and manage appointments efficiently.',
    image: '/images/appointment-scheduling-solution.png', // Path from public folder
  },
  // Add more cards here
];

function App() {
  const [likedCards, setLikedCards] = useState({});

  const toggleLike = (id) => {
    setLikedCards((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="min-h-screen bg-blue-50 py-10">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-blue-700 text-center mb-8">Hospital Management Features</h1>
        <div className="columns is-multiline is-centered">
          {cardsData.map((card) => (
            <div key={card.id} className="column is-one-third">
              <div className="card bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={card.image} alt={card.title} className="rounded-t-lg" />
                  </figure>
                </div>
                <div className="card-content">
                  <h2 className="title is-4 text-gray-800">{card.title}</h2>
                  <p className="subtitle text-gray-600">{card.features}</p>
                  <button
                    onClick={() => toggleLike(card.id)}
                    className={`like-button text-2xl ${likedCards[card.id] ? 'has-text-success' : 'has-text-grey'}`}
                    style={{
                      fontSize: likedCards[card.id] ? '2.5rem' : '2rem',
                      color: likedCards[card.id] ? '#48bb78' : '#a0aec0', // Tailwind's green-500 and gray-400
                      transition: 'all 0.2s ease',
                    }}
                  >
                    ♥
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
