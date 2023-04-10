const Icon = ({ content = "🤖", color = "teal" }) => {
  const colorClass = {
    teal: "bg-teal-500/10 border-teal-500/10",
    pink: "bg-pink-500/10 border-pink-500/10",
    blue: "bg-blue-500/10 border-blue-500/10",
  }

  return (
    <figure className={`flex flex-shrink-0 items-center justify-center w-8 h-8 border rounded-md ${colorClass[color]}`}>
      {content}
    </figure>
  )
}

export default Icon