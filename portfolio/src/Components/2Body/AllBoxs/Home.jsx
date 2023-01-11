import React, { useContext } from "react";

const theme = {
  red: {
    backgroundColor: "red",
  },
  green: {
    backgroundColor: "green",
  },
};

const ThemeContext = React.createContext(theme);

function ThemedText({ children }) {
  const value = useContext(ThemeContext);
  return (
    <p style={value} className="h-text-2">
      {children}
    </p>
  );
}

export class Home extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value={theme.red}>
        <div className="home-box">
          <div className="home-text">
            <p className="h-text-1">Hello, i am </p>
            <ThemedText>
              Jordy Rocacher <br />
              Developpeur Front End
            </ThemedText>
            <p className="h-text-3">
              in self taught, I learned web development alone, without training
              or diploma, only with my motivation and the desire to design and
              create through programming languages
            </p>
          </div>
          <div className="home-img"></div>
        </div>
      </ThemeContext.Provider>
    );
  }
}
/*<p className="h-text-2">
  Jordy Rocacher <br />
  Developpeur Front End
</p>;*/
