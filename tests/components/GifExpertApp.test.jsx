import { render, screen } from "@testing-library/react"
import GifExpertApp from "../../src/GifExpertApp";

describe('Pruebas en GifExpertApp', () => {
    test('Debe de mostrar el título de la página', () => {
        render( <GifExpertApp/> );
        screen.debug();
        const titulo = screen.getByText('GifExpert App');
        expect(titulo).toBeTruthy();
    });

    test('Debe de mostrar el nombre de la categoría inicial', () => {
        render( <GifExpertApp /> );
        const category = screen.getByText('One punch');
        expect(category).toBeTruthy();
    });

    test('Debe de mostrar el formulario', () => {
        render( <GifExpertApp/> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        expect(input).toBeTruthy();
        expect(form).toBeTruthy();
    });
    
    
})
