import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form"

function Movieform({ addMovie }) {

  const {register, handleSubmit} = useForm()
  const [namee, setName] = useState('');
  const [ratings, setRatings] = useState('');
  const [duration, setDuration] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);
  
  const onSubmit = () => {
    console.log("Hello Bitches")
  }
  const convertMinutesToHours = (minutes) => {
    const hours = minutes / 60;
  const formattedHours = hours.toFixed(1); // Display one decimal place
  return `${formattedHours} Hrs`;
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();

    // Check for valid time format
    const isValidFormat = /^\d+(\.\d{1,2})?[hm]$/.test(duration);

    // Display error message if the time format is invalid
    if (!isValidFormat) {
      setErrorMessage(true);
      return;
    }

    // Clear error message if the time format is valid
    setErrorMessage(false);

    // Convert duration to hours if it is in minutes
    let convertedDuration = duration;
    if (duration.includes('m')) {
      const minutes = parseFloat(duration);
      if (!isNaN(minutes)) {
        convertedDuration = convertMinutesToHours(minutes);
      }
    }

    // Rest of the form submission logic...
    if (!errorMessage) {
      const movieDetails = {
        name: namee,
        ratings,
        duration: convertedDuration,
      };

      console.log('Adding Movie:', movieDetails);
      addMovie(movieDetails);
    }
  };

  return (
    <section>
      <div className='card pa-30'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>
              Movie Name
            </label>
            <input
              type='text'
              id='name'
              placeholder='Enter Movie Name'
              data-testid='nameInput'
              value={namee}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>
              Ratings
            </label>
            <input
              type='number'
              id='ratings'
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
              value={ratings}
              onChange={(e) => {
                const value = e.target.value;
                if (value === '' || (value >= 1 && value <= 100)) {
                  setRatings(value);
                } else {
                  // Display an error message or handle it as per your requirements
                  console.error('Invalid input. Please enter a number between 1 and 100.');
                }
              }}
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>
              Duration
            </label>
            <input
              type='text'
              id='duration'
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          {errorMessage && (
            <div className='alert error mb-30' data-testid='alert'>
              Please specify time in hours or minutes (e.g. 2.5h or 150m)
            </div>
          )}
          <div className='layout-row justify-content-end'>
            <button type='submit' className='mx-0' data-testid='addButton'>
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Movieform;
