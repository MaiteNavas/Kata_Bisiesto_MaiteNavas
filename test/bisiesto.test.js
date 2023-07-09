const YearBisiesto = require('../bisiesto')


describe (
    'Verificar si un año es bisiesto cuando sea divisible por 4 o por 400 devuelva true', () =>{
    test('devuelva true cuando sea divisible por 4', () => {
        /**GHERKING TEST
         * Given/Dado un numero
         * When/Cuando sea divisible por 4
         * Then/entonces devuelva true
        */
        const year_bisiesto = new YearBisiesto()
        let year = 1996;
        let respuesta_esperada = true;

        const respuesta = year_bisiesto.retornarYearBisiesto(year)
        expect(respuesta).toBe(respuesta_esperada)
    })
    test('devuelva true cuando sea divisible por 400', () => {
        /**GHERKING TEST
         * Given/Dado un numero
         * When/Cuando sea divisible por 400
         * Then/entonces devuelva true
        */
        const year_bisiesto = new YearBisiesto()
        let year = 1600;
        let respuesta_esperada = true;

        const respuesta = year_bisiesto.retornarYearBisiesto(year)
        expect(respuesta).toBe(respuesta_esperada)
    })
    test('devuelva false cuando es divisible por 100 pero no por 400', () => {
        /**GHERKING TEST
         * Given/Dado un numero
         * When/Cuando sea divisible por 100 pero no por 400
         * Then/entonces devuelva false
        */
        const year_bisiesto = new YearBisiesto()
        let year = 1800;
        let respuesta_esperada = false;

        const respuesta = year_bisiesto.retornarYearBisiesto(year)
        expect(respuesta).toBe(respuesta_esperada)
    })

})