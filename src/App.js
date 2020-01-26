import React from 'react';


const App = () => {
  const profiles = [
    {
      name: 'taro',
      age: 10
    },
    {
      name: 'jiro',
      age: 22
    },
    {
      name: 'hanako',
    }
  ]
  return (
    <React.Fragment>
      {
        profiles.map((profile, index) => {
          return <User key={index} name={profile.name} age={profile.age} />
        })
      }
    </React.Fragment>
  )
}

const User = (props) => {
  return (
    <p>
      Hi, I am { props.name }
      I am { props.age } years old
    </p>
  )
}

User.defaultProps = {
  age: 1
}

export default App;
