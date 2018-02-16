import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Title from './title';
import Search from './search';
import MatrixCol from './matrixCol';
import PropTypes from 'prop-types'

const ROOT_URL = '/flickr/'

const App = ({ setInput, addImagesToColumn, removeImages, word, images }) => {

    function getPictures(method) {
          axios.get(ROOT_URL + word ,{params:{"method":method}}).then(response => {
            console.log(response);
            removeImages()
            for(var i = 0; i < 8; i++) {
              var imgs = response.data.photos.photo.slice(i*8, (i+1)*8);
              // this.state.images[i]=imgs;
              addImagesToColumn(imgs, i);
            }
            }
          ).catch(function(error) {
              console.log(error);
          });
    }


    return (
      <div className="App">
          <div>
              <div className="row">
                  <Title/>
              </div>
              <div className="row">
                  <br/></div>
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-2"></div>
              </div>
              <div className="row">
                <div>
                  <Search val={word} onTextInput={setInput} click={getPictures}/>
                </div>

              </div>
          </div>

          <div className="row"><br/></div>

          <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-1"><MatrixCol images={images ? images[0] : []}/></div>
              <div className="col-md-1"><MatrixCol images={images ? images[1] : []}/></div>
              <div className="col-md-1"><MatrixCol images={images ? images[2] : []}/></div>
              <div className="col-md-1"><MatrixCol images={images ? images[3] : []}/></div>
              <div className="col-md-1"><MatrixCol images={images ? images[4] : []}/></div>
              <div className="col-md-1"><MatrixCol images={images ? images[5] : []}/></div>
              <div className="col-md-1"><MatrixCol images={images ? images[6] : []}/></div>
              <div className="col-md-1"><MatrixCol images={images ? images[7] : []}/></div>
              <div className="col-md-2"></div>
          </div>

      </div>
    )
}

App.propTypes = {
  setInput: PropTypes.func.isRequired,
  addImagesToColumn: PropTypes.func.isRequired,
  removeImages: PropTypes.func.isRequired,
  word: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired
}


//
//
// class App extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             word: '',
//             images:[]
//         }
//         this.handleInput = this.handleInput.bind(this);
//         this.getPictures = this.getPictures.bind(this);
//     }
//
//
//
//     handleInput(x) {
//         this.setState({
//             word: x
//         }, () => {
//             console.log(this.state.word);
//         });
//     }
//
//     render() {
//         return (
//             <div className="App">
//                 <div>
//                     <div className="row">
//                         <Title/>
//                     </div>
//                     <div className="row">
//                         <br/></div>
//                     <div className="row">
//                       <div className="col-md-2"></div>
//                       <div className="col-md-2"></div>
//                     </div>
//                     <div className="row">
//                       <div>
//                         <Search val={this.state.word} onTextInput={this.handleInput} click={this.getPictures.bind(this)}/>
//                       </div>
//
//                     </div>
//                 </div>
//
//                 <div className="row"><br/></div>
//
//                 <div className="row">
//                     <div className="col-md-2"></div>
//                     <div className="col-md-1"><MatrixCol images={this.state.images[0]}/></div>
//                     <div className="col-md-1"><MatrixCol images={this.state.images[1]}/></div>
//                     <div className="col-md-1"><MatrixCol images={this.state.images[2]}/></div>
//                     <div className="col-md-1"><MatrixCol images={this.state.images[3]}/></div>
//                     <div className="col-md-1"><MatrixCol images={this.state.images[4]}/></div>
//                     <div className="col-md-1"><MatrixCol images={this.state.images[5]}/></div>
//                     <div className="col-md-1"><MatrixCol images={this.state.images[6]}/></div>
//                     <div className="col-md-1"><MatrixCol images={this.state.images[7]}/></div>
//                     <div className="col-md-2"></div>
//                 </div>
//
//             </div>
//         );
//     }
// }

export default App;
