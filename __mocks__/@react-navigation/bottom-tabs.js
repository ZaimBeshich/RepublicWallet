export const createBottomTabNavigator = () => {
  const Navigator = ({children}) => children;
  const Screen = ({children}) => children;

  return {
    Navigator,
    Screen,
  };
};
