import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#333',
  },
  form: {
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 50,
  },
  image: {
    width: '100%',
    height: 60,
  },
  textInput: {
    padding: 15,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 5,
    minWidth: '70%',
  },

  /* Here, style the background of your button */
  customBtnBG: {
    backgroundColor: '#007aff',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 5,
  },
  /* Here, style the text of your button */
  customBtnText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#fff',
    textAlign: 'center',
  },
});
