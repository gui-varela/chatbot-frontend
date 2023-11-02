import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 340px;
  max-width: 400px;
  width: 100vh;
  height: 90vh;
  margin: 5vh 0;
  border-radius: 5px;
  overflow: hidden;
  background-color: #ececff;
  word-wrap: break-word;
  box-shadow: 0 15px 25px #655DBB25;

  .messagesContainer {
    flex-grow: 10;
    padding: 2rem 1rem 0;
    box-sizing: border-box;
    overflow-y: scroll;

    .message {
      display: flex;
      flex-direction: column;
      max-width: 100%;

      p {
        text-align: left;
        box-sizing: border-box;
        margin: 1px;
        padding: .5rem;
        max-width: 80%;
        min-width: 15%;
        width: fit-content;
      }
    }
    
    .userMessage {
      align-items: flex-end;
      margin-bottom: 1rem;

      p {
        background-color: #5449c9;
        border-radius: 15px 15px 15px 15px;
      }
    }

    .messageGroup {
      display: flex;
      align-items: flex-start;
      flex-direction: row;
      margin-bottom: 1rem;

      img {
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        margin-right: .25rem;
      }

      .botMessage {
        p {
          background-color: #fff;
          border-radius: 5px 15px 15px 5px;
          color: #595763;
        }

        :first-child {
          border-radius: 2px 15px 15px 5px;
        }

        :last-child  {
          border-radius: 5px 15px 15px 15px;
        }
      }
    }
  }

  .inputForm {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    height: 70px;
    background-color: #ececff;
    padding: .75rem;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #dedeff;

    input[type='text'] {
      width: 100%;
      margin-right: .5rem;
      border-radius: 70px;
      border: none;
      padding-left: .75rem;
      background-color: #fff;
      color: #595763;
      box-shadow: 0 5px 10px #655DBB10;
    } 

    input[type='text']:focus {
      border: none;
    } 

    input::placeholder {
      color: #bab6ca;
      font-style: italic;
    }

    button {
      background-color: #655DBB;
      border-radius: 70px;
      font-weight: bolder;
      padding: 0 .75rem;
      transition: .4s;
    }

    button:hover {
      background-color: #4d45a5;
    }
  }
`;

export const TypingAnimation = styled.div`

`;