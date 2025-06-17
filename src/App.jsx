import Welcome from '@/components/Welcome'
import Counter from '@/components/Counter'
import Form from '@/components/Form'
import EffectDemo from '@/components/EffectDemo'


function App() {
  

  return (
    <div className="p-4 space-y-6 row-auto">
    <Welcome name="Amar"></Welcome>
    <Counter/>
    <Form />
    <EffectDemo />
   </div>
  );
}

export default App
