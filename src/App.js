import React from 'react';
import './App.css';
import ColorBox from './ColorBox';

// render 32 color boxes
// every 300ms a random box will be chosen and assigned a random color

// render 32 boxes in an array and assign the state of those boxes to 32 random elements from our props array
// create a set interval method that will randomly select a box from our array of boxes
// call set state on that box and assign it a value of a random color from the props array

class App extends React.Component {


  constructor(props) {
    super(props);
    // create an array of a slice of the all colors array
    const stateArray = App.defaultProps.allColors.slice(0, 140);

    // assign some initial state to the application, first 32 colors of the color array
    this.state = {
      defaultColors: stateArray
    }

    // create a set interval function
    this.changeColors = setInterval(
      () => changeColors(), 1
    )

    // function that selects a random element from the props array
    const getRandomColor = () => {
      return App.defaultProps.allColors[(Math.floor(Math.random() * App.defaultProps.allColors.length))];
    }

    // create a copy of the state array
    const newStateArray = [...this.state.defaultColors]
    // function that chooses a random element from the state array copy and
    // assigns it's value to a random color using the get random color function

    const changeColors = () => {
      newStateArray[Math.floor(Math.random() * newStateArray.length)] = getRandomColor();
      this.setState({defaultColors: newStateArray});
    }
  }

  render() {
    // create a function that renders 32 color boxes and assigns them a prop based off of state

    return (
      <div className="App">
        <ColorBox colorProps={this.state.defaultColors} />
      </div>
    );
  }

}

App.defaultProps = {
  allColors: ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond",
    "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate",
    "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod",
    "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange",
    "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey",
    "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue",
    "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod",
    "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki",
    "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan",
    "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon",
    "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow",
    "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid",
    "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise",
    "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy",
    "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen",
    "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue",
    "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen",
    "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen",
    "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke",
    "Yellow", "YellowGreen"]
};

export default App;
