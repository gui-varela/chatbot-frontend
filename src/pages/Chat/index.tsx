import { useState } from 'react';
import { Container, TypingAnimation } from './styles';

import botImage from '../../assets/boticon.jpg'

interface MessageGroup {
  messages: string[];
  sentByUser?: boolean;
}

export function Chat() {
  const questions = [
    {
      messages: ['Olá! Me chamo bot, vamos começar nosso atendimento?', 'Qual seu nome?'],
      sentByUser: false,
    },
    {
      messages: ['Ok blz', 'Qual seu peso?', 'Nao precisa ter vergonha hein rsrs'],
      sentByUser: false,
    },
    {
      messages: ['Suave', 'Tem sentido fome?', 'Dá uma nota de 0 a 10'],
      sentByUser: false,
    }
  ]

  const initialMessages: MessageGroup[] = [
    {
      messages: ['Olá! Me chamo bot, vamos começar nosso atendimento?', 'Qual seu nome?'],
      sentByUser: false,
    },
    {
      messages: ['Oii', 'Me chamo Guiii', 'Vamboraaaa'],
      sentByUser: true,
    },
    {
      messages: ['Olá! Me chamo bot, vamos começar nosso atendimento?', 'Qual seu nome?'],
      sentByUser: false,
    },
  ]

  const emptyGroup = { messages: [] }

  const [newMessage, setNewMessage] = useState<string>('')
  const [messageGroup, setMessageGroup] = useState<MessageGroup>(emptyGroup)
  const [messages, setMessages] = useState<MessageGroup[]>(initialMessages)
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const sendMessage = () => {
    const userMessage = newMessage
    const userMessageGroup = {
      messages: [userMessage],
      sentByUser: true
    }
    const botMessageGroup = questions[currentQuestion]

    setMessageGroup(userMessageGroup)
    setMessages([...messages, userMessageGroup, botMessageGroup])
    setNewMessage('')
    setMessageGroup(emptyGroup)
    setCurrentQuestion(currentQuestion + 1)
  }

  function typingAnimation() {
    return (
      <TypingAnimation>
        <span></span>
        <span></span>
        <span></span>
      </TypingAnimation>
    )
  }

  return (
    <Container>
      <div className="messagesContainer">
        {messages.map((messageGroup) => {
          console.log(messageGroup.sentByUser)
          return (
            messageGroup.sentByUser
              ?
              <div className={'message userMessage'}>
                {messageGroup.messages.map(message => <p>{message}</p>)}
              </div>
              :
              <div className={'messageGroup'}>
                <img src={botImage} alt="" />
                <div className='message botMessage'>
                  {messageGroup.messages.map((message) => {
                    return <p>{message}</p>
                  })}
                </div>
              </div>

          )
        })}
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='inputForm' action="">
        <input
          type="text"
          name="inputMessage"
          placeholder='Digite uma mensagem...'
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          autoComplete='off'
        />
        <button onClick={sendMessage} type="submit">Enviar</button>
      </form>
    </Container>
  );
}