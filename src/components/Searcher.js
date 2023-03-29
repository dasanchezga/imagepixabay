import React, { Component } from 'react';

class Searcher extends Component{

    searchRef = React.createRef();

    handleSearch = (e) =>{   
        //se lee el valor del input para enviarlo al principal component
        e.preventDefault();
        const data = this.searchRef.current.value;
        this.props.dataSearch (data);
    }

    render(){
        return( 
            <form onSubmit={this.handleSearch}>
                <div className='row justify-content-center' >
                    <div className='form-label col-md-8'>
                        <input ref={this.searchRef} type='text' className='form-control form-control-lg' 
                        placeholder='Busca una Imágen. Ejemplo: Arte'></input>
                    </div>
                    <div className='form-group col-md-4'>
                        <input type='submit' className='btn btn-lg btn-danger btn-block' 
                        value="Buscar..."></input>
                    </div>
                </div>
            </form>
        );
    }

}

export default Searcher;