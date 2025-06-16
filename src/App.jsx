import "./App.css"
import Welcome from '@/components/Welcome'
import Counter from '@/components/Counter'
import Form from '@/components/Form'
import EffectDemo from '@/components/EffectDemo'


function App() {
  

  return (
   <>
    <Welcome name="Amar"></Welcome>
    <Counter/>
    <Form />
    <EffectDemo />
   </>
  );
}

export default App
