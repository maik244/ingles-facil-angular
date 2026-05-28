import { Injectable } from '@angular/core';
import { Tema } from '../models/tema';

@Injectable({
  providedIn: 'root',
})
export class TemaService {
  private temas: Tema[] = [
    {
      id: 0,
      nombre: 'Verbo To Be',
      explicacion: 'Se usa para expresar estados o identidad, cambia dependiendo del pronombre con el que se conjuga, \n '
      +'Estructura:\n'
      +'Forma negativa: agregas Not,  \n' 
      +'Pregunta: el vervo va antes del pronombre am i? are you ? is she?,  \n' 
      +'singular past : was prural past : were',
      tipo: 'tabla',
      tabla: [
        { pronombre: 'I', verbo: 'am', traduccion: 'Yo soy/estoy' },
        { pronombre: 'You', verbo: 'are', traduccion: 'Tú eres/estas' },
        { pronombre: 'He', verbo: 'is', traduccion: 'Él es/esta' },
        { pronombre: 'She', verbo: 'is', traduccion: 'Ella es/esta' },
        { pronombre: 'It', verbo: 'is', traduccion: 'Ello es/esta' },
        { pronombre: 'We', verbo: 'are', traduccion: 'Nosotros somos/estamos' },
        { pronombre: 'You', verbo: 'are', traduccion: 'Ustedes son/están' },
        { pronombre: 'They', verbo: 'are', traduccion: 'Ellos son/están' }
      ]
    },
    {
      id: 1,
      nombre: 'Wh questions ¿?',
      explicacion: 'Estructura: \n'
      +'Si el verbo principal es to be: 1) wh question  2) main verbo  3) subject  4) complement ? \n'
      +'Si el verbo principal es otro verbo usa el do(does) como verbo auxiliar: 1) wh question 2) auxiliary verb 3) subject 4) main verb \n',
      tipo: 'vocabulario',
      vocabulario: [
        'What (Qué / Cuál): What is your name? (¿Cómo te llamas?)',
        'Where (Dónde): Where do you live? (¿Dónde vives?)',
        'When (Cuándo): When is your birthday? (¿Cuándo es tu cumpleaños?)',
        'Who (Quién): Who is she? (¿Quién es ella?)',
        'Why (Por qué): Why are you happy? (¿Por qué estás feliz?)',
        'Which (Cuál): Which color do you like? (¿Qué color te gusta?)',
        'How (Cómo): How are you? (¿Cómo estás?)'
            ]
    },
    {
      id: 2,
nombre: 'Present Simple',
      explicacion: 'Cuando usarlo: estados o acciones permanentes, rutinas, habitos o hechos repetitivos, indicaciones, instrucciones,' 
      +'señales, cosas que pasaran en un tiempo determinado\n'
      +'Estructura:\n'
      +'Afirmativo: sujeto + verbo + complemento \n'
      +'Negativo: suejto + auxiliar do/does not + verbo(infinitivo) + complemento\n'
      +'Negativo con to be: sujeto + verbo(to be) not + complemento\n'
      +'Pregunta: auxiliar do/does + sujeto + verbo(infinitivo) + complemento + ?\n'
      +'Pregunta Preguntas con información (Wh- Questions): Wh- Questions + do/does + sujeto + verbo(infinitivo) + ?'
      +'Pregunta con to be: verbo to be + sujeto + complemento ',
      
      tipo: 'vocabulario',
      vocabulario: [
        '1) Para las oraciones afirmativas en presente simple, la regla de oro es que solo modificamos el verbo cuando el sujeto es la tercera persona del singular (He, She, It) Con los demás sujetos (I, You, We, They), el verbo se queda igual',
        '2) A la gran mayoría de los verbos simplemente se les agrega una -s al final . Verbos que terminan en -o, -sh, -ch, -ss, -x, -z: añade "-es"',
        '3) Para los modal verbs(can, must, may) no se agrega s ni es'
      ]
    },
    {
      id: 3,
      nombre: 'Present Continuous',
      explicacion: 'Se usa para acciones que ocurren en el momento exacto, situaciones temporales o planes futuros cercanos.\n'
      +'Estructura:\n'
      +'Afirmativo: sujeto + am/is/are + verbo(-ing) + complemento\n'
      +'Negativo: sujeto + am/is/are + not + verbo(-ing) + complemento\n'
      +'Pregunta: am/is/are + sujeto + verbo(-ing) + ?\n',
      tipo: 'vocabulario',
      vocabulario: [
        '1) Todos los verbos terminan en ing',
        '2) Regla del -ing: Si el verbo termina en "e", se quita (dance -> dancing).',
        '3) Los verbos que terminan en doble e no se les quita ninguna letra y se agraga ing (see -> seeing)',
        '3) Verbos cortos (CVC): Si termina en Consonante-Vocal-Consonante, se duplica la última letra (run -> running).',
        '4) Los verbos terminados en ie, se coloca en su lugar y + ing (Die -> Dying)',
        '5) Stative Verbs: Verbos como "love", "know" o "want" no se suelen usar en este tiempo.'
        
      ]
    },
    {
      id: 4,
      nombre: 'Present Perfect',
      explicacion: 'Conecta el pasado con el presente: acciones que ocurrieron en un tiempo no específico o que aún continúan.\n'
      +'Estructura:\n'
      +'Afirmativo: sujeto + have/has + verbo(participio) + complemento\n'
      +'Negativo: sujeto + have/has + not + verbo(participio) + complemento\n'
      +'Pregunta: have/has + sujeto + verbo(participio) + ?\n',
      tipo: 'vocabulario',
      vocabulario: [
        '1) Have/Has: Se usa "has" para la tercera persona (He, She, It) y "have" para los demás.',
        '2) Verbo Participio: Es la tercera columna de los verbos (ej: eat-ate-EATEN).',
        '3) Palabras clave: Just (apenas), Already (ya), Yet (todavia, aún no), Ever (alguna vez), How long (cuanto tiempo), since (desde).'
      ]
    },
    {
      id: 5,
      nombre: 'Present Perfect Continuous',
      explicacion: 'Enfatiza la duración de una acción que comenzó en el pasado y continúa o acaba de terminar afectando el presente.\n'
      +'Estructura:\n'
      +'Afirmativo: sujeto + have/has + been + verbo(-ing) + complemento\n'
      +'Negativo: sujeto + have/has + not + been + verbo(-ing) + complemento\n'
      +'Pregunta: have/has + sujeto + been + verbo(-ing) + ?\n',
      tipo: 'vocabulario',
      vocabulario: [
        '1) Se usa para responder a "¿Cuánto tiempo hace que...?".',
        '2) Diferencia: Se centra en el proceso o la actividad, no en el resultado final.',
        '3) For/Since: Se usa "For" para periodos de tiempo (3 hours) y "Since" para puntos de inicio (since 2010).'
      ]
    },    
    {
      id: 6,
      nombre: 'Past Simple',
      explicacion: 'Se usa para acciones que comenzaron y terminaron en un momento específico del pasado.\n'
      +'Afirmativo: sujeto + verbo(pasado) + complemento \n'
      +'Negativo: sujeto + auxiliar did not (didn\'t) + verbo(infinitivo) + complemento\n'
      +'Negativo con to be: sujeto + was/were not + complemento\n'
      +'Pregunta: auxiliar did + sujeto + verbo(infinitivo) + complemento + ?\n'
      +'Pregunta con to be: was/were + sujeto + complemento + ?',
      tipo: 'vocabulario',
      vocabulario: [
        '1) Verbos Regulares: Se les agrega -ed al final en oraciones afirmativas (play -> played, study -> studied).',
        '2) Verbos Irregulares: Cambian su forma por completo en afirmativo y debes memorizarlos (go -> went, eat -> ate).',
        '3) Regla del Auxiliar: Cuando usas el auxiliar "did" o "didn\'t", el verbo principal vuelve a su forma infinitiva sin cambios.'
      ]
    },
    {
      id: 7,
      nombre: 'Past Continuous',
      explicacion: 'Se usa para acciones que estaban ocurriendo en un momento específico del pasado o que fueron interrumpidas por otra acción.\n'
      +'Estructura:\n'
      +'Afirmativo: sujeto + was/were + verbo(-ing) + complemento\n'
      +'Negativo: sujeto + was/were + not + verbo(-ing) + complemento\n'
      +'Pregunta: was/were + sujeto + verbo(-ing) + ?\n',
      tipo: 'vocabulario',
      vocabulario: [
        '1) Was/Were: Se usa "was" para (I, He, She, It) y "were" para (You, We, They).',
        '2) Conectores comunes: Se usa "While" (mientras) para dos acciones continuas y "When" (cuando) para introducir una interrupción en Past Simple.',
        '3) Aplican las mismas reglas de ortografía para el sufijo -ing que en el presente continuo.'
      ]
    },
    {
      id: 8,
      nombre: 'Past Perfect',
      explicacion: 'Se usa para hablar de una acción que ocurrió en el pasado antes de otra acción también en el pasado (el pasado del pasado).\n'
      +'Estructura:\n'
      +'Afirmativo: sujeto + had + verbo(participio) + complemento\n'
      +'Negativo: sujeto + had + not + verbo(participio) + complemento\n'
      +'Pregunta: had + sujeto + verbo(participio) + ?\n',
      tipo: 'vocabulario',
      vocabulario: [
        '1) Auxiliar único: A diferencia del presente, aquí se usa "had" para todos los pronombres sin excepción.',
        '2) Verbo Participio: Se usa la tercera columna de verbos (ej: goen, seen, done) o -ed si el verbo es regular.',
        '3) Palabras clave: Se acompaña frecuentemente de expresiones como "By the time" (para cuando) o "Before" (antes).'
      ]
    },
    {
      id: 9,
      nombre: 'Past Perfect Continuous',
      explicacion: 'Muestra una acción continua en el pasado que comenzó y se desarrolló antes de otra acción o momento en el pasado.\n'
      +'Estructura:\n'
      +'Afirmativo: sujeto + had been + verbo(-ing) + complemento\n'
      +'Negativo: sujeto + had not (hadn\'t) been + verbo(-ing) + complemento\n'
      +'Pregunta: had + sujeto + been + verbo(-ing) + ?\n',
      tipo: 'vocabulario',
      vocabulario: [
        '1) Estructura fija: El bloque "had been" no cambia con ningún pronombre.',
        '2) Enfoque: Enfatiza la duración o el proceso de la primera acción antes de que ocurriera el segundo evento.',
        '3) Ejemplo claro: "I had been studying for two hours when it started to rain" (Había estado estudiando por dos horas cuando empezó a llover).'
      ]
    },   
    {
      id: 10,
      nombre: 'Future Simple',
      explicacion: 'Se usa para decisiones espontáneas, predicciones sin evidencia clara, promesas o hechos futuros.\n'
      +'Afirmativo: sujeto + will + verbo(infinitivo) + complemento \n'
      +'Negativo: sujeto + will not (won\'t) + verbo(infinitivo) + complemento\n'
      +'Pregunta: will + sujeto + verbo(infinitivo) + complemento + ?\n'
      +'Pregunta con to be: will + sujeto + be + complemento + ?',
      tipo: 'vocabulario',
      vocabulario: [
        '1) Verbo invariable: Después de "will" o "won\'t", el verbo principal va estrictamente en infinitivo sin importar el pronombre.',
        '2) Contracción negativa: "Will not" se contrae casi siempre como "won\'t" en el lenguaje hablado.',
        '3) Nota de uso: Para planes e intenciones ya programadas con evidencia previa, se suele usar la estructura "Be going to" en su lugar.'
      ]
    },
    {
      id: 11,
      nombre: 'Future Continuous',
      explicacion: 'Se usa para acciones que estarán en desarrollo en un momento específico del futuro.\n'
      +'Estructura:\n'
      +'Afirmativo: sujeto + will be + verbo(-ing) + complemento\n'
      +'Negativo: sujeto + will not (won\'t) be + verbo(-ing) + complemento\n'
      +'Pregunta: will + sujeto + be + verbo(-ing) + ?\n',
      tipo: 'vocabulario',
      vocabulario: [
        '1) Estructura invariable: El bloque "will be" se mantiene exactamente igual para todos los pronombres.',
        '2) Significado: Equivale a la estructura en español "estaré haciendo", "él estará jugando", etc.',
        '3) Expresiones de tiempo comunes: Se suele acompañar de frases específicas como "This time tomorrow" (A esta hora mañana) o "At 5 PM".'
      ]
    },
    {
      id: 12,
      nombre: 'Future Perfect',
      explicacion: 'Se usa para acciones que ya habrán terminado en un punto determinado del futuro (una acción completada antes de otra acción futura).\n'
      +'Estructura:\n'
      +'Afirmativo: sujeto + will have + verbo(participio) + complemento\n'
      +'Negativo: sujeto + will not (won\'t) have + verbo(participio) + complemento\n'
      +'Pregunta: will + sujeto + have + verbo(participio) + ?\n',
      tipo: 'vocabulario',
      vocabulario: [
        '1) Auxiliar fijo: Se usa "will have" para todas las personas gramaticales; nunca se cambia a "has" en tercera persona.',
        '2) Forma del verbo: Requiere el uso de la tercera columna de verbos (participio) o terminación -ed si es regular.',
        '3) Clave temporal: Se utiliza casi siempre con la partícula "By" (Para/Antes de), como por ejemplo "By next year" (Para el próximo año).'
      ]
    },
    {
      id: 13,
      nombre: 'Future Perfect Continuous',
      explicacion: 'Se usa para mostrar cuánto tiempo habrá durado una acción continua en un punto específico del futuro.\n'
      +'Estructura:\n'
      +'Afirmativo: sujeto + will have been + verbo(-ing) + complemento\n'
      +'Negativo: sujeto + will not (won\'t) have been + verbo(-ing) + complemento\n'
      +'Pregunta: will + sujeto + have been + verbo(-ing) + ?\n',
      tipo: 'vocabulario',
      vocabulario: [
        '1) Bloque auxiliar invariable: La combinación "will have been" no sufre modificaciones con ningún pronombre.',
        '2) Lógica del tiempo: Imagina que viajas a un momento del futuro y miras hacia atrás para contar cuánto tiempo llevabas haciendo esa acción.',
        '3) Ejemplo real: "Mañana a las 5:00 PM, habré estado jugando por 3 horas" (La acción se mide desde un punto que aún no ha ocurrido).',
        '4) Cuándo usarlo: Sirve para decir cuánto tiempo llevarás haciendo una acción en un momento específico del futuro.'

      ]
    }

  ];
  getTemas(): Tema[] {
    return this.temas;
  }

  getTemaById(id: number): Tema | undefined {
    return this.temas.find(t => t.id === id);
  }
}
