importar  Reaccionar  desde  'reaccionar' ;
importar  ReactDOM  desde  'react-dom/client' ;
importar  './index.css' ;
importar la  aplicación  desde  './App' ;
importar  reportWebVitals  desde  './reportWebVitals' ;

 raíz  constante =  ReactDOM . createRoot ( documento . getElementById ( 'raíz' ) ) ;
raíz _ hacer (
  < Reaccionar . Modo estricto >
    < Aplicación  / >
  < / Reaccionar . Modo estricto >
) ;

// Si desea comenzar a medir el rendimiento en su aplicación, pase una función
// para registrar los resultados (por ejemplo: reportWebVitals(console.log))
// o enviar a un punto final de análisis. Más información: https://bit.ly/CRA-vitals
reportWebVitals ( ) ;