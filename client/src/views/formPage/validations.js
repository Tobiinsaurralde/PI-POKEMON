// Define una función de validación llamada validations que toma un objeto pokemon como argumento
export function validations(pokemon) {
  // Inicializa un array para almacenar los mensajes de error
  const errors = [];

  // Verifica que el nombre solo contenga letras
  if (!pokemon.name.match(/^\D*$/)) {
    errors.push("Name should only contain letters.");
  }

  // Define un array specialNumeric que contiene los campos life, attack, y defense
  const specialNumeric = ["life", "attack", "defense"];

  // Itera sobre los campos especiales y realiza validaciones numéricas
  specialNumeric.forEach((field) => {
    const value = Number(pokemon[field]);
    
    // Verifica que el valor sea un número positivo
    if (isNaN(value) || value < 0) {
      errors.push(
        `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } must be a positive number.`
      );
    }

    // Verifica que el valor no exceda 110
    if (value > 110) {
      errors.push(
        `${field.charAt(0).toUpperCase() + field.slice(1)} cannot exceed 110.`
      );
    }

    // Verifica condiciones específicas para valores iguales a 110
    if (
      value === 110 &&
      (pokemon.life > 60 || pokemon.attack > 60 || pokemon.defense > 60)
    ) {
      errors.push(
        `If one of Life, Attack, or Defense is 110, the others cannot exceed 60.`
      );
    }
  });

  // Calcula la suma de los valores de life, attack y defense
  const sumOfValues = ["life", "attack", "defense"].reduce(
    (acc, field) => acc + Number(pokemon[field]),
    0
  );

  // Verifica que la suma no exceda 230
  if (sumOfValues > 230) {
    errors.push(
      "The combined value of Life, Attack, and Defense cannot exceed 230."
    );
  }

  // Define un array otherNumeric que contiene los campos speed, height, y weight
  const otherNumeric = ["speed", "height", "weight"];

  // Itera sobre los campos y realiza validaciones numéricas
  otherNumeric.forEach((field) => {
    // Verifica que el valor sea un número positivo
    if (isNaN(Number(pokemon[field])) || Number(pokemon[field]) < 0) {
      errors.push(
        `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } must be a positive number.`
      );
    }
  });

  // Verifica que la cantidad de tipos seleccionados no exceda 2
  if (pokemon.types.length > 2) {
    errors.push("You can select up to 2 types.");
  }

  // Retorna el array de errores, o un array vacío si no hay errores
  return Array.isArray(errors) ? errors : [];
}
