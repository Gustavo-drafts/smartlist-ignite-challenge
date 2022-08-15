import { Counter } from './components/Counter';
import { Input } from './components/Input';
import { Logo } from './components/Logo';
import "./global.css"

export default function App() {


  return (
    <>
      <header>
        <Logo />
      </header>
      <form>
        <Input />
      </form>
      <main>
        <Counter />
      </main>
    </>
  )
}
