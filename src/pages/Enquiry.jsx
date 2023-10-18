import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  h2 {
    text-align: center;
  }

  /* Dropdown styles */
  select {
    width: 100%;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 1.25rem;
    font-size: 1.25rem;
    transition: all 0.3s;
    background-color: #fff;
    cursor: pointer;
  }

  select:hover {
    border-color: #4CAF50;
  }

  /* Style for dropdown arrow */
  select::-ms-expand {
    display: none;
  }

  /* Style for dropdown options */
  select option {
    background-color: #fff;
    color: #333;
  }

  select option:hover {
    background-color: #4CAF50;
    color: #fff;
  }

  padding: 1rem 0;

  .container {
    width: 100%;

    .contact-form {
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        input[type='text'],
        input[type='number'],
        input[type='email'],
        input[type='Periods'],
        textarea {
          padding: 1rem;
          border: 0;
          border-radius: 1.25rem;
          font-size: 1.25rem;
          transition: all 0.3s;

          &:focus {
            outline: none;
            border-color: #4CAF50;
            box-shadow: 0px 0px 0.25rem 0px rgba(76, 175, 80, 0.7);
          }
        }

        input[type='submit'] {
          left: 50%;
          cursor: pointer;
          transition: all 0.2s;
          color: white;
          background: linear-gradient(to right, #4CAF50, #45a049);
          border: none;
          border-radius: 1.25rem;
          padding: 1rem 2rem;
          font-size: 1.5rem;
          box-shadow: 0px 0.25rem 0.375rem rgba(0, 0, 0, 0.1);

          &:hover {
            background: linear-gradient(to right, #45a999, #4CAF50);
            transform: scale(1.1);
            box-shadow: 0px 0.375rem 0.5rem rgba(0, 0, 0, 0.2);
          }
        }
      }
    }
  }
`;

const EnquiryOptions = [
  { label: "Interested in", value: "Interested in", placeholder: "Interested in", required: true },
  { label: "Short Term - 25 Months", value: "ShortTerm-25Months" },
  { label: "Medium Term - 30 Months", value: "MediumTerm-30Months" },
  { label: "Long Term - 40 Months", value: "LongTerm-40Months" },
];

const Enquiry = () => {
  const [selectedTerm, setSelectedTerm] = useState("Term");

  const handleTermChange = (event) => {
    setSelectedTerm(event.target.value);
  };
  return (
    <Wrapper>      
      <div className='container'>
        <div className="contact-form">
          <h2>Feel Free to contact us</h2>
          <form action='https://formspree.io/f/mleyodkw' method='POST' className='contact-inputs'>
            <input type='text' name='name' placeholder='Name' autoComplete='off' required />
            <input type='number' name='number' placeholder='Mobile' autoComplete='off' required />
            <input type='text' name='username' placeholder='City' autoComplete='off' required />
            <input type='email' name='Email' placeholder='Email' autoCapitalize='off' required />
            <div>
              <select name="period" value={selectedTerm} onChange={handleTermChange} required>
                {EnquiryOptions.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <textarea name='message' placeholder='Message' cols='30' rows='6' autoComplete='off' required></textarea>
            <input type='submit' value='Send Message' />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Enquiry;
