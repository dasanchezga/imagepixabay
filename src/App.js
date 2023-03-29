import React, {Component} from "react";
import Searcher from "./components/Searcher";
import Results from "./components/Results";

class App extends Component {

  state ={
    term: '' ,
    images: [],
    page: ''
  }

  scroll=()=>{
    const element = document.querySelector('.jumbotron');
    element.scrollIntoView('instant','start');
  }

  //Navegación entre páginas
  prevPage = () =>{
    //leer el state de la pagina actual
    let page = this.state.page;
    //Si la pagina es uno ya no ir hacia atrás
    if(page ===1) return null;
    //Restar uno a la pagina actual
    page-=1;
    //agregar el cambio al state
    this.setState({
      page
    }, () =>{
      this.consultApi();
      this.scroll();
    });
  }
  nextPage = () =>{
    //leer el state de la pagina actual
    let page = this.state.page;
    //Sumar uno a la pagina actual
    page+=1;
    //agregar el cambio al state
    this.setState({
      page
    }, () =>{
      this.consultApi();
      this.scroll();
    });
  }

  //Consulta a la API por el término
  consultApi =() =>{
    const term = this.state.term;
    const page = this.state.page;
    const url = `https://pixabay.com/api/?key=34765281-e62e5f459cb323e6123a683b3&q=${term}&per_page=30&page=${page}`;
    //console.log(url);

    fetch(url)
    .then(resp => resp.json() )
    .then(result => this.setState({ images : result.hits}))
  }

  //Obtencón del término para la búsqueda
  dataSearch = (term) => {
    this.setState({
      term : term,
      page: 1
    }, () =>{
      this.consultApi();
    })
  }

  render(){
    return (
      <div className="App">
        <div className="jumbotron" >
          <h1 className="display-2 text-center"> Buscador de Imágenes</h1>
          <Searcher
            dataSearch={this.dataSearch}
            />
        </div>
        <div className="row justify-content-center">
          <Results 
            images = {this.state.images}
            prevPage={this.prevPage}
            nextPage={this.nextPage}
          />
        </div>
      </div>
    );
  }
}

export default App;
