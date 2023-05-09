import './App.css';
import { COUNTRIES } from './constants';
import Country from './components/Country';
import Menu from './components/Menu';
import { useEffect, useState } from 'react';

function App() {
  const [state, setState] = useState("")
  const countries = COUNTRIES.reduce((acc, country) => {
    const firstChar = country.name[0];
    acc[firstChar] = firstChar;
    return acc;
  }, {});


  const countriesChars = Object.keys(countries);


  useEffect(() => {
    const observer = new IntersectionObserver(function(entries){
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          setState(entry.target.id[0]);
        }
      })
    }, {threshold: 1.0})

    const items = document.querySelectorAll('.country');
    items.forEach((item) => {
      observer.observe(item);
    })

    return () => observer.disconnect()
  }, [])

  console.log(state, 'lll')
  


  return (
    <div className="App">

      <div className='menu'>
        {
          countriesChars.map((char) => {
            return <Menu key={char} char={char} isActive={state === char} />
          })
        }
      </div>

      <div className='countries'>
        {
          COUNTRIES.map((country) => {
            return <Country key={country.name} country={country} />;
          })
        }
      </div>
    </div>
  );
}

export default App;
