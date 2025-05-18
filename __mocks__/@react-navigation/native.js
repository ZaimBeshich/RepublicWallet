export const NavigationContainer = ({children}) => children;
export const useNavigation = () => ({
  navigate: jest.fn(),
  goBack: jest.fn(),
});
export const useRoute = () => ({
  params: {},
});

export const DefaultTheme = {
  dark: false,
  colors: {
    primary: '#000',
    background: '#fff',
    card: '#fff',
    text: '#000',
    border: '#000',
    notification: '#000',
  },
};
