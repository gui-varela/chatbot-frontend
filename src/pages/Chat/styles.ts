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
  background-color: #FFDFDF;
  word-wrap: break-word;

  .messagesContainer {
    flex-grow: 10;
  }

  .inputForm {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    height: 70px;
    background-color: #FFDFDF;
    padding: 1rem;
    bottom: 0;
    width: 100%;

    input[type='text'] {
      width: 100%;
      margin-right: .5rem;
      border-radius: 70px;
      border: none;
      padding-left: .75rem;
      background-color: #fff;
    }

    button {
      background-color: #F875AA;
      border-radius: 70px;
    }
  }
`;