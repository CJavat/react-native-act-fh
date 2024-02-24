import { useRef, useState } from "react"

enum Operators {
  add,
  substract,
  multiply,
  divide,
}

export const useCalculator = () => {

  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const lastOperator = useRef<Operators>();

  const clean = () => {
    setNumber('0');
    setPrevNumber('0');
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
    const num1 = Number( number );
    const num2 = Number( prevNumber );

    switch( lastOperator.current ) {
      case Operators.add:
        setNumber( `${ num1 + num2 }` );
        break;

      case Operators.substract:
        setNumber( `${ num2 - num1 }` );
        break;

      case Operators.multiply:
        setNumber( `${ num1 * num2 }` );
        break;
        
      case Operators.divide:
        setNumber( `${ num2 / num1 }` );
        break;
    }

    setPrevNumber('0');
  }

  const setLastNumber = () => {
    if( number.endsWith('.') ) {
      setPrevNumber( number.slice(0,-1) );
    } else {
      setPrevNumber( number );
    }

    setNumber('0');

  }
  
  return {
    // Prop
    number,

    // Met
    buildNumber,
    prevNumber,
    toggleSign,
    clean,
    deleteOperation,
    setLastNumber,
    btnDivide,
    btnMultiply,
    btnSubstract,
    btnAdd,
    calculateResult,
  }
}
