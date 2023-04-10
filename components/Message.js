import Icon from '@/components/Icon'

const Message = ({ message, role }) => {
 return (
   <article className={`flex items-start gap-2 p-4 rounded-lg ${role === 'user' ? 'bg-white/5' : ''}`}>
      <Icon
        content={role === 'user' ? '👤' : '🤖'}
        color={role === 'user' ? 'blue' : 'teal'}
      />
      <pre className="space-y-2 font-sans whitespace-pre-wrap">
        {message}
      </pre>
    </article>
 ) 
}

export default Message