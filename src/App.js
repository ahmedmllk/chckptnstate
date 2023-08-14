import './App.css';
import CaractersList from './components/CaractersList';

function App() {
  const players=[
    {
      name:'Mona',
      element:'Hydro',
      elmage:'https://i.pinimg.com/originals/8a/6c/25/8a6c2525df02ac9c4084319d10cecb2b.png',
      region:'Monstadt',
      poster:'https://th.bing.com/th/id/OIP.d-DBBFa8yCtvH1ydH4RFwwHaEK?pid=ImgDet&rs=1',
    },
    {
      name:'xiao',
      element:'Anemo',
      elmage:'https://th.bing.com/th/id/R.f8c0b5dd22a4f260e0e6c8720800b25b?rik=ro8Lx0bmRRxhyg&pid=ImgRaw&r=0',
      region:'Liye',
      poster:'https://th.bing.com/th/id/OIP.E6zjXUUr0HwmalO0jPAHIQHaEK?pid=ImgDet&rs=1'
    },
    {
      name:'Yoamia',
      element:'Pyro',
      elmage:'https://th.bing.com/th/id/R.49f3e8f007a356ef484c971857297e8b?rik=RnIRNklX0GQnLQ&pid=ImgRaw&r=0',
      region:'Inazuma',
      poster:'https://cdn.wccftech.com/wp-content/uploads/2021/07/WCCFgenshinimpact37.jpg'
    },
    {
      name:'Taghnari',
      element:'Dendro',
      elmage:'https://genshinimpact.wiki.fextralife.com/file/Genshin-Impact/dendro-element-genshin-impact-wiki-guide.png',
      region:'Sumeru',
      poster:'https://th.bing.com/th/id/OIF.Chwk83h7Vu0EDVVkA5WEiA?pid=ImgDet&rs=1'
    }
  ]
  return (
    <div className="App">
      <CaractersList players={players}/>
    </div>
  );
}

export default App;
