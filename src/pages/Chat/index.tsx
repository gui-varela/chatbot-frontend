import { useState } from 'react';
import { Container } from './styles';

export function Chat() {
  const [newMessage, setNewMessage] = useState<string>('')
  const [userMessages, setUserMessages] = useState<string[]>(['dsfdsfdsf', 'asdsadsadsad'])

  const sendMessage = () => {
    setUserMessages([...userMessages, newMessage])
    console.log(userMessages)
  }

  return (
    <Container>
      <div className="messagesContainer">
        {userMessages}
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='inputForm' action="">
        <input
          type="text"
          name="inputMessage"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage} type="submit">Env</button>
      </form>
    </Container>
  );
}