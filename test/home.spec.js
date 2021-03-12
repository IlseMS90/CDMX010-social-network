// importamos funciones que nos ayudaran a simular las interacciones del usario con la UI
import { home } from '../src/home.js';
// importamos funciones que nos ayudaran a simular las interacciones del usario con la UI
import { screen, waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';


describe('home', () => {
  // Creamos un root element en nuestro DOM para que nos sirva de contenedor para nuesta vista/componente principal Login
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
  });

  // Este test puede ser saltado enfocate en los 2 de aabjo
  it('should render', async () => {
    const target = document.getElementById('root');
    const getAllPosts = jest.fn().mockImplementation(() => Promise.resolve([
      { id: '173763276327323', title: 'test'}
    ]));
    const firebase = { getAllPosts };
    await home(target, firebase);

    expect(target.innerHTML).toMatchSnapshot();
  });

  it.skip('should take me to the post when I click the post title', () => {npm
      
    const target = document.getElementById('root');

    // Mockeamos la funcion de login de Firebase la cual sera invocada cuando el usuario haga click sobre el boton "Sign In"
    // Por que?  La idea central es verificar que esta funcion es invocada lo cual haremos linea mas abajo
    const signIn = jest.fn().mockImplementation(() => Promise.resolve('ok'));

    const email = 'test@example.com';
    const password = '123456789';

    // Invoco mi component y lo renderizo pasandole el contenedor como argumento
    Login({ signIn }).render(target);

    // Referencia: https://testing-library.com/docs/ecosystem-user-event/#api
    userEvent.type(screen.getByLabelText('Email'), email);
    userEvent.type(screen.getByLabelText('Password'), password);
    userEvent.click(screen.getByDisplayValue('Sign In'));

    // Verificamos que nuestro mock de la funcion login de firebase es llamada con el email y password que el usuario escribio mas arriba
    // Referencia: https://jestjs.io/docs/en/expect#tohavebeencalledwitharg1-arg2-
    expect(signIn).toHaveBeenCalledWith(email, password);
  });

  it.skip('should show an error message when a user provides invalid credentials', async () => {
    const target = document.getElementById('root');
    const message = 'Invalid credentials!';
    const signIn = jest.fn().mockImplementation(
      (email, password) => Promise.reject({ message }),
    );
    const email = 'test@example.com';
    const password = 'invalidpassword';
    Login({ signIn }).render(target);

    // Referencia: https://testing-library.com/docs/ecosystem-user-event/#api
    userEvent.type(screen.getByLabelText('Email'), email);
    userEvent.type(screen.getByLabelText('Password'), password);
    userEvent.click(screen.getByDisplayValue('Sign In'));

    // Referencia: https://jestjs.io/docs/en/expect#tohavebeencalledwitharg1-arg2-
    expect(signIn).toHaveBeenCalledWith(email, password);

    // Referencia: https://testing-library.com/docs/dom-testing-library/api-async/#waitfor
    await waitFor(() => {
      expect(screen.getByTestId('errorMessage').innerHTML).toBe(message);
    });
  });
});