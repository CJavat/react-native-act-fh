import { useEffect, useRef, useState } from "react"

enum Operators {
  add = '+',
  substract = '-',
  multiply = 'x',
  divide = '÷',
}

export const useCalculator = () => {

  const [formula, setFormula] = useState('');

  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const lastOperator = useRef<Operators>();

  //! CÓDIGO PIXEL
  useEffect(() => {
    setFormula( number );

    if( lastOperator.current ) {
      const firstFormulaPart = formula.split(' ').at(0);
      setFormula(`${ firstFormulaPart } ${ lastOperator.current } ${ number }`);
    } else {
      setFormula( number );
    }
  }, [ number ])
  
  useEffect(() => {
    const subResult = calculateSubResult();
    setPrevNumber( subResult.toString() );
  }, [ formula ])
  


  const clean = () => {
    setNumber('0');
    setPrevNumber('0');

    //! CÓDIGO PIXEL
    lastOperator.current = undefined;
    setFormula('');
  }

  const deleteOperation = () => {
    let negativo = '';
    let numeroTemp = number;

    if( number.includes( '-' ) ) {
      negativo = '-';
      numeroTemp = number.substring(1);
    }

    if( numeroTemp.length > 1 ) {
      setNumber( negativo + number.slice(0, -1) );
    } else {
      setNumber('0');
    }
  };

  const toggleSign = () => {
    if( number.includes('-') ) {
      return setNumber( number.replace('-', ''));
    }

    setNumber( '-' + number );
  };

  const buildNumber = ( numberString: string ) => {

    if( number.includes('.') && numberString === '.' ) return;
    
    if( number.startsWith('0') || number.startsWith('-0') ) {
      // Punto decimal
      if( numberString === '.' ) {
        return setNumber( number + numberString );
      }

      // Evaluar si es otro cero y no hay punto
      if( numberString === '0' && number.includes('.') ) {
        return setNumber( number + numberString );
      }

      // Evaluar si es diferente de cero, no hay punto y es el primer numero
      if( numberString !== '0' && !number.includes('.') ) {
        return setNumber( numberString );
      }

      // Evitar 0000
      if( numberString === '0' && number.includes('.') ) return;

      return setNumber( number + numberString );
    }
  
    setNumber( number + numberString );
  };

  const btnDivide = () => {
    setLastNumber();
    lastOperator.current = Operators.divide;
  }

  const btnMultiply = () => {
    setLastNumber();
    lastOperator.current = Operators.multiply;
  }

  const btnSubstract = () => {
    setLastNumber();
    lastOperator.current = Operators.substract;
  }
  
  const btnAdd = () => {
    setLastNumber();
    lastOperator.current = Operators.add;
  }

  const calculateResult = () => {
    //! CÓDIGO PIXEL
    const result = calculateSubResult();
    setFormula(`${ result }`);

    lastOperator.current = undefined;
    setPrevNumber('0');

  }

  const setLastNumber = () => {
    calculateResult(); 

    if( number.endsWith('.') ) {
      setPrevNumber( number.slice(0,-1) );
    } else {
      setPrevNumber( number );
    }

    setNumber('0');

  }

  const calculateSubResult = (): number => {
    const [ firstValue, operation, secondValue ] = formula.split(' ');

    const num1 = Number( firstValue );
    const num2 = Number( secondValue );

    if( isNaN( num2 ) ) return num1;


    switch( operation ) {
      case Operators.add:
          return num1 + num2;

      case Operators.substract:
          return num1 - num2;

      case Operators.multiply:
          return num1 * num2;
        
      case Operators.divide:
          return num1 / num2;

      default:
        throw new Error('Operation not implemented');
    }
  };

  
  return {
    // Prop
    number,
    formula,
    prevNumber,

    // Met
    buildNumber,
    toggleSign,
    clean,
    deleteOperation,
    setLastNumber,
    btnDivide,
    btnMultiply,
    btnSubstract,
    btnAdd,
    calculateResult,
    calculateSubResult,
  }
}
