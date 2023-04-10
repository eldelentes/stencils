import Message from '@/components/Message'

const MESSAGES = [
  {
    id: 1,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    role: 'user',
  },
  {
    id: 2,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    role: 'assistant',
  }
]

const MessageList = ({ messages = [] }) => {
  return (
    <div>
      {MESSAGES.map((message) => (
        <Message message={message.content} key={message.id} role={message.role} />
      ))}
    </div>
  )
}

export default MessageList