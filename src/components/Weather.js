import React from 'react';

class Weather extends React.Component{
    
    render(){
        return(
            <div className="weather__info">
               {
                    this.props.city && this.props.country && <p className="weather__key">Location:
                        <span className="weather__value"> {this.props.city} {this.props.country} </span>
                         </p>
                     }
               {
                    this.props.temperature && <p className="weather__key">Temperature:
                         <span className="weather__value"> {Math.round(this.props.temperature -273.15) } </span> ℃
                         </p>
                     }
               {
                    this.props.humidity && <p className="weather__key">Humidity:
                         <span className="weather__value"> {this.props.humidity} </span>
                          </p> 
                        }
               { 
                   this.props.description && <p className="weather__key">Conditions:
                        <span className="weather__value"> {this.props.description} </span>
                        </p>
                    }
               {
                    this.props.error && <p className="weather__error">{this.props.error}
                    </p>
                }
                
                  <p className="weather__key">My GitHub <a className="weather__key" href="https://github.com/alexkozopolianski">page</a></p>
            </div>

        );
    }
};

export default Weather;