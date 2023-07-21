import { TodoItem } from './TodoItem'
import { useState } from 'react'
import { useTodo } from '../context'
import { SiStarship } from 'react-icons/si'

export const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([])
  return <div>TodoList</div>
}
